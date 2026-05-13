import React from 'react';
import { Link } from 'react-router-dom';

export default function BillingSettingsPage() {
  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body-md min-h-screen overflow-x-hidden">
      {/* Ambient Glows */}
      <div className="fixed top-0 -left-64 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,rgba(37,99,235,0)_70%)] blur-[80px] z-[-1]"></div>
      <div className="fixed bottom-0 -right-64 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,rgba(37,99,235,0)_70%)] blur-[80px] z-[-1]"></div>

      {/* SideNavBar */}
      <aside className="flex flex-col h-screen p-[24px] gap-[8px] w-72 fixed left-0 top-0 border-r border-white/10 backdrop-blur-xl bg-[#0d141d] shadow-xl z-50">
        <div className="mb-[48px] px-4">
          <h1 className="text-[32px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>TalentPulse AI</h1>
          <p className="text-[#c3c6d7] text-[12px] uppercase tracking-widest opacity-70 font-semibold mt-1">Enterprise Talent Hub</p>
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] hover:bg-white/5 rounded-xl transition-all duration-200 group">
            <span className="material-symbols-outlined group-hover:text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link to="/jobs" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] hover:bg-white/5 rounded-xl transition-all duration-200 group">
            <span className="material-symbols-outlined group-hover:text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>work</span>
            <span>Jobs</span>
          </Link>
          <Link to="/pipeline" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] hover:bg-white/5 rounded-xl transition-all duration-200 group">
            <span className="material-symbols-outlined group-hover:text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>group</span>
            <span>Candidates</span>
          </Link>
          <Link to="/interviews/builder" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] hover:bg-white/5 rounded-xl transition-all duration-200 group">
            <span className="material-symbols-outlined group-hover:text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>event_available</span>
            <span>Interviews</span>
          </Link>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] hover:bg-white/5 rounded-xl transition-all duration-200 group">
            <span className="material-symbols-outlined group-hover:text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>assignment</span>
            <span>Assessments</span>
          </a>
          <Link to="/analytics" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] hover:bg-white/5 rounded-xl transition-all duration-200 group">
            <span className="material-symbols-outlined group-hover:text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>monitoring</span>
            <span>Analytics</span>
          </Link>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] hover:bg-white/5 rounded-xl transition-all duration-200 group">
            <span className="material-symbols-outlined group-hover:text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>psychology</span>
            <span>Expert IaaS</span>
          </a>
          <Link to="/settings" className="flex items-center gap-3 px-4 py-3 bg-[#0566d9] text-[#e6ecff] rounded-xl transition-all duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
            <span>Settings</span>
          </Link>
        </nav>
        <div className="mt-auto px-4">
          <Link to="/jobs/new" className="w-full bg-[linear-gradient(135deg,#2563eb_0%,#8343f4_100%)] text-white font-semibold py-3 rounded-full hover:brightness-110 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
            Post New Job
          </Link>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="flex items-center justify-between px-[48px] w-[calc(100%-18rem)] ml-72 fixed top-0 right-0 h-20 border-b border-white/10 backdrop-blur-xl bg-[#0d141d]/70 z-40">
        <div className="flex items-center gap-4">
          <h2 className="text-[32px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>Billing</h2>
          <div className="h-6 w-px bg-white/10 mx-2"></div>
          <nav className="flex gap-6 text-[16px]">
            <Link to="/settings" className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors">General</Link>
            <a href="#" className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors">Team</a>
            <Link to="/settings/billing" className="text-[#b4c5ff] font-bold">Billing &amp; Usage</Link>
            <a href="#" className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors">Security</a>
          </nav>
        </div>
        <div className="flex items-center gap-[16px]">
          <button className="p-2 text-[#c3c6d7] hover:text-[#b4c5ff] transition-all">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span>
          </button>
          <button className="p-2 text-[#c3c6d7] hover:text-[#b4c5ff] transition-all">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>help_outline</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-[#2e353f] flex items-center justify-center border border-white/10 overflow-hidden">
            <img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6XlpCM4Lmrteym-Oxr90kt6OjOZHfcVg70G_x-Pa_tgpufLtEHUT8HjJEiYsZejhf6nPV7qM1g1w8WGB-Okvw6cLgxzsWeW2FzY5HOKpvmXIDRhHOb_SEdPhwk1Z0ud3DOVsUNXtPAsl2KNQBiOi_22gZbPF5-q0qeMiUEJasLIfYXIcXDgqNI7mfmVAq8Yi8FJtxsVKvIuhSTwjh5wQnGD5Y9b7QidzYWCDsCMQVBOb-90UAprKQ8ePQ0lRhU8-b7Mj4fFhH4Gk" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-72 pt-20 flex min-h-screen">
        <div className="flex-1 p-[48px] max-w-[1440px] mx-auto grid grid-cols-12 gap-[48px]">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-8 space-y-[48px]">
            {/* Current Plan Card */}
            <section className="rounded-[24px] p-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex justify-between items-start mb-[24px]">
                <div>
                  <span className="px-3 py-1 bg-[#b4c5ff]/10 text-[#b4c5ff] border border-[#b4c5ff]/20 rounded-full text-[12px] font-semibold tracking-widest uppercase">CURRENT PLAN</span>
                  <h3 className="text-[32px] font-bold mt-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>Growth Plan</h3>
                  <p className="text-[#c3c6d7] text-[16px]">$149/month • Billed monthly</p>
                </div>
                <div className="flex gap-[8px]">
                  <button className="px-[24px] py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all font-semibold text-[15px]">Change Plan</button>
                  <button className="px-[24px] py-2 text-[#ffb4ab] hover:bg-[#ffb4ab]/5 rounded-full transition-all font-semibold text-[15px]">Cancel Plan</button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-[24px] border-t border-white/5 pt-[24px]">
                <div className="space-y-2">
                  <div className="flex justify-between text-[#c3c6d7] text-[12px] font-semibold tracking-widest uppercase">
                    <span>AI INTERVIEWS</span>
                    <span>32 / 50</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[linear-gradient(135deg,#2563eb_0%,#8343f4_100%)]" style={{ width: '64%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[#c3c6d7] text-[12px] font-semibold tracking-widest uppercase">
                    <span>TEAM SEATS</span>
                    <span>6 / 10</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#adc6ff]" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[#c3c6d7] text-[12px] font-semibold tracking-widest uppercase">
                    <span>JOBS</span>
                    <span>UNLIMITED</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#d2bbff]" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Add-ons & Payment Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
              {/* Add-ons */}
              <section className="rounded-[24px] p-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <h4 className="text-[12px] font-semibold tracking-widest uppercase text-[#c3c6d7] mb-[24px]">ACTIVE ADD-ONS</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-[16px] bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>verified_user</span>
                      <div>
                        <p className="font-bold">Expert Interviews</p>
                        <p className="text-[#c3c6d7] text-sm">$225 / session</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#c3c6d7] cursor-pointer hover:text-white" style={{ fontVariationSettings: "'FILL' 0" }}>more_vert</span>
                  </div>
                  <div className="flex items-center justify-between p-[16px] bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#d2bbff]" style={{ fontVariationSettings: "'FILL' 0" }}>analytics</span>
                      <div>
                        <p className="font-bold">Premium Reports</p>
                        <p className="text-[#c3c6d7] text-sm">$125 / month</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#c3c6d7] cursor-pointer hover:text-white" style={{ fontVariationSettings: "'FILL' 0" }}>more_vert</span>
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section className="rounded-[24px] p-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="flex justify-between items-center mb-[24px]">
                  <h4 className="text-[12px] font-semibold tracking-widest uppercase text-[#c3c6d7]">PAYMENT METHOD</h4>
                  <button className="text-[#b4c5ff] font-semibold text-[15px] hover:underline">Edit</button>
                </div>
                <div className="bg-gradient-to-br from-[#2e353f] to-[#0d141d] p-[24px] rounded-2xl border border-white/10 flex flex-col justify-between aspect-[1.58/1]">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-8 bg-white/10 rounded-md flex items-center justify-center font-bold italic">VISA</div>
                    <span className="material-symbols-outlined text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>contactless</span>
                  </div>
                  <div>
                    <p className="text-[32px] tracking-[0.2em] mb-1 font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>•••• •••• •••• 4242</p>
                    <div className="flex justify-between text-[#c3c6d7] text-sm">
                      <span>EXPIRES 12/26</span>
                      <span>ALEX JOHNSON</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Billing Address */}
            <section className="rounded-[24px] p-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h4 className="text-[12px] font-semibold tracking-widest uppercase text-[#c3c6d7] mb-[24px]">BILLING ADDRESS</h4>
              <div className="grid grid-cols-2 gap-[24px]">
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold tracking-widest uppercase text-[#c3c6d7]">FULL NAME</label>
                  <input className="bg-[#080f17] border border-white/10 rounded-xl px-4 py-3 focus:border-[#b4c5ff] focus:ring-0 transition-all outline-none" type="text" defaultValue="TalentPulse Tech Inc." />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold tracking-widest uppercase text-[#c3c6d7]">TAX ID (EIN)</label>
                  <input className="bg-[#080f17] border border-white/10 rounded-xl px-4 py-3 focus:border-[#b4c5ff] focus:ring-0 transition-all outline-none" type="text" defaultValue="XX-XXXX420" />
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <label className="text-[12px] font-semibold tracking-widest uppercase text-[#c3c6d7]">STREET ADDRESS</label>
                  <input className="bg-[#080f17] border border-white/10 rounded-xl px-4 py-3 focus:border-[#b4c5ff] focus:ring-0 transition-all outline-none" type="text" defaultValue="1200 Innovation Way, Suite 400" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold tracking-widest uppercase text-[#c3c6d7]">CITY / STATE</label>
                  <input className="bg-[#080f17] border border-white/10 rounded-xl px-4 py-3 focus:border-[#b4c5ff] focus:ring-0 transition-all outline-none" type="text" defaultValue="San Francisco, CA" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold tracking-widest uppercase text-[#c3c6d7]">ZIP CODE</label>
                  <input className="bg-[#080f17] border border-white/10 rounded-xl px-4 py-3 focus:border-[#b4c5ff] focus:ring-0 transition-all outline-none" type="text" defaultValue="94103" />
                </div>
              </div>
            </section>

            {/* Invoice History */}
            <section className="rounded-[24px] overflow-hidden" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="p-[24px] border-b border-white/10 flex justify-between items-center">
                <h4 className="text-[12px] font-semibold tracking-widest uppercase text-[#c3c6d7]">INVOICE HISTORY</h4>
                <button className="text-[#c3c6d7] hover:text-white flex items-center gap-1 text-sm">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>filter_list</span>
                  Filter
                </button>
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[#c3c6d7] text-[12px] font-semibold tracking-widest uppercase border-b border-white/5">
                    <th className="px-[24px] py-4">INVOICE</th>
                    <th className="px-[24px] py-4">DATE</th>
                    <th className="px-[24px] py-4">STATUS</th>
                    <th className="px-[24px] py-4">AMOUNT</th>
                    <th className="px-[24px] py-4 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  <tr className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-[24px] py-4 font-bold">INV-2023-012</td>
                    <td className="px-[24px] py-4 text-[#c3c6d7]">Oct 01, 2023</td>
                    <td className="px-[24px] py-4">
                      <span className="px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs font-bold">PAID</span>
                    </td>
                    <td className="px-[24px] py-4">$499.00</td>
                    <td className="px-[24px] py-4 text-right">
                      <button className="material-symbols-outlined text-[#c3c6d7] hover:text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>download</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-[24px] py-4 font-bold">INV-2023-011</td>
                    <td className="px-[24px] py-4 text-[#c3c6d7]">Sep 15, 2023</td>
                    <td className="px-[24px] py-4">
                      <span className="px-2 py-0.5 bg-[#ffb4ab]/10 text-[#ffb4ab] border border-[#ffb4ab]/20 rounded-full text-xs font-bold">FAILED</span>
                    </td>
                    <td className="px-[24px] py-4">$225.00</td>
                    <td className="px-[24px] py-4 text-right">
                      <button className="material-symbols-outlined text-[#c3c6d7] hover:text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>refresh</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-[24px] py-4 font-bold">INV-2023-010</td>
                    <td className="px-[24px] py-4 text-[#c3c6d7]">Sep 01, 2023</td>
                    <td className="px-[24px] py-4">
                      <span className="px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs font-bold">PAID</span>
                    </td>
                    <td className="px-[24px] py-4">$499.00</td>
                    <td className="px-[24px] py-4 text-right">
                      <button className="material-symbols-outlined text-[#c3c6d7] hover:text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>download</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="p-[24px] text-center">
                <button className="text-[#b4c5ff] font-semibold text-[15px] hover:underline">View All Invoices</button>
              </div>
            </section>
          </div>

          {/* Right Column (Sticky Summary) */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-24 space-y-[24px]">
              <div className="rounded-[24px] p-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <h4 className="text-[12px] font-semibold tracking-widest uppercase text-[#c3c6d7] mb-[24px]">BILLING SUMMARY</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#c3c6d7]">Growth Plan</span>
                    <span className="font-bold">$149.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#c3c6d7]">Expert Interviews (1x)</span>
                    <span className="font-bold">$225.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#c3c6d7]">Premium Reports</span>
                    <span className="font-bold">$125.00</span>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div className="flex justify-between items-end pt-2">
                    <div>
                      <p className="text-[#c3c6d7] text-[12px] font-semibold tracking-widest uppercase">CURRENT SPEND</p>
                      <p className="text-[32px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>$499.00</p>
                    </div>
                    <p className="text-[#c3c6d7] text-sm mb-1">Next bill: Nov 01</p>
                  </div>
                </div>
                <button className="w-full mt-[24px] bg-[linear-gradient(135deg,#2563eb_0%,#8343f4_100%)] text-white font-semibold text-[15px] py-4 rounded-xl hover:brightness-110 shadow-lg flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>picture_as_pdf</span>
                  Download Billing Report
                </button>
              </div>

              <div className="rounded-[24px] p-[24px] bg-gradient-to-br from-[#8343f4]/10 to-transparent" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <h4 className="text-[12px] font-semibold tracking-widest uppercase text-[#d2bbff] mb-2">UPGRADE TIP</h4>
                <p className="text-sm text-[#c3c6d7] leading-relaxed">Switch to annual billing and save <span className="text-[#d2bbff] font-bold">$360/year</span> on your current configuration.</p>
                <button className="mt-4 text-sm font-bold text-white flex items-center gap-1 group">
                  Explore Annual Plans
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
