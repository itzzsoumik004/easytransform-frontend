import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToolHeader from "../components/ToolHeader";
import api from "../services/api";

function BackgroundRemover() {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const [loading, setLoading] = useState(false);

  const [download, setDownload] = useState("");

  const chooseImage = (e) => {

    const img = e.target.files[0];

    if (!img) return;

    setFile(img);

    setPreview(URL.createObjectURL(img));

  };

  const removeBackground = async () => {

    if (!file) {
      alert("Choose an image");
      return;
    }

    const form = new FormData();

    form.append("image", file);

    try {

      setLoading(true);

      const res = await api.post(
        "/background/remove",
        form
      );

      const fileName =
        res.data.file.split("/").pop();

      setDownload(
        "https://easytransform-backend.onrender.com/download/images/" +
        fileName
      );

    } catch (err) {

      console.log(err);

      alert("Background removal failed");

    } finally {

      setLoading(false);

    }

  };
    return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-12 px-6">

        <ToolHeader
          title="AI Background Remover"
          description="Remove image background instantly using AI."
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

              <button
                onClick={removeBackground}
                disabled={loading}
                className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl text-xl font-bold"
              >
                {loading
                  ? "Removing Background..."
                  : "Remove Background"}
              </button>

              {download && (

                <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-6">

                  <h2 className="text-2xl font-bold text-green-700">
                    ✅ Background Removed
                  </h2>

                  <p className="mt-3">
                    Your transparent PNG is ready.
                  </p>

                  <button
                    onClick={async () => {

                      try {

                        const response =
                          await fetch(download);

                        const blob =
                          await response.blob();

                        const url =
                          window.URL.createObjectURL(blob);

                        const a =
                          document.createElement("a");

                        a.href = url;

                        a.download =
                          "background-removed.png";

                        document.body.appendChild(a);

                        a.click();

                        a.remove();

                        window.URL.revokeObjectURL(url);

                      } catch (err) {

                        console.log(err);

                        alert("Download failed");

                      }

                    }}
                    className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Download PNG
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

export default BackgroundRemover;