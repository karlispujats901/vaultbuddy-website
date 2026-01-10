"use client";

import { Suspense, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function ResetPasswordContent() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [ready, setReady] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  /* -------------------------------------------------
     🔑 Establish recovery session (PKCE + Implicit)
  ------------------------------------------------- */
  useEffect(() => {
    const handleRecovery = async () => {
      const url = window.location.href;

      // 🟢 PKCE flow (desktop browsers)
      if (url.includes("code=")) {
        const { error } =
          await supabase.auth.exchangeCodeForSession(url);

        if (error) {
          setMessage(error.message);
          return;
        }
      }

      // 🟢 Implicit flow (mobile / Safari)
      if (window.location.hash.includes("access_token")) {
        const hash = window.location.hash.slice(1);
        const params = new URLSearchParams(hash);

        const access_token = params.get("access_token");
        const refresh_token = params.get("refresh_token");

        if (access_token && refresh_token) {
          const { error } = await supabase.auth.setSession({
            access_token,
            refresh_token,
          });

          if (error) {
            setMessage(error.message);
            return;
          }
        }
      }

      // Clean URL
      window.history.replaceState({}, "", "/reset-password");
      setReady(true);
    };

    handleRecovery();
  }, []);

  /* -------------------------------------------------
     Update password
  ------------------------------------------------- */
  const handleReset = async () => {
    if (!password.trim()) {
      return setMessage("Password cannot be empty.");
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setMessage(
      error ? error.message : "Password updated! You can now log in."
    );
  };

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Preparing secure password reset…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="w-full py-6 px-8 flex items-center max-w-6xl mx-auto">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="VaultBuddy Logo"
            className="w-14 h-14 mr-3"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-semibold tracking-tight text-gray-800">
              VaultBuddy
            </span>
            <span className="text-sm text-gray-500 -mt-1">
              by Pujati
            </span>
          </div>
        </Link>
      </header>

      {/* PAGE CONTENT */}
      <div className="flex items-center justify-center px-4 mt-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-2">
            Reset Password
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Choose a new password for your account.
          </p>

          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              New Password
            </label>

           <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your new password"
              className="w-full p-3 pr-12 bg-gray-100 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>


            <button
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-xl"
              onClick={handleReset}
            >
              Update Password
            </button>

            {message && (
              <p className="mt-4 text-center text-gray-700 text-sm">
                {message}
              </p>
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
