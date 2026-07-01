import Link from "next/link";
import MathBackground from "@/components/MathBackground";
import { Shield, ArrowLeft, Calendar, FileText, Info } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — MathsWithSD",
  description: "Privacy Policy for MathsWithSD. Learn about how we collect, protect, and use student data, test answers, and scanning details.",
};

export default function PrivacyPolicy() {
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
              <Shield className="text-slate-700 dark:text-slate-350" size={32} />
              <span>Privacy Policy</span>
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
              This Privacy Policy governs the collection, use, and protection of data for MathsWithSD services, including our web application, student platform, and mobile applications.
            </p>
          </div>

          <div className="flex flex-col gap-6 text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
            
            {/* Introduction */}
            <section className="flex flex-col gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">1. Introduction</h3>
              <p>
                Welcome to <strong>MathsWithSD</strong> ("we," "our," or "us"). We are committed to protecting the privacy of our students, teachers, and administrators. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (<a href="https://mathswithsd.in" className="text-slate-900 dark:text-white hover:underline font-semibold font-semibold">https://mathswithsd.in</a>) and use our learning platform or mobile applications.
              </p>
              <p>
                By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this policy, please do not access the platform.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="flex flex-col gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">2. Information We Collect</h3>
              <p>
                To provide a high-quality educational experience, we collect information that helps us identify users, authenticate access, and evaluate exam submissions. We collect:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li><strong>Personal Registration Details</strong>: Student name, class level (Classes 9–12 or Joint Entrance preparation), preferred language, and password.</li>
                <li><strong>Contact Identifiers</strong>: Student mobile phone number (used for unique account identification and secure login validation).</li>
                <li><strong>Academic Performance Data</strong>: Test responses, exam start and submission timestamps, answers submitted, and performance metrics.</li>
                <li><strong>Scanned Image and OCR Data</strong>: Mathematical formulas, handwriting, or question papers scanned and uploaded by users to our formula rendering system.</li>
                <li><strong>Technical Metadata</strong>: IP address, device specifications, browser type, and diagnostic logs to ensure security and prevent exam cheating.</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="flex flex-col gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">3. How We Use Information</h3>
              <p>
                We process your data strictly to fulfill educational, operational, and security requirements:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>To create and manage your secure student or administrator account.</li>
                <li>To process and score test submissions, generating performance reports for students and instructors.</li>
                <li>To execute mathematical formula parsing and rendering (interpreting equations and text).</li>
                <li>To enforce exam security constraints (such as preventing multiple active sessions, screen casting, or geometry overlays on mobile devices).</li>
                <li>To diagnose technical errors, optimize database queries, and improve the speed of our services.</li>
                <li>To communicate updates, announcements, or notifications regarding your classes and exams.</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section className="flex flex-col gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">4. Third-Party Services</h3>
              <p>
                We do not sell your personal data. We share information only with trusted third-party cloud service providers necessary to operate our learning system:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li><strong>Database Hosting</strong>: MongoDB Atlas for secure, encrypted cloud data persistence.</li>
                <li><strong>Cloud Storage</strong>: Cloudinary for storing uploaded math sheets and rendering files.</li>
                <li><strong>Hosting Providers</strong>: DigitalOcean and Netlify for serving our backend infrastructure, gateways, and legal portals.</li>
              </ul>
              <p className="mt-2">
                All third-party partners are vetted to ensure they maintain compliance with strict security guidelines and data privacy regulations.
              </p>
            </section>

            {/* Data Security */}
            <section className="flex flex-col gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">5. Data Security</h3>
              <p>
                We implement robust, industry-standard administrative, technical, and physical security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li><strong>Transport Security</strong>: SSL/TLS encryption for all data exchanged between clients (apps/browsers) and our API endpoints.</li>
                <li><strong>Credential Hashing</strong>: Passwords are encrypted using strong, modern cryptographic hashing algorithms (bcrypt) before storage.</li>
                <li><strong>Session Integrity</strong>: JSON Web Tokens (JWT) are signed and verified server-side with strict expiration checks to prevent hijacking.</li>
                <li><strong>Network Protection</strong>: Rate-limiters, NoSQL injection sanitizers, and Cross-Site Scripting (XSS) filters are deployed on Nginx and Express gateways.</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="flex flex-col gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">6. Children's Privacy</h3>
              <p>
                Because MathsWithSD serves secondary school students (Classes 9–12), we take children's privacy extremely seriously. We do not allow self-registration for students under age 13 without school authorization or parental/guardian consent. If we learn that personal information has been collected from a child under 13 without verification of parental consent, we will delete that information immediately.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section className="flex flex-col gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">7. Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. You are advised to review this policy periodically for any changes.
              </p>
            </section>

            {/* Contact Information */}
            <section className="flex flex-col gap-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 pt-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">8. Contact Information</h3>
              <p>
                If you have any questions or concerns about this Privacy Policy, your data, or our practices, please contact us:
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
