import { Link } from 'react-router-dom';

export default function InterviewBuilderPage() {
  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body-md overflow-x-hidden min-h-screen">
      {/* Ambient Background Glows */}
      <div className="fixed top-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(34,217,122,0.1)_0%,rgba(34,217,122,0)_70%)] pointer-events-none z-[-1]"></div>
      <div className="fixed bottom-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(34,217,122,0.1)_0%,rgba(34,217,122,0)_70%)] pointer-events-none z-[-1] opacity-50"></div>

      {/* SideNavBar */}
      <aside className="w-64 h-screen fixed left-0 top-0 bg-[#151c25] border-r border-white/10 backdrop-blur-xl shadow-xl flex flex-col py-[48px] px-[16px] z-50">
        <div className="mb-[80px] px-[16px]">
          <h1 className="text-[32px] font-bold text-[#b4c5ff] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</h1>
          <p className="text-[10px] font-semibold text-[#c3c6d7] uppercase tracking-widest mt-1" style={{ fontFamily: 'Inter' }}>AI Talent Acquisition</p>
        </div>
        <nav className="flex-1 space-y-1">
          <Link to="/dashboard" className="flex items-center gap-3 px-[16px] py-3 rounded-xl text-[#c3c6d7] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard</span>
            <span className="text-[16px]">Dashboard</span>
          </Link>
          <Link to="/jobs" className="flex items-center gap-3 px-[16px] py-3 rounded-xl text-[#c3c6d7] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>work</span>
            <span className="text-[16px]">Jobs</span>
          </Link>
          <Link to="/pipeline" className="flex items-center gap-3 px-[16px] py-3 rounded-xl text-[#c3c6d7] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>group</span>
            <span className="text-[16px]">Candidates</span>
          </Link>
          {/* ACTIVE: Interviews */}
          <Link to="/interviews/builder" className="flex items-center gap-3 px-[16px] py-3 rounded-xl text-[#22D97A] font-bold border-r-2 border-[#22D97A] bg-white/5 transition-all duration-200" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>event</span>
            <span className="text-[16px]">Interviews</span>
          </Link>
          <a href="#" className="flex items-center gap-3 px-[16px] py-3 rounded-xl text-[#c3c6d7] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>assignment</span>
            <span className="text-[16px]">Assessments</span>
          </a>
          <Link to="/analytics" className="flex items-center gap-3 px-[16px] py-3 rounded-xl text-[#c3c6d7] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>monitoring</span>
            <span className="text-[16px]">Analytics</span>
          </Link>
          <a href="#" className="flex items-center gap-3 px-[16px] py-3 rounded-xl text-[#c3c6d7] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>psychology</span>
            <span className="text-[16px]">Expert IaaS</span>
          </a>
          <Link to="/settings" className="flex items-center gap-3 px-[16px] py-3 rounded-xl text-[#c3c6d7] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
            <span className="text-[16px]">Settings</span>
          </Link>
        </nav>
        <div className="mt-auto pt-[48px] border-t border-white/5 px-[16px]">
          <div className="bg-[#b4c5ff]/10 rounded-xl p-[24px] mb-[24px] border border-[#b4c5ff]/20">
            <p className="font-semibold text-[#b4c5ff] text-[10px] uppercase tracking-widest mb-2" style={{ fontFamily: 'Inter' }}>CURRENT PLAN</p>
            <p className="font-bold text-[#dce3f0]">Pro Scale AI</p>
            <button className="mt-3 w-full py-2 bg-[#b4c5ff] text-[#002a78] rounded-lg font-semibold text-[15px] transition-transform hover:scale-[1.02]" style={{ fontFamily: 'Inter' }}>Upgrade Plan</button>
          </div>
          <div className="flex items-center gap-3 hover:bg-white/5 p-[16px] rounded-xl transition-colors cursor-pointer">
            <img alt="User Profile" className="w-10 h-10 rounded-full border-2 border-[#b4c5ff]/30 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAKwDu8wdRU_CGNQgRsp0RUfQKWntzWNlGSxc9CqmZoEx79_aOu83NGQQIBp8fti9E3YkfJMCMSefkx92ByNBjQPSqZShOGYgoJGnKJKfR9QkT-MEcQ-5q7ljDdYAiDAdm5JtT6_KpnWlwtomV2f2ae4ZPbmvEGyLoDPzA2NPwmAAKSylaITSajBM2_Ma_F4zcDeeAj5y2mvJCrKUo4cS7UU1STyBGGcbRjxlklHZhJt82I95PQJaV_Z4PfktA6WhDUhm2CCkuwSk" />
            <div>
              <p className="text-[14px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Alex Rivera</p>
              <p className="text-[12px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Talent Lead</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center h-20 px-[24px] sticky top-0 right-0 bg-[#0d141d]/70 backdrop-blur-md z-40">
          <div className="flex items-center gap-[24px]">
            <h2 className="text-[20px] font-bold text-[#b4c5ff]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Interview Builder</h2>
            <div className="relative w-80">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#c3c6d7] text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
              <input className="w-full bg-[#151c25] border border-[#434655] rounded-full py-2 pl-10 pr-4 text-sm text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] outline-none transition-all placeholder-[#c3c6d7]/50" placeholder="Quick search..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-2 mr-4">
              <button className="p-2 hover:bg-white/5 rounded-full text-[#c3c6d7] transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span>
              </button>
              <button className="p-2 hover:bg-white/5 rounded-full text-[#c3c6d7] transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>help</span>
              </button>
            </div>
            <Link to="/jobs/new" className="px-[24px] py-2.5 bg-[#b4c5ff] text-[#002a78] rounded-full font-semibold text-[15px] scale-95 duration-150 active:scale-90 flex items-center gap-2" style={{ fontFamily: 'Inter' }}>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>person_add</span>
              + Post New Job
            </Link>
          </div>
        </header>

        {/* Builder Page Header */}
        <section className="px-[24px] pt-[48px] pb-[24px]">
          <div className="flex justify-between items-end">
            <div>
              <p className="font-semibold text-[#22D97A] text-[12px] uppercase tracking-[0.2em] mb-2" style={{ fontFamily: 'Inter' }}>WORKSPACE</p>
              <h2 className="text-[48px] font-bold text-[#dce3f0] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>Interview Builder</h2>
              <p className="text-[18px] text-[#c3c6d7] mt-2" style={{ fontFamily: 'Inter' }}>Build AI-powered interview flows in minutes.</p>
            </div>
            <div className="flex gap-[16px]">
              <button className="px-[24px] py-3 border border-[#434655] rounded-full font-semibold text-[15px] hover:bg-white/5 transition-colors" style={{ fontFamily: 'Inter' }}>Save Template</button>
              <button className="px-[24px] py-3 bg-[#22D97A]/10 border border-[#22D97A] text-[#22D97A] rounded-full font-semibold text-[15px] hover:bg-[#22D97A] hover:text-[#0d141d] transition-all" style={{ fontFamily: 'Inter' }}>Preview</button>
            </div>
          </div>
        </section>

        {/* Builder Workspace */}
        <section className="px-[24px] pb-[80px] flex gap-[24px] flex-1 h-[calc(100vh-280px)] min-h-[600px]">
          {/* Left Panel: Question Library */}
          <div className="w-[40%] flex flex-col gap-[16px] rounded-2xl p-[16px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="p-2">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                <span className="material-symbols-outlined text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 0" }}>library_books</span>
                Question Library
              </h3>
              <div className="space-y-[16px]">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#c3c6d7]" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
                  <input className="w-full bg-[#0d141d] border border-[#434655] rounded-xl py-3 pl-10 pr-4 text-sm focus:border-[#22D97A] transition-all outline-none text-[#dce3f0] placeholder-[#c3c6d7]/50" placeholder="Search questions..." type="text" />
                </div>
                <div className="flex gap-2 items-center">
                  <select className="bg-[#0d141d] border border-[#434655] rounded-lg text-xs py-1.5 px-3 outline-none focus:border-[#22D97A] text-[#c3c6d7]">
                    <option>Software Engineer</option>
                    <option>Product Manager</option>
                    <option>Data Analyst</option>
                  </select>
                  <select className="bg-[#0d141d] border border-[#434655] rounded-lg text-xs py-1.5 px-3 outline-none focus:border-[#22D97A] text-[#c3c6d7]">
                    <option>Technical Skill</option>
                    <option>Soft Skill</option>
                    <option>Culture Fit</option>
                  </select>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  <button className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#22D97A] text-[#0d141d]">All</button>
                  <button className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#2e353f] text-[#c3c6d7] hover:bg-[#434655] transition-colors">Easy</button>
                  <button className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#2e353f] text-[#c3c6d7] hover:bg-[#434655] transition-colors">Medium</button>
                  <button className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#2e353f] text-[#c3c6d7] hover:bg-[#434655] transition-colors">Hard</button>
                </div>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-3 px-2" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent' }}>
              {/* Question Cards */}
              <div className="p-[24px] bg-[#0d141d] border border-white/5 rounded-xl hover:border-[#22D97A]/30 transition-all group">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#dce3f0] leading-snug line-clamp-2" style={{ fontFamily: 'Inter' }}>How would you architect a real-time messaging system using WebSockets and Node.js?</p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-2 py-0.5 rounded-md bg-red-500/10 text-red-400 text-[10px] font-bold uppercase">Hard</span>
                      <span className="px-2 py-0.5 rounded-md bg-[#22D97A]/10 text-[#22D97A] text-[10px] font-bold uppercase">Architecture</span>
                    </div>
                  </div>
                  <button className="w-8 h-8 flex items-center justify-center border border-[#22D97A]/50 text-[#22D97A] rounded-lg hover:bg-[#22D97A] hover:text-[#0d141d] transition-all">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
                  </button>
                </div>
              </div>

              <div className="p-[24px] bg-[#0d141d] border border-white/5 rounded-xl hover:border-[#22D97A]/30 transition-all group">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#dce3f0] leading-snug line-clamp-2" style={{ fontFamily: 'Inter' }}>Describe a time you had to resolve a conflict within your engineering team.</p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase">Medium</span>
                      <span className="px-2 py-0.5 rounded-md bg-[#22D97A]/10 text-[#22D97A] text-[10px] font-bold uppercase">Behavioral</span>
                    </div>
                  </div>
                  <button className="w-8 h-8 flex items-center justify-center border border-[#22D97A]/50 text-[#22D97A] rounded-lg hover:bg-[#22D97A] hover:text-[#0d141d] transition-all">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
                  </button>
                </div>
              </div>

              <div className="p-[24px] bg-[#0d141d] border border-white/5 rounded-xl hover:border-[#22D97A]/30 transition-all group">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#dce3f0] leading-snug line-clamp-2" style={{ fontFamily: 'Inter' }}>Explain the difference between vertical and horizontal scaling in cloud computing.</p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-2 py-0.5 rounded-md bg-green-500/10 text-green-400 text-[10px] font-bold uppercase">Easy</span>
                      <span className="px-2 py-0.5 rounded-md bg-[#22D97A]/10 text-[#22D97A] text-[10px] font-bold uppercase">Infrastructure</span>
                    </div>
                  </div>
                  <button className="w-8 h-8 flex items-center justify-center border border-[#22D97A]/50 text-[#22D97A] rounded-lg hover:bg-[#22D97A] hover:text-[#0d141d] transition-all">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Interview Builder */}
          <div className="w-[60%] flex flex-col rounded-2xl overflow-hidden" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            {/* Builder Settings Header */}
            <div className="p-[24px] border-b border-white/5 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <div className="flex-1">
                  <label className="font-semibold text-[10px] text-[#c3c6d7] block mb-1 uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>INTERVIEW NAME</label>
                  <input className="w-full bg-transparent border-none p-0 text-xl font-bold focus:ring-0 text-[#dce3f0] placeholder-[#c3c6d7]/30 outline-none" type="text" defaultValue="Senior Backend Engineer - Technical" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <label className="font-semibold text-[10px] text-[#c3c6d7] block mb-1 uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>DURATION</label>
                    <select className="bg-[#0d141d] border border-[#434655] rounded-lg text-xs py-1.5 px-3 outline-none focus:border-[#22D97A] text-[#dce3f0]">
                      <option>45 Minutes</option>
                      <option>60 Minutes</option>
                      <option>90 Minutes</option>
                    </select>
                  </div>
                  <div className="text-right">
                    <label className="font-semibold text-[10px] text-[#c3c6d7] block mb-1 uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>DIFFICULTY</label>
                    <select className="bg-[#0d141d] border border-[#434655] rounded-lg text-xs py-1.5 px-3 outline-none focus:border-[#22D97A] text-[#dce3f0]">
                      <option>Adaptive</option>
                      <option>Easy</option>
                      <option>Medium</option>
                      <option>Hard</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Builder Area */}
            <div className="flex-1 overflow-y-auto p-[24px] space-y-4" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent' }}>
              {/* Slot 1: Filled */}
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-lg bg-[#22D97A] flex items-center justify-center text-[#0d141d] font-bold text-sm shrink-0 shadow-[0_0_15px_rgba(34,217,122,0.3)]">1</div>
                <div className="flex-1 bg-[#192029] border border-white/10 rounded-xl p-[24px] flex items-center gap-4 group cursor-grab">
                  <span className="material-symbols-outlined text-[#c3c6d7] opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 0" }}>drag_indicator</span>
                  <p className="text-sm font-medium flex-1 text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Introduce yourself and explain your most significant technical achievement in the last 2 years.</p>
                  <button className="p-1.5 hover:bg-red-500/10 text-[#c3c6d7] hover:text-red-400 rounded-lg transition-colors">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>delete</span>
                  </button>
                </div>
              </div>

              {/* Slot 2: Filled */}
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-lg bg-[#22D97A] flex items-center justify-center text-[#0d141d] font-bold text-sm shrink-0 shadow-[0_0_15px_rgba(34,217,122,0.3)]">2</div>
                <div className="flex-1 bg-[#192029] border border-white/10 rounded-xl p-[24px] flex items-center gap-4 group cursor-grab">
                  <span className="material-symbols-outlined text-[#c3c6d7] opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 0" }}>drag_indicator</span>
                  <p className="text-sm font-medium flex-1 text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Live Coding: Implement a rate-limiting middleware for a high-traffic REST API.</p>
                  <button className="p-1.5 hover:bg-red-500/10 text-[#c3c6d7] hover:text-red-400 rounded-lg transition-colors">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>delete</span>
                  </button>
                </div>
              </div>

              {/* Empty Slot */}
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#c3c6d7] font-bold text-sm shrink-0">3</div>
                <div className="flex-1 border-2 border-dashed border-white/10 rounded-xl p-[80px] flex flex-col items-center justify-center gap-2 text-[#c3c6d7] hover:border-[#22D97A]/40 hover:bg-[#22D97A]/5 transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>add_circle</span>
                  <p className="text-sm" style={{ fontFamily: 'Inter' }}>Drop question here or click to browse</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 justify-center py-4">
                <button className="flex items-center gap-2 px-[24px] py-2.5 rounded-full border border-[#434655] font-semibold text-[15px] hover:bg-white/5 transition-colors text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>edit_note</span>
                  Add Custom Question
                </button>
                <button className="flex items-center gap-2 px-[24px] py-2.5 rounded-full bg-[#22D97A] text-[#0d141d] font-semibold text-[15px] hover:shadow-[0_0_20px_rgba(34,217,122,0.4)] transition-all" style={{ fontFamily: 'Inter' }}>
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>auto_awesome</span>
                  + Generate with AI
                </button>
              </div>

              {/* Settings Card */}
              <div className="mt-[80px] p-[24px] bg-[#232a34]/40 border border-white/5 rounded-2xl">
                <h4 className="font-bold mb-[24px] flex items-center gap-2 text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  <span className="material-symbols-outlined text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 0" }}>settings_suggest</span>
                  Interview Settings
                </h4>
                <div className="grid grid-cols-2 gap-[24px]">
                  <div className="space-y-[24px]">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#c3c6d7]">Randomize Question Order</span>
                      <button className="w-10 h-5 bg-[#22D97A] rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-[#0d141d] rounded-full shadow-md"></div>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#c3c6d7]">Allow Candidates to Skip Questions</span>
                      <button className="w-10 h-5 bg-[#2e353f] rounded-full relative">
                        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-[#c3c6d7] rounded-full shadow-md"></div>
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold text-[10px] text-[#c3c6d7] block mb-2 uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>AI PROCTORING SENSITIVITY</label>
                    <div className="flex bg-[#0d141d] rounded-lg p-1 border border-[#434655]">
                      <button className="flex-1 py-1.5 text-[10px] font-bold rounded-md bg-[#2e353f] text-[#c3c6d7]">Low</button>
                      <button className="flex-1 py-1.5 text-[10px] font-bold rounded-md bg-[#22D97A] text-[#0d141d]">Medium</button>
                      <button className="flex-1 py-1.5 text-[10px] font-bold rounded-md text-[#c3c6d7]">High</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Footer Actions */}
            <div className="p-[24px] border-t border-white/5 bg-[#151c25]/80 backdrop-blur-sm flex justify-between items-center">
              <button className="flex items-center gap-2 px-[24px] py-3 rounded-xl border border-[#434655] text-[#c3c6d7] hover:text-[#dce3f0] transition-colors font-semibold" style={{ fontFamily: 'Inter' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>save_as</span>
                Save as Template
              </button>
              <div className="flex gap-[16px] items-center">
                <p className="text-sm text-[#c3c6d7] mr-4 text-right">
                  <span className="block font-bold text-[#dce3f0]">Final Step</span>
                  Link this interview to a job post
                </p>
                <button className="px-[80px] py-3 bg-[#22D97A] text-[#0d141d] rounded-xl font-semibold text-[15px] hover:shadow-[0_0_25px_rgba(34,217,122,0.5)] transition-all flex items-center gap-2" style={{ fontFamily: 'Inter' }}>
                  Apply to Job 
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
