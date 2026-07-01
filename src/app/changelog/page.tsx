import MathBackground from "@/components/MathBackground";
import { GitCommit, Tag } from "lucide-react";

export const metadata = {
  title: "Changelog & Release Notes — MathsWithSD",
  description: "Check the design decisions, system updates, and release logs for MathsWithSD applications.",
};

const logs = [
  {
    version: "v2.1.0-release",
    date: "June 19, 2026",
    changes: [
      "Optimized student swipe action responsiveness using local canvas widgets, cutting RAM requirements to under 180MB.",
      "Added clock negative drift monitor inside the proctoring shield to flag clock-shifting attempts.",
      "Replaced WebView with pure Dart canvas widgets for rendering LaTeX formulas, improving rendering performance by 3x."
    ]
  },
  {
    version: "v2.0.0-major",
    date: "May 20, 2026",
    changes: [
      "Migrated backend from single direct connections to replica set MongoDB configurations, resolving failover timeout crashes.",
      "Re-engineered scoring logic in resultEvaluationService.js into separate unit-tested modules.",
      "Integrated advanced equation-editor pipeline into the administrative app to capture and render mathematical equations instantly."
    ]
  },
  {
    version: "v1.1.0-patch",
    date: "April 12, 2026",
    changes: [
      "Added Kiosk KioskLock proctoring to log student focus defocus warnings when navigating out of the exam screen.",
      "Implemented SQLite local cache sync failovers, preventing loss of responses on connection drops."
    ]
  },
  {
    version: "v1.0.0-initial",
    date: "February 28, 2026",
    changes: [
      "Launched initial student Flutter app for Android containing point leaderboards, timed tests, and KaTeX rendering.",
      "Launched educator admin dashboard with basic cohort creation and student approval registration controls."
    ]
  }
];

export default function Changelog() {
  return (
    <div className="relative py-16 lg:py-24 bg-slate-50 min-h-screen">
      <MathBackground />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Version Control</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Changelog & Releases
          </h1>
          <p className="text-base text-slate-500">
            A comprehensive log tracking core feature additions, optimization patches, and proctoring upgrades.
          </p>
        </div>

        {/* Timeline logs */}
        <div className="flex flex-col gap-12">
          {logs.map((log, idx) => (
            <div 
              key={idx}
              className="flex flex-col gap-4 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
            >
              <div className="flex justify-between items-center border-b border-slate-100 pb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Tag size={16} className="text-cyan-500" />
                  <span className="font-heading text-lg font-bold text-slate-900">{log.version}</span>
                </div>
                <span className="text-xs text-slate-400 font-medium">{log.date}</span>
              </div>
              <ul className="flex flex-col gap-3 mt-1">
                {log.changes.map((change, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2.5 text-sm text-slate-500 leading-relaxed">
                    <GitCommit size={14} className="text-violet-500 mt-1 flex-shrink-0" />
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
