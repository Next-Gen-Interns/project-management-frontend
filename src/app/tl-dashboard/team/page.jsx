"use client";

import {
  Mail,
  Phone,
  MoreVertical,
  Search,
  Edit,
  Eye,
  Trash2,
  User,
  CheckCircle,
  Calendar,
  Briefcase,
  MapPin,
  Download,
  Filter,
  SortAsc,
} from "lucide-react";
import { useState } from "react";

export default function EmployeesPage() {
  const initialEmployees = [
    {
      id: 1,
      name: "Olivia Williams",
      role: "PHP Web Developer",
      department: "Development",
      joinDate: "Aug 24, 2022",
      email: "o.williams@example.com",
      phone: "(123) 456-7890",
      status: "ACTIVE",
      location: "New York, NY",
      avatarColor: "bg-gradient-to-br from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      name: "Triston Bode",
      role: "Frontend Developer",
      department: "Development",
      joinDate: "Apr 12, 2020",
      email: "triston.bode@example.com",
      phone: "(444) 342-7634",
      status: "ACTIVE",
      location: "San Francisco, CA",
      avatarColor: "bg-gradient-to-br from-emerald-500 to-green-400",
    },
    {
      id: 3,
      name: "Kallie Towne",
      role: "Project Manager",
      department: "Sales & Marketing",
      joinDate: "Aug 10, 2022",
      email: "k.towne@example.com",
      phone: "(555) 321-7612",
      status: "ON LEAVE",
      location: "Chicago, IL",
      avatarColor: "bg-gradient-to-br from-purple-500 to-violet-400",
    },
    {
      id: 4,
      name: "Chester Wiza",
      role: "Full Stack Developer",
      department: "Development",
      joinDate: "Apr 03, 2022",
      email: "wiza2003@example.com",
      phone: "(976) 543-1290",
      status: "REMOTE",
      location: "Remote",
      avatarColor: "bg-gradient-to-br from-amber-500 to-orange-400",
    },
    {
      id: 5,
      name: "Emma Johnson",
      role: "UI/UX Designer",
      department: "Design",
      joinDate: "Jan 15, 2023",
      email: "emma.j@example.com",
      phone: "(321) 654-9870",
      status: "ACTIVE",
      location: "Austin, TX",
      avatarColor: "bg-gradient-to-br from-rose-500 to-pink-400",
    },
    {
      id: 6,
      name: "Michael Chen",
      role: "DevOps Engineer",
      department: "Operations",
      joinDate: "Nov 30, 2021",
      email: "m.chen@example.com",
      phone: "(789) 123-4567",
      status: "REMOTE",
      location: "Seattle, WA",
      avatarColor: "bg-gradient-to-br from-indigo-500 to-blue-400",
    },
    {
      id: 7,
      name: "Sarah Miller",
      role: "HR Manager",
      department: "Human Resources",
      joinDate: "Mar 18, 2021",
      email: "s.miller@example.com",
      phone: "(456) 789-0123",
      status: "ACTIVE",
      location: "Boston, MA",
      avatarColor: "bg-gradient-to-br from-fuchsia-500 to-purple-400",
    },
    {
      id: 8,
      name: "David Wilson",
      role: "Data Analyst",
      department: "Analytics",
      joinDate: "Jul 05, 2023",
      email: "d.wilson@example.com",
      phone: "(234) 567-8901",
      status: "REMOTE",
      location: "Denver, CO",
      avatarColor: "bg-gradient-to-br from-teal-500 to-emerald-400",
    },
  ];

  // Enhanced status badges with icons
  const statusConfig = {
    ACTIVE: {
      bg: "bg-gradient-to-r from-emerald-100 to-green-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      icon: "🟢",
    },
    REMOTE: {
      bg: "bg-gradient-to-r from-blue-100 to-cyan-50",
      text: "text-blue-700",
      border: "border-blue-200",
      icon: "🌐",
    },
    "ON LEAVE": {
      bg: "bg-gradient-to-r from-amber-100 to-yellow-50",
      text: "text-amber-700",
      border: "border-amber-200",
      icon: "🌴",
    },
    TERMINATED: {
      bg: "bg-gradient-to-r from-red-100 to-rose-50",
      text: "text-red-700",
      border: "border-red-200",
      icon: "🔴",
    },
  };

  const departmentColors = {
    Development: "border-l-4 border-l-blue-500",
    "Sales & Marketing": "border-l-4 border-l-purple-500",
    Design: "border-l-4 border-l-pink-500",
    Operations: "border-l-4 border-l-indigo-500",
    "Human Resources": "border-l-4 border-l-fuchsia-500",
    Analytics: "border-l-4 border-l-teal-500",
  };

  const [employees, setEmployees] = useState(initialEmployees);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeView, setActiveView] = useState("grid");

  // Filter and sort employees
  const filteredEmployees = employees
    .filter((emp) => {
      const matchesSearch =
        emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emp.department.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDept =
        departmentFilter === "all" || emp.department === departmentFilter;
      const matchesStatus =
        statusFilter === "all" || emp.status === statusFilter;
      return matchesSearch && matchesDept && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "date":
          return new Date(b.joinDate) - new Date(a.joinDate);
        case "department":
          return a.department.localeCompare(b.department);
        default:
          return 0;
      }
    });

  // Get unique departments for filter
  const departments = [...new Set(employees.map((emp) => emp.department))];
  const statuses = Object.keys(statusConfig);

  const handleViewEmployee = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee({ ...employee });
    setIsModalOpen(true);
  };

  const handleDeleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const handleSaveEdit = () => {
    if (editingEmployee) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editingEmployee.id ? editingEmployee : emp
        )
      );
      setEditingEmployee(null);
    }
    setIsModalOpen(false);
  };

  const handleAddEmployee = () => {
    const newEmployee = {
      id: employees.length + 1,
      name: "New Employee",
      role: "New Role",
      department: "Development",
      joinDate: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      email: "new@example.com",
      phone: "(000) 000-0000",
      status: "ACTIVE",
      location: "Remote",
      avatarColor: "bg-gradient-to-br from-gray-500 to-slate-400",
    };
    setEmployees([...employees, newEmployee]);
    setEditingEmployee(newEmployee);
    setIsModalOpen(true);
  };

  const toggleCardExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setDepartmentFilter("all");
    setStatusFilter("all");
    setSortBy("name");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-6 md:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Team Dashboard
            </h1>
            <p className="text-slate-600 mt-2">
              Manage your team members and their information
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 flex items-center gap-2 shadow-sm"
              onClick={() => alert("Import functionality would go here")}
            >
              <Download size={16} />
              Import
            </button>
            <button
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-500/25"
              onClick={handleAddEmployee}
            >
              <User size={16} />
              Add Employee
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Employees</p>
                <p className="text-2xl font-bold text-slate-800">
                  {employees.length}
                </p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <User size={20} className="text-blue-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Active</p>
                <p className="text-2xl font-bold text-slate-800">
                  {employees.filter((e) => e.status === "ACTIVE").length}
                </p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <CheckCircle size={20} className="text-emerald-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Remote</p>
                <p className="text-2xl font-bold text-slate-800">
                  {employees.filter((e) => e.status === "REMOTE").length}
                </p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                <MapPin size={20} className="text-cyan-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Departments</p>
                <p className="text-2xl font-bold text-slate-800">
                  {departments.length}
                </p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center">
                <Briefcase size={20} className="text-violet-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl p-5 mb-8 shadow-lg border border-slate-100">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-3.5 text-slate-400"
              />
              <input
                placeholder="Search employees by name, role, or department..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <SortAsc
                size={16}
                className="absolute left-3 top-3 text-slate-400"
              />
              <select
                className="pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="date">Newest First</option>
                <option value="department">By Department</option>
              </select>
            </div>

            <div className="relative">
              <Filter
                size={16}
                className="absolute left-3 top-3 text-slate-400"
              />
              <select
                className="pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                <option value="all">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <select
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            {(searchQuery ||
              departmentFilter !== "all" ||
              statusFilter !== "all") && (
              <button
                onClick={clearFilters}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Active filters indicator */}
        {(searchQuery ||
          departmentFilter !== "all" ||
          statusFilter !== "all") && (
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
            <span>Active filters:</span>
            {searchQuery && (
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                Search: "{searchQuery}"
              </span>
            )}
            {departmentFilter !== "all" && (
              <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full">
                Department: {departmentFilter}
              </span>
            )}
            {statusFilter !== "all" && (
              <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full">
                Status: {statusFilter}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Cards Grid */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Team Members ({filteredEmployees.length})
          </h2>
          <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeView === "grid"
                  ? "bg-white text-slate-800 shadow-sm"
                  : "text-slate-600 hover:text-slate-800"
              }`}
              onClick={() => setActiveView("grid")}
            >
              Grid View
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeView === "list"
                  ? "bg-white text-slate-800 shadow-sm"
                  : "text-slate-600 hover:text-slate-800"
              }`}
              onClick={() => setActiveView("list")}
            >
              List View
            </button>
          </div>
        </div>

        <div
          className={`grid ${
            activeView === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          } gap-6`}
        >
          {filteredEmployees.map((emp) => (
            <div
              key={emp.id}
              className={`bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                expandedCard === emp.id
                  ? "ring-2 ring-blue-500 shadow-lg"
                  : "hover:border-slate-300"
              } ${activeView === "list" ? "flex items-center gap-4" : ""} ${
                departmentColors[emp.department] || ""
              }`}
              onClick={() => toggleCardExpand(emp.id)}
            >
              {/* Card Header */}
              <div
                className={`${
                  activeView === "list" ? "flex-1 flex items-center gap-4" : ""
                }`}
              >
                <div
                  className={`${
                    emp.avatarColor
                  } w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-md ${
                    activeView === "list" ? "flex-shrink-0" : "mb-4"
                  }`}
                >
                  {getInitials(emp.name)}
                </div>

                <div className={`${activeView === "list" ? "flex-1" : ""}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {emp.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} className="text-slate-400" />
                        <span className="text-sm text-slate-600">
                          {emp.role}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                          statusConfig[emp.status]?.bg
                        } ${statusConfig[emp.status]?.text} ${
                          statusConfig[emp.status]?.border
                        } border`}
                      >
                        <span className="mr-1">
                          {statusConfig[emp.status]?.icon}
                        </span>
                        {emp.status}
                      </span>
                      <button
                        className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewEmployee(emp);
                        }}
                      >
                        <MoreVertical size={18} className="text-slate-400" />
                      </button>
                    </div>
                  </div>

                  {/* Employee Info */}
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={14} className="text-slate-400" />
                      <span className="text-slate-600">{emp.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={14} className="text-slate-400" />
                      <span className="text-slate-600">
                        Joined {emp.joinDate}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-slate-600">{emp.department}</span>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedCard === emp.id && (
                    <div className="mt-5 pt-5 border-t border-slate-100 space-y-4 animate-fadeIn">
                      <div className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-4 border border-slate-100">
                        <p className="text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">
                          Contact Information
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 hover:border-blue-200 transition-colors group/contact">
                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                              <Mail size={14} className="text-blue-500" />
                            </div>
                            <a
                              href={`mailto:${emp.email}`}
                              className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                            >
                              {emp.email}
                            </a>
                          </div>

                          <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 hover:border-green-200 transition-colors group/contact">
                            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                              <Phone size={14} className="text-green-500" />
                            </div>
                            <a
                              href={`tel:${emp.phone}`}
                              className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                            >
                              {emp.phone}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        <button
                          className="flex-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 py-3 rounded-xl text-sm font-semibold hover:from-blue-100 hover:to-cyan-100 transition-all duration-200 flex items-center justify-center gap-2 border border-blue-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditEmployee(emp);
                          }}
                        >
                          <Edit size={14} />
                          Edit Profile
                        </button>
                        <button
                          className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl text-sm font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewEmployee(emp);
                          }}
                        >
                          <Eye size={14} />
                          View Details
                        </button>
                        <button
                          className="px-4 py-3 bg-gradient-to-r from-red-50 to-rose-50 text-red-600 rounded-xl text-sm font-semibold hover:from-red-100 hover:to-rose-100 transition-all duration-200 border border-red-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteEmployee(emp.id);
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Collapsed Actions */}
                  {expandedCard !== emp.id && (
                    <div className="mt-5 pt-5 border-t border-slate-100 flex gap-3">
                      <button
                        className="flex-1 bg-slate-50 text-slate-700 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditEmployee(emp);
                        }}
                      >
                        Quick Edit
                      </button>
                      <button
                        className="flex-1 bg-blue-500 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewEmployee(emp);
                        }}
                      >
                        View Profile
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* No Results */}
      {filteredEmployees.length === 0 && (
        <div className="text-center py-16 bg-gradient-to-b from-white to-slate-50 rounded-3xl border border-slate-200">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search size={32} className="text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-3">
            No employees found
          </h3>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            Try adjusting your search or filters to find what you're looking for
          </p>
          <button
            onClick={clearFilters}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-blue-500/25"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Modal for View/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800">
                  {editingEmployee ? "Edit Employee" : "Employee Profile"}
                </h3>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingEmployee(null);
                  }}
                  className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>

              {editingEmployee ? (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={editingEmployee.name}
                      onChange={(e) =>
                        setEditingEmployee({
                          ...editingEmployee,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Job Role
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={editingEmployee.role}
                      onChange={(e) =>
                        setEditingEmployee({
                          ...editingEmployee,
                          role: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Status
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={editingEmployee.status}
                      onChange={(e) =>
                        setEditingEmployee({
                          ...editingEmployee,
                          status: e.target.value,
                        })
                      }
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <button
                      className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3.5 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-blue-500/25"
                      onClick={handleSaveEdit}
                    >
                      Save Changes
                    </button>
                    <button
                      className="flex-1 border border-slate-200 text-slate-700 py-3.5 rounded-xl font-medium hover:bg-slate-50 transition-colors"
                      onClick={() => {
                        setIsModalOpen(false);
                        setEditingEmployee(null);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {selectedEmployee && (
                    <>
                      <div className="text-center">
                        <div
                          className={`${selectedEmployee.avatarColor} w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg`}
                        >
                          {getInitials(selectedEmployee.name)}
                        </div>
                        <h4 className="text-2xl font-bold text-slate-800">
                          {selectedEmployee.name}
                        </h4>
                        <p className="text-slate-600 mt-1">
                          {selectedEmployee.role}
                        </p>
                        <span
                          className={`inline-block mt-3 px-4 py-2 rounded-full text-sm font-semibold ${
                            statusConfig[selectedEmployee.status]?.bg
                          } ${statusConfig[selectedEmployee.status]?.text} ${
                            statusConfig[selectedEmployee.status]?.border
                          } border`}
                        >
                          <span className="mr-2">
                            {statusConfig[selectedEmployee.status]?.icon}
                          </span>
                          {selectedEmployee.status}
                        </span>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-4">
                          <h5 className="font-semibold text-slate-700 mb-3">
                            Employee Details
                          </h5>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center py-2">
                              <span className="text-slate-500">Department</span>
                              <span className="font-semibold text-slate-800">
                                {selectedEmployee.department}
                              </span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                              <span className="text-slate-500">
                                Date Joined
                              </span>
                              <span className="font-semibold text-slate-800">
                                {selectedEmployee.joinDate}
                              </span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                              <span className="text-slate-500">Location</span>
                              <span className="font-semibold text-slate-800">
                                {selectedEmployee.location}
                              </span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                              <span className="text-slate-500">Email</span>
                              <a
                                href={`mailto:${selectedEmployee.email}`}
                                className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                              >
                                {selectedEmployee.email}
                              </a>
                            </div>
                            <div className="flex justify-between items-center py-2">
                              <span className="text-slate-500">Phone</span>
                              <a
                                href={`tel:${selectedEmployee.phone}`}
                                className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                              >
                                {selectedEmployee.phone}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3.5 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-blue-500/25"
                          onClick={() => handleEditEmployee(selectedEmployee)}
                        >
                          Edit Employee Profile
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
