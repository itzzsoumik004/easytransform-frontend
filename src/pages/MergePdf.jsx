import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToolHeader from "../components/ToolHeader";
import api from "../services/api";

function MergePdf() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (files.length < 2) {
      alert("Please select at least 2 PDF files.");
      return;
    }

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      setLoading(true);

      const res = await api.post(
        "/convert/merge-pdf",
        formData
      );

      const url = "http://localhost:5000" + res.data.file;

      window.open(url, "_blank");

    } catch (err) {
      console.error(err);
      alert("Merge failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-12 px-6">

        <ToolHeader
          title="Merge PDF"
          description="Merge multiple PDF files into one."
        />

    <input
  type="file"
  multiple
  accept=".pdf"
  onChange={(e) => setFiles(Array.from(e.target.files))}
  className="mt-8 block w-full border p-3 rounded-lg"
/>
{files.length > 0 && (
  <div className="mt-4">
    <h3 className="font-semibold mb-2">
      Selected Files:
    </h3>

    {files.map((file, index) => (
      <div
        key={index}
        className="border rounded p-2 mb-2"
      >
        {file.name}
      </div>
    ))}
  </div>
)}
        <button
          onClick={handleConvert}
          disabled={loading}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl"
        >
          {loading ? "Merging..." : "Merge PDF"}
        </button>

      </div>

      <Footer />
    </>
  );
}

export default MergePdf;