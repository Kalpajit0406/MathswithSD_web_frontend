export default function MathBackground() {
  // Pre-defined layout locations and math symbols to prevent SSR/hydration mismatch
  const equations = [
    { text: "\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}", top: "8%", left: "5%", size: "text-sm md:text-base", delay: "delay-100", speed: "duration-[25s]" },
    { text: "f(x) = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}", top: "25%", left: "80%", size: "text-sm md:text-base", delay: "delay-300", speed: "duration-[22s]" },
    { text: "A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}", top: "72%", left: "12%", size: "text-xs md:text-sm", delay: "delay-500", speed: "duration-[28s]" },
    { text: "\\lim_{n \\to \\infty} (1 + \\frac{1}{n})^n = e", top: "45%", left: "88%", size: "text-xs md:text-sm", delay: "delay-200", speed: "duration-[24s]" },
    { text: "\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}", top: "15%", left: "48%", size: "text-sm", delay: "delay-700", speed: "duration-[26s]" },
    { text: "e^{i\\pi} + 1 = 0", top: "62%", left: "78%", size: "text-base md:text-lg font-bold", delay: "delay-400", speed: "duration-[20s]" },
    { text: "\\frac{d}{dx}[\\ln(x)] = \\frac{1}{x}", top: "85%", left: "52%", size: "text-xs md:text-sm", delay: "delay-900", speed: "duration-[30s]" },
    { text: "\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}", top: "35%", left: "15%", size: "text-xs md:text-sm", delay: "delay-150", speed: "duration-[27s]" },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.06] select-none select-none transition-opacity">
      {equations.map((eq, i) => (
        <div
          key={i}
          className={`absolute animate-pulse ${eq.speed} ${eq.delay} text-slate-800 dark:text-slate-100 font-serif italic ${eq.size} whitespace-nowrap`}
          style={{
            top: eq.top,
            left: eq.left,
          }}
        >
          {eq.text}
        </div>
      ))}
    </div>
  );
}
