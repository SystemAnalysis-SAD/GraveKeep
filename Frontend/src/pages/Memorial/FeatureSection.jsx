import { motion } from "framer-motion";
import { FaUser, FaHeart, FaMapMarkerAlt } from "react-icons/fa";

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 30 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
    >
      {[
        {
          icon: FaUser,
          title: "Respectful Search",
          description: "Designed with compassion and dignity",
        },
        {
          icon: FaMapMarkerAlt,
          title: "Precise Locations",
          description: "Accurate grave locations within the park",
        },
        {
          icon: FaHeart,
          title: "Compassionate Service",
          description: "Support when you need it most",
        },
      ].map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/20 text-center"
          whileHover={{
            y: -8,
            scale: 1.02,
            borderColor: "rgba(16, 185, 129, 0.3)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
            whileHover={{
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <feature.icon className="text-2xl text-white" />
          </motion.div>
          <h3 className="text-lg font-semibold text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-400 text-sm">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
