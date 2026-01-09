"use client";

import Link from "next/link";

export default function AuthConfirmedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">

        <h1 className="text-2xl font-bold mb-4">
          Email Updated
        </h1>

        <p className="text-gray-600 mb-6">
          Your email address has been successfully updated.
          <br /><br />
          Please return to the VaultBuddy app and sign in again
          using your new email address.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="https://apps.apple.com"
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Open the App
          </a>

          <Link
            href="/"
            className="text-sm text-gray-500 hover:underline"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}
