"use client";

import { useState } from "react";
import {
  Users,
  ClipboardList,
  Clock,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Target,
  Award,
  Plus,
  ChevronRight,
  AlertCircle,
  BarChart3,
  ArrowUpRight,
  UserPlus,
  Eye,
  ThumbsUp,
  MoreVertical,
  MessageSquare,
  Bell,
  Activity,
} from "lucide-react";

export default function TLDashboard() {
  const [activeTab, setActiveTab] = useState("today");

  const stats = [
    {
      title: "Team Members",
      value: "8",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      trend: "All active",
      change: "+2 this month",
    },
    {
      title: "Total Tasks",
      value: "42",
      icon: <ClipboardList className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      trend: "On track",
      change: "+8 assigned",
    },
    {
      title: "In Progress",
      value: "18",
      icon: <Clock className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      trend: "Active",
      change: "Due this week",
    },
    {
      title: "Completed",
      value: "24",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      trend: "57% done",
      change: "+12 this week",
    },
  ];

  const todayTasks = [
    {
      id: 1,
      label: "Design login screen UX/UI",
      priority: "high",
      time: "9:00 AM",
      progress: 85,
      assignee: "You",
    },
    {
      id: 2,
      label: "Fix dashboard responsive bugs",
      priority: "medium",
      time: "11:00 AM",
      progress: 60,
      assignee: "Alex",
    },
    {
      id: 3,
      label: "Daily standup meeting",
      priority: "low",
      time: "10:00 AM",
      progress: 100,
      assignee: "Team",
    },
    {
      id: 4,
      label: "Client demo preparation",
      priority: "high",
      time: "3:00 PM",
      progress: 45,
      assignee: "You",
    },
    {
      id: 5,
      label: "Code review for PR #124",
      priority: "medium",
      time: "2:00 PM",
      progress: 30,
      assignee: "Sam",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Frontend Dev",
      tasks: 8,
      completed: 6,
      avatarColor: "bg-blue-500",
    },
    {
      id: 2,
      name: "Sam Wilson",
      role: "Backend Dev",
      tasks: 6,
      completed: 4,
      avatarColor: "bg-green-500",
    },
    {
      id: 3,
      name: "Taylor Kim",
      role: "UI Designer",
      tasks: 5,
      completed: 5,
      avatarColor: "bg-purple-500",
    },
    {
      id: 4,
      name: "Jordan Lee",
      role: "QA Engineer",
      tasks: 7,
      completed: 3,
      avatarColor: "bg-orange-500",
    },
  ];

  const quickActions = [
    {
      label: "Assign New Task",
      icon: <Plus className="w-5 h-5" />,
      color: "bg-blue-500",
      description: "Create and assign tasks",
    },
    {
      label: "View Team Progress",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "bg-green-500",
      description: "Track team performance",
    },
    {
      label: "Approve Tasks",
      icon: <ThumbsUp className="w-5 h-5" />,
      color: "bg-purple-500",
      description: "Review submissions",
    },
    {
      label: "Schedule Meeting",
      icon: <Calendar className="w-5 h-5" />,
      color: "bg-orange-500",
      description: "Plan team syncs",
    },
  ];

  const getPriorityColor = (priority) => {
    const colors = {
      high: "bg-red-100 text-red-700 border-red-200",
      medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
      low: "bg-green-100 text-green-700 border-green-200",
    };
    return colors[priority] || colors.medium;
  };

  const getPriorityIcon = (priority) => {
    const icons = {
      high: <AlertCircle className="w-4 h-4" />,
      medium: <Clock className="w-4 h-4" />,
      low: <CheckCircle2 className="w-4 h-4" />,
    };
    return icons[priority] || <Clock className="w-4 h-4" />;
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Team Lead Dashboard
          </h1>
          <p className="text-gray-600">
            Welcome back! Here's your team overview for today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
            <Calendar className="w-5 h-5" />
            <span>Today</span>
          </button>
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <MessageSquare className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                {stat.icon}
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.trend.includes("All")
                    ? "bg-green-100 text-green-700"
                    : stat.trend.includes("On track")
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {stat.trend}
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {stat.value}
            </p>
            <p className="text-gray-600 text-sm mb-2">{stat.title}</p>
            <p className="text-xs text-gray-500">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Tasks */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tasks Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Today's Tasks
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("today")}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                    activeTab === "today"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  Today
                </button>
                <button
                  onClick={() => setActiveTab("upcoming")}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                    activeTab === "upcoming"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  Upcoming
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {todayTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        getPriorityColor(task.priority).split(" ")[0]
                      }`}
                    >
                      {getPriorityIcon(task.priority)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{task.label}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-gray-500">
                          {task.time}
                        </span>
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                          Assignee: {task.assignee}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-24">
                      <div className="flex justify-between text-xs mb-1">
                        <span>{task.progress}%</span>
                        <span>{task.priority}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            task.priority === "high"
                              ? "bg-red-500"
                              : task.priority === "medium"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <MoreVertical className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Plus className="w-5 h-5" />
              <span className="font-medium">Add New Task</span>
            </button>
          </div>

          {/* Team Performance */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Team Performance</h3>
                <p className="text-blue-200">Weekly progress overview</p>
              </div>
              <Activity className="w-6 h-6" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${member.avatarColor}`}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <p className="font-medium text-sm">{member.name}</p>
                  <p className="text-blue-200 text-xs mb-2">{member.role}</p>
                  <div className="text-xs">
                    <p>
                      {member.completed}/{member.tasks} tasks
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Quick Actions
              </h3>
            </div>

            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <div className={`p-2 rounded-lg ${action.color} text-white`}>
                    {action.icon}
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-medium text-gray-900">{action.label}</p>
                    <p className="text-xs text-gray-500">
                      {action.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              ))}
            </div>
          </div>

          {/* Recent Updates */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Updates
              </h3>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                View all
              </button>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: 1,
                  text: "Alex completed login screen design",
                  time: "10 min ago",
                  type: "completion",
                },
                {
                  id: 2,
                  text: "New bug reported in dashboard",
                  time: "30 min ago",
                  type: "bug",
                },
                {
                  id: 3,
                  text: "Team meeting scheduled for 3 PM",
                  time: "1 hour ago",
                  type: "meeting",
                },
                {
                  id: 4,
                  text: "Client feedback received",
                  time: "2 hours ago",
                  type: "feedback",
                },
              ].map((update) => (
                <div
                  key={update.id}
                  className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg"
                >
                  <div
                    className={`p-2 rounded-lg ${
                      update.type === "completion"
                        ? "bg-green-50 text-green-600"
                        : update.type === "bug"
                        ? "bg-red-50 text-red-600"
                        : update.type === "meeting"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-purple-50 text-purple-600"
                    }`}
                  >
                    {update.type === "completion" ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : update.type === "bug" ? (
                      <AlertCircle className="w-4 h-4" />
                    ) : update.type === "meeting" ? (
                      <Calendar className="w-4 h-4" />
                    ) : (
                      <MessageSquare className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {update.text}
                    </p>
                    <p className="text-xs text-gray-500">{update.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Progress */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
            <div className="text-center mb-4">
              <p className="text-3xl font-bold">78%</p>
              <p className="text-purple-200">Team Progress This Week</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Completion</span>
                <span>78%</span>
              </div>
              <div className="h-2 bg-purple-400 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
              <div className="flex justify-between text-sm mt-3">
                <span>On Time</span>
                <span>92%</span>
              </div>
              <div className="h-2 bg-purple-400 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: "92%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
