"use client";

import { useRouter } from "next/navigation";
import {
  FolderKanban,
  Clock,
  CheckCircle,
  PauseCircle,
  Search,
  Plus,
  MoreVertical,
  Eye,
  Archive,
  Download,
  Filter,
  TrendingUp,
  Users,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

export default function ProjectManagementPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const stats = [
    {
      title: "Total Projects",
      value: "18",
      icon: <FolderKanban className="w-6 h-6" />,
      color: "blue",
      trend: "+3 this month",
    },
    {
      title: "Active Projects",
      value: "12",
      icon: <Clock className="w-6 h-6" />,
      color: "green",
      trend: "On track",
    },
    {
      title: "Completed",
      value: "4",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "purple",
      trend: "+2 recently",
    },
    {
      title: "On Hold",
      value: "2",
      icon: <PauseCircle className="w-6 h-6" />,
      color: "orange",
      trend: "Needs attention",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "CRM System Redesign",
      client: "ABC Pvt Ltd",
      manager: "Rahul Sharma",
      status: "active",
      progress: 75,
      dueDate: "2024-03-15",
      teamSize: 8,
      budget: "$45,000",
      priority: "high",
    },
    {
      id: 2,
      name: "HR Portal Development",
      client: "Internal",
      manager: "Neha Patel",
      status: "on-hold",
      progress: 30,
      dueDate: "2024-04-30",
      teamSize: 6,
      budget: "$28,000",
      priority: "medium",
    },
    {
      id: 3,
      name: "E-commerce Platform",
      client: "RetailCorp Inc",
      manager: "Arun Verma",
      status: "active",
      progress: 90,
      dueDate: "2024-02-28",
      teamSize: 12,
      budget: "$68,000",
      priority: "high",
    },
    {
      id: 4,
      name: "Mobile Banking App",
      client: "FinBank Co",
      manager: "Priya Singh",
      status: "completed",
      progress: 100,
      dueDate: "2024-01-20",
      teamSize: 10,
      budget: "$52,000",
      priority: "low",
    },
    {
      id: 5,
      name: "IoT Dashboard",
      client: "TechSolutions",
      manager: "Amit Kumar",
      status: "active",
      progress: 60,
      dueDate: "2024-05-10",
      teamSize: 7,
      budget: "$35,000",
      priority: "medium",
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      active: "bg-green-100 text-green-800 border-green-200",
      "on-hold": "bg-yellow-100 text-yellow-800 border-yellow-200",
      completed: "bg-blue-100 text-blue-800 border-blue-200",
      delayed: "bg-red-100 text-red-800 border-red-200",
    };
    return colors[status] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: "bg-red-500",
      medium: "bg-yellow-500",
      low: "bg-green-500",
    };
    return colors[priority] || "bg-gray-500";
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <FolderKanban className="w-7 h-7 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Project Management
          </h1>
        </div>
        <p className="text-gray-600">
          Track and manage all active and upcoming projects
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-3 rounded-xl ${
                  stat.color === "blue"
                    ? "bg-blue-50 text-blue-600"
                    : stat.color === "green"
                    ? "bg-green-50 text-green-600"
                    : stat.color === "purple"
                    ? "bg-purple-50 text-purple-600"
                    : "bg-orange-50 text-orange-600"
                }`}
              >
                {stat.icon}
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.trend.includes("+")
                    ? "bg-green-100 text-green-700"
                    : stat.trend.includes("Needs")
                    ? "bg-red-100 text-red-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {stat.trend}
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {stat.value}
            </p>
            <p className="text-gray-600 text-sm">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects by name, client, or manager..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="on-hold">On Hold</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <Download className="w-5 h-5" />
              <span className="hidden lg:inline">Export</span>
            </button>

            <button
              onClick={() => router.push("/dashboard/projects/add-project")}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">Add Project</span>
            </button>
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left font-semibold text-gray-700">
                  PROJECT
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  PROGRESS
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  TEAM
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  DUE DATE
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
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          project.status === "active"
                            ? "bg-green-50"
                            : project.status === "on-hold"
                            ? "bg-yellow-50"
                            : "bg-blue-50"
                        }`}
                      >
                        <FolderKanban className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-gray-900">
                            {project.name}
                          </p>
                          <div
                            className={`w-2 h-2 rounded-full ${getPriorityColor(
                              project.priority
                            )}`}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {project.client}
                        </p>
                        <p className="text-sm text-gray-400">
                          {project.manager}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">
                          {project.progress}%
                        </span>
                        <span className="text-gray-500">{project.budget}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            project.progress < 30
                              ? "bg-red-500"
                              : project.progress < 70
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{project.teamSize}</span>
                      <span className="text-gray-500 text-sm">members</span>
                    </div>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{project.dueDate}</span>
                    </div>
                  </td>

                  <td className="p-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full border ${getStatusColor(
                        project.status
                      )} text-sm font-medium`}
                    >
                      {project.status === "on-hold"
                        ? "On Hold"
                        : project.status.charAt(0).toUpperCase() +
                          project.status.slice(1)}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors group">
                        <Eye className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors group">
                        <Archive className="w-5 h-5 text-gray-500 group-hover:text-red-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-4 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold">{projects.length}</span> of{" "}
            <span className="font-semibold">{projects.length}</span> projects
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium">
              Previous
            </button>
            <button className="px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium">
              1
            </button>
            <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium">
              2
            </button>
            <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
