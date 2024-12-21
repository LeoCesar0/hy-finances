// app/sign-in/page.tsx
"use client";

import { useState } from "react";
import { signInWithGoogle } from "@/utils/auth";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      window.location.href = "/";
    } catch (error) {
      console.error("Failed to sign in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4 text-center">Sign In</h2>
        <button
          onClick={handleSignIn}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
        >
          {loading ? "Signing in..." : "Sign In with Google"}
        </button>
      </div>
    </div>
  );
}
