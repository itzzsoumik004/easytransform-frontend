import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ToolCard from "../components/ToolCard";
import Footer from "../components/Footer";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

import {
  FaFilePdf,
  FaFileWord,
  FaFileImage,
  FaCompress,
  FaCut,
  FaMagic,
} from "react-icons/fa";

function Home() {
 const tools = [
  {
    title: "Image to PDF",
    icon: <FaFilePdf className="text-red-500" />,
    link: "/image-to-pdf",
  },
  {
    title: "PDF to Word",
    icon: <FaFileWord className="text-blue-500" />,
    link: "/pdf-to-word",
  },
  {
    title: "Word to PDF",
    icon: <FaFilePdf className="text-red-500" />,
    link: "/word-to-pdf",
  },
 {
  title: "Image Converter",
  icon: <FaFileImage className="text-green-500" />,
  link: "/image-converter",
},
  {
    title: "Image Compressor",
    icon: <FaCompress className="text-purple-500" />,
    link: "/image-compressor",
  },
  {
    title: "PDF Compressor",
    icon: <FaCompress className="text-pink-500" />,
    link: "/pdf-compressor",
  },
  {
    title: "Merge PDF",
    icon: <FaFilePdf className="text-red-500" />,
    link: "/merge-pdf",
  },
  {
    title: "Split PDF",
    icon: <FaCut className="text-orange-500" />,
    link: "/split-pdf",
  },
  {
    title: "Passport Photo",
    icon: <FaMagic className="text-indigo-500" />,
    link: "/passport-photo",
  },
  {
    title: "Background Remover",
    icon: <FaMagic className="text-teal-500" />,
    link: "/background-remover",
  },
  {
    title: "Image Editor",
    icon: <FaFileImage className="text-cyan-500" />,
    link: "/image-editor",
  },
  {
  title: "Image Resizer",
  icon: <FaFileImage className="text-blue-500" />,
  link: "/image-resizer",
},
];
  return (
    <>
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Tools
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool, index) => (
           <ToolCard
  key={index}
  title={tool.title}
  icon={tool.icon}
  link={tool.link}
/>
          ))}
        </div>
      </section>

      <FeatureSection />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTA />

      <Footer />
    </>
  );
}

export default Home;




