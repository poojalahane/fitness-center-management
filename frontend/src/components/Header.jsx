import React from "react";
import assest from '../assets/logo.png'

const Header = () => {
  return (
    <header className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-6">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={assest}
            alt="Gym Logo"
            className="w-11 h-11"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a
            href="#"
            className="relative text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
          >
            Home
          </a>

          <a href="#" className="hover:text-gray-300 transition">
            About
          </a>

          <a href="#" className="hover:text-gray-300 transition">
            Workout Programs
          </a>

          <a href="#" className="hover:text-gray-300 transition">
            Recipes
          </a>

          <a href="#" className="hover:text-gray-300 transition">
            Store
          </a>

          <a href="#" className="hover:text-gray-300 transition">
            Login
          </a>

          <a
            href="#"
            className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Sign up
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Header;

