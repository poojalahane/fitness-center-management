import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, User, Phone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("CONTACT DATA:", data);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-zinc-900 py-20 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">
              Contact <span className="text-red-500">GymX</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Have questions about memberships, training programs, or diet
              plans? Send us a message and our fitness team will get back to you
              quickly.
            </p>
          </div>

          <div className="space-y-5 text-sm">
            <InfoRow icon={Mail} text="support@gymx.com" />
            <InfoRow icon={Phone} text="+91 98765 43210" />
            <InfoRow icon={MessageSquare} text="Response within 24 hours" />
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 rounded-3xl shadow-2xl p-8 md:p-10 space-y-6"
        >
          <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
            Send Message
          </h2>

          <Field
            icon={User}
            placeholder="Full Name"
            error={errors.name}
            {...register("name", { required: "Name is required" })}
          />

          <Field
            icon={Mail}
            placeholder="Email"
            type="email"
            error={errors.email}
            {...register("email", {
              required: "Email required",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Invalid email",
              },
            })}
          />

          <Field
            icon={Phone}
            placeholder="Mobile Number"
            error={errors.phone}
            {...register("phone", { required: "Phone required" })}
          />

          <TextArea
            icon={MessageSquare}
            placeholder="Your Message"
            rows={5}
            error={errors.message}
            {...register("message", {
              required: "Message required",
              minLength: { value: 10, message: "Too short" },
            })}
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold text-lg shadow-lg shadow-red-500/30 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ icon: Icon, error, ...props }) {
  return (
    <div className="space-y-1">
      <div className="relative">
        {Icon && (
          <Icon
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        )}
        <input
          {...props}
          className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition
          bg-transparent border-black/15 dark:border-white/15
          focus:border-red-500 focus:ring-2 focus:ring-red-500/20
          ${Icon ? "pl-10" : ""}`}
        />
      </div>
      {error && <p className="text-xs text-red-500">{error.message}</p>}
    </div>
  );
}

function TextArea({ icon: Icon, error, ...props }) {
  return (
    <div className="space-y-1">
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-4 text-gray-400" size={18} />
        )}
        <textarea
          {...props}
          className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition resize-none
          bg-transparent border-black/15 dark:border-white/15
          focus:border-red-500 focus:ring-2 focus:ring-red-500/20
          ${Icon ? "pl-10" : ""}`}
        />
      </div>
      {error && <p className="text-xs text-red-500">{error.message}</p>}
    </div>
  );
}

function InfoRow({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
        <Icon size={20} />
      </div>
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </div>
  );
}
