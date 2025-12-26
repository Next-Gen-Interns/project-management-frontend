"use client";
import React from "react";
import { useAuth } from "../context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

const page = () => {
  const { logout } = useAuth();
  return (
    <ProtectedRoute allowedRoles={["hr","admin"]}>
      <h1>hr Dashboard</h1>
      <button
        className="border-2 px-4 py-2 bg-red-600 text-white rounded"
        onClick={logout}
      >
        Logout
      </button>
    </ProtectedRoute>
  );
};

export default page;
