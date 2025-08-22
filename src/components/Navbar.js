"use client";
import Link from "next/link";
import UserInfo from "./UserInfo";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const session = useSession();

  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-red-600">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-red-600 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h1 className="text-2xl font-bold text-red-600">OTT Platform</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-2">
          <UserInfo />

          {session.status === "authenticated" ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="btn bg-red-600 text-white border-0 rounded-2xl shadow"
            >
              Log Out
            </button>
          ) : (
            <Link
              href="/login"
              className="btn bg-red-600 text-white border-0 rounded-2xl shadow"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
