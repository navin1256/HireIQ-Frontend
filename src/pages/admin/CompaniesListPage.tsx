import React from 'react';
import { Link } from 'react-router-dom';

const companies = [
  { id: 'acme', name: 'Acme Corp', plan: 'Enterprise', mrr: '$4,999', users: 45, interviews: 1284, status: 'Active', joined: 'Jan 2024' },
  { id: 'techstart', name: 'TechStart Inc.', plan: 'Growth', mrr: '$1,299', users: 12, interviews: 543, status: 'Active', joined: 'Mar 2024' },
  { id: 'devhouse', name: 'DevHouse Ltd', plan: 'Starter', mrr: '$499', users: 4, interviews: 87, status: 'Trial', joined: 'Oct 2024' },
  { id: 'cloudnine', name: 'CloudNine AI', plan: 'Growth', mrr: '$1,299', users: 18, interviews: 762, status: 'Active', joined: 'Feb 2024' },
  { id: 'betastack', name: 'BetaStack', plan: 'Starter', mrr: '$0', users: 3, interviews: 34, status: 'Churned', joined: 'Jun 2024' },
  { id: 'quantum', name: 'Quantum Labs', plan: 'Enterprise', mrr: '$4,999', users: 67, interviews: 2103, status: 'Active', joined: 'Nov 2023' },
  { id: 'nexus', name: 'Nexus Digital', plan: 'Growth', mrr: '$1,299', users: 9, interviews: 321, status: 'Active', joined: 'May 2024' },
  { id: 'horizon', name: 'Horizon Tech', plan: 'Starter', mrr: '$499', users: 5, interviews: 112, status: 'Active', joined: 'Aug 2024' },
];

export default function CompaniesListPage() {
  return (
    <div className="bg-[#080f17] text-[#dce3f0] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; vertical-align: middle; }
        .glass-card { background: rgba(19, 27, 46, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.06); }
      `}</style>

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-60 bg-[#0b101e] border-r border-white/5 flex flex-col py-6 z-50">
        <div className="px-5 mb-8">
          <h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Comfortaa', cursive" }}>hire<span className="text-[#ffb4ab]">iq</span></h1>
          <p className="text-[10px] font-bold text-[#ffb4ab] uppercase tracking-widest mt-1">Admin Console</p>
        </div>
        <nav className="flex-1 space-y-0.5 px-2 overflow-y-auto">
          <Link to="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">dashboard</span>Dashboard</Link>
          <Link to="/admin/companies" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#ffb4ab] bg-[#ffb4ab]/8 font-bold"><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>apartment</span>Companies</Link>
          <Link to="/admin/users" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">group</span>Users</Link>
          <Link to="/admin/experts/applications" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">badge</span>Expert Apps</Link>
          <Link to="/admin/interviews" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">video_chat</span>Interviews</Link>
          <Link to="/admin/interviews/flagged" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">flag</span>Flagged Queue</Link>
          <Link to="/admin/billing" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">payments</span>Revenue</Link>
          <Link to="/admin/content/questions" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">quiz</span>Question Bank</Link>
          <Link to="/admin/content/blog" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">edit_note</span>Blog CMS</Link>
          <Link to="/admin/analytics" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">analytics</span>Analytics</Link>
          <Link to="/admin/system" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">monitor_heart</span>System Health</Link>
        </nav>
      </aside>

      <main className="ml-60 min-h-screen">
        <header className="sticky top-0 z-40 bg-[#080f17]/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6">
          <h2 className="text-lg font-bold text-white">Companies</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#434655] text-[18px]">search</span>
              <input type="text" placeholder="Search companies..." className="bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-[13px] text-white placeholder-[#434655] focus:outline-none focus:border-[#b4c5ff]/50 w-64" />
            </div>
            <button className="p-2 text-[#8d90a0] hover:text-white"><span className="material-symbols-outlined">filter_list</span></button>
          </div>
        </header>

        <div className="p-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total Companies', value: '847', color: '#b4c5ff' },
              { label: 'Active Plans', value: '723', color: '#10b981' },
              { label: 'Trials', value: '84', color: '#fbbf24' },
              { label: 'Churned', value: '40', color: '#ffb4ab' },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-xl p-4">
                <p className="text-[11px] text-[#8d90a0] uppercase tracking-wider mb-1">{s.label}</p>
                <p className="text-xl font-bold" style={{ color: s.color }}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Companies Table */}
          <div className="glass-card rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-white/3">
                <tr>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Company</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Plan</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Users</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Interviews</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">MRR</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Joined</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {companies.map((c) => (
                  <tr key={c.id} className="hover:bg-white/3 transition-colors">
                    <td className="px-5 py-3.5 text-[13px] font-medium text-white">{c.name}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#c3c6d7]">{c.plan}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#c3c6d7]">{c.users}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#c3c6d7]">{c.interviews.toLocaleString()}</td>
                    <td className="px-5 py-3.5 text-[13px] text-white font-medium">{c.mrr}</td>
                    <td className="px-5 py-3.5">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${c.status === 'Active' ? 'text-[#10b981] bg-[#10b981]/10' : c.status === 'Trial' ? 'text-[#fbbf24] bg-[#fbbf24]/10' : 'text-[#ffb4ab] bg-[#ffb4ab]/10'}`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-[#8d90a0]">{c.joined}</td>
                    <td className="px-5 py-3.5 text-right">
                      <Link to={`/admin/companies/${c.id}`} className="text-[#b4c5ff] text-[13px] font-medium hover:underline">View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
