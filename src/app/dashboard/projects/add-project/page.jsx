"use client";

import {
  X,
  Calendar,
  Users,
  Target,
  DollarSign,
  Folder,
  FileText,
  Tag,
  Upload,
  AlertCircle,
  Clock,
  BarChart,
  Plus,
  Trash2,
  Eye,
  CheckCircle,
  TrendingUp,
  Shield,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState("basic");
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Olivia Williams",
      role: "Lead Developer",
      avatar: "OW",
      selected: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Backend Engineer",
      avatar: "MC",
      selected: true,
    },
    {
      id: 3,
      name: "Emma Johnson",
      role: "UI/UX Designer",
      avatar: "EJ",
      selected: false,
    },
    {
      id: 4,
      name: "David Wilson",
      role: "DevOps Engineer",
      avatar: "DW",
      selected: false,
    },
    {
      id: 5,
      name: "Sarah Miller",
      role: "QA Engineer",
      avatar: "SM",
      selected: false,
    },
  ]);

  const [milestones, setMilestones] = useState([
    {
      id: 1,
      title: "Project Kickoff",
      date: "2024-04-15",
      status: "completed",
    },
    { id: 2, title: "Design Phase", date: "2024-04-30", status: "in-progress" },
    {
      id: 3,
      title: "Development Start",
      date: "2024-05-15",
      status: "pending",
    },
    { id: 4, title: "Testing Phase", date: "2024-06-01", status: "pending" },
    { id: 5, title: "Project Delivery", date: "2024-06-30", status: "pending" },
  ]);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Create wireframes",
      assignee: "Emma Johnson",
      priority: "high",
      status: "todo",
    },
    {
      id: 2,
      title: "Setup development environment",
      assignee: "Michael Chen",
      priority: "medium",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Database design",
      assignee: "David Wilson",
      priority: "high",
      status: "todo",
    },
  ]);

  const [newTask, setNewTask] = useState({
    title: "",
    assignee: "",
    priority: "medium",
  });
  const [newMilestone, setNewMilestone] = useState({ title: "", date: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Frontend simulation
    setTimeout(() => {
      alert("Project created successfully!");
      setLoading(false);
      router.push("/dashboard/projects");
    }, 1500);
  };

  const toggleTeamMember = (id) => {
    setTeamMembers(
      teamMembers.map((member) =>
        member.id === id ? { ...member, selected: !member.selected } : member
      )
    );
  };

  const addTask = () => {
    if (newTask.title.trim()) {
      const task = {
        id: tasks.length + 1,
        title: newTask.title,
        assignee: newTask.assignee,
        priority: newTask.priority,
        status: "todo",
      };
      setTasks([...tasks, task]);
      setNewTask({ title: "", assignee: "", priority: "medium" });
    }
  };

  const addMilestone = () => {
    if (newMilestone.title.trim() && newMilestone.date) {
      const milestone = {
        id: milestones.length + 1,
        title: newMilestone.title,
        date: newMilestone.date,
        status: "pending",
      };
      setMilestones([...milestones, milestone]);
      setNewMilestone({ title: "", date: "" });
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const removeMilestone = (id) => {
    setMilestones(milestones.filter((milestone) => milestone.id !== id));
  };

  const statusOptions = [
    "Not Started",
    "Planning",
    "In Progress",
    "On Hold",
    "Completed",
    "Cancelled",
  ];
  const priorityOptions = ["Low", "Medium", "High", "Critical"];
  const projectTypes = [
    "Web Development",
    "Mobile App",
    "Software",
    "Design",
    "Marketing",
    "Research",
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Critical":
        return "bg-gradient-to-r from-red-500 to-pink-500";
      case "High":
        return "bg-gradient-to-r from-amber-500 to-orange-500";
      case "Medium":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Low":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700";
      case "in-progress":
        return "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700";
      case "pending":
        return "bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700";
      default:
        return "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700";
    }
  };

  return (
    <>
      {/* BACKGROUND OVERLAY */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 animate-fadeIn"
        onClick={() => router.back()}
      />

      {/* MODAL CONTAINER */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-gradient-to-b from-slate-50 to-white w-full max-w-6xl rounded-3xl shadow-2xl max-h-[95vh] overflow-hidden border border-slate-200 animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Create New Project
                </h1>
                <p className="text-blue-100 mt-1">
                  Fill in project details and assign team members
                </p>
              </div>
              <button
                onClick={() => router.back()}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Navigation Steps */}
            <div className="flex gap-4 mt-6">
              {["basic", "team", "planning", "budget"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === section
                      ? "bg-white text-blue-600 shadow-lg"
                      : "text-blue-100 hover:bg-white/10"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* FORM CONTENT */}
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 overflow-y-auto max-h-[calc(95vh-180px)]"
          >
            {/* BASIC INFORMATION */}
            {activeSection === "basic" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <Folder size={16} className="inline mr-2" />
                      Project Name *
                    </label>
                    <input
                      name="project_name"
                      placeholder="Enter project name"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <Users size={16} className="inline mr-2" />
                      Client Name *
                    </label>
                    <input
                      name="client_name"
                      placeholder="Enter client name"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <Tag size={16} className="inline mr-2" />
                      Project Type
                    </label>
                    <select className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <Target size={16} className="inline mr-2" />
                      Project Status
                    </label>
                    <select className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select status</option>
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <Calendar size={16} className="inline mr-2" />
                      Start Date *
                    </label>
                    <input
                      type="date"
                      name="start_date"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <Calendar size={16} className="inline mr-2" />
                      End Date *
                    </label>
                    <input
                      type="date"
                      name="end_date"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <Clock size={16} className="inline mr-2" />
                      Estimated Duration
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 3 months"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    <FileText size={16} className="inline mr-2" />
                    Project Description *
                  </label>
                  <textarea
                    placeholder="Describe the project goals, objectives, and scope..."
                    className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                    required
                  />
                </div>
              </div>
            )}

            {/* TEAM ASSIGNMENT */}
            {activeSection === "team" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Project Manager
                  </h3>
                  <input
                    placeholder="Search or select project manager..."
                    className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Select Team Members
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {teamMembers.map((member) => (
                      <div
                        key={member.id}
                        onClick={() => toggleTeamMember(member.id)}
                        className={`p-4 border rounded-xl cursor-pointer transition-all ${
                          member.selected
                            ? "border-blue-300 bg-blue-50 shadow-md"
                            : "border-slate-200 hover:border-blue-200"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                              member.selected
                                ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                                : "bg-gradient-to-r from-gray-400 to-slate-500"
                            }`}
                          >
                            {member.avatar}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-800">
                              {member.name}
                            </h4>
                            <p className="text-sm text-slate-500">
                              {member.role}
                            </p>
                          </div>
                          <div
                            className={`w-5 h-5 rounded border flex items-center justify-center ${
                              member.selected
                                ? "bg-blue-500 border-blue-500"
                                : "border-slate-300"
                            }`}
                          >
                            {member.selected && (
                              <CheckCircle size={12} className="text-white" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Initial Tasks
                  </h3>
                  <div className="space-y-3">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center justify-between p-3 border border-slate-200 rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-3 h-3 rounded-full ${getPriorityColor(
                              task.priority
                            )}`}
                          ></span>
                          <span className="text-slate-800">{task.title}</span>
                          <span className="text-sm text-slate-500">
                            ({task.assignee})
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeTask(task.id)}
                          className="p-1 hover:bg-slate-100 rounded"
                        >
                          <Trash2 size={16} className="text-slate-400" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 border border-dashed border-slate-300 rounded-xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="Task title"
                        className="px-3 py-2 border border-slate-200 rounded-lg"
                        value={newTask.title}
                        onChange={(e) =>
                          setNewTask({ ...newTask, title: e.target.value })
                        }
                      />
                      <select
                        className="px-3 py-2 border border-slate-200 rounded-lg"
                        value={newTask.assignee}
                        onChange={(e) =>
                          setNewTask({ ...newTask, assignee: e.target.value })
                        }
                      >
                        <option value="">Assign to</option>
                        {teamMembers
                          .filter((m) => m.selected)
                          .map((m) => (
                            <option key={m.id} value={m.name}>
                              {m.name}
                            </option>
                          ))}
                      </select>
                      <div className="flex gap-2">
                        <select
                          className="flex-1 px-3 py-2 border border-slate-200 rounded-lg"
                          value={newTask.priority}
                          onChange={(e) =>
                            setNewTask({ ...newTask, priority: e.target.value })
                          }
                        >
                          {priorityOptions.map((p) => (
                            <option key={p} value={p.toLowerCase()}>
                              {p}
                            </option>
                          ))}
                        </select>
                        <button
                          type="button"
                          onClick={addTask}
                          className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PROJECT PLANNING */}
            {activeSection === "planning" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Project Milestones
                  </h3>
                  <div className="space-y-4">
                    {milestones.map((milestone) => (
                      <div
                        key={milestone.id}
                        className="flex items-center justify-between p-4 border border-slate-200 rounded-xl"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${getStatusColor(
                              milestone.status
                            )}`}
                          >
                            <Calendar size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800">
                              {milestone.title}
                            </h4>
                            <p className="text-sm text-slate-500">
                              Due: {milestone.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                              milestone.status
                            )}`}
                          >
                            {milestone.status}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeMilestone(milestone.id)}
                            className="p-1 hover:bg-slate-100 rounded"
                          >
                            <Trash2 size={16} className="text-slate-400" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 border border-dashed border-slate-300 rounded-xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="Milestone title"
                        className="px-3 py-2 border border-slate-200 rounded-lg"
                        value={newMilestone.title}
                        onChange={(e) =>
                          setNewMilestone({
                            ...newMilestone,
                            title: e.target.value,
                          })
                        }
                      />
                      <input
                        type="date"
                        className="px-3 py-2 border border-slate-200 rounded-lg"
                        value={newMilestone.date}
                        onChange={(e) =>
                          setNewMilestone({
                            ...newMilestone,
                            date: e.target.value,
                          })
                        }
                      />
                      <button
                        type="button"
                        onClick={addMilestone}
                        className="px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600"
                      >
                        Add Milestone
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Project Goals & Objectives
                  </h3>
                  <textarea
                    placeholder="Define project goals, success criteria, and key objectives..."
                    className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Risk Assessment
                  </h3>
                  <textarea
                    placeholder="Identify potential risks and mitigation strategies..."
                    className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="3"
                  />
                </div>
              </div>
            )}

            {/* BUDGET & RESOURCES */}
            {activeSection === "budget" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <DollarSign size={16} className="inline mr-2" />
                      Total Budget *
                    </label>
                    <input
                      type="number"
                      placeholder="Enter budget amount"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <BarChart size={16} className="inline mr-2" />
                      Currency
                    </label>
                    <select className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="INR">INR (₹)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Labor Cost
                    </label>
                    <input
                      type="number"
                      placeholder="Estimated labor cost"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Materials Cost
                    </label>
                    <input
                      type="number"
                      placeholder="Materials & resources"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Contingency
                    </label>
                    <input
                      type="number"
                      placeholder="Contingency budget"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Budget Breakdown
                  </h3>
                  <textarea
                    placeholder="Provide detailed budget breakdown..."
                    className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="3"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Attachments
                  </h3>
                  <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                    <Upload size={40} className="text-slate-400 mx-auto mb-3" />
                    <p className="text-slate-600">
                      Drag & drop files or{" "}
                      <span className="text-blue-600 font-medium">browse</span>
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Support: PDF, DOC, XLS, Images (max 10MB)
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* NAVIGATION BUTTONS */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-slate-200">
              <div>
                {activeSection !== "basic" && (
                  <button
                    type="button"
                    onClick={() => {
                      const sections = ["basic", "team", "planning", "budget"];
                      const currentIndex = sections.indexOf(activeSection);
                      if (currentIndex > 0)
                        setActiveSection(sections[currentIndex - 1]);
                    }}
                    className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-medium"
                  >
                    ← Previous
                  </button>
                )}
              </div>

              <div className="flex gap-3">
                {activeSection !== "budget" ? (
                  <button
                    type="button"
                    onClick={() => {
                      const sections = ["basic", "team", "planning", "budget"];
                      const currentIndex = sections.indexOf(activeSection);
                      if (currentIndex < sections.length - 1)
                        setActiveSection(sections[currentIndex + 1]);
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 font-medium"
                  >
                    Continue →
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-green-500/25"
                  >
                    {loading ? (
                      <>
                        <Clock size={18} className="animate-spin" />
                        Creating Project...
                      </>
                    ) : (
                      <>
                        <CheckCircle size={18} />
                        Create Project
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
