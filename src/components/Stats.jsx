function Stats() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

        <div>
          <h2 className="text-5xl font-bold">50+</h2>
          <p>Tools</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">100K+</h2>
          <p>Users</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">1M+</h2>
          <p>Conversions</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">99.9%</h2>
          <p>Uptime</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;