import MathBackground from "@/components/MathBackground";
import { Mail, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Data Deletion Instructions — MathsWithSD",
  description: "Official guide on how to request deletion of your student account and personal data from MathsWithSD.",
};

export default function DataDeletion() {
  return (
    <div className="relative py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <MathBackground />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Google Play Policy</span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Data Deletion Instructions
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400">
            Official instructions on how to request account and personal data deletion, meeting Google Play Developer Console requirements.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-3xl p-8 lg:p-12 shadow-sm flex flex-col gap-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          
          <div className="flex items-center gap-3 p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
            <ShieldCheck size={24} className="flex-shrink-0" />
            <span className="font-semibold text-xs">Your privacy control is our priority. You hold full rights to remove your personal identifiers and scores at any time.</span>
          </div>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Data Types Collected & Retained</h2>
            <p>
              When using the MathsWithSD student application, we collect your:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-1">
              <li>Full Name</li>
              <li>Mobile Phone Number (used for JWT account authorization)</li>
              <li>Exam scores, point totals, attempt counts, and timestamp logs</li>
              <li>Proctoring defocus logs and time tampering violation history</li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. How to Request Deletion</h2>
            <p>
              You can initiate a data deletion request by emailing us at:
            </p>
            <div className="my-4 flex items-center gap-2 p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-850 justify-center">
              <Mail size={16} className="text-cyan-500" />
              <a href="mailto:kalpajit.dev@mathswithsd.in" className="font-bold text-slate-850 dark:text-slate-200 hover:text-cyan-500 transition-colors">
                kalpajit.dev@mathswithsd.in
              </a>
            </div>
            <p>
              Please include your <strong>Full Name</strong> and your <strong>Registered Mobile Number</strong>. You do not need to provide any justification.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Deletion Timeline & Scope</h2>
            <p>
              Once your request is received, our database administrators will execute the deletion within <strong>48 hours</strong>:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-1">
              <li>Your user profile, name, and mobile number are purged from our MongoDB cluster.</li>
              <li>All historical points, leaderboard logs, and quiz results associated with your account are permanently deleted.</li>
              <li>All proctoring violation tracking records are deleted.</li>
              <li>An email confirmation will be sent to you once the deletion process is complete.</li>
            </ul>
            <p className="mt-2 text-xs font-semibold text-amber-500">
              * Note: Once deleted, this action cannot be undone. You will lose access to all point stand standings and history.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
