"use client";

import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("access_token");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    if (!token) {
      setMessage("Invalid or missing recovery token.");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) setMessage(error.message);
    else setMessage("Password updated! You can now log in.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>

        <input
          type="password"
          placeholder="New password"
          className="w-full p-3 border rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded"
          onClick={handleReset}
        >
          Update Password
        </button>

        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
