import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    review: "EasyTransform saved me hours converting PDFs. Super fast!",
  },
  {
    name: "Ayesha Khan",
    review: "The interface is clean and very easy to use.",
  },
  {
    name: "John Miller",
    review: "Better than many online converters I've tried.",
  },
];

function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex text-yellow-400 mb-4">
                {[1,2,3,4,5].map((star)=>(
                  <FaStar key={star}/>
                ))}
              </div>

              <p className="text-gray-600">
                "{item.review}"
              </p>

              <h3 className="mt-6 font-bold">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;