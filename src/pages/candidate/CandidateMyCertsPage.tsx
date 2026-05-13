import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CandidateMyCertsPage() {
  const [selectedOption, setSelectedOption] = useState<string>('B');

  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-['Inter'] min-h-screen relative z-0">
      <style>
        {`
          .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
              vertical-align: middle;
          }
          .glass-panel {
              background: rgba(15, 23, 42, 0.7);
              backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.08);
          }
          .ambient-glow {
              position: fixed;
              width: 600px;
              height: 600px;
              background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(13, 20, 29, 0) 70%);
              z-index: -1;
              filter: blur(80px);
          }
        `}
      </style>

      {/* Background Decoration */}
      <div className="ambient-glow top-[-200px] left-[-200px]"></div>
      <div className="ambient-glow bottom-[-200px] right-[-200px] opacity-10"></div>

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-[48px] h-[56px] bg-[#0d141d]/70 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="flex items-center gap-[16px]">
          <div className="w-8 h-8 rounded-lg bg-[#b4c5ff]/20 flex items-center justify-center border border-[#b4c5ff]/30">
            <span className="material-symbols-outlined text-[#b4c5ff] text-[20px]" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          </div>
          <span className="text-[32px] leading-[1.3] font-bold text-[18px] font-extrabold text-[#b4c5ff] tracking-tight font-['Plus_Jakarta_Sans']">React Developer Certification</span>
        </div>
        
        <div className="hidden md:flex flex-col items-center gap-1">
          <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#c3c6d7] text-[11px] uppercase tracking-widest">Question 12 of 30</span>
          <div className="w-[240px] h-1.5 bg-[#2e353f] rounded-full overflow-hidden">
            <div className="h-full bg-[#10b981] w-[40%] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
          </div>
        </div>
        
        <div className="flex items-center gap-[24px]">
          <div className="flex items-center gap-[8px] px-[16px] py-1.5 bg-[#232a34] rounded-full border border-white/5 shadow-inner">
            <span className="material-symbols-outlined text-[#ffb4ab] text-[18px]">timer</span>
            <span className="text-[15px] leading-[1] font-semibold text-[14px] text-[#dce3f0]">47:23 remaining</span>
          </div>
          <Link to="/candidate/certifications/react-dev/exam">
            <button className="bg-[#b4c5ff] text-[#002a78] text-[15px] leading-[1] font-semibold px-[16px] py-1.5 rounded-lg hover:brightness-110 transition-all active:scale-95">
              Finish Exam
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="pt-[100px] pb-[80px] px-[24px] max-w-[760px] mx-auto">
        
        {/* Question Section */}
        <section className="mb-[48px]">
          <div className="bg-[#111111] p-[48px] rounded-[24px] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-[48px] opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[120px]">quiz</span>
            </div>
            
            <div className="flex justify-between items-center mb-[16px]">
              <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#b4c5ff] tracking-[0.1em] uppercase text-[12px]">Question 12</span>
              <span className="bg-[#f59e0b15] text-[#fbbf24] px-[8px] py-0.5 rounded border border-[#fbbf2430] text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px] uppercase">Intermediate</span>
            </div>
            
            <h2 className="text-[32px] leading-[1.3] font-bold text-[#dce3f0] leading-snug mb-[24px] font-['Plus_Jakarta_Sans']">
              Which React hook should be used to memoize expensive calculations between renders?
            </h2>
            
            {/* Security Indicator */}
            <div className="flex items-center gap-[8px] text-[#c3c6d7]/60 text-[12px]">
              <span className="material-symbols-outlined text-[14px]">verified_user</span>
              <span>Secure Exam Environment Active</span>
            </div>
          </div>
        </section>

        {/* Options Grid */}
        <section className="space-y-[16px] mb-[48px]">
          {/* Option A */}
          <button 
            onClick={() => setSelectedOption('A')}
            className={`w-full flex items-center gap-[24px] p-[24px] rounded-xl transition-all group ${selectedOption === 'A' ? 'bg-[#10b98108] border-[#10b981] border-2 shadow-[0_0_15px_rgba(16,185,129,0.1)] relative overflow-hidden' : 'bg-[#151c25] border border-white/5 hover:bg-[#232a34]'}`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-colors ${selectedOption === 'A' ? 'bg-[#10b981] text-white' : 'bg-[#2e353f] text-[#c3c6d7] group-hover:text-[#b4c5ff]'}`}>A</div>
            <span className={`text-[18px] leading-[1.6] font-normal text-[#dce3f0] ${selectedOption === 'A' ? 'font-semibold' : ''}`}>useEffect</span>
            {selectedOption === 'A' && (
              <div className="absolute right-[24px] top-1/2 -translate-y-1/2">
                <span className="material-symbols-outlined text-[#10b981]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            )}
          </button>
          
          {/* Option B */}
          <button 
            onClick={() => setSelectedOption('B')}
            className={`w-full flex items-center gap-[24px] p-[24px] rounded-xl transition-all group ${selectedOption === 'B' ? 'bg-[#10b98108] border-[#10b981] border-2 shadow-[0_0_15px_rgba(16,185,129,0.1)] relative overflow-hidden' : 'bg-[#151c25] border border-white/5 hover:bg-[#232a34]'}`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-colors ${selectedOption === 'B' ? 'bg-[#10b981] text-white' : 'bg-[#2e353f] text-[#c3c6d7] group-hover:text-[#b4c5ff]'}`}>B</div>
            <span className={`text-[18px] leading-[1.6] font-normal text-[#dce3f0] ${selectedOption === 'B' ? 'font-semibold' : ''}`}>useMemo</span>
            {selectedOption === 'B' && (
              <div className="absolute right-[24px] top-1/2 -translate-y-1/2">
                <span className="material-symbols-outlined text-[#10b981]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            )}
          </button>

          {/* Option C */}
          <button 
            onClick={() => setSelectedOption('C')}
            className={`w-full flex items-center gap-[24px] p-[24px] rounded-xl transition-all group ${selectedOption === 'C' ? 'bg-[#10b98108] border-[#10b981] border-2 shadow-[0_0_15px_rgba(16,185,129,0.1)] relative overflow-hidden' : 'bg-[#151c25] border border-white/5 hover:bg-[#232a34]'}`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-colors ${selectedOption === 'C' ? 'bg-[#10b981] text-white' : 'bg-[#2e353f] text-[#c3c6d7] group-hover:text-[#b4c5ff]'}`}>C</div>
            <span className={`text-[18px] leading-[1.6] font-normal text-[#dce3f0] ${selectedOption === 'C' ? 'font-semibold' : ''}`}>useCallback</span>
            {selectedOption === 'C' && (
              <div className="absolute right-[24px] top-1/2 -translate-y-1/2">
                <span className="material-symbols-outlined text-[#10b981]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            )}
          </button>

          {/* Option D */}
          <button 
            onClick={() => setSelectedOption('D')}
            className={`w-full flex items-center gap-[24px] p-[24px] rounded-xl transition-all group ${selectedOption === 'D' ? 'bg-[#10b98108] border-[#10b981] border-2 shadow-[0_0_15px_rgba(16,185,129,0.1)] relative overflow-hidden' : 'bg-[#151c25] border border-white/5 hover:bg-[#232a34]'}`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-colors ${selectedOption === 'D' ? 'bg-[#10b981] text-white' : 'bg-[#2e353f] text-[#c3c6d7] group-hover:text-[#b4c5ff]'}`}>D</div>
            <span className={`text-[18px] leading-[1.6] font-normal text-[#dce3f0] ${selectedOption === 'D' ? 'font-semibold' : ''}`}>useRef</span>
            {selectedOption === 'D' && (
              <div className="absolute right-[24px] top-1/2 -translate-y-1/2">
                <span className="material-symbols-outlined text-[#10b981]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            )}
          </button>
        </section>

        {/* Exam Controls */}
        <footer className="flex items-center justify-between pt-[24px] border-t border-white/5">
          <button className="flex items-center gap-[8px] text-[15px] leading-[1] font-semibold text-[#c3c6d7] hover:text-[#dce3f0] transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span>Previous</span>
          </button>
          
          <button className="text-[15px] leading-[1] font-semibold text-[#c3c6d7]/70 hover:text-[#dce3f0] transition-colors px-[24px] py-2 hover:bg-white/5 rounded-lg">
            Skip Question
          </button>
          
          <button className="flex items-center gap-[8px] text-[15px] leading-[1] font-semibold bg-[#10b981] text-white px-[48px] py-[24px] rounded-full shadow-[0_4px_12px_rgba(16,185,129,0.3)] hover:brightness-110 active:scale-95 transition-all">
            <span>Next Question</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </footer>

        {/* Bottom Meta */}
        <div className="mt-[48px] flex justify-center items-center gap-[8px] text-[12px] text-[#c3c6d7]/50">
          <span className="material-symbols-outlined text-[14px]">cloud_done</span>
          <span>Progress auto-saved 2 seconds ago</span>
        </div>
      </main>

      {/* Side Help/Context (Hidden on Mobile) */}
      <div className="fixed bottom-[24px] right-[24px] hidden lg:flex flex-col gap-[16px]">
        <button className="w-12 h-12 rounded-full bg-[#2e353f] border border-white/10 flex items-center justify-center hover:bg-[#b4c5ff]/10 hover:text-[#b4c5ff] transition-all shadow-lg" title="Get Help">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
        <button className="w-12 h-12 rounded-full bg-[#2e353f] border border-white/10 flex items-center justify-center hover:bg-[#ffb4ab]/10 hover:text-[#ffb4ab] transition-all shadow-lg" title="Report Issue">
          <span className="material-symbols-outlined">flag</span>
        </button>
      </div>
    </div>
  );
}
