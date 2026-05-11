import React from 'react';
import { Link } from 'react-router-dom';

export default function CandidateCertificationsPage() {
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
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#5a00c6]/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#004ac6]/20 blur-[120px] pointer-events-none"></div>

        {/* Top Navigation Bar */}
        <header className="sticky top-0 w-full z-40 bg-[#131b2e]/80 backdrop-blur-md border-b border-white/10 flex justify-between items-center px-8 py-4 h-[72px]">
          <div className="flex items-center gap-4">
            <h2 className="font-h3 text-[18px] font-bold text-white">Certification Catalog</h2>
            <div className="h-4 w-[1px] bg-white/20"></div>
            <Link to="/candidate/certifications/my-certs" className="text-[13px] font-medium text-[#8d90a0] hover:text-white transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">school</span> My Certificates
            </Link>
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
        <div className="max-w-[1200px] mx-auto p-8 space-y-10 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-8">
            <span className="inline-block px-3 py-1 rounded-full bg-[#eaddff]/10 text-[#eaddff] text-[12px] font-bold tracking-widest uppercase mb-4 border border-[#eaddff]/20">Proving Ground</span>
            <h1 className="font-h2 text-[42px] font-bold text-white mb-4 leading-tight">Validate your expertise. <br/>Stand out to top employers.</h1>
            <p className="text-[#c3c6d7] text-[16px]">Take rigorous, AI-proctored technical exams to earn verifiable credentials. Certified candidates are 3x more likely to receive interview requests.</p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-[#0b101e]/50 p-4 rounded-xl border border-white/10">
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              <button className="px-4 py-2 rounded-lg bg-white/10 text-white font-medium text-[13px] whitespace-nowrap">All Roles</button>
              <button className="px-4 py-2 rounded-lg text-[#8d90a0] hover:bg-white/5 hover:text-white font-medium text-[13px] whitespace-nowrap transition-colors">Frontend</button>
              <button className="px-4 py-2 rounded-lg text-[#8d90a0] hover:bg-white/5 hover:text-white font-medium text-[13px] whitespace-nowrap transition-colors">Backend</button>
              <button className="px-4 py-2 rounded-lg text-[#8d90a0] hover:bg-white/5 hover:text-white font-medium text-[13px] whitespace-nowrap transition-colors">Fullstack</button>
              <button className="px-4 py-2 rounded-lg text-[#8d90a0] hover:bg-white/5 hover:text-white font-medium text-[13px] whitespace-nowrap transition-colors">Data Science</button>
            </div>
            
            <div className="relative w-full md:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8d90a0] text-[20px]">search</span>
              <input 
                type="text" 
                placeholder="Search certifications..." 
                className="w-full bg-[#131b2e] border border-white/20 rounded-lg py-2 pl-10 pr-4 text-[13px] text-white placeholder-[#8d90a0] focus:outline-none focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff]/50 transition-all"
              />
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Cert Card 1 (In Progress / Available) */}
            <div className="glass-card rounded-2xl p-6 flex flex-col hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#004ac6] to-[#5a00c6] flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-white text-[28px]">code_blocks</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#006e2f]/20 text-[#2db560] text-[11px] font-bold border border-[#006e2f]/30">High Demand</span>
              </div>
              
              <h3 className="font-h3 text-[20px] font-bold text-white mb-2">Senior React Developer</h3>
              <p className="text-[#c3c6d7] text-[13px] mb-6 flex-1 line-clamp-3">Advanced assessment covering React 18 concurrency, Server Components, complex state management, and performance optimization techniques.</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-[12px] text-[#8d90a0]">
                  <span className="material-symbols-outlined text-[16px]">schedule</span> 120 Minutes
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#8d90a0]">
                  <span className="material-symbols-outlined text-[16px]">psychology</span> AI-Proctored System Design & Coding
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#8d90a0]">
                  <span className="material-symbols-outlined text-[16px]">bar_chart</span> Difficulty: Advanced
                </div>
              </div>
              
              <Link to="/candidate/certifications/react-dev/exam" className="w-full py-3 rounded-lg bg-white text-[#131b2e] font-bold text-[14px] text-center hover:bg-[#b4c5ff] transition-colors">
                Start Examination
              </Link>
            </div>

            {/* Cert Card 2 */}
            <div className="glass-card rounded-2xl p-6 flex flex-col hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#006e2f] to-[#004ac6] flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-white text-[28px]">dns</span>
                </div>
              </div>
              
              <h3 className="font-h3 text-[20px] font-bold text-white mb-2">Backend Architecture: Node.js</h3>
              <p className="text-[#c3c6d7] text-[13px] mb-6 flex-1 line-clamp-3">Evaluate your skills in designing scalable Node.js microservices, handling asynchronous operations, and database integration (SQL/NoSQL).</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-[12px] text-[#8d90a0]">
                  <span className="material-symbols-outlined text-[16px]">schedule</span> 90 Minutes
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#8d90a0]">
                  <span className="material-symbols-outlined text-[16px]">psychology</span> API Design & Performance tuning
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#8d90a0]">
                  <span className="material-symbols-outlined text-[16px]">bar_chart</span> Difficulty: Intermediate
                </div>
              </div>
              
              <button className="w-full py-3 rounded-lg bg-white/10 text-white font-bold text-[14px] text-center hover:bg-white/20 border border-white/10 transition-colors">
                View Details
              </button>
            </div>

            {/* Cert Card 3 (Completed Example) */}
            <div className="glass-card rounded-2xl p-6 flex flex-col relative overflow-hidden border-[#eaddff]/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#eaddff]/10 rounded-full blur-[40px]"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#2e3039] border border-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#eaddff] text-[28px]">html</span>
                </div>
                <div className="flex items-center gap-1 text-[#eaddff] bg-[#eaddff]/10 px-2.5 py-1 rounded border border-[#eaddff]/20">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider">Certified</span>
                </div>
              </div>
              
              <h3 className="font-h3 text-[20px] font-bold text-white mb-2 relative z-10">Frontend Fundamentals</h3>
              <p className="text-[#c3c6d7] text-[13px] mb-6 flex-1 line-clamp-3 relative z-10">Core web technologies: HTML semantic structure, CSS layout systems (Flexbox/Grid), and vanilla JavaScript DOM manipulation.</p>
              
              <div className="mt-auto pt-4 border-t border-white/10 relative z-10">
                <div className="flex justify-between items-center">
                  <div className="text-[12px] text-[#8d90a0]">
                    Score: <span className="text-white font-bold">92/100</span>
                  </div>
                  <Link to="/candidate/certifications/my-certs" className="text-[#b4c5ff] font-medium text-[13px] hover:underline flex items-center gap-1">
                    View Badge <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

             {/* Cert Card 4 (Locked Example) */}
             <div className="glass-card rounded-2xl p-6 flex flex-col relative overflow-hidden opacity-70 cursor-not-allowed">
              <div className="absolute inset-0 bg-[#0b101e]/40 z-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                 <div className="bg-[#131b2e] px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2 text-white text-[13px] font-bold">
                    <span className="material-symbols-outlined text-[16px]">lock</span> Requires Intermediate
                 </div>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#2e3039] border border-white/10 flex items-center justify-center grayscale">
                  <span className="material-symbols-outlined text-white text-[28px]">account_tree</span>
                </div>
              </div>
              
              <h3 className="font-h3 text-[20px] font-bold text-white mb-2">Staff Engineer: Systems</h3>
              <p className="text-[#c3c6d7] text-[13px] mb-6 flex-1 line-clamp-3">Expert-level system design, distributed architectures, leadership, and complex problem-solving at scale.</p>
              
              <div className="space-y-3 mb-6 grayscale">
                <div className="flex items-center gap-2 text-[12px] text-[#8d90a0]">
                  <span className="material-symbols-outlined text-[16px]">schedule</span> 180 Minutes
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#8d90a0]">
                  <span className="material-symbols-outlined text-[16px]">bar_chart</span> Difficulty: Expert
                </div>
              </div>
              
              <button disabled className="w-full py-3 rounded-lg bg-white/5 text-[#8d90a0] font-bold text-[14px] text-center border border-white/5 cursor-not-allowed">
                Locked
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
