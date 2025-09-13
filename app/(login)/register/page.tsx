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
    <main className="min-h-screen flex items-center justify-center bg-[#F5F5F5] p-4">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-[#2D3748] mb-8">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all duration-300 placeholder-gray-500"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                placeholder="Email Address"
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
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all duration-300 placeholder-gray-500"
              />
            </div>
            
            {/* Role Selector */}
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all duration-300 appearance-none"
              >
                <option value="Student">Student</option>
                <option value="Organizer">Event Organizer</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-lg text-white font-bold bg-green-700 hover:bg-green-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>

          {/* Success Message */}
          {message && (
            <div className="mt-4 text-center text-sm text-green-800 bg-green-100 border border-green-300 rounded-lg p-3">
              {message}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mt-4 text-center text-sm text-red-700 bg-red-100 border border-red-300 rounded-lg p-3">
              {error}
            </div>
          )}

          {/* Login Link */}
          <p className="mt-8 text-center text-sm text-[#718096]">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-green-700 hover:text-green-800 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}