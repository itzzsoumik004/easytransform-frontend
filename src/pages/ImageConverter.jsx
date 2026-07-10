import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToolHeader from "../components/ToolHeader";
import api from "../services/api";

function ImageConverter() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [format, setFormat] = useState("png");
  const [quality, setQuality] = useState(90);

  const [loading, setLoading] = useState(false);

  const [downloadUrl, setDownloadUrl] = useState("");

  const [originalSize, setOriginalSize] = useState("");
  const [convertedSize, setConvertedSize] = useState("");

  const handleSelect = (e) => {
    const selected = e.target.files[0];

    if (!selected) return;

    setFile(selected);

    setPreview(URL.createObjectURL(selected));

    setOriginalSize(
      (selected.size / 1024 / 1024).toFixed(2)
    );
  };

  const handleConvert = async () => {
    if (!file) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();

    formData.append("image", file);
    formData.append("format", format);
    formData.append("quality", quality);

    try {
      setLoading(true);

      const res = await api.post(
        "/image/convert",
        formData
      );

      const url =
        "http://localhost:5000" + res.data.file;

      setDownloadUrl(url);

      fetch(url)
        .then((r) => r.blob())
        .then((blob) => {
          setConvertedSize(
            (
              blob.size /
              1024 /
              1024
            ).toFixed(2)
          );
        });

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

      <div className="max-w-6xl mx-auto py-12 px-6">

        <ToolHeader
          title="Image Converter"
          description="Convert JPG, PNG, JPEG and WEBP images with high quality."
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

          <input
            type="file"
            accept="image/*"
            onChange={handleSelect}
            className="w-full border rounded-lg p-4"
          />

          {preview && (
            <div className="mt-8">

              <img
                src={preview}
                alt="Preview"
                className="w-72 mx-auto rounded-xl shadow-lg"
              />

              <div className="mt-6 grid md:grid-cols-2 gap-6">

                <div className="bg-gray-100 rounded-xl p-4">
                  <h3 className="font-bold">
                    Original File
                  </h3>

                  <p className="mt-2">
                    Size : {originalSize} MB
                  </p>

                  <p>
                    Name : {file.name}
                  </p>
                </div>

                <div className="bg-gray-100 rounded-xl p-4">

                  <label className="font-semibold">
                    Convert To
                  </label>

                  <select
                    value={format}
                    onChange={(e) =>
                      setFormat(e.target.value)
                    }
                    className="mt-2 w-full border rounded-lg p-3"
                  >
                    <option value="png">PNG</option>
                    <option value="jpg">JPG</option>
                    <option value="jpeg">JPEG</option>
                    <option value="webp">WEBP</option>
                  </select>

                  <div className="mt-6">

                    <label>
                      Quality : {quality}%
                    </label>

                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={quality}
                      onChange={(e) =>
                        setQuality(e.target.value)
                      }
                      className="w-full mt-2"
                    />

                  </div>

                </div>

              </div>
                            <button
                onClick={handleConvert}
                disabled={loading}
                className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
              >
                {loading ? "Converting..." : "Convert Image"}
              </button>

              {downloadUrl && (
                <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-6">

                  <h2 className="text-2xl font-bold text-green-700">
                    ✅ Conversion Successful
                  </h2>

                  <div className="mt-4 space-y-2">

                    <p>
                      <strong>Original Size:</strong>{" "}
                      {originalSize} MB
                    </p>

                    <p>
                      <strong>Converted Size:</strong>{" "}
                      {convertedSize || "Calculating..."} MB
                    </p>

                    <p>
                      <strong>Output Format:</strong>{" "}
                      {format.toUpperCase()}
                    </p>

                  </div>

                  <a
                    href={downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Download Image
                  </a>

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

export default ImageConverter;