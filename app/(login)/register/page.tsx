"use client";
import { useState } from "react";
import Link from 'next/link';
import { User, Mail, Lock, Briefcase, ChevronDown } from 'lucide-react';

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });

    const data = await res.json();
    setIsLoading(false);

    if (res.ok) {
      setMessage(data.message || "Registration successful! You can now log in.");
      setName("");
      setEmail("");
      setPassword("");
      setRole("Student");
    } else {
      setError(data.error || "Registration failed. Please try again.");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0A101A] p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-[#E5E7EB] mb-6">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 text-white bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-[#6dbb45] focus:border-[#6dbb45] outline-none transition-all duration-300"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                id="email"
                type="email"
                placeholder="Email Address"
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
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 text-white bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-[#6dbb45] focus:border-[#6dbb45] outline-none transition-all duration-300"
              />
            </div>
            
            {/* Role Selector */}
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-white bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-[#6dbb45] focus:border-[#6dbb45] outline-none transition-all duration-300 appearance-none"
              >
                <option value="Student">Student</option>
                <option value="Organizer">Event Organizer</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-md text-white font-semibold bg-gradient-to-r from-[#005a9e] to-[#6dbb45] hover:from-[#6dbb45] hover:to-[#4b8b24] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#6dbb45]/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>

          {/* Success Message */}
          {message && (
            <div className="mt-4 text-center text-sm text-green-300 bg-green-900/50 border border-green-500/50 rounded-md p-3">
              {message}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mt-4 text-center text-sm text-red-300 bg-red-900/50 border border-red-500/50 rounded-md p-3">
              {error}
            </div>
          )}

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-[#6dbb45] hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}