import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";

// ================= LOGIN PAGE =================
export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("LOGIN DATA", form);
    alert("Login submitted (frontend demo)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-800 dark:from-black dark:to-zinc-900 px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur border border-white/10 p-8 text-white shadow-2xl"
      >
        <h2 className="text-3xl font-extrabold mb-2 text-center">
          Welcome Back
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm">
          Login to your gym account
        </p>

        {/* Email */}
        <div className="mb-5">
          <label className="text-sm text-gray-300">Email</label>
          <div className="mt-2 flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-3">
            <Mail size={18} />
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-transparent py-3 outline-none"
            />
          </div>
        </div>
        {/* Password */}
        <div className="mb-6">
          <label className="text-sm text-gray-300">Password</label>
          <div className="mt-2 flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-3">
            <Lock size={18} />
            <input
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-transparent py-3 outline-none"
            />
          </div>
        </div>

        <button className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 font-semibold transition shadow-lg shadow-red-500/30">
          Login
        </button>

        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account? Register
        </p>
      </motion.form>
    </div>
  );
}
