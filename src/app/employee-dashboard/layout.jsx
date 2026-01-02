"use client";

import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import { LayoutDashboard, ClipboardList, User, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function EmployeeDashboardLayout({ children }) {
  const { logout } = useAuth();

  return (
    <ProtectedRoute allowedRoles={["employee"]}>
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        {/* ===== Sidebar (FIXED) ===== */}
        <aside className="w-64 bg-[#0f172a] text-gray-300 flex flex-col fixed left-0 top-0 h-screen">
          {/* Logo */}
          <div className="p-6 border-b border-gray-700">
            <h1 className="text-xl font-bold text-white tracking-wide">
              Employee Panel
            </h1>
            <p className="text-sm text-gray-400 mt-1">Work Dashboard</p>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <SidebarItem
              icon={<LayoutDashboard size={18} />}
              label="Dashboard"
              href="/employee-dashboard"
            />
            <SidebarItem
              icon={<ClipboardList size={18} />}
              label="My Tasks"
              href="/employee-dashboard/tasks"
            />
            <SidebarItem
              icon={<User size={18} />}
              label="Profile"
              href="/employee-dashboard/profile"
            />
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-700">
            <button
              onClick={logout}
              className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-red-400 hover:bg-red-500/10 transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        {/* ===== Content (SCROLLABLE) ===== */}
        <main className="ml-64 flex-1 h-screen overflow-y-auto p-6 md:p-8">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}

function SidebarItem({ icon, label, href }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
