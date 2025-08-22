"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl mb-5 text-red-500">Login</h1>
      <button
        onClick={() => signIn("google")}
        className="bg-red-600 px-4 py-2 rounded"
      >
        Login with Google
      </button>
    </div>
  );
}
