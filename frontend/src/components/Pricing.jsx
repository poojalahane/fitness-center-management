import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$20",
      features: [
        "Gym Access",
        "Basic Equipment",
        "Locker Room",
        "1 Trainer Session",
      ],
    },
    {
      name: "Standard",
      price: "$40",
      popular: true,
      features: [
        "All Basic Features",
        "Group Classes",
        "Diet Guidance",
        "5 Trainer Sessions",
      ],
    },
    {
      name: "Premium",
      price: "$60",
      features: [
        "All Standard Features",
        "Personal Trainer",
        "Custom Workout Plan",
        "Priority Support",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">
            Membership <span className="text-red-500">Plans</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your goals and start your transformation
            today.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`relative rounded-3xl border p-8 shadow-xl transition
              ${
                plan.popular
                  ? "bg-black text-white border-red-500 shadow-red-500/20"
                  : "bg-white dark:bg-black text-black dark:text-white border-black/10 dark:border-white/10"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-red-500 text-white text-xs font-semibold">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4 text-center">
                {plan.name}
              </h3>

              <div className="text-center mb-6">
                <span className="text-5xl font-extrabold text-red-500">
                  {plan.price}
                </span>
                <span className="text-sm opacity-70"> / month</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check size={18} className="text-red-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition
                ${
                  plan.popular
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
                }`}
              >
                Choose Plan
              </button>

              {/* glow */}
              <div className="absolute -z-10 inset-0 rounded-3xl blur-2xl opacity-0 hover:opacity-100 transition bg-red-500/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
