import { useNavigate } from "react-router-dom";

function AdminNavbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    navigate("/admin/login");

  };

  const admin =
    JSON.parse(localStorage.getItem("admin"));

  return (
    <div className="bg-white shadow px-8 py-5 flex justify-between items-center">

      <h2 className="text-xl font-bold">
        Admin Panel
      </h2>

      <div className="flex items-center gap-5">

        <span className="font-semibold">
          {admin?.name}
        </span>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default AdminNavbar;