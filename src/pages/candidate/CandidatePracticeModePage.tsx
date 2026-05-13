import React from 'react';
import { Link } from 'react-router-dom';

export default function CandidatePracticeModePage() {
  return (
    <div className="bg-[#f0f4fa] text-[#131b2e] min-h-screen font-body-md">
      <style>
        {`
          .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
              vertical-align: middle;
          }
          .glass-panel {
              background: rgba(255, 255, 255, 0.6);
              backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.8);
          }
        `}
      </style>

      {/* Side Navigation Shell */}
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-[#c3c6d7] bg-[#f9fafc] flex flex-col py-8 z-50">
        <div className="px-6 mb-10">
          <h1 className="font-h3 text-[22px] font-bold text-[#131b2e] tracking-tight">HireIQ</h1>
          <p className="font-label-caps text-[10px] font-bold tracking-widest text-[#004ac6] uppercase mt-1">Candidate Portal</p>
        </div>
        
        <nav className="flex-1 space-y-2 px-3">
          <Link to="/candidate/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#434655] hover:bg-[#dbe1ff] transition-colors group">
            <span className="material-symbols-outlined text-[20px] group-hover:text-[#004ac6]">dashboard</span>
            <span className="font-medium text-[14px]">Dashboard</span>
          </Link>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#434655] hover:bg-[#dbe1ff] transition-colors group" href="#">
            <span className="material-symbols-outlined text-[20px] group-hover:text-[#004ac6]">work</span>
            <span className="font-medium text-[14px]">Applications</span>
          </a>
          
          <div className="pt-4 pb-2 px-3">
            <p className="font-label-caps text-[10px] font-bold text-[#8d90a0] uppercase tracking-wider">Preparation</p>
          </div>
          
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#004ac6] bg-[#dbe1ff] font-bold">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            <span className="text-[14px]">Practice Mode</span>
          </div>
          
          <Link to="/candidate/certifications" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#434655] hover:bg-[#dbe1ff] transition-colors group">
            <span className="material-symbols-outlined text-[20px] group-hover:text-[#004ac6]">workspace_premium</span>
            <span className="font-medium text-[14px]">Certifications</span>
          </Link>
        </nav>
        
        <div className="mt-auto px-3 border-t border-[#c3c6d7] pt-4">
          <Link to="/candidate/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#434655] hover:bg-[#dbe1ff] transition-colors group">
            <span className="material-symbols-outlined text-[20px] group-hover:text-[#004ac6]">settings</span>
            <span className="font-medium text-[14px]">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 w-full z-40 bg-[#f9fafc]/80 backdrop-blur-md border-b border-[#c3c6d7] flex justify-between items-center px-8 py-4 h-[72px]">
          <div>
            <h2 className="font-h3 text-[18px] font-bold text-[#131b2e]">AI Practice Mode</h2>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-l border-[#c3c6d7] pl-6">
              <button className="p-2 text-[#434655] hover:text-[#004ac6] transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
              </button>
              <div className="w-9 h-9 rounded-full bg-[#dce2f3] overflow-hidden border border-[#c3c6d7]">
                <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmfttdHOqsdR2BRQ-P6RC777vAKO1wcNu8t7EZFYaRIN5rfNjzSvMAAo7pRUmEveQb68AmZx7sSG4_2mGn5APpClkBP0xD94IfLNGAYOYNSpMPXfOjrPldtpPH2pyeIzcyT_2vhvny_fkQ5R7tV1YZSC_yXyz3L4OIJ4eboD4yF2MjNphjlAIE3MRZuDSXng1BqrGROEF3-OMLnxQ3QLhB2MHWycJWVSIZML7jtcWHRtc4kNh9SbH-ix38scG_CvIDisdiNAn0LdY" />
              </div>
            </div>
          </div>
        </header>

        {/* Practice Mode Content */}
        <div className="max-w-[1200px] mx-auto p-8 space-y-8">
          
          {/* Header Section */}
          <section className="bg-white rounded-2xl p-8 border border-[#c3c6d7] shadow-sm relative overflow-hidden">
            <div className="relative z-10 w-2/3">
              <h3 className="font-h2 text-[32px] font-bold text-[#131b2e] mb-2">Sharpen your skills with AI</h3>
              <p className="text-[#434655] text-[16px] mb-6">Simulate real technical interviews across various domains. Our AI will conduct the interview, evaluate your responses, and provide actionable feedback.</p>
              <div className="flex gap-4">
                <button className="bg-[#004ac6] text-white px-6 py-3 rounded-full font-bold text-[14px] hover:bg-[#00399e] transition-colors shadow-md shadow-[#004ac6]/20">
                  Quick Start: Frontend
                </button>
                <button className="bg-[#dbe1ff] text-[#004ac6] px-6 py-3 rounded-full font-bold text-[14px] hover:bg-[#c6cfff] transition-colors">
                  View Past Sessions
                </button>
              </div>
            </div>
            
            {/* Decorative Graphic */}
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#dbe1ff] to-transparent flex items-center justify-center">
               <span className="material-symbols-outlined text-[120px] text-[#004ac6] opacity-10 transform -rotate-12">psychology_alt</span>
            </div>
          </section>
          
          {/* Practice Categories */}
          <section>
            <h4 className="font-h3 text-[20px] font-bold text-[#131b2e] mb-6">Select a Domain</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Category 1 */}
              <div className="glass-panel p-6 rounded-2xl border border-[#c3c6d7] shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden bg-white">
                <div className="w-12 h-12 bg-[#dbe1ff] rounded-xl flex items-center justify-center mb-4 text-[#004ac6]">
                  <span className="material-symbols-outlined text-[24px]">code</span>
                </div>
                <h5 className="font-bold text-[18px] text-[#131b2e] mb-2">Frontend Engineering</h5>
                <p className="text-[#434655] text-[14px] mb-4">React, DOM manipulation, CSS architecture, and web performance.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[#f0f4fa] text-[#434655] px-2 py-1 rounded text-[11px] font-bold">React</span>
                  <span className="bg-[#f0f4fa] text-[#434655] px-2 py-1 rounded text-[11px] font-bold">JavaScript</span>
                  <span className="bg-[#f0f4fa] text-[#434655] px-2 py-1 rounded text-[11px] font-bold">CSS</span>
                </div>
                <button className="text-[#004ac6] font-bold text-[14px] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Configure Session <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
              
              {/* Category 2 */}
              <div className="glass-panel p-6 rounded-2xl border border-[#c3c6d7] shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden bg-white">
                <div className="w-12 h-12 bg-[#c6f0da] rounded-xl flex items-center justify-center mb-4 text-[#006e2f]">
                  <span className="material-symbols-outlined text-[24px]">database</span>
                </div>
                <h5 className="font-bold text-[18px] text-[#131b2e] mb-2">Backend Engineering</h5>
                <p className="text-[#434655] text-[14px] mb-4">API design, database modeling, distributed systems, and scaling.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[#f0f4fa] text-[#434655] px-2 py-1 rounded text-[11px] font-bold">Node.js</span>
                  <span className="bg-[#f0f4fa] text-[#434655] px-2 py-1 rounded text-[11px] font-bold">Python</span>
                  <span className="bg-[#f0f4fa] text-[#434655] px-2 py-1 rounded text-[11px] font-bold">SQL</span>
                </div>
                <button className="text-[#004ac6] font-bold text-[14px] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Configure Session <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
              
              {/* Category 3 */}
              <div className="glass-panel p-6 rounded-2xl border border-[#c3c6d7] shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden bg-white">
                <div className="w-12 h-12 bg-[#ffe0ec] rounded-xl flex items-center justify-center mb-4 text-[#8a003f]">
                  <span className="material-symbols-outlined text-[24px]">architecture</span>
                </div>
                <h5 className="font-bold text-[18px] text-[#131b2e] mb-2">System Design</h5>
                <p className="text-[#434655] text-[14px] mb-4">Whiteboarding large scale architectures and trade-off analysis.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[#f0f4fa] text-[#434655] px-2 py-1 rounded text-[11px] font-bold">Microservices</span>
                  <span className="bg-[#f0f4fa] text-[#434655] px-2 py-1 rounded text-[11px] font-bold">Caching</span>
                </div>
                <button className="text-[#004ac6] font-bold text-[14px] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Configure Session <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>

            </div>
          </section>
          
          {/* Recent Performance Analytics */}
          <section className="bg-white rounded-2xl p-8 border border-[#c3c6d7] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-h3 text-[20px] font-bold text-[#131b2e]">Recent Performance</h4>
              <button className="text-[#004ac6] font-bold text-[14px] hover:underline">View Detailed Analytics</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="p-4 bg-[#f9fafc] rounded-xl border border-[#e1e2ed]">
                <p className="text-[12px] font-bold text-[#434655] uppercase tracking-wider mb-1">Sessions Completed</p>
                <p className="text-[28px] font-bold text-[#131b2e]">12</p>
              </div>
              <div className="p-4 bg-[#f9fafc] rounded-xl border border-[#e1e2ed]">
                <p className="text-[12px] font-bold text-[#434655] uppercase tracking-wider mb-1">Avg. Score</p>
                <div className="flex items-center gap-2">
                  <p className="text-[28px] font-bold text-[#131b2e]">84</p>
                  <span className="text-[#006e2f] text-[12px] font-bold flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_upward</span>5%</span>
                </div>
              </div>
              <div className="p-4 bg-[#f9fafc] rounded-xl border border-[#e1e2ed] col-span-2">
                <p className="text-[12px] font-bold text-[#434655] uppercase tracking-wider mb-3">Strongest Areas</p>
                <div className="flex gap-2">
                  <span className="bg-[#dbe1ff] text-[#004ac6] px-3 py-1 rounded-full text-[12px] font-bold border border-[#004ac6]/20">React Hooks</span>
                  <span className="bg-[#dbe1ff] text-[#004ac6] px-3 py-1 rounded-full text-[12px] font-bold border border-[#004ac6]/20">State Management</span>
                </div>
              </div>
            </div>
            
            {/* History Table */}
            <div className="border border-[#e1e2ed] rounded-xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#f9fafc]">
                  <tr>
                    <th className="px-6 py-4 font-bold text-[12px] text-[#434655] uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 font-bold text-[12px] text-[#434655] uppercase tracking-wider">Domain</th>
                    <th className="px-6 py-4 font-bold text-[12px] text-[#434655] uppercase tracking-wider">Difficulty</th>
                    <th className="px-6 py-4 font-bold text-[12px] text-[#434655] uppercase tracking-wider">Score</th>
                    <th className="px-6 py-4 font-bold text-[12px] text-[#434655] uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e1e2ed]">
                  <tr className="hover:bg-[#f9fafc] transition-colors">
                    <td className="px-6 py-4 text-[14px] text-[#131b2e]">Yesterday, 2:30 PM</td>
                    <td className="px-6 py-4 text-[14px] text-[#131b2e] font-medium">Frontend Engineering</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-[#fff3e0] text-[#e65100] rounded text-[11px] font-bold">Hard</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-bold text-[#131b2e]">88</span>
                        <div className="w-16 h-2 bg-[#e1e2ed] rounded-full overflow-hidden">
                          <div className="h-full bg-[#006e2f] w-[88%]"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-[#004ac6] text-[14px] font-bold hover:underline">Review Details</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#f9fafc] transition-colors">
                    <td className="px-6 py-4 text-[14px] text-[#131b2e]">Oct 15, 10:00 AM</td>
                    <td className="px-6 py-4 text-[14px] text-[#131b2e] font-medium">System Design</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-[#e8f5e9] text-[#2e7d32] rounded text-[11px] font-bold">Medium</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-bold text-[#131b2e]">76</span>
                        <div className="w-16 h-2 bg-[#e1e2ed] rounded-full overflow-hidden">
                          <div className="h-full bg-[#f57f17] w-[76%]"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-[#004ac6] text-[14px] font-bold hover:underline">Review Details</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </section>

        </div>
      </main>
    </div>
  );
}
