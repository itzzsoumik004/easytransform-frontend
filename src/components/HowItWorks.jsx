function HowItWorks() {
  const steps = [
    "Upload your file",
    "Choose conversion options",
    "Download the converted file",
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-2xl p-8"
            >
              <div className="text-5xl font-bold text-blue-600">
                {index + 1}
              </div>

              <p className="mt-6 text-lg">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;