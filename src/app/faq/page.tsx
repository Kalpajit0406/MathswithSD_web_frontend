"use client";

import { useState } from "react";
import MathBackground from "@/components/MathBackground";
import { HelpCircle, ChevronDown, ChevronUp, Search } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
  category: "account" | "exams" | "scoring" | "technical" | "privacy";
}

const faqs: FAQItem[] = [
  // Category: Account
  {
    category: "account",
    q: "How do I create a student account?",
    a: "Download the student application from the Google Play Store, tap 'Register', fill in your full name, preferred cohort details (e.g. Grade 12A), and your mobile number. Once you submit, your instructor will review and approve the request, allowing you to log in."
  },
  {
    category: "account",
    q: "How do I reset my password if I forget it?",
    a: "MathsWithSD handles authentication via your registered mobile number. If you forget your password, contact your educator directly to request a password reset from the administrative dashboard."
  },
  {
    category: "account",
    q: "Can I log into the student app from multiple devices simultaneously?",
    a: "No. To maintain examination integrity, active student sessions are restricted to a single authenticated mobile device. Logging in from a second device will terminate your session on the first device."
  },
  {
    category: "account",
    q: "How do I update my registered mobile number or profile details?",
    a: "Profile updates must be managed by the administrator. Contact your instructor with your updated details, and they can apply changes directly to your database profile."
  },
  {
    category: "account",
    q: "How do I request deletion of my student account and historical data?",
    a: "You can request account deletion by emailing kalpajit.dev@mathswithsd.in or using the administrative contact details. Our team will verify and delete your profile along with all quiz records within 48 hours."
  },
  {
    category: "account",
    q: "What is a cohort, and how am I assigned to one?",
    a: "A cohort is your class grouping (e.g. Grade 12A). Your instructor assigns you to a cohort upon approving your registration. This ensures you only receive tests and announcements relevant to your syllabus."
  },
  
  // Category: Exams
  {
    category: "exams",
    q: "How do I start an exam?",
    a: "Navigate to your 'Assessments' dashboard, tap on any active exam assigned to your cohort, review the instructions (total questions, duration, proctoring settings), and tap 'Start Assessment'."
  },
  {
    category: "exams",
    q: "Can I pause an exam and return to it later?",
    a: "No. Once an exam starts, the countdown timer runs continuously on the server. Closing the application or turning off your device does not stop the timer. The exam must be finished in the allocated time."
  },
  {
    category: "exams",
    q: "How does the 'Mark for Review' feature work?",
    a: "If you encounter a question you wish to skip and return to later, tap 'Mark for Review'. The question index in the navigation tray will highlight in yellow, indicating you should revisit it before final submission."
  },
  {
    category: "exams",
    q: "What happens if the exam timer reaches 00:00 before I submit?",
    a: "The application instantly locks all inputs and executes an automatic secure submission. All answered questions up to that point are saved and graded. Unanswered questions are marked unattempted."
  },
  {
    category: "exams",
    q: "What is the 'Early Submission' waiting page?",
    a: "If you complete a scheduled competitive exam early, the application directs you to a waiting page. Results and answers are kept hidden until the overall exam time limit expires, preventing leakage of answers."
  },
  {
    category: "exams",
    q: "Why can't I retake certain assessments?",
    a: "Retake policies are determined by your instructor. Practice modules usually permit unlimited attempts, while formal exams are locked to a single attempt to ensure score credibility."
  },
  {
    category: "exams",
    q: "How can I review my previous exam answers and explanations?",
    a: "Navigate to your 'History' tab on the app, select any completed assessment, and tap 'Review Answers'. You will see step-by-step LaTeX formula calculations showing why each answer is correct."
  },
  
  // Category: Scoring
  {
    category: "scoring",
    q: "How is my overall exam score calculated?",
    a: "Scores are calculated backend-side based on correctness: Overall Accuracy is `(correctQuestions / totalQuestions) * 100`, Attempted Accuracy is `(correctQuestions / attemptedQuestions) * 100`, and Attempt Rate is `(attemptedQuestions / totalQuestions) * 100`."
  },
  {
    category: "scoring",
    q: "What constitutes an 'attempted' question?",
    a: "Any question where you select an option and save it is counted as attempted. Leaving the option unselected (blank) is categorized as unattempted."
  },
  {
    category: "scoring",
    q: "Why did I score lower than a classmate who got the same number of correct answers?",
    a: "Some competitive cohort rankings take completion speed into account. If points are equal, ties are broken by the student who submitted the test first."
  },
  {
    category: "scoring",
    q: "How are leaderboard standings and points determined?",
    a: "Leaderboard points accumulate over a term. Correct answers grant base points, with bonus weight multipliers awarded for high accuracy percentages and timely submissions."
  },
  {
    category: "scoring",
    q: "Can my instructor manually adjust my score?",
    a: "No. The backend evaluates scores programmatically using strict canonical formulas, ensuring consistent, unbiased assessment tracking for all students."
  },
  
  // Category: Technical
  {
    category: "technical",
    q: "What happens if my internet connection fails during a test?",
    a: "MathsWithSD is equipped with a robust Offline Recovery Shield. The app immediately caches your answers inside a secure local SQLite database. You can proceed with the test, and progress automatically syncs back once connection returns."
  },
  {
    category: "technical",
    q: "What is a 'Focus Defocus Violation'?",
    a: "If you leave the exam screen (e.g. going to home screen, opening browser, or taking screenshots), the Kiosk shield flags a defocus violation. These violations are logged and forwarded to your instructor."
  },
  {
    category: "technical",
    q: "What is a 'Negative Clock Drift' error?",
    a: "To prevent time cheating, the application monitors system time changes. If the app detects you set your phone clock backwards, a negative drift error flags, and inputs are locked until the system time is corrected."
  },
  {
    category: "technical",
    q: "How much RAM does the student application require?",
    a: "The app is optimized for low-end devices, using native canvas rendering to keep memory footprints below 180MB RAM. This eliminates WebView crashes common on budget Android hardware."
  },
  {
    category: "technical",
    q: "Does the app support mathematical LaTeX formatting?",
    a: "Yes. All equations are rendered locally using KaTeX widgets. This ensures equations, integrals, and matrices are sharp, scalable, and load with zero delay."
  },
  {
    category: "technical",
    q: "How does the 'Progressive Sync Engine' work?",
    a: "Instead of heavy WebSocket streaming, the client uses lightweight JSON polling. This retrieves updates and submits points asynchronously, reducing data usage by 80%."
  },
  {
    category: "technical",
    q: "What Android versions are supported?",
    a: "MathsWithSD supports Android 8.0 (Oreo, API Level 26) and above, ensuring compatibility with older and budget mobile phones."
  },
  {
    category: "technical",
    q: "Is there an iOS version of the student application?",
    a: "Currently, MathsWithSD is distributed exclusively via the Google Play Store for Android. An iOS release is planned for a future update cycle."
  },
  
  // Category: Privacy & Security
  {
    category: "privacy",
    q: "Is my personal data secure in the app?",
    a: "Yes. All user authentication tokens are signed using 256-bit JWT keys. Communications use secure HTTPS connections with strict NoSQL database input sanitization."
  },
  {
    category: "privacy",
    q: "Does the app track my physical location?",
    a: "No. MathsWithSD only requests permissions for Camera and Network access, which are strictly used for barcode scans and coordinating offline data syncs."
  },
  {
    category: "privacy",
    q: "Who is the primary administrator for this platform?",
    a: "The platform is owned and managed by Kalpajit Bepary (Educator). Feel free to reach out for cohort verification queries or data management requests."
  },
  {
    category: "privacy",
    q: "Are my exam violation logs shared with third parties?",
    a: "No. Proctoring violations and assessment logs are strictly stored on secure servers and are only accessible by your cohort's verified instructor."
  },
  {
    category: "privacy",
    q: "Does the app serve third-party ads?",
    a: "No. The application is entirely ad-free and dedicated strictly to academic testing and learning."
  }
];

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "account" | "exams" | "scoring" | "technical" | "privacy">("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeTab === "all" || faq.category === activeTab;
    const matchesSearch = faq.q.toLowerCase().includes(search.toLowerCase()) || 
                          faq.a.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="relative py-16 lg:py-24 bg-slate-50 min-h-screen">
      <MathBackground />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-12">
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Support Center</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-slate-500">
            Find answers to common questions about accounts, scoring, offline recovery, and kiosk proctoring.
          </p>
        </div>

        {/* Search bar & Tabs */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search FAQs (e.g. proctoring, offset, offline)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-12 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
            <Search className="absolute left-4.5 top-4 text-slate-400" size={18} />
          </div>

          <div className="flex flex-wrap gap-2 pb-2 overflow-x-auto">
            {(["all", "account", "exams", "scoring", "technical", "privacy"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setExpandedIndex(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md shadow-cyan-500/10"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ list */}
        <div className="flex flex-col gap-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 font-bold text-slate-900 hover:text-cyan-500 transition-colors cursor-pointer"
                  >
                    <div className="flex gap-3 items-start">
                      <HelpCircle className="text-cyan-500 mt-0.5 flex-shrink-0" size={18} />
                      <span className="leading-snug">{faq.q}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="text-slate-400 mt-0.5 flex-shrink-0" size={18} />
                    ) : (
                      <ChevronDown className="text-slate-400 mt-0.5 flex-shrink-0" size={18} />
                    )}
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-500 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200 pl-11">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-slate-500">
              No matching FAQs found. Try searching for something else!
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
