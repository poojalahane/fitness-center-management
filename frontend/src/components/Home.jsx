import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 text-red-500 text-sm font-semibold">
            #1 Modern Fitness Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-black dark:text-white">
            Build Your <span className="text-red-500">Perfect Body</span>
            <br />
            Transform Your Life
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
            Train smarter with expert-designed programs, professional trainers,
            and real progress tracking. Your strongest version starts today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-red-500 text-white font-semibold text-lg shadow-xl shadow-red-500/30 hover:bg-red-600 transition"
            >
              Start Training
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl border border-black/15 dark:border-white/20 font-semibold text-lg hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              View Programs
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6">
            {[
              { num: "12K+", label: "Members" },
              { num: "50+", label: "Trainers" },
              { num: "120+", label: "Programs" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-bold text-red-500">
                  {s.num}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-red-500/20 blur-3xl rounded-3xl" />

          <div className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-white/40 dark:bg-white/5 backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
              alt="Gym training"
              className="w-full h-[520px] object-cover"
            />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 px-5 py-3 rounded-2xl bg-black/70 text-white backdrop-blur text-sm">
              🔥 Personal Coaching Available
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
