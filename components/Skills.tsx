import React from "react";
import { Cpu, Eye, Server, Database, Cloud, Code2, Wrench } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio";

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI & Machine Learning":
        return <Cpu className="w-4 h-4 text-accent-cyan" />;
      case "Computer Vision & Verification":
        return <Eye className="w-4 h-4 text-accent-emerald" />;
      case "Backend & Systems":
        return <Server className="w-4 h-4 text-accent-amber" />;
      case "Data Engineering & Pipelines":
        return <Database className="w-4 h-4 text-accent-cyan" />;
      case "Cloud & Databases":
        return <Cloud className="w-4 h-4 text-accent-emerald" />;
      case "Core Languages":
        return <Code2 className="w-4 h-4 text-neutral-300" />;
      default:
        return <Wrench className="w-4 h-4 text-neutral-300" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-border-subtle bg-surface-50/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-medium bg-surface-100 text-xs font-mono text-accent-cyan">
            <Wrench className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
            Engineering & Technology Stack
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Technologies and protocols proven in operational production systems. Structured by functional system domain rather than arbitrary proficiency percentages.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-border-subtle bg-surface-100 hover:border-border-medium transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 pb-3 border-b border-border-subtle">
                  <div className="p-2 rounded bg-surface-200 border border-border-subtle">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white font-mono">
                      {cat.category}
                    </h3>
                    <p className="text-[11px] text-neutral-400 font-sans">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-surface-200 border border-border-subtle/80 text-neutral-200 hover:border-border-highlight hover:text-white transition-colors"
                    >
                      {skill}
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
