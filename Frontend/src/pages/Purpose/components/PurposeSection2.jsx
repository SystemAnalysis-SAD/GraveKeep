import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaDirections, FaLocationArrow } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function PurposeSection2() {
  return (
    <motion.section
      className="h-screen snap-start flex items-center justify-center bg-black relative overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          className="flex justify-center mb-12"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="relative">
            <IoLocationSharp className="text-6xl text-emerald-400" />
            <div className="absolute inset-0 text-emerald-400 animate-ping opacity-20"></div>
          </div>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white mb-8"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Precise <span className="text-emerald-400">Location</span> Services
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Accurate mapping and detailed directions to ensure you can
          <span className="text-emerald-400 font-semibold"> easily find </span>
          your loved ones within our memorial park
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <motion.div
            className="space-y-8 text-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              {
                icon: FaMapMarkerAlt,
                title: "Exact Grave Locations",
                description:
                  "Pinpoint accuracy with detailed section, lot, and grave numbers",
                color: "from-blue-500 to-cyan-400",
              },
              {
                icon: FaDirections,
                title: "Step-by-Step Navigation",
                description:
                  "Clear directions from park entrance to specific locations",
                color: "from-green-500 to-emerald-400",
              },
              {
                icon: FaLocationArrow,
                title: "Real-time Assistance",
                description: "Updated maps and on-site guidance when needed",
                color: "from-purple-500 to-pink-400",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-emerald-400/30 transition-all duration-300 group"
                whileHover={{
                  x: 10,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated Map-like Visualization */}
              <div className="absolute inset-0 border-2 border-emerald-400/30 rounded-3xl rotate-45"></div>
              <div className="absolute inset-8 border-2 border-emerald-300/40 rounded-2xl -rotate-12"></div>
              <div className="absolute inset-16 border-2 border-emerald-200/50 rounded-xl rotate-6"></div>

              {/* Pulsing Center Point */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-emerald-400 rounded-full shadow-2xl shadow-emerald-400/50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-emerald-400 rounded-full animate-ping"></div>
              </div>

              {/* Location Markers */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className={`absolute w-4 h-4 bg-emerald-300 rounded-full ${
                    i === 1
                      ? "top-8 left-8"
                      : i === 2
                      ? "top-8 right-8"
                      : "bottom-8 left-1/2"
                  }`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
