export default function Pricing() {
  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Membership Plans
      </h2>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          { plan: "Basic", price: "$20" },
          { plan: "Standard", price: "$40" },
          { plan: "Premium", price: "$60" },
        ].map((item) => (
          <div
            key={item.plan}
            className="bg-white p-8 rounded-xl text-center shadow"
          >
            <h3 className="text-xl font-bold">{item.plan}</h3>
            <p className="text-4xl font-bold my-4 text-red-500">
              {item.price}
            </p>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
