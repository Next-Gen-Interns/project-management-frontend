"use client";
import { useState } from "react";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Award,
  Edit2,
  Camera,
  Download,
  Share2,
  FileText,
  Target,
  Star,
  Users,
  Settings,
  Bell,
  Clock,
  CheckCircle,
  XCircle,
  Activity,
  TrendingUp,
  BookOpen,
  GraduationCap,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Heart,
  MessageSquare,
  Send,
  Plus, // ✅ ADD
  Eye, // ✅ ADD
} from "lucide-react";

export default function EmployeeProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [showEditModal, setShowEditModal] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Olivia Williams",
    role: "Senior Frontend Developer",
    department: "Development",
    email: "olivia.williams@company.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "August 24, 2022",
    employeeId: "EMP-2022-048",
    status: "Active",
    manager: "Michael Chen",
    team: "UI/UX Team",
    bio: "Passionate frontend developer with 5+ years of experience creating beautiful and functional user interfaces. Specialized in React, Next.js, and modern web technologies.",
    avatar: "/api/placeholder/150/150",
  });

  const skills = [
    { name: "React", level: 95, color: "from-blue-500 to-cyan-400" },
    { name: "Next.js", level: 90, color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-800" },
    { name: "Tailwind CSS", level: 95, color: "from-teal-500 to-emerald-500" },
    { name: "JavaScript", level: 98, color: "from-yellow-500 to-amber-500" },
    { name: "UI/UX Design", level: 80, color: "from-purple-500 to-pink-500" },
  ];

  const projects = [
    {
      name: "CRM Revamp",
      role: "Lead Developer",
      status: "Completed",
      progress: 100,
    },
    {
      name: "Mobile App",
      role: "UI Developer",
      status: "In Progress",
      progress: 75,
    },
    {
      name: "HR Portal",
      role: "Frontend Lead",
      status: "In Progress",
      progress: 60,
    },
    {
      name: "Design System",
      role: "Contributor",
      status: "Completed",
      progress: 100,
    },
  ];

  const achievements = [
    {
      title: "Employee of the Month",
      date: "March 2024",
      icon: <Award className="text-amber-500" />,
    },
    {
      title: "Best UI Design",
      date: "2023 Q4",
      icon: <Star className="text-blue-500" />,
    },
    {
      title: "Team Player Award",
      date: "2023 Q2",
      icon: <Users className="text-green-500" />,
    },
  ];

  const recentActivity = [
    { action: "Completed CRM project", time: "2 hours ago", type: "success" },
    { action: "Submitted weekly report", time: "1 day ago", type: "info" },
    { action: "Code review completed", time: "2 days ago", type: "success" },
    { action: "Team meeting attended", time: "3 days ago", type: "info" },
  ];

  const education = [
    {
      degree: "MSc Computer Science",
      institution: "Stanford University",
      year: "2018-2020",
    },
    {
      degree: "BSc Software Engineering",
      institution: "UC Berkeley",
      year: "2014-2018",
    },
  ];

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setShowEditModal(false);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Employee Profile
          </h1>
          <p className="text-slate-600 mt-2">
            Manage and view your professional profile
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Share2 size={16} />
            Share Profile
          </button>
          <button className="px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Download size={16} />
            Export CV
          </button>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25"
          >
            <Edit2 size={16} />
            {isEditing ? "Cancel Edit" : "Edit Profile"}
          </button>
        </div>
      </div>

      {/* Main Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
            {/* Profile Header */}
            <div className="text-center mb-6">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold mx-auto">
                  {profileData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <button className="absolute bottom-2 right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors">
                  <Camera size={18} className="text-slate-700" />
                </button>
              </div>

              <h2 className="text-2xl font-bold text-slate-800">
                {profileData.name}
              </h2>
              <p className="text-slate-600 mt-1">{profileData.role}</p>
              <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium">
                <CheckCircle size={14} />
                {profileData.status}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Mail size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium text-slate-800">
                    {profileData.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Phone size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium text-slate-800">
                    {profileData.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <MapPin size={18} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium text-slate-800">
                    {profileData.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Calendar size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Join Date</p>
                  <p className="font-medium text-slate-800">
                    {profileData.joinDate}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-6">
              <h3 className="font-semibold text-slate-800 mb-3">
                Social Links
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  <Linkedin size={18} className="text-blue-700" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  <Github size={18} className="text-gray-800" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  <Twitter size={18} className="text-blue-400" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  <Globe size={18} className="text-green-600" />
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
              <h3 className="font-semibold text-slate-800 mb-3">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-800">18</p>
                  <p className="text-xs text-slate-600">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-800">245</p>
                  <p className="text-xs text-slate-600">Tasks</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-800">95%</p>
                  <p className="text-xs text-slate-600">Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-800">2.5y</p>
                  <p className="text-xs text-slate-600">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-1 mb-6">
            <div className="flex overflow-x-auto">
              {["overview", "projects", "skills", "activity", "documents"].map(
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

          {/* Tab Content */}
          <div className="space-y-6">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <>
                {/* Bio */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    About Me
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {profileData.bio}
                  </p>

                  {isEditing && (
                    <div className="mt-4">
                      <textarea
                        className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                        defaultValue={profileData.bio}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            bio: e.target.value,
                          })
                        }
                      />
                    </div>
                  )}
                </div>

                {/* Skills Preview */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-slate-800">
                      Top Skills
                    </h3>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View All →
                    </button>
                  </div>

                  <div className="space-y-4">
                    {skills.slice(0, 4).map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-slate-700">
                            {skill.name}
                          </span>
                          <span className="text-slate-600">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Current Projects */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-6">
                    Current Projects
                  </h3>

                  <div className="space-y-4">
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className="p-4 border border-slate-200 rounded-xl hover:border-blue-200 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-slate-800">
                              {project.name}
                            </h4>
                            <p className="text-sm text-slate-500">
                              {project.role}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              project.status === "Completed"
                                ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700"
                                : "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700"
                            }`}
                          >
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
                              className={`h-full rounded-full ${
                                project.status === "Completed"
                                  ? "bg-gradient-to-r from-green-500 to-emerald-400"
                                  : "bg-gradient-to-r from-blue-500 to-cyan-400"
                              }`}
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Projects Tab */}
            {activeTab === "projects" && (
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-800">
                    All Projects
                  </h3>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl text-sm hover:from-blue-600 hover:to-indigo-600">
                    <Plus className="inline mr-2" size={16} />
                    New Project
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 text-slate-600 font-medium">
                          Project
                        </th>
                        <th className="text-left py-3 text-slate-600 font-medium">
                          Role
                        </th>
                        <th className="text-left py-3 text-slate-600 font-medium">
                          Status
                        </th>
                        <th className="text-left py-3 text-slate-600 font-medium">
                          Progress
                        </th>
                        <th className="text-left py-3 text-slate-600 font-medium">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects.map((project, index) => (
                        <tr
                          key={index}
                          className="border-b border-slate-100 hover:bg-slate-50"
                        >
                          <td className="py-4">
                            <div className="font-medium text-slate-800">
                              {project.name}
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="text-slate-600">{project.role}</div>
                          </td>
                          <td className="py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                project.status === "Completed"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {project.status}
                            </span>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${
                                    project.status === "Completed"
                                      ? "bg-green-500"
                                      : "bg-blue-500"
                                  }`}
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-slate-600">
                                {project.progress}%
                              </span>
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex gap-2">
                              <button className="p-2 hover:bg-slate-100 rounded-lg">
                                <Eye size={16} className="text-slate-600" />
                              </button>
                              <button className="p-2 hover:bg-slate-100 rounded-lg">
                                <Edit2 size={16} className="text-slate-600" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === "skills" && (
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-800">
                    Skills & Expertise
                  </h3>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl text-sm hover:from-blue-600 hover:to-indigo-600">
                    Add Skill
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="p-4 border border-slate-200 rounded-xl hover:border-blue-200 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-slate-800">
                          {skill.name}
                        </span>
                        <span className="text-slate-600">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Skill Form (Visible when editing) */}
                {isEditing && (
                  <div className="mt-6 p-4 border border-dashed border-slate-300 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-3">
                      Add New Skill
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Skill name"
                        className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="range"
                        min="0"
                        max="100"
                        className="w-full"
                      />
                      <button className="md:col-span-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600">
                        Save Skill
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Activity Tab */}
            {activeTab === "activity" && (
              <div className="space-y-6">
                {/* Achievements */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-6">
                    Achievements
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="p-4 border border-slate-200 rounded-xl hover:border-blue-200 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                            {achievement.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800">
                              {achievement.title}
                            </h4>
                            <p className="text-sm text-slate-500">
                              {achievement.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-6">
                    Recent Activity
                  </h3>

                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors"
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            activity.type === "success"
                              ? "bg-green-100 text-green-600"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {activity.type === "success" ? (
                            <CheckCircle size={16} />
                          ) : (
                            <Activity size={16} />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-800">{activity.action}</p>
                          <p className="text-sm text-slate-500">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-6">
                    Education
                  </h3>

                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 border border-slate-200 rounded-xl"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
                          <GraduationCap size={20} className="text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800">
                            {edu.degree}
                          </h4>
                          <p className="text-slate-600">{edu.institution}</p>
                          <p className="text-sm text-slate-500">{edu.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Documents Tab */}
            {activeTab === "documents" && (
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-800">
                    Documents
                  </h3>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl text-sm hover:from-blue-600 hover:to-indigo-600">
                    Upload Document
                  </button>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "Resume.pdf",
                      size: "2.4 MB",
                      date: "Mar 15, 2024",
                    },
                    {
                      name: "Employment_Contract.pdf",
                      size: "1.8 MB",
                      date: "Aug 24, 2022",
                    },
                    {
                      name: "Performance_Review_2023.pdf",
                      size: "3.2 MB",
                      date: "Jan 10, 2024",
                    },
                    {
                      name: "Certifications.zip",
                      size: "4.7 MB",
                      date: "Dec 05, 2023",
                    },
                  ].map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-blue-200 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                          <FileText size={20} className="text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800">
                            {doc.name}
                          </h4>
                          <p className="text-sm text-slate-500">
                            {doc.size} • {doc.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-slate-100 rounded-lg">
                          <Download size={16} className="text-slate-600" />
                        </button>
                        <button className="p-2 hover:bg-slate-100 rounded-lg">
                          <Share2 size={16} className="text-slate-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">
                  Edit Profile
                </h3>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleEditSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue={profileData.name}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Job Role
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue={profileData.role}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue={profileData.email}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue={profileData.phone}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue={profileData.bio}
                    ></textarea>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3.5 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEditModal(false)}
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
