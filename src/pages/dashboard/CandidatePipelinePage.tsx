import { Link, useParams } from 'react-router-dom';

export default function CandidatePipelinePage() {
  const { id } = useParams();
  
  // Optional: Convert URL id to display text (e.g., 'senior-react-developer' -> 'Senior React Developer')
  const jobTitle = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Senior React Developer';

  return (
    <div className="bg-[#0D1A14] text-[#dce3f0] font-body-md overflow-hidden h-screen flex">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-[240px] z-50 flex flex-col py-[24px] px-[16px]" style={{ backgroundColor: '#0A0F0C', borderRight: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="mb-[80px] flex items-center gap-[8px] px-[8px]">
          <span className="text-[32px] font-extrabold tracking-tighter text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            hire<span className="text-[#22D97A]">iq</span>
          </span>
        </div>
        
        <nav className="flex-1 space-y-[8px]">
          {/* Dashboard */}
          <Link to="/dashboard" className="flex items-center gap-[8px] text-[#c3c6d7] hover:text-[#dce3f0] px-[16px] py-[8px] transition-all duration-200 hover:bg-white/5 rounded-lg group">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard</span>
            <span className="font-semibold text-[15px]" style={{ fontFamily: 'Inter' }}>Dashboard</span>
          </Link>
          {/* Jobs (ACTIVE) */}
          <Link to="/jobs" className="flex items-center gap-[8px] text-[#b4c5ff] bg-[#b4c5ff]/5 px-[16px] py-[8px] border-r-2 border-[#b4c5ff] rounded-l-lg">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>bar_chart</span>
            <span className="font-semibold text-[15px]" style={{ fontFamily: 'Inter' }}>Jobs</span>
          </Link>
          {/* Candidates */}
          <Link to="/pipeline" className="flex items-center gap-[8px] text-[#c3c6d7] hover:text-[#dce3f0] px-[16px] py-[8px] transition-all duration-200 hover:bg-white/5 rounded-lg group">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>groups</span>
            <span className="font-semibold text-[15px]" style={{ fontFamily: 'Inter' }}>Candidates</span>
          </Link>
          {/* Interviews */}
          <Link to="/interviews/builder" className="flex items-center gap-[8px] text-[#c3c6d7] hover:text-[#dce3f0] px-[16px] py-[8px] transition-all duration-200 hover:bg-white/5 rounded-lg group">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>event</span>
            <span className="font-semibold text-[15px]" style={{ fontFamily: 'Inter' }}>Interviews</span>
          </Link>
          {/* Recruiters */}
          <a href="#" className="flex items-center gap-[8px] text-[#c3c6d7] hover:text-[#dce3f0] px-[16px] py-[8px] transition-all duration-200 hover:bg-white/5 rounded-lg group">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>badge</span>
            <span className="font-semibold text-[15px]" style={{ fontFamily: 'Inter' }}>Recruiters</span>
          </a>
          {/* Settings */}
          <Link to="/settings" className="flex items-center gap-[8px] text-[#c3c6d7] hover:text-[#dce3f0] px-[16px] py-[8px] transition-all duration-200 hover:bg-white/5 rounded-lg group">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
            <span className="font-semibold text-[15px]" style={{ fontFamily: 'Inter' }}>Settings</span>
          </Link>
        </nav>
        
        <div className="mt-auto">
          <div className="p-[16px] bg-[#22D97A]/10 border border-[#22D97A]/20 rounded-xl mb-[24px]">
            <p className="text-[12px] font-bold text-[#22D97A] uppercase tracking-widest mb-1" style={{ fontFamily: 'Inter' }}>Enterprise</p>
            <p className="text-[13px] text-[#c3c6d7] mb-3" style={{ fontFamily: 'Inter' }}>Manage unlimited pipelines.</p>
            <button className="w-full py-2 bg-[#22D97A] text-black font-bold text-[13px] rounded-lg hover:brightness-110 transition-all" style={{ fontFamily: 'Inter' }}>Upgrade Plan</button>
          </div>
          <div className="flex items-center gap-[16px] px-[8px] pt-[8px] border-t border-white/5">
            <img alt="User Profile" className="w-8 h-8 rounded-full border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKzotMbKoG1fgHN3cTWjwORFTweHRxVTrY00EwvJiciSbIB4SqeugvOech5WM5Uhc0nj6oXGiEX95uE41acjJw0yzmUHIin8fs0aRdQW2gH1xP9zd287-_FERKY5rVgYK3fiylA5AyyYROjAvQYhR8Jtm1e4TZju0A4FqKfFQFZnuOxLc2A3C8DVN_SVxhg0NcEhNCYpe0FoHcxEfHZr3KBrL7A8h_GOnwCEzA4lXc-F1BxcsnN4osriiYjFzftSst4-vUa1X2SrQ" />
            <div>
              <p className="font-semibold text-white text-[13px]" style={{ fontFamily: 'Inter' }}>Alex Rivera</p>
              <p className="text-[12px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Admin View</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 ml-[240px] flex flex-col h-full relative overflow-hidden">
        {/* TopNavBar */}
        <header className="sticky top-0 z-40 w-full border-b border-white/5 px-[48px] py-[16px] flex justify-between items-center h-[72px]" style={{ background: 'rgba(13, 26, 20, 0.8)', backdropFilter: 'blur(12px)' }}>
          <div className="flex items-center gap-[24px]">
            <h1 className="text-[24px] font-bold text-white tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>Candidate Pipeline</h1>
            <div className="hidden md:flex bg-[#0B0F19] border border-white/5 rounded-full px-[16px] py-1.5 items-center gap-[8px] w-[320px]">
              <span className="material-symbols-outlined text-[#c3c6d7] text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
              <input className="bg-transparent border-none focus:outline-none focus:ring-0 text-[14px] text-[#dce3f0] w-full p-0 placeholder-[#c3c6d7]/50" placeholder="Global search..." type="text" />
            </div>
          </div>
          
          <div className="flex items-center gap-[24px]">
            <div className="flex items-center gap-[16px]">
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-[#c3c6d7] hover:bg-white/5 transition-colors relative">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#22D97A] rounded-full border-2 border-[#0D1A14]"></span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-[#c3c6d7] hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
              </button>
            </div>
            <button className="flex items-center gap-[8px] px-[24px] py-2.5 bg-[#22D97A] text-black font-semibold text-[15px] rounded-full hover:shadow-[0_0_15px_rgba(34,217,122,0.3)] transition-all active:scale-95" style={{ fontFamily: 'Inter' }}>
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
              Add Candidate
            </button>
          </div>
        </header>

        {/* Sub-header Toolbar */}
        <section className="px-[48px] py-[16px] flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-[24px]">
            <Link to={`/jobs/${id || 'senior-react-developer'}`} className="flex items-center gap-[8px] bg-[#192029]/50 px-[16px] py-1.5 rounded-lg border border-white/5 cursor-pointer hover:bg-[#192029] transition-colors">
              <span className="text-[#dce3f0] font-semibold text-[14px]">{jobTitle}</span>
              <span className="material-symbols-outlined text-[#c3c6d7]" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
            </Link>
            <div className="h-6 w-px bg-white/5"></div>
            <div className="flex bg-[#192029]/30 rounded-lg p-1">
              <button className="px-[16px] py-1.5 text-[#22D97A] text-[14px] font-semibold border-b-2 border-[#22D97A]">Kanban View</button>
              <button className="px-[16px] py-1.5 text-[#c3c6d7] text-[14px] font-semibold hover:text-[#dce3f0] transition-colors">List View</button>
            </div>
          </div>
          
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-[8px] bg-[#0B0F19] border border-white/5 rounded-lg px-[16px] py-1.5">
              <span className="material-symbols-outlined text-[#c3c6d7] text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>filter_list</span>
              <input className="bg-transparent border-none focus:outline-none focus:ring-0 text-[14px] text-[#dce3f0] w-48 p-0 placeholder-[#c3c6d7]/50" placeholder="Search candidates..." type="text" />
            </div>
            <button className="px-[16px] py-1.5 flex items-center gap-[8px] border border-white/5 rounded-lg text-[14px] font-semibold hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>tune</span>
              Filter
            </button>
          </div>
        </section>

        {/* Kanban Board Area */}
        <section className="flex-1 overflow-x-auto p-[48px] flex gap-[24px] items-start relative z-10" style={{ background: 'radial-gradient(circle at bottom right, rgba(34, 217, 122, 0.05), transparent, transparent)' }}>
          
          {/* Column: Applied */}
          <div className="w-[300px] min-w-[300px] flex flex-col gap-[16px]">
            <div className="flex items-center justify-between border-t-2 border-blue-400 pt-3 mb-2">
              <h3 className="text-[12px] font-bold text-[#c3c6d7] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
                Applied <span className="ml-1 text-[#dce3f0]">(34)</span>
              </h3>
              <span className="material-symbols-outlined text-[#c3c6d7] cursor-pointer" style={{ fontVariationSettings: "'FILL' 0" }}>more_horiz</span>
            </div>
            
            {/* Card 1 */}
            <div className="p-[16px] bg-[#111111] border border-[#1A2A1F] rounded-xl hover:-translate-y-1 transition-all duration-200" style={{ boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.5)' }}>
              <div className="flex justify-between items-start mb-[8px]">
                <div className="flex items-center gap-[16px]">
                  <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-[14px] shadow-[0_0_8px_rgba(59,130,246,0.3)]">SA</div>
                  <div>
                    <h4 className="font-semibold text-[14px] text-white">Sarah Ahmed</h4>
                    <p className="text-[12px] text-[#c3c6d7]">2 hours ago</p>
                  </div>
                </div>
                <Link to="/candidates/sarah-ahmed" className="material-symbols-outlined text-[#c3c6d7] hover:text-[#22D97A] text-[18px] transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>open_in_new</Link>
              </div>
              <div className="flex gap-[8px] mt-[24px]">
                <span className="px-[8px] py-0.5 bg-white/5 rounded text-[10px] text-[#c3c6d7] font-bold border border-white/5 uppercase">Pending Score</span>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="p-[16px] bg-[#111111] border border-[#1A2A1F] rounded-xl hover:-translate-y-1 transition-all duration-200" style={{ boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.5)' }}>
              <div className="flex justify-between items-start mb-[8px]">
                <div className="flex items-center gap-[16px]">
                  <div className="w-9 h-9 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-[14px]">MC</div>
                  <div>
                    <h4 className="font-semibold text-[14px] text-white">Michael Chen</h4>
                    <p className="text-[12px] text-[#c3c6d7]">1 day ago</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[8px] mt-[24px]">
                <span className="px-[8px] py-0.5 bg-red-500/10 rounded text-[10px] text-red-400 font-bold border border-red-500/20 uppercase">45 Score</span>
                <span className="px-[8px] py-0.5 bg-white/5 rounded text-[10px] text-[#c3c6d7] font-bold border border-white/5 uppercase">High Risk</span>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="p-[16px] bg-[#111111] border border-[#1A2A1F] rounded-xl hover:-translate-y-1 transition-all duration-200" style={{ boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.5)' }}>
              <div className="flex justify-between items-start mb-[8px]">
                <div className="flex items-center gap-[16px]">
                  <div className="w-9 h-9 rounded-full bg-[#22D97A]/10 border border-[#22D97A]/30 flex items-center justify-center text-[#22D97A] font-bold text-[14px] shadow-[0_0_8px_rgba(34,217,122,0.3)]">ER</div>
                  <div>
                    <h4 className="font-semibold text-[14px] text-white">Elena Rodriguez</h4>
                    <p className="text-[12px] text-[#c3c6d7]">3 days ago</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[8px] mt-[24px]">
                <span className="px-[8px] py-0.5 bg-[#22D97A]/10 rounded text-[10px] text-[#22D97A] font-bold border border-[#22D97A]/20 uppercase">81 Score</span>
                <span className="px-[8px] py-0.5 bg-[#22D97A]/5 rounded text-[10px] text-[#22D97A]/70 font-bold border border-[#22D97A]/10 uppercase">Low Risk</span>
              </div>
            </div>
          </div>
          
          {/* Column: AI Screened */}
          <div className="w-[300px] min-w-[300px] flex flex-col gap-[16px]">
            <div className="flex items-center justify-between border-t-2 border-purple-400 pt-3 mb-2">
              <h3 className="text-[12px] font-bold text-[#c3c6d7] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
                AI Screened <span className="ml-1 text-[#dce3f0]">(18)</span>
              </h3>
              <span className="material-symbols-outlined text-[#c3c6d7] cursor-pointer" style={{ fontVariationSettings: "'FILL' 0" }}>more_horiz</span>
            </div>
            
            {/* Card 1 */}
            <div className="p-[16px] bg-[#111111] border border-[#1A2A1F] rounded-xl hover:-translate-y-1 transition-all duration-200" style={{ boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.5)' }}>
              <div className="flex justify-between items-start mb-[8px]">
                <div className="flex items-center gap-[16px]">
                  <div className="w-9 h-9 rounded-full bg-[#22D97A]/10 border border-[#22D97A]/30 flex items-center justify-center text-[#22D97A] font-bold text-[14px] shadow-[0_0_8px_rgba(34,217,122,0.3)]">DP</div>
                  <div>
                    <h4 className="font-semibold text-[14px] text-white">David Park</h4>
                    <p className="text-[12px] text-[#c3c6d7]">2 days ago</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[8px] mt-[24px]">
                <span className="px-[8px] py-0.5 bg-[#22D97A]/10 rounded text-[10px] text-[#22D97A] font-bold border border-[#22D97A]/20 uppercase">84 Score</span>
              </div>
              <div className="mt-[8px] p-[8px] bg-white/5 rounded text-[11px] text-[#c3c6d7] flex items-center gap-[8px]">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>psychology</span> AI: Recommended
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="p-[16px] bg-[#111111] border border-[#1A2A1F] rounded-xl hover:-translate-y-1 transition-all duration-200" style={{ boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.5)' }}>
              <div className="flex justify-between items-start mb-[8px]">
                <div className="flex items-center gap-[16px]">
                  <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 font-bold text-[14px]">PD</div>
                  <div>
                    <h4 className="font-semibold text-[14px] text-white">Priya Das</h4>
                    <p className="text-[12px] text-[#c3c6d7]">5 days ago</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[8px] mt-[24px]">
                <span className="px-[8px] py-0.5 bg-amber-500/10 rounded text-[10px] text-amber-500 font-bold border border-amber-500/20 uppercase">72 Score</span>
              </div>
            </div>
          </div>
          
          {/* Column: Assessment Done */}
          <div className="w-[300px] min-w-[300px] flex flex-col gap-[16px]">
            <div className="flex items-center justify-between border-t-2 border-amber-400 pt-3 mb-2">
              <h3 className="text-[12px] font-bold text-[#c3c6d7] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
                Assessment <span className="ml-1 text-[#dce3f0]">(12)</span>
              </h3>
              <span className="material-symbols-outlined text-[#c3c6d7] cursor-pointer" style={{ fontVariationSettings: "'FILL' 0" }}>more_horiz</span>
            </div>
            
            <div className="p-[16px] bg-[#111111] border border-[#1A2A1F] rounded-xl hover:-translate-y-1 transition-all duration-200" style={{ boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.5)' }}>
              <div className="flex justify-between items-start mb-[8px]">
                <div className="flex items-center gap-[16px]">
                  <div className="w-9 h-9 rounded-full bg-[#22D97A]/10 border border-[#22D97A]/30 flex items-center justify-center text-[#22D97A] font-bold text-[14px] shadow-[0_0_8px_rgba(34,217,122,0.3)]">JW</div>
                  <div>
                    <h4 className="font-semibold text-[14px] text-white">James Wilson</h4>
                    <p className="text-[12px] text-[#c3c6d7]">1 week ago</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[8px] mt-[24px]">
                <span className="px-[8px] py-0.5 bg-[#22D97A]/10 rounded text-[10px] text-[#22D97A] font-bold border border-[#22D97A]/20 uppercase">88 Score</span>
              </div>
              <div className="mt-[8px] p-[8px] bg-[#22D97A]/5 rounded text-[11px] text-[#22D97A] flex items-center gap-[8px] font-semibold">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>code</span> Test: 92%
              </div>
            </div>
          </div>
          
          {/* Column: Interviewed */}
          <div className="w-[300px] min-w-[300px] flex flex-col gap-[16px]">
            <div className="flex items-center justify-between border-t-2 border-green-400 pt-3 mb-2">
              <h3 className="text-[12px] font-bold text-[#c3c6d7] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
                Interviewed <span className="ml-1 text-[#dce3f0]">(7)</span>
              </h3>
              <span className="material-symbols-outlined text-[#c3c6d7] cursor-pointer" style={{ fontVariationSettings: "'FILL' 0" }}>more_horiz</span>
            </div>
            
            <div className="p-[16px] bg-[#111111] border border-[#1A2A1F] rounded-xl relative overflow-hidden hover:-translate-y-1 transition-all duration-200" style={{ boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.5)' }}>
              <div className="absolute -right-6 -top-6 w-16 h-16 bg-[#22D97A]/10 rounded-full blur-xl"></div>
              <div className="flex justify-between items-start mb-[8px]">
                <div className="flex items-center gap-[16px]">
                  <div className="w-9 h-9 rounded-full bg-[#22D97A]/10 border border-[#22D97A]/30 flex items-center justify-center text-[#22D97A] font-bold text-[14px] shadow-[0_0_12px_rgba(34,217,122,0.4)]">SR</div>
                  <div>
                    <h4 className="font-semibold text-[14px] text-white">Sofia Rossi</h4>
                    <p className="text-[12px] text-[#c3c6d7]">Yesterday</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[8px] mt-[24px]">
                <span className="px-[8px] py-0.5 bg-[#22D97A]/10 rounded text-[10px] text-[#22D97A] font-bold border border-[#22D97A]/20 uppercase">95 Score</span>
                <span className="px-[8px] py-0.5 bg-[#b4c5ff]/10 rounded text-[10px] text-[#b4c5ff] font-bold border border-[#b4c5ff]/20 uppercase">Top Candidate</span>
              </div>
              <div className="mt-[8px] flex items-center -space-x-2">
                <img alt="Recruiter 1" className="w-6 h-6 rounded-full border-2 border-[#111111]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK9KGXutf7hLTlo6vKUHZWK1WhQl07KmHui6_XV6Y0agH3Id0fD8cqMRDBl9CmDTHlPz2iUrWms70FCGiUDbu30vln3ovoetFsYdibMxRLZ6v_u6M-iofGefzFv_IDht57a0MvHHIuUMt58_S1xEzec10Dp4jOx4PkinmYvvLaIhxlMvSP3bg1496AQVVrgQE-3qvQqxrOyY3c1IzP47JB4BKsGveE7sq0g8z3HTQH9GK-wiHOWlHyiXK7-xYuXRcH5O4ATWmYbxg" />
                <img alt="Recruiter 2" className="w-6 h-6 rounded-full border-2 border-[#111111]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn-m8jbWaw8YU-bV5RrrQQ4Gv5gKZkMJu4CE3WpDd2y7wG7pUlGeb0lW05a1erfkbinHGaGJX0PMbkdSi0IubiEklQfSQ4AOJ8uj9LYauhq8b7fpKex7O3xT7p4t-u3VbcpWN39JUFleFEfuqv_-EBRj689EmBDn1e-lrp26MUj0ItXcWlTKgdKIrY1EaDrxwtFtRRBVekLZAZYAN21BpTebH69-IDgkoEQIHGkOfg5ru0H8mRQRXmp2BsrDLCZZCIdfh3W0y8OhY" />
                <span className="text-[10px] text-[#c3c6d7] ml-4 italic pl-4">+ 1 more feedback</span>
              </div>
            </div>
          </div>
          
          {/* Column: Decision */}
          <div className="w-[300px] min-w-[300px] flex flex-col gap-[16px]">
            <div className="flex items-center justify-between border-t-2 border-emerald-400 pt-3 mb-2">
              <h3 className="text-[12px] font-bold text-[#c3c6d7] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
                Decision <span className="ml-1 text-[#dce3f0]">(3)</span>
              </h3>
              <span className="material-symbols-outlined text-[#c3c6d7] cursor-pointer" style={{ fontVariationSettings: "'FILL' 0" }}>more_horiz</span>
            </div>
            
            <div className="p-[16px] bg-[#111111] border border-[#1A2A1F] rounded-xl hover:-translate-y-1 transition-all duration-200" style={{ boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.5)' }}>
              <div className="flex justify-between items-start mb-[8px]">
                <div className="flex items-center gap-[16px]">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-[14px] shadow-[0_0_8px_rgba(52,211,153,0.3)]">MT</div>
                  <div>
                    <h4 className="font-semibold text-[14px] text-white">Marcus Thorne</h4>
                    <p className="text-[12px] text-[#c3c6d7]">4 hours ago</p>
                  </div>
                </div>
              </div>
              <div className="mt-[24px]">
                <span className="px-[16px] py-1 bg-emerald-500/20 text-emerald-400 text-[11px] font-bold rounded-lg border border-emerald-500/30 block text-center uppercase tracking-wider">Advance to Offer</span>
              </div>
            </div>
          </div>
          
          {/* Add Column Button */}
          <button className="w-[300px] min-w-[300px] h-[120px] border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center gap-[8px] text-[#c3c6d7] hover:bg-white/5 hover:border-white/10 transition-all group">
            <span className="material-symbols-outlined text-[32px] group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 0" }}>add_circle</span>
            <span className="font-semibold text-[14px]">Add Stage</span>
          </button>
          
        </section>

        {/* Ambient Background Glow */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#22D97A]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#b4c5ff]/10 rounded-full blur-[120px] pointer-events-none"></div>
      </main>
    </div>
  );
}
