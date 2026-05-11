import React from 'react';
import { Link } from 'react-router-dom';

export default function SystemHealthPage() {
  return (
    <div className="bg-[#080f17] text-[#dce3f0] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; vertical-align: middle; } .glass-card { background: rgba(19, 27, 46, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.06); }`}</style>

      <aside className="fixed left-0 top-0 h-full w-60 bg-[#0b101e] border-r border-white/5 flex flex-col py-6 z-50">
        <div className="px-5 mb-8"><h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Comfortaa', cursive" }}>hire<span className="text-[#ffb4ab]">iq</span></h1><p className="text-[10px] font-bold text-[#ffb4ab] uppercase tracking-widest mt-1">Admin Console</p></div>
        <nav className="flex-1 space-y-0.5 px-2">
          <Link to="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">dashboard</span>Dashboard</Link>
          <Link to="/admin/analytics" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">analytics</span>Analytics</Link>
          <Link to="/admin/system" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#ffb4ab] bg-[#ffb4ab]/8 font-bold"><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>monitor_heart</span>System Health</Link>
        </nav>
      </aside>

      <main className="ml-60 min-h-screen">
        <header className="sticky top-0 z-40 bg-[#080f17]/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-white">System Health</h2>
            <span className="flex items-center gap-1.5 text-[11px] text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded font-bold">
              <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse"></span> All Systems Operational
            </span>
          </div>
          <span className="text-[12px] text-[#8d90a0]">Last refreshed: 30s ago</span>
        </header>

        <div className="p-6 space-y-6 max-w-[1400px]">
          {/* Status Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'API Uptime (30d)', value: '99.97%', icon: 'cloud_done', color: '#10b981' },
              { label: 'Avg Response Time', value: '142ms', icon: 'speed', color: '#10b981' },
              { label: 'Error Rate (24h)', value: '0.03%', icon: 'error', color: '#10b981' },
              { label: 'Active Instances', value: '4 / 8', icon: 'dns', color: '#b4c5ff' },
            ].map((m) => (
              <div key={m.label} className="glass-card rounded-xl p-5">
                <span className="material-symbols-outlined text-[20px] mb-2 block" style={{ color: m.color }}>{m.icon}</span>
                <p className="text-2xl font-bold text-white mb-0.5">{m.value}</p>
                <p className="text-[11px] text-[#8d90a0]">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Services Status */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="font-bold text-white mb-5">Service Status</h3>
            <div className="space-y-3">
              {[
                { name: 'Core API', status: 'Operational', latency: '89ms', uptime: '99.99%', color: '#10b981' },
                { name: 'AI Interview Engine', status: 'Operational', latency: '234ms', uptime: '99.95%', color: '#10b981' },
                { name: 'Code Execution Sandbox', status: 'Operational', latency: '156ms', uptime: '99.92%', color: '#10b981' },
                { name: 'Video Streaming (WebRTC)', status: 'Operational', latency: '45ms', uptime: '99.97%', color: '#10b981' },
                { name: 'AI Scoring Pipeline', status: 'Degraded', latency: '890ms', uptime: '99.87%', color: '#fbbf24' },
                { name: 'Email Service (SendGrid)', status: 'Operational', latency: '320ms', uptime: '99.98%', color: '#10b981' },
                { name: 'Database (PostgreSQL)', status: 'Operational', latency: '12ms', uptime: '99.99%', color: '#10b981' },
                { name: 'Cache (Redis)', status: 'Operational', latency: '3ms', uptime: '99.99%', color: '#10b981' },
                { name: 'Object Storage (S3)', status: 'Operational', latency: '78ms', uptime: '99.99%', color: '#10b981' },
              ].map((s) => (
                <div key={s.name} className="flex items-center justify-between p-3 rounded-lg bg-white/3 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full" style={{ background: s.color }}></span>
                    <span className="text-[13px] text-white font-medium">{s.name}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-[12px] text-[#8d90a0] w-20 text-right">{s.latency}</span>
                    <span className="text-[12px] text-[#c3c6d7] w-16 text-right">{s.uptime}</span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded w-24 text-center ${s.status === 'Operational' ? 'text-[#10b981] bg-[#10b981]/10' : 'text-[#fbbf24] bg-[#fbbf24]/10'}`}>{s.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Resource Usage */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-white mb-5">Resource Usage</h3>
              <div className="space-y-5">
                {[
                  { label: 'CPU Usage', value: '34%', color: '#10b981' },
                  { label: 'Memory Usage', value: '62%', color: '#fbbf24' },
                  { label: 'Disk I/O', value: '28%', color: '#b4c5ff' },
                  { label: 'Network Bandwidth', value: '45%', color: '#d2bbff' },
                  { label: 'DB Connections', value: '47%', color: '#10b981' },
                ].map((r) => (
                  <div key={r.label}>
                    <div className="flex justify-between text-[12px] mb-1.5">
                      <span className="text-[#c3c6d7]">{r.label}</span>
                      <span className="font-bold" style={{ color: r.color }}>{r.value}</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="h-2 rounded-full transition-all" style={{ width: r.value, background: r.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Incidents */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-white mb-5">Recent Incidents</h3>
              <div className="space-y-4">
                {[
                  { time: '2h ago', event: 'AI Scoring Pipeline — High latency detected', status: 'Investigating', color: '#fbbf24' },
                  { time: '1d ago', event: 'API Gateway — Brief 502 errors (2 min)', status: 'Resolved', color: '#10b981' },
                  { time: '3d ago', event: 'Code Sandbox — Container pool exhausted', status: 'Resolved', color: '#10b981' },
                  { time: '1w ago', event: 'Database — Slow queries during peak load', status: 'Resolved', color: '#10b981' },
                ].map((inc, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/3">
                    <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: inc.color }}></span>
                    <div className="flex-1">
                      <p className="text-[13px] text-white font-medium">{inc.event}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[11px] text-[#434655]">{inc.time}</span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${inc.status === 'Resolved' ? 'text-[#10b981] bg-[#10b981]/10' : 'text-[#fbbf24] bg-[#fbbf24]/10'}`}>{inc.status}</span>
                      </div>
                    </div>
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
