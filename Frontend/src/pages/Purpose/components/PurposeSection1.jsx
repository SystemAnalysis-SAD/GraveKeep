import { motion } from "framer-motion";
import { FaSearch, FaCompass, FaUserFriends } from "react-icons/fa";
import { GiPeaceDove } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function PurposeSection1() {
  return (
    <motion.section
      id="purpose-section-1"
      className="h-fit  snap-start flex items-center justify-center bg-gradient-to-br from-slate-800 via-emerald-950 to-black relative overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated Background Elements */}

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10 py-30 lg:py-40">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Our Purpose
        </motion.h1>

        <motion.p
          className="text-sm md:text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Providing dignified, compassionate technology to help families
          <span className="text-emerald-400 font-semibold"> find peace </span>
          and preserve cherished memories
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: FaSearch,
              title: "Effortless Search",
              desc: "Intuitive interface designed for comfort during difficult times",
              delay: 0.2,
            },
            {
              icon: FaCompass,
              title: "Clear Guidance",
              desc: "Step-by-step assistance to locate your loved ones with ease",
              delay: 0.2,
            },
            {
              icon: GiPeaceDove,
              title: "Peace of Mind",
              desc: "Technology that brings comfort and closure to families",
              delay: 0.2,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/40 to-emerald-900/10 border border-emerald-500/10 hover:border-emerald-400/30 backdrop-blur-sm"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              whileHover={{
                y: -15,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-emerald-400 group-hover:to-emerald-500 transition-all duration-500"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400 },
                }}
              >
                <item.icon className="text-3xl text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8  left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="animate-bounce">
            <IoIosArrowDown className="text-emerald-400 text-3xl" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
