import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToolHeader from "../components/ToolHeader";
import api from "../services/api";

function ImageCompressor() {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const [quality, setQuality] = useState(80);

  const [loading, setLoading] = useState(false);

  const [download, setDownload] = useState("");

  const [originalSize, setOriginalSize] = useState("");

  const [compressedSize, setCompressedSize] = useState("");

  const [saved, setSaved] = useState("");

  const [percent, setPercent] = useState("");

  const chooseFile = (e) => {

    const img = e.target.files[0];

    if (!img) return;

    setFile(img);

    setPreview(URL.createObjectURL(img));

    setOriginalSize(
      (img.size / 1024 / 1024).toFixed(2)
    );

  };

  const compressImage = async () => {

    if (!file) {
      alert("Choose an image");
      return;
    }

    const form = new FormData();

    form.append("image", file);

    form.append("quality", quality);

    try {

      setLoading(true);

      const res = await api.post(
        "/image-compressor/compress",
        form
      );

      const fileName =
  res.data.file.split("/").pop();

setDownload(
  "https://easytransform-backend.onrender.com/download/images/" +
  fileName
);

      setCompressedSize(
        (
          res.data.compressedSize /
          1024 /
          1024
        ).toFixed(2)
      );

      setSaved(
        (
          res.data.saved /
          1024 /
          1024
        ).toFixed(2)
      );

      setPercent(res.data.percent);

    } catch (err) {

      console.log(err);

      alert("Compression failed");

    } finally {

      setLoading(false);

    }

  };
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-12 px-6">

        <ToolHeader
          title="Image Compressor"
          description="Compress JPG, PNG and WEBP images without losing much quality."
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

          <input
            type="file"
            accept="image/*"
            onChange={chooseFile}
            className="w-full border rounded-lg p-4"
          />

          {preview && (

            <div className="mt-8">

              <img
                src={preview}
                alt="Preview"
                className="w-72 mx-auto rounded-xl shadow-lg"
              />

              <div className="grid md:grid-cols-2 gap-6 mt-8">

                <div className="bg-gray-100 rounded-xl p-5">

                  <h3 className="font-bold text-lg">
                    Original Image
                  </h3>

                  <p className="mt-3">
                    <strong>Name:</strong> {file.name}
                  </p>

                  <p>
                    <strong>Size:</strong> {originalSize} MB
                  </p>

                </div>

                <div className="bg-gray-100 rounded-xl p-5">

                  <h3 className="font-bold text-lg">
                    Compression Quality
                  </h3>

                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={quality}
                    onChange={(e)=>setQuality(e.target.value)}
                    className="w-full mt-5"
                  />

                  <p className="text-center mt-2 text-xl font-bold">
                    {quality}%
                  </p>

                </div>

              </div>

              <button
                onClick={compressImage}
                disabled={loading}
                className="mt-8 w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl text-xl font-bold"
              >
                {loading ? "Compressing..." : "Compress Image"}
              </button>
                            {download && (

                <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-6">

                  <h2 className="text-2xl font-bold text-green-700">
                    ✅ Compression Successful
                  </h2>

                  <div className="mt-5 space-y-3">

                    <p>
                      <strong>Original Size:</strong>{" "}
                      {originalSize} MB
                    </p>

                    <p>
                      <strong>Compressed Size:</strong>{" "}
                      {compressedSize} MB
                    </p>

                    <p>
                      <strong>Saved:</strong>{" "}
                      {saved} MB
                    </p>

                    <p>
                      <strong>Reduction:</strong>{" "}
                      {percent}%
                    </p>

                  </div>
<button
  onClick={async () => {
    try {
      const response = await fetch(download);

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");

      a.href = url;

      // Keep the original extension
      const extension =
        file.name.split(".").pop();

      a.download =
        "compressed-image." + extension;

      document.body.appendChild(a);

      a.click();

      a.remove();

      window.URL.revokeObjectURL(url);

    } catch (err) {
      console.error(err);
      alert("Download failed");
    }
  }}
  className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
>
  Download Compressed Image
</button>

                </div>

              )}

            </div>

          )}

        </div>

      </div>

      <Footer />

    </>
  );

}

export default ImageCompressor;