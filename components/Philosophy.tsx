import React from "react";
import { ShieldCheck, Cpu, Database, Network, GitCommit, CheckCircle2 } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export const Philosophy: React.FC = () => {
  const tenets = [
    {
      icon: ShieldCheck,
      title: "Deterministic Validation over Benchmark Chasing",
      subtitle: "Verification Engineering",
      color: "emerald",
      badge: "Invariants",
      description:
        "A model boasting 95% accuracy in an evaluation notebook will produce 180 incorrect inferences every minute when running on a 50fps video feed. In production, raw model inference is never trusted blindly. We wrap models in deterministic state estimation, kinematic bounds, and fallback estimators so that out-of-distribution hallucinations are trapped and corrected before corrupting downstream systems.",
    },
    {
      icon: Cpu,
      title: "The LLM Proposes, The Runtime Enforces",
      subtitle: "Agent Safety Runtimes",
      color: "cyan",
      badge: "Zero-Trust Agent",
      description:
        "Prompt engineering cannot guarantee system safety. If an agent has access to tools that mutate state, execute database queries, or delete resources, prompt-level guardrails will eventually fail under adversarial inputs or edge cases. Safety-critical logic must be enforced in deterministic code: hardcoded confirmation gates, parameter range validation, and strictly typed schemas.",
    },
    {
      icon: Database,
      title: "Idempotent Ingestion & Source Provenance",
      subtitle: "Data Integrity",
      color: "amber",
      badge: "Provenance",
      description:
        "Retrieval-Augmented Generation (RAG) is only as truthful as its underlying ingestion pipeline. Ingestion systems must use cursor-based incremental sync to handle unstable networks, preserve immutable source provenance through to final retrieval chunks, and maintain deterministic ID mapping to replace revised documents rather than duplicate vector representations.",
    },
    {
      icon: Network,
      title: "Closed-Loop Hardware & Protocol Verification",
      subtitle: "Systems & Control",
      color: "rose",
      badge: "Real-Time Systems",
      description:
        "Connecting probabilistic models to physical flight controllers or tactical GIS systems (such as WinTAK Cursor-on-Target) demands strict latency budgets and mathematical failsafes. When sensors suffer glare or occlusion, the system must maintain trajectory continuity rather than injecting erratic control signals.",
    },
  ];

  return (
    <section id="philosophy" className="py-20 md:py-28 border-b border-border-subtle bg-surface-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-medium bg-surface-100 text-xs font-mono text-accent-emerald">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald"></span>
            ENGINEERING PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
            When Models Are Wrong: Architectural Reliability
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            {PROFILE.philosophy.thesis}
          </p>
        </div>

        {/* Central Axiom Banner */}
        <div className="p-6 rounded-lg border border-emerald-900/60 bg-emerald-950/20 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
              Core Design Axiom
            </div>
            <div className="text-lg md:text-xl font-mono text-white font-bold">
              &ldquo;{PROFILE.philosophy.corePrinciple}&rdquo;
            </div>
          </div>
          <div className="px-3 py-1.5 rounded border border-emerald-700/50 bg-emerald-900/30 text-xs font-mono text-emerald-300 shrink-0">
            Defense & Production Tested
          </div>
        </div>

        {/* 4 Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tenets.map((tenet, idx) => {
            const Icon = tenet.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border-subtle bg-surface-100/90 hover:border-border-medium transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded border border-border-medium bg-surface-200 flex items-center justify-center text-accent-emerald">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-neutral-400">{tenet.subtitle}</div>
                      <div className="text-sm font-semibold text-white font-mono">{tenet.title}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-200 border border-border-subtle text-neutral-300">
                    {tenet.badge}
                  </span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                  {tenet.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contrast Table: Standard AI Prototype vs. Production AI System */}
        <div className="mt-14 rounded-lg border border-border-medium bg-surface-100 overflow-hidden">
          <div className="px-5 py-3.5 bg-surface-200 border-b border-border-subtle flex items-center justify-between">
            <span className="text-xs font-mono text-white font-semibold">
              ARCHITECTURE COMPARISON: PROTOTYPE vs. PRODUCTION ENGINEERING
            </span>
            <span className="text-[11px] font-mono text-neutral-400">DESIGN SPECIFICATION</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-50 text-neutral-400">
                  <th className="p-3.5 pl-5 font-semibold">Vector / Dimension</th>
                  <th className="p-3.5 font-semibold text-neutral-400">Fragile Prototype Approach</th>
                  <th className="p-3.5 pr-5 font-semibold text-emerald-400">Production AI Engineering Approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle text-neutral-300">
                <tr>
                  <td className="p-3.5 pl-5 text-white font-medium">Vision Telemetry</td>
                  <td className="p-3.5 text-neutral-400">Trust raw OCR readings directly; suffer jumpy telemetry</td>
                  <td className="p-3.5 pr-5 text-emerald-300">
                    Kalman filter kinematic boundary check; dynamically substitute state on failure
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 pl-5 text-white font-medium">Agent Tool Execution</td>
                  <td className="p-3.5 text-neutral-400">Prompt system message: &ldquo;Please ask user before deleting&rdquo;</td>
                  <td className="p-3.5 pr-5 text-emerald-300">
                    Deterministic interceptor stops execution in Python runtime until explicit authorization
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 pl-5 text-white font-medium">RAG Document Ingestion</td>
                  <td className="p-3.5 text-neutral-400">Append new chunk embeddings whenever webhook fires; causes vector duplicates</td>
                  <td className="p-3.5 pr-5 text-emerald-300">
                    Persisted report-to-document ID map; idempotent upsert replaces stale versions
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 pl-5 text-white font-medium">Search Retrieval</td>
                  <td className="p-3.5 text-neutral-400">Pure dense cosine similarity (misses exact part numbers and codes)</td>
                  <td className="p-3.5 pr-5 text-emerald-300">
                    Hybrid retrieval: SQLite FTS5 lexical + dense embeddings merged via Reciprocal Rank Fusion
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
