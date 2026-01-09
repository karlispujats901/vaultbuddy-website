"use client"

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;

    // 🔐 Supabase dashboard password recovery
    if (
      hash.includes("access_token") &&
      hash.includes("type=recovery")
    ) {
      window.location.replace(
        "/reset-password" + hash
      );
    }
  }, []);
  return (
    <main className="min-h-screen">

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

      {/* HERO SECTION */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Train Smarter. Vault Better.
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Your complete pole vault training companion — drills, routines,
              and vault setup tools.
            </p>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
              Coming Soon
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img 
              src="/mockups/mockup1.png"
              className="w-full max-w-xs md:max-w-sm drop-shadow-2xl rounded-xl"
              alt="VaultBuddy Screenshot"
            />
          </div>

        </div>
      </section>


      {/* FEATURES SECTION */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">What’s Inside</h2>
          <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
            A complete training library, custom routines, and full vault setup tracking — 
            everything you need to improve your vault training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            title="Training Library"
            text="Vault drills, plyometrics, medballs, running drills, warmups, cooldowns, and more — grouped by category."
          />

          <FeatureCard
            title="Custom Routines"
            text="Build your own training sessions using any exercise in the app."
          />

          <FeatureCard
            title="Vault Setup Tracking"
            text="Save your run-up, steps, mid-mark, takeoff, grip, pole length, brand, and standards."
          />
        </div>
      </section>


      {/* APP SCREEN PREVIEWS */}
      <section className="px-6 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore the VaultBuddy Experience
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          <ScreenPreview 
            img="mockup1.png"
            title="Training Categories"
            text="Access vault drills, plyometrics, medballs, running drills, and more."
          />

          <ScreenPreview 
            img="mockup2.png"
            title="Drill Demonstrations"
            text="Learn proper mechanics with clear drill demonstrations."
          />

          <ScreenPreview 
            img="mockup3.png"
            title="Custom Routines"
            text="Build personalized training sessions from any exercise."
          />

          <ScreenPreview 
            img="mockup6.png"
            title="Favorites"
            text="Save and quickly access your most-used drills and workouts."
          />

          <ScreenPreview 
            img="mockup5.png"
            title="Vault Setup Tracking"
            text="Store run-up steps, mid-mark, grip height, pole length, and more."
          />

          <ScreenPreview 
            img="mockup4.png"
            title="Session Organization"
            text="Keep your training structured and consistent. Push and drag the cards to reorder them"
          />

        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-12">
        <div className="max-w-6xl mx-auto text-center">

          <div className="flex justify-center gap-6 mb-4">
            <a className="text-gray-700 text-md hover:text-blue-600 transition font-medium" href="/privacy">
              Privacy Policy
            </a>

            <a className="text-gray-700 text-md hover:text-blue-600 transition font-medium" href="/terms">
              Terms of Service
            </a>

            <a className="text-gray-700 text-md hover:text-blue-600 transition font-medium" href="/health-safety">
              Health & Safety
            </a>

        <a 
  className="text-gray-700 text-md hover:text-blue-600 transition font-medium" 
  href="/support"
>
  Support
</a>
          </div>

          <p className="text-gray-500 mt-4 text-sm">
            © 2026 Pujati LLC — VaultBuddy by Pujati
          </p>
        </div>
      </footer>

    </main>
  );
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition text-left border border-gray-200">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-lg">{text}</p>
    </div>
  );
}

function ScreenPreview({ img, title, text }: any) {
  return (
    <div className="text-center">
      <img 
        src={`/mockups/${img}`}
        className="mx-auto w-full max-w-xs drop-shadow-xl rounded-xl"
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{text}</p>
    </div>
  );
}
