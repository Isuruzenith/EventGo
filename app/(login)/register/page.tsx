"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setError("");
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setRole("Student");
    } else {
      setError(data.error || "Registration failed");
    }
  }

  return (
    <div>
      <div>
        <h2>
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="role">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Student">Student</option>
              <option value="Organizer">Organizer</option>
            </select>
          </div>
          <button
            type="submit">
            Register
          </button>
        </form>
        {message && (
          <div>{message}</div>
        )}
        {error && (
          <div>{error}</div>
        )}
        <p>
          Already have an account?{" "}
          <a href="/login">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

