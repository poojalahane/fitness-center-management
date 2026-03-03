import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 dark:border-white/10 border-black/10 bg-white dark:bg-black text-gray-700 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold tracking-wide">
            <span className="text-red-500">Gym</span>X
          </h2>
          <p className="text-sm leading-relaxed">
            Build your strength, transform your body, and stay consistent with
            your fitness journey. Modern training programs and expert support.
          </p>

          <div className="flex gap-4 pt-2">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-red-500/20 cursor-pointer transition"
              >
                <Icon size={18} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-base mb-4 text-black dark:text-white">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {["Home", "Programs", "Pricing", "Contact", "About"].map((item) => (
              <li
                key={item}
                className="hover:text-red-500 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="font-semibold text-base mb-4 text-black dark:text-white">
            Programs
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Weight Training",
              "Fat Loss",
              "Yoga",
              "Cardio",
              "Personal Coaching",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-red-500 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-base mb-4 text-black dark:text-white">
            Newsletter
          </h3>
          <p className="text-sm mb-4">
            Get fitness tips and program updates directly to your inbox.
          </p>

          <div className="flex rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
            <input
              placeholder="Your email"
              className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
            />
            <button className="px-4 bg-red-500 text-white hover:bg-red-600 transition flex items-center gap-2">
              <Mail size={16} /> Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p>© 2026 GymX. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-red-500 cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-red-500 cursor-pointer transition">
              Terms of Service
            </span>
            <span className="hover:text-red-500 cursor-pointer transition">
              Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// export default function Footer() {
//   return (
//     <footer className="bg-black text-gray-400 text-center py-6">
//       © 2026 GymX. All rights reserved.
//     </footer>
//   );
// }
