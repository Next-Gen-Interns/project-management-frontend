"use client";

import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="Total employee" value="120" />
        <DashboardCard title="Projects" value="18" />
        <DashboardCard title="Tasks" value="245" />
        <DashboardCard title="Active TLs" value="6" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>✔ Project "CRM System" created</li>
            <li>✔ Task assigned to Employee</li>
            <li>✔ New user added</li>
            <li>✔ Task marked as completed</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-4">Quick Actions</h3>

          <div className="grid grid-cols-2 gap-4">
            {/* ✅ FIXED LINK */}
            <ActionButton
              label="Add User"
              onClick={() => router.push("/dashboard/user")}
            />

            <ActionButton label="Create Project" />
            <ActionButton label="Assign Task" />
            <ActionButton label="View Reports" />
          </div>
        </div>
      </div>
    </>
  );
}

function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
    </div>
  );
}

function ActionButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm"
    >
      {label}
    </button>
  );
}
