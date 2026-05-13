import React from 'react';
import { Link } from 'react-router-dom';

const sidebarLinks = [
  { icon: 'dashboard', label: 'Dashboard', path: '/admin/dashboard', active: true },
  { icon: 'apartment', label: 'Companies', path: '/admin/companies' },
  { icon: 'group', label: 'Users', path: '/admin/users' },
  { icon: 'badge', label: 'Expert Apps', path: '/admin/experts/applications' },
  { icon: 'video_chat', label: 'Interviews', path: '/admin/interviews' },
  { icon: 'flag', label: 'Flagged Queue', path: '/admin/interviews/flagged' },
  { icon: 'payments', label: 'Revenue', path: '/admin/billing' },
  { icon: 'quiz', label: 'Question Bank', path: '/admin/content/questions' },
  { icon: 'edit_note', label: 'Blog CMS', path: '/admin/content/blog' },
  { icon: 'analytics', label: 'Analytics', path: '/admin/analytics' },
  { icon: 'monitor_heart', label: 'System Health', path: '/admin/system' },
];

export default function AdminDashboardPage() {
  return (
    <div className="bg-[#080f17] text-[#dce3f0] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; vertical-align: middle; }
        .glass-card { background: rgba(19, 27, 46, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.06); }
      `}</style>

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-60 bg-[#0b101e] border-r border-white/5 flex flex-col py-6 z-50">
        <div className="px-5 mb-8">
          <h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Comfortaa', cursive" }}>
            hire<span className="text-[#ffb4ab]">iq</span>
          </h1>
          <p className="text-[10px] font-bold text-[#ffb4ab] uppercase tracking-widest mt-1">Admin Console</p>
        </div>

        <nav className="flex-1 space-y-0.5 px-2 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] transition-colors ${
                link.active
                  ? 'text-[#ffb4ab] bg-[#ffb4ab]/8 font-bold'
                  : 'text-[#8d90a0] hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]" style={link.active ? { fontVariationSettings: "'FILL' 1, 'wght' 400" } : {}}>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-4 pt-4 border-t border-white/5 mt-auto">
          <Link to="/admin/login" className="flex items-center gap-2 text-[#8d90a0] hover:text-white text-[13px] transition-colors">
            <span className="material-symbols-outlined text-[18px]">logout</span> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-60 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-[#080f17]/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6">
          <div>
            <h2 className="text-lg font-bold text-white">Admin Dashboard</h2>
            <p className="text-[12px] text-[#8d90a0]">Platform overview &amp; operations</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-[#8d90a0] hover:text-white transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#ffb4ab] rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-[#ba1a1a] flex items-center justify-center text-white text-[12px] font-bold">A</div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6 max-w-[1400px]">
          {/* Alert Banner */}
          <div className="bg-[#ffb4ab]/8 border border-[#ffb4ab]/20 rounded-xl p-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-[#ffb4ab]">warning</span>
            <div className="flex-1">
              <p className="text-sm font-bold text-white">3 flagged interviews require review</p>
              <p className="text-[12px] text-[#8d90a0]">Potential policy violations detected by AI monitoring</p>
            </div>
            <Link to="/admin/interviews/flagged" className="text-[#ffb4ab] text-[13px] font-bold hover:underline">Review Now →</Link>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Companies', value: '847', trend: '+12%', icon: 'apartment', color: '#b4c5ff' },
              { label: 'Active Users', value: '12,483', trend: '+8%', icon: 'group', color: '#10b981' },
              { label: 'Interviews Today', value: '234', trend: '+23%', icon: 'video_chat', color: '#d2bbff' },
              { label: 'Monthly Revenue', value: '$284K', trend: '+15%', icon: 'trending_up', color: '#fbbf24' },
            ].map((m) => (
              <div key={m.label} className="glass-card rounded-xl p-5">
                <div className="flex justify-between items-start mb-3">
                  <span className="material-symbols-outlined text-[20px]" style={{ color: m.color }}>{m.icon}</span>
                  <span className="text-[11px] font-bold text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded">{m.trend}</span>
                </div>
                <p className="text-2xl font-bold text-white mb-0.5">{m.value}</p>
                <p className="text-[12px] text-[#8d90a0]">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity Feed */}
            <div className="lg:col-span-2 glass-card rounded-xl p-6">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-white">Real-Time Activity Feed</h3>
                <span className="flex items-center gap-1 text-[11px] text-[#10b981]">
                  <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse"></span> Live
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { time: '2m ago', event: 'New company registered', detail: 'Acme Corp (Enterprise Plan)', icon: 'apartment', color: '#b4c5ff' },
                  { time: '5m ago', event: 'Interview flagged', detail: 'Candidate #4821 — Potential code injection attempt', icon: 'flag', color: '#ffb4ab' },
                  { time: '12m ago', event: 'Expert application approved', detail: 'Dr. Sarah Chen — ML/AI Specialist', icon: 'verified', color: '#10b981' },
                  { time: '18m ago', event: 'Payment processed', detail: '$12,500 — TechStart Inc. (Growth Plan)', icon: 'payments', color: '#fbbf24' },
                  { time: '25m ago', event: 'New blog post published', detail: '"AI Interview Best Practices" by Marketing', icon: 'article', color: '#d2bbff' },
                  { time: '31m ago', event: 'System alert resolved', detail: 'API latency spike — auto-scaled to 4 instances', icon: 'check_circle', color: '#10b981' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/3 transition-colors">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${item.color}10` }}>
                      <span className="material-symbols-outlined text-[16px]" style={{ color: item.color }}>{item.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-white">{item.event}</p>
                      <p className="text-[12px] text-[#8d90a0] truncate">{item.detail}</p>
                    </div>
                    <span className="text-[11px] text-[#434655] whitespace-nowrap">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions & Platform Health */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Review Expert Apps', count: '7', path: '/admin/experts/applications', color: '#b4c5ff' },
                    { label: 'Flagged Interviews', count: '3', path: '/admin/interviews/flagged', color: '#ffb4ab' },
                    { label: 'Pending Payouts', count: '12', path: '/admin/billing', color: '#fbbf24' },
                    { label: 'System Alerts', count: '1', path: '/admin/system', color: '#10b981' },
                  ].map((action) => (
                    <Link
                      key={action.label}
                      to={action.path}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/3 hover:bg-white/6 transition-colors group"
                    >
                      <span className="text-[13px] text-[#c3c6d7] group-hover:text-white transition-colors">{action.label}</span>
                      <span className="text-[12px] font-bold px-2 py-0.5 rounded" style={{ color: action.color, background: `${action.color}15` }}>
                        {action.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Platform Health */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-white">Platform Health</h3>
                  <Link to="/admin/system" className="text-[12px] text-[#b4c5ff] hover:underline">Details</Link>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'API Uptime', value: '99.97%', bar: 99.97, color: '#10b981' },
                    { label: 'Avg Response', value: '142ms', bar: 85, color: '#10b981' },
                    { label: 'AI Engine Load', value: '67%', bar: 67, color: '#fbbf24' },
                    { label: 'DB Connections', value: '234/500', bar: 47, color: '#b4c5ff' },
                  ].map((h) => (
                    <div key={h.label}>
                      <div className="flex justify-between text-[12px] mb-1">
                        <span className="text-[#8d90a0]">{h.label}</span>
                        <span className="text-white font-medium">{h.value}</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1.5">
                        <div className="h-1.5 rounded-full" style={{ width: `${h.bar}%`, background: h.color }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Companies Table */}
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="p-5 border-b border-white/5 flex justify-between items-center">
              <h3 className="font-bold text-white">Recent Companies</h3>
              <Link to="/admin/companies" className="text-[13px] text-[#b4c5ff] hover:underline">View All →</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/3">
                  <tr>
                    <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Company</th>
                    <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Plan</th>
                    <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Interviews</th>
                    <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">MRR</th>
                    <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { name: 'Acme Corp', plan: 'Enterprise', interviews: 142, mrr: '$4,999', status: 'Active', color: '#10b981' },
                    { name: 'TechStart Inc.', plan: 'Growth', interviews: 87, mrr: '$1,299', status: 'Active', color: '#10b981' },
                    { name: 'DevHouse Ltd', plan: 'Starter', interviews: 23, mrr: '$499', status: 'Trial', color: '#fbbf24' },
                    { name: 'CloudNine AI', plan: 'Growth', interviews: 56, mrr: '$1,299', status: 'Active', color: '#10b981' },
                    { name: 'BetaStack', plan: 'Starter', interviews: 8, mrr: '$499', status: 'Churned', color: '#ffb4ab' },
                  ].map((c, i) => (
                    <tr key={i} className="hover:bg-white/3 transition-colors">
                      <td className="px-5 py-3 text-[13px] font-medium text-white">{c.name}</td>
                      <td className="px-5 py-3 text-[13px] text-[#c3c6d7]">{c.plan}</td>
                      <td className="px-5 py-3 text-[13px] text-[#c3c6d7]">{c.interviews}</td>
                      <td className="px-5 py-3 text-[13px] text-white font-medium">{c.mrr}</td>
                      <td className="px-5 py-3">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ color: c.color, background: `${c.color}15` }}>
                          {c.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
