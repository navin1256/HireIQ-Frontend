import React from 'react';
import { Link } from 'react-router-dom';

export default function ExpertDashboardPage() {
  return (
    <div className="overflow-x-hidden bg-[#0d141d] text-[#dce3f0] font-body-md min-h-screen">
      <style>
        {`
          .glass-card {
              background: rgba(15, 23, 42, 0.7);
              backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.08);
          }
          .emerald-glow {
              box-shadow: 0 0 20px rgba(34, 217, 122, 0.15);
          }
        `}
      </style>
      
      {/* Ambient Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#b4c5ff]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#0566d9]/10 blur-[150px] rounded-full"></div>
      </div>

      {/* Side Navigation Bar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0d141d]/70 backdrop-blur-md border-r border-white/10 shadow-xl flex flex-col py-lg gap-md z-50">
        <div className="px-md mb-md">
          <h1 className="font-h3 text-h3 font-extrabold text-[#b4c5ff]">ExpertPanel</h1>
          <p className="text-[#c3c6d7] text-sm mt-base">Technical Recruiter</p>
        </div>
        <nav className="flex-1 px-sm">
          <ul className="space-y-base">
            <li className="flex items-center gap-sm px-md py-sm cursor-pointer active:scale-95 transition-all duration-200 text-[#b4c5ff] border-r-2 border-[#b4c5ff] font-bold">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">Dashboard</span>
            </li>
            <li className="flex items-center gap-sm px-md py-sm cursor-pointer active:scale-95 transition-all duration-200 text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#dce3f0]">
              <span className="material-symbols-outlined">video_chat</span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">My Interviews</span>
            </li>
            <li className="flex items-center gap-sm px-md py-sm cursor-pointer active:scale-95 transition-all duration-200 text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#dce3f0]">
              <span className="material-symbols-outlined">calendar_today</span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">Availability</span>
            </li>
            <Link to="/expert/earnings" className="flex items-center gap-sm px-md py-sm cursor-pointer active:scale-95 transition-all duration-200 text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#dce3f0]">
              <span className="material-symbols-outlined">payments</span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">Earnings</span>
            </Link>
            <li className="flex items-center gap-sm px-md py-sm cursor-pointer active:scale-95 transition-all duration-200 text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#dce3f0]">
              <span className="material-symbols-outlined">person</span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">Profile</span>
            </li>
            <li className="flex items-center gap-sm px-md py-sm cursor-pointer active:scale-95 transition-all duration-200 text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#dce3f0]">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">Settings</span>
            </li>
          </ul>
        </nav>
        <div className="px-md pt-md border-t border-white/5">
          <div className="flex items-center gap-sm p-sm rounded-xl bg-white/5">
            <img alt="Interviewer profile avatar" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Y55i8w_as9X9oYHxtX7gcWM71RIfZg7ZriGGIMMId-kkQk1xR8hfhJP0HpK9AaFpOJVSabkpsHtbS4QRxtQLQi7fyM6gxBTqbXmutNZO8A7Oep8RNitIkQHASPi5_weMiPo9DfP-v8Lhiekoi4jM2s9ZvVjSXuymUiiUHkzcOtykEMfu7O6RTvZadjxuCrQOpmagvre6i1fcxNddTjvjr2hLyWVEVI5zq72XV3HzC8MQxD2tsLYcDt0Vdz7w0gLuSVgZDiaVfSk" />
            <div className="overflow-hidden">
              <p className="font-bold text-[#dce3f0] truncate">Raj Malhotra</p>
              <p className="text-xs text-[#c3c6d7]">L7 Engineering Manager</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 relative min-h-screen">
        {/* Top App Bar */}
        <header className="sticky top-0 z-40 w-full bg-[#0d141d]/70 backdrop-blur-md border-b border-white/10 flex justify-between items-center px-lg py-sm">
          <div className="flex items-center gap-md">
            <h2 className="font-h3 text-h3 text-[#dce3f0]">Dashboard</h2>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#c3c6d7]">search</span>
              <input className="bg-[#080f17] border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#b4c5ff] w-64 transition-all" placeholder="Search interviews..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-sm">
            <button className="hover:bg-white/5 rounded-full p-2 transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#b4c5ff] rounded-full"></span>
            </button>
            <button className="hover:bg-white/5 rounded-full p-2 transition-colors">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <button className="hover:bg-white/5 rounded-full p-2 transition-colors">
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        </header>

        <div className="max-w-container-max mx-auto px-lg py-lg">
          {/* Welcome Header */}
          <section className="mb-xl">
            <h2 className="font-h2 text-h2 text-[#dce3f0]">Welcome back, Raj! 👋</h2>
            <p className="text-body-lg font-body-lg text-[#c3c6d7] mt-base">You have 3 technical interviews scheduled for today.</p>
          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-xl">
            <div className="glass-card p-md rounded-[24px] hover:bg-[#2e353f] transition-all duration-200 group">
              <div className="flex justify-between items-start mb-sm">
                <span className="material-symbols-outlined text-[#FFD700]">payments</span>
                <span className="text-xs font-bold text-[#FFD700] bg-[#FFD700]/10 px-2 py-1 rounded-full">+18%</span>
              </div>
              <p className="text-label-caps font-label-caps text-[#c3c6d7] uppercase">Earnings</p>
              <p className="font-h3 text-h3 text-[#dce3f0] mt-base">$750</p>
              <p className="text-xs text-[#c3c6d7] mt-xs">from last month</p>
            </div>
            <div className="glass-card p-md rounded-[24px] hover:bg-[#2e353f] transition-all duration-200">
              <div className="mb-sm">
                <span className="material-symbols-outlined text-[#b4c5ff]">video_chat</span>
              </div>
              <p className="text-label-caps font-label-caps text-[#c3c6d7] uppercase">Interviews Completed</p>
              <p className="font-h3 text-h3 text-[#dce3f0] mt-base">8</p>
              <p className="text-xs text-[#c3c6d7] mt-xs">Average 45m per session</p>
            </div>
            <div className="glass-card p-md rounded-[24px] hover:bg-[#2e353f] transition-all duration-200">
              <div className="flex justify-between items-start mb-sm">
                <span className="material-symbols-outlined text-[#22D97A]">stars</span>
                <span className="text-xs font-bold text-[#22D97A] bg-[#22D97A]/10 px-2 py-1 rounded-full">Top 5%</span>
              </div>
              <p className="text-label-caps font-label-caps text-[#c3c6d7] uppercase">Average Rating</p>
              <p className="font-h3 text-h3 text-[#dce3f0] mt-base">4.8 ⭐</p>
              <p className="text-xs text-[#c3c6d7] mt-xs">from 124 reviews</p>
            </div>
            <div className="glass-card p-md rounded-[24px] hover:bg-[#2e353f] transition-all duration-200">
              <div className="mb-sm">
                <span className="material-symbols-outlined text-[#adc6ff]">bolt</span>
              </div>
              <p className="text-label-caps font-label-caps text-[#c3c6d7] uppercase">Response Rate</p>
              <p className="font-h3 text-h3 text-[#dce3f0] mt-base">95%</p>
              <p className="text-xs text-[#c3c6d7] mt-xs">Matches target performance</p>
            </div>
          </section>

          {/* Main Content Bento */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {/* Upcoming Interviews */}
            <section className="lg:col-span-2 space-y-md">
              <div className="flex justify-between items-end mb-sm">
                <h3 className="font-h3 text-h3 text-[#dce3f0]">Upcoming Interviews</h3>
                <a className="text-[#b4c5ff] font-button text-button hover:underline" href="#">View All</a>
              </div>
              
              {/* Interview Card 1 */}
              <div className="glass-card p-md rounded-[24px] hover:-translate-y-1 transition-all duration-200">
                <div className="flex justify-between items-start">
                  <div className="flex gap-md">
                    <div className="w-12 h-12 rounded-xl bg-[#b4c5ff]/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#b4c5ff]">code</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#dce3f0]">Candidate: JD-882 (Blinded)</h4>
                      <p className="text-[#c3c6d7] text-sm">Senior React Developer • TechNova Inc.</p>
                      <div className="flex items-center gap-xs mt-sm">
                        <span className="material-symbols-outlined text-[#FFD700] text-sm">schedule</span>
                        <span className="text-sm font-bold text-[#FFD700]">Starts in 2h 34min</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#dce3f0]">$150</p>
                    <p className="text-xs text-[#c3c6d7]">Expert Fee</p>
                  </div>
                </div>
                <div className="mt-md pt-md border-t border-white/5 flex gap-sm">
                  <Link to="/expert/interviews/JD-882" className="flex-1 text-center py-3 px-md rounded-full border border-white/10 font-button text-button text-[#dce3f0] hover:bg-white/5 transition-colors">
                    View Interview Guide
                  </Link>
                  <button className="flex-1 py-3 px-md rounded-full bg-[#22D97A] text-[#002e1a] font-button text-button hover:brightness-110 transition-all emerald-glow">
                    Join Interview
                  </button>
                </div>
              </div>

              {/* Interview Card 2 */}
              <div className="glass-card p-md rounded-[24px] hover:-translate-y-1 transition-all duration-200">
                <div className="flex justify-between items-start">
                  <div className="flex gap-md">
                    <div className="w-12 h-12 rounded-xl bg-[#8343f4]/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#d2bbff]">architecture</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#dce3f0]">Candidate: MT-219 (Blinded)</h4>
                      <p className="text-[#c3c6d7] text-sm">Staff Software Engineer • CloudStream</p>
                      <div className="flex items-center gap-xs mt-sm text-[#c3c6d7]">
                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                        <span className="text-sm">Tomorrow, 10:00 AM</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#dce3f0]">$200</p>
                    <p className="text-xs text-[#c3c6d7]">Expert Fee</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sidebar Content (Earnings & Calendar) */}
            <aside className="space-y-gutter">
              {/* Earnings Summary */}
              <section className="glass-card p-md rounded-[24px]">
                <h4 className="font-bold text-[#dce3f0] mb-sm">Earnings Summary</h4>
                <div className="bg-[#080f17] p-sm rounded-xl border border-white/5 mb-md">
                  <p className="text-sm text-[#c3c6d7]">Pending payout</p>
                  <p className="text-3xl font-bold text-[#dce3f0] mt-base">$225.00</p>
                  <div className="w-full h-2 bg-white/10 rounded-full mt-md overflow-hidden">
                    <div className="h-full bg-[#b4c5ff]" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-xs text-[#c3c6d7] mt-sm">Payout scheduled for Sept 30th</p>
                </div>
                <Link to="/expert/earnings" className="w-full py-2 flex items-center justify-center gap-xs text-sm font-bold text-[#b4c5ff] hover:bg-[#b4c5ff]/5 rounded-lg transition-colors">
                  Full Earnings Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </section>

              {/* Availability Calendar */}
              <section className="glass-card p-md rounded-[24px]">
                <div className="flex justify-between items-center mb-md">
                  <h4 className="font-bold text-[#dce3f0]">Weekly Availability</h4>
                  <span className="text-xs text-[#b4c5ff] font-bold cursor-pointer">Edit</span>
                </div>
                <div className="grid grid-cols-7 gap-2 mb-md text-center">
                  <div className="text-[10px] text-[#c3c6d7]">M</div>
                  <div className="text-[10px] text-[#c3c6d7]">T</div>
                  <div className="text-[10px] text-[#c3c6d7]">W</div>
                  <div className="text-[10px] text-[#c3c6d7]">T</div>
                  <div className="text-[10px] text-[#c3c6d7]">F</div>
                  <div className="text-[10px] text-[#c3c6d7]">S</div>
                  <div className="text-[10px] text-[#c3c6d7]">S</div>
                  
                  <div className="h-10 rounded-md bg-[#22D97A]/20 border border-[#22D97A]/30 flex items-center justify-center text-xs">3</div>
                  <div className="h-10 rounded-md bg-[#22D97A]/20 border border-[#22D97A]/30 flex items-center justify-center text-xs">2</div>
                  <div className="h-10 rounded-md bg-white/5 border border-white/5 flex items-center justify-center text-xs text-[#c3c6d7]">0</div>
                  <div className="h-10 rounded-md bg-[#22D97A]/20 border border-[#22D97A]/30 flex items-center justify-center text-xs">4</div>
                  <div className="h-10 rounded-md bg-[#22D97A]/20 border border-[#22D97A]/30 flex items-center justify-center text-xs">1</div>
                  <div className="h-10 rounded-md bg-white/5 border border-white/5 flex items-center justify-center text-xs text-[#c3c6d7]">0</div>
                  <div className="h-10 rounded-md bg-white/5 border border-white/5 flex items-center justify-center text-xs text-[#c3c6d7]">0</div>
                </div>
                <div className="space-y-sm">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#c3c6d7]">Slots Booked</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#c3c6d7]">Open Slots</span>
                    <span className="font-bold text-[#b4c5ff]">8</span>
                  </div>
                </div>
              </section>

              {/* Profile Strength */}
              <section className="glass-card p-md rounded-[24px] bg-gradient-to-br from-[#2563eb]/20 to-transparent">
                <div className="flex items-center gap-sm mb-sm">
                  <span className="material-symbols-outlined text-[#b4c5ff]">verified</span>
                  <h4 className="font-bold text-[#dce3f0]">Top Rated Badge</h4>
                </div>
                <p className="text-sm text-[#c3c6d7] mb-md">Maintain a 4.8+ rating and 90% response rate to keep your priority ranking.</p>
                <div className="w-full bg-[#22D97A]/10 text-[#22D97A] text-xs font-bold py-2 rounded-lg text-center border border-[#22D97A]/20">
                  YOU ARE IN THE TOP 5%
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
