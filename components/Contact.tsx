"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, ExternalLink, MapPin, Send } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-border-subtle bg-surface-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-medium bg-surface-100 text-xs font-mono text-accent-emerald">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Interested in production AI reliability, computer vision pipelines, or resilient backend engineering? 
            Reach out directly via email or connect on LinkedIn and GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card with 1-click copy */}
          <div className="p-6 rounded-xl border border-border-medium bg-surface-100 hover:border-accent-emerald transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-800/60 flex items-center justify-center text-accent-emerald">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white font-mono">Direct Email</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Primary communication channel</p>
              </div>
              <div className="p-2.5 rounded bg-surface-200 border border-border-subtle text-xs font-mono text-neutral-200 break-all select-all">
                {PROFILE.contact.email}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={copyEmail}
                className="flex-1 py-2 px-3 rounded bg-surface-200 hover:bg-surface-300 text-neutral-200 hover:text-white border border-border-subtle text-xs font-mono flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-accent-emerald" />
                    <span className="text-accent-emerald">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="py-2 px-3 rounded bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs font-mono flex items-center justify-center transition-colors"
                title="Open default email client"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-xl border border-border-medium bg-surface-100 hover:border-accent-cyan transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-800/60 flex items-center justify-center text-accent-cyan">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white font-mono">LinkedIn Profile</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Professional network & updates</p>
              </div>
              <div className="p-2.5 rounded bg-surface-200 border border-border-subtle text-xs font-mono text-neutral-200 truncate">
                linkedin.com/in/{PROFILE.contact.linkedinUsername}
              </div>
            </div>

            <a
              href={PROFILE.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded bg-surface-200 hover:bg-surface-300 text-neutral-200 hover:text-white border border-border-subtle text-xs font-mono flex items-center justify-center gap-2 transition-colors"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="p-6 rounded-xl border border-border-medium bg-surface-100 hover:border-neutral-400 transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-surface-200 border border-border-subtle flex items-center justify-center text-neutral-200">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white font-mono">GitHub Repositories</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Open-source code & architectures</p>
              </div>
              <div className="p-2.5 rounded bg-surface-200 border border-border-subtle text-xs font-mono text-neutral-200 truncate">
                github.com/{PROFILE.contact.githubUsername}
              </div>
            </div>

            <a
              href={PROFILE.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded bg-surface-200 hover:bg-surface-300 text-neutral-200 hover:text-white border border-border-subtle text-xs font-mono flex items-center justify-center gap-2 transition-colors"
            >
              <span>Inspect Repositories</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
