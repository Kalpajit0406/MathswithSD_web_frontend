import MathBackground from "@/components/MathBackground";
import { 
  Download, Smartphone, Key, BookOpen, Clock, CheckCircle2, ShieldCheck, BarChart2, Star 
} from "lucide-react";

export const metadata = {
  title: "How It Works — MathswithSD",
  description: "Step-by-step developer and student guide on setting up the MathswithSD student application.",
};

const steps = [
  {
    icon: Download,
    title: "1. Install the App",
    desc: "Download and install the official student application from the Google Play Store on your Android device."
  },
  {
    icon: Smartphone,
    title: "2. Register Account",
    desc: "Launch the app and register using your mobile number. Enter your credentials to submit a registration approval request."
  },
  {
    icon: Key,
    title: "3. Wait for Approval & Log In",
    desc: "Once your administrator reviews and approves your registration request, log into your student account."
  },
  {
    icon: BookOpen,
    title: "4. Browse Assignments",
    desc: "Open your student dashboard to review available assessments and exams assigned to your cohort."
  },
  {
    icon: Clock,
    title: "5. Attempt Tests",
    desc: "Start an assessment. The app initializes the proctoring shield and begins tracking the exam timer."
  },
  {
    icon: CheckCircle2,
    title: "6. Submit Answers",
    desc: "Select answers for your questions. Click 'Submit' once done, or let the app auto-submit when the timer expires."
  },
  {
    icon: ShieldCheck,
    title: "7. Processing & Scores",
    desc: "If the test has immediate feedback enabled, view your stats instantly. For scheduled exams, wait until the test officially closes."
  },
  {
    icon: BarChart2,
    title: "8. Review Explanations",
    desc: "Go to your history tab to review question explanations, see correct choices, and trace LaTeX rendering solutions."
  },
  {
    icon: Star,
    title: "9. Track Progress",
    desc: "Review your point totals, global leaderboard rank, accuracy scores, and cohort performance graphs."
  }
];

export default function HowItWorks() {
  return (
    <div className="relative py-16 lg:py-24 bg-slate-50 min-h-screen">
      <MathBackground />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Step-by-step</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            How It Works
          </h1>
          <p className="text-base text-slate-500">
            A quick visual guide outlining the student registration and examination workflow.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm relative group hover:border-cyan-500/20 transition-colors"
              >
                <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <Icon size={24} />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-cyan-500 transition-colors">
                    {step.title}
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
