import React from "react";
import Link from "next/link";
import { Terminal, ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-foreground font-mono">
      <div className="max-w-md w-full p-8 rounded-xl border border-border-medium bg-surface-100 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold">
            <AlertTriangle className="w-4 h-4" />
            <span>ROUTING INVARIANT VIOLATION</span>
          </div>
          <span className="text-xs text-neutral-500">HTTP 404</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-white">404: State Out of Bounds</h1>
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            The requested URI path is not registered in the routing table. The deterministic gateway has rejected this target to maintain system integrity.
          </p>
        </div>

        <div className="p-3 rounded bg-surface-50 border border-border-subtle text-[11px] text-neutral-400 space-y-1">
          <div>Status: REJECTED</div>
          <div>Action: Fallback to root coordinate</div>
        </div>

        <Link
          href="/"
          className="w-full py-2.5 px-4 rounded bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Primary Telemetry</span>
        </Link>
      </div>
    </div>
  );
}
