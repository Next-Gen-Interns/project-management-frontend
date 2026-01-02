"use client";

import { useState } from "react";
import {
  Send,
  Calendar,
  Users,
  Flag,
  FileText,
  Clock,
  AlertCircle,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  X,
  UserCircle,
  Target,
  BarChart3,
  Lightbulb,
} from "lucide-react";

export default function AssignTaskPage() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "medium",
    member: "",
    deadline: "",
    category: "development",
    estimatedHours: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const submitTask = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setTask({
        title: "",
        description: "",
        priority: "medium",
        member: "",
        deadline: "",
        category: "development",
        estimatedHours: "",
      });
    }, 3000);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Frontend Developer",
      avatarColor: "bg-blue-500",
      tasks: 3,
    },
    {
      id: 2,
      name: "Sam Wilson",
      role: "Backend Developer",
      avatarColor: "bg-green-500",
      tasks: 2,
    },
    {
      id: 3,
      name: "Taylor Kim",
      role: "UI/UX Designer",
      avatarColor: "bg-purple-500",
      tasks: 1,
    },
    {
      id: 4,
      name: "Jordan Lee",
      role: "QA Engineer",
      avatarColor: "bg-orange-500",
      tasks: 4,
    },
  ];

  const priorities = [
    {
      value: "low",
      label: "Low Priority",
      color: "bg-green-100 text-green-700 border-green-200",
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
    {
      value: "medium",
      label: "Medium Priority",
      color: "bg-yellow-100 text-yellow-700 border-yellow-200",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      value: "high",
      label: "High Priority",
      color: "bg-red-100 text-red-700 border-red-200",
      icon: <AlertCircle className="w-4 h-4" />,
    },
  ];

  const categories = [
    {
      value: "development",
      label: "Development",
      color: "bg-blue-50 text-blue-700",
    },
    { value: "design", label: "Design", color: "bg-purple-50 text-purple-700" },
    {
      value: "testing",
      label: "Testing",
      color: "bg-orange-50 text-orange-700",
    },
    {
      value: "documentation",
      label: "Documentation",
      color: "bg-gray-50 text-gray-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
      {/* Blurred Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          ></div>
          <div className="relative bg-white rounded-2xl p-8 max-w-md w-full transform transition-all duration-300 scale-100">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Task Assigned Successfully!
              </h3>
              <p className="text-gray-600 mb-6">
                The task has been assigned to{" "}
                {teamMembers.find((m) => m.id === parseInt(task.member))
                  ?.name || "team member"}
                . They will be notified immediately.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-md"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                <Send className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Assign New Task
                </h1>
                <p className="text-gray-600 mt-1">
                  Create and assign tasks to your team members efficiently
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-6">
                <form onSubmit={submitTask}>
                  {/* Task Title */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Task Title
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Enter a clear, descriptive title"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50"
                        value={task.title}
                        onChange={(e) =>
                          setTask({ ...task, title: e.target.value })
                        }
                      />
                      <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Description
                    </label>
                    <div className="relative">
                      <textarea
                        rows="4"
                        placeholder="Provide detailed instructions and requirements..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 resize-none"
                        value={task.description}
                        onChange={(e) =>
                          setTask({ ...task, description: e.target.value })
                        }
                      />
                      <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Grid Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Assign To */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Assign To
                      </label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 appearance-none"
                        value={task.member}
                        onChange={(e) =>
                          setTask({ ...task, member: e.target.value })
                        }
                        required
                      >
                        <option value="">Select Team Member</option>
                        {teamMembers.map((member) => (
                          <option key={member.id} value={member.id}>
                            {member.name} - {member.role} ({member.tasks} tasks)
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Priority */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Flag className="w-4 h-4" />
                        Priority Level
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {priorities.map((priority) => (
                          <button
                            key={priority.value}
                            type="button"
                            onClick={() =>
                              setTask({ ...task, priority: priority.value })
                            }
                            className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border transition-all ${
                              task.priority === priority.value
                                ? `${priority.color} ring-2 ring-offset-2 ring-opacity-50`
                                : "border-gray-300 hover:bg-gray-50"
                            }`}
                          >
                            {priority.icon}
                            <span className="text-sm font-medium">
                              {priority.label.split(" ")[0]}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Deadline */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Deadline
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50"
                          value={task.deadline}
                          onChange={(e) =>
                            setTask({ ...task, deadline: e.target.value })
                          }
                          required
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    {/* Estimated Hours */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Estimated Hours
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          placeholder="e.g., 8"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50"
                          value={task.estimatedHours}
                          onChange={(e) =>
                            setTask({ ...task, estimatedHours: e.target.value })
                          }
                        />
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Task Category
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.value}
                          type="button"
                          onClick={() =>
                            setTask({ ...task, category: category.value })
                          }
                          className={`px-4 py-3 rounded-xl border transition-all ${
                            task.category === category.value
                              ? `${category.color} ring-2 ring-offset-2 ring-opacity-50 border-transparent`
                              : "border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <span className="font-medium">{category.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <Send className="w-5 h-5" />
                      <span className="font-semibold">Assign Task</span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setTask({
                          title: "",
                          description: "",
                          priority: "medium",
                          member: "",
                          deadline: "",
                          category: "development",
                          estimatedHours: "",
                        })
                      }
                      className="px-6 py-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Clear Form
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Team Members Preview */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Team Members</h3>
                  <span className="text-xs text-gray-500">
                    {teamMembers.length} active
                  </span>
                </div>
                <div className="space-y-3">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50/50 transition-colors"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${member.avatarColor}`}
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          {member.name}
                        </p>
                        <p className="text-xs text-gray-500">{member.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold">{member.tasks}</p>
                        <p className="text-xs text-gray-500">tasks</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips Card */}
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5" />
                  <h3 className="font-semibold">Pro Tips</h3>
                </div>
                <ul className="space-y-3 text-sm text-purple-100">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      Be specific with requirements to avoid confusion
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Set realistic deadlines based on complexity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Use categories for better organization</span>
                  </li>
                </ul>
              </div>

              {/* Stats Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Task Stats</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Completion Rate</span>
                      <span className="font-semibold">78%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">On Time Delivery</span>
                      <span className="font-semibold">85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
