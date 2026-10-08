"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Layers,
  ArrowRight,
  Shield,
  Activity,
  Cpu,
  Database,
  Crosshair,
  Search,
  Lock,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolio";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS[0].id);

  const categories = [
    "All",
    "Computer Vision & Verification",
    "LLM & Agent Systems",
    "Data Pipelines & Ingestion",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const activeProject =
    PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-border-subtle bg-surface-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-medium bg-surface-100 text-xs font-mono text-accent-cyan">
            <Layers className="w-3.5 h-3.5" />
            <span>FEATURED SYSTEMS & ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
            Production Engineering Case Studies
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Detailed engineering breakdowns of systems built for defense operations, intelligence analysis, autonomous drones, and safety-critical LLM agents.
            Each project highlights the failure modes encountered and the deterministic mechanisms engineered to solve them.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border-subtle">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                const matching =
                  cat === "All"
                    ? PROJECTS[0]
                    : PROJECTS.find((p) => p.category === cat);
                if (matching) setActiveProjectId(matching.id);
              }}
              className={`px-3.5 py-1.5 rounded text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? "bg-surface-300 text-white border border-border-highlight shadow-sm"
                  : "bg-surface-100 text-neutral-400 hover:text-neutral-200 border border-border-subtle hover:bg-surface-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Selector Cards (Horizontal Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filteredProjects.map((project) => {
            const isSelected = project.id === activeProjectId;
            return (
              <button
                key={project.id}
                onClick={() => setActiveProjectId(project.id)}
                className={`text-left p-5 rounded-lg border transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-surface-200 border-accent-emerald/80 shadow-glow-sm"
                    : "bg-surface-100 border-border-subtle hover:border-border-medium hover:bg-surface-100/90"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-50 border border-border-subtle text-neutral-400">
                      {project.organization}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">
                      {project.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white font-mono leading-snug">
                      {project.title.split("—")[0].trim()}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border-subtle/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400">
                    {project.metrics[0].label}: {project.metrics[0].value}
                  </span>
                  <span
                    className={`flex items-center gap-1 ${
                      isSelected ? "text-accent-emerald font-semibold" : "text-neutral-500"
                    }`}
                  >
                    Inspect System <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Project Deep Dive Panel */}
        <div className="rounded-xl border border-border-medium bg-surface-100 overflow-hidden shadow-2xl">
          {/* Top Panel Bar */}
          <div className="px-6 py-4 bg-surface-200 border-b border-border-subtle flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-emerald" />
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  CASE STUDY ARCHITECTURE
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-xs font-mono text-emerald-400">
                  {activeProject.category}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                {activeProject.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded bg-surface-300 hover:bg-surface-400 text-white text-xs font-mono flex items-center gap-2 border border-border-highlight transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Inspect Code on GitHub</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-10">
            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {activeProject.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-border-subtle bg-surface-50 text-center sm:text-left"
                >
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">
                    {m.label}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono mt-0.5">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Pipeline Visualization (Interactive SVG / Node Flow) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>SYSTEM DATA FLOW & VERIFICATION GATES</span>
                </h4>
                <span className="text-[11px] font-mono text-neutral-500">
                  {activeProject.architecture.stages.length} PIPELINE STAGES
                </span>
              </div>

              {/* Responsive Flow Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeProject.architecture.stages.map((stage) => (
                  <div
                    key={stage.step}
                    className={`p-4 rounded-lg border relative flex flex-col justify-between ${
                      stage.isValidation
                        ? "bg-emerald-950/20 border-emerald-800/60"
                        : "bg-surface-50 border-border-subtle"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-neutral-400">
                          STAGE 0{stage.step}
                        </span>
                        {stage.badge && (
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                              stage.badge.includes("Gate") || stage.badge.includes("Safety")
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                            }`}
                          >
                            {stage.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-white font-mono">
                        {stage.name}
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                        {stage.description}
                      </p>
                    </div>

                    <div className="pt-2 mt-2 border-t border-border-subtle/40 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                      <span>Status: Verified</span>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Two-Column Deep Dive: Problem vs. Reliability Strategy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* The Problem / Failure Modes */}
              <div className="p-6 rounded-lg border border-border-subtle bg-surface-50/70 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Engineering Problem & Failure Modes</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {activeProject.problem}
                </p>
              </div>

              {/* The Reliability / Validation Mechanism */}
              <div className="p-6 rounded-lg border border-emerald-900/60 bg-emerald-950/20 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase">
                  <Shield className="w-4 h-4" />
                  <span>Deterministic Reliability & Validation Strategy</span>
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed font-sans">
                  {activeProject.reliabilityMechanism}
                </p>
              </div>
            </div>

            {/* Implementation Details & Measurable Impact */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Key Engineering Deliverables & Implementation
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-300 font-sans">
                {activeProject.technicalDetails.map((detail, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded bg-surface-50 border border-border-subtle flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Applied */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Technology Stack & Protocols
              </div>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-surface-200 border border-border-subtle text-xs font-mono text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
