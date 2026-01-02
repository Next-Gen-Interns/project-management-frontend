"use client";

import {
  Search,
  Filter,
  Plus,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Target,
  MoreVertical,
  Edit2,
  Trash2,
  Eye,
  FileText,
  Users,
  Flag,
  ChevronDown,
  ChevronUp,
  Download,
  Share2,
  Star,
  Bell,
  RefreshCw,
  CheckSquare,
  Square,
  TrendingUp,
  Archive,
} from "lucide-react";
import { useState } from "react";

export default function MyTasksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [expandedTask, setExpandedTask] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design login screen for mobile app",
      description:
        "Create responsive login screen with dark/light mode support",
      project: "Mobile App",
      assignee: "Olivia Williams",
      dueDate: "2024-04-15",
      priority: "high",
      status: "in-progress",
      tags: ["UI", "Design"],
      subtasks: [
        { id: 1, text: "Wireframe creation", completed: true },
        { id: 2, text: "Color palette selection", completed: true },
        { id: 3, text: "Responsive design testing", completed: false },
      ],
      timeSpent: "4h 30m",
      estimated: "8h",
      comments: 3,
      attachments: 2,
      createdAt: "2024-04-01",
    },
    {
      id: 2,
      title: "Fix dashboard performance issues",
      description: "Optimize API calls and reduce loading time",
      project: "CRM Revamp",
      assignee: "Michael Chen",
      dueDate: "2024-04-10",
      priority: "high",
      status: "todo",
      tags: ["Performance", "Backend"],
      subtasks: [
        { id: 1, text: "Identify bottlenecks", completed: true },
        { id: 2, text: "Optimize database queries", completed: false },
      ],
      timeSpent: "2h 15m",
      estimated: "6h",
      comments: 5,
      attachments: 1,
      createdAt: "2024-03-28",
    },
    {
      id: 3,
      title: "Write unit tests for authentication module",
      description: "Cover all edge cases in login and registration flows",
      project: "HR Portal",
      assignee: "David Wilson",
      dueDate: "2024-04-20",
      priority: "medium",
      status: "in-progress",
      tags: ["Testing", "Security"],
      subtasks: [
        { id: 1, text: "Setup testing environment", completed: true },
        { id: 2, text: "Write login tests", completed: true },
        { id: 3, text: "Write registration tests", completed: false },
        { id: 4, text: "Run test coverage report", completed: false },
      ],
      timeSpent: "6h",
      estimated: "10h",
      comments: 2,
      attachments: 0,
      createdAt: "2024-04-02",
    },
    {
      id: 4,
      title: "Update documentation for API endpoints",
      description: "Add examples and error responses for new endpoints",
      project: "CRM Revamp",
      assignee: "Sarah Miller",
      dueDate: "2024-04-05",
      priority: "low",
      status: "completed",
      tags: ["Documentation", "API"],
      subtasks: [
        { id: 1, text: "Review existing docs", completed: true },
        { id: 2, text: "Add endpoint examples", completed: true },
        { id: 3, text: "Include error responses", completed: true },
      ],
      timeSpent: "5h",
      estimated: "4h",
      comments: 1,
      attachments: 3,
      createdAt: "2024-03-25",
    },
    {
      id: 5,
      title: "Prepare presentation for client meeting",
      description: "Create slides showing project progress and milestones",
      project: "Mobile App",
      assignee: "Emma Johnson",
      dueDate: "2024-04-08",
      priority: "medium",
      status: "todo",
      tags: ["Presentation", "Client"],
      subtasks: [
        { id: 1, text: "Gather project metrics", completed: false },
        { id: 2, text: "Design slide deck", completed: false },
        { id: 3, text: "Practice presentation", completed: false },
      ],
      timeSpent: "0h",
      estimated: "3h",
      comments: 0,
      attachments: 0,
      createdAt: "2024-04-03",
    },
    {
      id: 6,
      title: "Code review for pull request #245",
      description: "Review changes in user authentication flow",
      project: "HR Portal",
      assignee: "John Doe",
      dueDate: "2024-04-03",
      priority: "high",
      status: "review",
      tags: ["Code Review", "Security"],
      subtasks: [
        { id: 1, text: "Review security implementation", completed: true },
        { id: 2, text: "Check code quality", completed: false },
        { id: 3, text: "Test authentication flow", completed: false },
      ],
      timeSpent: "1h 30m",
      estimated: "2h",
      comments: 7,
      attachments: 1,
      createdAt: "2024-04-01",
    },
  ]);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    project: "",
    dueDate: "",
    priority: "medium",
    tags: [],
  });

  const filters = [
    { id: "all", label: "All Tasks", count: tasks.length },
    {
      id: "todo",
      label: "To Do",
      count: tasks.filter((t) => t.status === "todo").length,
    },
    {
      id: "in-progress",
      label: "In Progress",
      count: tasks.filter((t) => t.status === "in-progress").length,
    },
    {
      id: "review",
      label: "Review",
      count: tasks.filter((t) => t.status === "review").length,
    },
    {
      id: "completed",
      label: "Completed",
      count: tasks.filter((t) => t.status === "completed").length,
    },
  ];

  const priorities = [
    { id: "all", label: "All Priorities", color: "bg-gray-200" },
    {
      id: "high",
      label: "High",
      color: "bg-gradient-to-r from-red-500 to-pink-500",
    },
    {
      id: "medium",
      label: "Medium",
      color: "bg-gradient-to-r from-amber-500 to-yellow-500",
    },
    {
      id: "low",
      label: "Low",
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
  ];

  const projects = [
    "Mobile App",
    "CRM Revamp",
    "HR Portal",
    "Design System",
    "E-commerce",
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "todo":
        return "bg-gradient-to-r from-gray-400 to-slate-500";
      case "in-progress":
        return "bg-gradient-to-r from-blue-500 to-cyan-400";
      case "review":
        return "bg-gradient-to-r from-amber-500 to-orange-400";
      case "completed":
        return "bg-gradient-to-r from-green-500 to-emerald-400";
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "todo":
        return <Square size={16} />;
      case "in-progress":
        return <Clock size={16} />;
      case "review":
        return <Eye size={16} />;
      case "completed":
        return <CheckCircle size={16} />;
      default:
        return <Target size={16} />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border-red-200";
      case "medium":
        return "bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 border-amber-200";
      case "low":
        return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200";
      default:
        return "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 border-gray-200";
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.project.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedFilter === "all" || task.status === selectedFilter;
    const matchesPriority =
      selectedPriority === "all" || task.priority === selectedPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleCreateTask = (e) => {
    e.preventDefault();
    const newTaskObj = {
      id: tasks.length + 1,
      ...newTask,
      status: "todo",
      assignee: "Me",
      tags: newTask.tags,
      subtasks: [],
      timeSpent: "0h",
      estimated: "0h",
      comments: 0,
      attachments: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask({
      title: "",
      description: "",
      project: "",
      dueDate: "",
      priority: "medium",
      tags: [],
    });
    setShowCreateModal(false);
  };

  const handleTaskStatusChange = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleSubtaskToggle = (taskId, subtaskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          const updatedSubtasks = task.subtasks.map((subtask) =>
            subtask.id === subtaskId
              ? { ...subtask, completed: !subtask.completed }
              : subtask
          );
          return { ...task, subtasks: updatedSubtasks };
        }
        return task;
      })
    );
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  const toggleTaskExpand = (taskId) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  const getCompletionPercentage = (task) => {
    if (task.subtasks.length === 0) return 0;
    const completed = task.subtasks.filter((st) => st.completed).length;
    return Math.round((completed / task.subtasks.length) * 100);
  };

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === "completed").length,
    inProgress: tasks.filter((t) => t.status === "in-progress").length,
    overdue: tasks.filter(
      (t) => new Date(t.dueDate) < new Date() && t.status !== "completed"
    ).length,
    highPriority: tasks.filter(
      (t) => t.priority === "high" && t.status !== "completed"
    ).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Tasks
          </h1>
          <p className="text-slate-600 mt-2">
            Manage and track your assigned tasks
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25"
          >
            <Plus size={18} />
            Create Task
          </button>
          <button className="px-4 py-2.5 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Tasks</p>
              <p className="text-2xl font-bold text-slate-800">{stats.total}</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Target size={20} className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">In Progress</p>
              <p className="text-2xl font-bold text-slate-800">
                {stats.inProgress}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
              <Clock size={20} className="text-cyan-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Completed</p>
              <p className="text-2xl font-bold text-slate-800">
                {stats.completed}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <CheckCircle size={20} className="text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Overdue</p>
              <p className="text-2xl font-bold text-slate-800">
                {stats.overdue}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <AlertCircle size={20} className="text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">High Priority</p>
              <p className="text-2xl font-bold text-slate-800">
                {stats.highPriority}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <Flag size={20} className="text-amber-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl p-5 mb-6 shadow-lg border border-slate-100">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-3.5 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search tasks by title, description, or project..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <Filter
                size={16}
                className="absolute left-3 top-3 text-slate-400"
              />
              <select
                className="pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                {filters.map((filter) => (
                  <option key={filter.id} value={filter.id}>
                    {filter.label} ({filter.count})
                  </option>
                ))}
              </select>
            </div>

            <select
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
            >
              {priorities.map((priority) => (
                <option key={priority.id} value={priority.id}>
                  {priority.label}
                </option>
              ))}
            </select>

            {(searchQuery ||
              selectedFilter !== "all" ||
              selectedPriority !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFilter("all");
                  setSelectedPriority("all");
                }}
                className="px-4 py-2.5 text-slate-600 hover:text-slate-800 text-sm"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedFilter === filter.id
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {filter.label} <span className="ml-1">{filter.count}</span>
          </button>
        ))}
      </div>

      {/* Tasks List */}
      <div className="space-y-4 mb-8">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-slate-200">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              No tasks found
            </h3>
            <p className="text-slate-600">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all duration-300 ${
                expandedTask === task.id ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {/* Task Header */}
              <div
                className="p-5 cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => toggleTaskExpand(task.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTaskStatusChange(
                          task.id,
                          task.status === "completed" ? "todo" : "completed"
                        );
                      }}
                      className={`w-6 h-6 rounded border flex items-center justify-center flex-shrink-0 mt-1 ${
                        task.status === "completed"
                          ? "bg-gradient-to-r from-green-500 to-emerald-400 border-green-500 text-white"
                          : "border-slate-300 hover:border-blue-500"
                      }`}
                    >
                      {task.status === "completed" && <CheckCircle size={14} />}
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3
                          className={`font-semibold ${
                            task.status === "completed"
                              ? "text-slate-500 line-through"
                              : "text-slate-800"
                          }`}
                        >
                          {task.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(
                            task.priority
                          )} border`}
                        >
                          {task.priority.charAt(0).toUpperCase() +
                            task.priority.slice(1)}
                        </span>
                      </div>

                      <p className="text-slate-600 text-sm mb-3">
                        {task.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Target size={14} />
                          {task.project}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={14} />
                          {task.assignee}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          Due: {new Date(task.dueDate).toLocaleDateString()}
                          {new Date(task.dueDate) < new Date() &&
                            task.status !== "completed" && (
                              <span className="text-red-500 ml-1">
                                (Overdue)
                              </span>
                            )}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {task.timeSpent} / {task.estimated}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${getStatusColor(
                        task.status
                      )} flex items-center justify-center text-white`}
                    >
                      {getStatusIcon(task.status)}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTaskExpand(task.id);
                      }}
                      className="p-2 hover:bg-slate-100 rounded-lg"
                    >
                      {expandedTask === task.id ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {task.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded Content */}
              {expandedTask === task.id && (
                <div className="border-t border-slate-200 p-5 animate-fadeIn">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Subtasks */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">
                        Checklist
                      </h4>
                      <div className="space-y-2 mb-4">
                        {task.subtasks.map((subtask) => (
                          <div
                            key={subtask.id}
                            className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg"
                          >
                            <button
                              onClick={() =>
                                handleSubtaskToggle(task.id, subtask.id)
                              }
                              className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${
                                subtask.completed
                                  ? "bg-gradient-to-r from-green-500 to-emerald-400 border-green-500 text-white"
                                  : "border-slate-300 hover:border-blue-500"
                              }`}
                            >
                              {subtask.completed && <CheckCircle size={12} />}
                            </button>
                            <span
                              className={`${
                                subtask.completed
                                  ? "text-slate-500 line-through"
                                  : "text-slate-700"
                              }`}
                            >
                              {subtask.text}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                          style={{ width: `${getCompletionPercentage(task)}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-sm text-slate-500 mt-1">
                        {getCompletionPercentage(task)}% Complete
                      </div>
                    </div>

                    {/* Task Details */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">
                        Task Details
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div>
                            <p className="text-xs text-slate-500">Created</p>
                            <p className="text-sm text-slate-800">
                              {task.createdAt}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Status</p>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(
                                task.status
                              )}`}
                            >
                              {task.status.charAt(0).toUpperCase() +
                                task.status.slice(1)}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <p className="text-xs text-slate-500">Comments</p>
                            <p className="text-sm text-slate-800 flex items-center gap-1">
                              <MessageSquare size={14} /> {task.comments}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">
                              Attachments
                            </p>
                            <p className="text-sm text-slate-800 flex items-center gap-1">
                              <FileText size={14} /> {task.attachments}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-6 pt-6 border-t border-slate-200">
                        <button
                          onClick={() =>
                            handleTaskStatusChange(task.id, "in-progress")
                          }
                          className="flex-1 px-4 py-2.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                        >
                          Start Task
                        </button>
                        <button
                          onClick={() =>
                            handleTaskStatusChange(task.id, "review")
                          }
                          className="flex-1 px-4 py-2.5 bg-amber-50 text-amber-600 rounded-lg text-sm font-medium hover:bg-amber-100 transition-colors"
                        >
                          Mark for Review
                        </button>
                        <button
                          onClick={() => handleDeleteTask(task.id)}
                          className="px-4 py-2.5 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Create Task Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">
                  Create New Task
                </h3>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreateTask} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Task Title *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter task title"
                    value={newTask.title}
                    onChange={(e) =>
                      setNewTask({ ...newTask, title: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter task description"
                    value={newTask.description}
                    onChange={(e) =>
                      setNewTask({ ...newTask, description: e.target.value })
                    }
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Project
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newTask.project}
                      onChange={(e) =>
                        setNewTask({ ...newTask, project: e.target.value })
                      }
                    >
                      <option value="">Select Project</option>
                      {projects.map((project) => (
                        <option key={project} value={project}>
                          {project}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Due Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newTask.dueDate}
                      onChange={(e) =>
                        setNewTask({ ...newTask, dueDate: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Priority
                    </label>
                    <div className="flex gap-2">
                      {["high", "medium", "low"].map((priority) => (
                        <button
                          key={priority}
                          type="button"
                          onClick={() => setNewTask({ ...newTask, priority })}
                          className={`flex-1 py-2.5 rounded-lg text-sm font-medium border ${
                            newTask.priority === priority
                              ? `${getPriorityColor(priority)} border-current`
                              : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {priority.charAt(0).toUpperCase() + priority.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3.5 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"
                  >
                    Create Task
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 border border-slate-200 text-slate-700 py-3.5 rounded-xl font-medium hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
