import { motion } from "framer-motion";
import { Dumbbell, Salad, Activity } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Personal Training",
      desc: "Work 1-on-1 with certified trainers who design custom workout plans for your body and goals.",
      icon: Dumbbell,
    },
    {
      title: "Modern Equipment",
      desc: "Train with world-class machines and smart tracking tools for better performance and safety.",
      icon: Activity,
    },
    {
      title: "Nutrition Plans",
      desc: "Get structured diet and meal guidance aligned with your fitness and transformation targets.",
      icon: Salad,
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
            Why Choose <span className="text-red-500">GymX</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to build strength, lose fat, and stay consistent
            — all in one powerful fitness platform.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-black p-8 shadow-xl hover:shadow-2xl transition overflow-hidden"
              >
                {/* glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition" />

                {/* icon */}
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                  {f.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {f.desc}
                </p>

                {/* bottom accent line */}
                <div className="mt-6 h-1 w-0 bg-red-500 rounded group-hover:w-16 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
