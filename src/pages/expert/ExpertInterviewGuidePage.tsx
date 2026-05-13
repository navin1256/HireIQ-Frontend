import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ExpertInterviewGuidePage() {
  const { id } = useParams();

  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body-md selection:bg-[#10b981]/30 min-h-screen">
      <style>
        {`
          .glass-panel {
              background: rgba(15, 23, 42, 0.7);
              backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.08);
          }
          .ambient-glow {
              position: fixed;
              width: 400px;
              height: 400px;
              border-radius: 9999px;
              background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0) 70%);
              filter: blur(80px);
              z-index: 0;
          }
          textarea::placeholder {
              color: #434655;
          }
          /* Custom scrollbar */
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: transparent; }
          ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
        `}
      </style>

      <div className="ambient-glow top-[-100px] left-[-100px]"></div>
      <div className="ambient-glow bottom-[-100px] right-[-100px]"></div>

      {/* Fixed Sidebar (SideNavBar) */}
      <aside className="fixed left-0 top-0 h-full w-64 glass-panel flex flex-col py-lg px-md z-50 border-r border-white/10">
        <div className="mb-xl px-xs">
          <h1 className="font-h3 text-h3 font-bold text-[#b4c5ff] tracking-tight">TALENT_AI</h1>
          <p className="font-label-caps text-[#c3c6d7] mt-base uppercase tracking-widest text-xs">Expert Workspace</p>
        </div>

        <div className="mb-lg px-xs">
          <div className="flex items-center gap-sm bg-white/5 p-sm rounded-xl border border-[#fbbf24]/20 shadow-lg shadow-[#fbbf24]/5">
            <span className="material-symbols-outlined text-[#fbbf24]">workspace_premium</span>
            <div>
              <p className="text-[11px] font-bold text-[#fbbf24] tracking-wider uppercase">Top Interviewer</p>
              <p className="text-[13px] text-[#dce3f0] font-medium">Vetted Elite Status</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-xs overflow-y-auto">
          <Link to="/expert/dashboard" className="flex items-center gap-sm px-sm py-xs rounded-lg transition-all duration-200 text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#b4c5ff] group">
            <span className="material-symbols-outlined text-xl group-hover:text-[#b4c5ff]">dashboard</span>
            <span>Dashboard</span>
          </Link>
          
          {/* Active State: Interviews */}
          <div className="flex items-center gap-sm px-sm py-xs rounded-lg transition-all duration-200 text-[#b4c5ff] font-bold border-r-2 border-[#b4c5ff] bg-white/5">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>video_chat</span>
            <span>Interviews</span>
          </div>

          <a className="flex items-center gap-sm px-sm py-xs rounded-lg transition-all duration-200 text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#b4c5ff] group" href="#">
            <span className="material-symbols-outlined text-xl group-hover:text-[#b4c5ff]">groups</span>
            <span>Talent Pool</span>
          </a>
          <a className="flex items-center gap-sm px-sm py-xs rounded-lg transition-all duration-200 text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#b4c5ff] group" href="#">
            <span className="material-symbols-outlined text-xl group-hover:text-[#b4c5ff]">analytics</span>
            <span>Benchmarks</span>
          </a>
          <a className="flex items-center gap-sm px-sm py-xs rounded-lg transition-all duration-200 text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#b4c5ff] group" href="#">
            <span className="material-symbols-outlined text-xl group-hover:text-[#b4c5ff]">settings</span>
            <span>Settings</span>
          </a>
        </nav>

        <div className="mt-auto space-y-md border-t border-white/5 pt-lg">
          <div className="flex items-center justify-between px-sm">
            <span className="text-[#c3c6d7] font-medium text-sm">Available</span>
            <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-[#10b981]">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-4"></span>
            </button>
          </div>
          <div className="flex flex-col gap-xs">
            <a className="flex items-center gap-sm px-sm py-xs rounded-lg text-[#c3c6d7] hover:text-[#b4c5ff] text-sm transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">help</span>
              <span>Support</span>
            </a>
            <a className="flex items-center gap-sm px-sm py-xs rounded-lg text-[#c3c6d7] hover:text-[#b4c5ff] text-sm transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">description</span>
              <span>Documentation</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen relative z-10">
        {/* TopAppBar */}
        <header className="sticky top-0 w-full z-40 glass-panel border-b border-white/10">
          <div className="flex justify-between items-center h-20 px-lg max-w-container-max mx-auto">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Link to="/expert/dashboard" className="text-[#c3c6d7] hover:text-white transition-colors">
                  <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h2 className="text-[#dce3f0] font-h3 text-[20px] font-bold leading-tight">Interview Brief {id ? `(${id})` : ''}</h2>
              </div>
              <p className="text-[#c3c6d7] text-sm">Review expectations, prepare questions, and evaluate consistently.</p>
            </div>
            <div className="flex items-center gap-md">
              <button className="relative p-xs text-[#c3c6d7] hover:text-[#dce3f0] transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#ffb4ab] rounded-full"></span>
              </button>
              <button className="flex items-center gap-sm bg-[#10b981] text-white px-md py-sm rounded-full font-button hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#10b981]/20">
                <span className="material-symbols-outlined text-lg">play_circle</span>
                Join Interview Room
              </button>
              <div className="w-10 h-10 rounded-full border-2 border-[#b4c5ff]/20 overflow-hidden">
                <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzT2kaY2USN2ckzs2_TtFMxHX2T1Jqr7EL3JAz7cvgaZuvHePa8kIgo9pvhm-h18XsDhFBUQRnPy9wgM5gq7v61TwwvMgp7ElUXl1UfzovD2hiX8KUC4btnFugY20FGvZXcCIo94pQCFhBjkGrReEeGYfTfpQGh_dTTOD2LuAEpSatUY201c9BLlRJ6ZJQOP7f9MK1UFI5C07wecLTN5Q28u-BVJixIacAXzgmUP5iqiKYnz3zHkF-e3QvIOhek7Lq7Gf3yNB4dQ0" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="max-w-container-max mx-auto px-lg py-xl flex gap-lg">
          {/* Left Column (60%) */}
          <div className="w-3/5 space-y-md">
            
            {/* Role Overview Card */}
            <section className="glass-panel rounded-xl p-md">
              <div className="flex justify-between items-start mb-md">
                <div>
                  <div className="flex items-center gap-sm mb-base">
                    <h3 className="font-h3 text-[24px] text-[#dce3f0] font-bold">Senior React Developer</h3>
                    <span className="bg-[#b4c5ff]/10 text-[#b4c5ff] px-sm py-[2px] rounded-full text-[11px] font-bold uppercase border border-[#b4c5ff]/20 tracking-wider">Technical + Behavioral</span>
                  </div>
                  <p className="text-[#c3c6d7] flex items-center gap-xs">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    Company hidden (Stealth AI Startup)
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[#10b981] font-bold text-lg">$150.00</span>
                  <span className="font-label-caps text-[#c3c6d7] uppercase text-[10px]">Projected Payout</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-sm">
                <div className="flex items-center gap-xs bg-white/5 px-sm py-base rounded-full border border-white/5">
                  <span className="material-symbols-outlined text-sm text-[#c3c6d7]">calendar_today</span>
                  <span className="text-[#dce3f0] text-sm">Oct 24, 14:00 GMT</span>
                </div>
                <div className="flex items-center gap-xs bg-white/5 px-sm py-base rounded-full border border-white/5">
                  <span className="material-symbols-outlined text-sm text-[#c3c6d7]">timer</span>
                  <span className="text-[#dce3f0] text-sm">60 Min</span>
                </div>
                <div className="flex items-center gap-xs bg-white/5 px-sm py-base rounded-full border border-white/5">
                  <span className="material-symbols-outlined text-sm text-[#c3c6d7]">distance</span>
                  <span className="text-[#dce3f0] text-sm">Remote (San Francisco)</span>
                </div>
              </div>
            </section>

            {/* Evaluation Tags Grid */}
            <div className="grid grid-cols-4 gap-sm">
              <div className="glass-panel rounded-xl p-sm text-center border-[#10b981]/20">
                <p className="font-label-caps text-[#c3c6d7] text-[10px] uppercase mb-xs">Architecture</p>
                <p className="text-[#dce3f0] font-bold text-sm">React 18+</p>
              </div>
              <div className="glass-panel rounded-xl p-sm text-center">
                <p className="font-label-caps text-[#c3c6d7] text-[10px] uppercase mb-xs">Infrastructure</p>
                <p className="text-[#dce3f0] font-bold text-sm">System Design</p>
              </div>
              <div className="glass-panel rounded-xl p-sm text-center">
                <p className="font-label-caps text-[#c3c6d7] text-[10px] uppercase mb-xs">Performance</p>
                <p className="text-[#dce3f0] font-bold text-sm">API Scaling</p>
              </div>
              <div className="glass-panel rounded-xl p-sm text-center">
                <p className="font-label-caps text-[#c3c6d7] text-[10px] uppercase mb-xs">Process</p>
                <p className="text-[#dce3f0] font-bold text-sm">CI/CD Flow</p>
              </div>
            </div>

            {/* Job Description Card */}
            <section className="glass-panel rounded-xl p-md">
              <div className="flex items-center gap-sm mb-md border-b border-white/5 pb-sm">
                <span className="material-symbols-outlined text-[#b4c5ff]">description</span>
                <h4 className="font-bold text-[#dce3f0] uppercase tracking-wide text-sm">Job Description Brief</h4>
              </div>
              <div className="text-[#c3c6d7] space-y-md">
                <p>We are seeking a high-performing Senior React Developer to spearhead our frontend architecture for a real-time data streaming platform. The ideal candidate has mastered the intricacies of state management and high-concurrency UI updates.</p>
                <div>
                  <p className="text-[#dce3f0] font-semibold mb-sm">Key Requirements:</p>
                  <ol className="space-y-sm">
                    <li className="flex gap-sm">
                      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#b4c5ff]/10 text-[#b4c5ff] text-xs font-bold">1</span>
                      <span>Expert mastery of React including Hooks, Suspense, and Concurrent rendering.</span>
                    </li>
                    <li className="flex gap-sm">
                      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#b4c5ff]/10 text-[#b4c5ff] text-xs font-bold">2</span>
                      <span>Proven experience designing scalable frontend architectures for data-heavy applications.</span>
                    </li>
                    <li className="flex gap-sm">
                      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#b4c5ff]/10 text-[#b4c5ff] text-xs font-bold">3</span>
                      <span>Deep understanding of browser performance bottlenecks and optimization strategies.</span>
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Suggested Questions Section */}
            <section className="space-y-sm">
              <div className="flex items-center justify-between mb-sm">
                <h4 className="font-bold text-[#dce3f0] uppercase tracking-wide text-sm">Suggested Questions</h4>
                <span className="text-xs text-[#c3c6d7] italic">Powered by HireIQ AI Analysis</span>
              </div>

              {/* Question Accordion (Expanded) */}
              <div className="glass-panel rounded-xl overflow-hidden border-[#10b981]/30 shadow-lg shadow-[#10b981]/5">
                <div className="p-md flex items-center justify-between bg-white/5">
                  <div className="flex items-center gap-md">
                    <span className="bg-[#10b981]/10 text-[#10b981] font-bold px-sm py-base rounded-lg text-xs">Q1</span>
                    <span className="font-bold text-[#dce3f0]">How would you optimize rendering performance in a large React application?</span>
                  </div>
                  <span className="material-symbols-outlined text-[#c3c6d7]">expand_less</span>
                </div>
                <div className="p-md border-t border-white/5 bg-[#151c25]/30 space-y-md">
                  <div>
                    <p className="text-[10px] font-bold text-[#10b981] uppercase tracking-widest mb-sm">What to look for</p>
                    <p className="text-sm text-[#c3c6d7] leading-relaxed">Listen for mentions of <code>useMemo</code>, <code>useCallback</code>, memoization of expensive components, virtualization (e.g., react-window), and profiling with React DevTools.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-md">
                    <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-sm">
                      <p className="text-[10px] font-bold text-green-500 uppercase mb-xs">Strong Signals</p>
                      <ul className="text-xs text-[#c3c6d7] list-disc list-inside">
                        <li>Explains re-render triggers</li>
                        <li>Discusses reconciliation</li>
                      </ul>
                    </div>
                    <div className="bg-[#ffb4ab]/5 border border-[#ffb4ab]/20 rounded-lg p-sm">
                      <p className="text-[10px] font-bold text-[#ffb4ab] uppercase mb-xs">Weak Signals</p>
                      <ul className="text-xs text-[#c3c6d7] list-disc list-inside">
                        <li>Generic "it's fast" answers</li>
                        <li>Unnecessary use of memo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question Accordion (Collapsed) */}
              <div className="glass-panel rounded-xl overflow-hidden">
                <div className="p-md flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="flex items-center gap-md">
                    <span className="bg-[#b4c5ff]/10 text-[#b4c5ff] font-bold px-sm py-base rounded-lg text-xs">Q2</span>
                    <span className="font-bold text-[#dce3f0]">Describe your approach to global state management in 2024.</span>
                  </div>
                  <span className="material-symbols-outlined text-[#c3c6d7]">expand_more</span>
                </div>
              </div>

              <div className="glass-panel rounded-xl overflow-hidden">
                <div className="p-md flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="flex items-center gap-md">
                    <span className="bg-[#b4c5ff]/10 text-[#b4c5ff] font-bold px-sm py-base rounded-lg text-xs">Q3</span>
                    <span className="font-bold text-[#dce3f0]">Explain the trade-offs of Client-Side vs Server-Side rendering.</span>
                  </div>
                  <span className="material-symbols-outlined text-[#c3c6d7]">expand_more</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (40%) */}
          <div className="w-2/5 space-y-md">
            
            {/* Evaluation Framework (Sticky) */}
            <section className="glass-panel rounded-xl p-md sticky top-24">
              <div className="flex items-center gap-sm mb-md pb-sm border-b border-white/5">
                <span className="material-symbols-outlined text-[#fbbf24]">analytics</span>
                <h4 className="font-bold text-[#dce3f0] uppercase tracking-wide text-sm">Evaluation Framework</h4>
              </div>

              <div className="space-y-lg mb-lg">
                <div className="space-y-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#dce3f0]">Technical Depth</span>
                    <span className="text-xs text-[#c3c6d7]">Score Pending</span>
                  </div>
                  <div className="flex justify-between gap-1">
                    {/* Scale 1-10 */}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                      <button key={num} className="w-full aspect-square text-[10px] flex items-center justify-center rounded-full border border-white/10 text-[#c3c6d7] hover:border-[#b4c5ff] hover:text-[#b4c5ff] transition-all">
                        {num}
                      </button>
                    ))}
                    <button className="w-full aspect-square text-[10px] flex items-center justify-center rounded-full border border-[#fbbf24]/40 text-[#fbbf24] hover:bg-[#fbbf24]/10 transition-all">10</button>
                  </div>
                </div>

                <div className="space-y-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#dce3f0]">Problem Solving</span>
                    <span className="text-xs text-[#c3c6d7]">Score Pending</span>
                  </div>
                  <div className="flex justify-between gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                      <button key={num} className="w-full aspect-square text-[10px] flex items-center justify-center rounded-full border border-white/10 text-[#c3c6d7] hover:border-[#b4c5ff] transition-all">
                        {num}
                      </button>
                    ))}
                    <button className="w-full aspect-square text-[10px] flex items-center justify-center rounded-full border border-[#fbbf24]/40 text-[#fbbf24] transition-all">10</button>
                  </div>
                </div>

                <div className="space-y-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#dce3f0]">Communication</span>
                    <span className="text-xs text-[#c3c6d7]">Score Pending</span>
                  </div>
                  <div className="flex justify-between gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                      <button key={num} className="w-full aspect-square text-[10px] flex items-center justify-center rounded-full border border-white/10 text-[#c3c6d7] hover:border-[#b4c5ff] transition-all">
                        {num}
                      </button>
                    ))}
                    <button className="w-full aspect-square text-[10px] flex items-center justify-center rounded-full border border-[#fbbf24]/40 text-[#fbbf24] transition-all">10</button>
                  </div>
                </div>
              </div>

              {/* Score Legend Panel */}
              <div className="bg-[#151c25] rounded-lg p-sm border border-white/5 space-y-xs">
                <p className="text-[10px] font-bold text-[#c3c6d7] uppercase tracking-widest mb-base">Scoring Legend</p>
                <div className="flex items-center justify-between text-[11px] py-1 border-b border-white/5">
                  <span className="text-[#ffb4ab] font-medium">1 - 3</span>
                  <span className="text-[#c3c6d7]">Below expectations</span>
                </div>
                <div className="flex items-center justify-between text-[11px] py-1 border-b border-white/5">
                  <span className="text-[#8d90a0] font-medium">4 - 6</span>
                  <span className="text-[#c3c6d7]">Competent / Mid-level</span>
                </div>
                <div className="flex items-center justify-between text-[11px] py-1 border-b border-white/5">
                  <span className="text-[#10b981] font-medium">7 - 9</span>
                  <span className="text-[#c3c6d7]">Strong / Senior</span>
                </div>
                <div className="flex items-center justify-between text-[11px] py-1">
                  <span className="text-[#fbbf24] font-bold uppercase">10 Gold</span>
                  <span className="text-[#c3c6d7]">World-class expert</span>
                </div>
              </div>
            </section>

            {/* Private Interview Notes Card */}
            <section className="glass-panel rounded-xl p-md">
              <div className="flex items-center justify-between mb-md">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-[#b4c5ff]">edit_note</span>
                  <h4 className="font-bold text-[#dce3f0] uppercase tracking-wide text-sm">Private Notes</h4>
                </div>
                <span className="text-[10px] text-[#10b981] flex items-center gap-base">
                  <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse"></span>
                  Autosave saved just now
                </span>
              </div>
              <textarea className="w-full h-48 bg-[#080f17] border border-white/10 rounded-lg p-md text-[#dce3f0] text-sm focus:ring-1 focus:ring-[#10b981]/50 focus:border-[#10b981] outline-none transition-all resize-none" placeholder="Start typing your assessment notes here..."></textarea>
              
              <div className="mt-md">
                <p className="text-[10px] font-bold text-[#c3c6d7] uppercase tracking-widest mb-sm">Quick Insights</p>
                <div className="flex flex-wrap gap-xs">
                  <button className="bg-[#10b981]/10 text-[#10b981] text-[11px] px-sm py-base rounded-full border border-[#10b981]/20 hover:bg-[#10b981]/20 transition-colors">Strong communication</button>
                  <button className="bg-[#ffb4ab]/10 text-[#ffb4ab] text-[11px] px-sm py-base rounded-full border border-[#ffb4ab]/20 hover:bg-[#ffb4ab]/20 transition-colors">Weak testing</button>
                  <button className="bg-[#b4c5ff]/10 text-[#b4c5ff] text-[11px] px-sm py-base rounded-full border border-[#b4c5ff]/20 hover:bg-[#b4c5ff]/20 transition-colors">Architectural depth</button>
                  <button className="bg-white/5 text-[#c3c6d7] text-[11px] px-sm py-base rounded-full border border-white/10 hover:bg-white/10 transition-colors">+ Add tag</button>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
