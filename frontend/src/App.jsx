import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import LoginPage from "./components/AuthPages/LoginPage";
import RegisterPage from "./components/AuthPages/RegisterPage";
export default function App() {
  return (
    <div className="font-sans min-h-screen bg-white dark:bg-black transition-colors">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
