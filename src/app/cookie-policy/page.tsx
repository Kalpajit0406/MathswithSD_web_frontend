import MathBackground from "@/components/MathBackground";

export const metadata = {
  title: "Cookie Policy — MathswithSD",
  description: "Official cookie policy for the MathswithSD website.",
};

export default function CookiePolicy() {
  return (
    <div className="relative py-16 lg:py-24 bg-slate-50 min-h-screen">
      <MathBackground />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Legal Policy</span>
          <h1 className="text-4xl font-extrabold text-slate-900">
            Cookie Policy
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: June 30, 2026
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed flex flex-col gap-6">
          
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device by your web browser when you visit websites. They are widely used to make websites function efficiently and to provide user settings persistence.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900">2. How We Use Cookies</h2>
            <p>
              Our website uses cookies strictly for essential preferences and interface configurations:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-1">
              <li><strong>Interface Preference:</strong> We store your chosen style theme (Dark Mode vs. Light Mode) in your browser's local storage so that your preference persists during subsequent page loads.</li>
              <li><strong>Security:</strong> If you perform operations in the student portal, session-related essential tokens may be set to prevent Cross-Site Request Forgery (CSRF).</li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900">3. Third-Party Cookies</h2>
            <p>
              We do not use any third-party tracking cookies, analytics tags (e.g. Google Analytics), or marketing beacons on our website.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900">4. Managing Your Cookies</h2>
            <p>
              You can disable or delete cookies via your web browser settings. Please note that disabling essential cookies may impact certain interface preferences, such as default dark mode persistence.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
