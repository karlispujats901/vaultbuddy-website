"use client";
import Link from "next/link";
import { useState } from "react";

export default function SupportPage() {
  return (
    <main className="min-h-screen text-gray-900">

      {/* HEADER */}
      <header className="w-full py-6 px-8 flex items-center max-w-6xl mx-auto">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="VaultBuddy Logo" className="w-14 h-14 mr-3" />

          <div className="flex flex-col">
            <span className="text-2xl font-semibold tracking-tight text-gray-800">
              VaultBuddy
            </span>
            <span className="text-sm text-gray-500 -mt-1">by Pujati LLC</span>
          </div>
        </Link>
      </header>

      {/* CONTENT */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-3xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl font-bold mb-6">Support</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Need help with VaultBuddy? We’re here to assist you.
          </p>

          {/* CONTACT SUPPORT */}
          <h2 className="text-2xl font-semibold mt-10 mb-3">Contact Support</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Email us anytime at:<br />
            <a
              href="mailto:support@pujati.com"
              className="text-blue-600 font-semibold"
            >
              support@pujati.com
            </a>
          </p>

          <p className="text-gray-600 text-base mb-8">
            We typically respond within 1–2 business days. For account-related,
            privacy, or data deletion requests, please email us from the address
            associated with your VaultBuddy account.
          </p>

          {/* FAQ SECTION */}
          <h2 className="text-2xl font-semibold mt-10 mb-6">Common Questions</h2>

          <FAQItem
            question="How do I build custom routines?"
            answer="You can create custom routines by going to the Routines tab and selecting 'Create Routine'. Add any exercise—vault drills, plyometrics, medballs, running drills, warmups, or cooldowns—to build a personalized training session."
          />

          <FAQItem
            question="How do I save vault setup information?"
            answer="Go to the Vault Setup section and enter your run-up, steps, mid-mark, takeoff, grip height, pole details, and standards. VaultBuddy saves your setups automatically, and you can edit them anytime."
          />

          <FAQItem
            question="Can I organize exercises into categories?"
            answer="Yes! Exercises are automatically organized into categories such as vault drills, plyometrics, medballs, running drills, warmups, and cooldowns. You can also favorite exercises for quick access."
          />

          <FAQItem
            question="Will more features be added to VaultBuddy?"
            answer="Yes. Planned additions include more drills, enhanced routine-building tools, progress tracking, and improved vault setup tools."
          />

        </div>
      </section>

    </main>
  );
}

/* ------------------------ */
/* Accordion FAQ Component  */
/* ------------------------ */

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800"
        onClick={() => setOpen(!open)}
      >
        {question}
        <span className="text-gray-500">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <p className="mt-3 text-gray-600 text-base leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}
