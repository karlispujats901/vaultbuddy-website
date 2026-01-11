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
              by Pujati LLC
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
              <button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
  aria-label={showPassword ? "Hide password" : "Show password"}
>
  {showPassword ? (
    // 👁️‍🗨️ Eye OFF
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12
           C3.226 16.338 7.244 19.5 12 19.5
           c1.683 0 3.298-.371 4.77-1.037
           M6.228 6.228A10.45 10.45 0 0112 4.5
           c4.756 0 8.773 3.162 10.065 7.498
           a10.523 10.523 0 01-4.293 5.774
           M6.228 6.228L3 3m3.228 3.228l3.65 3.65
           m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65
           m0 0a3 3 0 10-4.243-4.243"
      />
    </svg>
  ) : (
    // 👁️ Eye ON
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639
           C3.423 7.51 7.36 4.5 12 4.5
           c4.638 0 8.573 3.007 9.963 7.178
           .07.207.07.431 0 .639
           C20.577 16.49 16.64 19.5 12 19.5
           c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  )}
</button>

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
