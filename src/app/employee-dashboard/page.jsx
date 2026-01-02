"use client";

import {
  Clock,
  Calendar,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  FileText,
  Edit2,
  CheckSquare,
  Plus,
  X,
  Bell,
  LogOut,
  Users,
  BarChart,
  Target,
  Clock3,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function EmployeeDashboardPage() {
  const [currentTime, setCurrentTime] = useState("");
  const [isCheckedIn, setIsCheckedIn] = useState(true);
  const [checkInTime, setCheckInTime] = useState("09:42 AM");
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, label: "Design login screen", priority: "High", completed: false },
    { id: 2, label: "Fix dashboard bugs", priority: "Medium", completed: true },
    {
      id: 3,
      label: "Daily standup meeting",
      priority: "Low",
      completed: false,
    },
    { id: 4, label: "API integration", priority: "High", completed: false },
    { id: 5, label: "Code review", priority: "Medium", completed: true },
  ]);
  const [stickyNote, setStickyNote] = useState("Meeting with team at 3 PM");
  const [selectedDate, setSelectedDate] = useState(15);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      name: "CRM Revamp",
      status: "In Progress",
      progress: 65,
      color: "bg-gradient-to-r from-blue-500 to-cyan-400",
      team: 4,
    },
    {
      name: "HR Portal",
      status: "In Progress",
      progress: 40,
      color: "bg-gradient-to-r from-purple-500 to-pink-400",
      team: 3,
    },
    {
      name: "Mobile App",
      status: "Review",
      progress: 85,
      color: "bg-gradient-to-r from-green-500 to-emerald-400",
      team: 5,
    },
  ];

  const announcements = [
    { id: 1, text: "📢 Townhall meeting this Friday", time: "2 hours ago" },
    { id: 2, text: "📢 Leave policy updated", time: "1 day ago" },
    { id: 3, text: "📢 Sprint deadline extended", time: "2 days ago" },
  ];

  const stats = [
    {
      title: "Active Projects",
      value: "3",
      icon: <Target size={20} />,
      color: "from-blue-500 to-cyan-500",
      change: "+1",
    },
    {
      title: "Total Tasks",
      value: "18",
      icon: <CheckSquare size={20} />,
      color: "from-purple-500 to-pink-500",
      change: "+3",
    },
    {
      title: "Pending",
      value: "5",
      icon: <AlertCircle size={20} />,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Completed",
      value: "12",
      icon: <CheckCircle size={20} />,
      color: "from-green-500 to-emerald-500",
      change: "+2",
    },
    {
      title: "Hours / Week",
      value: "32h",
      icon: <Clock3 size={20} />,
      color: "from-indigo-500 to-violet-500",
      change: "+4h",
    },
  ];

  const taskBreakdown = [
    {
      title: "To Do",
      value: "6",
      color: "bg-gradient-to-r from-gray-300 to-gray-400",
    },
    {
      title: "In Progress",
      value: "8",
      color: "bg-gradient-to-r from-blue-400 to-blue-500",
    },
    {
      title: "Review",
      value: "2",
      color: "bg-gradient-to-r from-amber-400 to-amber-500",
    },
    {
      title: "Done",
      value: "12",
      color: "bg-gradient-to-r from-green-400 to-green-500",
    },
  ];

  const handleCheckInOut = () => {
    if (isCheckedIn) {
      setIsCheckedIn(false);
      alert(`Checked out at ${currentTime}`);
    } else {
      setIsCheckedIn(true);
      setCheckInTime(currentTime);
      alert(`Checked in at ${currentTime}`);
    }
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: tasks.length + 1,
        label: newTask,
        priority: "Medium",
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  const handleTaskComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id, e) => {
    e.stopPropagation();
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handlePriorityChange = (id, newPriority) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, priority: newPriority } : task
      )
    );
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-gradient-to-r from-red-500 to-pink-500";
      case "Medium":
        return "bg-gradient-to-r from-amber-500 to-yellow-500";
      case "Low":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Employee Dashboard
          </h1>
          <p className="text-slate-600 mt-2 flex items-center gap-2">
            <Clock size={16} />
            Welcome back! It's {currentTime}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell
              size={20}
              className="text-slate-600 cursor-pointer hover:text-blue-600"
            />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800">John Doe</p>
              <p className="text-xs text-slate-500">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-2">{stat.title}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-slate-800">
                    {stat.value}
                  </p>
                  {stat.change && (
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {stat.change}
                    </span>
                  )}
                </div>
              </div>
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-md`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Status & Calendar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Status Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                Today Status
              </h3>
              <p className="text-slate-600 flex items-center gap-2 mt-1">
                <Clock size={14} />
                {isCheckedIn ? (
                  <>
                    Checked in at{" "}
                    <span className="text-blue-600 font-semibold">
                      {checkInTime}
                    </span>
                  </>
                ) : (
                  "Currently checked out"
                )}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">Current Time</p>
              <p className="text-xl font-bold text-slate-800">{currentTime}</p>
            </div>
          </div>

          <button
            onClick={handleCheckInOut}
            className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg ${
              isCheckedIn
                ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                : "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
            }`}
          >
            {isCheckedIn ? (
              <span className="flex items-center justify-center gap-2">
                <LogOut size={16} />
                Check Out Now
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <CheckCircle size={16} />
                Check In Now
              </span>
            )}
          </button>

          {isCheckedIn && (
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Hours worked today:</span>
                <span className="font-semibold text-slate-800">5h 18m</span>
              </div>
              <div className="mt-2 h-2 bg-blue-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Calendar</h3>
            <span className="text-sm text-slate-500">April 2024</span>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-sm mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="py-2 text-slate-500 font-medium">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 30 }, (_, i) => {
              const day = i + 1;
              const isToday = day === selectedDate;
              const hasEvent = [5, 12, 19, 26].includes(day);

              return (
                <div
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={`
                    aspect-square flex items-center justify-center text-sm cursor-pointer
                    transition-all duration-200 rounded-lg relative
                    ${
                      isToday
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg transform scale-110"
                        : "hover:bg-slate-100"
                    }
                  `}
                >
                  {day}
                  {hasEvent && (
                    <div
                      className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                        isToday ? "bg-white" : "bg-blue-500"
                      }`}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>

          {selectedDate && (
            <div className="mt-4 p-3 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600">
                Selected:{" "}
                <span className="font-semibold text-slate-800">
                  April {selectedDate}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Active Projects */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-800">
            Active Projects
          </h3>
          <span className="text-sm text-blue-600 cursor-pointer hover:text-blue-700">
            View All →
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setActiveProject(index)}
              className={`
                border rounded-xl p-4 cursor-pointer transition-all duration-300
                ${
                  activeProject === index
                    ? "border-blue-300 bg-blue-50 shadow-md transform scale-[1.02]"
                    : "border-slate-200 hover:border-blue-200 hover:bg-slate-50"
                }
              `}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg ${project.color} flex items-center justify-center text-white`}
                  >
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {project.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Users size={12} className="text-slate-400" />
                      <span className="text-xs text-slate-500">
                        {project.team} members
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-3 py-1 rounded-full">
                  {project.status}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Progress</span>
                  <span className="font-semibold text-slate-800">
                    {project.progress}%
                  </span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${project.color} rounded-full transition-all duration-500`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task Breakdown & Today's Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Task Breakdown */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">
            Task Breakdown
          </h3>

          <div className="space-y-4">
            {taskBreakdown.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-700 font-medium">
                    {item.title}
                  </span>
                  <span className="font-bold text-slate-800">{item.value}</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-700`}
                    style={{ width: `${(parseInt(item.value) / 28) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Total Tasks</span>
              <span className="text-xl font-bold text-slate-800">28</span>
            </div>
          </div>
        </div>

        {/* Today's Tasks */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-800">
              Today's Tasks
            </h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
                  placeholder="Add new task..."
                  className="pl-4 pr-10 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleAddTask}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-blue-500 text-white rounded flex items-center justify-center hover:bg-blue-600"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => handleTaskComplete(task.id)}
                className={`
                  flex items-center justify-between p-3 rounded-xl cursor-pointer
                  transition-all duration-200 border
                  ${
                    task.completed
                      ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200"
                      : "bg-white border-slate-200 hover:border-blue-200 hover:bg-blue-50"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded flex items-center justify-center ${
                      task.completed
                        ? "bg-gradient-to-r from-green-500 to-emerald-400 text-white"
                        : "border border-slate-300"
                    }`}
                  >
                    {task.completed && <CheckSquare size={14} />}
                  </div>
                  <div>
                    <span
                      className={`font-medium ${
                        task.completed
                          ? "text-slate-500 line-through"
                          : "text-slate-800"
                      }`}
                    >
                      {task.label}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const priorities = ["High", "Medium", "Low"];
                          const currentIndex = priorities.indexOf(
                            task.priority
                          );
                          const nextPriority =
                            priorities[(currentIndex + 1) % priorities.length];
                          handlePriorityChange(task.id, nextPriority);
                        }}
                        className={`text-xs font-medium px-2 py-1 rounded-full ${getPriorityColor(
                          task.priority
                        )} text-white`}
                      >
                        {task.priority}
                      </button>
                      <span className="text-xs text-slate-400">Today</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={(e) => handleDeleteTask(task.id, e)}
                  className="p-1 hover:bg-slate-100 rounded"
                >
                  <X size={16} className="text-slate-400" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leave Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">
            Leave Summary
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
              <span className="text-slate-700">Total Leave</span>
              <span className="text-xl font-bold text-slate-800">18</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
              <span className="text-slate-700">Used</span>
              <span className="text-xl font-bold text-slate-800">6</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
              <span className="text-slate-700">Remaining</span>
              <span className="text-xl font-bold text-green-600">12</span>
            </div>
          </div>

          <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
            Apply for Leave
          </button>
        </div>

        {/* Sticky Notes */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-amber-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-amber-800">
              Sticky Notes
            </h3>
            <Edit2
              size={18}
              className="text-amber-600 cursor-pointer hover:text-amber-700"
            />
          </div>

          <textarea
            value={stickyNote}
            onChange={(e) => setStickyNote(e.target.value)}
            placeholder="Write your notes here..."
            className="w-full h-48 bg-transparent border-none focus:outline-none text-amber-800 placeholder-amber-400 resize-none"
          />

          <div className="text-right">
            <span className="text-xs text-amber-600">
              {stickyNote.length}/500 characters
            </span>
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-800">
              Announcements
            </h3>
            <Bell size={18} className="text-slate-400" />
          </div>

          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="p-3 border border-slate-200 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer"
              >
                <p className="text-sm text-slate-800">{announcement.text}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {announcement.time}
                </p>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-2.5 text-blue-600 hover:text-blue-700 font-medium text-sm">
            View All Announcements →
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-slate-500">
        <p>Last updated: {currentTime} • v2.4.1</p>
      </div>
    </div>
  );
}
