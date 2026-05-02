import React from "react";
import { projects } from "./projects";

function App() {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto bg-[#0a0a0a] text-zinc-300 font-mono">
      <header className="mb-12 border-b border-zinc-800 pb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          DECA-LOG <span className="text-[#00ff41]">S2026</span>
        </h1>
        <p className="text-zinc-500 italic">
          "10 Projects. 24 Hours. Adnan Syed."
        </p>
      </header>

      <div className="grid gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:border-[#00ff41]/40 transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-[#00ff41]">{p.title}</h2>
                <div className="text-xs text-zinc-500 mt-1">
                  {p.tech.join(" | ")}
                </div>
              </div>
              <span
                className={`text-[10px] uppercase px-2 py-1 rounded border ${p.status === "Completed" ? "border-[#00ff41] text-[#00ff41]" : "border-yellow-600 text-yellow-600"}`}
              >
                {p.status}
              </span>
            </div>
            <div className="mt-4 bg-black/50 p-4 rounded border-l-2 border-[#00ff41]">
              <p className="text-sm leading-relaxed text-zinc-400">
                <span className="text-[#00ff41] mr-2">{">>"}</span>
                {p.aiEngineerNote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
