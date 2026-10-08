import React from "react";
import { GraduationCap, Languages, Award, BookOpen } from "lucide-react";
import { EDUCATION, CERTIFICATIONS_AND_LANGUAGES } from "@/data/portfolio";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-24 border-b border-border-subtle bg-surface-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-medium bg-surface-100 text-xs font-mono text-accent-emerald">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border border-border-subtle bg-surface-100 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-white font-mono">
                      {item.degree}
                    </h3>
                    <span className="text-xs font-mono text-emerald-400">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-neutral-300">
                    {item.institution} <span className="text-neutral-500">•</span> {item.location}
                  </div>
                  {item.details && (
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed pt-1">
                      {item.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Professional Credentials Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-medium bg-surface-100 text-xs font-mono text-accent-cyan">
                <Languages className="w-3.5 h-3.5" />
                <span>COMMUNICATION & PROFICIENCY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
                Languages & Fluency
              </h2>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_AND_LANGUAGES.spokenLanguages.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border border-border-subtle bg-surface-100 flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="text-base font-bold text-white font-mono">
                      {lang.language}
                    </div>
                    <div className="text-xs text-neutral-400">
                      Professional Working Proficiency
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded bg-surface-200 border border-border-subtle text-xs font-mono text-cyan-300">
                    {lang.proficiency}
                  </div>
                </div>
              ))}

              <div className="p-5 rounded-lg border border-border-subtle bg-surface-100/50 space-y-2 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2 text-neutral-300">
                  <Award className="w-4 h-4 text-accent-emerald" />
                  <span>IELTS Band 7 (C1 Level) Certified</span>
                </div>
                <p className="text-neutral-400 font-sans leading-relaxed">
                  Full professional fluency in both technical writing and real-time verbal collaboration in English and Arabic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
