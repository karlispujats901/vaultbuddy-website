"use client";

import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

export default function AuthCallbackPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function handleCallback() {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      // Extract tokens from URL fragment
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);

      const access_token = params.get("access_token");
      const refresh_token = params.get("refresh_token");

      if (!access_token || !refresh_token) {
        setStatus("error");
        setMessage("Invalid or expired confirmation link.");
        return;
      }

      // Save session to Supabase
      const { error } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });

      if (error) {
        setStatus("error");
        setMessage("Authentication failed. Please try again.");
        return;
      }

      // Success
      setStatus("success");
      setMessage("Your email has been confirmed! Redirecting…");

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }

    handleCallback();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-xl shadow text-center">
        <h1 className="text-2xl font-bold mb-4">VaultBuddy</h1>

        {status === "loading" && (
          <p className="text-gray-600">Validating your confirmation link…</p>
        )}

        {status === "success" && (
          <p className="text-green-600 font-medium">{message}</p>
        )}

        {status === "error" && (
          <p className="text-red-600 font-medium">{message}</p>
        )}
      </div>
    </main>
  );
}
