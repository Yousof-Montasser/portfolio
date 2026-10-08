"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Shield, Menu, X, Github, Linkedin, ExternalLink } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Philosophy", href: "#philosophy" },
    { label: "Systems & Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-[#080a0f]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Identifier */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-accent-emerald rounded p-1"
          >
            <div className="w-8 h-8 rounded border border-border-medium bg-surface-100 flex items-center justify-center text-accent-emerald group-hover:border-accent-emerald transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-neutral-100 group-hover:text-accent-emerald transition-colors font-mono">
                {PROFILE.name}
              </span>
              <span className="text-[11px] text-neutral-400 font-mono flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse"></span>
                AI & Systems Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-xs font-mono text-neutral-300 hover:text-white hover:bg-surface-100 rounded border border-transparent hover:border-border-subtle transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* External Links & System Status */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="text-[11px] font-mono text-neutral-400 px-2.5 py-1 rounded bg-surface-100 border border-border-subtle flex items-center gap-2">
              <Shield className="w-3 h-3 text-accent-emerald" />
              <span>CAIRO (UTC+2)</span>
            </div>
            <a
              href={PROFILE.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-neutral-400 hover:text-white hover:bg-surface-100 rounded border border-border-subtle transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-neutral-400 hover:text-white hover:bg-surface-100 rounded border border-border-subtle transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-border-subtle text-neutral-400 hover:text-white hover:bg-surface-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border-subtle bg-surface-50 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-mono text-neutral-300 hover:text-white hover:bg-surface-100 rounded"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-border-subtle flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-400">Yousof Montasser</span>
            <div className="flex items-center gap-3">
              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-300 hover:text-white"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-300 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
