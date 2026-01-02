"use client";

import ProtectedRoute from "../../../components/ProtectedRoute";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../api/emp_apis";
import {
  Users,
  UserCheck,
  UserX,
  ShieldAlert,
  Search,
  Plus,
  MoreVertical,
  Edit,
  Eye,
  Trash2,
  Filter,
  Download,
  UserPlus,
} from "lucide-react";

export default function Usersmanagemet() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const loadUsers = async () => {
    try {
      const usersList = await getAllUsers();
      setUsers(usersList || []);
    } catch (err) {
      console.error("Fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // ===== FILTERED USERS =====
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // ===== COUNTS =====
  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === "active").length;
  const inactiveUsers = users.filter((u) => u.status === "inactive").length;
  const blockedUsers = users.filter((u) => u.status === "blocked").length;

  // ===== ACTION HANDLERS =====
  const handleEditUser = (userId) => {
    router.push(`/dashboard/user/edit/${userId}`);
  };

  const handleViewUser = (userId) => {
    router.push(`/dashboard/user/${userId}`);
  };

  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        {/* ===== PAGE HEADER ===== */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              User Management
            </h1>
          </div>
          <p className="text-gray-600">
            Manage and oversee all registered users in the system
          </p>
        </div>

        {/* ===== STATS CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Users"
            value={totalUsers}
            icon={<Users className="w-5 h-5" />}
            color="blue"
            trend="+12% from last month"
          />
          <StatCard
            title="Active"
            value={activeUsers}
            icon={<UserCheck className="w-5 h-5" />}
            color="green"
          />
          <StatCard
            title="Inactive"
            value={inactiveUsers}
            icon={<UserX className="w-5 h-5" />}
            color="yellow"
          />
          <StatCard
            title="Blocked"
            value={blockedUsers}
            icon={<ShieldAlert className="w-5 h-5" />}
            color="red"
          />
        </div>

        {/* ===== MAIN CONTENT CARD ===== */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* ===== TOOLBAR ===== */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 w-full md:w-80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="blocked">Blocked</option>
                  </select>
                </div>

                <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                  <Download className="w-5 h-5" />
                  <span className="hidden sm:inline">Export</span>
                </button>

                <button
                  onClick={() => router.push("/dashboard/user/add-user")}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Add User</span>
                </button>
              </div>
            </div>
          </div>

          {/* ===== TABLE ===== */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    USER
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    ROLE
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    JOINED
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    STATUS
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    ACTIONS
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="p-8">
                      <div className="flex flex-col items-center justify-center gap-3">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className="text-gray-500">Loading users...</p>
                      </div>
                    </td>
                  </tr>
                ) : filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-8 text-center">
                      <div className="flex flex-col items-center justify-center gap-3">
                        <Users className="w-12 h-12 text-gray-300" />
                        <div>
                          <p className="text-gray-700 font-medium">
                            No users found
                          </p>
                          <p className="text-gray-500 text-sm">
                            {searchQuery || statusFilter !== "all"
                              ? "Try adjusting your search or filter"
                              : "Get started by adding your first user"}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user, index) => (
                    <UserRow
                      key={user.id || index}
                      user={user}
                      index={index}
                      onEdit={handleEditUser}
                      onView={handleViewUser}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* ===== PAGINATION/FOOTER ===== */}
          <div className="p-4 border-t border-gray-200 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-semibold">{filteredUsers.length}</span> of{" "}
              <span className="font-semibold">{users.length}</span> users
            </p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white">
                1
              </button>
              <button className="px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

/* ===== STAT CARD COMPONENT ===== */
function StatCard({ title, value, icon, color, trend }) {
  const colors = {
    blue: "bg-blue-50 border-blue-100 text-blue-600",
    green: "bg-green-50 border-green-100 text-green-600",
    yellow: "bg-yellow-50 border-yellow-100 text-yellow-600",
    red: "bg-red-50 border-red-100 text-red-600",
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colors[color]}`}>{icon}</div>
        {trend && (
          <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
            {trend}
          </span>
        )}
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );
}

/* ===== USER ROW COMPONENT ===== */
function UserRow({ user, index, onEdit, onView }) {
  const [showActions, setShowActions] = useState(false);

  const statusConfig = {
    active: { bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500" },
    inactive: {
      bg: "bg-yellow-50",
      text: "text-yellow-700",
      dot: "bg-yellow-500",
    },
    blocked: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" },
  };

  const config = statusConfig[user.status] || statusConfig.inactive;

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
            <span className="font-semibold text-blue-600">
              {user.name?.charAt(0)?.toUpperCase() || "U"}
            </span>
          </div>
          <div>
            <p className="font-medium text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      </td>
      <td className="p-4">
        <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium capitalize">
          {user.role || "user"}
        </span>
      </td>
      <td className="p-4 text-gray-600">
        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
      </td>
      <td className="p-4">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${config.bg} ${config.text}`}
        >
          <div className={`w-2 h-2 rounded-full ${config.dot}`}></div>
          <span className="text-sm font-medium capitalize">{user.status}</span>
        </div>
      </td>
      <td className="p-4">
        <div className="relative">
          <button
            onClick={() => setShowActions(!showActions)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <MoreVertical className="w-5 h-5 text-gray-500" />
          </button>

          {showActions && (
            <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={() => {
                  onView(user.id);
                  setShowActions(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-gray-50"
              >
                <Eye className="w-4 h-4 text-gray-500" />
                <span>View Details</span>
              </button>
              <button
                onClick={() => {
                  onEdit(user.id);
                  setShowActions(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-gray-50"
              >
                <Edit className="w-4 h-4 text-blue-500" />
                <span>Edit User</span>
              </button>
              <button className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-gray-50 text-red-600">
                <Trash2 className="w-4 h-4" />
                <span>Delete User</span>
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}
