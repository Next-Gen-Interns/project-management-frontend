"use client";

import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import {
  Users,
  FolderKanban,
  CheckSquare,
  Briefcase,
  LogOut,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function DashboardLayout({ children }) {
  const { logout } = useAuth();

  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="flex min-h-screen bg-gray-100">
        {/* Static Sidebar */}
        <aside className="w-64 bg-gray-900 text-gray-300 flex flex-col fixed inset-y-0 left-0">
          {/* Logo / Header */}
          <div className="p-6 border-b border-gray-700">
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
            <p className="text-sm text-gray-400">Project Management</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <SidebarItem
              icon={<Briefcase />}
              label="Dashboard"
              href="/dashboard"
            />
            <SidebarItem
              icon={<Users />}
              label="User Management"
              href="/dashboard/user"
            />
            <SidebarItem
              icon={<FolderKanban />}
              label="Project Management"
              href="/dashboard/projects"
            />
            <SidebarItem
              icon={<CheckSquare />}
              label="Task Management"
              href="/dashboard/tasks"
            />
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-700">
            <button
              onClick={logout}
              className="flex items-center gap-3 w-full px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        {/* Page Content */}
        <main className="flex-1 ml-64 p-8">{children}</main>
      </div>
    </ProtectedRoute>
  );
}

/* Sidebar Item */
function SidebarItem({ icon, label, href }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
