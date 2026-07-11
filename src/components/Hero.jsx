import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaLock,
  FaMobileAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-cyan-600 to-indigo-700 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}

          <div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium"
            >
              🚀 Free PDF & Image Toolkit
            </motion.span>

            <motion.h1
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Convert PDF & Images
              <br />
              <span className="text-yellow-300">
                Fast, Secure & Free
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg text-gray-100 leading-8"
            >
              EasyTransform helps you convert,
              compress, resize and edit PDF &
              Image files directly in your browser.
              No installation required.
            </motion.p>

            {/* FEATURES */}

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="flex items-center gap-3">
                <FaBolt className="text-yellow-300" />
                Fast Conversion
              </div>

              <div className="flex items-center gap-3">
                <FaLock className="text-green-300" />
                Secure Files
              </div>

              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-pink-300" />
                Mobile Friendly
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-300" />
                100% Free
              </div>

            </div>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/image-to-pdf"
                className="bg-white text-blue-700 px-7 py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Start Converting
              </Link>

              <Link
                to="/pdf-to-word"
                className="border border-white px-7 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition"
              >
                Explore Tools
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl p-8 text-black"
          >

            <h2 className="text-2xl font-bold">
              Why Choose EasyTransform?
            </h2>

            <div className="mt-8 space-y-6">

              <div>
                <h3 className="font-semibold">
                  ⚡ Lightning Fast
                </h3>

                <p className="text-gray-600 mt-1">
                  Convert your files within seconds.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  🔒 Secure Processing
                </h3>

                <p className="text-gray-600 mt-1">
                  Your files stay private during processing.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  📱 Works Everywhere
                </h3>

                <p className="text-gray-600 mt-1">
                  Mobile, Tablet, Laptop and Desktop.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  🆓 Free to Use
                </h3>

                <p className="text-gray-600 mt-1">
                  No installation. No signup required.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;