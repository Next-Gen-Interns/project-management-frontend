"use client";

import Link from "next/link";
import { CheckSquare, Users, ClipboardList, LogOut } from "lucide-react";
import ProtectedRoute from "../../components/ProtectedRoute";
import { useAuth } from "../../app/context/AuthContext";

export default function TLLayout({ children }) {
  const { logout } = useAuth();

  return (
    <ProtectedRoute allowedRoles={["tl"]}>
      <div className="min-h-screen bg-gray-100">
        {/* ===== Sidebar (FIXED) ===== */}
        <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-gray-300 flex flex-col z-50">
          <div className="p-6 border-b border-gray-700">
            <h1 className="text-xl font-bold text-white">TL Panel</h1>
            <p className="text-sm text-gray-400">Team Lead Dashboard</p>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            <SidebarItem
              href="/tl-dashboard"
              icon={<ClipboardList size={18} />}
              label="Overview"
            />
            <SidebarItem
              href="/tl-dashboard/tasks"
              icon={<CheckSquare size={18} />}
              label="Assign Tasks"
            />
            <SidebarItem
              href="/tl-dashboard/team"
              icon={<Users size={18} />}
              label="My Team"
            />
          </nav>

          <div className="p-4 border-t border-gray-700">
            <button
              onClick={logout}
              className="flex items-center gap-3 w-full px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        {/* ===== Page Content ===== */}
        <main className="ml-64 p-6 min-h-screen">{children}</main>
      </div>
    </ProtectedRoute>
  );
}

function SidebarItem({ href, icon, label }) {
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
