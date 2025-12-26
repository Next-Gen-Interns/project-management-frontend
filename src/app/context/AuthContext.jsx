"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { fetchUser, loginUser, logoutUser } from "@/api/auth_apis";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchUser();
        setUser(data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  const login = async (userData) => {
    try {
      const data = await loginUser(userData);
      if (!data.user) throw new Error("Login failed: no user returned");
      setUser(data.user);
      const role = data.user.role.toLowerCase();

      if (role === "employee") {
        router.push("/employee-dashboard");
      } else if (role === "hr") {
        router.push("/hr-dashboard");
      } else if (role === "tl") {
        router.push("/tl-dashboard");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const data = await logoutUser();
      console.log("Logout successful:", data);
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
