import MathBackground from "@/components/MathBackground";

export const metadata = {
  title: "Accessibility Statement — MathsWithSD",
  description: "Official accessibility statement and WCAG AA compliance status for the MathsWithSD platform.",
};

export default function Accessibility() {
  return (
    <div className="relative py-16 lg:py-24 bg-slate-50 min-h-screen">
      <MathBackground />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Universal Access</span>
          <h1 className="text-4xl font-extrabold text-slate-900">
            Accessibility Statement
          </h1>
          <p className="text-sm text-slate-400">
            Commitment to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA conformance.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed flex flex-col gap-6">
          
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900">1. Commitment to Accessibility</h2>
            <p>
              At MathsWithSD, we believe that education must be accessible to everyone, regardless of physical ability or device limitations. We actively work to design and build our mobile and web applications to meet the Web Content Accessibility Guidelines (WCAG 2.1) Level AA standard.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900">2. Conformance Measures</h2>
            <p>
              To satisfy Level AA conformance, we implement the following standards:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-1">
              <li><strong>Contrast Ratios:</strong> Standard text contrast is maintained above a 4.5:1 ratio against backgrounds (and 3:1 for large headers).</li>
              <li><strong>KaTeX Text Alternatives:</strong> Math expressions rendered via KaTeX CDN include aria-label metadata and raw LaTeX strings in the DOM, allowing screen readers to translate symbols accurately.</li>
              <li><strong>Keyboard Navigation:</strong> Interactive elements (such as buttons, navigation drawers, and tab switchers) include semantic HTML structures supporting keyboard focus indicators and Tab navigation.</li>
              <li><strong>Screen Scaling:</strong> Fluid responsive designs support text zooming up to 200% without breaking layouts or truncating critical exam instructions.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900">3. Technical Specifications</h2>
            <p>
              Accessibility of the MathsWithSD portal relies on the following technologies to work with browser and screen reader configurations:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-1">
              <li>HTML5 Semantic tags</li>
              <li>CSS3 variables and flex layouts</li>
              <li>ARIA (Accessible Rich Internet Applications) attributes</li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-900">4. Feedback & Contact</h2>
            <p>
              If you experience accessibility barriers while using our student app or website, please contact Kalpajit Bepary at <a href="mailto:kalpajit.dev@mathswithsd.in" className="text-cyan-500 hover:underline">kalpajit.dev@mathswithsd.in</a>. We will address potential improvements within 7 business days.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
