"use client";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

const employeePage = () => {
  const { logout } = useAuth();
  return (
    <ProtectedRoute allowedRoles={["employee","admin"]}>
      <h1>Employee Dashboard</h1>
      <button
        className="border-2 px-4 py-2 bg-red-600 text-white rounded"
        onClick={logout}
      >
        Logout
      </button>
    </ProtectedRoute>
  );
};

export default employeePage;
