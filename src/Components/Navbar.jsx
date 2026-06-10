import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

const navLinks = ["home", "shop", "product", "about", "contact"];

  return (
    <nav className="bg-[#F8F5F1] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-4 md:py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-700">
          FurniCraft
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-amber-700 transition duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <a
          href="#shop"
          className="hidden md:block bg-amber-700 text-white px-6 py-3 rounded-xl hover:bg-amber-800 transition duration-300 hover:scale-105"
        >
          Shop Now
        </a>

        {/* Mobile Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-3xl text-amber-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 top-full w-full bg-[#F8F5F1] border-t shadow-lg transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-gray-700 font-medium">

          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="hover:text-amber-700 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}

          {/* Mobile Button */}
          <a
            href="#shop"
            onClick={() => setOpen(false)}
            className="bg-amber-700 text-white px-6 py-3 rounded-xl hover:bg-amber-800 transition duration-300 hover:scale-105"
          >
            Shop Now
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;