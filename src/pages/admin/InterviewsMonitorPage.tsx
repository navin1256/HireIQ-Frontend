import React from 'react';
import { Link } from 'react-router-dom';

const interviews = [
  { id: 'INT-4821', candidate: 'Alice Zhang', company: 'Acme Corp', role: 'Senior React Dev', expert: 'Dr. Sarah Chen', status: 'Live', time: 'Now', duration: '32 min' },
  { id: 'INT-4820', candidate: 'Bob Martinez', company: 'TechStart', role: 'Backend Engineer', expert: 'James R.', status: 'Live', time: 'Now', duration: '18 min' },
  { id: 'INT-4819', candidate: 'Carol Lee', company: 'CloudNine', role: 'ML Engineer', expert: 'AI Engine', status: 'Completed', time: '1h ago', duration: '58 min' },
  { id: 'INT-4818', candidate: 'David Kim', company: 'Acme Corp', role: 'Fullstack Dev', expert: 'AI Engine', status: 'Completed', time: '2h ago', duration: '45 min' },
  { id: 'INT-4817', candidate: 'Eva Singh', company: 'Nexus Digital', role: 'DevOps Engineer', expert: 'Lisa Park', status: 'Flagged', time: '3h ago', duration: '52 min' },
  { id: 'INT-4816', candidate: 'Frank Wu', company: 'Horizon Tech', role: 'iOS Developer', expert: 'AI Engine', status: 'Completed', time: '4h ago', duration: '60 min' },
  { id: 'INT-4815', candidate: 'Grace Hall', company: 'Acme Corp', role: 'Data Engineer', expert: 'Kenji T.', status: 'Cancelled', time: '5h ago', duration: '—' },
];

export default function InterviewsMonitorPage() {
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
          <Link to="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">dashboard</span>Dashboard</Link>
          <Link to="/admin/companies" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">apartment</span>Companies</Link>
          <Link to="/admin/users" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">group</span>Users</Link>
          <Link to="/admin/experts/applications" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">badge</span>Expert Apps</Link>
          <Link to="/admin/interviews" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#ffb4ab] bg-[#ffb4ab]/8 font-bold"><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>video_chat</span>Interviews</Link>
          <Link to="/admin/interviews/flagged" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">flag</span>Flagged Queue</Link>
          <Link to="/admin/billing" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">payments</span>Revenue</Link>
        </nav>
      </aside>

      <main className="ml-60 min-h-screen">
        <header className="sticky top-0 z-40 bg-[#080f17]/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-white">Interviews Monitor</h2>
            <span className="flex items-center gap-1.5 text-[11px] text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded font-bold">
              <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse"></span> 2 Live
            </span>
          </div>
          <div className="flex items-center gap-3">
            <select className="bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-[13px] text-[#c3c6d7] focus:outline-none">
              <option>All Status</option>
              <option>Live</option>
              <option>Completed</option>
              <option>Flagged</option>
            </select>
          </div>
        </header>

        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Today\'s Interviews', value: '234', color: '#b4c5ff' },
              { label: 'Currently Live', value: '2', color: '#10b981' },
              { label: 'Avg Duration', value: '47 min', color: '#d2bbff' },
              { label: 'Flagged Today', value: '1', color: '#ffb4ab' },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-xl p-4">
                <p className="text-[11px] text-[#8d90a0] uppercase tracking-wider mb-1">{s.label}</p>
                <p className="text-xl font-bold" style={{ color: s.color }}>{s.value}</p>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-white/3">
                <tr>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">ID</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Candidate</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Company</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Role</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Interviewer</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Duration</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {interviews.map((int) => (
                  <tr key={int.id} className="hover:bg-white/3 transition-colors">
                    <td className="px-5 py-3.5 text-[13px] font-mono text-[#8d90a0]">{int.id}</td>
                    <td className="px-5 py-3.5 text-[13px] font-medium text-white">{int.candidate}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#c3c6d7]">{int.company}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#c3c6d7]">{int.role}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#c3c6d7]">{int.expert}</td>
                    <td className="px-5 py-3.5">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded inline-flex items-center gap-1 ${
                        int.status === 'Live' ? 'text-[#10b981] bg-[#10b981]/10' :
                        int.status === 'Flagged' ? 'text-[#ffb4ab] bg-[#ffb4ab]/10' :
                        int.status === 'Cancelled' ? 'text-[#8d90a0] bg-white/5' :
                        'text-[#b4c5ff] bg-[#b4c5ff]/10'
                      }`}>
                        {int.status === 'Live' && <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse"></span>}
                        {int.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-[#8d90a0]">{int.duration}</td>
                    <td className="px-5 py-3.5 text-right">
                      {int.status === 'Live' ? (
                        <button className="text-[#10b981] text-[13px] font-medium hover:underline">Observe</button>
                      ) : int.status === 'Flagged' ? (
                        <Link to="/admin/interviews/flagged" className="text-[#ffb4ab] text-[13px] font-medium hover:underline">Review</Link>
                      ) : (
                        <button className="text-[#b4c5ff] text-[13px] font-medium hover:underline">Details</button>
                      )}
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
