import {
  FaBolt,
  FaLock,
  FaCloud,
  FaMobileAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBolt className="text-yellow-500 text-4xl" />,
    title: "Fast Conversion",
    desc: "Convert files within seconds.",
  },
  {
    icon: <FaLock className="text-green-500 text-4xl" />,
    title: "100% Secure",
    desc: "Files are automatically deleted after processing.",
  },
  {
    icon: <FaCloud className="text-blue-500 text-4xl" />,
    title: "Cloud Based",
    desc: "No software installation required.",
  },
  {
    icon: <FaMobileAlt className="text-purple-500 text-4xl" />,
    title: "Works Everywhere",
    desc: "Desktop, tablet and mobile supported.",
  },
];

function FeatureSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose EasyTransform?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              {item.icon}
              <h3 className="mt-5 text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;