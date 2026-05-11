import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CompanyDetailPage() {
  const { id } = useParams();

  return (
    <div className="bg-[#080f17] text-[#dce3f0] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; vertical-align: middle; }
        .glass-card { background: rgba(19, 27, 46, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.06); }
      `}</style>

      <aside className="fixed left-0 top-0 h-full w-60 bg-[#0b101e] border-r border-white/5 flex flex-col py-6 z-50">
        <div className="px-5 mb-8">
          <h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Comfortaa', cursive" }}>hire<span className="text-[#ffb4ab]">iq</span></h1>
          <p className="text-[10px] font-bold text-[#ffb4ab] uppercase tracking-widest mt-1">Admin Console</p>
        </div>
        <nav className="flex-1 space-y-0.5 px-2 overflow-y-auto">
          <Link to="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">dashboard</span>Dashboard</Link>
          <Link to="/admin/companies" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#ffb4ab] bg-[#ffb4ab]/8 font-bold"><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>apartment</span>Companies</Link>
          <Link to="/admin/users" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">group</span>Users</Link>
        </nav>
      </aside>

      <main className="ml-60 min-h-screen">
        <header className="sticky top-0 z-40 bg-[#080f17]/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center px-6 gap-4">
          <Link to="/admin/companies" className="text-[#8d90a0] hover:text-white transition-colors"><span className="material-symbols-outlined">arrow_back</span></Link>
          <div>
            <h2 className="text-lg font-bold text-white">Company Detail</h2>
            <p className="text-[12px] text-[#8d90a0]">ID: {id}</p>
          </div>
        </header>

        <div className="p-6 max-w-[1200px] space-y-6">
          {/* Company Header */}
          <div className="glass-card rounded-xl p-6 flex items-start justify-between">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-xl bg-[#b4c5ff]/10 border border-[#b4c5ff]/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#b4c5ff] text-[32px]">apartment</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Acme Corp</h3>
                <p className="text-[13px] text-[#8d90a0]">acme-corp.com • San Francisco, CA • Joined Jan 2024</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#b4c5ff]/10 text-[#b4c5ff]">Enterprise</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#10b981]/10 text-[#10b981]">Active</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[13px] text-[#c3c6d7] hover:bg-white/10 transition-colors">Impersonate</button>
              <button className="px-4 py-2 rounded-lg bg-[#ffb4ab]/10 border border-[#ffb4ab]/20 text-[13px] text-[#ffb4ab] hover:bg-[#ffb4ab]/20 transition-colors">Suspend</button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Monthly Revenue', value: '$4,999', icon: 'payments', color: '#fbbf24' },
              { label: 'Total Users', value: '45', icon: 'group', color: '#b4c5ff' },
              { label: 'Total Interviews', value: '1,284', icon: 'video_chat', color: '#d2bbff' },
              { label: 'Active Jobs', value: '12', icon: 'work', color: '#10b981' },
            ].map((m) => (
              <div key={m.label} className="glass-card rounded-xl p-4">
                <span className="material-symbols-outlined text-[18px] mb-2 block" style={{ color: m.color }}>{m.icon}</span>
                <p className="text-lg font-bold text-white">{m.value}</p>
                <p className="text-[11px] text-[#8d90a0]">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Account Info */}
            <div className="glass-card rounded-xl p-6">
              <h4 className="font-bold text-white mb-4">Account Information</h4>
              <div className="space-y-3">
                {[
                  { label: 'Primary Contact', value: 'john.doe@acme-corp.com' },
                  { label: 'Billing Email', value: 'billing@acme-corp.com' },
                  { label: 'Plan', value: 'Enterprise ($4,999/mo)' },
                  { label: 'Billing Cycle', value: 'Annual (Next: Jan 15, 2025)' },
                  { label: 'ATS Integration', value: 'Greenhouse (Connected)' },
                  { label: 'SSO', value: 'Okta (Enabled)' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-[13px] text-[#8d90a0]">{item.label}</span>
                    <span className="text-[13px] text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="glass-card rounded-xl p-6">
              <h4 className="font-bold text-white mb-4">Recent Activity</h4>
              <div className="space-y-3">
                {[
                  { time: '2h ago', event: 'New job posted: Senior Backend Engineer', icon: 'work' },
                  { time: '5h ago', event: '3 interviews completed', icon: 'video_chat' },
                  { time: '1d ago', event: 'User added: sarah.m@acme-corp.com', icon: 'person_add' },
                  { time: '2d ago', event: 'Interview builder updated', icon: 'build' },
                  { time: '3d ago', event: 'Payment processed: $4,999', icon: 'receipt' },
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-3 py-2">
                    <span className="material-symbols-outlined text-[16px] text-[#8d90a0]">{a.icon}</span>
                    <div className="flex-1">
                      <p className="text-[13px] text-white">{a.event}</p>
                    </div>
                    <span className="text-[11px] text-[#434655]">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
