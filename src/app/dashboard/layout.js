"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react for icons

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  // Session loading state
  if (status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg">Checking authentication...</p>
      </div>
    );
  }

  // Redirect if not logged in
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:block w-64 bg-[#131313] text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-3">
          <li>
            <Link href="/dashboard" className="hover:underline">
              Overview
            </Link>
          </li>
          <li>
            <Link href="/dashboard/add-product" className="hover:underline">
              Add Product
            </Link>
          </li>
        </ul>
      </aside>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#131313] text-white p-5 transform transition-transform duration-300 z-50 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-3">
          <li>
            <Link href="/dashboard" onClick={() => setIsOpen(false)}>
              Overview
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-product"
              onClick={() => setIsOpen(false)}
            >
              Add Product
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      {!isOpen && (
        <button
          className="md:hidden fixed top-25 left-4 z-50 bg-[#131313] text-white p-2 rounded"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8">{children}</main>
    </div>
  );
}
