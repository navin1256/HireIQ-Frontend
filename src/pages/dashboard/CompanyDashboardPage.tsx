import { Link } from 'react-router-dom';

export default function CompanyDashboardPage() {
  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body-md overflow-x-hidden min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-[240px] z-50 bg-[#192029] border-r border-[#434655]/10 backdrop-blur-md flex flex-col py-[24px] px-[16px]">
        <div className="mb-[80px] px-[16px]">
          <h1 className="text-[32px] font-extrabold text-[#b4c5ff] tracking-tighter" style={{ fontFamily: 'Plus Jakarta Sans' }}>TalentOS</h1>
          <p className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-[0.05em] mt-[4px]" style={{ fontFamily: 'Inter' }}>Enterprise Suite</p>
        </div>
        <nav className="flex-1 space-y-[8px]">
          <Link to="/dashboard" className="flex items-center gap-[8px] text-[#b4c5ff] font-semibold border-r-2 border-[#b4c5ff] bg-[#b4c5ff]/5 px-[16px] py-[8px] transition-all duration-200" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard</span>
            Dashboard
          </Link>
          <a href="#" className="flex items-center gap-[8px] text-[#c3c6d7] hover:text-[#dce3f0] hover:bg-white/5 px-[16px] py-[8px] transition-all duration-200 active:opacity-80">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>bar_chart</span>
            Analytics
          </a>
          <a href="#" className="flex items-center gap-[8px] text-[#c3c6d7] hover:text-[#dce3f0] hover:bg-white/5 px-[16px] py-[8px] transition-all duration-200 active:opacity-80">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>groups</span>
            Candidates
          </a>
          <a href="#" className="flex items-center gap-[8px] text-[#c3c6d7] hover:text-[#dce3f0] hover:bg-white/5 px-[16px] py-[8px] transition-all duration-200 active:opacity-80">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>badge</span>
            Recruiters
          </a>
          <a href="#" className="flex items-center gap-[8px] text-[#c3c6d7] hover:text-[#dce3f0] hover:bg-white/5 px-[16px] py-[8px] transition-all duration-200 active:opacity-80">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
            Settings
          </a>
        </nav>
        <div className="mt-auto space-y-[24px]">
          <button className="w-full bg-[#2563eb] text-[#eeefff] font-semibold py-[16px] rounded-lg hover:brightness-110 transition-all" style={{ fontFamily: 'Inter' }}>
            Upgrade Plan
          </button>
          <div className="flex items-center gap-[16px] px-[16px] py-[8px] border-t border-[#434655]/10 pt-[24px]">
            <span className="material-symbols-outlined text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>account_circle</span>
            <span className="text-[16px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>User Profile</span>
          </div>
        </div>
      </aside>

      {/* Top Navigation Bar */}
      <header 
        className="sticky top-0 z-40 flex justify-between items-center px-[48px] py-[16px] ml-[240px] w-[calc(100%-240px)] border-b border-[#434655]/10"
        style={{ background: 'rgba(13, 20, 29, 0.8)', backdropFilter: 'blur(12px)' }}
      >
        <div className="flex items-center gap-[48px]">
          <div>
            <h2 className="text-[32px] font-bold text-[#dce3f0] leading-none" style={{ fontFamily: 'Plus Jakarta Sans' }}>Dashboard</h2>
            <p className="text-[#c3c6d7] text-[14px]" style={{ fontFamily: 'Inter' }}>Overview of your hiring pipeline</p>
          </div>
          <div className="relative hidden lg:block">
            <span className="material-symbols-outlined absolute left-[16px] top-1/2 -translate-y-1/2 text-[#c3c6d7]" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
            <input 
              className="bg-[#080f17] border border-[#434655]/20 rounded-full pl-[80px] pr-[24px] py-[8px] w-64 focus:ring-1 focus:ring-[#b4c5ff] focus:border-[#b4c5ff] outline-none text-[14px] text-[#dce3f0]" 
              placeholder="Search candidates..." 
              type="text" 
            />
          </div>
        </div>
        <div className="flex items-center gap-[24px]">
          <div className="flex items-center gap-[16px] border-r border-[#434655]/20 pr-[24px]">
            <button className="material-symbols-outlined text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</button>
            <button className="material-symbols-outlined text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>settings</button>
          </div>
          <button className="bg-[#b4c5ff] text-[#002a78] font-semibold px-[24px] py-[8px] rounded-full hover:scale-95 transition-all" style={{ fontFamily: 'Inter' }}>
            Create New
          </button>
          <img 
            alt="User Avatar" 
            className="w-10 h-10 rounded-full border border-[#b4c5ff]/20" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8QENuUEjBQWQNi3VVbbN2mDX_twqrR3Pu9WB5dx8hO-VnEB6L8Ajl7MWBWY6ChPKcXWNwZgSJqKHJwl9xV5OfskqrnqIq8iyojf-OAwxrkZxW7PB8qBgig39Pq_GfPG2EL9KiDazykZ5wqE5FSqb4wXrkwAlZ6VFYkkTaKv8GWI-iCx8t-rTV7CLXAcZFDLYdXYuBArI3CwtnQzZ_L07jXqxh-bx5MCXzqu-tOoCtX7Z64uU8LcQNZgn0pXL3FJJ9sKkpT1SsNLI" 
          />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="ml-[240px] p-[48px] relative min-h-[calc(100vh-80px)]">
        {/* Ambient Glow Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] -z-10" style={{ background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0) 70%)', filter: 'blur(60px)' }}></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 -z-10" style={{ background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0) 70%)', filter: 'blur(60px)' }}></div>

        {/* Metric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-[80px]">
          {/* Metric Card 1 */}
          <div className="p-[24px] rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(37,99,235,0.3)]" style={{ background: '#111111', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="flex justify-between items-start mb-[16px]">
              <span className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>Active Jobs</span>
              <span className="text-green-400 flex items-center text-[12px] font-bold">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>trending_up</span>
                +12%
              </span>
            </div>
            <div className="flex items-end gap-[16px]">
              <span className="text-[48px] font-bold text-[#dce3f0] leading-none" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>24</span>
              <span className="text-[#c3c6d7] mb-[8px]">/ 30 slots</span>
            </div>
            <div className="mt-[24px] h-1 bg-[#2e353f] rounded-full overflow-hidden">
              <div className="h-full bg-[#b4c5ff] w-[80%]"></div>
            </div>
          </div>
          
          {/* Metric Card 2 */}
          <div className="p-[24px] rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(37,99,235,0.3)]" style={{ background: '#111111', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="flex justify-between items-start mb-[16px]">
              <span className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>Total Candidates</span>
              <span className="text-green-400 flex items-center text-[12px] font-bold">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>trending_up</span>
                +45
              </span>
            </div>
            <div className="flex items-end gap-[16px]">
              <span className="text-[48px] font-bold text-[#dce3f0] leading-none" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>1,842</span>
            </div>
            <div className="mt-[24px] flex gap-[8px] items-end">
              <div className="h-8 flex-1 bg-[#b4c5ff]/10 rounded-sm"></div>
              <div className="h-10 flex-1 bg-[#b4c5ff]/20 rounded-sm"></div>
              <div className="h-12 flex-1 bg-[#b4c5ff]/40 rounded-sm"></div>
              <div className="h-14 flex-1 bg-[#b4c5ff]/60 rounded-sm"></div>
              <div className="h-16 flex-1 bg-[#b4c5ff] rounded-sm"></div>
            </div>
          </div>
          
          {/* Metric Card 3 */}
          <div className="p-[24px] rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(37,99,235,0.3)]" style={{ background: '#111111', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="flex justify-between items-start mb-[16px]">
              <span className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>Interviews This Week</span>
              <span className="material-symbols-outlined text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_today</span>
            </div>
            <div className="flex items-end gap-[16px]">
              <span className="text-[48px] font-bold text-[#dce3f0] leading-none" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>18</span>
              <span className="text-[#c3c6d7] mb-[8px]">scheduled</span>
            </div>
            <div className="mt-[24px] flex -space-x-2">
              <img alt="Candidate" className="w-8 h-8 rounded-full border-2 border-[#111111]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoDVJnTJojh9RQqJ3SDAf3UROggc8GnMmUYBg7Q06Qd8nQsmqzL1etNVSyqmyEhHxjPAGlBRx4dnqdt5VUnK3HGSofCpGev-QChwGVQtXdR6tAIp5VKaP6lUETklO0a0CamJcRXsth3fNadHpzkauQUid28kZjJqqGJ0AKJjnGEMem72bzBzmrhQQ-FOLB19x-JE-jduN7Z5FVl-hyNwrfBs-_rPW57DMYumFUq_znu9-tJsUupSlhI4WmYuzKEx4Ci2eHp1sklMY" />
              <img alt="Candidate" className="w-8 h-8 rounded-full border-2 border-[#111111]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALiuwZt1rTOakXAq0ao2T1xkA4zOkCTX3Pt6SCnBeRg9LaJGMBB-aMnvEWQxjCQL9TcflVMyNKYwgB5K-4m23fOqHkUxT61h_c_dFc0HAVfB5VbXFJ4qeNCIoJ3bA2m0fzGKSDs4Pr2iyZvjX3dVt5kM6yBexGL2njJLEignbzKqa21HELlM_5F9cFnwQynjqQ4Kyiu3le98c3h3GWmpVcZC84Z6JDKLmqX0i8Wkr5LBF3HVBkkKLOrDKg3lUVk3yq6oBxJyePUqw" />
              <img alt="Candidate" className="w-8 h-8 rounded-full border-2 border-[#111111]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQviNw2jRVk3DwccZB5OTgq4qV9qMzeKazDmP6k_1IpFH46-VMK33nvstklIJ35_rHc3v8FQyKpyCEmOxmwLtwuecwh3vdEdJ6bKrTO15ImjXtvugTw7WypXB5x3LvoajTCDOZYr1IpOF8Y6a7JAMOVMtpfrGb4E_228oK7-i5p1TAtzqhHNCuCARLPPQqKFFpxY-uPU18r8SS63C2VTxvVtqgG2JhwhF-1XtHIqgCNIeO67mrJ77707ZN2QLPtXa869sFI5mHK1o" />
              <div className="w-8 h-8 rounded-full bg-[#2e353f] border-2 border-[#111111] flex items-center justify-center text-[10px] font-bold">+15</div>
            </div>
          </div>
        </div>

        {/* Main Bento Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] items-start">
          {/* Activity Feed */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden transition-all duration-200" style={{ background: '#111111', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="p-[24px] border-b border-[#434655]/10 flex justify-between items-center">
              <h3 className="text-[20px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Recent Activity</h3>
              <button className="text-[#b4c5ff] font-semibold text-[14px] hover:underline" style={{ fontFamily: 'Inter' }}>View All</button>
            </div>
            <div className="divide-y divide-[#434655]/10">
              {/* Activity Item 1 */}
              <div className="p-[24px] flex items-center gap-[24px] hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                </div>
                <div className="flex-1">
                  <p className="text-[16px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}><strong>Alex Rivera</strong> moved to <span className="text-green-400 font-semibold">Offer Sent</span></p>
                  <p className="text-[12px] text-[#c3c6d7]">Senior Frontend Engineer • 2 hours ago</p>
                </div>
                <span className="material-symbols-outlined text-[#c3c6d7]">chevron_right</span>
              </div>
              {/* Activity Item 2 */}
              <div className="p-[24px] flex items-center gap-[24px] hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>video_call</span>
                </div>
                <div className="flex-1">
                  <p className="text-[16px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}><strong>Sarah Chen</strong> scheduled for <span className="text-[#b4c5ff] font-semibold">Technical Interview</span></p>
                  <p className="text-[12px] text-[#c3c6d7]">Product Designer • 5 hours ago</p>
                </div>
                <span className="material-symbols-outlined text-[#c3c6d7]">chevron_right</span>
              </div>
              {/* Activity Item 3 */}
              <div className="p-[24px] flex items-center gap-[24px] hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#d2bbff]/10 flex items-center justify-center text-[#d2bbff]">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>person_add</span>
                </div>
                <div className="flex-1">
                  <p className="text-[16px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}><strong>Marcus Thorne</strong> applied via <span className="text-[#c3c6d7] font-semibold">LinkedIn</span></p>
                  <p className="text-[12px] text-[#c3c6d7]">DevOps Architect • 8 hours ago</p>
                </div>
                <span className="material-symbols-outlined text-[#c3c6d7]">chevron_right</span>
              </div>
              {/* Activity Item 4 */}
              <div className="p-[24px] flex items-center gap-[24px] hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#ffb4ab]/10 flex items-center justify-center text-[#ffb4ab]">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>cancel</span>
                </div>
                <div className="flex-1">
                  <p className="text-[16px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}><strong>Julianna V.</strong> was <span className="text-[#ffb4ab] font-semibold">Withdrawn</span></p>
                  <p className="text-[12px] text-[#c3c6d7]">Marketing Lead • Yesterday</p>
                </div>
                <span className="material-symbols-outlined text-[#c3c6d7]">chevron_right</span>
              </div>
            </div>
          </div>
          
          {/* Sidebar Column */}
          <div className="space-y-[24px]">
            {/* Upcoming Interviews Card */}
            <div className="rounded-xl p-[24px] transition-all duration-200" style={{ background: '#111111', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h3 className="text-[20px] font-bold text-[#dce3f0] mb-[24px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Upcoming Interviews</h3>
              <div className="space-y-[16px]">
                {/* Interview Item */}
                <div className="bg-[#2e353f] p-[16px] rounded-lg border-l-4 border-[#b4c5ff]">
                  <div className="flex justify-between items-start mb-[8px]">
                    <span className="text-[12px] font-bold text-[#b4c5ff]">TODAY, 2:00 PM</span>
                    <span className="material-symbols-outlined text-[14px] text-[#c3c6d7]">more_vert</span>
                  </div>
                  <p className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Liam Watson</p>
                  <p className="text-[12px] text-[#c3c6d7]">Principal Engineer Screening</p>
                </div>
                {/* Interview Item */}
                <div className="bg-[#192029] p-[16px] rounded-lg border-l-4 border-[#434655]/30">
                  <div className="flex justify-between items-start mb-[8px]">
                    <span className="text-[12px] font-bold text-[#c3c6d7]">TOMORROW, 10:30 AM</span>
                    <span className="material-symbols-outlined text-[14px] text-[#c3c6d7]">more_vert</span>
                  </div>
                  <p className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Sophia Zhao</p>
                  <p className="text-[12px] text-[#c3c6d7]">Culture Fit Session</p>
                </div>
              </div>
              <button className="w-full mt-[24px] py-[8px] text-[12px] font-semibold border border-[#434655]/30 rounded hover:bg-white/5 transition-all" style={{ fontFamily: 'Inter' }}>
                View Schedule
              </button>
            </div>
            
            {/* Hiring Health Card */}
            <div className="rounded-xl p-[24px] bg-gradient-to-br from-[#111111] to-[#151c25]" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex items-center gap-[16px] mb-[24px]">
                <div className="w-8 h-8 rounded-lg bg-[#b4c5ff]/20 flex items-center justify-center text-[#b4c5ff]">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>bolt</span>
                </div>
                <h4 className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Hiring Health</h4>
              </div>
              <div className="space-y-[16px]">
                <div className="flex justify-between text-[12px]">
                  <span className="text-[#c3c6d7]">Time to Hire</span>
                  <span className="text-[#dce3f0] font-bold">18 Days</span>
                </div>
                <div className="h-1.5 w-full bg-[#2e353f] rounded-full">
                  <div className="h-full bg-green-500 w-[75%] rounded-full"></div>
                </div>
                <div className="flex justify-between text-[12px] mt-[24px]">
                  <span className="text-[#c3c6d7]">Offer Acceptance Rate</span>
                  <span className="text-[#dce3f0] font-bold">92%</span>
                </div>
                <div className="h-1.5 w-full bg-[#2e353f] rounded-full">
                  <div className="h-full bg-[#b4c5ff] w-[92%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* FAB */}
      <button className="fixed bottom-[48px] right-[48px] w-14 h-14 bg-[#b4c5ff] text-[#002a78] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-[30px]">add</span>
      </button>
    </div>
  );
}
