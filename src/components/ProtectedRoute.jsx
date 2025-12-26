"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Only redirect when loading is finished
  useEffect(() => {
    if (!loading) {
      if (!user) router.push("/login");
      else if (allowedRoles && !allowedRoles.includes(user.role))
        router.push("/unauthorized");
    }
  }, [user, loading]);

  // Block render until auth check is finished
  if (loading) return <p>Loading...</p>;
  if (!user) return null;
  if (allowedRoles && !allowedRoles.includes(user.role)) return null;

  return children;
};

export default ProtectedRoute;
