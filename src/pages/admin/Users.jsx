import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await api.get("/admin/users", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setUsers(res.data.users);

    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this user?"
    );

    if (!confirmDelete) return;

    try {

      const token = localStorage.getItem("adminToken");

      await api.delete("/admin/users/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      fetchUsers();

    } catch (err) {

      console.log(err);

      alert("Unable to delete user");

    }

  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="flex-1">

        <AdminNavbar />

        <div className="p-8">

          <div className="flex justify-between items-center mb-6">

            <h1 className="text-3xl font-bold">
              User Management
            </h1>

            <input
              type="text"
              placeholder="Search user..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg px-4 py-2 w-72"
            />

          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <table className="w-full">

              <thead className="bg-gray-200">

                <tr>

                  <th className="p-4 text-left">Name</th>

                  <th className="p-4 text-left">Email</th>

                  <th className="p-4 text-left">Role</th>

                  <th className="p-4 text-left">Joined</th>

                  <th className="p-4 text-center">Action</th>

                </tr>

              </thead>

              <tbody>

                {filteredUsers.length === 0 ? (

                  <tr>

                    <td
                      colSpan="5"
                      className="text-center p-6"
                    >
                      No users found.
                    </td>

                  </tr>

                ) : (

                  filteredUsers.map((user) => (

                    <tr
                      key={user._id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="p-4">{user.name}</td>

                      <td className="p-4">{user.email}</td>

                      <td className="p-4">
                        {user.role}
                      </td>

                      <td className="p-4">
                        {new Date(
                          user.createdAt
                        ).toLocaleDateString()}
                      </td>

                      <td className="p-4 text-center">

                        <button
                          onClick={() =>
                            deleteUser(user._id)
                          }
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Users;