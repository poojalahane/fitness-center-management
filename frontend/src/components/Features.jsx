export default function Features() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose Us
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          "Personal Training",
          "Modern Equipment",
          "Nutrition Plans",
        ].map((item) => (
          <div
            key={item}
            className="p-6 border rounded-xl text-center hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="text-gray-600">
              Achieve your fitness goals with expert guidance.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
