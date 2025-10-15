import { motion } from "framer-motion";
import { FaHome, FaSearch, FaBan, FaArrowLeft, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useRef, useState } from "react";

export default function Forbidden() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    initial: { y: 0 },
    float: {
      y: [-8, 8, -8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-md mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Lock Icon with Pulse Effect */}
        <motion.div
          className="mb-8 relative"
          variants={iconVariants}
          initial="initial"
          animate="float"
        >
          <motion.div
            variants={pulseVariants}
            initial="initial"
            animate="pulse"
            className="absolute inset-0 bg-red-500/20 rounded-full blur-xl"
          />
          <FaLock className="text-8xl text-red-400 mx-auto opacity-80 relative z-10" />
        </motion.div>

        {/* 403 Text */}
        <motion.h1
          className="text-8xl font-black text-white mb-4"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
            403
          </span>
        </motion.h1>

        {/* Message */}
        <motion.h2
          className="text-2xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          Access Forbidden
        </motion.h2>

        <motion.p
          className="text-gray-400 text-sm md:text-lg mb-8 leading-relaxed"
          variants={itemVariants}
        >
          You don't have permission to access this resource. This area is
          restricted to authorized users only.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col items-center sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
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
        </motion.div>

        {/* Additional Help Text */}
        <motion.p
          className="text-gray-500 text-sm mt-8"
          variants={itemVariants}
        >
          If you believe this is an error, please contact support.
        </motion.p>
      </motion.div>
    </div>
  );
}
