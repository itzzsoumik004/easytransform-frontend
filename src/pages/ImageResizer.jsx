import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToolHeader from "../components/ToolHeader";
import api from "../services/api";

function ImageResizer() {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);

  const [loading, setLoading] = useState(false);

  const [download, setDownload] = useState("");

  const [originalSize, setOriginalSize] = useState("");
  const [newSize, setNewSize] = useState("");

  const chooseImage = (e) => {

    const img = e.target.files[0];

    if (!img) return;

    setFile(img);

    setPreview(URL.createObjectURL(img));

    setOriginalSize(
      (img.size / 1024 / 1024).toFixed(2)
    );

  };

  const resizeImage = async () => {

    if (!file) {
      alert("Choose an image");
      return;
    }

    const form = new FormData();

    form.append("image", file);
    form.append("width", width);
    form.append("height", height);

    try {

      setLoading(true);

      const res = await api.post(
        "/image-resizer/resize",
        form
      );

      const fileName =
        res.data.file.split("/").pop();

      setDownload(
        "https://easytransform-backend.onrender.com/download/images/" +
        fileName
      );

      setNewSize(
        (
          res.data.resizedSize /
          1024 /
          1024
        ).toFixed(2)
      );

    } catch (err) {

      console.log(err);

      alert("Resize failed");

    } finally {

      setLoading(false);

    }

  };
    return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-12 px-6">

        <ToolHeader
          title="Image Resizer"
          description="Resize JPG, PNG and WEBP images in seconds."
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

          <input
            type="file"
            accept="image/*"
            onChange={chooseImage}
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
                    Resize Dimensions
                  </h3>

                  <div className="mt-4">

                    <label>Width</label>

                    <input
                      type="number"
                      value={width}
                      onChange={(e)=>setWidth(e.target.value)}
                      className="w-full border rounded-lg p-3 mt-2"
                    />

                  </div>

                  <div className="mt-4">

                    <label>Height</label>

                    <input
                      type="number"
                      value={height}
                      onChange={(e)=>setHeight(e.target.value)}
                      className="w-full border rounded-lg p-3 mt-2"
                    />

                  </div>

                </div>

              </div>

              <button
                onClick={resizeImage}
                disabled={loading}
                className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-xl font-bold"
              >
                {loading ? "Resizing..." : "Resize Image"}
              </button>
                            {download && (

                <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-6">

                  <h2 className="text-2xl font-bold text-green-700">
                    ✅ Resize Successful
                  </h2>

                  <div className="mt-5 space-y-3">

                    <p>
                      <strong>Original Size:</strong>{" "}
                      {originalSize} MB
                    </p>

                    <p>
                      <strong>New Size:</strong>{" "}
                      {newSize} MB
                    </p>

                    <p>
                      <strong>Dimensions:</strong>{" "}
                      {width} × {height}
                    </p>

                  </div>

                  <button
                    onClick={async () => {

                      try {

                        const response = await fetch(download);

                        const blob = await response.blob();

                        const url =
                          window.URL.createObjectURL(blob);

                        const a =
                          document.createElement("a");

                        a.href = url;

                        const extension =
                          file.name.split(".").pop();

                        a.download =
                          "resized-image." + extension;

                        document.body.appendChild(a);

                        a.click();

                        a.remove();

                        window.URL.revokeObjectURL(url);

                      } catch (err) {

                        console.log(err);

                        alert("Download failed");

                      }

                    }}
                    className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Download Resized Image
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

export default ImageResizer;