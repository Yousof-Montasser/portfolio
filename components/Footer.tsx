import React from "react";
import { Terminal, Shield, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#06080c] border-t border-border-subtle text-xs font-mono text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border-subtle">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Terminal className="w-4 h-4 text-accent-emerald" />
              <span>{PROFILE.name}</span>
            </div>
            <p className="text-neutral-400 font-sans max-w-md">
              AI Engineer & Software Engineer based in Cairo, Egypt. Specializing in production validation layers, computer vision, and on-premise RAG systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#philosophy"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#projects"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="p-2 rounded bg-surface-100 border border-border-subtle hover:text-white hover:bg-surface-200 transition-colors flex items-center gap-1"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Top</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {PROFILE.name}. All verified systems and portfolio artifacts.
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-500">
              <Shield className="w-3 h-3" />
              <span>DETERMINISTIC RELIABILITY</span>
            </span>
            <span>•</span>
            <span>NEXT.JS + TAILWIND CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
