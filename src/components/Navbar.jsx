import { Link, NavLink } from "react-router-dom";
import { FaFilePdf, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
        >
          <FaFilePdf size={30} />
          EasyTransform
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "hover:text-blue-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/image-to-pdf"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "hover:text-blue-600 transition"
            }
          >
            Image to PDF
          </NavLink>

          <NavLink
            to="/pdf-to-word"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "hover:text-blue-600 transition"
            }
          >
            PDF to Word
          </NavLink>

          <NavLink
            to="/word-to-pdf"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "hover:text-blue-600 transition"
            }
          >
            Word to PDF
          </NavLink>

          <Link
            to="/admin/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            Admin
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-white border-t shadow-lg">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Home
          </NavLink>

          <NavLink
            to="/image-to-pdf"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Image to PDF
          </NavLink>

          <NavLink
            to="/pdf-to-word"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            PDF to Word
          </NavLink>

          <NavLink
            to="/word-to-pdf"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Word to PDF
          </NavLink>

          <NavLink
            to="/admin/login"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Admin
          </NavLink>

        </div>

      )}

    </nav>
  );
}

export default Navbar;