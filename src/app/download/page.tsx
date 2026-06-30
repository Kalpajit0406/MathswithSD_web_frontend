import MathBackground from "@/components/MathBackground";
import { Download, CheckCircle, ShieldAlert, Cpu } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Download Student App — MathsWithSD",
  description: "Get the official MathsWithSD student application for Android. Review requirements, permissions, and latest release highlights.",
};

const releaseHighlights = [
  "New KaTeX canvas renderer reduces overall RAM usage by 65%.",
  "Optimized progressive JSON poll sync latency to under 500ms.",
  "Enhanced offline cache security delta algorithms to prevent time tampering.",
  "Surgical chapter normalization to prevent overlapping tags."
];

const requirements = [
  { label: "Operating System", val: "Android 8.0 (Oreo) or higher" },
  { label: "Minimum Memory (RAM)", val: "1 GB RAM (Optimized for low-RAM devices)" },
  { label: "Storage Required", val: "Under 50 MB free space" },
  { label: "Connectivity", val: "Internet connection required for sync, fully supports offline exam execution" }
];

const permissions = [
  { label: "Camera Access", desc: "Required only for scanning profile photos or barcodes if configured by your administrator." },
  { label: "Network State / WiFi State", desc: "Monitors internet connectivity status to coordinate offline cached data sync." },
  { label: "Wake Lock", desc: "Prevents screen sleep during live timed assessments and proctored testing sessions." }
];

export default function DownloadPage() {
  return (
    <div className="relative py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <MathBackground />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Google Play Access</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Download MathsWithSD App
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400">
            Install the student application on your Android mobile device to begin assessments and track leaderboard metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Play store card */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 text-white font-extrabold text-2xl">
                  <span>+</span>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">MathsWithSD Student</h2>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Official Educational Release</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/80 pb-2">
                  <span>Version:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">v2.1.0-release</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/80 py-2">
                  <span>Published:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">June 2026</span>
                </div>
                <div className="flex justify-between pb-1 pt-2">
                  <span>Developer:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">Kalpajit Bepary</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 hover:bg-slate-850 text-white py-3.5 font-bold shadow-md transition-colors"
                >
                  <Download size={18} />
                  <span>Download APK (Play Store)</span>
                </a>
              </div>
            </div>

            {/* Permissions Card */}
            <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
                  <ShieldAlert size={18} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Required Permissions</h3>
              </div>
              <div className="flex flex-col gap-4">
                {permissions.map((p, i) => (
                  <div key={i} className="flex flex-col gap-1 text-xs">
                    <span className="font-bold text-slate-800 dark:text-slate-200">{p.label}</span>
                    <span className="text-slate-500 dark:text-slate-400 leading-normal">{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Requirements & highlights */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Req Card */}
            <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400">
                  <Cpu size={18} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">System Requirements</h3>
              </div>
              <div className="flex flex-col gap-4 text-xs">
                {requirements.map((req, i) => (
                  <div key={i} className="flex flex-col gap-0.5 border-b border-slate-100 dark:border-slate-800/80 pb-2 last:border-0 last:pb-0">
                    <span className="text-slate-400">{req.label}</span>
                    <span className="font-bold text-slate-850 dark:text-slate-200 leading-normal">{req.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights Card */}
            <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              <h3 className="text-md font-bold text-slate-900 dark:text-white">Release Highlights</h3>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                {releaseHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle className="text-cyan-500 mt-0.5 flex-shrink-0" size={12} />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
