import React from 'react';
import { Link } from 'react-router-dom';

const flaggedItems = [
  { id: 'INT-4817', candidate: 'Eva Singh', company: 'Nexus Digital', reason: 'Potential screen sharing detected', severity: 'High', time: '3h ago', expert: 'Lisa Park', aiConfidence: '94%' },
  { id: 'INT-4802', candidate: 'Ryan Foster', company: 'Acme Corp', reason: 'Suspicious copy-paste pattern in code assessment', severity: 'Medium', time: '8h ago', expert: 'AI Engine', aiConfidence: '78%' },
  { id: 'INT-4789', candidate: 'Nina Petrova', company: 'TechStart', reason: 'Multiple browser tab switches during proctored exam', severity: 'Low', time: '1d ago', expert: 'AI Engine', aiConfidence: '65%' },
];

export default function FlaggedQueuePage() {
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
        <nav className="flex-1 space-y-0.5 px-2">
          <Link to="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">dashboard</span>Dashboard</Link>
          <Link to="/admin/interviews" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">video_chat</span>Interviews</Link>
          <Link to="/admin/interviews/flagged" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#ffb4ab] bg-[#ffb4ab]/8 font-bold"><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>flag</span>Flagged Queue</Link>
        </nav>
      </aside>

      <main className="ml-60 min-h-screen">
        <header className="sticky top-0 z-40 bg-[#080f17]/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link to="/admin/interviews" className="text-[#8d90a0] hover:text-white"><span className="material-symbols-outlined">arrow_back</span></Link>
            <h2 className="text-lg font-bold text-white">Flagged Interview Queue</h2>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#ffb4ab]/10 text-[#ffb4ab]">3 Pending</span>
          </div>
        </header>

        <div className="p-6 space-y-4 max-w-[1000px]">
          {flaggedItems.map((item) => (
            <div key={item.id} className={`glass-card rounded-xl p-6 border-l-4 ${item.severity === 'High' ? 'border-l-[#ffb4ab]' : item.severity === 'Medium' ? 'border-l-[#fbbf24]' : 'border-l-[#8d90a0]'}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-[15px] font-bold text-white">{item.candidate}</h4>
                    <span className="font-mono text-[11px] text-[#434655]">{item.id}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      item.severity === 'High' ? 'text-[#ffb4ab] bg-[#ffb4ab]/10' :
                      item.severity === 'Medium' ? 'text-[#fbbf24] bg-[#fbbf24]/10' :
                      'text-[#8d90a0] bg-white/5'
                    }`}>{item.severity} Severity</span>
                  </div>
                  <p className="text-[13px] text-[#8d90a0]">{item.company} • Interviewer: {item.expert} • {item.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[#8d90a0] uppercase tracking-wider">AI Confidence</p>
                  <p className="text-lg font-bold text-white">{item.aiConfidence}</p>
                </div>
              </div>

              <div className="bg-[#080f17] rounded-lg p-4 mb-4 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#ffb4ab] text-[16px]">warning</span>
                  <p className="text-[13px] font-bold text-white">Flagged Reason</p>
                </div>
                <p className="text-[13px] text-[#c3c6d7]">{item.reason}</p>
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-[#ffb4ab]/10 text-[#ffb4ab] text-[13px] font-bold hover:bg-[#ffb4ab]/20 transition-colors">Confirm Violation</button>
                <button className="px-4 py-2 rounded-lg bg-[#10b981]/10 text-[#10b981] text-[13px] font-bold hover:bg-[#10b981]/20 transition-colors">Dismiss Flag</button>
                <button className="px-4 py-2 rounded-lg bg-white/5 text-[#c3c6d7] text-[13px] font-medium hover:bg-white/10 transition-colors">View Recording</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
