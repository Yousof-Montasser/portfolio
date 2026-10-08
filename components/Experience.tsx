import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-border-subtle bg-surface-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-medium bg-surface-100 text-xs font-mono text-accent-emerald">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PROFESSIONAL TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
            Engineering Experience
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Direct production engineering experience across defense intelligence agencies and backend software platforms.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-border-medium ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Reticle / Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-surface-100 border-2 border-accent-emerald flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-xl border border-border-subtle bg-surface-100 group-hover:border-border-medium transition-all space-y-5">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border-subtle/80">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-mono flex items-center gap-2">
                      <span>{exp.role}</span>
                      <span className="text-emerald-400 font-normal text-base">@ {exp.company}</span>
                    </h3>
                    <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-200 border border-border-subtle text-xs font-mono text-neutral-300">
                      <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  {exp.summary}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 font-sans text-sm text-neutral-300">
                  {exp.bulletPoints.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-border-subtle/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-neutral-500 mr-2">Environment:</span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded bg-surface-200 border border-border-subtle text-xs font-mono text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
