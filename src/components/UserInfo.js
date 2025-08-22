"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function UserInfo() {
  const session = useSession();
  return (
    <Link href={"/dashboard"}>
      {session.status === "authenticated" && (
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
      )}
    </Link>
  );
}
