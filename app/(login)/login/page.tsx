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
    <main className="min-h-screen flex items-center justify-center bg-[#0A101A] p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-[#E5E7EB] mb-6">
            Login to EventHub
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 text-white bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-[#6dbb45] focus:border-[#6dbb45] outline-none transition-all duration-300"
              />
            </div>
            
            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 text-white bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-[#6dbb45] focus:border-[#6dbb45] outline-none transition-all duration-300"
              />
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-3 rounded-md text-white font-semibold bg-gradient-to-r from-[#005a9e] to-[#6dbb45] hover:from-[#6dbb45] hover:to-[#4b8b24] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#6dbb45]/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Login
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <div className="mt-4 text-center text-sm text-red-400 bg-red-900/50 border border-red-500/50 rounded-md p-2">
              {error}
            </div>
          )}

          {/* Registration Link */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold text-[#6dbb45] hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}