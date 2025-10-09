import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaUser, FaCalendarAlt, FaCross } from "react-icons/fa";
import FeaturesSection from "./FeatureSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0, y: 30 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Reusable Form Field
const FormField = ({
  label,
  icon: Icon,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  colSpan = false,
}) => (
  <motion.div
    variants={itemVariants}
    className={`space-y-3 ${colSpan ? "md:col-span-2" : ""}`}
  >
    <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
      <Icon className="text-emerald-400 text-sm" />
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-slate-800/60 border-2 border-slate-600/30 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-300 backdrop-blur-sm hover:border-slate-500/50"
    />
  </motion.div>
);

// Main Search Card Component
const SearchCard = ({ onResults }) => {
  const [form, setForm] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    dob: "",
    dod: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    const searchTerm =
      `${form.first_name} ${form.middle_name} ${form.last_name}`.trim();
    const res = await fetch(
      `http://127.0.0.1:5000/search?q=${encodeURIComponent(searchTerm)}`
    );
    const data = await res.json();
    onResults(data);
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-slate-800/40 backdrop-blur-2xl rounded-3xl border-2 border-slate-700/30 shadow-2xl overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900/40 to-slate-800/40 border-b-2 border-slate-700/30 p-8">
        <motion.div
          className="flex items-center gap-4"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/30">
            <FaSearch className="text-2xl text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Memorial Search
            </h2>
            <p className="text-emerald-200 text-base">
              Honor their memory with our compassionate search
            </p>
          </div>
        </motion.div>
      </div>

      {/* Form */}
      <div className="p-8">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <FormField
            label="First Name"
            name="first_name"
            icon={FaUser}
            placeholder="Enter first name"
            value={form.first_name}
            onChange={handleChange}
          />
          <FormField
            label="Middle Name"
            name="middle_name"
            icon={FaUser}
            placeholder="Enter middle name"
            value={form.middle_name}
            onChange={handleChange}
          />
          <FormField
            label="Surname"
            name="last_name"
            icon={FaUser}
            placeholder="Enter surname"
            value={form.last_name}
            onChange={handleChange}
          />
          <FormField
            label="Date of Birth"
            name="dob"
            icon={FaCalendarAlt}
            type="date"
            value={form.dob}
            onChange={handleChange}
          />
          <FormField
            label="Date of Death"
            name="dod"
            icon={FaCalendarAlt}
            type="date"
            value={form.dod}
            onChange={handleChange}
            colSpan={true}
          />
        </motion.div>

        {/* Search Button */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-slate-700/30"
        >
          <motion.button
            onClick={handleSearch}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 25px 50px rgba(16, 185, 129, 0.4)",
              background: "linear-gradient(135deg, #10b981, #059669)",
            }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-4 shadow-xl text-lg group"
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaSearch className="text-xl" />
            </motion.span>
            Search Memorial Records
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="group-hover:block"
            >
              <FaCross className="text-lg" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Results Component
const SearchResults = ({ data }) => {
  if (!data || data.length === 0)
    return (
      <div className="text-gray-400 text-center mt-10">No records found.</div>
    );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-10 space-y-4"
    >
      {data.map((person) => (
        <motion.div
          key={person.id}
          variants={itemVariants}
          className="bg-slate-800/40 p-6 rounded-xl text-white border border-slate-700 hover:border-emerald-500/30 transition-all"
        >
          <p className="font-bold text-lg">
            {person.first_name} {person.middle_name} {person.last_name}
          </p>
          <p className="text-sm text-gray-400">
            Born: {new Date(person.dob).toLocaleDateString()} | Died:{" "}
            {new Date(person.dod).toLocaleDateString()}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Parent Page
export default function Memorial() {
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-8 top-20 pb-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto space-y-12"
        >
          <SearchCard onResults={setResults} />
          <SearchResults data={results} />
          <FeaturesSection />
        </motion.div>
      </div>
    </div>
  );
}
