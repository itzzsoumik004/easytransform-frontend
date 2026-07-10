import { Routes, Route } from "react-router-dom";
import MergePdf from "./pages/MergePdf";
import ImageConverter from "./pages/ImageConverter";
import ImageCompressor from "./pages/ImageCompressor";
import ImageResizer from "./pages/ImageResizer";
import PassportPhoto from "./pages/PassportPhoto";
import Home from "./pages/Home";
import BackgroundRemover from "./pages/BackgroundRemover";
import ImageToPdf from "./pages/ImageToPdf";
import PdfToWord from "./pages/PdfToWord";
import WordToPdf from "./pages/WordToPdf";
import SplitPdf from "./pages/SplitPdf";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Users from "./pages/admin/Users";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Settings from "./pages/admin/Settings";
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute";
import PdfCompressor from "./pages/PdfCompressor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image-to-pdf" element={<ImageToPdf />} />
      <Route path="/pdf-to-word" element={<PdfToWord />} />
      <Route path="/word-to-pdf" element={<WordToPdf />} />
      <Route path="/merge-pdf" element={<MergePdf />} />
      <Route path="/split-pdf" element={<SplitPdf />} />
      <Route
  path="/image-resizer"
  element={<ImageResizer />}
/>
<Route
  path="/admin/login"
  element={<AdminLogin />}
/>
<Route
  path="/about"
  element={<About />}
/>
<Route
  path="/contact"
  element={<Contact />}
/>
<Route
  path="/admin/dashboard"
  element={
    <AdminProtectedRoute>
      <AdminDashboard />
    </AdminProtectedRoute>
  }
/>
<Route
  path="/admin/settings"
  element={
    <AdminProtectedRoute>
      <Settings />
    </AdminProtectedRoute>
  }
/>
<Route
  path="/passport-photo"
  element={<PassportPhoto />}
/>
      <Route path="/pdf-compressor" element={<PdfCompressor />} />
      <Route
  path="/image-compressor"
  element={<ImageCompressor />}
/>
<Route
  path="/admin/users"
  element={
    <AdminProtectedRoute>
      <Users />
    </AdminProtectedRoute>
  }
/>
<Route
  path="/background-remover"
  element={<BackgroundRemover />}
/>
      <Route path="/image-converter" element={<ImageConverter />} />
    </Routes>
  );
}

export default App;