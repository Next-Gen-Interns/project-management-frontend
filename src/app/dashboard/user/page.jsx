"use client";

import ProtectedRoute from "../../../components/ProtectedRoute";

export default function Usersmanagemet() {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-1">User Management</h1>
        <p className="text-gray-500 mb-6">Manage all registered users</p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card title="Total Users" value="120" />
          <Card title="Active" value="98" />
          <Card title="Inactive" value="15" />
          <Card title="Blocked" value="7" />
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
          <input
            placeholder="Search by name or email"
            className="border rounded px-4 py-2 w-full md:w-1/3"
          />

          <button className="bg-[#0f172a] text-white px-6 py-2 rounded">
            + Add User
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-3">Rahul Sharma</td>
                <td className="p-3">rahul@gmail.com</td>
                <td className="p-3">Employee</td>
                <td className="p-3 text-green-600">Active</td>
                <td className="p-3 space-x-2">
                  <button className="text-blue-600">Edit</button>
                  <button className="text-red-600">Block</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedRoute>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white rounded shadow p-5">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
