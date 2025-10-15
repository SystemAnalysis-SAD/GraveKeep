import { motion } from "framer-motion";
import { FaHome, FaSearch, FaGhost, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function NotFound() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
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

  const ghostVariants = {
    initial: { y: 0 },
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
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
        {/* Animated Ghost Icon */}
        <motion.div
          className="mb-8"
          variants={ghostVariants}
          initial="initial"
          animate="float"
        >
          <FaGhost className="text-8xl text-emerald-400 mx-auto opacity-80" />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          className="text-8xl font-black text-white mb-4"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
            404
          </span>
        </motion.h1>

        {/* Message */}
        <motion.h2
          className="text-2xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          className="text-gray-400 text-sm md:text-lg mb-8 leading-relaxed"
          variants={itemVariants}
        >
          The page you're looking for seems to have wandered off into the
          digital afterlife.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col items-center sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Link to="/">
            <motion.button
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHome className="text-xs" />
              Back to Home
            </motion.button>
          </Link>

          <Link to="/memorial/search">
            <motion.button
              className="flex items-center gap-2 border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaSearch className="text-xs" />
              Search Memorials
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
