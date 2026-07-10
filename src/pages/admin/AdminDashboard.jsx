import { useEffect, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import DashboardCard from "../../components/admin/DashboardCard";
import api from "../../services/api";

function AdminDashboard() {

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAdmins: 0,
    pdfConversions: 0,
    imageConversions: 0,
    totalConversions: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {

    try {

      const token = localStorage.getItem("adminToken");

      const res = await api.get(
        "/admin/dashboard",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setStats(res.data.stats);

    } catch (err) {

      console.log(err);

    }

  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="flex-1">

        <AdminNavbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-8">
            Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

            <DashboardCard
              title="Users"
              value={stats.totalUsers}
              color="bg-blue-500"
            />

            <DashboardCard
              title="Admins"
              value={stats.totalAdmins}
              color="bg-indigo-500"
            />

            <DashboardCard
              title="PDF Tools"
              value={stats.pdfConversions}
              color="bg-red-500"
            />

            <DashboardCard
              title="Image Tools"
              value={stats.imageConversions}
              color="bg-green-500"
            />

            <DashboardCard
              title="Conversions"
              value={stats.totalConversions}
              color="bg-purple-500"
            />

          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-10">

            <div className="bg-white rounded-xl shadow-lg p-6">

              <h2 className="text-xl font-bold mb-5">
                System Status
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Server</span>
                  <span className="text-green-600 font-bold">
                    Online
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Database</span>
                  <span className="text-green-600 font-bold">
                    Connected
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Version</span>
                  <span>1.0.0</span>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">

              <h2 className="text-xl font-bold mb-5">
                Quick Actions
              </h2>

              <div className="grid grid-cols-2 gap-4">

                <button className="bg-blue-600 text-white rounded-lg py-3">
                  Users
                </button>

                <button className="bg-green-600 text-white rounded-lg py-3">
                  Analytics
                </button>

                <button className="bg-purple-600 text-white rounded-lg py-3">
                  Settings
                </button>

                <button className="bg-red-600 text-white rounded-lg py-3">
                  Logout
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;