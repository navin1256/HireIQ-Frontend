import React from 'react';
import { Link } from 'react-router-dom';

export default function ExpertEarningsPage() {
  return (
    <div className="bg-[#faf8ff] text-[#191b23] min-h-screen font-body-md">
      <style>
        {`
          .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
              vertical-align: middle;
          }
          .chart-bar { transition: height 0.3s ease; }
        `}
      </style>

      {/* Side Navigation Shell */}
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-[#c3c6d7] bg-white flex flex-col py-8 z-50">
        <div className="px-6 mb-10">
          <h1 className="font-headline-sm text-[18px] font-bold text-[#191b23]">Expert Portal</h1>
          <p className="font-label-sm text-[12px] font-semibold tracking-wider text-[#434655]">Technical Hiring</p>
        </div>
        
        <nav className="flex-1 space-y-1">
          <Link to="/expert/dashboard" className="flex items-center gap-3 px-6 py-3 text-[#434655] hover:bg-[#f3f3fe] transition-colors active:scale-95">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-body-md text-[14px]">Dashboard</span>
          </Link>
          <a className="flex items-center gap-3 px-6 py-3 text-[#434655] hover:bg-[#f3f3fe] transition-colors active:scale-95" href="#">
            <span className="material-symbols-outlined">video_chat</span>
            <span className="font-body-md text-[14px]">Interviews</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-[#434655] hover:bg-[#f3f3fe] transition-colors active:scale-95" href="#">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="font-body-md text-[14px]">Calendar</span>
          </a>
          <div className="flex items-center gap-3 px-6 py-3 text-[#004ac6] font-bold border-r-2 border-[#004ac6] bg-[#f3f3fe] transition-colors active:scale-95">
            <span className="material-symbols-outlined">payments</span>
            <span className="font-body-md text-[14px]">Earnings</span>
          </div>
          <a className="flex items-center gap-3 px-6 py-3 text-[#434655] hover:bg-[#f3f3fe] transition-colors active:scale-95" href="#">
            <span className="material-symbols-outlined">reviews</span>
            <span className="font-body-md text-[14px]">Feedback</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-[#434655] hover:bg-[#f3f3fe] transition-colors active:scale-95" href="#">
            <span className="material-symbols-outlined">verified</span>
            <span className="font-body-md text-[14px]">Certifications</span>
          </a>
        </nav>
        
        <div className="mt-auto border-t border-[#c3c6d7] pt-6">
          <a className="flex items-center gap-3 px-6 py-3 text-[#434655] hover:bg-[#f3f3fe] transition-colors active:scale-95" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body-md text-[14px]">Settings</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 w-full z-40 bg-[#faf8ff] border-b border-[#c3c6d7] flex justify-between items-center px-8 py-4 h-20">
          <div>
            <h2 className="font-headline-sm text-[18px] font-semibold text-[#191b23]">Earnings</h2>
            <p className="font-body-md text-[14px] text-[#434655]">Track payouts, earnings, and interview income.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="bg-[#004ac6] text-white px-4 py-2 rounded-lg font-label-md text-[14px] font-medium flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[20px]">download</span>
              Download Report
            </button>
            <div className="flex items-center gap-4 border-l border-[#c3c6d7] pl-6">
              <button className="p-2 text-[#434655] hover:text-[#004ac6] transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div className="w-10 h-10 rounded-full bg-[#e1e2ed] overflow-hidden border border-[#c3c6d7]">
                <img alt="Expert Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmfttdHOqsdR2BRQ-P6RC777vAKO1wcNu8t7EZFYaRIN5rfNjzSvMAAo7pRUmEveQb68AmZx7sSG4_2mGn5APpClkBP0xD94IfLNGAYOYNSpMPXfOjrPldtpPH2pyeIzcyT_2vhvny_fkQ5R7tV1YZSC_yXyz3L4OIJ4eboD4yF2MjNphjlAIE3MRZuDSXng1BqrGROEF3-OMLnxQ3QLhB2MHWycJWVSIZML7jtcWHRtc4kNh9SbH-ix38scG_CvIDisdiNAn0LdY" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="max-w-[1440px] mx-auto p-8 space-y-6">
          
          {/* Bento Grid - Metrics & Payout Settings */}
          <div className="grid grid-cols-12 gap-6">
            {/* Metric 1: Lifetime */}
            <div className="col-span-12 md:col-span-3 bg-white p-6 rounded-[20px] border border-[#c3c6d7] shadow-sm flex flex-col justify-between h-[180px]">
              <div>
                <p className="font-label-sm text-[12px] font-semibold text-[#434655] mb-1 uppercase tracking-wider">Lifetime Earnings</p>
                <h3 className="font-headline-xl text-[30px] font-semibold text-[#191b23]">$4,250</h3>
              </div>
              <div className="flex items-center gap-1 text-[#006e2f] font-label-md text-[14px]">
                <span className="material-symbols-outlined text-[18px]">trending_up</span>
                <span>+18% trend</span>
              </div>
            </div>
            
            {/* Metric 2: This Month */}
            <div className="col-span-12 md:col-span-3 bg-white p-6 rounded-[20px] border border-[#c3c6d7] shadow-sm flex flex-col justify-between h-[180px]">
              <div>
                <p className="font-label-sm text-[12px] font-semibold text-[#434655] mb-1 uppercase tracking-wider">This Month</p>
                <h3 className="font-headline-xl text-[30px] font-semibold text-[#191b23]">$750</h3>
              </div>
              <div className="text-[#434655] font-label-md text-[14px]">
                32 interviews completed
              </div>
            </div>
            
            {/* Metric 3: Pending */}
            <div className="col-span-12 md:col-span-3 bg-white p-6 rounded-[20px] border border-[#c3c6d7] shadow-sm flex flex-col justify-between h-[180px]">
              <div>
                <p className="font-label-sm text-[12px] font-semibold text-[#434655] mb-1 uppercase tracking-wider">Pending Payouts</p>
                <h3 className="font-headline-xl text-[30px] font-semibold text-[#004ac6]">$225</h3>
              </div>
              <div className="flex items-center gap-1 text-[#434655] font-label-md text-[14px]">
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Scheduled May 15</span>
              </div>
            </div>
            
            {/* Payout Settings Card */}
            <div className="col-span-12 md:col-span-3 bg-white p-6 rounded-[20px] border border-[#c3c6d7] shadow-sm flex flex-col justify-between h-[180px]">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-label-sm text-[12px] font-semibold text-[#434655] mb-1 uppercase tracking-wider">Payout Settings</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-8 h-5 bg-[#2563eb] rounded flex items-center justify-center">
                      <span className="text-[8px] text-[#eeefff] font-bold">CHASE</span>
                    </div>
                    <span className="font-label-md text-[14px] text-[#191b23]">•••• 4242</span>
                  </div>
                </div>
                <button className="text-[#004ac6] hover:underline font-label-md text-[14px]">Edit</button>
              </div>
              <div className="bg-[#ededf9] p-2 rounded-lg text-[12px] text-[#434655]">
                Next: <span className="font-bold">15th of each month</span>
              </div>
            </div>
            
            {/* Earnings Trend Section */}
            <div className="col-span-12 md:col-span-8 bg-white p-8 rounded-[20px] border border-[#c3c6d7] shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h4 className="font-headline-sm text-[18px] font-semibold text-[#191b23]">Earnings Trend</h4>
                  <p className="font-body-md text-[14px] text-[#434655]">Last 6 months performance</p>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1 text-label-sm text-[12px] font-semibold tracking-wider text-[#434655]">
                    <span className="w-2 h-2 rounded-full bg-[#004ac6]"></span> Income
                  </span>
                </div>
              </div>
              
              <div className="h-[240px] flex items-end justify-between gap-4 px-2">
                {/* Chart Bars */}
                {[
                  { month: 'Dec', value: '$420', height: '40%' },
                  { month: 'Jan', value: '$580', height: '55%' },
                  { month: 'Feb', value: '$490', height: '45%' },
                  { month: 'Mar', value: '$820', height: '75%' },
                  { month: 'Apr', value: '$640', height: '60%' }
                ].map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-3 group">
                    <div className="w-full bg-[#004ac6]/10 rounded-t-lg relative group-hover:bg-[#004ac6]/20 transition-all chart-bar" style={{ height: data.height }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#2e3039] text-[#f0f0fb] text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">{data.value}</div>
                    </div>
                    <span className="text-label-sm text-[12px] font-semibold text-[#434655]">{data.month}</span>
                  </div>
                ))}
                
                {/* Active Month */}
                <div className="flex-1 flex flex-col items-center gap-3 group">
                  <div className="w-full bg-[#004ac6] rounded-t-lg relative chart-bar h-[85%]">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#2e3039] text-[#f0f0fb] text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$910</div>
                  </div>
                  <span className="text-label-sm text-[12px] font-semibold text-[#191b23] font-bold">May</span>
                </div>
              </div>
            </div>
            
            {/* Secondary Visual Card (Illustration Placeholder) */}
            <div className="col-span-12 md:col-span-4 bg-[#004ac6] text-white p-8 rounded-[20px] shadow-sm relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h4 className="font-headline-sm text-[18px] font-semibold mb-2">Power Expert Status</h4>
                  <p className="font-body-md text-[14px] opacity-90">You're in the top 5% of interviewers this month. Keep it up to unlock bonus multipliers.</p>
                </div>
                <button className="bg-white text-[#004ac6] px-4 py-2 rounded-lg font-label-md text-[14px] font-medium w-fit hover:bg-opacity-90 active:scale-95 transition-all">
                  View Perks
                </button>
              </div>
              {/* Abstract Background Graphic */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:rotate-12 transition-transform duration-700">
                <span className="material-symbols-outlined text-[120px]">stars</span>
              </div>
            </div>
          </div>
          
          {/* Payment History Table */}
          <div className="bg-white rounded-[20px] border border-[#c3c6d7] shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#c3c6d7] flex justify-between items-center">
              <h4 className="font-headline-sm text-[18px] font-semibold text-[#191b23]">Payment History</h4>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg border border-[#c3c6d7] text-[#434655] hover:bg-[#f3f3fe] transition-colors">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#f3f3fe]">
                  <tr>
                    <th className="px-6 py-4 font-label-sm text-[12px] font-semibold text-[#434655] uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4 font-label-sm text-[12px] font-semibold text-[#434655] uppercase tracking-widest">Interviews</th>
                    <th className="px-6 py-4 font-label-sm text-[12px] font-semibold text-[#434655] uppercase tracking-widest">Amount</th>
                    <th className="px-6 py-4 font-label-sm text-[12px] font-semibold text-[#434655] uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 font-label-sm text-[12px] font-semibold text-[#434655] uppercase tracking-widest">Bank</th>
                    <th className="px-6 py-4 font-label-sm text-[12px] font-semibold text-[#434655] uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c3c6d7]">
                  <tr className="hover:bg-white transition-colors group">
                    <td className="px-6 py-4 font-body-md text-[14px] text-[#191b23]">May 1, 2024</td>
                    <td className="px-6 py-4 font-body-md text-[14px] text-[#191b23]">24 sessions</td>
                    <td className="px-6 py-4 font-body-md text-[14px] text-[#191b23] font-bold">$562.50</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#006e2f]/10 text-[#006e2f] font-label-sm text-[12px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006e2f]"></span>
                        Paid
                      </span>
                    </td>
                    <td className="px-6 py-4 font-body-md text-[14px] text-[#434655]">Chase (•••• 4242)</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-[#004ac6] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">receipt_long</span>
                      </button>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-white transition-colors group">
                    <td className="px-6 py-4 font-body-md text-[14px] text-[#191b23]">Apr 1, 2024</td>
                    <td className="px-6 py-4 font-body-md text-[14px] text-[#191b23]">15 sessions</td>
                    <td className="px-6 py-4 font-body-md text-[14px] text-[#191b23] font-bold">$337.50</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#784b00]/10 text-[#996100] font-label-sm text-[12px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#996100]"></span>
                        Processing
                      </span>
                    </td>
                    <td className="px-6 py-4 font-body-md text-[14px] text-[#434655]">Chase (•••• 4242)</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-[#004ac6] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">receipt_long</span>
                      </button>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-white transition-colors group">
                    <td className="px-6 py-4 font-body-md text-[14px] text-[#191b23]">Mar 1, 2024</td>
                    <td className="px-6 py-4 font-body-md text-[14px] text-[#191b23]">18 sessions</td>
                    <td className="px-6 py-4 font-body-md text-[14px] text-[#191b23] font-bold">$405.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#006e2f]/10 text-[#006e2f] font-label-sm text-[12px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006e2f]"></span>
                        Paid
                      </span>
                    </td>
                    <td className="px-6 py-4 font-body-md text-[14px] text-[#434655]">Chase (•••• 4242)</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-[#004ac6] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">receipt_long</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="p-4 bg-[#f3f3fe] border-t border-[#c3c6d7] flex justify-center">
              <button className="text-[#004ac6] font-label-md text-[14px] font-medium hover:underline">View All Payouts</button>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
