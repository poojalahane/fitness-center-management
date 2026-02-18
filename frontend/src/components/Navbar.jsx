import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  User,
  LogIn,
  UserPlus,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [dark, setDark] = useState(true);

  // 🔹 Hardcoded user (simulate logged-in state)
  const [user, setUser] = useState({
    name: "Pooja",
    avatar: "https://i.pravatar.cc/100?img=5",
  });

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const logout = () => {
    setUser(null);
    setAccountOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/90 dark:bg-black/90 bg-white/90 backdrop-blur border-b border-white/10 dark:text-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-extrabold tracking-wide"
        >
          <span className="text-red-500">Gym</span>X
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative cursor-pointer transition hover:text-red-500 ${
                  isActive ? "text-red-500" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Join Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-xl bg-red-500 font-semibold text-white shadow-lg shadow-red-500/30 hover:bg-red-600 transition"
          >
            Join Now
          </motion.button>

          {/* Account Dropdown */}
          <div className="relative">
            <button
              onClick={() => setAccountOpen(!accountOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              {user ? (
                <img
                  src={user.avatar}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <User size={18} />
              )}
              {user ? user.name : "Account"}
            </button>

            {accountOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-3 w-48 rounded-2xl bg-zinc-900 text-white border border-white/10 shadow-xl p-2"
              >
                {user ? (
                  <>
                    <NavLink
                      to="/profile"
                      className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-white/10"
                    >
                      <User size={16} /> Profile
                    </NavLink>
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-white/10"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-white/10"
                    >
                      <LogIn size={16} /> Login
                    </NavLink>

                    <NavLink
                      to="/register"
                      className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-white/10"
                    >
                      <UserPlus size={16} /> Register
                    </NavLink>
                  </>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden bg-zinc-950 text-white border-t border-white/10"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block hover:text-red-500 ${isActive ? "text-red-500" : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <button className="w-full px-4 py-2 rounded-xl bg-red-500 font-semibold hover:bg-red-600">
              Join Now
            </button>

            {user ? (
              <>
                <NavLink
                  to="/profile"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10"
                >
                  <User size={16} /> Profile
                </NavLink>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10"
                >
                  <LogOut size={16} /> Logout
                </button>
              </>
            ) : (
              <>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10">
                  <LogIn size={16} /> Login
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10">
                  <UserPlus size={16} /> Register
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
//       <h1 className="text-2xl font-bold text-red-500">GymX</h1>

//       <ul className="hidden md:flex gap-6">
//         <li className="hover:text-red-500 cursor-pointer">Home</li>
//         <li className="hover:text-red-500 cursor-pointer">Programs</li>
//         <li className="hover:text-red-500 cursor-pointer">Pricing</li>
//         <li className="hover:text-red-500 cursor-pointer">Contact</li>
//       </ul>

//       <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
//         Join Now
//       </button>
//     </nav>
//   );
// }
