"use client";

import { useState } from "react";
import MathBackground from "@/components/MathBackground";
import { 
  User, Phone, Mail, Clock, Send, MessageCircle, Github, Instagram, Facebook, Youtube 
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="relative py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <MathBackground />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Support Channels</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Contact Support
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400">
            Reach out to the administrative team for queries about mobile registration approvals, score records, or data management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Admin Info Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Administrative Office</h2>
              
              <div className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-3">
                  <User className="text-cyan-500 flex-shrink-0" size={18} />
                  <div>
                    <span className="block font-bold text-slate-800 dark:text-slate-200 text-xs">Instructor / Developer</span>
                    <span>Kalpajit Bepary</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-cyan-500 flex-shrink-0" size={18} />
                  <div>
                    <span className="block font-bold text-slate-800 dark:text-slate-200 text-xs">Phone (Direct)</span>
                    <a href="tel:+916289855545" className="hover:text-cyan-500 transition-colors">+91 62898 55545</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-cyan-500 flex-shrink-0" size={18} />
                  <div>
                    <span className="block font-bold text-slate-800 dark:text-slate-200 text-xs">Email</span>
                    <a href="mailto:kalpajit.dev@mathswithsd.in" className="hover:text-cyan-500 transition-colors">kalpajit.dev@mathswithsd.in</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="text-cyan-500 flex-shrink-0" size={18} />
                  <div>
                    <span className="block font-bold text-slate-800 dark:text-slate-200 text-xs">WhatsApp Support</span>
                    <a href="https://wa.me/916289855545" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">+91 62898 55545</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="text-cyan-500 flex-shrink-0" size={18} />
                  <div>
                    <span className="block font-bold text-slate-800 dark:text-slate-200 text-xs">Office Hours</span>
                    <span>Monday - Saturday: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-6 flex items-center gap-4">
                <a href="https://github.com/Kalpajit0406" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-200" aria-label="GitHub"><Github size={20} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-200" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-200" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-200" aria-label="YouTube"><Youtube size={20} /></a>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-slate-200 dark:bg-slate-900 rounded-3xl overflow-hidden aspect-video relative flex items-center justify-center text-center p-6 border border-slate-200 dark:border-slate-850">
              <span className="text-xs text-slate-500 dark:text-slate-400">Map Placeholder (Office Location: Kolkata, India)</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send an Inquiry</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Subject</label>
                <input type="text" id="subject" placeholder="Registration Approval Request" required className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Message</label>
                <textarea id="message" rows={5} placeholder="Hello Kalpajit, I just registered from phone +91..." required className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none"></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white py-3.5 font-bold shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all cursor-pointer"
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold text-center animate-in fade-in duration-200">
                  ✓ Form submitted successfully! We will get back to you shortly.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
