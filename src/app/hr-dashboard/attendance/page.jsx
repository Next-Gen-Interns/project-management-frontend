"use client";

import { useState } from "react";
import {
  Calendar,
  Users,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Save,
  Filter,
  TrendingUp,
  UserCheck,
  CalendarDays,
  ChevronDown,
  MoreVertical,
  Eye,
  FileText,
} from "lucide-react";

const employeesData = [
  {
    id: 1,
    name: "Rahul Sharma",
    department: "IT",
    email: "rahul@company.com",
    avatarColor: "bg-blue-500",
  },
  {
    id: 2,
    name: "Neha Patel",
    department: "HR",
    email: "neha@company.com",
    avatarColor: "bg-purple-500",
  },
  {
    id: 3,
    name: "Amit Verma",
    department: "Finance",
    email: "amit@company.com",
    avatarColor: "bg-green-500",
  },
  {
    id: 4,
    name: "Pooja Singh",
    department: "Marketing",
    email: "pooja@company.com",
    avatarColor: "bg-pink-500",
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    department: "Sales",
    email: "rajesh@company.com",
    avatarColor: "bg-orange-500",
  },
  {
    id: 6,
    name: "Sneha Roy",
    department: "IT",
    email: "sneha@company.com",
    avatarColor: "bg-indigo-500",
  },
  {
    id: 7,
    name: "Vikram Mehta",
    department: "Operations",
    email: "vikram@company.com",
    avatarColor: "bg-teal-500",
  },
  {
    id: 8,
    name: "Priya Sharma",
    department: "HR",
    email: "priya@company.com",
    avatarColor: "bg-red-500",
  },
];

export default function AttendancePage() {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [attendance, setAttendance] = useState(
    employeesData.map((emp) => ({
      ...emp,
      status: "present",
      checkIn: "09:15 AM",
      checkOut: "06:30 PM",
      hours: "8.5",
    }))
  );
  const [departmentFilter, setDepartmentFilter] = useState("all");

  const updateStatus = (id, value) => {
    setAttendance((prev) =>
      prev.map((emp) =>
        emp.id === id
          ? {
              ...emp,
              status: value,
              checkIn: value === "absent" ? "—" : "09:15 AM",
              checkOut: value === "absent" ? "—" : "06:30 PM",
              hours: value === "absent" ? "0" : "8.5",
            }
          : emp
      )
    );
  };

  const getStatusColor = (status) => {
    const colors = {
      present: "bg-green-100 text-green-800 border-green-200",
      absent: "bg-red-100 text-red-800 border-red-200",
      leave: "bg-yellow-100 text-yellow-800 border-yellow-200",
      late: "bg-orange-100 text-orange-800 border-orange-200",
    };
    return colors[status] || colors.present;
  };

  const getStatusIcon = (status) => {
    const icons = {
      present: <CheckCircle className="w-4 h-4" />,
      absent: <XCircle className="w-4 h-4" />,
      leave: <Clock className="w-4 h-4" />,
      late: <Clock className="w-4 h-4" />,
    };
    return icons[status] || <CheckCircle className="w-4 h-4" />;
  };

  const filteredAttendance =
    departmentFilter === "all"
      ? attendance
      : attendance.filter((emp) => emp.department === departmentFilter);

  const presentCount = attendance.filter((e) => e.status === "present").length;
  const absentCount = attendance.filter((e) => e.status === "absent").length;
  const leaveCount = attendance.filter((e) => e.status === "leave").length;
  const lateCount = attendance.filter((e) => e.status === "late").length;

  const stats = [
    {
      title: "Total Employees",
      value: attendance.length,
      icon: <Users className="w-6 h-6" />,
      color: "blue",
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    {
      title: "Present Today",
      value: presentCount,
      icon: <CheckCircle className="w-6 h-6" />,
      color: "green",
      bg: "bg-green-50",
      text: "text-green-600",
    },
    {
      title: "On Leave",
      value: leaveCount,
      icon: <Clock className="w-6 h-6" />,
      color: "yellow",
      bg: "bg-yellow-50",
      text: "text-yellow-600",
    },
    {
      title: "Absent",
      value: absentCount,
      icon: <XCircle className="w-6 h-6" />,
      color: "red",
      bg: "bg-red-50",
      text: "text-red-600",
    },
  ];

  const saveAttendance = () => {
    // Save logic here
    console.log("Attendance saved:", attendance);
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <CalendarDays className="w-7 h-7 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Attendance Management
            </h1>
            <p className="text-gray-600 mt-1">
              Track and manage daily employee attendance records
            </p>
          </div>
        </div>
      </div>

      {/* Date Picker Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 shadow-sm">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Select Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
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
                <option value="Operations">Operations</option>
              </select>
            </div>

            <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <Download className="w-5 h-5" />
              <span>Export</span>
            </button>
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
              <div
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.title.includes("Present")
                    ? "bg-green-100 text-green-700"
                    : stat.title.includes("Absent")
                    ? "bg-red-100 text-red-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {stat.title.includes("Present") ? "On time" : "Today"}
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {stat.value}
            </p>
            <p className="text-gray-600 text-sm">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Attendance Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Today's Attendance Summary
            </h3>
            <p className="text-blue-100">
              Attendance rate:{" "}
              {Math.round((presentCount / attendance.length) * 100)}%
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold">{presentCount}</p>
              <p className="text-blue-200 text-sm">Present</p>
            </div>
            <div className="h-12 w-px bg-blue-500"></div>
            <div className="text-center">
              <p className="text-3xl font-bold">{absentCount}</p>
              <p className="text-blue-200 text-sm">Absent</p>
            </div>
            <div className="h-12 w-px bg-blue-500"></div>
            <div className="text-center">
              <p className="text-3xl font-bold">{leaveCount}</p>
              <p className="text-blue-200 text-sm">On Leave</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Employee Attendance
            </h3>
            <p className="text-gray-600">
              {filteredAttendance.length} employees
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
                  DEPARTMENT
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  CHECK IN
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  CHECK OUT
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  HOURS
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  STATUS
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredAttendance.map((emp) => (
                <tr key={emp.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${emp.avatarColor}`}
                      >
                        {emp.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{emp.name}</p>
                        <p className="text-sm text-gray-500">{emp.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {emp.department}
                    </span>
                  </td>

                  <td className="p-4 text-gray-700 font-medium">
                    {emp.checkIn}
                  </td>
                  <td className="p-4 text-gray-700 font-medium">
                    {emp.checkOut}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{emp.hours}h</span>
                    </div>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${getStatusColor(
                          emp.status
                        )}`}
                      >
                        {getStatusIcon(emp.status)}
                        <span className="text-sm font-medium capitalize">
                          {emp.status}
                        </span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-600">
          <FileText className="w-5 h-5" />
          <span className="text-sm">Changes will be saved automatically</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
            <Eye className="w-5 h-5" />
            Preview Report
          </button>
          <button
            onClick={saveAttendance}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
          >
            <Save className="w-5 h-5" />
            Save Attendance
          </button>
        </div>
      </div>
    </div>
  );
}
