import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminAnalyticsPage() {
  return (
    <div className="bg-[#080f17] text-[#dce3f0] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; vertical-align: middle; } .glass-card { background: rgba(19, 27, 46, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.06); }`}</style>

      <aside className="fixed left-0 top-0 h-full w-60 bg-[#0b101e] border-r border-white/5 flex flex-col py-6 z-50">
        <div className="px-5 mb-8"><h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Comfortaa', cursive" }}>hire<span className="text-[#ffb4ab]">iq</span></h1><p className="text-[10px] font-bold text-[#ffb4ab] uppercase tracking-widest mt-1">Admin Console</p></div>
        <nav className="flex-1 space-y-0.5 px-2">
          <Link to="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">dashboard</span>Dashboard</Link>
          <Link to="/admin/analytics" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#ffb4ab] bg-[#ffb4ab]/8 font-bold"><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>analytics</span>Analytics</Link>
          <Link to="/admin/system" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">monitor_heart</span>System Health</Link>
        </nav>
      </aside>

      <main className="ml-60 min-h-screen">
        <header className="sticky top-0 z-40 bg-[#080f17]/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6">
          <h2 className="text-lg font-bold text-white">Internal Analytics</h2>
          <select className="bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-[13px] text-[#c3c6d7] focus:outline-none">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
        </header>

        <div className="p-6 space-y-6 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Interviews', value: '48,291', trend: '+23%', color: '#b4c5ff' },
              { label: 'Unique Candidates', value: '31,847', trend: '+18%', color: '#10b981' },
              { label: 'Avg Score', value: '72.4', trend: '+3%', color: '#fbbf24' },
              { label: 'Conversion Rate', value: '34%', trend: '+5%', color: '#d2bbff' },
            ].map((m) => (
              <div key={m.label} className="glass-card rounded-xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[11px] text-[#8d90a0] uppercase tracking-wider">{m.label}</p>
                  <span className="text-[11px] font-bold text-[#10b981]">{m.trend}</span>
                </div>
                <p className="text-2xl font-bold" style={{ color: m.color }}>{m.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Interview Volume Chart */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-white mb-5">Interview Volume</h3>
              <div className="h-[200px] flex items-end justify-between gap-2">
                {[35, 42, 38, 55, 48, 62, 58, 71, 65, 78, 72, 85].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                    <div className="w-full bg-[#b4c5ff]/20 rounded-t group-hover:bg-[#b4c5ff]/40 transition-all" style={{ height: `${h}%` }}></div>
                    <span className="text-[9px] text-[#434655]">{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Categories */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-white mb-5">Top Interview Categories</h3>
              <div className="space-y-4">
                {[
                  { cat: 'Frontend Engineering', pct: 34, color: '#b4c5ff' },
                  { cat: 'Backend Engineering', pct: 28, color: '#10b981' },
                  { cat: 'System Design', pct: 18, color: '#d2bbff' },
                  { cat: 'Full Stack', pct: 12, color: '#fbbf24' },
                  { cat: 'DevOps / Cloud', pct: 8, color: '#ffb4ab' },
                ].map((c) => (
                  <div key={c.cat}>
                    <div className="flex justify-between text-[13px] mb-1">
                      <span className="text-[#c3c6d7]">{c.cat}</span>
                      <span className="font-bold" style={{ color: c.color }}>{c.pct}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="h-2 rounded-full" style={{ width: `${c.pct}%`, background: c.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Funnel */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="font-bold text-white mb-5">Hiring Funnel (Platform Average)</h3>
            <div className="flex items-center justify-between gap-4">
              {[
                { stage: 'Applications', count: '31,847', pct: '100%', width: '100%' },
                { stage: 'AI Screened', count: '24,290', pct: '76%', width: '76%' },
                { stage: 'Passed Screen', count: '9,842', pct: '31%', width: '31%' },
                { stage: 'Final Interview', count: '4,921', pct: '15%', width: '15%' },
                { stage: 'Hired', count: '1,845', pct: '5.8%', width: '5.8%' },
              ].map((s, i) => (
                <div key={s.stage} className="flex-1 text-center">
                  <p className="text-[11px] text-[#8d90a0] uppercase tracking-wider mb-2">{s.stage}</p>
                  <p className="text-lg font-bold text-white mb-1">{s.count}</p>
                  <p className="text-[12px] text-[#b4c5ff] font-medium">{s.pct}</p>
                  {i < 4 && <div className="hidden md:block">
                    <span className="material-symbols-outlined text-[#434655] mt-2">arrow_forward</span>
                  </div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
