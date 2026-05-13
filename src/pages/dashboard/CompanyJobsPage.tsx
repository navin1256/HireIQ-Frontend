import { Link } from 'react-router-dom';

export default function CompanyJobsPage() {
  return (
    <div className="bg-[#0D1A14] font-body-md text-[#dce3f0] antialiased overflow-x-hidden min-h-screen">
      {/* SideNavBar */}
      <aside className="w-64 h-screen fixed left-0 top-0 bg-[#151c25] border-r border-white/10 backdrop-blur-xl shadow-xl flex flex-col py-[48px] px-[16px] z-50">
        <div className="flex items-center gap-[8px] px-[16px] mb-[80px]">
          <div className="w-8 h-8 bg-[#b4c5ff] rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-[#0d141d]" style={{ fontVariationSettings: "'FILL' 0" }}>psychology</span>
          </div>
          <div>
            <h1 className="text-[32px] font-bold text-[#b4c5ff] leading-none" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</h1>
            <p className="text-[10px] text-[#c3c6d7] tracking-wider uppercase" style={{ fontFamily: 'Inter' }}>AI Talent Acquisition</p>
          </div>
        </div>
        
        <nav className="flex-1 space-y-[8px]">
          <Link to="/dashboard" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link to="/jobs" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#b4c5ff] font-bold border-r-2 border-[#b4c5ff] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>work</span>
            <span>Jobs</span>
          </Link>
          <Link to="/pipeline" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>group</span>
            <span>Candidates</span>
          </Link>
          <Link to="/interviews/builder" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>event</span>
            <span>Interviews</span>
          </Link>
          <a href="#" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>assignment</span>
            <span>Assessments</span>
          </a>
          <Link to="/analytics" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>monitoring</span>
            <span>Analytics</span>
          </Link>
          <a href="#" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>psychology</span>
            <span>Expert IaaS</span>
          </a>
          <Link to="/settings" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] hover:bg-white/5 transition-all duration-200 hover:translate-x-1" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
            <span>Settings</span>
          </Link>
        </nav>
        
        <div className="mt-auto pt-[48px] border-t border-white/5 space-y-[16px]">
          <div className="bg-[#b4c5ff]/10 rounded-xl p-[16px] text-center">
            <p className="text-[12px] text-[#b4c5ff] mb-[8px]" style={{ fontFamily: 'Inter' }}>Professional Plan</p>
            <button className="w-full py-[8px] bg-[#b4c5ff] text-[#002a78] rounded-lg font-semibold text-[13px] hover:brightness-110 transition-all" style={{ fontFamily: 'Inter' }}>Upgrade Plan</button>
          </div>
          <a href="#" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] hover:bg-white/5 transition-all duration-200" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>account_circle</span>
            <span>Account</span>
          </a>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="flex justify-between items-center h-20 px-[24px] ml-64 sticky top-0 right-0 bg-[#0d141d]/70 border-b border-white/5 backdrop-blur-md z-40">
        <div className="flex items-center gap-[16px] flex-1">
          <div className="relative w-[400px]">
            <span className="material-symbols-outlined absolute left-[16px] top-1/2 -translate-y-1/2 text-gray-500 text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
            <input 
              className="w-full bg-[#080f17] border border-white/10 rounded-full pl-[48px] pr-[16px] py-[8px] text-[14px] focus:outline-none focus:border-[#22D97A]/50 transition-all text-[#dce3f0]" 
              placeholder="Search platform..." 
              type="text" 
            />
          </div>
        </div>
        <div className="flex items-center gap-[24px]">
          <Link to="/jobs/new" className="bg-[#2563eb] text-[#eeefff] px-[24px] py-[8px] rounded-full font-semibold text-[14px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
            Post New Job
          </Link>
          <div className="flex items-center gap-[16px] text-[#c3c6d7]">
            <button className="material-symbols-outlined hover:text-[#b4c5ff] transition-colors duration-200" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</button>
            <button className="material-symbols-outlined hover:text-[#b4c5ff] transition-colors duration-200" style={{ fontVariationSettings: "'FILL' 0" }}>help</button>
          </div>
          <div className="w-10 h-10 rounded-full border border-[#b4c5ff]/20 overflow-hidden">
            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZDjPX5JzjF6QKZoOPXBJjRV9E45Aw1v47rQHUhO8gg5yJYmoohdBZL152oc1J280A_w-D8MkpzV0Q8DVBgvH2CBPm1DazVkK882ZTiLgRicZZv0qPxFqVZGu_2DHU0c_bwlgV8u38qsjUcoGIjaKQs7nEr4nMvQQTKPwbPv03h1OfY728qEtk4sXCFQgfAlW-rdhiNIv7quxTyEo_qqY39u9revJHsfgq5drQthQf7DItwVNLKPJcwdRSsCfX3uoGLY8gGOx4E_M" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-64 p-[28px] min-h-[calc(100vh-80px)]">
        {/* Page Header */}
        <div className="flex flex-col gap-[8px] mb-[48px]">
          <h2 className="text-[28px] font-extrabold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>Jobs</h2>
          <p className="text-[14px] text-gray-500" style={{ fontFamily: 'Inter' }}>Manage all your open engineering positions</p>
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center justify-between gap-[24px] mb-[48px]">
          <div className="relative w-[300px]">
            <span className="material-symbols-outlined absolute left-[16px] top-1/2 -translate-y-1/2 text-gray-500 text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
            <input 
              className="w-full bg-[#0B0F19] border border-white/10 rounded-lg pl-[48px] pr-[16px] py-[10px] text-[14px] focus:outline-none focus:border-[#22D97A]/50 transition-all text-[#dce3f0]" 
              placeholder="Search jobs..." 
              type="text" 
            />
          </div>
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-[8px] bg-[#151c25] border border-white/5 px-[16px] py-[8px] rounded-lg cursor-pointer hover:border-white/20 transition-all">
              <span className="text-[14px] font-medium" style={{ fontFamily: 'Inter' }}>Status: All</span>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
            </div>
            <div className="flex items-center gap-[8px] bg-[#151c25] border border-white/5 px-[16px] py-[8px] rounded-lg cursor-pointer hover:border-white/20 transition-all">
              <span className="text-[14px] font-medium" style={{ fontFamily: 'Inter' }}>Sort: Newest first</span>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>sort</span>
            </div>
            <div className="flex bg-[#111111] border border-white/5 rounded-lg p-[3px]">
              <button className="flex items-center justify-center w-9 h-8 bg-[#22D97A]/10 text-[#22D97A] rounded-md">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>format_list_bulleted</span>
              </button>
              <button className="flex items-center justify-center w-9 h-8 text-[#c3c6d7] hover:text-white">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>grid_view</span>
              </button>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="flex flex-col gap-[16px]">
          {/* Job Card 1 */}
          <div className="hover:border-[#22D97A] hover:shadow-[0_0_20px_rgba(34,217,122,0.15)] hover:-translate-y-1 bg-[#111111] border border-[#1A2A1F] rounded-[16px] p-[24px] flex flex-wrap lg:flex-nowrap items-center gap-[48px] transition-all duration-300 group">
            {/* Left Section */}
            <div className="flex-1 min-w-[280px]">
              <div className="flex items-center gap-[16px] mb-[8px]">
                <Link to="/jobs/senior-react-developer" className="text-lg font-bold text-white group-hover:text-[#22D97A] transition-colors" style={{ fontFamily: 'Plus Jakarta Sans' }}>Senior React Developer</Link>
                <span className="bg-[#22D97A]/10 text-[#22D97A] text-[10px] px-[8px] py-[2px] rounded uppercase font-bold tracking-wider" style={{ fontFamily: 'Inter' }}>New</span>
              </div>
              <div className="flex flex-wrap gap-[8px] mb-[16px]">
                <span className="bg-white/5 text-[#c3c6d7] text-[11px] px-[16px] py-[4px] rounded-full border border-white/5" style={{ fontFamily: 'Inter' }}>Frontend</span>
                <span className="bg-white/5 text-[#c3c6d7] text-[11px] px-[16px] py-[4px] rounded-full border border-white/5" style={{ fontFamily: 'Inter' }}>Remote</span>
                <span className="bg-white/5 text-[#c3c6d7] text-[11px] px-[16px] py-[4px] rounded-full border border-white/5" style={{ fontFamily: 'Inter' }}>Full-time</span>
              </div>
              <p className="text-[12px] text-gray-500 flex items-center gap-[8px]" style={{ fontFamily: 'Inter' }}>
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
                Posted 3 days ago
              </p>
            </div>
            {/* Center Section */}
            <div className="flex-1 min-w-[200px]">
              <div className="flex justify-between items-center mb-[8px]">
                <span className="text-[13px] font-medium" style={{ fontFamily: 'Inter' }}>Pipeline Overview</span>
                <span className="text-[13px] text-[#22D97A] font-bold" style={{ fontFamily: 'Inter' }}>34 Applicants</span>
              </div>
              <div className="flex gap-[2px] rounded-full overflow-hidden w-full h-[6px]">
                <div className="bg-blue-500 w-[40%]" title="Applied"></div>
                <div className="bg-purple-500 w-[25%]" title="Screened"></div>
                <div className="bg-orange-500 w-[20%]" title="Interviewed"></div>
                <div className="bg-[#22D97A] w-[15%]" title="Hired"></div>
              </div>
              <div className="flex gap-[16px] mt-[8px]">
                <div className="flex items-center gap-[8px]">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-[10px] text-gray-500" style={{ fontFamily: 'Inter' }}>Applied</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="w-2 h-2 rounded-full bg-[#22D97A]"></div>
                  <span className="text-[10px] text-gray-500" style={{ fontFamily: 'Inter' }}>Hired</span>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-[24px] lg:ml-auto">
              <div className="flex flex-col items-end mr-[16px]">
                <div className="flex items-center gap-[8px] text-[#22D97A] bg-[#22D97A]/10 px-[16px] py-[8px] rounded-full border border-[#22D97A]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D97A] animate-pulse"></span>
                  <span className="text-[11px] font-bold uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Active</span>
                </div>
              </div>
              <Link to="/jobs/senior-react-developer" className="px-[24px] py-[16px] rounded-full border border-[#22D97A] text-[#22D97A] font-semibold text-[13px] hover:bg-[#22D97A]/10 hover:shadow-[0_0_15px_rgba(34,217,122,0.3)] transition-all" style={{ fontFamily: 'Inter' }}>
                View Pipeline
              </Link>
              <button className="material-symbols-outlined text-[#c3c6d7] hover:text-white transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>more_vert</button>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="hover:border-[#22D97A] hover:shadow-[0_0_20px_rgba(34,217,122,0.15)] hover:-translate-y-1 bg-[#111111] border border-[#1A2A1F] rounded-[16px] p-[24px] flex flex-wrap lg:flex-nowrap items-center gap-[48px] transition-all duration-300 group">
            <div className="flex-1 min-w-[280px]">
              <div className="flex items-center gap-[16px] mb-[8px]">
                <h3 className="text-lg font-bold text-white group-hover:text-[#22D97A] transition-colors" style={{ fontFamily: 'Plus Jakarta Sans' }}>Machine Learning Engineer</h3>
              </div>
              <div className="flex flex-wrap gap-[8px] mb-[16px]">
                <span className="bg-white/5 text-[#c3c6d7] text-[11px] px-[16px] py-[4px] rounded-full border border-white/5" style={{ fontFamily: 'Inter' }}>AI/ML</span>
                <span className="bg-white/5 text-[#c3c6d7] text-[11px] px-[16px] py-[4px] rounded-full border border-white/5" style={{ fontFamily: 'Inter' }}>Hybrid</span>
                <span className="bg-white/5 text-[#c3c6d7] text-[11px] px-[16px] py-[4px] rounded-full border border-white/5" style={{ fontFamily: 'Inter' }}>Contract</span>
              </div>
              <p className="text-[12px] text-gray-500 flex items-center gap-[8px]" style={{ fontFamily: 'Inter' }}>
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
                Posted 1 week ago
              </p>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="flex justify-between items-center mb-[8px]">
                <span className="text-[13px] font-medium" style={{ fontFamily: 'Inter' }}>Pipeline Overview</span>
                <span className="text-[13px] text-[#22D97A] font-bold" style={{ fontFamily: 'Inter' }}>112 Applicants</span>
              </div>
              <div className="flex gap-[2px] rounded-full overflow-hidden w-full h-[6px]">
                <div className="bg-blue-500 w-[60%]" title="Applied"></div>
                <div className="bg-purple-500 w-[20%]" title="Screened"></div>
                <div className="bg-orange-500 w-[15%]" title="Interviewed"></div>
                <div className="bg-[#22D97A] w-[5%]" title="Hired"></div>
              </div>
              <div className="flex gap-[16px] mt-[8px]">
                <div className="flex items-center gap-[8px]">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-[10px] text-gray-500" style={{ fontFamily: 'Inter' }}>Applied</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="w-2 h-2 rounded-full bg-[#22D97A]"></div>
                  <span className="text-[10px] text-gray-500" style={{ fontFamily: 'Inter' }}>Hired</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[24px] lg:ml-auto">
              <div className="flex items-center gap-[8px] text-[#22D97A] bg-[#22D97A]/10 px-[16px] py-[8px] rounded-full border border-[#22D97A]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D97A] animate-pulse"></span>
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Active</span>
              </div>
              <button className="px-[24px] py-[16px] rounded-full border border-[#22D97A] text-[#22D97A] font-semibold text-[13px] hover:bg-[#22D97A]/10 hover:shadow-[0_0_15px_rgba(34,217,122,0.3)] transition-all" style={{ fontFamily: 'Inter' }}>
                View Pipeline
              </button>
              <button className="material-symbols-outlined text-[#c3c6d7] hover:text-white transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>more_vert</button>
            </div>
          </div>

          {/* Job Card 3 */}
          <div className="hover:border-[#22D97A] hover:shadow-[0_0_20px_rgba(34,217,122,0.15)] hover:-translate-y-1 bg-[#111111] border border-[#1A2A1F] rounded-[16px] p-[24px] flex flex-wrap lg:flex-nowrap items-center gap-[48px] transition-all duration-300 group">
            <div className="flex-1 min-w-[280px]">
              <div className="flex items-center gap-[16px] mb-[8px]">
                <h3 className="text-lg font-bold text-white group-hover:text-[#22D97A] transition-colors" style={{ fontFamily: 'Plus Jakarta Sans' }}>DevOps Specialist</h3>
              </div>
              <div className="flex flex-wrap gap-[8px] mb-[16px]">
                <span className="bg-white/5 text-[#c3c6d7] text-[11px] px-[16px] py-[4px] rounded-full border border-white/5" style={{ fontFamily: 'Inter' }}>Infrastructure</span>
                <span className="bg-white/5 text-[#c3c6d7] text-[11px] px-[16px] py-[4px] rounded-full border border-white/5" style={{ fontFamily: 'Inter' }}>Remote</span>
              </div>
              <p className="text-[12px] text-gray-500 flex items-center gap-[8px]" style={{ fontFamily: 'Inter' }}>
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
                Posted 2 weeks ago
              </p>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="flex justify-between items-center mb-[8px]">
                <span className="text-[13px] font-medium" style={{ fontFamily: 'Inter' }}>Pipeline Overview</span>
                <span className="text-[13px] text-[#22D97A] font-bold" style={{ fontFamily: 'Inter' }}>48 Applicants</span>
              </div>
              <div className="flex gap-[2px] rounded-full overflow-hidden w-full h-[6px]">
                <div className="bg-blue-500 w-[30%]" title="Applied"></div>
                <div className="bg-purple-500 w-[30%]" title="Screened"></div>
                <div className="bg-orange-500 w-[30%]" title="Interviewed"></div>
                <div className="bg-[#22D97A] w-[10%]" title="Hired"></div>
              </div>
              <div className="flex gap-[16px] mt-[8px]">
                <div className="flex items-center gap-[8px]">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-[10px] text-gray-500" style={{ fontFamily: 'Inter' }}>Applied</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="w-2 h-2 rounded-full bg-[#22D97A]"></div>
                  <span className="text-[10px] text-gray-500" style={{ fontFamily: 'Inter' }}>Hired</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[24px] lg:ml-auto">
              <div className="flex items-center gap-[8px] text-orange-400 bg-orange-400/10 px-[16px] py-[8px] rounded-full border border-orange-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-orange-400" style={{ fontFamily: 'Inter' }}>On Hold</span>
              </div>
              <button className="px-[24px] py-[16px] rounded-full border border-[#22D97A] text-[#22D97A] font-semibold text-[13px] hover:bg-[#22D97A]/10 hover:shadow-[0_0_15px_rgba(34,217,122,0.3)] transition-all" style={{ fontFamily: 'Inter' }}>
                View Pipeline
              </button>
              <button className="material-symbols-outlined text-[#c3c6d7] hover:text-white transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>more_vert</button>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-[80px] flex justify-center items-center gap-[8px]">
          <button className="flex items-center gap-[8px] px-[24px] py-[16px] bg-[#151c25] border border-white/5 rounded-lg text-[14px] text-[#c3c6d7] hover:text-white hover:border-white/20 transition-all" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>chevron_left</span>
            Previous
          </button>
          <div className="flex gap-[8px]">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#22D97A] text-[#0D1A14] font-bold text-[14px]">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#151c25] border border-white/5 text-[#c3c6d7] hover:text-white transition-all text-[14px]">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#151c25] border border-white/5 text-[#c3c6d7] hover:text-white transition-all text-[14px]">3</button>
          </div>
          <button className="flex items-center gap-[8px] px-[24px] py-[16px] bg-[#151c25] border border-white/5 rounded-lg text-[14px] text-[#c3c6d7] hover:text-white hover:border-white/20 transition-all" style={{ fontFamily: 'Inter' }}>
            Next
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>chevron_right</span>
          </button>
        </div>

        {/* Background Aesthetic Elements */}
        <div className="fixed top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#22D97A]/5 blur-[150px] -z-10 pointer-events-none"></div>
        <div className="fixed bottom-0 left-[20%] w-[400px] h-[400px] bg-[#b4c5ff]/5 blur-[120px] -z-10 pointer-events-none"></div>
      </main>
    </div>
  );
}
