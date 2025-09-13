"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock } from "lucide-react"; // For input icons

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // --- Your existing fetch logic remains the same ---
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      // Role-based redirection
      switch (data.role) {
        case "Student":
          router.push("/dashboard/student");
          break;
        case "Organizer":
          router.push("/dashboard/organizer");
          break;
        case "Admin":
          router.push("/dashboard/admin");
          break;
        case "Dean":
        case "DVC":
        case "VC":
        case "University Management":
          router.push("/dashboard/management");
          break;
        default:
          router.push("/home");
      }
    } else {
      const data = await res.json();
      setError(data.error || "Login failed. Please check your credentials.");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5F5F5] p-4">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-[#2D3748] mb-8">
            Login to EventGo
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all duration-300 placeholder-gray-500"
              />
            </div>
            
            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all duration-300 placeholder-gray-500"
              />
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-3 rounded-lg text-white font-bold bg-green-700 hover:bg-green-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Login
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <div className="mt-4 text-center text-sm text-red-700 bg-red-100 border border-red-300 rounded-lg p-3">
              {error}
            </div>
          )}

          {/* Registration Link */}
          <p className="mt-8 text-center text-sm text-[#718096]">
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold text-green-700 hover:text-green-800 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}