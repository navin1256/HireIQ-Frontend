import { Link } from 'react-router-dom';

export default function AnalyticsDashboardPage() {
  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body-md overflow-x-hidden min-h-screen">
      {/* SIDEBAR */}
      <aside className="fixed h-full w-64 left-0 top-0 border-r border-white/10 bg-[#0A0F0C] z-50 flex flex-col py-[48px] px-[24px] gap-[8px]">
        <div className="mb-[48px] px-[8px]">
          <h1 className="text-[32px] font-extrabold text-[#b4c5ff] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</h1>
          <p className="text-[10px] uppercase tracking-widest text-[#c3c6d7] font-bold mt-1" style={{ fontFamily: 'Inter' }}>Enterprise Tier</p>
        </div>
        <nav className="flex-1 space-y-1">
          <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 text-[#c3c6d7] font-medium hover:text-[#b4c5ff] hover:bg-white/5 transition-all duration-200 rounded-lg" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard</span>
            Dashboard
          </Link>
          <Link to="/jobs" className="flex items-center gap-3 px-3 py-2 text-[#c3c6d7] font-medium hover:text-[#b4c5ff] hover:bg-white/5 transition-all duration-200 rounded-lg" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>work</span>
            Jobs
          </Link>
          <Link to="/pipeline" className="flex items-center gap-3 px-3 py-2 text-[#c3c6d7] font-medium hover:text-[#b4c5ff] hover:bg-white/5 transition-all duration-200 rounded-lg" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>group</span>
            Candidates
          </Link>
          <Link to="/interviews/builder" className="flex items-center gap-3 px-3 py-2 text-[#c3c6d7] font-medium hover:text-[#b4c5ff] hover:bg-white/5 transition-all duration-200 rounded-lg" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_today</span>
            Interviews
          </Link>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-[#c3c6d7] font-medium hover:text-[#b4c5ff] hover:bg-white/5 transition-all duration-200 rounded-lg" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>assignment</span>
            Assessments
          </a>
          <Link to="/analytics" className="flex items-center gap-3 px-3 py-2 text-[#b4c5ff] font-bold border-l-2 border-[#b4c5ff] bg-[#b4c5ff]/5 rounded-r-lg" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>insights</span>
            Analytics
          </Link>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-[#c3c6d7] font-medium hover:text-[#b4c5ff] hover:bg-white/5 transition-all duration-200 rounded-lg" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>psychology</span>
            Expert IaaS
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-[#c3c6d7] font-medium hover:text-[#b4c5ff] hover:bg-white/5 transition-all duration-200 rounded-lg" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
            Settings
          </a>
        </nav>
        <Link to="/jobs/new" className="mt-auto bg-[#2563eb] text-[#eeefff] px-[24px] py-[16px] rounded-full font-semibold text-[15px] hover:opacity-90 transition-all flex items-center justify-center gap-2" style={{ fontFamily: 'Inter' }}>
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
          Post a Job
        </Link>
      </aside>

      {/* MAIN CONTENT */}
      <main className="ml-64 min-h-screen pb-[80px]">
        {/* TOP NAV */}
        <header className="sticky top-0 w-full z-40 bg-[#0d141d]/70 backdrop-blur-xl border-b border-white/10 flex justify-between items-center h-16 px-[24px]">
          <div className="flex items-center gap-[24px] flex-1">
            <div className="relative w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#c3c6d7] text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
              <input className="w-full bg-[#0B0F19] border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] outline-none transition-all text-[#dce3f0] placeholder-[#c3c6d7]/50" placeholder="Search analytics..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-[16px]">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-[#c3c6d7]"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span></button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-[#c3c6d7]"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>help</span></button>
            <div className="h-8 w-8 rounded-full bg-[#2e353f] flex items-center justify-center ml-2 border border-white/10 overflow-hidden">
              <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaPXpXK-GkahzLQVZUGTRUpnXP1IIIFI5W8BvBUrwZLkQ5wMADunACJL6pnJ_z7Bl-HWTU4V31PZZRLoZ4m0nQ6hJQN3vCWs6MckKzrC78j4crA1ZhQLoKID9kSKoFW7Z6qdu07jf8CtbxiNSmzKWVOelae6QHsKrH0slhiU7Nu_YMzMSjUqmCgrnjKTWqER2eM-uEvmVa6DgNRCi_c7bNuuZh5YAheJhYAO-NMe5txX6Fcpi4Yx22DK7zFukLXSHJu--gZbFXEB0" />
            </div>
          </div>
        </header>

        <div className="max-w-[1400px] mx-auto p-[48px]">
          {/* HEADER SECTION */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-[80px] gap-[24px]">
            <div>
              <h2 className="text-[48px] font-extrabold tracking-tight text-white mb-2" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.2 }}>Analytics</h2>
              <p className="text-[#c3c6d7] text-[18px]" style={{ fontFamily: 'Inter' }}>Track hiring performance, efficiency, and candidate quality.</p>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="flex items-center gap-[8px] bg-[#192029] px-4 py-2 rounded-xl border border-white/10 cursor-pointer hover:bg-[#333a44] transition-colors">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_today</span>
                <span className="font-medium text-sm">Last 30 days</span>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
              </div>
              <div className="flex items-center gap-[8px] bg-[#192029] px-4 py-2 rounded-xl border border-white/10 cursor-pointer hover:bg-[#333a44] transition-colors">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>filter_list</span>
                <span className="font-medium text-sm">All Jobs</span>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
              </div>
            </div>
          </div>

          {/* STATS ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] mb-[80px]">
            <div className="p-[24px] rounded-[16px] group hover:-translate-y-1 transition-all duration-200" style={{ background: 'rgba(17, 17, 17, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex justify-between items-start mb-4">
                <p className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>Time to Hire</p>
                <span className="material-symbols-outlined text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 0" }}>timer</span>
              </div>
              <h3 className="text-[32px] font-bold text-white mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>18 days</h3>
              <p className="text-[#22D97A] text-sm font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>trending_down</span>
                3 days vs last month
              </p>
            </div>
            
            <div className="p-[24px] rounded-[16px] group hover:-translate-y-1 transition-all duration-200" style={{ background: 'rgba(17, 17, 17, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex justify-between items-start mb-4">
                <p className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>Cost Per Hire</p>
                <span className="material-symbols-outlined text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 0" }}>payments</span>
              </div>
              <h3 className="text-[32px] font-bold text-white mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>$2,400</h3>
              <p className="text-[#22D97A] text-sm font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>trending_down</span>
                42% vs manual
              </p>
            </div>
            
            <div className="p-[24px] rounded-[16px] group hover:-translate-y-1 transition-all duration-200" style={{ background: 'rgba(17, 17, 17, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex justify-between items-start mb-4">
                <p className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>Interview Pass Rate</p>
                <span className="material-symbols-outlined text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>analytics</span>
              </div>
              <h3 className="text-[32px] font-bold text-white mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>34%</h3>
              <p className="text-[#c3c6d7] text-sm font-medium">Industry avg: 28%</p>
            </div>
            
            <div className="p-[24px] rounded-[16px] group hover:-translate-y-1 transition-all duration-200" style={{ background: 'rgba(17, 17, 17, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex justify-between items-start mb-4">
                <p className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>Post-Hire Rating</p>
                <span className="material-symbols-outlined text-[#F59E0B]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <h3 className="text-[32px] font-bold text-white mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>4.2/5</h3>
              <div className="flex gap-1">
                <span className="material-symbols-outlined text-[#F59E0B] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[#F59E0B] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[#F59E0B] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[#F59E0B] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-white/20 text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
              </div>
            </div>
          </div>

          {/* HIRING FUNNEL */}
          <section className="p-[48px] rounded-[16px] mb-[80px]" style={{ background: 'rgba(17, 17, 17, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-[32px] font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>Hiring Funnel Performance</h4>
              <span className="text-[#c3c6d7] text-sm font-medium">Aggregate of all active pipelines</span>
            </div>
            <div className="flex flex-col md:flex-row gap-1 w-full h-32">
              {/* Funnel Item 1 */}
              <div className="flex-1 relative group h-full">
                <div className="bg-[#0566d9] h-full flex flex-col justify-center px-[48px] border-r border-white/5" style={{ clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)' }}>
                  <span className="text-xs font-bold text-white opacity-60 uppercase mb-1">Applied</span>
                  <span className="text-2xl font-black text-white">450</span>
                </div>
              </div>
              {/* Funnel Item 2 */}
              <div className="flex-1 relative group h-full">
                <div className="bg-[#22D97A]/20 h-full flex flex-col justify-center px-[48px] border-r border-white/5" style={{ clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%)' }}>
                  <span className="text-xs font-bold text-[#22D97A] mb-1 uppercase">AI Screened</span>
                  <span className="text-2xl font-black text-white">180 <span className="text-sm font-medium opacity-50 ml-1">40%</span></span>
                </div>
              </div>
              {/* Funnel Item 3 */}
              <div className="flex-1 relative group h-full">
                <div className="bg-[#8343f4]/30 h-full flex flex-col justify-center px-[48px] border-r border-white/5" style={{ clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%)' }}>
                  <span className="text-xs font-bold text-[#d2bbff] mb-1 uppercase">Assessment</span>
                  <span className="text-2xl font-black text-white">90 <span className="text-sm font-medium opacity-50 ml-1">50%</span></span>
                </div>
              </div>
              {/* Funnel Item 4 */}
              <div className="flex-1 relative group h-full">
                <div className="bg-[#F59E0B]/20 h-full flex flex-col justify-center px-[48px] border-r border-white/5" style={{ clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%)' }}>
                  <span className="text-xs font-bold text-[#F59E0B] mb-1 uppercase">Interviewed</span>
                  <span className="text-2xl font-black text-white">45 <span className="text-sm font-medium opacity-50 ml-1">50%</span></span>
                </div>
              </div>
              {/* Funnel Item 5 */}
              <div className="flex-1 relative h-full">
                <div className="bg-[#22D97A] h-full flex flex-col justify-center px-[48px]" style={{ clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%)' }}>
                  <span className="text-xs font-bold text-[#0D1A14] mb-1 uppercase">Hired</span>
                  <span className="text-2xl font-black text-[#0D1A14]">12 <span className="text-sm font-medium opacity-60 ml-1">27%</span></span>
                </div>
              </div>
            </div>
          </section>

          {/* TWO COLUMN CHARTS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[80px]">
            {/* Time to Hire Trend */}
            <div className="p-[48px] rounded-[16px]" style={{ background: 'rgba(17, 17, 17, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h4 className="text-lg font-bold text-white mb-6">Time to Hire Trend</h4>
              <div className="relative h-64 w-full flex items-end justify-between">
                {/* Mockup Graph */}
                <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
                  <div className="border-t border-white/5 w-full"></div>
                  <div className="border-t border-white/5 w-full"></div>
                  <div className="border-t border-white/5 w-full"></div>
                  <div className="border-t border-white/5 w-full"></div>
                </div>
                <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 150">
                  {/* Industry Average */}
                  <path d="M 0 80 Q 100 80 200 80 T 400 80" fill="none" stroke="rgba(255,255,255,0.2)" strokeDasharray="8,4" strokeWidth="2"></path>
                  {/* Active Line */}
                  <path d="M 0 120 Q 50 110 100 70 T 200 60 T 300 45 T 400 30" fill="none" stroke="#22D97A" strokeWidth="3"></path>
                  <circle cx="300" cy="45" fill="#22D97A" r="4"></circle>
                </svg>
                <div className="absolute right-0 top-0 bg-[#1E293B] border border-white/10 px-3 py-1.5 rounded-lg text-xs shadow-xl">
                  <span className="text-[#c3c6d7]">HireIQ:</span> <span className="font-bold text-[#22D97A]">14 days</span>
                </div>
                <div className="flex justify-between w-full text-[10px] text-[#c3c6d7] font-bold uppercase mt-4">
                  <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
                </div>
              </div>
              <div className="mt-8 flex gap-4 text-xs font-medium text-[#dce3f0]">
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#22D97A]"></span> Your Team</div>
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-0.5 bg-white/20"></span> Industry Avg</div>
              </div>
            </div>
            
            {/* Candidate Score Distribution */}
            <div className="p-[48px] rounded-[16px]" style={{ background: 'rgba(17, 17, 17, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h4 className="text-lg font-bold text-white mb-6">Candidate Score Distribution</h4>
              <div className="flex items-end justify-between h-64 gap-2">
                <div className="flex-1 bg-[#2e353f] rounded-t-lg h-[20%] transition-all hover:opacity-80"></div>
                <div className="flex-1 bg-[#2e353f] rounded-t-lg h-[35%] transition-all hover:opacity-80"></div>
                <div className="flex-1 bg-[#2e353f] rounded-t-lg h-[60%] transition-all hover:opacity-80"></div>
                <div className="flex-1 bg-[#2e353f] rounded-t-lg h-[85%] transition-all hover:opacity-80"></div>
                <div className="flex-1 bg-[#22D97A] rounded-t-lg h-[100%] transition-all hover:opacity-80"></div>
                <div className="flex-1 bg-[#22D97A] rounded-t-lg h-[90%] transition-all hover:opacity-80 shadow-[0_0_20px_rgba(34,217,122,0.3)]"></div>
              </div>
              <div className="flex justify-between w-full text-[10px] text-[#c3c6d7] font-bold uppercase mt-4">
                <span>0-20%</span><span>20-40%</span><span>40-60%</span><span>60-80%</span><span>80-90%</span><span>90-100%</span>
              </div>
              <p className="mt-6 text-sm text-[#c3c6d7]"><span className="text-[#22D97A] font-bold">42%</span> of candidates score in the top quintile via AI screening.</p>
            </div>
          </div>

          {/* POST-HIRE PERFORMANCE TABLE */}
          <section className="rounded-[16px] mb-[80px] overflow-hidden" style={{ background: 'rgba(17, 17, 17, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="p-[24px] border-b border-white/5 flex justify-between items-center bg-white/5">
              <h4 className="text-lg font-bold text-white">Post-Hire Quality Metrics</h4>
              <button className="text-[#b4c5ff] text-sm font-bold flex items-center gap-1">Export CSV <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>download</span></button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#151c25] text-[#c3c6d7] text-[11px] font-bold uppercase tracking-widest">
                    <th className="px-[24px] py-4">Candidate</th>
                    <th className="px-[24px] py-4">Role</th>
                    <th className="px-[24px] py-4">Interview Score</th>
                    <th className="px-[24px] py-4 text-center">30-Day</th>
                    <th className="px-[24px] py-4 text-center">90-Day</th>
                    <th className="px-[24px] py-4 text-center">365-Day</th>
                    <th className="px-[24px] py-4">Match Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-[24px] py-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#b4c5ff]/20 flex items-center justify-center text-[#b4c5ff] font-bold text-xs">ER</div>
                      <span className="font-bold text-white">Elena Rodriguez</span>
                    </td>
                    <td className="px-[24px] py-4 text-[#c3c6d7]">Staff Eng</td>
                    <td className="px-[24px] py-4 font-mono text-[#22D97A] font-bold">98/100</td>
                    <td className="px-[24px] py-4 text-center">
                      <div className="flex justify-center text-[#F59E0B]">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      </div>
                    </td>
                    <td className="px-[24px] py-4 text-center">
                      <div className="flex justify-center text-[#F59E0B]">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      </div>
                    </td>
                    <td className="px-[24px] py-4 text-center text-[#dce3f0]">—</td>
                    <td className="px-[24px] py-4">
                      <span className="bg-[#22D97A]/20 text-[#22D97A] text-[11px] font-bold px-2 py-1 rounded-full uppercase">Exact Match</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-[24px] py-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#adc6ff]/20 flex items-center justify-center text-[#adc6ff] font-bold text-xs">JM</div>
                      <span className="font-bold text-white">James Miller</span>
                    </td>
                    <td className="px-[24px] py-4 text-[#c3c6d7]">Product Lead</td>
                    <td className="px-[24px] py-4 font-mono text-[#22D97A] font-bold">92/100</td>
                    <td className="px-[24px] py-4 text-center">
                      <div className="flex justify-center text-[#F59E0B]">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-white/10 text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
                      </div>
                    </td>
                    <td className="px-[24px] py-4 text-center text-[#dce3f0]">—</td>
                    <td className="px-[24px] py-4 text-center text-[#dce3f0]">—</td>
                    <td className="px-[24px] py-4">
                      <span className="bg-[#22D97A]/20 text-[#22D97A] text-[11px] font-bold px-2 py-1 rounded-full uppercase">Exact Match</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-[24px] bg-[#0A101A] italic text-[#22D97A] text-sm flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>lightbulb</span>
              "Post-Hire Tracking is how HireIQ builds the dataset no competitor can replicate."
            </div>
          </section>

          {/* SOURCING & RISK ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            {/* Risk Analytics */}
            <div className="p-[48px] rounded-[16px]" style={{ background: 'rgba(17, 17, 17, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h4 className="text-lg font-bold text-white mb-6">Integrity Risk Analytics</h4>
              <div className="flex flex-col md:flex-row items-center gap-[48px]">
                <div className="relative h-48 w-48 shrink-0">
                  {/* SVG Donut */}
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="rgba(255,255,255,0.05)" strokeWidth="3"></circle>
                    <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#22D97A" strokeDasharray="85 100" strokeLinecap="round" strokeWidth="3"></circle>
                    <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#F59E0B" strokeDasharray="10 100" strokeDashoffset="-85" strokeLinecap="round" strokeWidth="3"></circle>
                    <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#ef4444" strokeDasharray="5 100" strokeDashoffset="-95" strokeLinecap="round" strokeWidth="3"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-white">12</span>
                    <span className="text-[10px] font-bold text-[#c3c6d7] uppercase tracking-tighter">Total Flags</span>
                  </div>
                </div>
                <div className="w-full space-y-4 text-[#dce3f0]">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#22D97A]"></span>
                      <span className="text-sm font-medium text-white">Low Risk</span>
                    </div>
                    <span className="text-sm font-bold opacity-60">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#F59E0B]"></span>
                      <span className="text-sm font-medium text-white">Medium Risk</span>
                    </div>
                    <span className="text-sm font-bold opacity-60">10%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
                      <span className="text-sm font-medium text-[#ffb4ab]">High Risk</span>
                    </div>
                    <span className="text-sm font-bold text-[#ffb4ab]">5%</span>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex gap-4">
                    <div>
                      <p className="text-[10px] text-[#c3c6d7] font-bold uppercase">Confirmed</p>
                      <p className="text-lg font-bold text-[#ffb4ab]">1</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#c3c6d7] font-bold uppercase">High Risk</p>
                      <p className="text-lg font-bold text-[#ffb4ab]">3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sourcing Distribution */}
            <div className="p-[48px] rounded-[16px]" style={{ background: 'rgba(17, 17, 17, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h4 className="text-lg font-bold text-white mb-6">Sourcing Effectiveness</h4>
              <div className="flex flex-col md:flex-row items-center gap-[48px]">
                <div className="relative h-48 w-48 shrink-0">
                  {/* SVG Donut */}
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#2563eb" strokeDasharray="40 100" strokeLinecap="round" strokeWidth="3"></circle>
                    <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#d2bbff" strokeDasharray="25 100" strokeDashoffset="-40" strokeLinecap="round" strokeWidth="3"></circle>
                    <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#F59E0B" strokeDasharray="15 100" strokeDashoffset="-65" strokeLinecap="round" strokeWidth="3"></circle>
                    <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#22D97A" strokeDasharray="20 100" strokeDashoffset="-80" strokeLinecap="round" strokeWidth="3"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-white">450</span>
                    <span className="text-[10px] font-bold text-[#c3c6d7] uppercase tracking-tighter">Candidates</span>
                  </div>
                </div>
                <div className="w-full space-y-4 text-[#dce3f0]">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#2563eb]"></span>
                      <span className="text-sm font-medium text-white">LinkedIn</span>
                    </div>
                    <span className="text-sm font-bold opacity-60">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#d2bbff]"></span>
                      <span className="text-sm font-medium text-white">Job Boards</span>
                    </div>
                    <span className="text-sm font-bold opacity-60">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#F59E0B]"></span>
                      <span className="text-sm font-medium text-white">Referral</span>
                    </div>
                    <span className="text-sm font-bold opacity-60">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#22D97A]"></span>
                      <span className="text-sm font-medium text-white">HireIQ Direct</span>
                    </div>
                    <span className="text-sm font-bold opacity-60">20%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 bg-[#22D97A] text-[#0D1A14] w-14 h-14 rounded-full shadow-[0_8px_24px_rgba(34,217,122,0.4)] flex items-center justify-center hover:scale-110 transition-transform z-50">
        <span className="material-symbols-outlined font-black" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
      </button>
    </div>
  );
}
