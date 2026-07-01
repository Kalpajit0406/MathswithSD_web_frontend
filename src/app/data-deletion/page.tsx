"use client";
import { useState } from "react";
import Link from "next/link";
import MathBackground from "@/components/MathBackground";
import { Trash2, Send, CheckCircle2, ShieldCheck, Mail, AlertCircle, ArrowLeft } from "lucide-react";

export default function DataDeletion() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    consent: false
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.consent) return;
    setStatus("submitting");

    const formData = new FormData();
    formData.append("form-name", "data-removal");
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("phone", formState.phone);
    formData.append("reason", formState.reason);
    formData.append("consent", "on");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="relative py-16 lg:py-24 bg-[#f8fafc] min-h-screen text-slate-900 font-sans transition-colors duration-300">
      <MathBackground />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Back Button */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:underline">
            <ArrowLeft size={16} />
            <span>Back to main website</span>
          </Link>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm flex flex-col gap-8">
          
          {status === "success" ? (
            <div className="text-center py-8 flex flex-col items-center gap-4">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl shadow-sm">
                <CheckCircle2 size={36} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-2">Request Submitted Successfully</h2>
              <p className="text-sm text-slate-500 max-w-md leading-relaxed">
                Thank you. We have received your data removal request for <strong className="text-slate-950">{formState.email}</strong>.
              </p>
              <p className="text-xs text-slate-500 max-w-md leading-relaxed mt-1">
                Our support team will send a verification link to your registered email address or phone number to confirm the request. Once verified, deletion will be completed in <strong>7 to 30 days</strong>.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link href="/" className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-all shadow-md">
                  Return Home
                </Link>
                <Link href="/privacy-policy" className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold rounded-xl transition-all">
                  Read Privacy Policy
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Data Removal Request
                </h1>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Request the permanent deletion of your MathswithSD account and performance records.
                </p>
              </div>

              {/* Alert Warning */}
              <div className="flex gap-3 p-5 bg-slate-50 border-l-4 border-slate-700 rounded-r-2xl text-slate-800">
                <ShieldCheck size={24} className="flex-shrink-0 text-slate-700" />
                <div className="flex flex-col gap-1">
                  <span className="font-extrabold text-sm">How the Process Works</span>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Under our data privacy policies and commitment to student control, you can request the permanent deletion of your account, contact details, performance history, and scans.
                  </p>
                </div>
              </div>

              {/* Process Details */}
              <section className="flex flex-col gap-4 text-sm text-slate-600 leading-relaxed border-b border-slate-100 pb-6">
                <ul className="list-disc pl-5 flex flex-col gap-2.5">
                  <li><strong>Verification</strong>: To protect your account from unauthorized deletion, we will send a confirmation request to the email address or phone number associated with your account before proceeding.</li>
                  <li><strong>Expected Processing Time</strong>: Requests are reviewed and completed within <strong>7 to 30 days</strong> of verification.</li>
                  <li><strong>Permanence</strong>: Once processed, the deletion is absolute. All student progress logs, test responses, cached scores, and credentials will be permanently erased and cannot be recovered.</li>
                </ul>
              </section>

              {/* Data Deletion Form */}
              <section className="flex flex-col gap-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Trash2 size={20} />
                  <span>Submit a Deletion Request</span>
                </h3>

                <form name="data-removal" onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input type="hidden" name="form-name" value="data-removal" />

                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Enter your full name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-400 transition-all text-slate-900"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wide">Registered Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Enter your registered email address"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-400 transition-all text-slate-900"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wide">Registered Mobile Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-400 transition-all text-slate-900"
                    />
                    <span className="text-[10px] text-slate-400">Highly recommended if your account was registered using your phone number.</span>
                  </div>

                  {/* Reason */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="reason" className="text-xs font-bold text-slate-700 uppercase tracking-wide">Reason for Data Deletion</label>
                    <textarea
                      id="reason"
                      required
                      rows={4}
                      placeholder="Please tell us why you wish to delete your account (e.g. course completed, account no longer needed, privacy concerns)"
                      value={formState.reason}
                      onChange={(e) => setFormState({ ...formState, reason: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-400 transition-all resize-y min-h-[100px] text-slate-900"
                    />
                  </div>

                  {/* Consent checkbox */}
                  <div className="flex items-start gap-3 mt-2 cursor-pointer">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formState.consent}
                      onChange={(e) => setFormState({ ...formState, consent: e.target.checked })}
                      className="mt-1 h-4 w-4 cursor-pointer text-slate-800 rounded border-slate-300 focus:ring-slate-500"
                    />
                    <label htmlFor="consent" className="text-xs text-slate-600 font-medium leading-relaxed select-none cursor-pointer">
                      I understand that this action is permanent. All my test results, progress reports, and scanned images will be permanently erased.
                    </label>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-xs">
                      <AlertCircle size={16} />
                      <span>There was a problem submitting your request. Please try again or email us.</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="mt-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-all shadow-md disabled:opacity-50"
                    >
                      <Send size={14} className={status === "submitting" ? "animate-pulse" : ""} />
                      <span>{status === "submitting" ? "Submitting Request..." : "Submit Deletion Request"}</span>
                    </button>
                  </div>
                </form>
              </section>

              {/* Alternative Contact Option */}
              <section className="mt-6 border-t border-slate-100 pt-6">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Alternative Request Method</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  If you prefer, you can send your request directly via email to <a href="mailto:kalpajitbepary@gmail.com?subject=Data%20Removal%20Request" className="text-slate-900 hover:underline font-semibold">kalpajitbepary@gmail.com</a>. Please include your registered name, email address, and mobile number.
                </p>
              </section>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
