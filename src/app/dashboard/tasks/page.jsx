"use client";

import { useRouter } from "next/navigation";
import {
  ClipboardList,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Download,
  Calendar,
  User,
  FolderKanban,
  TrendingUp,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  ArrowRight,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { useState } from "react";

export default function TaskManagementPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const stats = [
    {
      title: "Total Tasks",
      value: "245",
      icon: <ClipboardList className="w-6 h-6" />,
      color: "blue",
      trend: "+24 this week",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "In Progress",
      value: "120",
      icon: <Loader2 className="w-6 h-6" />,
      color: "orange",
      trend: "48% of total",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      title: "Completed",
      value: "90",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "green",
      trend: "37% completion",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Pending",
      value: "35",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "red",
      trend: "Needs attention",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
  ];

  const tasks = [
    {
      id: 1,
      name: "Design Homepage UI",
      project: "CRM Redesign",
      assignedBy: "Rahul Sharma",
      assignedTo: "Priya Singh",
      startDate: "2024-02-01",
      endDate: "2024-02-15",
      status: "in-progress",
      priority: "high",
      progress: 65,
      tags: ["UI/UX", "Frontend"],
    },
    {
      id: 2,
      name: "API Integration",
      project: "HR Portal",
      assignedBy: "Neha Patel",
      assignedTo: "Amit Kumar",
      startDate: "2024-02-10",
      endDate: "2024-02-28",
      status: "pending",
      priority: "medium",
      progress: 30,
      tags: ["Backend", "API"],
    },
    {
      id: 3,
      name: "Database Optimization",
      project: "E-commerce Platform",
      assignedBy: "Arun Verma",
      assignedTo: "Sneha Roy",
      startDate: "2024-01-25",
      endDate: "2024-02-20",
      status: "completed",
      priority: "medium",
      progress: 100,
      tags: ["Database", "Performance"],
    },
    {
      id: 4,
      name: "Mobile App Testing",
      project: "Banking App",
      assignedBy: "Vikram Mehta",
      assignedTo: "Rajesh Kumar",
      startDate: "2024-02-05",
      endDate: "2024-02-25",
      status: "in-progress",
      priority: "low",
      progress: 80,
      tags: ["Testing", "QA"],
    },
    {
      id: 5,
      name: "Payment Gateway Setup",
      project: "Retail Platform",
      assignedBy: "Priya Singh",
      assignedTo: "Neha Patel",
      startDate: "2024-02-12",
      endDate: "2024-03-05",
      status: "pending",
      priority: "high",
      progress: 20,
      tags: ["Payment", "Integration"],
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      "in-progress": "bg-blue-100 text-blue-800 border-blue-200",
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      completed: "bg-green-100 text-green-800 border-green-200",
      overdue: "bg-red-100 text-red-800 border-red-200",
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

  const getPriorityText = (priority) => {
    const texts = {
      high: "High",
      medium: "Medium",
      low: "Low",
    };
    return texts[priority] || priority;
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <ClipboardList className="w-7 h-7 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Task Management
            </h1>
            <p className="text-gray-600 mt-1">
              Track, assign, and manage all tasks efficiently
            </p>
          </div>
        </div>
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
                className={`p-3 rounded-xl ${stat.bgColor} ${stat.textColor}`}
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
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search tasks by name, project, or assignee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Status</option>
                <option value="in-progress">In Progress</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="relative">
              <AlertCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <Download className="w-5 h-5" />
              <span className="hidden lg:inline">Export</span>
            </button>

            <button
              onClick={() => router.push("/dashboard/tasks/add-task")}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">Create Task</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tasks Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left font-semibold text-gray-700">
                  TASK
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  PROJECT
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  ASSIGNED
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  TIMELINE
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  PROGRESS
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
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {/* Task Column */}
                  <td className="p-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          task.status === "completed"
                            ? "bg-green-50"
                            : task.status === "in-progress"
                            ? "bg-blue-50"
                            : "bg-yellow-50"
                        }`}
                      >
                        <ClipboardList className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-gray-900">
                            {task.name}
                          </p>
                          <div
                            className={`w-2 h-2 rounded-full ${getPriorityColor(
                              task.priority
                            )}`}
                          ></div>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {task.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Project Column */}
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <FolderKanban className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{task.project}</span>
                    </div>
                  </td>

                  {/* Assigned Column */}
                  <td className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium">
                            From: {task.assignedBy}
                          </p>
                          <p className="text-sm text-gray-500">
                            To: {task.assignedTo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Timeline Column */}
                  <td className="p-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">{task.startDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">{task.endDate}</span>
                      </div>
                    </div>
                  </td>

                  {/* Progress Column */}
                  <td className="p-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{task.progress}%</span>
                        <span className="text-gray-500">
                          {task.status === "completed" ? "Done" : "In progress"}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            task.progress < 30
                              ? "bg-red-500"
                              : task.progress < 70
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>

                  {/* Status Column */}
                  <td className="p-4">
                    <div className="space-y-2">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full border ${getStatusColor(
                          task.status
                        )} text-sm font-medium`}
                      >
                        {task.status === "in-progress"
                          ? "In Progress"
                          : task.status.charAt(0).toUpperCase() +
                            task.status.slice(1)}
                      </span>
                      <div className="text-xs text-gray-500">
                        {getPriorityText(task.priority)} Priority
                      </div>
                    </div>
                  </td>

                  {/* Actions Column */}
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group">
                        <Eye className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-green-50 rounded-lg transition-colors group">
                        <CheckCircle className="w-5 h-5 text-gray-500 group-hover:text-green-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors group">
                        <XCircle className="w-5 h-5 text-gray-500 group-hover:text-red-600" />
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
            Showing <span className="font-semibold">{tasks.length}</span> tasks
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium">
              Previous
            </button>
            <button className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">
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
