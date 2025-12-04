import Link from "next/link";

export default function HealthSafetyPage() {
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
          <h1 className="text-4xl font-bold mb-6">Health & Safety</h1>
          <p className="text-gray-600 text-lg mb-10">Last updated: January 2026</p>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            VaultBuddy provides training information and vault-related guidance for
            educational purposes only. Pole vaulting and athletic training involve
            inherent physical risks. Please read the following information
            carefully.
          </p>

          {/* SECTION 1 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">
            1. Not Medical or Coaching Advice
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            VaultBuddy does not provide medical advice, professional coaching,
            therapy, diagnosis, or treatment of any kind. All training suggestions,
            exercise descriptions, and vault setup guidance are general
            informational material only.
          </p>

          {/* SECTION 2 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">
            2. Consult a Professional
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            You should consult a qualified coach or healthcare professional before
            performing any exercise, drill, or physical activity shown within the
            app. Certain exercises may not be appropriate for all users.
          </p>

          {/* SECTION 3 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">
            3. Your Responsibility
          </h2>
          <ul className="list-disc ml-6 space-y-3 text-gray-700 text-lg leading-relaxed">
            <li>You are responsible for evaluating your own physical ability and limits.</li>
            <li>You use all drills, techniques, and routines at your own risk.</li>
            <li>You should stop any activity that causes pain, discomfort, or injury.</li>
            <li>You agree to train safely and with proper supervision when necessary.</li>
          </ul>

          {/* SECTION 4 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">
            4. No Liability for Injuries
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            To the fullest extent permitted by law, VaultBuddy and Pujati are not responsible
            for any injuries, accidents, damages, or losses that occur as a result
            of using the app or performing training activities inspired by it.
          </p>

          {/* SECTION 5 */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">5. Contact Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            If you have any questions regarding this Health & Safety notice, please contact:
          </p>

          <p className="text-blue-600 font-semibold text-lg">
            support@pujati.com
          </p>

        </div>
      </section>

    </main>
  );
}
