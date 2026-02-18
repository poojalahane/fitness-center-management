import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Dumbbell, Activity, Flame } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <div className="bg-gray-900/90 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-orange-500 h-44" />

          <div className="relative p-6">
            {/* Avatar */}
            <div className="absolute -top-16 left-6">
              <img
                src="https://i.pravatar.cc/300"
                alt="profile"
                className="h-32 w-32 rounded-2xl object-cover border-4 border-gray-900 shadow-lg"
              />
            </div>

            {/* Top Info */}
            <div className="ml-44 mt-2">
              <h1 className="text-3xl font-bold">Rahul Patil</h1>
              <p className="text-gray-300 flex items-center gap-2 mt-1">
                <Dumbbell size={16} /> Gym Member
              </p>

              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="px-3 py-1 text-sm bg-red-500/20 text-red-400 rounded-full">
                  Weight Training
                </span>
                <span className="px-3 py-1 text-sm bg-orange-500/20 text-orange-400 rounded-full">
                  Fat Loss
                </span>
                <span className="px-3 py-1 text-sm bg-yellow-500/20 text-yellow-400 rounded-full">
                  Cardio
                </span>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="bg-gray-800 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">72 kg</p>
                <p className="text-gray-400 text-sm">Weight</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">178 cm</p>
                <p className="text-gray-400 text-sm">Height</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">18%</p>
                <p className="text-gray-400 text-sm">Body Fat</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">5 Days</p>
                <p className="text-gray-400 text-sm">Weekly Training</p>
              </div>
            </div>

            {/* Workout + Calories */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-800 rounded-2xl p-5">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Activity size={18} /> Workout Plan
                </h2>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Monday — Chest & Triceps</li>
                  <li>• Tuesday — Back & Biceps</li>
                  <li>• Wednesday — Cardio</li>
                  <li>• Thursday — Legs</li>
                  <li>• Friday — Shoulders</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-2xl p-5">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Flame size={18} /> Daily Targets
                </h2>
                <div className="space-y-3 text-sm text-gray-300">
                  <p>
                    Calories:{" "}
                    <span className="text-white font-semibold">2200 kcal</span>
                  </p>
                  <p>
                    Protein:{" "}
                    <span className="text-white font-semibold">140 g</span>
                  </p>
                  <p>
                    Water: <span className="text-white font-semibold">3 L</span>
                  </p>
                  <p>
                    Steps:{" "}
                    <span className="text-white font-semibold">10,000</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-8 grid md:grid-cols-3 gap-4 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                <Mail size={14} /> rahul@email.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} /> +91 90000 00000
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} /> Pune, India
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="px-6 py-2 rounded-xl bg-red-600 font-semibold hover:scale-105 transition">
                Update Progress
              </button>
              <button className="px-6 py-2 rounded-xl border border-gray-700 hover:bg-gray-800 transition">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
