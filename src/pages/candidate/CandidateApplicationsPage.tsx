import React from 'react';
import { Link } from 'react-router-dom';

export default function CandidateApplicationsPage() {
  return (
    <div className="bg-[#f8f9fa] font-['Inter'] text-[#191c1d] antialiased min-h-screen">
      <style>
        {`
          .font-logo { font-family: 'Comfortaa', sans-serif; }
          .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
        `}
      </style>
      
      {/* Sidebar Navigation Shell */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#000000] flex flex-col py-[48px] px-[24px] z-50">
        <div className="mb-[80px] px-[24px]">
          <h1 className="font-logo text-[30px] leading-[1.2] tracking-[-0.01em] font-bold text-[#ffffff]">HireIQ</h1>
          <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#7d8492] opacity-70">Candidate Portal</p>
        </div>
        <nav className="flex flex-col gap-[4px] flex-grow">
          {/* Dashboard */}
          <Link className="flex items-center gap-[12px] text-[#7d8492] hover:text-[#ffffff] px-[24px] py-[12px] hover:bg-[#151c27]/50 transition-colors rounded-lg" to="/candidate/dashboard">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="text-[16px] leading-[1.5] font-normal">Dashboard</span>
          </Link>
          {/* My Applications (Active) */}
          <Link className="flex items-center gap-[12px] bg-[#151c27] text-[#dce2f3] rounded-lg px-[24px] py-[12px] scale-[0.98] transition-transform duration-200" to="/candidate/applications">
            <span className="material-symbols-outlined" data-icon="work_history" style={{ fontVariationSettings: "'FILL' 1" }}>work_history</span>
            <span className="text-[16px] leading-[1.5] font-normal">My Applications</span>
          </Link>
          {/* My Reports */}
          <Link className="flex items-center gap-[12px] text-[#7d8492] hover:text-[#ffffff] px-[24px] py-[12px] hover:bg-[#151c27]/50 transition-colors rounded-lg" to="/candidate/reports">
            <span className="material-symbols-outlined" data-icon="assessment">assessment</span>
            <span className="text-[16px] leading-[1.5] font-normal">My Reports</span>
          </Link>
          {/* Practice */}
          <Link className="flex items-center gap-[12px] text-[#7d8492] hover:text-[#ffffff] px-[24px] py-[12px] hover:bg-[#151c27]/50 transition-colors rounded-lg" to="/candidate/practice">
            <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
            <span className="text-[16px] leading-[1.5] font-normal">Practice</span>
          </Link>
          {/* Certifications */}
          <Link className="flex items-center gap-[12px] text-[#7d8492] hover:text-[#ffffff] px-[24px] py-[12px] hover:bg-[#151c27]/50 transition-colors rounded-lg" to="/candidate/dashboard">
            <span className="material-symbols-outlined" data-icon="verified">verified</span>
            <span className="text-[16px] leading-[1.5] font-normal">Certifications</span>
          </Link>
        </nav>
        <div className="mt-auto border-t border-[#151c27] pt-[24px]">
          <Link className="flex items-center gap-[12px] text-[#7d8492] hover:text-[#ffffff] px-[24px] py-[12px] hover:bg-[#151c27]/50 transition-colors rounded-lg mb-[12px]" to="/candidate/settings">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="text-[16px] leading-[1.5] font-normal">Settings</span>
          </Link>
          <div className="flex items-center gap-[12px] px-[24px] py-[12px] bg-[#151c27]/30 rounded-xl">
            <img alt="Candidate Profile Picture" className="w-8 h-8 rounded-full border border-[#c0c7d6]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu9vgPV3V7swOYzeSBKijtfqHrZVgiL3lHeoJHdtEjaCHFMmwxTX78DGh6FFdIRcqKjxd6DoyjDwuqtZVJKelNuqzzqL8vLMUlYy0z89e6h2JTkMlAoVGiXhelWeJHmQUlWR06nM2hy4UQIs-EY8jwQygX165Ram6_TK100fV4uvKl2m27scPrIPboDawK0uAS08xMQ_FtdfWV_0EgvCil5yvXNIQ5ypUA5wHFulUiedDzIo6_Zx6_Rf6z1O3wIbE60S5uLxPo54k" />
            <div className="overflow-hidden">
              <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#ffffff] truncate">Alex Rivera</p>
              <p className="text-[10px] text-[#7d8492] truncate">alex.r@hireiq.io</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Shell */}
      <main className="ml-64 min-h-screen">
        {/* Top App Bar */}
        <header className="flex justify-between items-center px-[80px] h-20 w-full sticky top-0 bg-[#f8f9fa]/80 backdrop-blur-md z-40 border-b border-[#c6c6cd]">
          <div className="flex gap-[48px] items-center">
            <a className="text-[#45464c] font-medium pb-[8px] hover:text-[#000000] transition-colors" href="#">All</a>
            <a className="text-[#000000] font-bold border-b-2 border-[#000000] pb-[8px]" href="#">Active</a>
            <a className="text-[#45464c] font-medium pb-[8px] hover:text-[#000000] transition-colors" href="#">Archived</a>
          </div>
          <div className="flex items-center gap-[24px]">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#76777d]" data-icon="search">search</span>
              <input className="pl-10 pr-4 py-2 bg-[#f3f4f5] border border-[#c6c6cd] rounded-full text-[14px] leading-[1.5] font-normal focus:ring-2 focus:ring-[#141b2b] focus:border-[#000000] outline-none w-64 transition-all" placeholder="Search applications..." type="text" />
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#e7e8e9] transition-colors">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#e7e8e9] transition-colors">
              <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="max-w-[1120px] mx-auto px-[24px] py-[80px]">
          {/* Header Section */}
          <div className="mb-[48px]">
            <h2 className="text-[30px] leading-[1.2] tracking-[-0.01em] font-bold text-[#191c1d] mb-[4px]">My Applications</h2>
            <p className="text-[18px] leading-[1.6] font-normal text-[#45464c]">Track every stage of your hiring journey.</p>
          </div>

          {/* Segmented Filter Pills */}
          <div className="flex gap-[8px] mb-[48px] p-1 bg-[#f3f4f5] rounded-xl inline-flex">
            <button className="px-[24px] py-[8px] rounded-lg text-[14px] leading-[1.5] font-normal text-[14px] leading-[1] font-bold text-[#45464c] hover:bg-[#e7e8e9] transition-colors">All Applications</button>
            <button className="px-[24px] py-[8px] rounded-lg text-[14px] leading-[1.5] font-normal text-[14px] leading-[1] font-bold bg-[#e1e3e4] text-[#000000] shadow-sm">Active Jobs</button>
            <button className="px-[24px] py-[8px] rounded-lg text-[14px] leading-[1.5] font-normal text-[14px] leading-[1] font-bold text-[#45464c] hover:bg-[#e7e8e9] transition-colors">Archived</button>
          </div>

          {/* Application List (Cards) */}
          <div className="flex flex-col gap-[24px]">
            {/* Card 1: Senior React Developer */}
            <article className="bg-[#ffffff] p-[24px] rounded-[20px] border border-[#c6c6cd] hover:shadow-lg transition-all group">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[24px] gap-[24px]">
                <div className="flex gap-[24px] items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#141b2b] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#141b2b]" style={{ color: '#ffffff' }} data-icon="rocket_launch">rocket_launch</span>
                  </div>
                  <div>
                    <h3 className="text-[20px] leading-[1.4] font-semibold">Senior React Developer</h3>
                    <p className="text-[14px] leading-[1.5] font-normal text-[#45464c]">TechCorp • Remote • Applied 12 days ago</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-[4px]">
                  <span className="px-[12px] py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase rounded-full tracking-wider border border-blue-200">Interviewed</span>
                  <p className="text-xs font-semibold text-[#000000]">Next: Panel Interview • Oct 24, 2023</p>
                </div>
              </div>

              {/* Pipeline Visualization */}
              <div className="relative py-[48px] mb-[24px]">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#e7e8e9] -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-3/4 h-[2px] bg-[#006d39] -translate-y-1/2"></div>
                <div className="relative flex justify-between">
                  {/* Stage 1 */}
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px]">
                    <div className="w-8 h-8 rounded-full bg-[#006d39] flex items-center justify-center text-white shadow-sm border-2 border-[#ffffff]">
                      <span className="material-symbols-outlined text-sm" data-icon="check">check</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#006d39]">Applied</span>
                  </div>
                  {/* Stage 2 */}
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px]">
                    <div className="w-8 h-8 rounded-full bg-[#006d39] flex items-center justify-center text-white shadow-sm border-2 border-[#ffffff]">
                      <span className="material-symbols-outlined text-sm" data-icon="check">check</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#006d39]">AI Screened</span>
                  </div>
                  {/* Stage 3 */}
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px]">
                    <div className="w-8 h-8 rounded-full bg-[#006d39] flex items-center justify-center text-white shadow-sm border-2 border-[#ffffff]">
                      <span className="material-symbols-outlined text-sm" data-icon="check">check</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#006d39]">Assessment</span>
                  </div>
                  {/* Stage 4: Current */}
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px]">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] border-4 border-blue-100 ring-2 ring-blue-600/20">
                      <span className="material-symbols-outlined text-sm" data-icon="schedule" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                    </div>
                    <span className="text-[10px] font-bold text-blue-700">Interviewed</span>
                  </div>
                  {/* Stage 5 */}
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px]">
                    <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center text-[#76777d] border-2 border-[#ffffff]">
                      <div className="w-2 h-2 rounded-full bg-[#76777d]"></div>
                    </div>
                    <span className="text-[10px] font-bold text-[#45464c]">Offer</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-[24px] border-t border-[#c6c6cd]">
                <div className="flex gap-[24px]">
                  <Link className="flex items-center gap-[4px] text-[#006d39] hover:underline text-[14px] leading-[1] font-bold" to="/report/123">
                    <span className="material-symbols-outlined text-sm" data-icon="description">description</span>
                    View Feedback Report
                  </Link>
                  <a className="flex items-center gap-[4px] text-[#45464c] hover:text-[#000000] transition-colors text-[14px] leading-[1] font-bold" href="#">
                    <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
                    View Job
                  </a>
                </div>
                <Link to="/interview/123" className="bg-[#000000] text-[#ffffff] px-[48px] py-[8px] rounded-xl text-[14px] leading-[1] font-bold hover:bg-[#000000]/90 transition-all active:scale-95 shadow-sm">
                  Join Interview
                </Link>
              </div>
            </article>

            {/* Card 2: Frontend Architect */}
            <article className="bg-[#ffffff] p-[24px] rounded-[20px] border border-[#c6c6cd] hover:shadow-lg transition-all">
              <div className="flex justify-between items-center mb-[24px]">
                <div className="flex gap-[24px] items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#56fc99] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#00723c]" data-icon="auto_awesome">auto_awesome</span>
                  </div>
                  <div>
                    <h3 className="text-[20px] leading-[1.4] font-semibold">Frontend Architect</h3>
                    <p className="text-[14px] leading-[1.5] font-normal text-[#45464c]">NextGen AI • San Francisco • Applied 5 days ago</p>
                  </div>
                </div>
                <span className="px-[12px] py-1 bg-purple-100 text-purple-700 text-[10px] font-bold uppercase rounded-full tracking-wider border border-purple-200">AI Screened</span>
              </div>

              <div className="relative py-[48px] mb-[24px]">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#e7e8e9] -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-1/4 h-[2px] bg-[#006d39] -translate-y-1/2"></div>
                <div className="relative flex justify-between">
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px]">
                    <div className="w-8 h-8 rounded-full bg-[#006d39] flex items-center justify-center text-white border-2 border-[#ffffff]">
                      <span className="material-symbols-outlined text-sm" data-icon="check">check</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#006d39]">Applied</span>
                  </div>
                  {/* Current Stage */}
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px]">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-[0_0_10px_rgba(147,51,234,0.3)] border-2 border-purple-100">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    </div>
                    <span className="text-[10px] font-bold text-purple-700">AI Screened</span>
                  </div>
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px] opacity-40">
                    <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center"></div>
                    <span className="text-[10px] font-bold">Coding Test</span>
                  </div>
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px] opacity-40">
                    <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center"></div>
                    <span className="text-[10px] font-bold">Interview</span>
                  </div>
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px] opacity-40">
                    <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center"></div>
                    <span className="text-[10px] font-bold">Decision</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-center pt-[24px] border-t border-[#c6c6cd]">
                <button className="text-[#45464c] hover:text-[#000000] transition-colors text-[14px] leading-[1] font-bold flex items-center gap-[4px]">
                  Manage Application
                  <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Card 3: Fullstack Engineer */}
            <article className="bg-[#ffffff] p-[24px] rounded-[20px] border border-[#c6c6cd] hover:shadow-lg transition-all">
              <div className="flex justify-between items-center mb-[24px]">
                <div className="flex gap-[24px] items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#e7e8e9] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#45464c]" data-icon="eco">eco</span>
                  </div>
                  <div>
                    <h3 className="text-[20px] leading-[1.4] font-semibold">Fullstack Engineer</h3>
                    <p className="text-[14px] leading-[1.5] font-normal text-[#45464c]">GreenLight • Austin, TX • Applied 2 days ago</p>
                  </div>
                </div>
                <span className="px-[12px] py-1 bg-[#e7e8e9] text-[#45464c] text-[10px] font-bold uppercase rounded-full tracking-wider border border-[#c6c6cd]">Applied</span>
              </div>

              <div className="relative py-[48px] mb-[24px]">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#e7e8e9] -translate-y-1/2"></div>
                <div className="relative flex justify-between">
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px]">
                    <div className="w-8 h-8 rounded-full bg-[#000000] flex items-center justify-center text-white border-2 border-[#ffffff] shadow-[0_0_10px_rgba(0,0,0,0.2)]">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    </div>
                    <span className="text-[10px] font-bold text-[#000000]">Applied</span>
                  </div>
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px] opacity-40">
                    <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center"></div>
                    <span className="text-[10px] font-bold">Reviewing</span>
                  </div>
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px] opacity-40">
                    <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center"></div>
                    <span className="text-[10px] font-bold">Technical</span>
                  </div>
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px] opacity-40">
                    <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center"></div>
                    <span className="text-[10px] font-bold">Final Round</span>
                  </div>
                  <div className="flex flex-col items-center gap-[4px] z-10 bg-[#ffffff] px-[4px] opacity-40">
                    <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center"></div>
                    <span className="text-[10px] font-bold">Outcome</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      {/* Contextual FAB */}
      <button className="fixed bottom-[48px] right-[48px] bg-[#006d39] text-[#ffffff] px-[48px] py-[24px] rounded-full text-[14px] leading-[1] font-bold shadow-xl hover:scale-105 active:scale-95 transition-transform flex items-center gap-[12px] z-50">
        <span className="material-symbols-outlined" data-icon="add">add</span>
        Track New Application
      </button>
    </div>
  );
}
