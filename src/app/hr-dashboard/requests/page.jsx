"use client";

import { useState } from "react";
import {
  Sparkles,
  Brain,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  Calendar,
  Users,
  Filter,
  Download,
  Mail,
  ChevronRight,
  BarChart3,
  TrendingUp,
  Zap,
  MessageSquare,
  ExternalLink,
  MoreVertical,
  UserCircle,
} from "lucide-react";

const leaveData = [
  {
    id: 1,
    name: "Rahul Sharma",
    department: "IT",
    email: "rahul@company.com",
    type: "Casual Leave",
    from: "2025-12-29",
    to: "2025-12-30",
    days: 2,
    reason: "Family function - sister's wedding",
    status: "pending",
    appliedOn: "2025-12-25",
    avatarColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    aiConfidence: 85,
    aiSuggestion: "Approve - Family event with low impact on projects",
  },
  {
    id: 2,
    name: "Neha Patel",
    department: "HR",
    email: "neha@company.com",
    type: "Sick Leave",
    from: "2025-12-28",
    to: "2025-12-28",
    days: 1,
    reason: "High fever and doctor's appointment",
    status: "pending",
    appliedOn: "2025-12-26",
    avatarColor: "bg-gradient-to-br from-purple-500 to-purple-600",
    aiConfidence: 92,
    aiSuggestion: "Approve - Medical leave with doctor's note",
  },
  {
    id: 3,
    name: "Amit Verma",
    department: "Finance",
    email: "amit@company.com",
    type: "Paid Leave",
    from: "2025-12-26",
    to: "2025-12-27",
    days: 2,
    reason: "Personal work - bank documentation",
    status: "approved",
    appliedOn: "2025-12-20",
    avatarColor: "bg-gradient-to-br from-green-500 to-green-600",
    aiConfidence: 78,
    aiSuggestion: "Approve - Routine administrative work",
  },
  {
    id: 4,
    name: "Pooja Singh",
    department: "Marketing",
    email: "pooja@company.com",
    type: "Maternity Leave",
    from: "2025-01-15",
    to: "2025-04-15",
    days: 90,
    reason: "Maternity leave as per company policy",
    status: "approved",
    appliedOn: "2025-01-05",
    avatarColor: "bg-gradient-to-br from-pink-500 to-pink-600",
    aiConfidence: 95,
    aiSuggestion: "Approve - Standard policy leave",
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    department: "Sales",
    email: "rajesh@company.com",
    type: "Emergency Leave",
    from: "2025-12-24",
    to: "2025-12-24",
    days: 1,
    reason: "Family emergency - need to visit hometown",
    status: "pending",
    appliedOn: "2025-12-23",
    avatarColor: "bg-gradient-to-br from-orange-500 to-orange-600",
    aiConfidence: 65,
    aiSuggestion: "Review - Emergency leave during peak season",
  },
];

export default function LeaveRequestsPage() {
  const [leaves, setLeaves] = useState(leaveData);
  const [statusFilter, setStatusFilter] = useState("all");

  const updateStatus = (id, value) => {
    setLeaves((prev) =>
      prev.map((leave) =>
        leave.id === id ? { ...leave, status: value } : leave
      )
    );
  };

  const getStatusColor = (status) => {
    const colors = {
      approved: "bg-gradient-to-r from-green-500 to-green-600",
      pending: "bg-gradient-to-r from-yellow-500 to-yellow-600",
      rejected: "bg-gradient-to-r from-red-500 to-red-600",
    };
    return colors[status] || colors.pending;
  };

  const getStatusIcon = (status) => {
    const icons = {
      approved: <CheckCircle className="w-5 h-5" />,
      pending: <Clock className="w-5 h-5" />,
      rejected: <XCircle className="w-5 h-5" />,
    };
    return icons[status] || <Clock className="w-5 h-5" />;
  };

  const filteredLeaves =
    statusFilter === "all"
      ? leaves
      : leaves.filter((leave) => leave.status === statusFilter);

  const totalRequests = leaves.length;
  const pendingCount = leaves.filter((l) => l.status === "pending").length;
  const approvedCount = leaves.filter((l) => l.status === "approved").length;
  const aiAccuracy = 89; // AI accuracy percentage

  const stats = [
    {
      title: "Total Requests",
      value: totalRequests,
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      trend: "+12% this month",
    },
    {
      title: "Pending Review",
      value: pendingCount,
      icon: <Clock className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      trend: "Needs attention",
    },
    {
      title: "AI Approved",
      value: approvedCount,
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      trend: "67% match rate",
    },
    {
      title: "AI Accuracy",
      value: `${aiAccuracy}%`,
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      trend: "High confidence",
    },
  ];

  const getAIIcon = (confidence) => {
    if (confidence >= 85)
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (confidence >= 70)
      return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    return <AlertCircle className="w-5 h-5 text-red-500" />;
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                AI-Assisted Leave Management
              </h1>
              <p className="text-gray-600 mt-1">
                Smart leave approvals powered by artificial intelligence
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">AI Active</span>
          </div>
        </div>

        {/* AI Stats Bar */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-gray-900">AI Insights:</span>
              <span className="text-gray-600">
                Processing {pendingCount} requests with {aiAccuracy}% accuracy
              </span>
            </div>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
              View AI Report <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                {stat.icon}
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.trend.includes("+")
                    ? "bg-green-100 text-green-700"
                    : stat.trend.includes("Needs")
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-purple-100 text-purple-700"
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

      {/* Control Bar */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending AI Review</option>
                <option value="approved">AI Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <Download className="w-5 h-5" />
              <span>Export AI Report</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span>AI Confidence Threshold: 75%</span>
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-green-500"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Leave Requests */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                AI Recommendations
              </h3>
            </div>
            <p className="text-gray-600">{filteredLeaves.length} requests</p>
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
                  AI ANALYSIS
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
                  {/* Employee */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${leave.avatarColor}`}
                      >
                        <UserCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {leave.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {leave.department}
                        </p>
                        <p className="text-xs text-gray-400">{leave.email}</p>
                      </div>
                    </div>
                  </td>

                  {/* Leave Details */}
                  <td className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`px-3 py-1 rounded-lg ${
                            leave.type.includes("Sick")
                              ? "bg-red-50 text-red-700"
                              : leave.type.includes("Casual")
                              ? "bg-blue-50 text-blue-700"
                              : leave.type.includes("Emergency")
                              ? "bg-orange-50 text-orange-700"
                              : "bg-green-50 text-green-700"
                          }`}
                        >
                          <span className="text-sm font-medium">
                            {leave.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">
                          {leave.from} → {leave.to}
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          ({leave.days} days)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {leave.reason}
                      </p>
                    </div>
                  </td>

                  {/* AI Analysis */}
                  <td className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        {getAIIcon(leave.aiConfidence)}
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">AI Confidence</span>
                            <span className="font-bold">
                              {leave.aiConfidence}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                leave.aiConfidence >= 85
                                  ? "bg-green-500"
                                  : leave.aiConfidence >= 70
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              }`}
                              style={{ width: `${leave.aiConfidence}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <Brain className="w-4 h-4 text-blue-600 mt-0.5" />
                          <p className="text-sm text-blue-800">
                            {leave.aiSuggestion}
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="p-4">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-white ${getStatusColor(
                        leave.status
                      )}`}
                    >
                      {getStatusIcon(leave.status)}
                      <span className="font-medium capitalize">
                        {leave.status}
                      </span>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="p-4">
                    <div className="flex flex-col gap-2">
                      {leave.status === "pending" && (
                        <>
                          <button
                            onClick={() => updateStatus(leave.id, "approved")}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-sm"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Accept AI Suggestion
                          </button>
                          <button
                            onClick={() => updateStatus(leave.id, "rejected")}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-sm"
                          >
                            <XCircle className="w-4 h-4" />
                            Reject
                          </button>
                        </>
                      )}
                      <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        View Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Performance Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6" />
            <h3 className="text-lg font-semibold">AI Performance</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-3xl font-bold">{aiAccuracy}%</p>
              <p className="text-blue-200">Decision Accuracy</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-bold">4.2s</p>
                <p className="text-blue-200 text-sm">Avg. Processing</p>
              </div>
              <div>
                <p className="text-xl font-bold">98%</p>
                <p className="text-blue-200 text-sm">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              AI Decision Pattern
            </h3>
            <span className="text-sm text-gray-600">Last 30 days</span>
          </div>
          <div className="space-y-3">
            {[
              { type: "Medical/Sick Leave", aiApproval: 95, humanApproval: 92 },
              { type: "Family Events", aiApproval: 85, humanApproval: 82 },
              { type: "Personal Work", aiApproval: 75, humanApproval: 70 },
              { type: "Emergency", aiApproval: 65, humanApproval: 60 },
            ].map((pattern, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">
                    {pattern.type}
                  </span>
                  <span className="text-gray-600">
                    AI: {pattern.aiApproval}% | Human: {pattern.humanApproval}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                    style={{ width: `${pattern.aiApproval}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
