"use client";
import React, { useState } from "react";
import { Mail, Lock } from "lucide-react"; // For input icons

// --- MOCK LINK COMPONENT ---
// In a real Next.js app, you would use `import Link from "next/link";`
// This is a placeholder to make the component runnable in this environment.
const Link = ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a href={href} {...props}>{children}</a>
);

// --- MOCK ROUTER HOOK ---
// In a real Next.js app, you would use `import { useRouter } from "next/navigation";`
// This is a placeholder to make the component runnable in this environment.
const useRouter = () => {
  return {
    push: (path: string) => {
      window.location.href = path;
    }
  };
};


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
    // --- THEME CHANGE: Main background to light gray ---
    <main className="min-h-screen flex items-center justify-center bg-[#F5F5F5] p-4">
      <div className="w-full max-w-md">
        {/* --- THEME CHANGE: Form container to a white card --- */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
          {/* --- THEME CHANGE: Heading text to dark gray --- */}
          <h2 className="text-3xl font-bold text-center text-[#2D3748] mb-8">
            Sign in to EventHub
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
                // --- THEME CHANGE: Input fields for light mode ---
                className="w-full pl-10 pr-4 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-[#0D9488] outline-none transition-all duration-300"
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
                // --- THEME CHANGE: Input fields for light mode ---
                className="w-full pl-10 pr-4 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-[#0D9488] outline-none transition-all duration-300"
              />
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              // --- THEME CHANGE: Button to solid teal color ---
              className="w-full px-4 py-3 rounded-lg text-white font-semibold bg-[#0D9488] hover:bg-[#0F766E] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Login
            </button>
          </form>

          {/* Error Message */}
          {error && (
            // --- THEME CHANGE: Error message for light mode ---
            <div className="mt-4 text-center text-sm text-red-700 bg-red-100 border border-red-300 rounded-lg p-3">
              {error}
            </div>
          )}

          {/* Registration Link */}
          {/* --- THEME CHANGE: Text and link colors for light mode --- */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold text-[#0D9488] hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}