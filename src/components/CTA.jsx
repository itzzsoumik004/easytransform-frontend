import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold">
          Ready to Convert Your Files?
        </h2>

        <p className="mt-6 text-xl">
          Fast, Secure and Completely Free.
        </p>

        <Link
          to="/image-to-pdf"
          className="inline-block mt-10 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100"
        >
          Get Started
        </Link>

      </div>
    </section>
  );
}

export default CTA;