import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import {
  FaEye,
  FaEyeSlash,
  FaUserShield,
  FaUser,
  FaLock,
} from "react-icons/fa";

export default function Login({ setIsVisible, isVisible }) {
  const [loginData, setLoginData] = useState({
    admin_username: "",
    admin_password: "",
  });

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/login", loginData, {
        withCredentials: true,
      });
      login(true);
      navigate(res.data.navigate);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden"; // 🚫 disable scroll
    } else {
      document.body.style.overflow = "auto"; // ✅ re-enable scroll
    }

    // Cleanup if the component unmounts
    return () => (document.body.style.overflow = "auto");
  }, [isVisible]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-200  "
        onClick={() => setIsVisible(false)}
      />

      {/* Modal */}
      <div className="fixed top-10 inset-0 z-200 flex items-center justify-center p-4">
        <div className="w-full max-w-md relative">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-12 right-0 p-2 text-gray-300 hover:text-white transition-colors duration-200 z-10"
          >
            <IoMdClose className="text-2xl" />
          </button>

          {/* Login Card */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl">
            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-geay-400/20 rounded-full blur-sm"></div>
                  </div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                    Gravekeep
                  </h1>
                </div>
                <p className="text-gray-400 text-sm">Garden of Memories</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Username Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Username
                  </label>
                  <div className="relative ">
                    <FaUser className="absolute translate-x-4.5 translate-y-4 text-white/30" />
                    <input
                      type="text"
                      name="admin_username"
                      value={loginData.admin_username}
                      placeholder="Enter admin username"
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200 pl-12"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute translate-x-4.5 translate-y-4 text-white/30" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="admin_password"
                      value={loginData.admin_password}
                      placeholder="Enter admin password"
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200 pl-12 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="text-red-400 text-sm text-center">
                    Invalid credentials. Please try again.
                  </div>
                )}

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Authenticating...</span>
                    </div>
                  ) : (
                    "Access System"
                  )}
                </button>
              </form>

              {/* Footer */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <p className="text-center text-xs text-gray-400">
                  Secure access to Gravekeep management system
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
