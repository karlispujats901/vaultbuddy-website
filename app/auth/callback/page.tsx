"use client";

import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

export default function AuthCallbackPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    async function handleCallback() {
      const url = new URL(window.location.href);
      const token_hash = url.searchParams.get("token_hash");
      const type = url.searchParams.get("type");

      if (!token_hash || !type) {
        setStatus("error");
        setMessage("Invalid confirmation link.");
        return;
      }

      // 🔥 THIS is the missing step
      const { data, error } = await supabase.auth.verifyOtp({
        type: "email",
        token_hash,
      });

      if (error) {
        console.error(error);
        setStatus("error");
        setMessage("Error confirming your email.");
        return;
      }

      // success!
      setStatus("success");
      setMessage("Your email has been confirmed! Redirecting...");

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

        {status === "loading" && <p>Validating your confirmation link…</p>}
        {status === "success" && <p className="text-green-600">{message}</p>}
        {status === "error" && <p className="text-red-600">{message}</p>}
      </div>
    </main>
  );
}
