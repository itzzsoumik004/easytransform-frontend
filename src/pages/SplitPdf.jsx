import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToolHeader from "../components/ToolHeader";
import api from "../services/api";

function SplitPdf() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSplit = async () => {
    if (!file) {
      alert("Please select a PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      setLoading(true);

      const res = await api.post(
        "/convert/split-pdf",
        formData
      );

      const url =
        "http://localhost:5000" + res.data.file;

      window.open(url, "_blank");

    } catch (err) {
      console.error(err);
      alert("Split failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-12 px-6">

        <ToolHeader
          title="Split PDF"
          description="Extract the first page from a PDF."
        />

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mt-8 block w-full border p-3 rounded-lg"
        />

        <button
          onClick={handleSplit}
          disabled={loading}
          className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl"
        >
          {loading ? "Splitting..." : "Split PDF"}
        </button>

      </div>

      <Footer />
    </>
  );
}

export default SplitPdf;