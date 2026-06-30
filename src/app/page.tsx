"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Play, BookOpen, Clock, BarChart3, CheckSquare, 
  ShieldAlert, RefreshCw, Smartphone, Layers, Zap, ChevronRight, HelpCircle
} from "lucide-react";
import MathBackground from "@/components/MathBackground";

const stats = [
  { value: "<500ms", label: "Sync Latency" },
  { value: "99.8%", label: "OCR Accuracy" },
  { value: "100%", label: "Tamper Integrity" },
  { value: "50k+", label: "Questions Solved" }
];

const features = [
  { icon: BookOpen, title: "Practice Tests", desc: "Access a wide database of practice questions categorized by subject, difficulty, and chapter." },
  { icon: Clock, title: "Scheduled Exams", desc: "Take teacher-assigned exams in real-time with automatic timer tracking and secure submission." },
  { icon: Layers, title: "Chapter-wise Assessments", desc: "Target specific chapters with custom tests designed to highlight weak spots and strengthen core skills." },
  { icon: BarChart3, title: "Instant Performance Analytics", desc: "View detailed statistics immediately upon exam completion, with granular breakdowns of correct answers." },
  { icon: CheckSquare, title: "Detailed Review", desc: "Go through submitted responses question-by-question with step-by-step mathematical explanations." },
  { icon: ShieldAlert, title: "Secure Exam Environment", desc: "Highly robust security lock-down preventing background tab switching and system time tampering." },
  { icon: Zap, title: "Progress Tracking", desc: "Track points, performance indexes, cohort rankings, and leaderboard status in real time." },
  { icon: RefreshCw, title: "Fast Cloud Sync", desc: "Sub-500ms progressive updates. Automatically sync states and exam answers asynchronously." },
  { icon: Smartphone, title: "Offline Recovery", desc: "Save quiz progress locally if connection drops and sync automatically once back online." },
  { icon: Smartphone, title: "Modern User Interface", desc: "Smooth layout transitions, KaTeX-rendered LaTeX formulas, and low RAM utilization profiles." }
];

const faqPreview = [
  { q: "How do I create a student account?", a: "Download the app from the Google Play Store, click 'Register', and enter your mobile number. A registration request will be sent to the administrator. Once approved, you can log in." },
  { q: "What happens if my internet connection drops during an exam?", a: "MathsWithSD saves your answers locally in a secure offline cache. You can continue taking your test. Once internet is restored, the progress automatically syncs to the server." },
  { q: "How are my test scores and metrics calculated?", a: "Scores are evaluated using standard canonical formulas: overall accuracy (based on total test questions), attempted accuracy (correct answers over attempted questions), and attempt rate." },
  { q: "Why can't I immediately see my exam results?", a: "If the test is scheduled for a specific time window, scores remain hidden until the exam time officially closes to prevent answers from being shared between students." }
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 flex items-center justify-center border-b border-slate-200/50 dark:border-slate-900/50">
        <MathBackground />
        
        {/* Glow Effects */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-violet-600/10 dark:bg-violet-600/5 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 uppercase"
              >
                🚀 Mathpix AI & Flutter Ingestion
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white"
              >
                Master Mathematics with <span className="bg-gradient-to-r from-violet-500 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">Smart Practice</span> & Analytics
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-600 dark:text-slate-400 max-w-xl font-medium leading-relaxed"
              >
                Practice smarter. Track your progress. Improve your performance. Discover the dual-application suite engineered to digitize mathematics assessments instantly.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 mt-2"
              >
                <Link
                  href="/download"
                  className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white px-7 py-3.5 text-base font-bold shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Play size={16} className="fill-current" />
                  <span>Download on Google Play</span>
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-1 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 px-7 py-3.5 text-base font-bold transition-all border border-slate-200 dark:border-slate-800"
                >
                  <span>Learn More</span>
                  <ChevronRight size={16} />
                </Link>
              </motion.div>

              {/* Stats Mini */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800/80"
              >
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-extrabold text-slate-900 dark:text-white bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero Right visual */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-slate-200 dark:border-slate-800/80 shadow-2xl p-2 relative group"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/hero_showcase.jpg"
                    alt="MathsWithSD App Interface Showcase"
                    fill
                    sizes="(max-w-7xl) 100vw, 420px"
                    priority
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="w-full py-20 lg:py-28 bg-white dark:bg-slate-950/40 border-b border-slate-200/50 dark:border-slate-900/50 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
            <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">System Highlights</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Engineered for Students. Built for Educators.
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400">
              Discover the dynamic monorepo features tackling typesetting barriers, offline cheating, and real-time student evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative flex flex-col gap-4 p-8 rounded-2xl glass-panel border border-slate-200/60 dark:border-slate-900 hover:border-violet-500/30 dark:hover:border-violet-500/20 hover:bg-slate-100/10 dark:hover:bg-slate-900/30 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FAQ Preview Accordion Section */}
      <section className="w-full py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/50 dark:border-slate-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
            <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Common Questions</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              General App FAQ Preview
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Need help? Here are some quick answers to guide you. For a comprehensive list, visit our full FAQ page.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqPreview.map((item, i) => (
              <div 
                key={i}
                className="rounded-2xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/60 p-6 shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="text-cyan-500 mt-0.5 flex-shrink-0" size={18} />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.q}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-7">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-500 hover:text-cyan-400 transition-colors"
            >
              <span>View all 30+ FAQs</span>
              <ChevronRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* CTA Download Banner */}
      <section className="w-full py-16 lg:py-24 relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_60%)] pointer-events-none" />
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Accelerate Your Mathematics Learning?
          </h2>
          <p className="text-base text-slate-400 max-w-xl leading-relaxed">
            Get the student app on your mobile device today to attempt tests, track leaderboard statistics, and master LaTeX typesetting math questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link
              href="/download"
              className="flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white px-8 py-4 font-bold shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Play size={16} className="fill-current" />
              <span>Install from Google Play Store</span>
            </Link>
            <Link
              href="/how-it-works"
              className="flex items-center gap-2 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 hover:text-white px-8 py-4 font-bold transition-all"
            >
              <span>See How It Works</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
