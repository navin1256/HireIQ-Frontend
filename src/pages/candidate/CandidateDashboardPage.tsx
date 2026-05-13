import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CandidateDashboardPage() {
  return (
    <div className="bg-[#f8f9fa] font-['Inter'] text-[#191c1d] antialiased min-h-screen">
      <style>
        {`
          .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
        `}
      </style>
      
      {/* SIDEBAR */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#141b2b] flex flex-col py-[48px] px-[24px] border-r border-[#c6c6cd] shadow-sm z-50">
        <div className="mb-[80px]">
          <h2 className="text-[30px] leading-[1.2] tracking-[-0.01em] font-bold font-black text-[#141b2b] tracking-tight flex items-center gap-[4px]">
            <span className="text-[#33e282]">Hire</span><span className="text-white">IQ</span>
          </h2>
          <p className="text-[14px] leading-[1.5] font-normal text-[#7d8497]">Candidate Portal</p>
        </div>
        
        <nav className="flex-grow space-y-[4px]">
          <Link className="flex items-center gap-[12px] bg-[#006d39] text-[#ffffff] rounded-lg px-[24px] py-[12px] transition-all scale-95 duration-150" to="/candidate/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[16px] leading-[1.5] font-normal font-semibold">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-[12px] text-[#7d8497] hover:text-[#404758] hover:bg-[#e1e3e4]/10 px-[24px] py-[12px] rounded-lg transition-colors" to="/candidate/applications">
            <span className="material-symbols-outlined">work</span>
            <span className="text-[16px] leading-[1.5] font-normal font-semibold">Applications</span>
          </Link>
          <Link className="flex items-center gap-[12px] text-[#7d8497] hover:text-[#404758] hover:bg-[#e1e3e4]/10 px-[24px] py-[12px] rounded-lg transition-colors" to="/candidate/reports">
            <span className="material-symbols-outlined">assessment</span>
            <span className="text-[16px] leading-[1.5] font-normal font-semibold">Reports</span>
          </Link>
          <Link className="flex items-center gap-[12px] text-[#7d8497] hover:text-[#404758] hover:bg-[#e1e3e4]/10 px-[24px] py-[12px] rounded-lg transition-colors" to="/candidate/practice">
            <span className="material-symbols-outlined">fitness_center</span>
            <span className="text-[16px] leading-[1.5] font-normal font-semibold">Practice</span>
          </Link>
          <Link className="flex items-center gap-[12px] text-[#7d8497] hover:text-[#404758] hover:bg-[#e1e3e4]/10 px-[24px] py-[12px] rounded-lg transition-colors" to="/candidate/certifications">
            <span className="material-symbols-outlined">verified</span>
            <span className="text-[16px] leading-[1.5] font-normal font-semibold">Certifications</span>
          </Link>
          <Link className="flex items-center gap-[12px] text-[#7d8497] hover:text-[#404758] hover:bg-[#e1e3e4]/10 px-[24px] py-[12px] rounded-lg transition-colors" to="/candidate/settings">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[16px] leading-[1.5] font-normal font-semibold">Settings</span>
          </Link>
        </nav>
        
        <div className="mt-auto space-y-[12px]">
          <div className="p-[24px] rounded-xl bg-[#e1e3e4]/10 border border-[#c6c6cd]/20">
            <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#7d8497] mb-[4px]">PRO PLAN</p>
            <p className="text-[14px] leading-[1.5] font-normal text-[#404758] mb-[12px] text-white">Get AI feedback on mock interviews.</p>
            <button className="w-full py-[4px] px-[12px] bg-[#5eff9c] text-[#00210d] text-[14px] leading-[1] font-bold rounded-lg text-sm hover:opacity-90 transition-opacity">Upgrade to Pro</button>
          </div>
          <div className="pt-[24px] border-t border-[#c6c6cd]/20 space-y-[4px]">
            <a className="flex items-center gap-[12px] text-[#7d8497] hover:text-white px-[24px] py-[4px]" href="#">
              <span className="material-symbols-outlined">account_circle</span>
              <span className="text-[16px] leading-[1.5] font-normal font-semibold">Profile</span>
            </a>
            <a className="flex items-center gap-[12px] text-[#7d8497] hover:text-white px-[24px] py-[4px]" href="#">
              <span className="material-symbols-outlined">help</span>
              <span className="text-[16px] leading-[1.5] font-normal font-semibold">Help</span>
            </a>
          </div>
        </div>
      </aside>

      {/* TOP BAR */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-[#f8f9fa]/80 backdrop-blur-md flex justify-between items-center h-16 px-[24px] ml-64 border-b border-[#c6c6cd]">
        <div className="flex items-center gap-[24px]">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#45464c]">search</span>
            <input 
              className="pl-10 pr-[24px] py-[4px] bg-[#f3f4f5] border border-[#c6c6cd] rounded-full text-[14px] leading-[1.5] font-normal w-80 focus:ring-1 focus:ring-[#006d39] focus:border-[#006d39] transition-all outline-none" 
              placeholder="Search jobs, skills, or reports..." 
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-[24px]">
          <button className="text-[#45464c] hover:text-[#000000] transition-colors cursor-pointer active:opacity-70">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-[#45464c] hover:text-[#000000] transition-colors cursor-pointer active:opacity-70">
            <span className="material-symbols-outlined">chat_bubble</span>
          </button>
          <div className="h-8 w-8 rounded-full bg-[#5eff9c] text-[#00210d] flex items-center justify-center font-bold text-xs cursor-pointer">
            SA
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="ml-64 mt-16 p-[24px] max-w-[1120px] mx-auto">
        {/* Welcome Section */}
        <section className="mb-[48px] flex flex-col md:flex-row justify-between items-end gap-[24px]">
          <div>
            <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold mb-[4px]">Hi Sarah! 👋</h1>
            <p className="text-[18px] leading-[1.6] font-normal text-[#45464c]">You have <span className="text-[#000000] font-bold">2 upcoming interviews</span> this week.</p>
            <div className="flex items-center gap-[4px] mt-[12px] text-[#33e282] bg-[#006d39]/10 px-[12px] py-[4px] rounded-full w-fit">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold">Keep going — you're improving!</span>
            </div>
          </div>
          <div className="hidden lg:block w-48 h-48 relative">
            <div className="absolute inset-0 bg-[#006d39]/5 rounded-full blur-3xl"></div>
            <img 
              alt="Professional mentor" 
              className="w-full h-full object-cover rounded-2xl relative z-10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXfuNPn_JwRiBD6dgjelmrfM0BLZSmlHVUFG8DjsxLFvoqocJajbJRTO8koSWhF9evCFrYHTm0BXxJXSzUR3VUJPtHWZVn7fcteMVjpnH5vEBNDlqXz_T3ZNlraMvyKW_aXBrKrRgRa8SlH8TCLqlnp0QJAcPZrH0O1eFn21gf1zXHTYxUxqBMfNyMSIDgESOblmf7zlcY9j0BNVQSBoFDyecyvxywRWeCf1kHLMMDFLFFWlDGJxvlZNL-c9XQjcJIAvhJPD9kcOE"
            />
          </div>
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[24px]">
          {/* Left Column: Applications & Feedback */}
          <div className="xl:col-span-2 space-y-[24px]">
            {/* Your Applications */}
            <section className="bg-white rounded-xl border border-[#c6c6cd] p-[24px] shadow-sm">
              <div className="flex justify-between items-center mb-[24px]">
                <h3 className="text-[20px] leading-[1.4] font-semibold">Your Applications</h3>
                <Link className="text-[#006d39] text-[14px] leading-[1] font-bold hover:underline" to="/candidate/applications">View All</Link>
              </div>
              <div className="space-y-0">
                {/* Application Row 1 */}
                <div className="flex items-center justify-between py-[24px] border-b border-[#c6c6cd] hover:bg-[#f8f9fa] transition-colors px-[24px] -mx-[24px] first:pt-0 last:border-0">
                  <div className="flex items-center gap-[24px]">
                    <div className="w-12 h-12 rounded-lg bg-[#edeeef] flex items-center justify-center font-black text-[#000000]">TC</div>
                    <div>
                      <p className="text-[16px] leading-[1.5] font-normal font-bold">Senior React Developer</p>
                      <p className="text-[14px] leading-[1.5] font-normal text-[#45464c]">TechCorp • Applied 4 days ago</p>
                    </div>
                  </div>
                  <span className="px-[12px] py-[4px] rounded-full bg-blue-50 text-blue-600 text-[12px] leading-[1] tracking-[0.05em] font-semibold border border-blue-100">Interviewed</span>
                </div>
                {/* Application Row 2 */}
                <div className="flex items-center justify-between py-[24px] border-b border-[#c6c6cd] hover:bg-[#f8f9fa] transition-colors px-[24px] -mx-[24px] last:border-0">
                  <div className="flex items-center gap-[24px]">
                    <div className="w-12 h-12 rounded-lg bg-[#edeeef] flex items-center justify-center font-black text-[#000000]">NX</div>
                    <div>
                      <p className="text-[16px] leading-[1.5] font-normal font-bold">Frontend Architect</p>
                      <p className="text-[14px] leading-[1.5] font-normal text-[#45464c]">NextGen AI • Applied 1 week ago</p>
                    </div>
                  </div>
                  <span className="px-[12px] py-[4px] rounded-full bg-purple-50 text-purple-600 text-[12px] leading-[1] tracking-[0.05em] font-semibold border border-purple-100">AI Screened</span>
                </div>
                {/* Application Row 3 */}
                <div className="flex items-center justify-between py-[24px] hover:bg-[#f8f9fa] transition-colors px-[24px] -mx-[24px] last:border-0">
                  <div className="flex items-center gap-[24px]">
                    <div className="w-12 h-12 rounded-lg bg-[#edeeef] flex items-center justify-center font-black text-[#000000]">GL</div>
                    <div>
                      <p className="text-[16px] leading-[1.5] font-normal font-bold">Fullstack Engineer</p>
                      <p className="text-[14px] leading-[1.5] font-normal text-[#45464c]">GreenLight • Applied 2 weeks ago</p>
                    </div>
                  </div>
                  <span className="px-[12px] py-[4px] rounded-full bg-[#e1e3e4]/50 text-[#45464c] text-[12px] leading-[1] tracking-[0.05em] font-semibold border border-[#c6c6cd]/30">Applied</span>
                </div>
              </div>
            </section>

            {/* Recent Feedback Reports */}
            <section>
              <div className="flex justify-between items-center mb-[24px]">
                <h3 className="text-[20px] leading-[1.4] font-semibold">Recent Feedback Reports</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                {/* Report Card 1 */}
                <div className="bg-white rounded-xl border border-[#c6c6cd] p-[24px] hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="flex justify-between items-start mb-[24px]">
                    <div>
                      <p className="text-[14px] leading-[1.5] font-normal text-[#45464c]">TechCorp</p>
                      <p className="text-[16px] leading-[1.5] font-normal font-bold">React Performance Interview</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-[#33e282]/30 flex items-center justify-center relative">
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="24" cy="24" fill="transparent" r="20" stroke="#22D97A" strokeDasharray="125.6" strokeDashoffset="25" strokeWidth="4"></circle>
                      </svg>
                      <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#006d39]">78</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-[4px] text-[#33e282] text-[14px] leading-[1] font-bold group-hover:gap-[12px] transition-all">
                    View Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
                {/* Report Card 2 */}
                <div className="bg-white rounded-xl border border-[#c6c6cd] p-[24px] hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="flex justify-between items-start mb-[24px]">
                    <div>
                      <p className="text-[14px] leading-[1.5] font-normal text-[#45464c]">NextGen AI</p>
                      <p className="text-[16px] leading-[1.5] font-normal font-bold">System Design Deep Dive</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-[#33e282]/30 flex items-center justify-center relative">
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="24" cy="24" fill="transparent" r="20" stroke="#22D97A" strokeDasharray="125.6" strokeDashoffset="45" strokeWidth="4"></circle>
                      </svg>
                      <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#006d39]">64</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-[4px] text-[#33e282] text-[14px] leading-[1] font-bold group-hover:gap-[12px] transition-all">
                    View Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Interviews & Skills */}
          <div className="space-y-[24px]">
            {/* Upcoming Interviews */}
            <section className="bg-[#141b2b] text-[#ffffff] rounded-xl p-[24px] shadow-xl overflow-hidden relative">
              {/* Subtle pattern */}
              <div className="absolute top-0 right-0 p-[48px] opacity-10">
                <span className="material-symbols-outlined text-6xl">event_available</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-[4px] mb-[24px]">
                  <span className="w-2 h-2 rounded-full bg-[#33e282] animate-pulse"></span>
                  <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#33e282] uppercase tracking-widest">Next Interview</p>
                </div>
                <h4 className="text-[20px] leading-[1.4] font-semibold text-white mb-[4px]">TechCorp</h4>
                <p className="text-[14px] leading-[1.5] font-normal text-[#7d8497] mb-[48px]">Senior React Developer • Round 2</p>
                <div className="flex items-end justify-between mb-[48px]">
                  <div>
                    <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#7d8497] mb-[4px]">STARTING IN</p>
                    <p className="text-[30px] leading-[1.2] tracking-[-0.01em] font-bold text-white">2h 14m</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#7d8497] mb-[4px]">DATE</p>
                    <p className="text-[16px] leading-[1.5] font-normal font-bold text-white">Today, 2:00 PM</p>
                  </div>
                </div>
                <button className="w-full py-[24px] bg-[#006d39] text-[#ffffff] text-[14px] leading-[1] font-bold rounded-lg flex items-center justify-center gap-[12px] hover:bg-[#006d39]/90 transition-colors">
                  Start Interview <span className="material-symbols-outlined">arrow_right_alt</span>
                </button>
              </div>
            </section>

            {/* Improve Your Skills */}
            <section className="bg-white rounded-xl border border-[#c6c6cd] p-[24px]">
              <h3 className="text-[20px] leading-[1.4] font-semibold mb-[24px]">Improve Your Skills</h3>
              <div className="space-y-[12px]">
                <a className="group flex items-center justify-between p-[12px] rounded-lg border border-[#c6c6cd]/30 hover:border-[#006d39] hover:bg-[#006d39]/5 transition-all" href="#">
                  <div className="flex items-center gap-[12px]">
                    <div className="w-10 h-10 rounded-lg bg-[#edeeef] flex items-center justify-center text-[#006d39]">
                      <span className="material-symbols-outlined">architecture</span>
                    </div>
                    <span className="text-[16px] leading-[1.5] font-normal font-semibold group-hover:text-[#006d39] transition-colors">Practice System Design</span>
                  </div>
                  <span className="material-symbols-outlined text-[#45464c] group-hover:text-[#006d39]">chevron_right</span>
                </a>
                <a className="group flex items-center justify-between p-[12px] rounded-lg border border-[#c6c6cd]/30 hover:border-[#006d39] hover:bg-[#006d39]/5 transition-all" href="#">
                  <div className="flex items-center gap-[12px]">
                    <div className="w-10 h-10 rounded-lg bg-[#edeeef] flex items-center justify-center text-[#006d39]">
                      <span className="material-symbols-outlined">bolt</span>
                    </div>
                    <span className="text-[16px] leading-[1.5] font-normal font-semibold group-hover:text-[#006d39] transition-colors">Practice React Performance</span>
                  </div>
                  <span className="material-symbols-outlined text-[#45464c] group-hover:text-[#006d39]">chevron_right</span>
                </a>
                <a className="group flex items-center justify-between p-[12px] rounded-lg border border-[#c6c6cd]/30 hover:border-[#006d39] hover:bg-[#006d39]/5 transition-all" href="#">
                  <div className="flex items-center gap-[12px]">
                    <div className="w-10 h-10 rounded-lg bg-[#edeeef] flex items-center justify-center text-[#006d39]">
                      <span className="material-symbols-outlined">code</span>
                    </div>
                    <span className="text-[16px] leading-[1.5] font-normal font-semibold group-hover:text-[#006d39] transition-colors">Algorithm Challenge</span>
                  </div>
                  <span className="material-symbols-outlined text-[#45464c] group-hover:text-[#006d39]">chevron_right</span>
                </a>
              </div>
              <div className="mt-[24px] p-[24px] bg-[#f3f4f5] rounded-xl border border-dashed border-[#c6c6cd] text-center">
                <p className="text-[14px] leading-[1.5] font-normal text-[#45464c] mb-[12px]">Want personalized prep?</p>
                <button className="text-[14px] leading-[1] font-bold text-[#006d39] hover:underline">Get AI Prep Plan</button>
              </div>
            </section>

            {/* Statistics Snippet */}
            <section className="grid grid-cols-2 gap-[12px]">
              <div className="bg-white p-[24px] rounded-xl border border-[#c6c6cd]">
                <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c] mb-[4px]">PREP TIME</p>
                <p className="text-[20px] leading-[1.4] font-semibold">12.4h</p>
              </div>
              <div className="bg-white p-[24px] rounded-xl border border-[#c6c6cd]">
                <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c] mb-[4px]">RANKING</p>
                <p className="text-[20px] leading-[1.4] font-semibold">Top 5%</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* FAB for quick action */}
      <button className="fixed bottom-[24px] right-[24px] w-14 h-14 bg-[#006d39] text-[#ffffff] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
}
