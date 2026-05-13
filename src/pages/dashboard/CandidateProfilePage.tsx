import { Link, useNavigate } from 'react-router-dom';

export default function CandidateProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body-md overflow-x-hidden min-h-screen">
      {/* Ambient Background Effects */}
      <div className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_70%)] blur-[80px] z-[-1] pointer-events-none"></div>
      <div className="fixed bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_70%)] blur-[80px] z-[-1] pointer-events-none"></div>

      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0d141d]/70 backdrop-blur-md border-r border-[#434655]/10 shadow-md flex flex-col gap-2 py-[48px] px-[24px] z-50">
        <div className="mb-[48px] px-2">
          <h1 className="text-[32px] font-extrabold text-[#b4c5ff]" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</h1>
          <p className="text-[12px] font-semibold text-[#c3c6d7] opacity-70 uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>AI Talent Suite</p>
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          <Link to="/dashboard" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg hover:bg-[#2e353f]/50 hover:text-[#b4c5ff] transition-all duration-200 text-[#c3c6d7] font-medium" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard</span>
            Dashboard
          </Link>
          <Link to="/jobs" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg hover:bg-[#2e353f]/50 hover:text-[#b4c5ff] transition-all duration-200 text-[#c3c6d7] font-medium" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>work</span>
            Jobs
          </Link>
          <Link to="/pipeline" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#b4c5ff] font-bold bg-[#2e353f]/30" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            Candidates
          </Link>
          <Link to="/interviews/builder" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg hover:bg-[#2e353f]/50 hover:text-[#b4c5ff] transition-all duration-200 text-[#c3c6d7] font-medium" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_today</span>
            Interviews
          </Link>
          <a href="#" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg hover:bg-[#2e353f]/50 hover:text-[#b4c5ff] transition-all duration-200 text-[#c3c6d7] font-medium" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>assignment</span>
            Assessments
          </a>
          <Link to="/analytics" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg hover:bg-[#2e353f]/50 hover:text-[#b4c5ff] transition-all duration-200 text-[#c3c6d7] font-medium" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>analytics</span>
            Analytics
          </Link>
          <a href="#" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg hover:bg-[#2e353f]/50 hover:text-[#b4c5ff] transition-all duration-200 text-[#c3c6d7] font-medium" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>memory</span>
            Expert IaaS
          </a>
        </nav>
        <div className="mt-auto flex flex-col gap-1 border-t border-[#434655]/10 pt-[24px]">
          <Link to="/settings" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg hover:bg-[#2e353f]/50 hover:text-[#b4c5ff] transition-all duration-200 text-[#c3c6d7] font-medium" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
            Settings
          </Link>
          <Link to="/jobs/new" className="mt-[16px] bg-[#2563eb] text-[#eeefff] px-[24px] py-[16px] rounded-full font-semibold text-[15px] hover:opacity-90 transition-opacity active:scale-95 flex items-center justify-center gap-2" style={{ fontFamily: 'Inter' }}>
            Post New Job
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen">
        {/* TopAppBar */}
        <header className="sticky top-0 w-full z-40 bg-[#0d141d]/70 backdrop-blur-md border-b border-[#434655]/10 shadow-sm flex justify-between items-center h-20 px-[48px]">
          <div className="flex items-center gap-[24px]">
            <button onClick={() => navigate(-1)} className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h2 className="text-[32px] font-bold text-[#b4c5ff]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Candidate Evaluation</h2>
          </div>
          <div className="flex items-center gap-[24px]">
            <div className="flex items-center gap-[16px] px-[24px] py-2 bg-[#192029] rounded-full border border-[#434655]/20">
              <span className="material-symbols-outlined text-[#c3c6d7]">search</span>
              <input className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-[#dce3f0] w-64 placeholder:text-[#c3c6d7]/50" placeholder="Search candidate records..." type="text" />
            </div>
            <div className="flex items-center gap-[16px]">
              <button className="material-symbols-outlined p-2 text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors">notifications</button>
              <button className="material-symbols-outlined p-2 text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors">help</button>
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#b4c5ff]/20">
                <img alt="Recruiter Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhQpDkZzRxdVNWFciqZ8xswibxZHWS_e0Yk9MOVuvW6YwJDkwi_gFD71Hd03LBsu5-ATiffm9ONmVf9is-j0SszTqF4Jvd7CFVdTjUg7IEH9RMu2kseTZ1zEMnaN3RzuMx7kFqiZNX4AlGKBivHOvngZRpNyKK6_HHSgP8NQfPMkf9U3LcpeJJSrIOyzPSu6xZEEbD_ekMvAGj6Ch57kNCMcDn5WXGNm22W_tDeHX3ZbNZ12UlihN9EXCvwTRXYiTnzaGaYkc5v7s" />
              </div>
            </div>
          </div>
        </header>

        {/* Profile Content Container */}
        <div className="max-w-[1280px] mx-auto p-[48px] grid grid-cols-12 gap-[24px]">
          {/* LEFT COLUMN (63%) */}
          <div className="col-span-12 lg:col-span-8 space-y-[24px]">
            {/* 1. Candidate Header Card */}
            <section className="rounded-xl p-[24px] flex flex-col md:flex-row gap-[24px] items-start md:items-center" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex items-center gap-[24px] flex-1">
                <div className="w-20 h-20 rounded-2xl bg-[#2563eb] flex items-center justify-center text-[#eeefff] font-bold text-[32px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  SA
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-[16px]">
                    <h3 className="text-[32px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Sarah Ahmed</h3>
                    <span className="bg-[#b4c5ff]/20 text-[#b4c5ff] px-[16px] py-1 rounded-full text-xs font-bold uppercase tracking-wider">Interviewed</span>
                    <span className="bg-emerald-500/20 text-emerald-400 px-[16px] py-1 rounded-full text-xs font-bold uppercase tracking-wider">Low Risk</span>
                  </div>
                  <div className="flex flex-wrap gap-[24px] text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter' }}>
                    <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">mail</span> sarah@email.com</span>
                    <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">link</span> LinkedIn</span>
                    <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">calendar_today</span> Applied 5 days ago</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[16px] w-full md:w-auto">
                <button className="flex-1 md:flex-none border border-[#434655] hover:bg-[#2e353f]/30 px-[24px] py-[16px] rounded-full font-semibold text-[15px] transition-all" style={{ fontFamily: 'Inter' }}>Hold</button>
                <button className="flex-1 md:flex-none border border-red-500/40 text-red-400 hover:bg-red-500/10 px-[24px] py-[16px] rounded-full font-semibold text-[15px] transition-all" style={{ fontFamily: 'Inter' }}>Reject</button>
                <button className="flex-1 md:flex-none bg-[#b4c5ff] text-[#002a78] px-[48px] py-[16px] rounded-full font-semibold text-[15px] hover:shadow-[0_0_15px_rgba(180,197,255,0.4)] transition-all" style={{ fontFamily: 'Inter' }}>Advance</button>
              </div>
            </section>

            {/* 2. AI Evaluation Card */}
            <section className="rounded-xl p-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex items-center justify-between mb-[24px]">
                <div className="flex items-center gap-[16px]">
                  <span className="material-symbols-outlined text-[#b4c5ff]">psychology</span>
                  <h4 className="text-[18px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>AI Talent Evaluation</h4>
                </div>
                <span className="bg-[#2e353f]/50 text-[#c3c6d7] px-[16px] py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px]">verified_user</span> No Bias Detected
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-[48px] mb-[24px]">
                <div className="md:col-span-4 flex flex-col items-center justify-center p-[24px] border-r border-[#434655]/10">
                  <div className="relative w-32 h-32 flex items-center justify-center mb-[16px]">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle className="text-[#2e353f]" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                      <circle className="text-[#b4c5ff]" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="80.2" strokeWidth="8"></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[32px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>78</span>
                      <span className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>/ 100</span>
                    </div>
                  </div>
                  <p className="text-[#c3c6d7] text-sm font-medium text-center">Composite Score</p>
                </div>
                <div className="md:col-span-8 space-y-[16px]">
                  {/* Skill bars */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm mb-1"><span className="text-[#c3c6d7]">Technical Knowledge</span><span className="text-[#b4c5ff] font-bold">82%</span></div>
                    <div className="w-full h-1.5 bg-[#2e353f] rounded-full"><div className="h-full bg-[#b4c5ff] rounded-full" style={{ width: '82%' }}></div></div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm mb-1"><span className="text-[#c3c6d7]">Problem Solving</span><span className="text-[#b4c5ff] font-bold">79%</span></div>
                    <div className="w-full h-1.5 bg-[#2e353f] rounded-full"><div className="h-full bg-[#b4c5ff] rounded-full" style={{ width: '79%' }}></div></div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm mb-1"><span className="text-[#c3c6d7]">Communication</span><span className="text-[#b4c5ff] font-bold">74%</span></div>
                    <div className="w-full h-1.5 bg-[#2e353f] rounded-full"><div className="h-full bg-[#b4c5ff] rounded-full" style={{ width: '74%' }}></div></div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm mb-1"><span className="text-[#c3c6d7]">Code Quality</span><span className="text-[#b4c5ff] font-bold">80%</span></div>
                    <div className="w-full h-1.5 bg-[#2e353f] rounded-full"><div className="h-full bg-[#b4c5ff] rounded-full" style={{ width: '80%' }}></div></div>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/20 p-[24px] rounded-xl">
                <p className="text-[16px] text-[#dce3f0] leading-relaxed">
                  <span className="font-bold text-emerald-400">Analysis: </span> 
                  Sarah exhibits strong architectural thinking, particularly in system design segments. Her communication is structured, though her AI proficiency (70%) suggests a slight reliance on standard patterns. Overall fit is high for Enterprise Senior roles.
                </p>
              </div>
            </section>

            {/* 3. Interview Recording Card */}
            <section className="rounded-xl p-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex items-center gap-[16px] mb-[24px]">
                <span className="material-symbols-outlined text-[#b4c5ff]">videocam</span>
                <h4 className="text-[18px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>Interview Technical Session</h4>
              </div>
              <div className="aspect-video bg-[#080f17] rounded-xl overflow-hidden relative group mb-[24px] border border-[#434655]/10">
                <img alt="Interview Playback" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAenldEX1W3c2kqYy3ohG010prH9wh5v26mjLOI0chU80e1JxLn8pIQOiU_sNXzbO07hPhRGkdJwrNdnjxXYO77y31MCP38lSNUBMGURczuycBgAoAwd6N2yi_zW7VeTStLcw_cbYbA5b92k-huEmVQLcIERX6PlFY_N_ZrjoWDz6cS7sj9i0MEdq7nTsbZSpIafo5wouaXc1i14kE-ncvz9VdijrQYt0OeMmeMWTtuN6ZbWeeTL-bvunzYipMJeUjU8xu4mvA8S5A" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-[#b4c5ff] text-[#002a78] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </button>
                </div>
                {/* Custom Timeline */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent p-[24px] flex items-end">
                  <div className="relative w-full h-1 bg-white/20 rounded-full">
                    <div className="absolute top-[-4px] left-[15%] w-2 h-2 rounded-full bg-emerald-500"></div>
                    <div className="absolute top-[-4px] left-[45%] w-2 h-2 rounded-full bg-amber-500"></div>
                    <div className="absolute top-[-4px] left-[78%] w-2 h-2 rounded-full bg-emerald-500"></div>
                    <div className="absolute top-[-4px] left-[90%] w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="h-full bg-[#b4c5ff] w-1/3 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-[16px]">
                <h5 className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest mb-2" style={{ fontFamily: 'Inter' }}>AI Highlights</h5>
                <div className="flex items-center gap-[24px] p-[16px] hover:bg-[#2e353f]/20 rounded-lg transition-colors cursor-pointer group">
                  <span className="text-xs font-mono text-[#b4c5ff] font-bold">4:32</span>
                  <p className="text-[16px] flex-1">Strong system design explanation regarding microservices scalability.</p>
                  <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
                <div className="flex items-center gap-[24px] p-[16px] hover:bg-[#2e353f]/20 rounded-lg transition-colors cursor-pointer group">
                  <span className="text-xs font-mono text-[#b4c5ff] font-bold">12:15</span>
                  <p className="text-[16px] flex-1">Articulated complex state management patterns effectively.</p>
                  <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN (37%) */}
          <div className="col-span-12 lg:col-span-4 space-y-[24px]">
            {/* 1. Proctoring Report Card */}
            <section className="rounded-xl p-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex items-center justify-between mb-[24px]">
                <div className="flex items-center gap-[16px]">
                  <span className="material-symbols-outlined text-emerald-400">security</span>
                  <h4 className="text-[18px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>Integrity Shield</h4>
                </div>
                <span className="text-emerald-400 font-bold text-sm">Low Risk</span>
              </div>
              <div className="flex items-baseline gap-2 mb-[48px]">
                <span className="text-[32px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>91</span>
                <span className="text-[#c3c6d7] text-[12px] font-semibold uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>/ 100 Trust Score</span>
              </div>
              <div className="space-y-[16px]">
                <p className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Suspicious Activity Log</p>
                <div className="flex items-center gap-[16px] py-2 border-b border-[#434655]/10">
                  <span className="text-xs font-mono text-[#c3c6d7]">18:22</span>
                  <span className="text-sm text-[#dce3f0]">Single tab switch detected</span>
                  <span className="ml-auto material-symbols-outlined text-amber-400 text-sm">info</span>
                </div>
                <div className="flex items-center gap-[16px] py-2 border-b border-[#434655]/10">
                  <span className="text-xs font-mono text-[#c3c6d7]">24:45</span>
                  <span className="text-sm text-[#dce3f0]">External audio source check</span>
                  <span className="ml-auto material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                </div>
              </div>
            </section>

            {/* 2. Resume Card */}
            <section className="rounded-xl p-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex items-center gap-[16px] mb-[24px]">
                <span className="material-symbols-outlined text-[#b4c5ff]">description</span>
                <h4 className="text-[18px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>Resume Preview</h4>
              </div>
              <div className="bg-[#080f17] rounded-lg border border-[#434655]/20 p-[16px] mb-[24px] relative group overflow-hidden">
                <div className="aspect-[3/4] bg-[#192029] flex flex-col gap-[16px] p-[24px]">
                  <div className="h-4 w-2/3 bg-[#2e353f] rounded"></div>
                  <div className="h-2 w-full bg-[#2e353f]/40 rounded"></div>
                  <div className="h-2 w-full bg-[#2e353f]/40 rounded"></div>
                  <div className="h-2 w-5/6 bg-[#2e353f]/40 rounded"></div>
                  <div className="mt-[24px] h-4 w-1/2 bg-[#2e353f] rounded"></div>
                  <div className="h-2 w-full bg-[#2e353f]/40 rounded"></div>
                  <div className="h-2 w-full bg-[#2e353f]/40 rounded"></div>
                </div>
                <div className="absolute inset-0 bg-[#0d141d]/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-[2px]">
                  <button className="bg-[#0d141d]/80 border border-[#b4c5ff]/40 text-[#b4c5ff] px-[24px] py-[16px] rounded-full font-semibold text-[15px] shadow-xl" style={{ fontFamily: 'Inter' }}>
                    View Full Resume
                  </button>
                </div>
              </div>
            </section>

            {/* 3. Team Notes Card */}
            <section className="rounded-xl p-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex items-center gap-[16px] mb-[24px]">
                <span className="material-symbols-outlined text-[#b4c5ff]">notes</span>
                <h4 className="text-[18px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>Team Collaborative Notes</h4>
              </div>
              <div className="space-y-[24px] mb-[48px]">
                <div className="flex gap-[16px]">
                  <div className="w-8 h-8 rounded-full bg-[#0566d9] flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white">JD</div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-[#dce3f0]">Jordan Doe <span className="font-normal text-[#c3c6d7] ml-2">2h ago</span></p>
                    <p className="text-sm text-[#c3c6d7] leading-tight">Excellent grasp of React internals. Asked great questions about our infra.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-[16px]">
                <textarea className="w-full bg-[#080f17] border border-[#434655]/20 rounded-xl p-[24px] text-[16px] text-[#dce3f0] focus:outline-none focus:ring-1 focus:ring-[#b4c5ff] focus:border-[#b4c5ff] placeholder:text-[#c3c6d7]/50 min-h-[100px]" placeholder="Add a private note..."></textarea>
                <button className="w-full bg-[#2e353f]/50 hover:bg-[#2e353f] text-[#dce3f0] px-[24px] py-[16px] rounded-full font-semibold text-[15px] transition-colors" style={{ fontFamily: 'Inter' }}>
                  Add Note
                </button>
              </div>
            </section>

            {/* 4. Compare CTA */}
            <button className="w-full border border-[#b4c5ff]/20 hover:border-[#b4c5ff]/50 text-[#b4c5ff] hover:bg-[#b4c5ff]/5 px-[24px] py-[24px] rounded-xl font-semibold text-[15px] transition-all flex items-center justify-center gap-[16px] group" style={{ fontFamily: 'Inter' }}>
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">compare_arrows</span>
              Compare with other candidates
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
