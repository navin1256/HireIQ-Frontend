import React from 'react';
import { Link } from 'react-router-dom';

export default function CandidateMyCertificatesPage() {
  return (
    <div className="bg-[#131b2e] text-[#f0f4fa] min-h-screen font-body-md dark">
      <style>
        {`
          .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
              vertical-align: middle;
          }
          .glass-card {
              background: rgba(255, 255, 255, 0.03);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.08);
          }
          /* Custom scrollbar */
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: transparent; }
          ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
        `}
      </style>

      {/* Side Navigation Shell */}
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-white/10 bg-[#0b101e] flex flex-col py-8 z-50">
        <div className="px-6 mb-10">
          <h1 className="font-h3 text-[22px] font-bold text-white tracking-tight">HireIQ</h1>
          <p className="font-label-caps text-[10px] font-bold tracking-widest text-[#b4c5ff] uppercase mt-1">Candidate Portal</p>
        </div>
        
        <nav className="flex-1 space-y-2 px-3">
          <Link to="/candidate/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors group">
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            <span className="font-medium text-[14px]">Dashboard</span>
          </Link>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors group" href="#">
            <span className="material-symbols-outlined text-[20px]">work</span>
            <span className="font-medium text-[14px]">Applications</span>
          </a>
          
          <div className="pt-4 pb-2 px-3">
            <p className="font-label-caps text-[10px] font-bold text-[#434655] uppercase tracking-wider">Preparation</p>
          </div>
          
          <Link to="/candidate/practice" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors group">
            <span className="material-symbols-outlined text-[20px]">psychology</span>
            <span className="font-medium text-[14px]">Practice Mode</span>
          </Link>
          
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#b4c5ff] bg-[#b4c5ff]/10 font-bold">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            <span className="text-[14px]">Certifications</span>
          </div>
        </nav>
        
        <div className="mt-auto px-3 border-t border-white/10 pt-4">
          <Link to="/candidate/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors group">
            <span className="material-symbols-outlined text-[20px]">settings</span>
            <span className="font-medium text-[14px]">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen relative overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute top-[-20%] left-[10%] w-[40%] h-[40%] rounded-full bg-[#5a00c6]/10 blur-[120px] pointer-events-none"></div>

        {/* Top Navigation Bar */}
        <header className="sticky top-0 w-full z-40 bg-[#131b2e]/80 backdrop-blur-md border-b border-white/10 flex justify-between items-center px-8 py-4 h-[72px]">
          <div className="flex items-center gap-4">
            <Link to="/candidate/certifications" className="text-[13px] font-medium text-[#8d90a0] hover:text-white transition-colors flex items-center gap-1">
               <span className="material-symbols-outlined text-[16px]">arrow_back</span> Catalog
            </Link>
            <div className="h-4 w-[1px] bg-white/20"></div>
            <h2 className="font-h3 text-[18px] font-bold text-white">My Certificates</h2>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
              <button className="p-2 text-[#8d90a0] hover:text-white transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#ffb4ab] rounded-full"></span>
              </button>
              <div className="w-9 h-9 rounded-full bg-[#2e3039] overflow-hidden border border-white/20">
                <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmfttdHOqsdR2BRQ-P6RC777vAKO1wcNu8t7EZFYaRIN5rfNjzSvMAAo7pRUmEveQb68AmZx7sSG4_2mGn5APpClkBP0xD94IfLNGAYOYNSpMPXfOjrPldtpPH2pyeIzcyT_2vhvny_fkQ5R7tV1YZSC_yXyz3L4OIJ4eboD4yF2MjNphjlAIE3MRZuDSXng1BqrGROEF3-OMLnxQ3QLhB2MHWycJWVSIZML7jtcWHRtc4kNh9SbH-ix38scG_CvIDisdiNAn0LdY" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <div className="max-w-[1000px] mx-auto p-8 space-y-10 relative z-10">
          
          <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
             <div>
                <h1 className="font-h2 text-[32px] font-bold text-white mb-2">My Credentials</h1>
                <p className="text-[#c3c6d7] text-[15px]">Manage and share your verified HireIQ certifications.</p>
             </div>
             <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-bold text-[13px] border border-white/10 transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">share</span> Share Profile
             </button>
          </div>

          <div className="space-y-8">
             
             {/* Certificate Item 1 */}
             <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group">
                {/* Visual Badge representing Certificate */}
                <div className="w-full md:w-[280px] shrink-0 aspect-[4/3] rounded-xl bg-gradient-to-br from-[#1a2333] to-[#0b101e] border border-white/10 relative overflow-hidden flex flex-col items-center justify-center p-6 shadow-xl">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#eaddff]/10 rounded-full blur-[40px]"></div>
                   <div className="w-16 h-16 rounded-full bg-[#eaddff]/10 border border-[#eaddff]/30 flex items-center justify-center mb-4 relative z-10">
                      <span className="material-symbols-outlined text-[#eaddff] text-[32px]">html</span>
                   </div>
                   <h3 className="font-h3 text-[18px] font-bold text-center text-white relative z-10 mb-1">Frontend Fundamentals</h3>
                   <p className="text-[#8d90a0] text-[10px] tracking-widest uppercase font-bold relative z-10 mb-4">Certified Expert</p>
                   
                   <div className="mt-auto w-full border-t border-white/10 pt-3 text-center relative z-10">
                      <p className="font-mono text-[#c3c6d7] text-[10px]">ID: HIQ-FF-2024-8921</p>
                   </div>
                </div>

                {/* Details */}
                <div className="flex-1 w-full">
                   <div className="flex justify-between items-start mb-4">
                      <div>
                         <div className="flex items-center gap-2 mb-2">
                            <h2 className="font-h3 text-[24px] font-bold text-white">Frontend Fundamentals</h2>
                            <span className="bg-[#2db560]/10 text-[#2db560] px-2 py-0.5 rounded text-[11px] font-bold border border-[#2db560]/20 flex items-center gap-1">
                               <span className="material-symbols-outlined text-[14px]">verified</span> Active
                            </span>
                         </div>
                         <p className="text-[#8d90a0] text-[13px]">Issued: Oct 12, 2023 • Valid until: Oct 12, 2025</p>
                      </div>
                      <div className="text-right">
                         <p className="text-[#c3c6d7] text-[12px] uppercase font-bold tracking-wider mb-1">Score</p>
                         <p className="text-[#b4c5ff] font-bold text-[24px]">92<span className="text-[14px] text-[#8d90a0]">/100</span></p>
                      </div>
                   </div>

                   <div className="mb-6">
                      <p className="text-[#c3c6d7] text-[14px] leading-relaxed mb-4">
                         Demonstrated mastery in core web technologies including HTML semantic structure, modern CSS layout systems (Flexbox/Grid), accessibility standards, and vanilla JavaScript DOM manipulation without frameworks.
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                         <span className="px-3 py-1 bg-[#2e3039] rounded-full text-[#c3c6d7] text-[12px] border border-white/5">HTML5</span>
                         <span className="px-3 py-1 bg-[#2e3039] rounded-full text-[#c3c6d7] text-[12px] border border-white/5">CSS3</span>
                         <span className="px-3 py-1 bg-[#2e3039] rounded-full text-[#c3c6d7] text-[12px] border border-white/5">Vanilla JS</span>
                         <span className="px-3 py-1 bg-[#2e3039] rounded-full text-[#c3c6d7] text-[12px] border border-white/5">Accessibility</span>
                      </div>
                   </div>

                   <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
                      <button className="bg-white text-[#131b2e] px-4 py-2 rounded-lg font-bold text-[13px] hover:bg-[#b4c5ff] transition-colors flex items-center gap-2">
                         <span className="material-symbols-outlined text-[18px]">workspace_premium</span> Download PDF
                      </button>
                      <button className="bg-[#0b101e] border border-white/20 text-white px-4 py-2 rounded-lg font-bold text-[13px] hover:bg-white/10 transition-colors flex items-center gap-2">
                         Add to LinkedIn
                      </button>
                      <button className="bg-[#0b101e] border border-white/20 text-white px-4 py-2 rounded-lg font-bold text-[13px] hover:bg-white/10 transition-colors flex items-center gap-2 ml-auto">
                         <span className="material-symbols-outlined text-[18px]">content_copy</span> Copy Link
                      </button>
                   </div>
                </div>
             </div>

             {/* Certificate Item 2 (Pending) */}
             <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden border-[#eaddff]/20">
                
                {/* Visual Badge representing Certificate (Pending State) */}
                <div className="w-full md:w-[280px] shrink-0 aspect-[4/3] rounded-xl bg-[#0b101e]/80 border border-white/5 relative overflow-hidden flex flex-col items-center justify-center p-6 grayscale opacity-60">
                   <div className="w-16 h-16 rounded-full bg-[#2e3039] border border-white/10 flex items-center justify-center mb-4 relative z-10">
                      <span className="material-symbols-outlined text-[#8d90a0] text-[32px]">code_blocks</span>
                   </div>
                   <h3 className="font-h3 text-[18px] font-bold text-center text-white relative z-10 mb-1">Senior React Developer</h3>
                   
                   <div className="mt-auto w-full border-t border-white/10 pt-3 text-center relative z-10">
                      <p className="font-mono text-[#8d90a0] text-[10px]">ID: PENDING</p>
                   </div>
                </div>

                {/* Details */}
                <div className="flex-1 w-full">
                   <div className="flex justify-between items-start mb-4">
                      <div>
                         <div className="flex items-center gap-2 mb-2">
                            <h2 className="font-h3 text-[24px] font-bold text-white opacity-80">Senior React Developer</h2>
                            <span className="bg-[#eaddff]/10 text-[#eaddff] px-2 py-0.5 rounded text-[11px] font-bold border border-[#eaddff]/20 flex items-center gap-1">
                               <span className="material-symbols-outlined text-[14px]">hourglass_empty</span> Under Review
                            </span>
                         </div>
                         <p className="text-[#8d90a0] text-[13px]">Exam completed: Oct 24, 2024</p>
                      </div>
                      <div className="text-right">
                         <p className="text-[#c3c6d7] text-[12px] uppercase font-bold tracking-wider mb-1">Status</p>
                         <p className="text-[#eaddff] font-bold text-[14px]">Pending</p>
                      </div>
                   </div>

                   <div className="mb-6">
                      <p className="text-[#8d90a0] text-[14px] leading-relaxed mb-4">
                         Your exam submission is currently being reviewed by our expert panel and AI grading system. Final results are expected within 48 hours.
                      </p>
                   </div>
                   
                   <div className="bg-[#0b101e] rounded-lg p-4 border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-[12px] font-bold text-white">Review Progress</span>
                         <span className="text-[12px] text-[#8d90a0]">75%</span>
                      </div>
                      <div className="w-full bg-[#2e3039] rounded-full h-1.5 overflow-hidden">
                         <div className="bg-[#eaddff] h-1.5 rounded-full w-[75%] animate-pulse"></div>
                      </div>
                   </div>

                </div>
             </div>

          </div>
        </div>
      </main>
    </div>
  );
}
