import Link from "next/link";

export default function TermsPage() {
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
      <span className="text-sm text-gray-500 -mt-1">by Pujati</span>
    </div>
  </Link>
</header>

      {/* CONTENT */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-3xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-600 text-lg mb-10">
            Last updated: January 2026
          </p>

          {/* INTRO */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            These Terms of Service (“Terms”) govern your access to and use of the VaultBuddy
            app and website. VaultBuddy is a product of <strong>Pujati</strong>. By downloading,
            accessing, or using VaultBuddy, you agree to be bound by these Terms.
          </p>

          {/* SECTION 1 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">1. Use of the App</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            VaultBuddy is designed to help athletes improve their training and technique.
            You agree to use the app responsibly and in compliance with all applicable laws.
          </p>

          {/* SECTION 2 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">2. No Professional Coaching or Medical Advice</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            VaultBuddy provides training information for educational purposes only.
            It is not a substitute for professional coaching, medical advice, or supervised training.
            Pole vaulting and athletic training carry inherent risks. Always train safely.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            For additional important safety information, please review our
            <a href="/health-safety" className="text-blue-600 font-semibold ml-1">
              Health & Safety Notice
            </a>.
          </p>

          {/* SECTION 3 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">3. User Accounts</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Some features may require creating an account. You are responsible for maintaining
            the confidentiality of your login information and all activity under your account.
          </p>

          {/* SECTION 4 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">4. User Content</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            VaultBuddy allows you to save routines, vault setups, and other training data.
            You retain all rights to your content. We do not claim ownership over anything you create.
          </p>

          {/* SECTION 5 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">5. Acceptable Use</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            You agree not to misuse the app. This includes attempting to reverse engineer,
            disrupt, hack, or damage the app or its servers. You also may not upload harmful,
            unlawful, or inappropriate content.
          </p>

          {/* SECTION 6 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">6. Subscription & Payments</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            If VaultBuddy offers paid features or subscriptions, all purchases are processed 
            through the Apple App Store or Google Play Store. Payments are handled by the store provider,
            and VaultBuddy does not receive your payment details. Refunds must be requested directly
            through Apple or Google.
          </p>

          {/* SECTION 7 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">7. Intellectual Property</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            All content within the VaultBuddy app—including logos, design, images, text, videos,
            and software—is owned by Pujati and protected by copyright and trademark laws.
            You may not copy, distribute, or reproduce any part of the app without permission.
          </p>

          {/* SECTION 8 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">8. App Updates</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We may update or modify the app at any time, including adding or removing features.
            We are not obligated to maintain any specific feature set.
          </p>

          {/* SECTION 9 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">9. Termination</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We may suspend or terminate your access to VaultBuddy if you violate these Terms
            or misuse the app.
          </p>

          {/* SECTION 10 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">10. Limitation of Liability</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            To the fullest extent permitted by law, VaultBuddy and Pujati are not responsible 
            for injuries, damages, or losses related to the use of the app. Training in sports 
            such as pole vaulting carries inherent risk. You use the app at your own discretion.
          </p>

          {/* GOVERNING LAW */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">11. Governing Law</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            These Terms are governed by the laws of the Commonwealth of Pennsylvania, USA,
            except where your local laws require otherwise. Users in the EU, UK, and other regions
            retain all mandatory consumer rights provided by their local jurisdictions.
          </p>

          {/* CHANGES */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">12. Changes to These Terms</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We may update these Terms periodically. When we do, the updated Terms will be posted 
            on this page with a revised “Last updated” date.
          </p>

          {/* CONTACT */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">13. Contact Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-blue-600 font-semibold text-lg mt-2">
            support@pujati.com
          </p>

        </div>
      </section>

    </main>
  );
}
