import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext();
axios.defaults.headers.common["Content-Type"] = "application/json";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false); // ✅ Add refreshing state

  // Initialize user from cookie on app start
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const userDataCookie = Cookies.get("userData");

        if (userDataCookie) {
          const decodedData = decodeURIComponent(userDataCookie);
          const userData = JSON.parse(decodedData);
          setUser(userData);

          // Check if token is about to expire (within 5 minutes)
          if (userData.token_expires) {
            const expiresIn = userData.token_expires * 1000 - Date.now();
            if (expiresIn < 5 * 60 * 1000) {
              console.log("Token expiring soon, refreshing...");
              await refreshTokens();
            }
          }
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const refreshTokens = async () => {
    if (isRefreshing) {
      console.log("Already refreshing tokens, skipping...");
      return false;
    }

    setIsRefreshing(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/refresh",
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.user) {
        setUser(response.data.user);
        console.log("Tokens refreshed successfully");
        return true;
      }
      return false;
    } catch (error) {
      console.error("Token refresh failed:", error);
      return false;
    } finally {
      setIsRefreshing(false);
    }
  };

  const login = async (loginData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        loginData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const cookie = Cookies.get("userData");
      if (cookie) {
        const decoded = decodeURIComponent(cookie);
        const parsed = JSON.parse(decoded);
        setUser(parsed); // ✅ proper object
        console.log("User set:", parsed);
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      // Clear local state first to prevent loops
      setUser(null);
      Cookies.remove("userData");

      // Then call backend logout
      await axios.post(
        "http://localhost:5000/logout",
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Logout error:", error);
      // Even if backend logout fails, ensure frontend is logged out
      setUser(null);
      Cookies.remove("userData");
    }
  };

  // ✅ FIXED: Axios interceptor for automatic token refresh
  useEffect(() => {
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        // ✅ Only handle 401 errors and not already retrying
        if (
          error.response?.status === 401 &&
          !originalRequest._retry &&
          !isRefreshing
        ) {
          originalRequest._retry = true;
          console.log("Auto-refreshing tokens...");

          const refreshSuccess = await refreshTokens();
          if (refreshSuccess) {
            return axios(originalRequest);
          } else {
            // If refresh fails, clear auth state and don't retry
            console.log("Refresh failed, logging out...");
            setUser(null);
            Cookies.remove("userData");
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [isRefreshing]); // ✅ Add dependency

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        refreshTokens,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
