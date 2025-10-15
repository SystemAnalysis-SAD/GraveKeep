import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaEye, FaEyeSlash, FaUser, FaLock } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function Login({ setIsVisible, isVisible }) {
  const [loginData, setLoginData] = useState({
    admin_username: "",
    admin_password: "",
  });

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [internalIsVisible, setInternalIsVisible] = useState(isVisible);
  const { login } = useAuth();

  // Sync with external isVisible prop
  useEffect(() => {
    if (isVisible) {
      setInternalIsVisible(true);
    }
  }, [isVisible]);

  const handleExitComplete = () => {
    if (!internalIsVisible) {
      setIsVisible(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    try {
      const result = await login(loginData);
      navigate(result.navigate);
    } catch (error) {
      console.error("Login failed:", error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  // ESC key to close modal
  useEffect(() => {
    const handleEscButton = (e) => {
      if (e.key === "Escape") triggerClose();
    };
    if (internalIsVisible) window.addEventListener("keydown", handleEscButton);
    return () => window.removeEventListener("keydown", handleEscButton);
  }, [internalIsVisible]);

  // Disable scroll when modal open
  useEffect(() => {
    document.body.style.overflow = internalIsVisible ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [internalIsVisible]);

  // Close handler
  const triggerClose = () => {
    setInternalIsVisible(false);
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {internalIsVisible && (
        <motion.div
          key="login-modal"
          className="fixed inset-0 z-[200]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: -200 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={triggerClose}
          />

          {/* Modal container */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9, y: -200 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -200 }}
            transition={{
              duration: 0.3,
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            onClick={triggerClose}
          >
            <div
              className="w-full max-w-md relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={triggerClose}
                className="absolute -top-12 right-0 p-2 cursor-pointer text-gray-300 hover:text-white transition-colors duration-200 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoMdClose className="text-2xl" />
              </motion.button>

              {/* Login Card */}
              <motion.div
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <motion.h1
                        className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        Gravekeep
                      </motion.h1>
                    </div>
                    <motion.p
                      className="text-gray-400 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Garden of Memories
                    </motion.p>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-6">
                    {/* Username Field */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="text-sm font-medium text-gray-300">
                        Username
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/30" />
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
                    </motion.div>

                    {/* Password Field */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label className="text-sm font-medium text-gray-300">
                        Password
                      </label>
                      <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/30" />
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
                    </motion.div>

                    {/* Error Message */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-red-400 text-sm text-center overflow-hidden"
                        >
                          Invalid credentials. Please try again.
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Login Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-emerald-500 to-emerald-300 hover:from-emerald-600 hover:to-emerald-400 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Authenticating...</span>
                          </div>
                        ) : (
                          "Login"
                        )}
                      </button>
                    </motion.div>
                  </form>

                  {/* Footer */}
                  <motion.div
                    className="mt-6 pt-6 border-t border-gray-700/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <p className="text-center text-xs text-gray-400">
                      Secure access to Gravekeep management system
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
