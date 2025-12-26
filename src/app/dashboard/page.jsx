"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import {
  Users,
  FolderKanban,
  CheckSquare,
  Briefcase,
  LogOut,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { logout } = useAuth();
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-gray-300 flex flex-col">
          <div className="p-6 border-b border-gray-700">
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
            <p className="text-sm text-gray-400">Project Management</p>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            <SidebarItem icon={<Briefcase />} label="Dashboard" />
            <SidebarItem icon={<Users />} label="User Management" />
            <SidebarItem icon={<FolderKanban />} label="Project Management" />
            <SidebarItem icon={<CheckSquare />} label="Task Management" />
          </nav>

          <div className="p-4 border-t border-gray-700">
            <button
              className="flex items-center gap-3 w-full px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg"
              onClick={logout}
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard title="Total Users" value="120" />
            <DashboardCard title="Projects" value="18" />
            <DashboardCard title="Tasks" value="245" />
            <DashboardCard title="Active TLs" value="6" />
          </div>

          {/* Activity & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>✔ Project "CRM System" created</li>
                <li>✔ Task assigned to Employee</li>
                <li>✔ New user added</li>
                <li>✔ Task marked as completed</li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <ActionButton label="Add User" />
                <ActionButton label="Create Project" />
                <ActionButton label="Assign Task" />
                <ActionButton label="View Reports" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

/* Reusable Components */

function SidebarItem({ icon, label }) {
  return (
    <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-gray-800 transition">
      {icon}
      <span>{label}</span>
    </button>
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

function ActionButton({ label }) {
  return (
    <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm">
      {label}
    </button>
  );
}
