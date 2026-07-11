import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToolHeader from "../components/ToolHeader";
import api from "../services/api";

function WordToPdf() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!file) {
      alert("Please choose a Word document.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await api.post(
        "/convert/word-to-pdf",
        formData
      );

      const fileUrl =
        "https://easytransform-backend.onrender.com" + res.data.file;

      const response = await fetch(fileUrl);

      if (!response.ok) {
        throw new Error("Download failed");
      }

      const blob = await response.blob();

      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = downloadUrl;
      link.download = "EasyTransform.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(downloadUrl);

      alert("Conversion Successful!");

    } catch (err) {
      console.error(err);
      alert("Conversion failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-12 px-6">

        <ToolHeader
          title="Word to PDF"
          description="Upload a DOCX file and convert it to PDF."
        />

        <input
          type="file"
          accept=".doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
          className="mt-8 block w-full border p-3 rounded-lg"
        />

        <button
          onClick={handleConvert}
          disabled={loading}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl text-lg font-semibold"
        >
          {loading ? "Converting..." : "Convert to PDF"}
        </button>

      </div>

      <Footer />
    </>
  );
}

export default WordToPdf;