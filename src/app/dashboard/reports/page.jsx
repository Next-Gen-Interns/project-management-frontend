"use client";

import {
  Download,
  Filter,
  Calendar,
  Users,
  Briefcase,
  CheckCircle,
  Clock,
  ChevronRight,
  Eye,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { useState } from "react";

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState("last30days");

  const stats = [
    {
      title: "Total Employees",
      value: "142",
      change: "+12",
      icon: <Users size={20} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Active Projects",
      value: "18",
      change: "+3",
      icon: <Briefcase size={20} />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Completed Tasks",
      value: "245",
      change: "+45",
      icon: <CheckCircle size={20} />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Pending Tasks",
      value: "55",
      change: "-8",
      icon: <Clock size={20} />,
      color: "bg-amber-100 text-amber-600",
    },
  ];

  const projects = [
    {
      project: "CRM System",
      manager: "Michael Chen",
      tasks: 45,
      completed: 40,
      progress: 88,
      status: "On Track",
    },
    {
      project: "HR Portal",
      manager: "Sarah Miller",
      tasks: 30,
      completed: 20,
      progress: 67,
      status: "Delayed",
    },
    {
      project: "Mobile App",
      manager: "Olivia Williams",
      tasks: 65,
      completed: 45,
      progress: 69,
      status: "In Progress",
    },
    {
      project: "E-commerce Platform",
      manager: "David Wilson",
      tasks: 52,
      completed: 42,
      progress: 81,
      status: "On Track",
    },
    {
      project: "Design System",
      manager: "Emma Johnson",
      tasks: 28,
      completed: 25,
      progress: 89,
      status: "Completed",
    },
  ];

  const recentReports = [
    { name: "Monthly Performance Report", date: "Apr 1, 2024", downloads: 142 },
    { name: "Q1 Financial Summary", date: "Mar 31, 2024", downloads: 98 },
    { name: "Employee Attendance", date: "Apr 15, 2024", downloads: 76 },
    { name: "Project Progress", date: "Apr 10, 2024", downloads: 121 },
  ];

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
        <p className="text-gray-600">
          Overview of system performance and analytics
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-gray-400" />
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="today">Today</option>
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="lastquarter">Last Quarter</option>
          </select>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Filter size={16} />
          Filter Reports
        </button>

        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Download size={16} />
          Export All
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 rounded-lg ${stat.color}`}>{stat.icon}</div>
              <span
                className={`text-sm font-medium ${
                  stat.change.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-lg border border-gray-200 mb-6 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Project Reports
          </h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
            View All <ChevronRight size={16} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left text-sm font-medium text-gray-600">
                  Project
                </th>
                <th className="p-3 text-left text-sm font-medium text-gray-600">
                  Manager
                </th>
                <th className="p-3 text-left text-sm font-medium text-gray-600">
                  Progress
                </th>
                <th className="p-3 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="p-3 text-left text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-3">
                    <div className="font-medium text-gray-800">
                      {project.project}
                    </div>
                  </td>
                  <td className="p-3 text-gray-700">{project.manager}</td>
                  <td className="p-3">
                    <div className="space-y-1">
                      <div className="text-sm font-medium">
                        {project.progress}%
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            project.status === "On Track"
                              ? "bg-green-500"
                              : project.status === "Delayed"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                          } rounded-full`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "On Track"
                          ? "bg-green-100 text-green-700"
                          : project.status === "Delayed"
                          ? "bg-amber-100 text-amber-700"
                          : project.status === "Completed"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Eye size={16} className="text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Reports
        </h2>

        <div className="space-y-3">
          {recentReports.map((report, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300"
            >
              <div>
                <h4 className="font-medium text-gray-800">{report.name}</h4>
                <p className="text-sm text-gray-500">
                  {report.date} • {report.downloads} downloads
                </p>
              </div>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                <Download size={14} />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
