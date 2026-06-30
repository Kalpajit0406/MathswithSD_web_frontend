import MathBackground from "@/components/MathBackground";
import { 
  FileText, BarChart2, Cpu, Shield, CloudLightning, RefreshCcw, Search, LayoutTemplate 
} from "lucide-react";

export const metadata = {
  title: "Features Breakdown — MathsWithSD",
  description: "Explore the comprehensive features of MathsWithSD: advanced proctoring, detailed analytics, chapter normalization, and math typesetting.",
};

const featureSections = [
  {
    title: "Assessment & Typesetting",
    icon: FileText,
    items: [
      "Custom assessment player supporting complex LaTeX rendering.",
      "Multi-choice questions with customized options mapping.",
      "Automatic question tagging by educational chapters.",
      "Instant KaTeX-powered layout rendering on low-end hardware."
    ]
  },
  {
    title: "Granular Performance Analytics",
    icon: BarChart2,
    items: [
      "Calculates Overall Accuracy against total test size.",
      "Calculates Attempted Accuracy based exclusively on submitted responses.",
      "Tracks Attempt Rates to highlight pacing bottlenecks.",
      "Identifies unattempted and incorrect counts automatically."
    ]
  },
  {
    title: "Offline Recovery Shield",
    icon: RefreshCcw,
    items: [
      "Secures exam progress in local storage cache during drops.",
      "Triggers automatic background sync once a stable connection returns.",
      "Verifies server timestamps before saving submissions.",
      "Minimizes payload overhead to allow sync on slow 2G/3G networks."
    ]
  },
  {
    title: "Kiosk Exam Proctoring",
    icon: Shield,
    items: [
      "Intercepts device home-switch actions to log window defocus events.",
      "Blocks clock-drift attempts by checking negative system-time adjustments.",
      "Restricts navigation while exam timer is running.",
      "Stores violation timestamps for teacher audit review."
    ]
  },
  {
    title: "Chapter Normalization",
    icon: Search,
    items: [
      "Automated regex-based chapter tag consolidation.",
      "Prevents duplicate topics (e.g. 'integral-calculus' vs. 'Integral Calculus').",
      "Validates question references before chapter deletion.",
      "Ensures neat, structured performance tracking over time."
    ]
  },
  {
    title: "Progressive Sync Engine",
    icon: CloudLightning,
    items: [
      "Uses lightweight JSON polling instead of power-hungry WebSockets.",
      "Syncs scores, timer states, and leaderboards under 500ms.",
      "Reduces network data consumption by up to 80%.",
      "Handles replica set failover queries automatically."
    ]
  },
  {
    title: "Review System",
    icon: Cpu,
    items: [
      "Provides question-by-question review screens post-submission.",
      "Displays the student's selected answer side-by-side with the correct choice.",
      "Renders math equations in LaTeX.",
      "Locks results until overall exam scheduled window ends."
    ]
  },
  {
    title: "Device Performance Profiles",
    icon: LayoutTemplate,
    items: [
      "Consumes under 180MB RAM on Android/iOS (compared to 800MB WebViews).",
      "Native CPU compilation via Dart compiler.",
      "Zero rendering lag during rapid question swipes.",
      "Tested on low-end dual-core hardware configurations."
    ]
  }
];

export default function Features() {
  return (
    <div className="relative py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <MathBackground />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Architecture Highlights</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            System Feature Breakdown
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400">
            A comprehensive list of core features built directly into the student and teacher applications.
          </p>
        </div>

        {/* Feature Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureSections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div 
                key={idx}
                className="flex flex-col gap-5 p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400">
                    <Icon size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      <span className="text-cyan-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
