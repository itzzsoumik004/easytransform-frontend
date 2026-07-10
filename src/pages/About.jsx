import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-20 px-6">

        <h1 className="text-5xl font-bold mb-8">
          About EasyTransform
        </h1>

        <p className="text-lg text-gray-700 leading-8">
          EasyTransform is a free online file conversion platform
          that allows users to convert PDFs, images and documents
          quickly and securely.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Fast
            </h2>

            <p>
              Convert files within seconds.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Secure
            </h2>

            <p>
              Your uploaded files remain private.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Free
            </h2>

            <p>
              Most tools are completely free to use.
            </p>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;