
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      // Redirect based on role
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
      setError(data.error || "Login failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-dark">
      <div className="w-full max-w-md p-8 rounded-xl bg-glass backdrop-blur-lg border border-white/20 shadow-lg">
        <h2 className="text-4xl font-bold text-text-light text-center mb-8">
          Login to EventHub
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-green transition-all duration-300"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-green transition-all duration-300"
            required
          />
          <button
            type="submit"
            className="w-full px-5 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-primary-blue to-primary-green transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-green/30"
          >
            Login
          </button>
        </form>
        {error && (
          <div className="mt-4 text-center text-feedback-error">{error}</div>
        )}
        <p className="text-center text-text-muted mt-6">
          Don't have an account?{' '}
          <a href="/register" className="text-primary-green hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
