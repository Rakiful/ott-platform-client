"use client";

import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] bg-black text-white px-4">
      <FaExclamationTriangle className="text-red-600 text-9xl mb-6 animate-bounce" />
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-6 text-center">
        The resource you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-bold transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
