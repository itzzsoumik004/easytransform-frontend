import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToolHeader from "../components/ToolHeader";
import FileUploader from "../components/FileUploader";
import ImagePreview from "../components/ImagePreview";
import OptionsPanel from "../components/OptionsPanel";
import ProgressBar from "../components/ProgressBar";
import api from "../services/api";

function ImageToPdf() {
  const [files, setFiles] = useState([]);
  const [pageSize, setPageSize] = useState("a4");
  const [orientation, setOrientation] = useState("portrait");
  const [quality, setQuality] = useState("high");
  const [progress] = useState(0);
  const [loading, setLoading] = useState(false);

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    const formData = new FormData();

    files.forEach((file) => {
      formData.append("images", file);
    });

    formData.append("pageSize", pageSize);
    formData.append("orientation", orientation);
    formData.append("quality", quality);

    try {
      setLoading(true);

      const res = await api.post(
        "/convert/image-to-pdf",
        formData
      );

      const fileUrl =
        "http://localhost:5000" + res.data.file;

      const response = await fetch(fileUrl);

      const blob = await response.blob();

      const downloadUrl =
        window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = downloadUrl;
      link.download = "EasyTransform.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(downloadUrl);

      alert("PDF Created Successfully!");

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

      <div className="max-w-6xl mx-auto px-6 py-12">

        <ToolHeader
          title="Image to PDF"
          description="Upload one or more images and convert them into a PDF."
        />

        <FileUploader
          files={files}
          setFiles={setFiles}
        />

        {files.length > 0 && (
          <>
            <ImagePreview
              files={files}
              removeFile={removeFile}
            />

            <OptionsPanel
              pageSize={pageSize}
              setPageSize={setPageSize}
              orientation={orientation}
              setOrientation={setOrientation}
              quality={quality}
              setQuality={setQuality}
            />

            <button
              onClick={handleConvert}
              disabled={loading}
              className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl text-xl font-semibold"
            >
              {loading ? "Creating PDF..." : "Convert to PDF"}
            </button>
          </>
        )}

        {loading && (
          <ProgressBar progress={progress} />
        )}

      </div>

      <Footer />
    </>
  );
}

export default ImageToPdf;