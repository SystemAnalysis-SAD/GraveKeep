import {
  FaSearch,
  FaMapMarkerAlt,
  FaHeart,
  FaUsers,
  FaArrowRight,
  FaLeaf,
  FaArrowDown,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  // Animation variants
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  };

  const slideInLeft = {
    initial: { x: -60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const slideInRight = {
    initial: { x: 60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <motion.img
            src="home.webp"
            alt="Garden of Memories Memorial Park"
            className="h-full w-full object-cover scale-110"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-emerald-900/20 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          ></motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center px-6">
          <motion.div
            className="text-center text-white max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Main Heading with Enhanced Styling */}
            <div className="mb-8">
              <motion.h1
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter"
              >
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-2xl">
                  GraveKeep
                </span>
              </motion.h1>

              {/* Simplified Tagline */}
              <motion.div
                className="flex flex-col items-center space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="flex items-center gap-2 text-emerald-100">
                  <FaMapMarkerAlt className="text-sm" />
                  <span className="text-lg font-medium">
                    Garden of Memories, Taguig
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Simplified Description */}
            <motion.p
              className="text-sm md:text-lg text-gray-200 max-w-xl mx-auto mb-12 leading-relaxed font-light backdrop-blur-sm bg-black/20 rounded-2xl p-6 border border-emerald-400/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              A compassionate digital memorial to honor and locate departed
              loved ones with dignity and peace.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <motion.button
                className="group bg-gradient-to-r cursor-pointer from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaSearch className="text-sm" />
                <span className="text-sm">Search Memorials</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="animate-bounce">
            <IoIosArrowDown className="text-emerald-400 text-3xl" />
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div
        className="py-20 px-4 bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft}>
              <motion.div
                className="w-16 h-1 bg-emerald-500 mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              ></motion.div>
              <motion.h2
                className="text-2xl md:text-4xl font-bold text-white mb-6"
                variants={fadeInUp}
              >
                About <span className="text-emerald-400">GraveKeep</span>
              </motion.h2>
              <motion.p
                className="text-sm text-gray-300 mb-6 leading-relaxed"
                variants={fadeInUp}
              >
                GraveKeep is a dedicated memorial search system created for the
                <span className="text-emerald-300 font-semibold">
                  {" "}
                  Garden of Memories Memorial Park in Taguig City
                </span>
                . Our mission is to provide families with a respectful and
                efficient way to locate their departed loved ones.
              </motion.p>
              <motion.p
                className="text-sm text-gray-300 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                In times of remembrance, we believe technology should serve
                compassion. Our platform helps you find peace by making the
                search process simple, dignified, and accessible.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                variants={staggerContainer}
              >
                <motion.div
                  className="flex items-center gap-2 text-emerald-400"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white text-md">
                    Compassionate Design
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 text-emerald-400"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white">Easy Navigation</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 text-emerald-400"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white">Respectful Service</span>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className="relative" variants={slideInRight}>
              <motion.div
                className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-8 h-80 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-center text-white"
                  variants={scaleIn}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <FaHeart className="text-6xl mx-auto mb-4 opacity-80" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">
                    Garden of Memories
                  </h3>
                  <p className="text-emerald-100">Taguig City</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Simple Purpose Section */}
      <motion.div
        className="py-20 px-4 bg-black"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="w-16 h-1 bg-emerald-500 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-white mb-8"
            variants={fadeInUp}
          >
            Our Purpose
          </motion.h2>
          <motion.p
            className="text-sm text-gray-300 mb-12 leading-relaxed"
            variants={fadeInUp}
          >
            We provide a simple, dignified way for families to locate their
            loved ones within Garden of Memories Memorial Park. No complicated
            features, just a compassionate tool to help you find peace and
            preserve memories.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={staggerContainer}
          >
            <motion.div
              className="text-center"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaSearch className="text-2xl text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Easy Search
              </h3>
              <p className="text-gray-400 text-sm">
                Simple and intuitive search to find your loved ones
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <FaMapMarkerAlt className="text-2xl text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Precise Location
              </h3>
              <p className="text-gray-400 text-sm">
                Accurate grave locations within the memorial park
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaHeart className="text-2xl text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">
                With Compassion
              </h3>
              <p className="text-gray-400 text-sm">
                Designed with respect and understanding for families
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="py-20 px-4 bg-gradient-to-br from-gray-900 to-emerald-900/20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Ready to Find Your Loved One?
          </motion.h2>
          <motion.p
            className="text-sm text-emerald-100 mb-8"
            variants={fadeInUp}
          >
            Begin your search with dignity and respect at Garden of Memories
            Memorial Park.
          </motion.p>
          <motion.button
            className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-emerald-500/30 mx-auto"
            variants={scaleIn}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Searching
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowRight />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
