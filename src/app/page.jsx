"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { registerUser } from "@/api/auth_apis";
import { validateRegister } from "@/utils/validators.js";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateRegister(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const data = await registerUser(formData);
      console.log("Register Success:", data);
      router.push("/login");
    } catch (error) {
      setError(error.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 border-2">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-slate-800">
          Sign Up
        </h2>

        <p className="text-center text-sm text-slate-500 mt-1">
          Create your account to get started
        </p>
        {error && (
          <p className="mt-4 text-sm text-red-600 text-center animate-pulse">{error}</p>
        )}
        <div className="my-6 h-px bg-slate-200" />

        <form className="mt-6 space-y-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-slate-700 cursor-pointer"
            >
              {showPassword ? <EyeOff size={28} /> : <Eye size={28} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-3 rounded-lg font-medium hover:bg-slate-900 transition"
          >
            Sign Up
          </button>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400">OR</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <div className="text-center text-sm text-slate-500 mt-4">
            Already have an account?
            <Link href="/login">
              <p className="text-blue-600 hover:underline"> Log In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
