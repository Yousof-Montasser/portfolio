"use client";

import React, { useState } from "react";
import {
  ArrowDown,
  Terminal,
  ShieldCheck,
  Cpu,
  Github,
  Linkedin,
  Mail,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Layers,
  Database,
  Crosshair,
} from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export const Hero: React.FC = () => {
  // Interactive mini validation simulation state
  const [telemetryMode, setTelemetryMode] = useState<"standard" | "anomaly">("anomaly");

  const telemetryScenarios = {
    standard: {
      rawModel: "LAT 30.0444°N | LON 31.2357°E | HDG 284°",
      confidence: "98.4%",
      stateStatus: "NOMINAL",
      gateAction: "PASSED TO WINTAK",
      gateType: "VALIDATED",
      compensated: "True (Within dynamic window)",
    },
    anomaly: {
      rawModel: "LAT 30.8999°N | LON 39.9999°E | HDG 042°",
      confidence: "82.1% (Glared HUD OCR)",
      stateStatus: "KINEMATIC VIOLATION",
      gateAction: "SUBSTITUTED WITH KALMAN PREDICTION",
      gateType: "CORRECTED",
      compensated: "LAT 30.0451°N | LON 31.2362°E | HDG 284.2°",
    },
  };

  const currentSim = telemetryScenarios[telemetryMode];

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border-subtle bg-grid-pattern overflow-hidden">
      {/* Subtle radial ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Engineering Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-medium bg-surface-100/90 text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
              <span className="text-neutral-400">ROLE:</span>
              <span className="text-white font-medium">{PROFILE.role}</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400">{PROFILE.location}</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-mono">
                {PROFILE.name}
              </h1>
              <p className="text-xl sm:text-2xl text-emerald-400 font-mono font-medium leading-relaxed max-w-2xl">
                &ldquo;{PROFILE.headline}&rdquo;
              </p>
            </div>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl">
              Production AI engineer specializing in designing deterministic validation boundaries around probabilistic models.
              Proven track record delivering 50fps computer vision pipelines with Kalman-based error compensation, 
              on-premise RAG ingestion handling thousands of documents daily, closed-loop drone tracking, and resilient AWS backend services.
            </p>

            {/* Technical Highlights / Proof Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded border border-border-subtle bg-surface-50/80">
                <div className="text-xs font-mono text-neutral-400">CV & State Estimation</div>
                <div className="text-sm font-semibold text-white mt-1">50fps HUD Pipeline</div>
                <div className="text-[11px] text-emerald-400 font-mono mt-0.5">80% → ~100% Accuracy</div>
              </div>
              <div className="p-3 rounded border border-border-subtle bg-surface-50/80">
                <div className="text-xs font-mono text-neutral-400">On-Premise RAG</div>
                <div className="text-sm font-semibold text-white mt-1">OSINT Ingestion</div>
                <div className="text-[11px] text-cyan-400 font-mono mt-0.5">1.5k–3.5k Docs / Day</div>
              </div>
              <div className="p-3 rounded border border-border-subtle bg-surface-50/80 col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-neutral-400">Agent Safety</div>
                <div className="text-sm font-semibold text-white mt-1">Tool Calling Runtime</div>
                <div className="text-[11px] text-amber-400 font-mono mt-0.5">Enforced Confirmation</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-sm font-mono flex items-center gap-2 transition-colors shadow-glow-sm"
              >
                <span>View Systems & Code</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#philosophy"
                className="px-4 py-2.5 rounded border border-border-medium bg-surface-100 hover:bg-surface-200 text-neutral-200 hover:text-white text-sm font-mono transition-colors"
              >
                Engineering Philosophy
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={PROFILE.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded border border-border-medium bg-surface-100 hover:bg-surface-200 text-neutral-300 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                  title="Inspect GitHub Repositories"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded border border-border-medium bg-surface-100 hover:bg-surface-200 text-neutral-300 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                  title="View LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="p-2.5 rounded border border-border-medium bg-surface-100 hover:bg-surface-200 text-neutral-300 hover:text-white transition-colors"
                  aria-label="Email Yousof"
                  title="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Telemetry / Live Verification Terminal Widget */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-border-medium bg-surface-100 shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="px-4 py-3 bg-surface-200 border-b border-border-subtle flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-neutral-300">
                    telemetry_validation_runtime.py
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                  LIVE RUNTIME
                </div>
              </div>

              {/* Interactive Mode Selector */}
              <div className="p-3 bg-surface-50 border-b border-border-subtle flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">SIMULATE PIPELINE EVENT:</span>
                <div className="flex items-center gap-1 bg-surface-200 p-0.5 rounded border border-border-subtle">
                  <button
                    onClick={() => setTelemetryMode("standard")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      telemetryMode === "standard"
                        ? "bg-surface-300 text-white font-medium"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    Nominal Frame
                  </button>
                  <button
                    onClick={() => setTelemetryMode("anomaly")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      telemetryMode === "anomaly"
                        ? "bg-amber-950/60 text-amber-300 border border-amber-800/40 font-medium"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    Model Glare Anomaly
                  </button>
                </div>
              </div>

              {/* Terminal Execution Body */}
              <div className="p-4 space-y-4 font-mono text-xs">
                {/* Step 1: Raw Observation */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-neutral-400" />
                      STAGE 01: RAW MODEL INFERENCE (50 FPS)
                    </span>
                    <span className="text-neutral-500">t = 20.040s</span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-50 border border-border-subtle text-neutral-300">
                    <div>{currentSim.rawModel}</div>
                    <div className="text-[11px] text-neutral-500 mt-1">
                      Model Raw Confidence: {currentSim.confidence}
                    </div>
                  </div>
                </div>

                {/* Step 2: Verification Gate */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent-cyan" />
                      STAGE 02: KINEMATIC BOUNDARY CHECK
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        telemetryMode === "anomaly"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      }`}
                    >
                      {currentSim.stateStatus}
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-50 border border-border-subtle space-y-1.5">
                    <div className="text-neutral-400">
                      Kalman Dynamic Gate: <span className="text-neutral-200">v_max &lt; 420 kts, Δθ &lt; 3.2°/s</span>
                    </div>
                    {telemetryMode === "anomaly" ? (
                      <div className="flex items-start gap-2 text-amber-300/90 text-[11px] bg-amber-950/30 p-1.5 rounded border border-amber-900/50">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
                        <span>Δpos exceeded physical limit (30.89°N would require Mach 4.2). Raw model discarded.</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Physical consistency verified. Innovation residual within 1.2σ.</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Step 3: Output State */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Crosshair className="w-3.5 h-3.5 text-accent-emerald" />
                      STAGE 03: COMMITTED TELEMETRY (WINTAK CoT)
                    </span>
                    <span className="text-accent-emerald text-[11px] font-bold">STREAMED</span>
                  </div>
                  <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-800/40 text-emerald-200">
                    <div className="text-[11px] text-emerald-400 font-semibold mb-1">
                      {currentSim.gateAction}
                    </div>
                    <div className="text-neutral-200">
                      {telemetryMode === "anomaly"
                        ? currentSim.compensated
                        : currentSim.rawModel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2.5 bg-surface-200 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3 text-emerald-400" />
                  Deterministic boundary enforced
                </span>
                <span className="text-neutral-500">Vantage Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
