import { motion } from "framer-motion";
import { User, Mail, Phone, Lock, Ruler, Weight, Calendar } from "lucide-react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("REGISTER DATA:", data);
  };

  const password = watch("password");

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-zinc-900 flex items-center justify-center px-4 py-10">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-white/80 dark:bg-zinc-950/80 backdrop-blur border border-black/10 dark:border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Create Your <span className="text-red-500">GymX</span> Account
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Start your fitness journey today
          </p>
        </div>

        {/* Account Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <Field
            icon={User}
            placeholder="Full Name"
            error={errors.name}
            {...register("name", { required: "Full name is required" })}
          />

          <Field
            icon={Mail}
            type="email"
            placeholder="Email"
            error={errors.email}
            {...register("email", {
              required: "Email is required",
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
            {...register("phone", {
              required: "Mobile number required",
              minLength: { value: 10, message: "Min 10 digits" },
            })}
          />

          <Field
            icon={Lock}
            type="password"
            placeholder="Password"
            error={errors.password}
            {...register("password", {
              required: "Password required",
              minLength: { value: 6, message: "Min 6 characters" },
            })}
          />

          <Field
            icon={Lock}
            type="password"
            placeholder="Confirm Password"
            error={errors.confirmPassword}
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (val) => val === password || "Passwords do not match",
            })}
          />
        </div>

        {/* Personal Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-black dark:text-white">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Field
              icon={Calendar}
              type="number"
              placeholder="Age"
              error={errors.age}
              {...register("age", {
                required: "Age required",
                min: { value: 10, message: "Too low" },
                max: { value: 100, message: "Too high" },
              })}
            />

            <SelectField
              label="Gender"
              error={errors.gender}
              {...register("gender", { required: "Select gender" })}
              options={["Male", "Female", "Other"]}
            />

            <Field
              icon={Ruler}
              type="number"
              placeholder="Height (cm)"
              error={errors.height}
              {...register("height", { required: "Height required" })}
            />

            <Field
              icon={Weight}
              type="number"
              placeholder="Weight (kg)"
              error={errors.weight}
              {...register("weight", { required: "Weight required" })}
            />
          </div>
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold text-lg shadow-lg shadow-red-500/30 transition"
        >
          Register Now
        </motion.button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <span className="text-red-500 cursor-pointer">Login</span>
        </p>
      </motion.form>
    </div>
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

function SelectField({ label, options, error, ...props }) {
  return (
    <div className="space-y-1">
      <select
        {...props}
        className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition
        bg-transparent border-black/15 dark:border-white/15
        focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
        defaultValue=""
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500">{error.message}</p>}
    </div>
  );
}

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Lock, User } from "lucide-react";

// // ================= REGISTER PAGE =================
// export default function RegisterPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirm: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirm) {
//       alert("Passwords do not match");
//       return;
//     }
//     console.log("REGISTER DATA", form);
//     alert("Register submitted (frontend demo)");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-800 dark:from-black dark:to-zinc-900 px-4">
//       <motion.form
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur border border-white/10 p-8 text-white shadow-2xl"
//       >
//         <h2 className="text-3xl font-extrabold mb-2 text-center">
//           Create Account
//         </h2>
//         <p className="text-center text-gray-400 mb-8 text-sm">
//           Join the gym community
//         </p>

//         {/* Name */}
//         <div className="mb-5">
//           <label className="text-sm text-gray-300">Full Name</label>
//           <div className="mt-2 flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-3">
//             <User size={18} />
//             <input
//               name="name"
//               required
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Your name"
//               className="w-full bg-transparent py-3 outline-none"
//             />
//           </div>
//         </div>
//         {/* Email */}
//         <div className="mb-5">
//           <label className="text-sm text-gray-300">Email</label>
//           <div className="mt-2 flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-3">
//             <Mail size={18} />
//             <input
//               name="email"
//               type="email"
//               required
//               value={form.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               className="w-full bg-transparent py-3 outline-none"
//             />
//           </div>
//         </div>

//         {/* Password */}
//         <div className="mb-5">
//           <label className="text-sm text-gray-300">Password</label>
//           <div className="mt-2 flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-3">
//             <Lock size={18} />
//             <input
//               name="password"
//               type="password"
//               required
//               value={form.password}
//               onChange={handleChange}
//               placeholder="••••••••"
//               className="w-full bg-transparent py-3 outline-none"
//             />
//           </div>
//         </div>

//         {/* Confirm */}
//         <div className="mb-6">
//           <label className="text-sm text-gray-300">Confirm Password</label>
//           <div className="mt-2 flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-3">
//             <Lock size={18} />
//             <input
//               name="confirm"
//               type="password"
//               required
//               value={form.confirm}
//               onChange={handleChange}
//               placeholder="••••••••"
//               className="w-full bg-transparent py-3 outline-none"
//             />
//           </div>
//         </div>

//         <button className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 font-semibold transition shadow-lg shadow-red-500/30">
//           Register
//         </button>
//       </motion.form>{" "}
//     </div>
//   );
// }
