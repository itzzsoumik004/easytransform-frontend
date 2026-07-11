import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToolHeader from "../components/ToolHeader";
import api from "../services/api";

function PdfToWord() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!file) {
      alert("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await api.post(
        "/convert/pdf-to-word",
        formData
      );

      const url = "https://easytransform-backend.onrender.com" + res.data.file;

      const link = document.createElement("a");
      link.href = url;
      link.download = "EasyTransform.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert("Word document created successfully!");

    } catch (err) {
      console.error(err);
      alert("Conversion failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-12 px-6">
        <ToolHeader
          title="PDF to Word"
          description="Upload a PDF and convert it into a Word document."
        />

        <div className="mt-8">
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full border p-3 rounded-lg"
          />
        </div>

        <button
          onClick={handleConvert}
          disabled={loading}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-xl font-semibold disabled:opacity-50"
        >
          {loading ? "Converting..." : "Convert to Word"}
        </button>
      </div>

      <Footer />
    </>
  );
}

export default PdfToWord;