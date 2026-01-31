export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
      <h1 className="text-2xl font-bold text-red-500">GymX</h1>

      <ul className="hidden md:flex gap-6">
        <li className="hover:text-red-500 cursor-pointer">Home</li>
        <li className="hover:text-red-500 cursor-pointer">Programs</li>
        <li className="hover:text-red-500 cursor-pointer">Pricing</li>
        <li className="hover:text-red-500 cursor-pointer">Contact</li>
      </ul>

      <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
        Join Now
      </button>
    </nav>
  );
}
