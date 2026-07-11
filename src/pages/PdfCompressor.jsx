import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToolHeader from "../components/ToolHeader";
import api from "../services/api";

function PdfCompressor() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCompress = async () => {
    if (!file) {
      alert("Please select a PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      setLoading(true);

      const res = await api.post(
        "/convert/compress-pdf",
        formData
      );

      const url =
        "https://easytransform-backend.onrender.com" + res.data.file;

      window.open(url, "_blank");

    } catch (err) {
      console.error(err);
      alert("Compression failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-12 px-6">

        <ToolHeader
          title="PDF Compressor"
          description="Reduce your PDF file size."
        />

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mt-8 block w-full border p-3 rounded-lg"
        />

        <button
          onClick={handleCompress}
          disabled={loading}
          className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl"
        >
          {loading ? "Compressing..." : "Compress PDF"}
        </button>

      </div>

      <Footer />
    </>
  );
}

export default PdfCompressor;