"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Registration successful! You can now login.");
    } else {
      alert("Failed to register user.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl mb-5 text-green-500">Register</h1>
      
      <form onSubmit={handleRegister} className="flex flex-col gap-3 w-80">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 rounded text-black"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 rounded text-black"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-2 rounded text-black"
          value={form.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-green-600 px-4 py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}
