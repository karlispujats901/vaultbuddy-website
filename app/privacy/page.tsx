import Link from "next/link";

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-600 text-lg mb-10">
            Last updated: January 2026
          </p>

          {/* INTRO */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            At VaultBuddy by Pujati, your privacy is extremely important to us.
            This Privacy Policy explains what information we collect, how we use it,
            and how we keep it secure. By using the VaultBuddy app or website,
            you agree to the terms outlined below.
          </p>

          {/* SECTION 1 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">1. Information We Collect</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            VaultBuddy is designed with privacy in mind. We collect only the information
            necessary to operate and improve the app.
          </p>

          <ul className="list-disc ml-6 space-y-3 text-gray-700 text-lg leading-relaxed">
            <li><strong>Account Information:</strong> Email address (only if you create an account).</li>
            <li><strong>User-Generated Data:</strong> Vault setups, routines, and preferences you save inside the app.</li>
            <li><strong>Cloud Sync Data (Optional):</strong> If you enable syncing, your routines and vault setups may be stored securely on our servers.</li>
            <li><strong>Subscription Information:</strong> Payments are processed by Apple or Google. VaultBuddy does not receive your credit card details.</li>
            <li><strong>Anonymous Analytics:</strong> We collect anonymous usage data to improve performance and understand how features are used. This data does not identify you.</li>
          </ul>

          {/* SECTION 2 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">2. How We Use Your Information</h2>

          <ul className="list-disc ml-6 space-y-3 text-gray-700 text-lg leading-relaxed">
            <li>To allow you to save vault setups and training routines.</li>
            <li>To sync your data across devices (only if you enable cloud sync).</li>
            <li>To improve app performance through anonymous analytics.</li>
            <li>To provide customer support and respond to inquiries.</li>
          </ul>

          {/* SECTION 3 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">3. How Your Data Is Stored</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Your routines, vault setups, and preferences may be stored locally on your device,
            or in the cloud if you choose to create an account or enable syncing.
            All data is stored securely. We do not sell your data or share it with advertisers.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Data may be stored or processed in the United States or other regions,
            depending on server location.
          </p>

          {/* SECTION 4 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">4. Third-Party Services</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            VaultBuddy may use trusted third-party tools for authentication, subscriptions,
            analytics, or data storage. These services are used only to operate the app
            and cannot use your information for their own purposes.
          </p>

          {/* SECTION 5 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">5. Data Security</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We use industry-standard security practices to protect your information.
            However, no method of transmission or storage is 100% secure.
          </p>

          {/* SECTION 6 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">6. Children's Privacy</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            VaultBuddy is not intended for children under 13. We do not knowingly collect
            personal information from minors.
          </p>

          {/* SECTION 7 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">7. Your Rights</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            You may request to access or delete your account data at any time by contacting:
          </p>

          <p className="text-blue-600 font-semibold text-lg mb-8">
            support@pujati.com
          </p>

          {/* GDPR */}
          <h3 className="text-xl font-semibold mb-3">GDPR (EU/UK/CH) Rights</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            If you are located in the European Union, United Kingdom, or Switzerland,
            you have additional rights under relevant privacy laws, including the right
            to access your data, correct it, delete it, restrict processing, or withdraw
            consent. You may exercise these rights by emailing us.
          </p>

          {/* SECTION 8 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">8. Changes to This Policy</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We may update this Privacy Policy from time to time. Updates will be posted on
            this page with a revised date.
          </p>

        </div>
      </section>

    </main>
  );
}
