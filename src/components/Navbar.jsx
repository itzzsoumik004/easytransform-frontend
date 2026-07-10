import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
        >
          <FaFilePdf size={30} />
          EasyTransform
        </Link>

        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/image-to-pdf">Image to PDF</Link>
          <Link to="/pdf-to-word">PDF to Word</Link>
          <Link to="/word-to-pdf">Word to PDF</Link>
        </div>

      

      </div>
    </nav>
  );
}

export default Navbar;