import Link from "next/link";
import { Github, Instagram, Facebook, Youtube, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-500 text-white font-bold">
                <span>+</span>
              </div>
              <span className="font-heading text-md font-extrabold text-slate-900 dark:text-white tracking-tight">
                MathsWith<span className="text-cyan-500">SD</span>
              </span>
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              The dual-application suite engineered to digitize mathematics learning using Mathpix OCR scanning, secure proctoring integrity, and real-time leaderboards.
            </p>
            <div className="flex items-center gap-3.5 mt-2">
              <a
                href="https://github.com/Kalpajit0406"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                aria-label="Instagram Page"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Site Pages Links */}
          <div className="flex flex-col gap-3">
            <span className="font-heading text-sm font-bold text-slate-800 dark:text-slate-200 tracking-wide uppercase">
              Navigation
            </span>
            <div className="flex flex-col gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <Link href="/about" className="hover:text-cyan-500 transition-colors">About Us</Link>
              <Link href="/features" className="hover:text-cyan-500 transition-colors">Features Breakdown</Link>
              <Link href="/how-it-works" className="hover:text-cyan-500 transition-colors">How It Works</Link>
              <Link href="/student-guide" className="hover:text-cyan-500 transition-colors">Student Guide</Link>
              <Link href="/faq" className="hover:text-cyan-500 transition-colors">Frequently Asked Questions</Link>
              <Link href="/contact" className="hover:text-cyan-500 transition-colors">Contact Support</Link>
              <Link href="/changelog" className="hover:text-cyan-500 transition-colors">Changelog & Updates</Link>
            </div>
          </div>

          {/* Legal Pages Links */}
          <div className="flex flex-col gap-3">
            <span className="font-heading text-sm font-bold text-slate-800 dark:text-slate-200 tracking-wide uppercase">
              Legal & Policies
            </span>
            <div className="flex flex-col gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <Link href="/privacy-policy" className="hover:text-cyan-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-cyan-500 transition-colors">Terms & Conditions</Link>
              <Link href="/data-deletion" className="hover:text-cyan-500 transition-colors">Data Deletion Instructions</Link>
              <Link href="/cookie-policy" className="hover:text-cyan-500 transition-colors">Cookie Policy</Link>
              <Link href="/accessibility" className="hover:text-cyan-500 transition-colors">Accessibility Statement</Link>
            </div>
          </div>

          {/* Support Info */}
          <div className="flex flex-col gap-3">
            <span className="font-heading text-sm font-bold text-slate-800 dark:text-slate-200 tracking-wide uppercase">
              Administration Support
            </span>
            <div className="flex flex-col gap-2.5 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Educator: Kalpajit Bepary</span>
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-cyan-500" />
                <a href="mailto:kalpajit.dev@mathswithsd.in" className="hover:text-cyan-500 transition-colors">kalpajit.dev@mathswithsd.in</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-cyan-500" />
                <a href="tel:+916289855545" className="hover:text-cyan-500 transition-colors">+91 62898 55545</a>
              </div>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 leading-normal mt-1 block">
                Official portal compliant with Google Play Console policies for application distribution.
              </span>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-slate-800/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 dark:text-slate-500">
          <span>&copy; {new Date().getFullYear()} MathsWithSD. All rights reserved.</span>
          <div className="flex items-center gap-1.5 font-medium">
            <span>Official Portal for</span>
            <span className="text-cyan-500 text-shadow-sm font-semibold tracking-wide">mathswithsd.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
