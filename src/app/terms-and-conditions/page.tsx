import Link from "next/link";
import MathBackground from "@/components/MathBackground";
import { Scale, ArrowLeft, Calendar, FileText, Info } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions — MathsWithSD",
  description: "Terms and Conditions for the MathsWithSD platform. Read about user responsibilities, platform rules, and intellectual property.",
};

export default function TermsAndConditions() {
  return (
    <div className="relative py-16 lg:py-24 bg-[#f8fafc] dark:bg-slate-950 min-h-screen text-[#1f2937] dark:text-slate-100 font-sans transition-colors duration-300">
      <MathBackground />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Back Button */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:underline">
            <ArrowLeft size={16} />
            <span>Back to main website</span>
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 lg:p-12 shadow-sm flex flex-col gap-8">
          
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
              <Scale className="text-slate-700 dark:text-slate-350" size={32} />
              <span>Terms and Conditions</span>
            </h1>
            <div className="flex items-center gap-2 mt-3 text-xs text-slate-500 dark:text-slate-400 font-semibold">
              <Calendar size={14} />
              <span>Last Updated: June 16, 2026</span>
            </div>
          </div>

          {/* Alert Highlight */}
          <div className="flex gap-3 p-5 bg-slate-50 dark:bg-slate-800/20 border-l-4 border-slate-700 dark:border-slate-400 rounded-r-2xl text-slate-800 dark:text-slate-200">
            <Info size={20} className="flex-shrink-0 text-slate-700 dark:text-slate-300" />
            <p className="text-xs font-semibold leading-relaxed">
              Please read these Terms and Conditions carefully before using our platform. By accessing or using the platform, you agree to be bound by these terms.
            </p>
          </div>

          <div className="flex flex-col gap-6 text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
            
            {/* Acceptance of Terms */}
            <section className="flex flex-col gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">1. Acceptance of Terms</h3>
              <p>
                Welcome to <strong>MathsWithSD</strong> ("we," "our," or "us"). These Terms and Conditions govern your access to and use of our website (<a href="https://mathswithsd.in" className="text-slate-900 dark:text-white hover:underline font-semibold">https://mathswithsd.in</a>), mobile applications, and online educational services. By creating an account, logging in, or using any part of the services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </section>

            {/* User Accounts */}
            <section className="flex flex-col gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">2. User Accounts & Security</h3>
              <p>
                To access certain features of the platform, you must register for a student or administrator account. You agree to:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>Provide accurate, current, and complete information during registration.</li>
                <li>Maintain the security and confidentiality of your login credentials (username, password, and mobile verification details).</li>
                <li>Accept responsibility for all activities that occur under your account.</li>
                <li>Notify us immediately of any unauthorized use or security breach of your account.</li>
              </ul>
            </section>

            {/* Acceptable Use */}
            <section className="flex flex-col gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">3. Code of Conduct & Acceptable Use</h3>
              <p>
                MathsWithSD is an educational testing and learning platform. You are prohibited from:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>Using the platform for any unlawful purpose or to solicit others to perform unlawful acts.</li>
                <li>Bypassing or attempting to bypass exam security features, including session limits, screenshot controls, casting bans, or device overlay detectors.</li>
                <li>Uploading files that contain viruses, trojans, worms, or malicious scripts.</li>
                <li>Submitting plagiarized answers or using unauthorized resources during proctored exams.</li>
                <li>Reverse-engineering, decompiling, or extracting source code from our mobile applications or web gateways.</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="flex flex-col gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">4. Intellectual Property Rights</h3>
              <p>
                All content included on the platform, such as text, mathematical equations, diagrams, rendering models, graphics, logos, question banks, and software code, is the property of MathsWithSD or its content creators and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may access the materials solely for your personal, non-commercial educational use. You may not distribute, reproduce, modify, or resell any part of the materials without explicit written consent from us.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="flex flex-col gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">5. Disclaimer & Limitation of Liability</h3>
              <p>
                The platform is provided on an "as-is" and "as-available" basis. We make no representations or warranties of any kind, express or implied, regarding the operation of the services, the accuracy of formula interpretations, or the continuous availability of the network.
              </p>
              <p>
                To the maximum extent permitted by law, MathsWithSD shall not be liable for any damages arising out of the use or inability to use the platform, including lost progress data, connection latency, or test attempt interruptions.
              </p>
            </section>

            {/* Termination */}
            <section className="flex flex-col gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">6. Account Suspension & Termination</h3>
              <p>
                We reserve the right, without notice and at our sole discretion, to suspend or terminate your account and block your access to the platform for any breach of these Terms and Conditions, including security tampering, cheating, or illegal activity.
              </p>
            </section>

            {/* Contact Information */}
            <section className="flex flex-col gap-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 pt-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">7. Contact Information</h3>
              <p>
                For questions regarding these Terms and Conditions or the platform rules, please contact support:
              </p>
              <div className="bg-[#f8fafc] dark:bg-slate-950 border border-slate-200 dark:border-slate-850 p-5 rounded-2xl flex flex-col gap-2">
                <p><strong>Organization:</strong> MathsWithSD</p>
                <p><strong>Support Website:</strong> <a href="https://mathswithsd.in" className="text-slate-900 dark:text-white hover:underline">https://mathswithsd.in</a></p>
                <p><strong>Email Address:</strong> <a href="mailto:kalpajitbepary@gmail.com" className="text-slate-900 dark:text-white hover:underline font-semibold font-semibold">kalpajitbepary@gmail.com</a></p>
              </div>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
}
