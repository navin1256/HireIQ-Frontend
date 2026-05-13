import React from 'react';
import { Link } from 'react-router-dom';

export default function CandidateReportsPage() {
  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-['Inter'] overflow-x-hidden min-h-screen">
      <style>
        {`
          .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
          .progress-ring-circle {
              transition: stroke-dashoffset 0.35s;
              transform: rotate(-90deg);
              transform-origin: 50% 50%;
          }
        `}
      </style>
      
      {/* SideNavBar (Shared Component) */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#141b2b] flex flex-col py-[24px] px-[12px] z-50">
        <div className="mb-[80px] px-[12px]">
          <h1 className="text-[20px] leading-[1.4] font-semibold text-[#404758] tracking-tight">TalentAI Portal</h1>
          <p className="text-[#7d8497] text-[12px] leading-[1] tracking-[0.05em] font-semibold uppercase mt-[4px] opacity-70">Premium Candidate</p>
        </div>
        <nav className="flex-1 space-y-[4px]">
          <Link className="flex items-center gap-[12px] px-[12px] py-[12px] text-[#7d8497] text-[16px] leading-[1.5] font-normal hover:bg-[#404758]/10 transition-colors active:scale-95 duration-150 rounded-lg" to="/candidate/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </Link>
          <Link className="flex items-center gap-[12px] px-[12px] py-[12px] text-[#7d8497] text-[16px] leading-[1.5] font-normal hover:bg-[#404758]/10 transition-colors active:scale-95 duration-150 rounded-lg" to="/candidate/applications">
            <span className="material-symbols-outlined">work_outline</span>
            My Applications
          </Link>
          <Link className="flex items-center gap-[12px] px-[12px] py-[12px] text-[#5eff9c] text-[14px] leading-[1] font-bold bg-[#404758]/20 rounded-lg transition-colors active:scale-95 duration-150" to="/candidate/reports">
            <span className="material-symbols-outlined">assessment</span>
            My Reports
          </Link>
          <Link className="flex items-center gap-[12px] px-[12px] py-[12px] text-[#7d8497] text-[16px] leading-[1.5] font-normal hover:bg-[#404758]/10 transition-colors active:scale-95 duration-150 rounded-lg" to="/candidate/dashboard">
            <span className="material-symbols-outlined">fitness_center</span>
            Practice
          </Link>
          <Link className="flex items-center gap-[12px] px-[12px] py-[12px] text-[#7d8497] text-[16px] leading-[1.5] font-normal hover:bg-[#404758]/10 transition-colors active:scale-95 duration-150 rounded-lg" to="/candidate/dashboard">
            <span className="material-symbols-outlined">verified</span>
            Certifications
          </Link>
          <Link className="flex items-center gap-[12px] px-[12px] py-[12px] text-[#7d8497] text-[16px] leading-[1.5] font-normal hover:bg-[#404758]/10 transition-colors active:scale-95 duration-150 rounded-lg" to="/candidate/settings">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </Link>
        </nav>
        <div className="mt-auto px-[12px] pt-[24px] border-t border-[#404758]/20">
          <button className="w-full bg-[#006d39] text-[#ffffff] text-[14px] leading-[1] font-bold py-[12px] rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-[4px]">
            Browse Jobs
          </button>
          <div className="mt-[24px] flex items-center gap-[12px]">
            <img alt="Candidate Profile Avatar" className="w-10 h-10 rounded-full border border-[#404758]/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8lwR4AFi51X60N7GDa3KHerEXBWRH6kngKD9GE7C-_WmLaih9p7yk3juTTqxfS9ToeaNozuOGb5X7bfs2U1VY5h6EgF-2yYhizlD46aKxYEXY7XXxQVyJM_3Bp265o5ZWUfwgnNS9XpGkPxG4truPNrs5Sd-oqyvivfWWlOZd8g_t78-rcVU1wtlY4_QcZqm6suxendkNp1W0N72UdO5s96nyg1vcGvxoNIlUbcCXgz4DmToWE0rSyUoa6ekLiq5VxQyQ5LD6uaY" />
            <div>
              <p className="text-white text-[14px] leading-[1] font-bold text-xs leading-none">Alex Johnson</p>
              <p className="text-[#7d8497] text-[10px]">Candidate ID: #9921</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {/* TopAppBar (Shared Component) */}
        <header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-[#f8f9fa]/80 backdrop-blur-md border-b border-[#c6c6cd] flex justify-between items-center h-16 px-[24px]">
          <div className="flex items-center gap-[12px] bg-[#f3f4f5] px-[12px] py-[4px] rounded-full w-96 border border-[#c6c6cd]/30">
            <span className="material-symbols-outlined text-[#45464c]">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-[14px] leading-[1.5] font-normal w-full outline-none" placeholder="Search reports..." type="text" />
          </div>
          <div className="flex items-center gap-[24px]">
            <button className="text-[#45464c] hover:text-[#006d39] transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-[#45464c] hover:text-[#006d39] transition-colors">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <div className="h-8 w-[1px] bg-[#c6c6cd]"></div>
            <img alt="User Profile" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsCx9VRlRsOLTKgA43xm4LVvm--6sUX8KKQujwF2z2EukHrhKqbXjx9W4_XDgo0wZK5fymd7vw4MxKDfzeW9ncYW1JobHJd0GcTUvGHq7hr1kM6npWg5XJs-mzTA7WA2hyk0v20Y55GWbk9IUGYIs23KJVWepC5_e6rlvfipoUdoSI4sGw7o6Ut8jDDF9rJdxxQ4gatzHt1Fw4paLwrl4PxcRw0RgiiI9rz_DC18v4SqxjTYgmiPxvpSifgMbT9xq3hK_6CxYVww8" />
          </div>
        </header>

        <div className="pt-24 px-[80px] pb-[80px] max-w-[1120px] mx-auto">
          {/* Page Header */}
          <section className="mb-[48px]">
            <h2 className="text-[30px] leading-[1.2] tracking-[-0.01em] font-bold tracking-tight text-[#000000]">My Feedback Reports</h2>
            <p className="text-[#45464c] text-[15px] text-[16px] leading-[1.5] font-normal mt-[4px]">All your interview feedback in one place</p>
          </section>

          {/* Stats Row */}
          <section className="grid grid-cols-3 gap-[24px] mb-[80px]">
            {/* Stat Card 1 */}
            <div className="bg-[#ffffff] border border-[#c6c6cd] p-[24px] rounded-xl">
              <p className="text-[#45464c] text-[12px] leading-[1] tracking-[0.05em] font-semibold uppercase">Total Reports</p>
              <h3 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold mt-[4px]">8</h3>
            </div>
            {/* Stat Card 2 */}
            <div className="bg-[#ffffff] border border-[#c6c6cd] p-[24px] rounded-xl">
              <p className="text-[#45464c] text-[12px] leading-[1] tracking-[0.05em] font-semibold uppercase">Average Score</p>
              <div className="flex items-baseline gap-[4px]">
                <h3 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold mt-[4px] text-[#006d39]">74</h3>
                <span className="text-[#45464c] text-[20px] leading-[1.4] font-semibold">/100</span>
              </div>
            </div>
            {/* Stat Card 3 */}
            <div className="bg-[#ffffff] border border-[#c6c6cd] p-[24px] rounded-xl">
              <p className="text-[#45464c] text-[12px] leading-[1] tracking-[0.05em] font-semibold uppercase">Improvement</p>
              <div className="flex items-center gap-[4px] mt-[4px]">
                <h3 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-[#006d39]">+12</h3>
                <div className="flex flex-col">
                  <span className="text-[#006d39] material-symbols-outlined">trending_up</span>
                  <span className="text-[#45464c] text-[12px] leading-[1] tracking-[0.05em] font-semibold">pts this month</span>
                </div>
              </div>
            </div>
          </section>

          {/* Reports Grid */}
          <section className="grid grid-cols-2 gap-[24px]">
            {/* Card 1: TechCorp */}
            <div className="bg-[#ffffff] border border-[#c6c6cd] p-[24px] rounded-xl hover:border-[#006d39] hover:shadow-[0px_4px_20px_rgba(0,109,57,0.08)] transition-all group">
              <div className="flex justify-between items-start mb-[24px]">
                <div>
                  <div className="flex items-center gap-[12px] mb-[4px]">
                    <div className="w-10 h-10 rounded-lg bg-[#e7e8e9] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#000000]">corporate_fare</span>
                    </div>
                    <h3 className="text-[20px] leading-[1.4] font-semibold">TechCorp</h3>
                  </div>
                  <p className="text-[#191c1d] text-[14px] leading-[1] font-bold">Senior React Developer</p>
                  <p className="text-[#45464c] text-[14px] leading-[1.5] font-normal">May 7, 2025</p>
                </div>
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle className="text-[#c6c6cd]/20" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-[#006d39] progress-ring-circle" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="55.2" strokeLinecap="round" strokeWidth="8"></circle>
                  </svg>
                  <span className="absolute text-[20px] leading-[1.4] font-semibold text-[#000000]">78</span>
                </div>
              </div>
              <div className="mb-[24px]">
                <span className="bg-[#006d39]/10 text-[#006d39] px-[12px] py-[4px] rounded-full text-[12px] leading-[1] tracking-[0.05em] font-semibold">Strong Candidate</span>
              </div>
              <div className="space-y-[12px] mb-[48px]">
                <div className="space-y-[4px]">
                  <div className="flex justify-between text-[12px] leading-[1] tracking-[0.05em] font-semibold">
                    <span className="text-[#45464c] uppercase">Technical</span>
                    <span className="text-[14px] leading-[1] font-bold">82%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#e7e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <div className="space-y-[4px]">
                  <div className="flex justify-between text-[12px] leading-[1] tracking-[0.05em] font-semibold">
                    <span className="text-[#45464c] uppercase">Problem Solving</span>
                    <span className="text-[14px] leading-[1] font-bold">79%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#e7e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '79%' }}></div>
                  </div>
                </div>
                <div className="space-y-[4px]">
                  <div className="flex justify-between text-[12px] leading-[1] tracking-[0.05em] font-semibold">
                    <span className="text-[#45464c] uppercase">Communication</span>
                    <span className="text-[14px] leading-[1] font-bold">74%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#e7e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-[#006d39] rounded-full" style={{ width: '74%' }}></div>
                  </div>
                </div>
                <div className="space-y-[4px]">
                  <div className="flex justify-between text-[12px] leading-[1] tracking-[0.05em] font-semibold">
                    <span className="text-[#45464c] uppercase">Cultural Fit</span>
                    <span className="text-[14px] leading-[1] font-bold">75%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#e7e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-[24px] border-t border-[#c6c6cd]">
                <Link to="/report/123" className="text-[#000000] text-[14px] leading-[1] font-bold hover:underline flex items-center gap-[4px]">
                  View Full Report <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <button className="flex items-center gap-[4px] px-[12px] py-[4px] border border-[#c6c6cd] rounded-lg hover:bg-[#edeeef] transition-colors text-[14px] leading-[1.5] font-normal">
                  <span className="material-symbols-outlined text-[18px]">share</span> Share
                </button>
              </div>
            </div>

            {/* Card 2: NextGen AI (Premium) */}
            <div className="bg-[#ffffff] border border-[#c6c6cd] p-[24px] rounded-xl hover:border-[#006d39] hover:shadow-[0px_4px_20px_rgba(0,109,57,0.08)] transition-all group">
              <div className="flex justify-between items-start mb-[24px]">
                <div>
                  <div className="flex items-center gap-[12px] mb-[4px]">
                    <div className="w-10 h-10 rounded-lg bg-[#e7e8e9] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#000000]">smart_toy</span>
                    </div>
                    <h3 className="text-[20px] leading-[1.4] font-semibold">NextGen AI</h3>
                  </div>
                  <p className="text-[#191c1d] text-[14px] leading-[1] font-bold">Frontend Architect</p>
                  <p className="text-[#45464c] text-[14px] leading-[1.5] font-normal">April 28, 2025</p>
                </div>
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle className="text-[#c6c6cd]/20" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-[#006d39] progress-ring-circle" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="40.2" strokeLinecap="round" strokeWidth="8"></circle>
                  </svg>
                  <span className="absolute text-[20px] leading-[1.4] font-semibold text-[#000000]">84</span>
                </div>
              </div>
              <div className="mb-[24px] flex gap-[12px]">
                <span className="bg-[#006d39]/10 text-[#006d39] px-[12px] py-[4px] rounded-full text-[12px] leading-[1] tracking-[0.05em] font-semibold">Exceptional</span>
                <span className="bg-amber-100 text-amber-700 px-[12px] py-[4px] rounded-full text-[12px] leading-[1] tracking-[0.05em] font-semibold flex items-center gap-[4px]">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span> Premium Badge
                </span>
              </div>
              <div className="space-y-[12px] mb-[48px]">
                <div className="space-y-[4px]">
                  <div className="flex justify-between text-[12px] leading-[1] tracking-[0.05em] font-semibold">
                    <span className="text-[#45464c] uppercase">Technical</span>
                    <span className="text-[14px] leading-[1] font-bold">88%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#e7e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div className="space-y-[4px]">
                  <div className="flex justify-between text-[12px] leading-[1] tracking-[0.05em] font-semibold">
                    <span className="text-[#45464c] uppercase">Problem Solving</span>
                    <span className="text-[14px] leading-[1] font-bold">85%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#e7e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="space-y-[4px]">
                  <div className="flex justify-between text-[12px] leading-[1] tracking-[0.05em] font-semibold">
                    <span className="text-[#45464c] uppercase">Communication</span>
                    <span className="text-[14px] leading-[1] font-bold">82%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#e7e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-[#006d39] rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <div className="space-y-[4px]">
                  <div className="flex justify-between text-[12px] leading-[1] tracking-[0.05em] font-semibold">
                    <span className="text-[#45464c] uppercase">Cultural Fit</span>
                    <span className="text-[14px] leading-[1] font-bold">80%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#e7e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-[24px] border-t border-[#c6c6cd]">
                <Link to="/report/123" className="text-[#000000] text-[14px] leading-[1] font-bold hover:underline flex items-center gap-[4px]">
                  View Full Report <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <button className="flex items-center gap-[4px] px-[12px] py-[4px] border border-[#c6c6cd] rounded-lg hover:bg-[#edeeef] transition-colors text-[14px] leading-[1.5] font-normal">
                  <span className="material-symbols-outlined text-[18px]">share</span> Share
                </button>
              </div>
            </div>

            {/* Card 3: GreenLight */}
            <div className="bg-[#ffffff] border border-[#c6c6cd] p-[24px] rounded-xl hover:border-[#006d39] hover:shadow-[0px_4px_20px_rgba(0,109,57,0.08)] transition-all group">
              <div className="flex justify-between items-start mb-[24px]">
                <div>
                  <div className="flex items-center gap-[12px] mb-[4px]">
                    <div className="w-10 h-10 rounded-lg bg-[#e7e8e9] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#000000]">energy_savings_leaf</span>
                    </div>
                    <h3 className="text-[20px] leading-[1.4] font-semibold">GreenLight</h3>
                  </div>
                  <p className="text-[#191c1d] text-[14px] leading-[1] font-bold">Fullstack Engineer</p>
                  <p className="text-[#45464c] text-[14px] leading-[1.5] font-normal">April 15, 2025</p>
                </div>
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle className="text-[#c6c6cd]/20" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-[#45464c] progress-ring-circle" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="80.4" strokeLinecap="round" strokeWidth="8"></circle>
                  </svg>
                  <span className="absolute text-[20px] leading-[1.4] font-semibold text-[#000000]">68</span>
                </div>
              </div>
              <div className="mb-[24px]">
                <span className="bg-[#45464c]/10 text-[#45464c] px-[12px] py-[4px] rounded-full text-[12px] leading-[1] tracking-[0.05em] font-semibold">Growth Opportunity</span>
              </div>
              <div className="space-y-[12px] mb-[48px]">
                <div className="space-y-[4px]">
                  <div className="flex justify-between text-[12px] leading-[1] tracking-[0.05em] font-semibold">
                    <span className="text-[#45464c] uppercase">Technical</span>
                    <span className="text-[14px] leading-[1] font-bold">65%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#e7e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="space-y-[4px]">
                  <div className="flex justify-between text-[12px] leading-[1] tracking-[0.05em] font-semibold">
                    <span className="text-[#45464c] uppercase">Problem Solving</span>
                    <span className="text-[14px] leading-[1] font-bold">70%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#e7e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="space-y-[4px]">
                  <div className="flex justify-between text-[12px] leading-[1] tracking-[0.05em] font-semibold">
                    <span className="text-[#45464c] uppercase">Communication</span>
                    <span className="text-[14px] leading-[1] font-bold">68%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#e7e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-[#006d39] rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div className="space-y-[4px]">
                  <div className="flex justify-between text-[12px] leading-[1] tracking-[0.05em] font-semibold">
                    <span className="text-[#45464c] uppercase">Cultural Fit</span>
                    <span className="text-[14px] leading-[1] font-bold">72%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#e7e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-[24px] border-t border-[#c6c6cd]">
                <Link to="/report/123" className="text-[#000000] text-[14px] leading-[1] font-bold hover:underline flex items-center gap-[4px]">
                  View Full Report <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <button className="flex items-center gap-[4px] px-[12px] py-[4px] border border-[#c6c6cd] rounded-lg hover:bg-[#edeeef] transition-colors text-[14px] leading-[1.5] font-normal">
                  <span className="material-symbols-outlined text-[18px]">share</span> Share
                </button>
              </div>
            </div>

            {/* Empty State / Placeholder */}
            <div className="bg-[#f3f4f5] border border-dashed border-[#c6c6cd] p-[24px] rounded-xl flex flex-col items-center justify-center text-center opacity-60">
              <span className="material-symbols-outlined text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-[#45464c] mb-[12px]">pending_actions</span>
              <h3 className="text-[20px] leading-[1.4] font-semibold text-[#45464c]">Interview Scheduled</h3>
              <p className="text-[14px] leading-[1.5] font-normal text-[#45464c]">Your report for "Starlight Dev" will appear here soon.</p>
            </div>
          </section>

          {/* Encouragement Section */}
          <section className="mt-[80px] bg-[#141b2b] text-white p-[48px] rounded-xl flex items-center justify-between overflow-hidden relative">
            <div className="z-10 max-w-lg">
              <h2 className="text-[30px] leading-[1.2] tracking-[-0.01em] font-bold mb-[12px] text-[#5eff9c]">Ready to boost your score?</h2>
              <p className="text-[#7d8497] text-[16px] leading-[1.5] font-normal mb-[24px]">Our AI tutor has analyzed your recent feedback and created a personalized roadmap to help you master Technical Architecture and Communication.</p>
              <button className="bg-[#006d39] text-[#ffffff] px-[48px] py-[12px] rounded-lg text-[14px] leading-[1] font-bold hover:opacity-90 transition-opacity">
                Start Practice Session
              </button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
              <img alt="Growth visualization" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbb-TmsjXH5HFMp_wodH8G5o-4HFK-Gafop9oEm7L94hCYNDqadzIybDhdRLagSFVVIfVPl5p6KWH-Nx-Vf9No4ktnltkZ4BlsaUPbWVG5QZKSf892IU_8ffXkqCrHq86WYuKY_LPl-lMhOThBG8RDAoKcp-S8pPZTN17mMHiiwCrYwds0kjfJn1gNNEEkJob7X38tRlCm9mCiWUCiP5B8F2tBu0gSIdRWqvPFaqmZfgUfJP84iWVQXYmbYLkNFWpIn1CzEioyFZo" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
