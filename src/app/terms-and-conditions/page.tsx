import MathBackground from "@/components/MathBackground";

export const metadata = {
  title: "Terms & Conditions — MathsWithSD",
  description: "Official terms and conditions for using the MathsWithSD mobile applications and website.",
};

export default function TermsAndConditions() {
  return (
    <div className="relative py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <MathBackground />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Legal Policy</span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: June 30, 2026
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-3xl p-8 lg:p-12 shadow-sm prose prose-slate dark:prose-invert max-w-none text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex flex-col gap-6">
          
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Agreement to Terms</h2>
            <p>
              By installing the student mobile application or using the services of MathsWithSD, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use the application or delete your student profile.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Eligibility & Registration</h2>
            <p>
              To access assessments, students must register using their valid mobile number and wait for approval from their class administrator. You are responsible for maintaining the confidentiality of your login credentials and are fully liable for all activity associated with your account.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Acceptable Use Policy</h2>
            <p>Students agree to take all exams under standard honor codes. You agree NOT to:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-1">
              <li>Attempt to bypass Kiosk locking layers by switching apps or simulating background gestures.</li>
              <li>Manually alter device system time offsets to trick the test timer.</li>
              <li>Use bots, scripts, or proxies to scrape examination questions or simulate answer submissions.</li>
              <li>Share exam questions or LaTeX solutions with other students during live tests.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Intellectual Property</h2>
            <p>
              All mathematical question pools, LaTeX typesetting scripts, and application branding assets belong exclusively to MathsWithSD. Accessing assessments does not grant any ownership rights or intellectual licenses to students.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Termination</h2>
            <p>
              Instructors reserve the right to suspend or delete student accounts found violating acceptable use rules or triggering multiple proctoring warnings (e.g. repeated defocus violations).
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">6. Limitation of Liability</h2>
            <p>
              Our applications are provided on an \"as-is\" and \"as-available\" basis. We make no guarantees regarding uninterrupted connection status or server uptime. We are not liable for any scoring delays or sync lags caused by device errors or carrier network issues.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
