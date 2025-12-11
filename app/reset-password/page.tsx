"use client";

import { Suspense, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function ResetPasswordContent() {
  const [token, setToken] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const params = new URLSearchParams(hash);
    const t = params.get("access_token");
    setToken(t);

    // Remove token from URL
    window.history.replaceState({}, "", "/reset-password");
  }, []);

  const handleReset = async () => {
    if (!token) return setMessage("Invalid or missing recovery token.");
    if (!password.trim()) return setMessage("Password cannot be empty.");

    const { error } = await supabase.auth.updateUser({ password });

    setMessage(error ? error.message : "Password updated! You can now log in.");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ⭐ HEADER (copied from homepage) */}
      <header className="w-full py-6 px-8 flex items-center max-w-6xl mx-auto">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="VaultBuddy Logo" className="w-14 h-14 mr-3" />

          <div className="flex flex-col">
            <span className="text-2xl font-semibold tracking-tight text-gray-800">
              VaultBuddy
            </span>
            <span className="text-sm text-gray-500 -mt-1">by Pujati</span>
          </div>
        </Link>
      </header>

      {/* PAGE CONTENT */}
      <div className="flex items-center justify-center px-4 mt-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-2">Reset Password</h1>
          <p className="text-center text-gray-600 mb-6">
            Choose a new password for your account.
          </p>

          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              New Password
            </label>

            <input
              type="password"
              placeholder="Enter your new password"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-xl"
              onClick={handleReset}
            >
              Update Password
            </button>

            {message && (
              <p className="mt-4 text-center text-gray-700 text-sm">{message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
