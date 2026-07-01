"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Play } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/student-guide", label: "Student Guide" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl overflow-hidden shadow-md shadow-blue-500/20">
              <Image
                src="/app_icon.jpg"
                alt="MathswithSD Logo"
                width={36}
                height={36}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-heading text-lg font-extrabold text-slate-900 tracking-tight">
              MathswithSD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                  pathname === link.href
                    ? "text-blue-600 font-extrabold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/download"
              className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-bold shadow-md shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Play size={14} className="fill-current" />
              <span>Download App</span>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white animate-in slide-in-from-top duration-350">
          <div className="space-y-1 px-4 pb-6 pt-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-3 py-2 text-base font-semibold transition-colors ${
                  pathname === link.href
                    ? "bg-slate-50 text-blue-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Link
                href="/download"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-white py-2.5 font-bold shadow-md shadow-blue-500/10"
              >
                <Play size={14} className="fill-current" />
                <span>Download App</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
