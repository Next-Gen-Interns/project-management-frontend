"use client";

import {
  Users,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Award,
  Download,
  Search,
  Filter,
  Plus,
  Edit2,
  Trash2,
  Eye,
  ChevronDown,
  Bell,
  TrendingUp,
  TrendingDown,
  UserPlus,
  UserCheck,
  UserX,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  DollarSign,
  BarChart3,
  PieChart,
  Shield,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function HrDashboard() {
  const [announcement, setAnnouncement] = useState("");
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
    phone: "",
    salary: "",
    joinDate: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedLeave, setSelectedLeave] = useState(null);

  const stats = [
    {
      title: "Total Employees",
      value: "142",
      change: "+12%",
      trend: "up",
      icon: <Users size={24} />,
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-100",
    },
    {
      title: "Present Today",
      value: "118",
      change: "+8",
      trend: "up",
      icon: <UserCheck size={24} />,
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-100",
    },
    {
      title: "Leave Requests",
      value: "8",
      change: "-3",
      trend: "down",
      icon: <Calendar size={24} />,
      color: "from-amber-500 to-orange-400",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-100",
    },
    {
      title: "Pending Approvals",
      value: "12",
      change: "+4",
      trend: "up",
      icon: <AlertCircle size={24} />,
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-100",
    },
  ];

  const leaveRequests = [
    {
      id: 1,
      name: "Rahul Sharma",
      department: "Development",
      type: "Sick Leave",
      days: 2,
      dates: "Apr 15-16, 2024",
      status: "pending",
      avatar: "RS",
    },
    {
      id: 2,
      name: "Neha Patel",
      department: "Design",
      type: "Casual Leave",
      days: 1,
      dates: "Apr 18, 2024",
      status: "pending",
      avatar: "NP",
    },
    {
      id: 3,
      name: "Amit Kumar",
      department: "Sales",
      type: "Annual Leave",
      days: 5,
      dates: "Apr 22-26, 2024",
      status: "approved",
      avatar: "AK",
    },
    {
      id: 4,
      name: "Pooja Singh",
      department: "HR",
      type: "Maternity Leave",
      days: 90,
      dates: "May 1 - Jul 29, 2024",
      status: "pending",
      avatar: "PS",
    },
  ];

  const employeeRequests = [
    {
      id: 1,
      type: "WFH Request",
      employee: "Amit Verma",
      date: "2024-04-10",
      status: "pending",
      priority: "high",
    },
    {
      id: 2,
      type: "Salary Slip",
      employee: "Pooja Sharma",
      date: "2024-04-09",
      status: "completed",
      priority: "medium",
    },
    {
      id: 3,
      type: "ID Card",
      employee: "Karan Malhotra",
      date: "2024-04-08",
      status: "pending",
      priority: "low",
    },
    {
      id: 4,
      type: "Equipment Request",
      employee: "Rohit Gupta",
      date: "2024-04-07",
      status: "in-progress",
      priority: "medium",
    },
  ];

  const attendanceLog = [
    {
      id: 1,
      name: "John Doe",
      status: "present",
      checkIn: "09:15",
      checkOut: "18:30",
      hours: "8h 15m",
    },
    {
      id: 2,
      name: "Sarah Smith",
      status: "present",
      checkIn: "09:00",
      checkOut: "17:45",
      hours: "8h 45m",
    },
    {
      id: 3,
      name: "Mike Johnson",
      status: "absent",
      checkIn: "-",
      checkOut: "-",
      hours: "0h",
    },
    {
      id: 4,
      name: "Emma Wilson",
      status: "late",
      checkIn: "10:30",
      checkOut: "19:00",
      hours: "7h 30m",
    },
    {
      id: 5,
      name: "David Brown",
      status: "present",
      checkIn: "09:10",
      checkOut: "18:20",
      hours: "8h 10m",
    },
  ];

  const departments = [
    {
      name: "Development",
      count: 45,
      color: "bg-gradient-to-r from-blue-500 to-cyan-400",
    },
    {
      name: "Design",
      count: 18,
      color: "bg-gradient-to-r from-purple-500 to-pink-400",
    },
    {
      name: "Sales",
      count: 24,
      color: "bg-gradient-to-r from-green-500 to-emerald-400",
    },
    {
      name: "HR",
      count: 8,
      color: "bg-gradient-to-r from-amber-500 to-orange-400",
    },
    {
      name: "Marketing",
      count: 16,
      color: "bg-gradient-to-r from-red-500 to-rose-400",
    },
    {
      name: "Operations",
      count: 31,
      color: "bg-gradient-to-r from-indigo-500 to-violet-400",
    },
  ];

  const handleApproveLeave = (id) => {
    alert(`Leave request ${id} approved`);
    // Implement actual approval logic here
  };

  const handleRejectLeave = (id) => {
    if (window.confirm("Are you sure you want to reject this leave request?")) {
      alert(`Leave request ${id} rejected`);
      // Implement actual rejection logic here
    }
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    alert(`New employee added: ${newEmployee.name}`);
    setNewEmployee({
      name: "",
      email: "",
      department: "",
      position: "",
      phone: "",
      salary: "",
      joinDate: "",
    });
  };

  const handlePublishAnnouncement = () => {
    if (announcement.trim()) {
      alert("Announcement published successfully!");
      setAnnouncement("");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700";
      case "pending":
        return "bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700";
      case "in-progress":
        return "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700";
      case "completed":
        return "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700";
      default:
        return "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700";
    }
  };

  const getAttendanceColor = (status) => {
    switch (status) {
      case "present":
        return "bg-gradient-to-r from-green-500 to-emerald-400";
      case "absent":
        return "bg-gradient-to-r from-red-500 to-pink-400";
      case "late":
        return "bg-gradient-to-r from-amber-500 to-orange-400";
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            HR Dashboard
          </h1>
          <p className="text-slate-600 mt-2">
            Manage employees, attendance, and HR operations
          </p>
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-2.5 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search employees..."
              className="pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25">
            <UserPlus size={18} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} rounded-2xl p-6 border ${stat.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-md`}
              >
                {stat.icon}
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.trend === "up" ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                {stat.change}
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-1">
              {stat.value}
            </h3>
            <p className="text-sm text-slate-600">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-1 mb-6">
        <div className="flex overflow-x-auto">
          {["overview", "attendance", "leave", "recruitment", "reports"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Left Column - Leave Requests */}
        <div className="lg:col-span-2 space-y-6">
          {/* Leave Approval Requests */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-800">
                Leave Approval Requests
              </h3>
              <span className="text-sm text-slate-500">
                {leaveRequests.filter((l) => l.status === "pending").length}{" "}
                pending
              </span>
            </div>

            <div className="space-y-4">
              {leaveRequests.map((leave) => (
                <div
                  key={leave.id}
                  className={`p-4 border rounded-xl transition-all duration-300 ${
                    selectedLeave === leave.id
                      ? "border-blue-300 bg-blue-50"
                      : "border-slate-200 hover:border-blue-200"
                  }`}
                  onClick={() => setSelectedLeave(leave.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                        {leave.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">
                          {leave.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase size={12} className="text-slate-400" />
                          <span className="text-xs text-slate-500">
                            {leave.department}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        leave.status
                      )}`}
                    >
                      {leave.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500">Leave Type</p>
                      <p className="font-medium text-slate-800">{leave.type}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Duration</p>
                      <p className="font-medium text-slate-800">
                        {leave.days} days ({leave.dates})
                      </p>
                    </div>
                  </div>

                  {selectedLeave === leave.id && leave.status === "pending" && (
                    <div className="flex gap-2 mt-4 pt-4 border-t border-slate-200">
                      <button
                        onClick={() => handleApproveLeave(leave.id)}
                        className="flex-1 px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                      >
                        Approve Leave
                      </button>
                      <button
                        onClick={() => handleRejectLeave(leave.id)}
                        className="flex-1 px-4 py-2.5 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-lg font-medium hover:from-red-600 hover:to-rose-600 transition-all duration-300"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 border border-dashed border-slate-300 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <Eye size={16} />
              View All Leave Requests
            </button>
          </div>

          {/* Attendance Log */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-800">
                Today's Attendance
              </h3>
              <span className="text-sm text-blue-600 cursor-pointer">
                Mark All Present
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 text-slate-600 font-medium">
                      Employee
                    </th>
                    <th className="text-left py-3 text-slate-600 font-medium">
                      Status
                    </th>
                    <th className="text-left py-3 text-slate-600 font-medium">
                      Check In
                    </th>
                    <th className="text-left py-3 text-slate-600 font-medium">
                      Check Out
                    </th>
                    <th className="text-left py-3 text-slate-600 font-medium">
                      Hours
                    </th>
                    <th className="text-left py-3 text-slate-600 font-medium">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceLog.map((record) => (
                    <tr
                      key={record.id}
                      className="border-b border-slate-100 hover:bg-slate-50"
                    >
                      <td className="py-4">
                        <div className="font-medium text-slate-800">
                          {record.name}
                        </div>
                      </td>
                      <td className="py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getAttendanceColor(
                            record.status
                          )}`}
                        >
                          {record.status.charAt(0).toUpperCase() +
                            record.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="text-slate-800">{record.checkIn}</div>
                      </td>
                      <td className="py-4">
                        <div className="text-slate-800">{record.checkOut}</div>
                      </td>
                      <td className="py-4">
                        <div className="text-slate-800 font-medium">
                          {record.hours}
                        </div>
                      </td>
                      <td className="py-4">
                        <button className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-sm hover:bg-blue-100">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Employee Requests */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-800">
                Employee Requests
              </h3>
              <Bell size={20} className="text-amber-500" />
            </div>

            <div className="space-y-4">
              {employeeRequests.map((request) => (
                <div
                  key={request.id}
                  className="p-3 border border-slate-200 rounded-xl hover:border-blue-200 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-slate-800">
                      {request.type}
                    </h4>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs ${getStatusColor(
                        request.status
                      )}`}
                    >
                      {request.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">{request.employee}</span>
                    <span className="text-slate-400">{request.date}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-sm hover:bg-blue-100">
                      Review
                    </button>
                    <button className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-sm hover:bg-slate-100">
                      <Eye size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Department Distribution */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              Department Distribution
            </h3>

            <div className="space-y-3">
              {departments.map((dept) => (
                <div key={dept.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">
                      {dept.name}
                    </span>
                    <span className="text-slate-800">
                      {dept.count} employees
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${dept.color} rounded-full`}
                      style={{ width: `${(dept.count / 142) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Quick Actions
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-white rounded-xl border border-blue-100 hover:border-blue-300 transition-colors flex flex-col items-center justify-center gap-2">
                <FileText size={20} className="text-blue-600" />
                <span className="text-sm font-medium text-slate-800">
                  Generate Reports
                </span>
              </button>
              <button className="p-3 bg-white rounded-xl border border-blue-100 hover:border-blue-300 transition-colors flex flex-col items-center justify-center gap-2">
                <Download size={20} className="text-green-600" />
                <span className="text-sm font-medium text-slate-800">
                  Export Data
                </span>
              </button>
              <button className="p-3 bg-white rounded-xl border border-blue-100 hover:border-blue-300 transition-colors flex flex-col items-center justify-center gap-2">
                <Shield size={20} className="text-purple-600" />
                <span className="text-sm font-medium text-slate-800">
                  Policies
                </span>
              </button>
              <button className="p-3 bg-white rounded-xl border border-blue-100 hover:border-blue-300 transition-colors flex flex-col items-center justify-center gap-2">
                <BarChart3 size={20} className="text-amber-600" />
                <span className="text-sm font-medium text-slate-800">
                  Analytics
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Add Announcement */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">
            Add Company Announcement
          </h3>

          <div className="space-y-4">
            <textarea
              rows="4"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              placeholder="Write important announcement for all employees..."
              className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <div className="flex gap-3">
              <button
                onClick={handlePublishAnnouncement}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Publish Announcement
              </button>
              <button className="px-4 py-3 border border-slate-200 text-slate-600 rounded-xl font-medium hover:bg-slate-50 transition-colors">
                Schedule
              </button>
            </div>
          </div>
        </div>

        {/* Add New Employee */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">
            Add New Employee
          </h3>

          <form onSubmit={handleAddEmployee} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newEmployee.name}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newEmployee.email}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Department"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newEmployee.department}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      department: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Position"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newEmployee.position}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, position: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newEmployee.phone}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newEmployee.joinDate}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, joinDate: e.target.value })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <UserPlus size={18} />
              Add Employee to System
            </button>
          </form>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-800">
            Recent HR Activities
          </h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
            View All Activities <ChevronDown size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
            <div className="text-2xl font-bold text-blue-600 mb-2">8</div>
            <p className="text-sm text-slate-700">New Hires This Month</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
            <div className="text-2xl font-bold text-green-600 mb-2">94%</div>
            <p className="text-sm text-slate-700">Attendance Rate</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
            <div className="text-2xl font-bold text-amber-600 mb-2">$42.5K</div>
            <p className="text-sm text-slate-700">Training Budget Used</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <div className="text-2xl font-bold text-purple-600 mb-2">24</div>
            <p className="text-sm text-slate-700">Active Recruitments</p>
          </div>
        </div>
      </div>
    </div>
  );
}
