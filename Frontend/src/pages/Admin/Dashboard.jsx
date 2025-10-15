import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout, loading } = useAuth();
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      setTimeout(async () => {
        await logout();
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error("Logout failed:", err);
      setIsLoading(false);
      navigate("/");
    }
  };

  useEffect(() => {
    document.title = "Gravekeep - Dashboard";

    const fetchData = async () => {
      setDashboardLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/dashboard", {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        setDashboardData(res.data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        if (err.response?.status === 401) {
          await logout();
          navigate("/");
        }
      } finally {
        setDashboardLoading(false);
      }
    };

    // Only fetch data when we have a confirmed user
    if (user && !loading) {
      fetchData();
    }
  }, [user, loading, logout, navigate]);

  // Show initial loading state (AuthContext is still checking authentication)
  if (loading) {
    return (
      <div className="h-screen w-full bg-indigo-50 flex items-center justify-center">
        <div className="text-xl">Checking authentication...</div>
      </div>
    );
  }

  // Show dashboard loading state (we have a user but fetching dashboard data)
  if (dashboardLoading && user) {
    return (
      <div className="h-screen w-full bg-indigo-50 flex items-center justify-center">
        <div className="text-xl">Loading dashboard...</div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className="h-screen w-full bg-indigo-50 text-slate-700 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="mt-4 text-xl">Welcome, {user.username}!</p>

      <p className="text-sm text-gray-600">User ID: {user.admin_id}</p>

      {/* Display dashboard data if available */}
      {dashboardData && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">Dashboard Stats</h2>
          {/* Add your dashboard content here */}
        </div>
      )}

      {isLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
        >
          Logout
        </button>
      )}
    </div>
  );
}
