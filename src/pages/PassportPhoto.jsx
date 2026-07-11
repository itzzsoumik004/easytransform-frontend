import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToolHeader from "../components/ToolHeader";
import api from "../services/api";

function PassportPhoto() {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const [country, setCountry] = useState("india");
  const [background, setBackground] = useState("white");

  const [loading, setLoading] = useState(false);

  const [download, setDownload] = useState("");

  const chooseImage = (e) => {

    const img = e.target.files[0];

    if (!img) return;

    setFile(img);

    setPreview(URL.createObjectURL(img));

  };

  const createPassport = async () => {

    if (!file) {
      alert("Choose an image");
      return;
    }

    let width = 413;
    let height = 531;

    if(country==="usa"){
      width = 600;
      height = 600;
    }

    if(country==="uk"){
      width = 413;
      height = 531;
    }

    if(country==="canada"){
      width = 420;
      height = 540;
    }

    const form = new FormData();

    form.append("image", file);
    form.append("width", width);
    form.append("height", height);
    form.append("background", background);

    try{

      setLoading(true);

      const res = await api.post(
        "/passport/create",
        form
      );

      const fileName =
        res.data.file.split("/").pop();

      setDownload(
        "https://easytransform-backend.onrender.com/download/images/" +
        fileName
      );

    }catch(err){

      console.log(err);

      alert("Passport creation failed");

    }finally{

      setLoading(false);

    }

  };
    return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-12 px-6">

        <ToolHeader
          title="Passport Photo Maker"
          description="Create passport photos for different countries instantly."
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
                    Passport Country
                  </h3>

                  <select
                    value={country}
                    onChange={(e)=>setCountry(e.target.value)}
                    className="w-full border rounded-lg p-3 mt-3"
                  >
                    <option value="india">
                      India
                    </option>

                    <option value="usa">
                      USA
                    </option>

                    <option value="uk">
                      United Kingdom
                    </option>

                    <option value="canada">
                      Canada
                    </option>

                  </select>

                </div>

                <div className="bg-gray-100 rounded-xl p-5">

                  <h3 className="font-bold text-lg">
                    Background Color
                  </h3>

                  <select
                    value={background}
                    onChange={(e)=>setBackground(e.target.value)}
                    className="w-full border rounded-lg p-3 mt-3"
                  >
                    <option value="white">
                      White
                    </option>

                    <option value="blue">
                      Blue
                    </option>

                    <option value="red">
                      Red
                    </option>

                  </select>

                </div>

              </div>

              <button
                onClick={createPassport}
                disabled={loading}
                className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl text-xl font-bold"
              >
                {loading
                  ? "Creating..."
                  : "Create Passport Photo"}
              </button>
                            {download && (

                <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-6">

                  <h2 className="text-2xl font-bold text-green-700">
                    ✅ Passport Photo Ready
                  </h2>

                  <p className="mt-3">
                    Your passport photo has been created successfully.
                  </p>

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

                        a.download = "passport-photo.jpg";

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
                    Download Passport Photo
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

export default PassportPhoto;