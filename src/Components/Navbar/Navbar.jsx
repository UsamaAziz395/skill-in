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
    <nav className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN FLEX: Logo (left) | Everything else (right) */}
        <div className="flex items-center justify-between h-16">

          {/* 1️⃣ LOGO — separate element on the left */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">
              Skillin<span className="text-gray-800">.</span>
            </span>
          </Link>

          {/* 2️⃣ RIGHT SIDE GROUP — links + buttons together */}
          <div className="hidden md:flex items-center gap-8">

            {/* Nav Links */}
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

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <Link
                to="/signin"
                className="px-6 py-1 border border-black rounded-2xl transition-colors duration-200"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-6 py-1 text-white bg-amber-600 rounded-2xl transition-colors duration-200"
              >
                Sign Up
              </Link>
            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-4 pb-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-700 hover:text-blue-600 font-medium block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 mt-6">
            <Link
              to="/signin"
              className="text-center px-4 py-2 border border-black rounded-2xl"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="text-center px-4 py-2 bg-amber-600 text-white rounded-2xl"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;