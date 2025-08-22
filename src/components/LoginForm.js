"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!res.error) {
      router.push("/products");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col p-10 items-center justify-center border-red-600 border-2 rounded-2xl text-white">
      <h1 className="text-5xl mb-10 text-red-500">Login</h1>

      {/* Email + Password Login */}
      <form onSubmit={handleLogin} className="flex flex-col gap-3 w-80">
        <input
          required
          type="email"
          placeholder="Email"
          className="p-2 rounded border-2 border-red-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Password"
          className="p-2 rounded border-2 border-red-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-red-600 px-4 py-2 rounded cursor-pointer">
          Login
        </button>
      </form>

      {/* Google Login */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded mt-4"
      >
        <FcGoogle size={20} />
        Login with Google
      </button>
    </div>
  );
}
