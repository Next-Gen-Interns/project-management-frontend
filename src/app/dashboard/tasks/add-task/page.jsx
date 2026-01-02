"use client";

import {
  X,
  Calendar,
  Users,
  Target,
  Flag,
  Clock,
  FileText,
  Tag,
  AlertCircle,
  Plus,
  Trash2,
  CheckCircle,
  TrendingUp,
  Bell,
  Link,
  Paperclip,
  BarChart,
  Eye,
  Star,
  Zap,
  CalendarClock,
  CheckSquare,
  MessageSquare,
  Hash,
  DollarSign,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTaskPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const [subtasks, setSubtasks] = useState([
    { id: 1, text: "Research existing solutions", completed: false },
    { id: 2, text: "Create initial wireframes", completed: false },
    { id: 3, text: "Get client approval", completed: false },
  ]);
  const [attachments, setAttachments] = useState([
    { id: 1, name: "design_guidelines.pdf", size: "2.4 MB" },
    { id: 2, name: "wireframe.sketch", size: "3.1 MB" },
  ]);

  const [task, setTask] = useState({
    title: "",
    description: "",
    project: "",
    assignee: "",
    reporter: "",
    startDate: "",
    dueDate: "",
    priority: "medium",
    status: "todo",
    estimatedHours: "",
    labels: [],
    dependencies: [],
  });

  const projects = [
    "CRM Revamp",
    "Mobile App",
    "HR Portal",
    "Design System",
    "E-commerce Platform",
  ];

  const teamMembers = [
    { id: 1, name: "Olivia Williams", role: "Lead Developer", avatar: "OW" },
    { id: 2, name: "Michael Chen", role: "Backend Engineer", avatar: "MC" },
    { id: 3, name: "Emma Johnson", role: "UI/UX Designer", avatar: "EJ" },
    { id: 4, name: "David Wilson", role: "DevOps Engineer", avatar: "DW" },
    { id: 5, name: "Sarah Miller", role: "QA Engineer", avatar: "SM" },
  ];

  const labels = [
    { id: 1, name: "Bug", color: "bg-red-500" },
    { id: 2, name: "Feature", color: "bg-blue-500" },
    { id: 3, name: "Improvement", color: "bg-green-500" },
    { id: 4, name: "Documentation", color: "bg-purple-500" },
    { id: 5, name: "Design", color: "bg-pink-500" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Frontend simulation
    setTimeout(() => {
      alert("Task created successfully!");
      setLoading(false);
      router.push("/dashboard/tasks");
    }, 1500);
  };

  const handleAddSubtask = () => {
    const newSubtask = {
      id: subtasks.length + 1,
      text: "",
      completed: false,
    };
    setSubtasks([...subtasks, newSubtask]);
  };

  const handleSubtaskChange = (id, text) => {
    setSubtasks(subtasks.map((st) => (st.id === id ? { ...st, text } : st)));
  };

  const handleRemoveSubtask = (id) => {
    setSubtasks(subtasks.filter((st) => st.id !== id));
  };

  const handleToggleSubtask = (id) => {
    setSubtasks(
      subtasks.map((st) =>
        st.id === id ? { ...st, completed: !st.completed } : st
      )
    );
  };

  const handleAddAttachment = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const newAttachment = {
          id: attachments.length + 1,
          name: file.name,
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        };
        setAttachments([...attachments, newAttachment]);
      }
    };
    input.click();
  };

  const handleRemoveAttachment = (id) => {
    setAttachments(attachments.filter((att) => att.id !== id));
  };

  const handleAddLabel = (label) => {
    if (!task.labels.includes(label.name)) {
      setTask({ ...task, labels: [...task.labels, label.name] });
    }
  };

  const handleRemoveLabel = (labelName) => {
    setTask({ ...task, labels: task.labels.filter((l) => l !== labelName) });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "critical":
        return "bg-gradient-to-r from-red-500 to-pink-500";
      case "high":
        return "bg-gradient-to-r from-amber-500 to-orange-500";
      case "medium":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "low":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500";
    }
  };

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
          className="bg-gradient-to-b from-slate-50 to-white w-full max-w-5xl rounded-3xl shadow-2xl max-h-[95vh] overflow-hidden border border-slate-200 animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="sticky top-0 z-10 bg-gradient-to-r from-green-600 to-emerald-600 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Create New Task
                </h1>
                <p className="text-emerald-100 mt-1">
                  Define task details, assignees, and deadlines
                </p>
              </div>
              <button
                onClick={() => router.back()}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-4 mt-6">
              {["details", "subtasks", "attachments"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "bg-white text-emerald-600 shadow-lg"
                      : "text-emerald-100 hover:bg-white/10"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
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
            {activeTab === "details" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    <Target size={16} className="inline mr-2" />
                    Task Title *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter a clear and descriptive task title"
                    className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg font-medium"
                    value={task.title}
                    onChange={(e) =>
                      setTask({ ...task, title: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    <FileText size={16} className="inline mr-2" />
                    Description
                  </label>
                  <textarea
                    placeholder="Describe the task requirements, goals, and any specific instructions..."
                    className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    rows="4"
                    value={task.description}
                    onChange={(e) =>
                      setTask({ ...task, description: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <Hash size={16} className="inline mr-2" />
                      Project *
                    </label>
                    <select
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      value={task.project}
                      onChange={(e) =>
                        setTask({ ...task, project: e.target.value })
                      }
                      required
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
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <Flag size={16} className="inline mr-2" />
                      Priority
                    </label>
                    <div className="flex gap-2">
                      {[
                        {
                          id: "low",
                          label: "Low",
                          icon: <TrendingUp size={16} />,
                        },
                        {
                          id: "medium",
                          label: "Medium",
                          icon: <AlertCircle size={16} />,
                        },
                        { id: "high", label: "High", icon: <Zap size={16} /> },
                        {
                          id: "critical",
                          label: "Critical",
                          icon: <AlertCircle size={16} />,
                        },
                      ].map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setTask({ ...task, priority: p.id })}
                          className={`flex-1 py-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-medium ${
                            task.priority === p.id
                              ? `${getPriorityColor(
                                  p.id
                                )} text-white border-transparent shadow-md`
                              : "border-slate-200 text-slate-600 hover:border-emerald-200 hover:bg-emerald-50"
                          }`}
                        >
                          {p.icon}
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <Users size={16} className="inline mr-2" />
                      Assign To *
                    </label>
                    <select
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      value={task.assignee}
                      onChange={(e) =>
                        setTask({ ...task, assignee: e.target.value })
                      }
                      required
                    >
                      <option value="">Select Team Member</option>
                      {teamMembers.map((member) => (
                        <option key={member.id} value={member.name}>
                          {member.name} ({member.role})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <Users size={16} className="inline mr-2" />
                      Reported By
                    </label>
                    <input
                      type="text"
                      placeholder="Task creator/reporter"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      value={task.reporter}
                      onChange={(e) =>
                        setTask({ ...task, reporter: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <Calendar size={16} className="inline mr-2" />
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      value={task.startDate}
                      onChange={(e) =>
                        setTask({ ...task, startDate: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <CalendarClock size={16} className="inline mr-2" />
                      Due Date *
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      value={task.dueDate}
                      onChange={(e) =>
                        setTask({ ...task, dueDate: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      <Clock size={16} className="inline mr-2" />
                      Estimated Hours
                    </label>
                    <input
                      type="number"
                      placeholder="e.g., 8"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      value={task.estimatedHours}
                      onChange={(e) =>
                        setTask({ ...task, estimatedHours: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    <Tag size={16} className="inline mr-2" />
                    Labels
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {task.labels.map((label, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium flex items-center gap-1"
                      >
                        {label}
                        <button
                          type="button"
                          onClick={() => handleRemoveLabel(label)}
                          className="hover:text-emerald-900"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {labels.map((label) => (
                      <button
                        key={label.id}
                        type="button"
                        onClick={() => handleAddLabel(label)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 text-sm hover:border-emerald-200 hover:bg-emerald-50 flex items-center gap-2"
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${label.color}`}
                        ></span>
                        {label.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SUBTASKS */}
            {activeTab === "subtasks" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Breakdown into Subtasks
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Break complex tasks into smaller, manageable subtasks
                  </p>
                </div>

                <div className="space-y-3">
                  {subtasks.map((subtask, index) => (
                    <div
                      key={subtask.id}
                      className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl"
                    >
                      <button
                        type="button"
                        onClick={() => handleToggleSubtask(subtask.id)}
                        className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${
                          subtask.completed
                            ? "bg-emerald-500 border-emerald-500 text-white"
                            : "border-slate-300 hover:border-emerald-500"
                        }`}
                      >
                        {subtask.completed && <CheckCircle size={12} />}
                      </button>
                      <input
                        type="text"
                        value={subtask.text}
                        onChange={(e) =>
                          handleSubtaskChange(subtask.id, e.target.value)
                        }
                        placeholder={`Subtask ${index + 1}`}
                        className={`flex-1 border-none focus:outline-none ${
                          subtask.completed
                            ? "text-slate-500 line-through"
                            : "text-slate-800"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveSubtask(subtask.id)}
                        className="p-1 hover:bg-slate-100 rounded"
                      >
                        <Trash2 size={16} className="text-slate-400" />
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleAddSubtask}
                  className="w-full py-3 border-2 border-dashed border-emerald-200 text-emerald-600 rounded-xl hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus size={18} />
                  Add New Subtask
                </button>

                <div className="mt-6 p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Progress</span>
                    <span className="font-semibold text-slate-800">
                      {subtasks.filter((st) => st.completed).length} of{" "}
                      {subtasks.length} completed
                    </span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden mt-2">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-500"
                      style={{
                        width:
                          subtasks.length > 0
                            ? `${
                                (subtasks.filter((st) => st.completed).length /
                                  subtasks.length) *
                                100
                              }%`
                            : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {/* ATTACHMENTS & NOTES */}
            {activeTab === "attachments" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Attachments
                  </h3>
                  <div className="space-y-3">
                    {attachments.map((attachment) => (
                      <div
                        key={attachment.id}
                        className="flex items-center justify-between p-3 border border-slate-200 rounded-xl hover:border-emerald-200 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                            <Paperclip size={18} className="text-emerald-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-800">
                              {attachment.name}
                            </h4>
                            <p className="text-sm text-slate-500">
                              {attachment.size}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveAttachment(attachment.id)}
                          className="p-2 hover:bg-slate-100 rounded-lg"
                        >
                          <Trash2 size={16} className="text-slate-400" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleAddAttachment}
                    className="w-full mt-4 py-4 border-2 border-dashed border-slate-300 rounded-2xl hover:border-emerald-300 hover:bg-emerald-50 transition-colors flex flex-col items-center justify-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Paperclip size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">
                        Click to upload files
                      </p>
                      <p className="text-sm text-slate-500">or drag and drop</p>
                    </div>
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Additional Notes
                  </h3>
                  <textarea
                    placeholder="Add any additional notes, comments, or special instructions..."
                    className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    rows="4"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Notification Settings
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:border-emerald-200">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-emerald-600"
                      />
                      <div>
                        <p className="font-medium text-slate-800">
                          Email notifications
                        </p>
                        <p className="text-sm text-slate-500">
                          Send email updates to assignee
                        </p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:border-emerald-200">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-emerald-600"
                        defaultChecked
                      />
                      <div>
                        <p className="font-medium text-slate-800">
                          Slack notifications
                        </p>
                        <p className="text-sm text-slate-500">
                          Post updates to Slack channel
                        </p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:border-emerald-200">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-emerald-600"
                      />
                      <div>
                        <p className="font-medium text-slate-800">
                          Daily reminders
                        </p>
                        <p className="text-sm text-slate-500">
                          Send daily progress reminders
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* NAVIGATION BUTTONS */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-slate-200">
              <div>
                {activeTab !== "details" && (
                  <button
                    type="button"
                    onClick={() => {
                      const tabs = ["details", "subtasks", "attachments"];
                      const currentIndex = tabs.indexOf(activeTab);
                      if (currentIndex > 0)
                        setActiveTab(tabs[currentIndex - 1]);
                    }}
                    className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-medium"
                  >
                    ← Previous
                  </button>
                )}
              </div>

              <div className="flex gap-3">
                {activeTab !== "attachments" ? (
                  <button
                    type="button"
                    onClick={() => {
                      const tabs = ["details", "subtasks", "attachments"];
                      const currentIndex = tabs.indexOf(activeTab);
                      if (currentIndex < tabs.length - 1)
                        setActiveTab(tabs[currentIndex + 1]);
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl hover:from-emerald-600 hover:to-green-600 transition-all duration-300 font-medium"
                  >
                    Continue →
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl hover:from-emerald-600 hover:to-green-600 transition-all duration-300 font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-emerald-500/25"
                  >
                    {loading ? (
                      <>
                        <Clock size={18} className="animate-spin" />
                        Creating Task...
                      </>
                    ) : (
                      <>
                        <CheckCircle size={18} />
                        Create Task
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
