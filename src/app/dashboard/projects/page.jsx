"use client";

export default function ProjectManagementPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-1">Project Management</h1>
      <p className="text-gray-500 mb-6">Manage all projects in the system</p>

      {/* Stats (SAME LIKE USER MANAGEMENT) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card title="Total Projects" value="18" />
        <Card title="Active Projects" value="12" />
        <Card title="Completed Projects" value="4" />
        <Card title="On Hold" value="2" />
      </div>

      {/* Actions (SAME STRUCTURE) */}
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
        <input
          placeholder="Search by project name"
          className="border rounded px-4 py-2 w-full md:w-1/3"
        />

        <button className="bg-[#0f172a] text-white px-6 py-2 rounded">
          + Add Project
        </button>
      </div>

      {/* Table (SAME DESIGN AS USERS TABLE) */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Project Name</th>
              <th className="p-3">Client</th>
              <th className="p-3">Manager</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-3">CRM System</td>
              <td className="p-3">ABC Pvt Ltd</td>
              <td className="p-3">Rahul Sharma</td>
              <td className="p-3 text-green-600">Active</td>
              <td className="p-3 space-x-2">
                <button className="text-blue-600">View</button>
                <button className="text-red-600">Archive</button>
              </td>
            </tr>

            <tr className="border-t">
              <td className="p-3">HR Portal</td>
              <td className="p-3">Internal</td>
              <td className="p-3">Neha Patel</td>
              <td className="p-3 text-yellow-600">On Hold</td>
              <td className="p-3 space-x-2">
                <button className="text-blue-600">View</button>
                <button className="text-red-600">Archive</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* SAME CARD COMPONENT STYLE */
function Card({ title, value }) {
  return (
    <div className="bg-white rounded shadow p-5">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
