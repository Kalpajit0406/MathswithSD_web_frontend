import MathBackground from "@/components/MathBackground";

export const metadata = {
  title: "Privacy Policy — MathsWithSD",
  description: "Official privacy policy for the MathsWithSD mobile applications and website.",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <MathBackground />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Legal Policy</span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: June 30, 2026
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-3xl p-8 lg:p-12 shadow-sm prose prose-slate dark:prose-invert max-w-none text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex flex-col gap-6">
          
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Introduction</h2>
            <p>
              This Privacy Policy explains how MathsWithSD (\"we\", \"us\", or \"our\") collects, uses, stores, and protects student information when using our mobile applications (distributed on the Google Play Store) and our public website (<a href="https://mathswithsd.in" className="text-cyan-500 hover:underline">mathswithsd.in</a>).
            </p>
            <p>
              By accessing or using our services, you consent to the data collection policies detailed in this document. We are committed to safeguarding your private academic data in compliance with standard mobile distribution regulations.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Information We Collect</h2>
            <p>We only collect the minimum personal and telemetry data necessary to deliver secure assessments:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-1">
              <li><strong>Registration Profile:</strong> Student full name, selected class cohort (e.g. Grade 12A), and a valid mobile phone number for authentication.</li>
              <li><strong>Exam Submissions:</strong> Student answers, start times, completion duration, and calculated evaluation points.</li>
              <li><strong>Proctoring Integrity Logs:</strong> Screen focus defocus warnings and local device clock drift adjustment timestamps.</li>
              <li><strong>Device Configuration:</strong> Operating system version and device memory constraints used solely to optimize rendering performance.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. How We Use Your Data</h2>
            <p>Your academic data is used exclusively to facilitate class testing:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-1">
              <li>To verify your enrollment in your student cohort.</li>
              <li>To calculate exam metrics (Accuracy, Attempt Rate) using our backend scoring algorithms.</li>
              <li>To coordinate point leaderboard standings in your cohort group.</li>
              <li>To supply proctoring violation logs to your verified cohort instructor for exam audits.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Data Retention & Deletion</h2>
            <p>
              We retain your account profile and assessment logs only as long as you are enrolled in an active study cohort. Students can request immediate deletion of their personal profiles and test histories by contacting the administrator at <a href="mailto:kalpajit.dev@mathswithsd.in" className="text-cyan-500 hover:underline">kalpajit.dev@mathswithsd.in</a>. For detailed instructions, see our <a href="/data-deletion" className="text-cyan-500 hover:underline">Data Deletion Policy</a>.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Third-Party Sharing & Ads</h2>
            <p>
              We enforce a strict zero-sharing policy. We do not sell, rent, or lease your personal information, mobile numbers, or examination results to any third-party advertisers. The app does not display any commercial advertisements.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">6. Security Measures</h2>
            <p>
              All traffic between the application and our servers is secured over HTTPS. User sessions are verified using cryptographic JSON Web Tokens (JWT). Inputs are sanitized on our MongoDB cluster to prevent injection exploits.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">7. Changes to This Policy</h2>
            <p>
              We may revise this policy periodically to align with Google Play store compliance adjustments. Active students will receive notifications in-app regarding any meaningful privacy changes.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
