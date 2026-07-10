import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";

function Settings() {

  const [websiteName, setWebsiteName] =
    useState("EasyTransform");

  const [maintenance, setMaintenance] =
    useState(false);

  const saveSettings = () => {

    alert("Settings Saved Successfully");

  };

  return (

    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="flex-1">

        <AdminNavbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-8">
            Settings
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl">

            <div className="mb-6">

              <label className="font-semibold block mb-2">
                Website Name
              </label>

              <input
                value={websiteName}
                onChange={(e)=>
                  setWebsiteName(e.target.value)
                }
                className="w-full border rounded-lg p-3"
              />

            </div>

            <div className="mb-8">

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  checked={maintenance}
                  onChange={()=>
                    setMaintenance(!maintenance)
                  }
                />

                Maintenance Mode

              </label>

            </div>

            <button
              onClick={saveSettings}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
            >
              Save Settings
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Settings;