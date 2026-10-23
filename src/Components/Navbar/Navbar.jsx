import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN FLEX: Logo (left) | Everything else (right) */}
        <div className="flex items-center justify-between h-16">

          {/* 1️⃣ LOGO */}
          <Link to="/" className="flex items-center z-50">
            <span className="text-2xl font-bold text-blue-600">
              Skillin<span className="text-gray-800">.</span>
            </span>
          </Link>

          {/* 2️⃣ RIGHT SIDE GROUP (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                to="/signin"
                className="px-6 py-1 border border-black rounded-2xl transition-colors duration-200 hover:bg-gray-50"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-6 py-1 text-white bg-amber-600 rounded-2xl transition-colors duration-200 hover:bg-amber-700"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 text-2xl z-50 relative"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* ================= MOBILE SLIDING SIDEBAR ================= */}
      
      {/* Overlay (Background Dim) */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar (Slides from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header (Close Button & Logo) */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="text-xl font-bold text-blue-600">
            Skillin<span className="text-gray-800">.</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-red-500 text-2xl transition-colors"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col h-[calc(100%-65px)] p-6 justify-between">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-800 text-lg font-medium hover:text-blue-600 block transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Sidebar Buttons */}
          <div className="flex flex-col gap-3 mt-auto mb-6">
            <Link
              to="/signin"
              className="text-center px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="text-center px-4 py-2.5 bg-amber-600 text-white font-medium rounded-xl hover:bg-amber-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;