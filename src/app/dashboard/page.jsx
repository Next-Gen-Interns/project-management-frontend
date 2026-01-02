"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/emp_apis";
import {
  Users,
  FolderKanban,
  ClipboardList,
  Users2,
  TrendingUp,
  Clock,
  PlusCircle,
  FileText,
  ArrowRight,
  CheckCircle2,
  UserPlus,
  FolderPlus,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    employees: 0,
    projects: 18,
    tasks: 245,
    teamLeaders: 6,
  });

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const users = await getAllUsers();
        const employeesCount = users.filter(
          (u) => u.role === "employee"
        ).length;

        setTotalEmployees(employeesCount);
        setStats((prev) => ({ ...prev, employees: employeesCount }));
      } catch (error) {
        console.error("Failed to load employees", error);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  const recentActivities = [
    {
      id: 1,
      text: "Project 'CRM System' created",
      time: "2 hours ago",
      icon: <FolderKanban className="w-4 h-4" />,
    },
    {
      id: 2,
      text: "Task assigned to Employee",
      time: "4 hours ago",
      icon: <ClipboardList className="w-4 h-4" />,
    },
    {
      id: 3,
      text: "New user added",
      time: "Yesterday",
      icon: <UserPlus className="w-4 h-4" />,
    },
    {
      id: 4,
      text: "Task marked as completed",
      time: "2 days ago",
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
  ];

  const quickActions = [
    {
      label: "Add User",
      icon: <UserPlus className="w-5 h-5" />,
      path: "/dashboard/user",
      color: "bg-blue-500",
    },
    {
      label: "Create Project",
      icon: <FolderPlus className="w-5 h-5" />,
      path: "/dashboard/projects",
      color: "bg-green-500",
    },
    {
      label: "Assign Task",
      icon: <ClipboardCheck className="w-5 h-5" />,
      path: "/dashboard/tasks",
      color: "bg-purple-500",
    },
    {
      label: "View Reports",
      icon: <BarChart3 className="w-5 h-5" />,
      path: "/dashboard/reports",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Employees"
          value={loading ? "..." : stats.employees}
          change="+12%"
          icon={<Users className="w-6 h-6" />}
          color="blue"
        />
        <StatCard
          title="Active Projects"
          value={stats.projects}
          change="+3 new"
          icon={<FolderKanban className="w-6 h-6" />}
          color="green"
        />
        <StatCard
          title="Pending Tasks"
          value={stats.tasks}
          change="+24 today"
          icon={<ClipboardList className="w-6 h-6" />}
          color="purple"
        />
        <StatCard
          title="Team Leaders"
          value={stats.teamLeaders}
          change="All active"
          icon={<Users2 className="w-6 h-6" />}
          color="orange"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Activity
              </h3>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="p-2 bg-gray-100 rounded-lg mt-1">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{activity.text}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-green-50 rounded-lg">
              <PlusCircle className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Quick Actions
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action) => (
              <button
                key={action.label}
                onClick={() => router.push(action.path)}
                className="group p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center gap-3"
              >
                <div className={`${action.color} p-3 rounded-xl text-white`}>
                  {action.icon}
                </div>
                <span className="font-medium text-gray-900">
                  {action.label}
                </span>
              </button>
            ))}
          </div>

          {/* Performance Summary */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-purple-50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Performance Summary
              </h4>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Completion</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">12h</div>
                <div className="text-sm text-gray-600">Avg Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Active Sessions</p>
              <p className="text-2xl font-bold mt-1">24</p>
            </div>
            <Users2 className="w-8 h-8 opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Tasks Completed</p>
              <p className="text-2xl font-bold mt-1">189</p>
            </div>
            <CheckCircle2 className="w-8 h-8 opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Pending Reviews</p>
              <p className="text-2xl font-bold mt-1">7</p>
            </div>
            <FileText className="w-8 h-8 opacity-80" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Stat Card Component */
function StatCard({ title, value, change, icon, color }) {
  const colorClasses = {
    blue: "text-blue-600 bg-blue-50",
    green: "text-green-600 bg-green-50",
    purple: "text-purple-600 bg-purple-50",
    orange: "text-orange-600 bg-orange-50",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}>{icon}</div>
        {change && (
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              change.includes("+")
                ? "bg-green-50 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {change}
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        <p className="text-gray-600 text-sm mt-1">{title}</p>
      </div>
    </div>
  );
}
