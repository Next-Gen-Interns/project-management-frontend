"use client";

export default function TaskManagementPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-1">Task Management</h1>
      <p className="text-gray-500 mb-6">Manage and track all tasks</p>

      {/* Stats Cards (Same Design) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card title="Total Tasks" value="245" />
        <Card title="In Progress" value="120" />
        <Card title="Completed" value="90" />
        <Card title="Pending" value="35" />
      </div>

      {/* Search + Add */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search task name"
          className="border rounded px-4 py-2 w-full md:w-1/3"
        />

        <button className="bg-[#0f172a] text-white px-6 py-2 rounded">
          + Create Task
        </button>
      </div>

      {/* Task Table (Admin View) */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Task Name</th>
              <th className="p-3 text-left">Project</th>
              <th className="p-3 text-left">Assigned By</th>
              <th className="p-3 text-left">Assigned To</th>
              <th className="p-3 text-left">Start Date</th>
              <th className="p-3 text-left">End Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-3">Create Login UI</td>
              <td className="p-3">CRM System</td>
              <td className="p-3">Admin</td>
              <td className="p-3">Amit Patel</td>
              <td className="p-3">2025-01-10</td>
              <td className="p-3">2025-01-15</td>
              <td className="p-3 text-yellow-600">In Progress</td>
              <td className="p-3 space-x-2">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>

            <tr className="border-t">
              <td className="p-3">API Integration</td>
              <td className="p-3">HR Portal</td>
              <td className="p-3">Project Manager</td>
              <td className="p-3">Neha Shah</td>
              <td className="p-3">2025-01-05</td>
              <td className="p-3">2025-01-20</td>
              <td className="p-3 text-green-600">Completed</td>
              <td className="p-3 space-x-2">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Reusable Card */
function Card({ title, value }) {
  return (
    <div className="bg-white rounded shadow p-5">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
    </div>
  );
}
