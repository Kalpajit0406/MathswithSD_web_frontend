import MathBackground from "@/components/MathBackground";
import { BookOpen, Award, Shield, Users } from "lucide-react";

export const metadata = {
  title: "About Us — MathsWithSD",
  description: "Learn more about MathsWithSD: our mission, educational philosophy, and how we are modernizing mathematics learning for students.",
};

export default function About() {
  return (
    <div className="relative py-16 lg:py-24 bg-slate-50 min-h-screen">
      <MathBackground />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Our Story</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            About MathsWithSD
          </h1>
          <p className="text-base text-slate-500">
            Learn about our core philosophy, technological achievements, and commitment to making math learning accessible.
          </p>
        </div>

        {/* Content sections */}
        <div className="flex flex-col gap-16">
          
          {/* Section 1: Intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-slate-900">What is MathsWithSD?</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                MathsWithSD is a premium, secure educational testing ecosystem built around two coordination points: an administrative dashboard for the educator and a mobile assessment application for the student.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                By integrating our advanced mathematical rendering engine, we eliminate the traditional barriers of typesetting complex formulas, allowing teachers to create and convert equations into fully renderable LaTeX questions instantly.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 flex flex-col items-center text-center gap-2">
                <BookOpen className="text-violet-500" size={24} />
                <span className="text-xs font-bold">Structured Practice</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 flex flex-col items-center text-center gap-2">
                <Award className="text-cyan-500" size={24} />
                <span className="text-xs font-bold">Live Leaderboards</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 flex flex-col items-center text-center gap-2">
                <Shield className="text-emerald-500" size={24} />
                <span className="text-xs font-bold">Kiosk Shield Anti-Cheat</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 flex flex-col items-center text-center gap-2">
                <Users className="text-amber-500" size={24} />
                <span className="text-xs font-bold">Cohort Optimization</span>
              </div>
            </div>
          </div>

          {/* Section 2: Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-bold tracking-widest text-violet-500 uppercase">Goal Focus</span>
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                To simplify mathematics examination management for teachers and deliver a zero-friction, highly engaging testing experience for students that builds confidence and improves accuracy. We strive to provide reliable offline safeguards so that testing integrity remains independent of network availability.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Future Outlook</span>
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                To build an intelligent, cross-platform learning environment where physical sheets and digital classrooms merge seamlessly. By leveraging advanced machine learning models and lightweight device performance profiles, we want to bring premium exam preparation tools to students worldwide.
              </p>
            </div>
          </div>

          {/* Section 3: Educational Philosophy */}
          <div className="flex flex-col gap-6 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 text-center">Our Educational Philosophy</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-3xl mx-auto text-center">
              We believe that mathematics is best mastered through consistent, targeted practice and immediate review. Traditional grading delayed feedback loops by days, leaving students disconnected from their mistakes. MathsWithSD solves this by providing instant scoring evaluations and detailed answer reviews. By targeting assessments by chapter, we encourage focused remediation over general study.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
