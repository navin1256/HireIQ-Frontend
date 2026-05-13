import { Link } from 'react-router-dom';

export default function AllCandidatesPipelinePage() {
  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body-md min-h-screen overflow-hidden selection:bg-[#b4c5ff]/30">
      {/* Ambient Background Glows */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#b4c5ff]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#d2bbff]/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#080f17] border-r border-[#434655]/10 flex flex-col py-[16px] z-50">
        <div className="px-[24px] mb-[48px]">
          <h1 className="text-[32px] font-bold text-[#adc6ff] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</h1>
          <p className="text-[12px] font-semibold text-[#c3c6d7] opacity-60 uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>AI Talent Suite</p>
        </div>
        <nav className="flex-1 space-y-1">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] transition-all duration-200 hover:bg-[#2e353f]/20 hover:text-[#adc6ff]" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard</span>
            <span className="text-[16px]">Dashboard</span>
          </Link>
          <Link to="/jobs" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] transition-all duration-200 hover:bg-[#2e353f]/20 hover:text-[#adc6ff]" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>work</span>
            <span className="text-[16px]">Jobs</span>
          </Link>
          <Link to="/pipeline" className="flex items-center gap-3 px-4 py-3 text-[#adc6ff] bg-[#0566d9]/10 border-r-4 border-[#adc6ff] transition-all duration-200" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
            <span className="text-[16px]">Candidates</span>
          </Link>
          <Link to="/interviews/builder" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] transition-all duration-200 hover:bg-[#2e353f]/20 hover:text-[#adc6ff]" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_today</span>
            <span className="text-[16px]">Interviews</span>
          </Link>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] transition-all duration-200 hover:bg-[#2e353f]/20 hover:text-[#adc6ff]" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>quiz</span>
            <span className="text-[16px]">Assessments</span>
          </a>
          <Link to="/analytics" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] transition-all duration-200 hover:bg-[#2e353f]/20 hover:text-[#adc6ff]" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>bar_chart</span>
            <span className="text-[16px]">Analytics</span>
          </Link>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] transition-all duration-200 hover:bg-[#2e353f]/20 hover:text-[#adc6ff]" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>memory</span>
            <span className="text-[16px]">Expert IaaS</span>
          </a>
        </nav>
        <div className="mt-auto px-[24px]">
          <Link to="/jobs/new" className="w-full text-white py-3 px-4 rounded-full font-semibold text-[15px] flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-[#b4c5ff]/20" style={{ background: 'linear-gradient(135deg, #b4c5ff 0%, #2563eb 100%)', fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
            Create New Job
          </Link>
          <div className="mt-[24px] pt-[24px] border-t border-[#434655]/10">
            <Link to="/settings" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] transition-all duration-200 hover:bg-[#2e353f]/20 hover:text-[#adc6ff]" style={{ fontFamily: 'Inter' }}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
              <span className="text-[16px]">Settings</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 relative z-10 h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="sticky top-0 z-50 w-full bg-[#0d141d]/70 backdrop-blur-xl shadow-sm border-b border-white/5 flex justify-between items-center px-[48px] py-[16px]">
          <div className="flex items-center gap-[24px]">
            <h2 className="text-[32px] font-bold text-[#adc6ff]" style={{ fontFamily: 'Plus Jakarta Sans' }}>All Candidates</h2>
          </div>
          <div className="flex items-center gap-[24px]">
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#c3c6d7] text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
              <input className="bg-[#151c25] border border-[#434655]/30 rounded-full py-2 pl-10 pr-4 text-[16px] text-[#dce3f0] focus:outline-none focus:border-[#b4c5ff] transition-all w-64 placeholder-[#c3c6d7]/50" placeholder="Quick search..." type="text" />
            </div>
            <div className="flex items-center gap-[16px]">
              <button className="p-2 text-[#c3c6d7] hover:text-[#adc6ff] transition-colors material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</button>
              <button className="p-2 text-[#c3c6d7] hover:text-[#adc6ff] transition-colors material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>help_outline</button>
              <div className="h-8 w-8 rounded-full overflow-hidden border border-[#b4c5ff]/20">
                <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3WPyb1ux22Eiy-NT5aoPCL3Joa3BQMq4kTqin3by_h6RT2DUxHXtGvarQRsKuRFzqVDgaaHo5HiwdgChslYGDgSSoKGtjFTPZ3INFd1fzXt5wXXZsi9EJSkssRDZmo82p261XDsxO5vKDl2x_DugesdP2RInI3WsawNJWspddtmEphIlOzymEQyLNMUy4DKGZYI7iNTGqLBlXzEyrdyBehwuEf4GwEeRQ26fGLRf1YL_URDT1iJuQaTkh4rrwrYHmxd_HE3aAgLY" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Control Bar */}
        <div className="px-[48px] py-[24px] mx-[48px] mt-[24px] rounded-xl flex items-center justify-between flex-wrap gap-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="flex items-center gap-[24px]">
            <div className="relative">
              <select className="appearance-none bg-[#232a34] border-none rounded-lg px-4 py-2 pr-10 text-[16px] text-[#adc6ff] focus:outline-none focus:ring-1 focus:ring-[#b4c5ff]" style={{ fontFamily: 'Inter' }}>
                <option>All Jobs</option>
                <option>Senior React Developer</option>
                <option>Product Designer</option>
                <option>Backend Engineer (Go)</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined pointer-events-none text-[#c3c6d7]" style={{ fontVariationSettings: "'FILL' 0" }}>keyboard_arrow_down</span>
            </div>
            <div className="flex items-center bg-[#151c25] p-1 rounded-full border border-[#434655]/20">
              <button className="px-4 py-1.5 rounded-full text-[12px] font-semibold uppercase tracking-wider bg-[#0566d9] text-[#e6ecff]" style={{ fontFamily: 'Inter' }}>Active Jobs</button>
              <button className="px-4 py-1.5 rounded-full text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7] hover:text-[#adc6ff] transition-colors" style={{ fontFamily: 'Inter' }}>Archived</button>
            </div>
            <div className="h-8 w-[1px] bg-[#434655]/30"></div>
            <div className="flex items-center gap-[16px]">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#434655]/30 text-[16px] hover:bg-[#232a34] transition-colors" style={{ fontFamily: 'Inter' }}>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>filter_list</span>
                <span>Min Score</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#434655]/30 text-[16px] hover:bg-[#232a34] transition-colors" style={{ fontFamily: 'Inter' }}>
                <span>Risk Level</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#434655]/30 text-[16px] hover:bg-[#232a34] transition-colors" style={{ fontFamily: 'Inter' }}>
                <span>Department</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[24px]">
            <div className="flex bg-[#151c25] p-1 rounded-lg border border-[#434655]/20">
              <button className="p-2 rounded bg-[#2e353f] text-[#adc6ff] shadow-inner material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>grid_view</button>
              <button className="p-2 rounded text-[#c3c6d7] hover:text-[#adc6ff] material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>list</button>
            </div>
            <button className="text-[#002a78] py-2 px-6 rounded-full font-semibold text-[15px] flex items-center gap-2 hover:brightness-110 transition-all" style={{ background: 'linear-gradient(135deg, #b4c5ff 0%, #2563eb 100%)', fontFamily: 'Inter' }}>
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>person_add</span>
              Add Candidate
            </button>
          </div>
        </div>

        {/* Kanban Board Area */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden px-[48px] py-[24px] flex gap-[24px]">
          
          {/* Column: Applied */}
          <div className="flex-shrink-0 w-80 flex flex-col gap-[24px]">
            <div className="flex items-center justify-between border-t-4 border-[#b4c5ff] pt-3">
              <div className="flex items-center gap-2">
                <h3 className="text-[12px] font-bold text-[#b4c5ff] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>APPLIED</h3>
                <span className="bg-[#b4c5ff]/10 text-[#b4c5ff] px-2 py-0.5 rounded text-[10px] font-bold">142</span>
              </div>
              <button className="text-[#c3c6d7] hover:text-[#b4c5ff] material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>more_horiz</button>
            </div>
            <div className="flex flex-col gap-[24px] overflow-y-auto pr-1 h-full pb-[80px]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent' }}>
              
              {/* Candidate Card */}
              <div className="p-[24px] rounded-xl hover:bg-[#232a34] transition-all group cursor-grab" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="flex justify-between items-start mb-[16px]">
                  <span className="material-symbols-outlined text-[#8d90a0]/30 group-hover:text-[#b4c5ff]/50 transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>drag_indicator</span>
                  <div className="flex flex-col items-end">
                    <span className="text-[32px] text-emerald-400 font-bold leading-none" style={{ fontFamily: 'Plus Jakarta Sans' }}>84</span>
                    <span className="text-[10px] font-bold text-[#c3c6d7] opacity-50 uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>SCORE</span>
                  </div>
                </div>
                <div className="flex items-center gap-[16px] mb-[24px]">
                  <div className="w-10 h-10 rounded-lg bg-[#b4c5ff]/20 flex items-center justify-center font-bold text-[#b4c5ff]">SA</div>
                  <div>
                    <h4 className="text-[16px] text-[#dce3f0] font-bold" style={{ fontFamily: 'Inter' }}>Sarah Ahmed</h4>
                    <p className="text-[12px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Frontend Engineer</p>
                  </div>
                </div>
                <div className="bg-[#080f17]/50 px-3 py-2 rounded-lg mb-[24px]">
                  <p className="text-[11px] text-[#b4c5ff]/80 font-medium">→ Senior React Developer</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-[24px]">
                  <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">LOW RISK</span>
                  <span className="px-2 py-1 rounded bg-[#b4c5ff]/10 text-[#b4c5ff] text-[10px] font-bold">ASSESSMENT: 84%</span>
                </div>
                <div className="flex items-center justify-between pt-[24px] border-t border-white/5">
                  <span className="text-[10px] text-[#c3c6d7] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
                    3 days ago
                  </span>
                  <div className="flex gap-2">
                    <Link to="/candidates/sarah-ahmed" className="w-7 h-7 rounded-full bg-[#192029] flex items-center justify-center text-[#c3c6d7] hover:text-[#b4c5ff] material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>visibility</Link>
                    <button className="w-7 h-7 rounded-full bg-[#192029] flex items-center justify-center text-[#c3c6d7] hover:text-[#b4c5ff] material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>logout</button>
                    <button className="w-7 h-7 rounded-full bg-[#192029] flex items-center justify-center text-[#c3c6d7] hover:text-[#ffb4ab] material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>cancel</button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-[24px] rounded-xl hover:bg-[#232a34] transition-all group cursor-grab" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="flex justify-between items-start mb-[16px]">
                  <span className="material-symbols-outlined text-[#8d90a0]/30 group-hover:text-[#b4c5ff]/50 transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>drag_indicator</span>
                  <div className="flex flex-col items-end">
                    <span className="text-[32px] text-[#adc6ff] font-bold leading-none" style={{ fontFamily: 'Plus Jakarta Sans' }}>91</span>
                    <span className="text-[10px] font-bold text-[#c3c6d7] opacity-50 uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>SCORE</span>
                  </div>
                </div>
                <div className="flex items-center gap-[16px] mb-[24px]">
                  <img alt="Liam Chen" className="w-10 h-10 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXh3lR3Apmk9CWhKeOXJzap9qVtN3R8U6hByUanHYuWB4yKgeyFp5Cr3mVoCxuVFYIRzOkGjJi85rcT4LKaOvqcLH0YRw9Thor9oPmnMB-yG7BLRh7xN-d0Wp8Ck38W-IVAR0SBSvOswy0eVMxQdwcC38jSWmmneuugMRAQ7v21bvRJW0Xck-b-Sd_sckaXHN2YimXB-cfJJxQ_n9-MgBgP2ZvdhzqIrGwN_2SEMEtOKuz4hi0TOTpTesaueX1hO2tsDbo85zqTuo" />
                  <div>
                    <h4 className="text-[16px] text-[#dce3f0] font-bold" style={{ fontFamily: 'Inter' }}>Liam Chen</h4>
                    <p className="text-[12px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Fullstack Engineer</p>
                  </div>
                </div>
                <div className="bg-[#080f17]/50 px-3 py-2 rounded-lg mb-[24px]">
                  <p className="text-[11px] text-[#b4c5ff]/80 font-medium">→ Senior React Developer</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-[24px]">
                  <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">LOW RISK</span>
                </div>
                <div className="flex items-center justify-between pt-[24px] border-t border-white/5">
                  <span className="text-[10px] text-[#c3c6d7] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
                    2 hours ago
                  </span>
                  <div className="flex gap-2">
                    <Link to="/candidates/liam-chen" className="w-7 h-7 rounded-full bg-[#192029] flex items-center justify-center text-[#c3c6d7] hover:text-[#b4c5ff] material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>visibility</Link>
                    <button className="w-7 h-7 rounded-full bg-[#192029] flex items-center justify-center text-[#c3c6d7] hover:text-[#b4c5ff] material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>logout</button>
                    <button className="w-7 h-7 rounded-full bg-[#192029] flex items-center justify-center text-[#c3c6d7] hover:text-[#ffb4ab] material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column: AI Screened */}
          <div className="flex-shrink-0 w-80 flex flex-col gap-[24px]">
            <div className="flex items-center justify-between border-t-4 border-[#d2bbff] pt-3">
              <div className="flex items-center gap-2">
                <h3 className="text-[12px] font-bold text-[#d2bbff] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>AI SCREENED</h3>
                <span className="bg-[#d2bbff]/10 text-[#d2bbff] px-2 py-0.5 rounded text-[10px] font-bold">68</span>
              </div>
              <button className="text-[#c3c6d7] hover:text-[#d2bbff] material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>more_horiz</button>
            </div>
            <div className="flex flex-col gap-[24px] overflow-y-auto pr-1 h-full pb-[80px]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent' }}>
              <div className="p-[24px] rounded-xl hover:bg-[#232a34] transition-all group cursor-grab" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="flex justify-between items-start mb-[16px]">
                  <span className="material-symbols-outlined text-[#8d90a0]/30 group-hover:text-[#d2bbff]/50 transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>drag_indicator</span>
                  <div className="flex flex-col items-end">
                    <span className="text-[32px] text-[#d2bbff] font-bold leading-none" style={{ fontFamily: 'Plus Jakarta Sans' }}>72</span>
                    <span className="text-[10px] font-bold text-[#c3c6d7] opacity-50 uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>SCORE</span>
                  </div>
                </div>
                <div className="flex items-center gap-[16px] mb-[24px]">
                  <div className="w-10 h-10 rounded-lg bg-[#d2bbff]/20 flex items-center justify-center font-bold text-[#d2bbff]">MK</div>
                  <div>
                    <h4 className="text-[16px] text-[#dce3f0] font-bold" style={{ fontFamily: 'Inter' }}>Marcus King</h4>
                    <p className="text-[12px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Lead Developer</p>
                  </div>
                </div>
                <div className="bg-[#080f17]/50 px-3 py-2 rounded-lg mb-[24px]">
                  <p className="text-[11px] text-[#b4c5ff]/80 font-medium">→ VP of Engineering</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-[24px]">
                  <span className="px-2 py-1 rounded bg-[#ffb4ab]/10 text-[#ffb4ab] text-[10px] font-bold">HIGH RISK</span>
                  <span className="px-2 py-1 rounded bg-[#d2bbff]/10 text-[#d2bbff] text-[10px] font-bold">AI SCORE: 88%</span>
                </div>
                <div className="flex items-center justify-between pt-[24px] border-t border-white/5">
                  <span className="text-[10px] text-[#c3c6d7] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
                    5 days ago
                  </span>
                  <div className="flex gap-2">
                    <Link to="/candidates/marcus-king" className="w-7 h-7 rounded-full bg-[#192029] flex items-center justify-center text-[#c3c6d7] hover:text-[#b4c5ff] material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>visibility</Link>
                    <button className="w-7 h-7 rounded-full bg-[#192029] flex items-center justify-center text-[#c3c6d7] hover:text-[#b4c5ff] material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>logout</button>
                    <button className="w-7 h-7 rounded-full bg-[#192029] flex items-center justify-center text-[#c3c6d7] hover:text-[#ffb4ab] material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column: Assessment Done */}
          <div className="flex-shrink-0 w-80 flex flex-col gap-[24px] opacity-90 hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-between border-t-4 border-amber-400 pt-3">
              <div className="flex items-center gap-2">
                <h3 className="text-[12px] font-bold text-amber-400 uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>ASSESSMENT</h3>
                <span className="bg-amber-400/10 text-amber-400 px-2 py-0.5 rounded text-[10px] font-bold">41</span>
              </div>
              <button className="text-[#c3c6d7] material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>more_horiz</button>
            </div>
            <div className="flex flex-col gap-[24px] h-full pb-[80px]">
              {/* Empty state placeholder */}
              <div className="border-2 border-dashed border-white/5 rounded-xl h-32 flex items-center justify-center text-[#c3c6d7]/30 text-[12px] font-bold uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>
                DRAG HERE
              </div>
            </div>
          </div>

          {/* Column: Interviewed */}
          <div className="flex-shrink-0 w-80 flex flex-col gap-[24px]">
            <div className="flex items-center justify-between border-t-4 border-emerald-400 pt-3">
              <div className="flex items-center gap-2">
                <h3 className="text-[12px] font-bold text-emerald-400 uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>INTERVIEWED</h3>
                <span className="bg-emerald-400/10 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold">19</span>
              </div>
              <button className="text-[#c3c6d7] material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>more_horiz</button>
            </div>
            <div className="flex flex-col gap-[24px] overflow-y-auto pr-1 h-full pb-[80px]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent' }}>
              <div className="p-[24px] rounded-xl hover:bg-[#232a34] transition-all group cursor-grab" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="flex justify-between items-start mb-[16px]">
                  <span className="material-symbols-outlined text-[#8d90a0]/30 group-hover:text-emerald-400/50 transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>drag_indicator</span>
                  <div className="flex flex-col items-end">
                    <span className="text-[32px] text-emerald-400 font-bold leading-none" style={{ fontFamily: 'Plus Jakarta Sans' }}>94</span>
                    <span className="text-[10px] font-bold text-[#c3c6d7] opacity-50 uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>SCORE</span>
                  </div>
                </div>
                <div className="flex items-center gap-[16px] mb-[24px]">
                  <img alt="Elena Rodriguez" className="w-10 h-10 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGSnstk6rRz6CdMmx19RGHHUNFmeTVks5MdV8xy8NIHVJdRg4Z99ZeirIpnk6jAQKns2BDdn9NWsdmf-s3NrMQ5nj-OjtvJeqn4mZIvlYSdN9C_dWQv13UvOZD_wIxEEmxtB1y7cNZos0ePlTP0_FAPfrYFQv_xW1Tt6Kvn7eQNgqw_6brqbkwzVb3jArGv_SKv5ALbp6jNh93aLMy9Ybe9MBG2nm9SdSi_m8wvkG4A69fAed1jv2HZWvPxS17nsrPekb_GHR7tnM" />
                  <div>
                    <h4 className="text-[16px] text-[#dce3f0] font-bold" style={{ fontFamily: 'Inter' }}>Elena Rodriguez</h4>
                    <p className="text-[12px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Design Lead</p>
                  </div>
                </div>
                <div className="bg-[#080f17]/50 px-3 py-2 rounded-lg mb-[24px]">
                  <p className="text-[11px] text-[#b4c5ff]/80 font-medium">→ Product Designer</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-[24px]">
                  <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">LOW RISK</span>
                  <span className="px-2 py-1 rounded bg-[#adc6ff]/10 text-[#adc6ff] text-[10px] font-bold">4 INTERVIEWS OK</span>
                </div>
                <div className="flex items-center justify-between pt-[24px] border-t border-white/5">
                  <span className="text-[10px] text-[#c3c6d7] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
                    1 hour ago
                  </span>
                  <div className="flex gap-2">
                    <Link to="/candidates/elena-rodriguez" className="w-7 h-7 rounded-full bg-[#192029] flex items-center justify-center text-[#c3c6d7] hover:text-[#b4c5ff] material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>visibility</Link>
                    <button className="w-7 h-7 rounded-full bg-[#192029] flex items-center justify-center text-[#c3c6d7] hover:text-[#b4c5ff] material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>logout</button>
                    <button className="w-7 h-7 rounded-full bg-[#192029] flex items-center justify-center text-[#c3c6d7] hover:text-[#ffb4ab] material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column: Decision */}
          <div className="flex-shrink-0 w-80 flex flex-col gap-[24px]">
            <div className="flex items-center justify-between border-t-4 border-emerald-600 pt-3">
              <div className="flex items-center gap-2">
                <h3 className="text-[12px] font-bold text-emerald-600 uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>DECISION</h3>
                <span className="bg-emerald-600/10 text-emerald-600 px-2 py-0.5 rounded text-[10px] font-bold">8</span>
              </div>
              <button className="text-[#c3c6d7] material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>more_horiz</button>
            </div>
            <div className="flex flex-col gap-[24px] overflow-y-auto pr-1 h-full pb-[80px]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent' }}>
              <div className="p-[24px] rounded-xl hover:bg-[#232a34] transition-all group cursor-grab border-emerald-500/20 shadow-lg shadow-emerald-500/5" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="flex justify-between items-start mb-[16px]">
                  <span className="material-symbols-outlined text-[#8d90a0]/30 group-hover:text-emerald-500/50 transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>drag_indicator</span>
                  <div className="flex flex-col items-end">
                    <span className="text-[32px] text-emerald-400 font-bold leading-none" style={{ fontFamily: 'Plus Jakarta Sans' }}>98</span>
                    <span className="text-[10px] font-bold text-[#c3c6d7] opacity-50 uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>SCORE</span>
                  </div>
                </div>
                <div className="flex items-center gap-[16px] mb-[24px]">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center font-bold text-emerald-400">JT</div>
                  <div>
                    <h4 className="text-[16px] text-[#dce3f0] font-bold" style={{ fontFamily: 'Inter' }}>James Taylor</h4>
                    <p className="text-[12px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Senior Staff Engineer</p>
                  </div>
                </div>
                <div className="bg-[#080f17]/50 px-3 py-2 rounded-lg mb-[24px]">
                  <p className="text-[11px] text-[#b4c5ff]/80 font-medium">→ Senior React Developer</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-[24px]">
                  <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">OFFER PENDING</span>
                </div>
                <div className="flex items-center justify-between pt-[24px] border-t border-white/5">
                  <span className="text-[10px] text-[#c3c6d7] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
                    12 mins ago
                  </span>
                  <div className="flex gap-2">
                    <button className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</button>
                    <Link to="/candidates/james-taylor" className="w-7 h-7 rounded-full bg-[#192029] flex items-center justify-center text-[#c3c6d7] hover:text-[#b4c5ff] material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>visibility</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* FAB for quick action */}
      <button className="fixed bottom-[24px] right-[24px] w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all z-50" style={{ background: 'linear-gradient(135deg, #b4c5ff 0%, #2563eb 100%)' }}>
        <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>chat_bubble</span>
      </button>
    </div>
  );
}
