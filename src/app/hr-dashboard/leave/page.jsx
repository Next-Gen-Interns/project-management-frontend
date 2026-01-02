"use client";

import { useState } from "react";
import {
  Calendar,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Filter,
  Download,
  Mail,
  Phone,
  FileText,
  ChevronDown,
  Eye,
  MessageSquare,
  TrendingUp,
  UserCheck,
  CalendarDays,
  MoreVertical,
  ExternalLink,
} from "lucide-react";

const leaveData = [
  {
    id: 1,
    name: "Rahul Sharma",
    department: "IT",
    email: "rahul@company.com",
    phone: "+91 9876543210",
    type: "Casual Leave",
    from: "2025-12-29",
    to: "2025-12-30",
    days: 2,
    reason: "Attending cousin's wedding ceremony in hometown",
    status: "pending",
    appliedOn: "2025-12-25",
    avatarColor: "bg-blue-500",
  },
  {
    id: 2,
    name: "Neha Patel",
    department: "HR",
    email: "neha@company.com",
    phone: "+91 9876543211",
    type: "Sick Leave",
    from: "2025-12-28",
    to: "2025-12-28",
    days: 1,
    reason: "High fever and doctor's appointment",
    status: "pending",
    appliedOn: "2025-12-26",
    avatarColor: "bg-purple-500",
  },
  {
    id: 3,
    name: "Amit Verma",
    department: "Finance",
    email: "amit@company.com",
    phone: "+91 9876543212",
    type: "Paid Leave",
    from: "2025-12-26",
    to: "2025-12-27",
    days: 2,
    reason: "Personal work - bank documentation",
    status: "approved",
    appliedOn: "2025-12-20",
    avatarColor: "bg-green-500",
  },
  {
    id: 4,
    name: "Pooja Singh",
    department: "Marketing",
    email: "pooja@company.com",
    phone: "+91 9876543213",
    type: "Maternity Leave",
    from: "2025-01-15",
    to: "2025-04-15",
    days: 90,
    reason: "Maternity leave as per company policy",
    status: "approved",
    appliedOn: "2025-01-05",
    avatarColor: "bg-pink-500",
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    department: "Sales",
    email: "rajesh@company.com",
    phone: "+91 9876543214",
    type: "Emergency Leave",
    from: "2025-12-24",
    to: "2025-12-24",
    days: 1,
    reason: "Family emergency - need to visit hometown",
    status: "rejected",
    appliedOn: "2025-12-23",
    avatarColor: "bg-orange-500",
  },
  {
    id: 6,
    name: "Sneha Roy",
    department: "IT",
    email: "sneha@company.com",
    phone: "+91 9876543215",
    type: "Annual Leave",
    from: "2025-12-31",
    to: "2026-01-05",
    days: 6,
    reason: "Year-end vacation with family",
    status: "pending",
    appliedOn: "2025-12-20",
    avatarColor: "bg-indigo-500",
  },
];

export default function LeaveRequestsPage() {
  const [leaves, setLeaves] = useState(leaveData);
  const [statusFilter, setStatusFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  const updateStatus = (id, value) => {
    setLeaves((prev) =>
      prev.map((leave) =>
        leave.id === id ? { ...leave, status: value } : leave
      )
    );
  };

  const getStatusColor = (status) => {
    const colors = {
      approved: "bg-green-100 text-green-800 border-green-200",
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      rejected: "bg-red-100 text-red-800 border-red-200",
    };
    return colors[status] || colors.pending;
  };

  const getStatusIcon = (status) => {
    const icons = {
      approved: <CheckCircle className="w-4 h-4" />,
      pending: <Clock className="w-4 h-4" />,
      rejected: <XCircle className="w-4 h-4" />,
    };
    return icons[status] || <Clock className="w-4 h-4" />;
  };

  const filteredLeaves = leaves.filter((leave) => {
    const statusMatch = statusFilter === "all" || leave.status === statusFilter;
    const deptMatch =
      departmentFilter === "all" || leave.department === departmentFilter;
    return statusMatch && deptMatch;
  });

  const totalRequests = leaves.length;
  const pendingCount = leaves.filter((l) => l.status === "pending").length;
  const approvedCount = leaves.filter((l) => l.status === "approved").length;
  const rejectedCount = leaves.filter((l) => l.status === "rejected").length;

  const stats = [
    {
      title: "Total Requests",
      value: totalRequests,
      icon: <FileText className="w-6 h-6" />,
      color: "blue",
      bg: "bg-blue-50",
      text: "text-blue-600",
      trend: "+12% this month",
    },
    {
      title: "Pending",
      value: pendingCount,
      icon: <Clock className="w-6 h-6" />,
      color: "yellow",
      bg: "bg-yellow-50",
      text: "text-yellow-600",
      trend: "Needs review",
    },
    {
      title: "Approved",
      value: approvedCount,
      icon: <CheckCircle className="w-6 h-6" />,
      color: "green",
      bg: "bg-green-50",
      text: "text-green-600",
      trend: "67% approval rate",
    },
    {
      title: "Rejected",
      value: rejectedCount,
      icon: <XCircle className="w-6 h-6" />,
      color: "red",
      bg: "bg-red-50",
      text: "text-red-600",
      trend: "Low rejection rate",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <CalendarDays className="w-7 h-7 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Leave Requests</h1>
            <p className="text-gray-600 mt-1">
              Review and manage employee leave applications efficiently
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
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.text}`}>
                {stat.icon}
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.trend.includes("+")
                    ? "bg-green-100 text-green-700"
                    : stat.trend.includes("Low")
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
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Departments</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <Download className="w-5 h-5" />
              <span>Export Report</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors">
              <Calendar className="w-5 h-5" />
              <span>Calendar View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Leave Requests Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Leave Applications
            </h3>
            <p className="text-gray-600">
              {filteredLeaves.length} requests found
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left font-semibold text-gray-700">
                  EMPLOYEE
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  LEAVE DETAILS
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  DURATION
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
              {filteredLeaves.map((leave) => (
                <tr
                  key={leave.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {/* Employee Column */}
                  <td className="p-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${leave.avatarColor}`}
                      >
                        {leave.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {leave.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {leave.department}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Mail className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">
                            {leave.email}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Leave Details Column */}
                  <td className="p-4">
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-gray-900">
                          {leave.type}
                        </p>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {leave.reason}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>Applied on: {leave.appliedOn}</span>
                      </div>
                    </div>
                  </td>

                  {/* Duration Column */}
                  <td className="p-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="font-medium">{leave.from}</span>
                        <span className="text-gray-400">→</span>
                        <span className="font-medium">{leave.to}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">
                          {leave.days} day{leave.days !== 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Status Column */}
                  <td className="p-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border">
                      <div
                        className={getStatusColor(leave.status).split(" ")[0]}
                      >
                        {getStatusIcon(leave.status)}
                      </div>
                      <span
                        className={`text-sm font-medium capitalize ${
                          getStatusColor(leave.status).split(" ")[1]
                        }`}
                      >
                        {leave.status}
                      </span>
                    </div>
                  </td>

                  {/* Actions Column */}
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {leave.status === "pending" ? (
                        <>
                          <button
                            onClick={() => updateStatus(leave.id, "approved")}
                            className="flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 hover:bg-green-200 rounded-lg text-sm font-medium transition-colors"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Approve
                          </button>
                          <button
                            onClick={() => updateStatus(leave.id, "rejected")}
                            className="flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg text-sm font-medium transition-colors"
                          >
                            <XCircle className="w-4 h-4" />
                            Reject
                          </button>
                        </>
                      ) : (
                        <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                      )}
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
            Showing{" "}
            <span className="font-semibold">{filteredLeaves.length}</span> of{" "}
            <span className="font-semibold">{leaves.length}</span> leave
            requests
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

      {/* Summary Card */}
      <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Leave Summary</h3>
            <p className="text-blue-100">
              Approval Rate: {Math.round((approvedCount / totalRequests) * 100)}
              %
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold">{pendingCount}</p>
              <p className="text-blue-200 text-sm">Awaiting Review</p>
            </div>
            <div className="h-12 w-px bg-blue-500"></div>
            <div className="text-center">
              <p className="text-3xl font-bold">{approvedCount}</p>
              <p className="text-blue-200 text-sm">Approved</p>
            </div>
            <div className="h-12 w-px bg-blue-500"></div>
            <div className="text-center">
              <p className="text-3xl font-bold">{rejectedCount}</p>
              <p className="text-blue-200 text-sm">Rejected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
