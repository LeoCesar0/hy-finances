// components/Header.tsx
"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "@/utils/auth";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-4 mb-4">
      <h1 className="text-xl font-bold">
        <Link href="/">My App</Link>
      </h1>

      {user ? (
        <div className="flex items-center gap-4">
          <p className="text-gray-700">
            Logged in as <strong>{user.email}</strong>
          </p>
          <button
            onClick={signOut}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <Link
            href="/sign-in"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}
