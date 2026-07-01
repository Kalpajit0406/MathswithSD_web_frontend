"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Play, BookOpen, Clock, BarChart3, CheckSquare, 
  ShieldAlert, RefreshCw, Smartphone, Layers, Zap, ChevronRight, HelpCircle,
  GraduationCap, Target, Award, Users, ArrowRight
} from "lucide-react";
import MathBackground from "@/components/MathBackground";

const stats = [
  { value: "<500ms", label: "Sync Latency" },
  { value: "99.9%", label: "Platform Uptime" },
  { value: "100%", label: "Proctoring Integrity" },
  { value: "50k+", label: "Tests Attempted" }
];

const cohorts = [
  { id: "jee", name: "IIT JEE Prep", desc: "Rigorous test series modeled exactly on the JEE Main & Advanced formats.", badge: "Vibrant", icon: Target, color: "from-blue-600 to-indigo-600" },
  { id: "class12", name: "Class 12 Boards", desc: "Chapter-wise sheets, previous years' board papers, and evaluation drills.", badge: "New", icon: GraduationCap, color: "from-rose-500 to-pink-600" },
  { id: "class11", name: "Class 11 Practice", desc: "Foundation concept-builder quizzes and weekly mock assignments.", icon: BookOpen, color: "from-amber-500 to-orange-500" },
  { id: "class10", name: "Class 10 Foundation", desc: "Early preparation assessments for boards and competitive examinations.", icon: Layers, color: "from-emerald-500 to-teal-500" }
];

const features = [
  { icon: BookOpen, title: "Structured Mock Tests", desc: "Access a vast database of practice questions categorized by subject, difficulty, and specific chapter." },
  { icon: Clock, title: "Scheduled Live Exams", desc: "Take teacher-assigned exams in real-time with automatic timer tracking and secure submission." },
  { icon: Layers, title: "Chapter-wise Practice", desc: "Target specific chapters with custom tests designed to highlight weak spots and strengthen core skills." },
  { icon: BarChart3, title: "Instant Analytics", desc: "View detailed statistics immediately upon exam completion, with granular breakdowns of correct answers." },
  { icon: CheckSquare, title: "Explanations & Derivations", desc: "Go through submitted responses question-by-question with step-by-step mathematical explanations." },
  { icon: ShieldAlert, title: "Secure Proctoring Environment", desc: "Highly robust security lock-down preventing background tab switching and system time tampering." },
  { icon: Zap, title: "Real-Time Leaderboards", desc: "Track points, performance indexes, cohort rankings, and leaderboard status in real time." },
  { icon: RefreshCw, title: "Sub-500ms Cloud Sync", desc: "Progressive background updates. Automatically sync states and exam answers asynchronously." },
  { icon: Smartphone, title: "Offline State Recovery", desc: "Save quiz progress locally if connection drops and sync automatically once back online." }
];

const faqPreview = [
  { q: "How do I create a student account?", a: "Download the student app from the Google Play Store, click 'Register', and enter your mobile number. A registration request will be sent to the administrator. Once approved, you can log in." },
  { q: "What happens if my internet connection drops during an exam?", a: "MathsWithSD saves your answers locally in a secure offline cache. You can continue taking your test. Once internet is restored, the progress automatically syncs to the server." },
  { q: "How are my test scores and metrics calculated?", a: "Scores are evaluated using standard canonical formulas: overall accuracy (based on total test questions), attempted accuracy (correct answers over attempted questions), and attempt rate." },
  { q: "Why can't I immediately see my exam results?", a: "If the test is scheduled for a specific time window, scores remain hidden until the exam time officially closes to prevent answers from being shared between students." }
];

export default function Home() {
  const [selectedCohort, setSelectedCohort] = useState("jee");

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-x-hidden bg-white">
      
      {/* Hero Section */}
      <section className="relative w-full py-16 lg:py-24 flex items-center justify-center border-b border-slate-100 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <MathBackground />
        
        {/* Glow Effects */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-600 bg-blue-500/10 border border-blue-500/20 uppercase"
              >
                🚀 Advanced Mathematics Testing Suite
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900"
              >
                Score Higher with <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-500 bg-clip-text text-transparent">Vibrant Practice</span> & Real-Time Analytics
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-600 max-w-xl font-medium leading-relaxed"
              >
                Take control of your learning. Attempt teacher-assigned timed exams, practice chapter-wise mock tests, and analyze your performance with our high-performance student app.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 mt-2"
              >
                <Link
                  href="/download"
                  className="flex items-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 text-base font-bold shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Play size={16} className="fill-current" />
                  <span>Download on Google Play</span>
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-1 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 px-7 py-3.5 text-base font-bold transition-all border border-slate-200"
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
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 pt-8 border-t border-slate-200"
              >
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-extrabold text-blue-600">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-500 mt-1 font-semibold uppercase tracking-wider">
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
                className="w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl p-2 relative group bg-white"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/hero_showcase.jpg"
                    alt="MathsWithSD App Interface Showcase"
                    fill
                    sizes="(max-w-7xl) 100vw, 420px"
                    priority
                    className="object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Cohorts / Class Selector Section (PW-Style) */}
      <section className="w-full py-16 bg-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3 mb-12">
            <span className="text-xs font-bold tracking-widest text-rose-500 uppercase">Target Learning Groups</span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Choose Your Target Cohort
            </h2>
            <p className="text-sm text-slate-500">
              Access curated tests, leaderboards, and study schedules built specifically for your academic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Cohorts Left Tabs list */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {cohorts.map((cohort) => {
                const Icon = cohort.icon;
                const isSelected = selectedCohort === cohort.id;
                return (
                  <button
                    key={cohort.id}
                    onClick={() => setSelectedCohort(cohort.id)}
                    className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-200 ${
                      isSelected
                        ? "bg-white border-blue-500 shadow-md text-blue-600"
                        : "bg-white/40 border-slate-200 hover:border-slate-300 text-slate-700"
                    }`}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr ${cohort.color} text-white`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <span className="font-bold text-sm">{cohort.name}</span>
                      <span className="text-xs text-slate-500 mt-0.5 line-clamp-1">Explore features</span>
                    </div>
                    {cohort.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500 text-white uppercase tracking-wider">
                        {cohort.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Cohort Details Panel */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between min-h-[300px]">
              {cohorts.map((cohort) => {
                if (cohort.id !== selectedCohort) return null;
                const Icon = cohort.icon;
                return (
                  <div key={cohort.id} className="flex flex-col gap-6 h-full justify-between">
                    <div className="flex flex-col gap-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr ${cohort.color} text-white shadow-lg`}>
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900">
                        {cohort.name} Assessment Path
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed">
                        {cohort.desc} Students enrolled under this cohort will receive automatic updates when new worksheets are published by the educator. The curriculum covers foundational math, advanced exercises, and periodic review sessions.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100">
                      <Link
                        href="/download"
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-bold transition-all shadow-md shadow-blue-500/10"
                      >
                        <span>Start Practice</span>
                        <ArrowRight size={16} />
                      </Link>
                      <Link
                        href="/student-guide"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 text-sm font-bold transition-all"
                      >
                        <span>View Guide</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="w-full py-20 lg:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">System Highlights</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Structured to Elevate Mathematics Learning
            </h2>
            <p className="text-base text-slate-500">
              Discover the robust feature set designed to deliver seamless timed testing, offline proctoring, and instant evaluations.
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
                  className="group relative flex flex-col gap-4 p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/30 hover:bg-slate-50/50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="w-full py-16 lg:py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-rose-500 uppercase">Common Questions</span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              General App FAQ Preview
            </h2>
            <p className="text-sm text-slate-500">
              Need help? Here are some quick answers to guide you. For a comprehensive list, visit our full FAQ page.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqPreview.map((item, i) => (
              <div 
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="text-rose-500 mt-0.5 flex-shrink-0" size={18} />
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.q}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed pl-7">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>View all 30+ FAQs</span>
              <ChevronRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* CTA Download Banner (PW Vibrant style) */}
      <section className="w-full py-16 lg:py-20 relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-700 to-rose-500 text-white">
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Ready to Accelerate Your Mathematics Learning?
          </h2>
          <p className="text-base text-blue-100 max-w-xl leading-relaxed">
            Get the student app on your mobile device today to attempt tests, track leaderboard statistics, and master complex mathematics assessments.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link
              href="/download"
              className="flex items-center gap-2.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 font-bold shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Play size={16} className="text-blue-600 fill-current" />
              <span>Install from Google Play Store</span>
            </Link>
            <Link
              href="/how-it-works"
              className="flex items-center gap-2 rounded-2xl bg-blue-700/50 hover:bg-blue-700/70 border border-white/20 text-white px-8 py-4 font-bold transition-all"
            >
              <span>See How It Works</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
