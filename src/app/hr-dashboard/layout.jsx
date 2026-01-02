"use client";

import Link from "next/link";
import ProtectedRoute from "../../components/ProtectedRoute";
import {
  LogOut,
  Users,
  CalendarCheck,
  ClipboardList,
  Bell,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function HrLayout({ children }) {
  const { logout } = useAuth();

  return (
    <ProtectedRoute allowedRoles={["hr"]}>
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        {/* ===== Sidebar (FIXED) ===== */}
        <aside className="w-64 bg-[#0f172a] text-gray-300 flex flex-col fixed top-0 left-0 h-screen">
          {/* Header */}
          <div className="p-6 border-b border-gray-700">
            <h1 className="text-xl font-bold text-white">HR Panel</h1>
            <p className="text-sm text-gray-400">Employee Management</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <SidebarItem
              href="/hr-dashboard"
              icon={<Users size={18} />}
              label="Dashboard"
            />
            <SidebarItem
              href="/hr-dashboard/attendance"
              icon={<CalendarCheck size={18} />}
              label="Attendance"
            />
            <SidebarItem
              href="/hr-dashboard/leave"
              icon={<ClipboardList size={18} />}
              label="Leave Requests"
            />
            <SidebarItem
              href="/hr-dashboard/requests"
              icon={<Bell size={18} />}
              label="Employee Requests"
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

        {/* ===== Page Content (SCROLLABLE) ===== */}
        <main className="ml-64 flex-1 h-screen overflow-y-auto p-6 md:p-8">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}

function SidebarItem({ href, icon, label }) {
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
