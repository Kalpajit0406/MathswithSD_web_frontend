import MathBackground from "@/components/MathBackground";
import { 
  UserPlus, LogIn, LayoutGrid, FileSearch, PlayCircle, Clock, ArrowLeftRight, Bookmark, 
  CheckSquare, Hourglass, BarChart3, Award, WifiOff, AlertTriangle 
} from "lucide-react";

export const metadata = {
  title: "Student Guide — MathsWithSD",
  description: "Comprehensive guide for students using the MathsWithSD mobile application. Learn about proctored exams, leaderboards, and navigation.",
};

const guideSections = [
  {
    icon: UserPlus,
    title: "Account Creation",
    desc: "Launch the MathsWithSD student application on your mobile device. Tap the 'Register' link on the login page. Provide your full name, cohort details (e.g. Grade 12A), and a valid mobile number. Submit the form. A registration request is dispatched to your instructor. Once approved, your account becomes active."
  },
  {
    icon: LogIn,
    title: "Logging In",
    desc: "Enter your registered mobile number and password to log in. The application will authenticate your session and cache your user profile to enable offline access later."
  },
  {
    icon: LayoutGrid,
    title: "Dashboard Overview",
    desc: "Your central control panel. View upcoming, active, and completed exams. Monitor your total performance points, current cohort rank, and announcements sent by your instructor."
  },
  {
    icon: FileSearch,
    title: "Viewing Available Exams",
    desc: "In the 'Assessments' tab, you can view the tests assigned to your group. Exams are split into categories: 'Active' (can be started now), 'Scheduled' (starts at a future date), and 'Completed' (expired or submitted)."
  },
  {
    icon: PlayCircle,
    title: "Starting an Exam",
    desc: "Select an active test and read the instructions. Once ready, tap 'Start Assessment'. The app enters proctoring mode: Kiosk security protocols activate to lock navigation, and the countdown timer begins."
  },
  {
    icon: Clock,
    title: "Exam Timer",
    desc: "A countdown timer is displayed at the top right of the exam view. If the timer reaches 00:00, the application automatically locks your inputs and submits your test to prevent overdue completion."
  },
  {
    icon: ArrowLeftRight,
    title: "Navigating Questions",
    desc: "Use the bottom navigation panel or swipe left and right to navigate between problems. The KaTeX engine renders equations instantly as you browse."
  },
  {
    icon: Bookmark,
    title: "Marking Questions",
    desc: "Unsure of an answer? Tap the 'Mark for Review' button. Marked questions are highlighted with a distinct indicator in your assessment grid, allowing you to return to them quickly."
  },
  {
    icon: CheckSquare,
    title: "Submitting Exams",
    desc: "When finished, tap 'Submit'. You will see a warning summarizing your total questions, attempted questions, and unattempted questions. Confirm submission to lock in your answers."
  },
  {
    icon: Hourglass,
    title: "Early Submission Page",
    desc: "For scheduled competitive exams, if you submit before the allocated duration ends, you will be redirected to a secure waiting page. Results remain locked until the exam duration officially expires to maintain testing integrity."
  },
  {
    icon: BarChart3,
    title: "Viewing Results & Scores",
    desc: "Once results are unlocked, view your statistics. Metrics include overall accuracy (correct questions out of total questions), attempted accuracy (correct answers over attempted questions), and attempt rate."
  },
  {
    icon: CheckSquare,
    title: "Reviewing Answers",
    desc: "Open your test history to review explanations. The review page highlights your selected choice in red (if wrong) or green (if correct), displaying the correct formula side-by-side with step-by-step LaTeX derivations."
  },
  {
    icon: LayoutGrid,
    title: "Performance Dashboard",
    desc: "The analytics screen maps your score history across chapters, helping you identify if you are lagging in calculus, algebra, or trigonometry."
  },
  {
    icon: Award,
    title: "Cohort Leaderboard",
    desc: "Compete with peers in real time. The leaderboard updates point standings asynchronously. Higher points are granted for early submissions and high accuracy."
  },
  {
    icon: WifiOff,
    title: "Offline Recovery",
    desc: "If your network drops, don't worry. Progress is stored in a secure local SQLite database. The app will sync your responses once a stable connection returns."
  }
];

const troubleShooting = [
  { q: "The app logs a 'Focus Defocus Violation' warning.", a: "To prevent cheating, switching apps or returning to the home screen during tests triggers a warning event, which is logged for your instructor. Do not leave the assessment screen." },
  { q: "My exam answers did not sync due to internet loss.", a: "Simply wait until connection is established. Do not clear the application's storage, as doing so deletes the local offline cache of unsubmitted responses." },
  { q: "A 'Negative Clock Drift' warning popped up.", a: "This happens if you adjust your device time manually during an exam. The app locks input to prevent time manipulation cheats. Synchronize your time under device settings to solve." }
];

export default function StudentGuide() {
  return (
    <div className="relative py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <MathBackground />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Knowledge Base</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Student Application Guide
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400">
            A comprehensive manual describing how to register, take proctored tests, and review performance stats in MathsWithSD.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guideSections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div 
                  key={idx}
                  className="flex flex-col gap-4 p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400">
                      <Icon size={20} />
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">{section.title}</h2>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {section.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Troubleshooting section */}
          <div className="flex flex-col gap-6 p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 shadow-sm mt-8">
            <div className="flex items-center gap-3 justify-center">
              <AlertTriangle className="text-amber-500" size={24} />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Common Troubleshooting Situations</h3>
            </div>
            
            <div className="flex flex-col gap-6 mt-4">
              {troubleShooting.map((t, i) => (
                <div key={i} className="flex flex-col gap-2 text-sm border-b border-slate-100 dark:border-slate-800 pb-4 last:border-0 last:pb-0">
                  <span className="font-bold text-slate-850 dark:text-slate-200">{t.q}</span>
                  <span className="text-slate-550 dark:text-slate-400 leading-relaxed">{t.a}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
