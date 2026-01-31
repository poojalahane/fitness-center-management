export default function Hero() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your <span className="text-red-500">Perfect Body</span>
          </h1>
          <p className="mt-6 text-gray-300">
            Join the best gym in town with professional trainers and modern equipment.
          </p>
          <button className="mt-6 bg-red-500 px-6 py-3 rounded-lg text-lg hover:bg-red-600">
            Get Started
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
