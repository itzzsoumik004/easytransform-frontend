
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Convert Any File Instantly
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-xl text-gray-100"
        >
          Free • Fast • Secure
        </motion.p>

        <motion.input
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          type="text"
          placeholder="Search tools..."
          className="mt-10 w-full max-w-xl p-4 rounded-xl text-black shadow-xl outline-none"
        />

      </div>
    </section>
  );
}

export default Hero;