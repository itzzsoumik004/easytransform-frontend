import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto py-20 px-6">

        <h1 className="text-5xl font-bold mb-8">
          Contact Us
        </h1>

        <p className="text-gray-600 mb-8">
          Have questions or feedback? We'd love to hear from you.
        </p>

        <div className="bg-white shadow-lg rounded-xl p-8">

          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Name
            </label>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            Send Message
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;