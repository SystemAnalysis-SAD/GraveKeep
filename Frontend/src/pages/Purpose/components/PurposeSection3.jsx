import { motion } from "framer-motion";
import { FaHeart, FaHandHoldingHeart, FaUsers, FaLeaf } from "react-icons/fa";
import { GiHealing } from "react-icons/gi";

export default function PurposeSection3() {
  return (
    <motion.section
      className="h-screen snap-start flex items-center justify-center bg-gradient-to-br from-emerald-950/10 via-black to-purple-950/10 relative overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-emerald-500/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-8"
        >
          <FaHeart className="text-6xl text-emerald-400 mx-auto" />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Built with <span className="text-emerald-400">Compassion</span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Every feature is designed with deep respect and understanding for
          families during their most difficult moments
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: FaHandHoldingHeart,
              title: "Empathetic Design",
              description: "Interface that understands emotional needs",
              stat: "100%",
              statText: "Family Focused",
            },
            {
              icon: FaUsers,
              title: "Community Support",
              description: "Built with input from grieving families",
              stat: "500+",
              statText: "Families Helped",
            },
            {
              icon: GiHealing,
              title: "Healing Journey",
              description: "Supporting the process of finding closure",
              stat: "24/7",
              statText: "Available",
            },
            {
              icon: FaLeaf,
              title: "Peaceful Experience",
              description: "Calming, respectful user experience",
              stat: "99%",
              statText: "Satisfaction",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/40 to-emerald-900/10 border border-emerald-500/10 hover:border-emerald-400/30 group backdrop-blur-sm"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <div className="text-4xl mb-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                <item.icon />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300">
                {item.description}
              </p>
              <div className="text-2xl font-bold text-emerald-400 group-hover:scale-110 transition-transform">
                {item.stat}
              </div>
              <div className="text-xs text-gray-500 group-hover:text-gray-400">
                {item.statText}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-emerald-500/10 to-purple-500/10 border border-emerald-400/20 rounded-2xl p-8 max-w-2xl mx-auto"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Find Peace?
          </h3>
          <p className="text-gray-300 mb-6">
            Begin your journey of remembrance with our compassionate search
            tools
          </p>
          <motion.button
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Search
          </motion.button>
        </motion.div>

        {/* Bottom Navigation */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
        </motion.div>
      </div>
    </motion.section>
  );
}
