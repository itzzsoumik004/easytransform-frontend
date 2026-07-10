import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen">

      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        EasyTransform
      </div>

      <nav className="mt-8 flex flex-col">

        <Link
          to="/admin/dashboard"
          className="px-6 py-4 hover:bg-gray-800"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/users"
          className="px-6 py-4 hover:bg-gray-800"
        >
          Users
        </Link>

        <Link
          to="/admin/analytics"
          className="px-6 py-4 hover:bg-gray-800"
        >
          Analytics
        </Link>

        <Link
          to="/admin/settings"
          className="px-6 py-4 hover:bg-gray-800"
        >
          Settings
        </Link>

      </nav>

    </div>
  );
}

export default AdminSidebar;