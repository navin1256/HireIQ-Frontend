import React from 'react';
import { Link } from 'react-router-dom';

const applications = [
  { name: 'Dr. Sarah Chen', email: 'sarah.chen@mit.edu', specialty: 'ML/AI Engineering', experience: '12 years', applied: '2d ago', status: 'Under Review', score: 94 },
  { name: 'James Rodriguez', email: 'j.rodriguez@tech.co', specialty: 'Backend Systems', experience: '8 years', applied: '3d ago', status: 'Interview Scheduled', score: 88 },
  { name: 'Priya Patel', email: 'priya@google.com', specialty: 'Frontend Architecture', experience: '10 years', applied: '5d ago', status: 'Under Review', score: 91 },
  { name: 'Marcus Johnson', email: 'marcus@aws.com', specialty: 'Cloud Infrastructure', experience: '15 years', applied: '1w ago', status: 'Approved', score: 97 },
  { name: 'Emily Watson', email: 'e.watson@stripe.com', specialty: 'Full Stack', experience: '6 years', applied: '1w ago', status: 'Rejected', score: 62 },
  { name: 'Kenji Tanaka', email: 'kenji@meta.com', specialty: 'Mobile Engineering', experience: '9 years', applied: '2w ago', status: 'Under Review', score: 85 },
];

export default function ExpertApplicationsPage() {
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
          <Link to="/admin/experts/applications" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#ffb4ab] bg-[#ffb4ab]/8 font-bold"><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>badge</span>Expert Apps</Link>
          <Link to="/admin/interviews" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">video_chat</span>Interviews</Link>
          <Link to="/admin/billing" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">payments</span>Revenue</Link>
        </nav>
      </aside>

      <main className="ml-60 min-h-screen">
        <header className="sticky top-0 z-40 bg-[#080f17]/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6">
          <h2 className="text-lg font-bold text-white">Expert Applications</h2>
          <div className="flex items-center gap-3">
            <select className="bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-[13px] text-[#c3c6d7] focus:outline-none">
              <option>All Status</option>
              <option>Under Review</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
        </header>

        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Pending Review', value: '7', color: '#fbbf24' },
              { label: 'Approved This Month', value: '23', color: '#10b981' },
              { label: 'Rejection Rate', value: '18%', color: '#ffb4ab' },
              { label: 'Total Experts', value: '1,221', color: '#b4c5ff' },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-xl p-4">
                <p className="text-[11px] text-[#8d90a0] uppercase tracking-wider mb-1">{s.label}</p>
                <p className="text-xl font-bold" style={{ color: s.color }}>{s.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {applications.map((app, i) => (
              <div key={i} className="glass-card rounded-xl p-5 flex items-center gap-5 hover:border-white/15 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#b4c5ff]/10 border border-[#b4c5ff]/20 flex items-center justify-center text-[#b4c5ff] font-bold text-lg shrink-0">
                  {app.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-[14px] font-bold text-white">{app.name}</h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      app.status === 'Approved' ? 'text-[#10b981] bg-[#10b981]/10' :
                      app.status === 'Rejected' ? 'text-[#ffb4ab] bg-[#ffb4ab]/10' :
                      app.status === 'Interview Scheduled' ? 'text-[#d2bbff] bg-[#d2bbff]/10' :
                      'text-[#fbbf24] bg-[#fbbf24]/10'
                    }`}>{app.status}</span>
                  </div>
                  <p className="text-[12px] text-[#8d90a0]">{app.email} • {app.specialty} • {app.experience}</p>
                </div>
                <div className="text-center px-4">
                  <p className="text-lg font-bold text-white">{app.score}</p>
                  <p className="text-[10px] text-[#8d90a0]">AI Score</p>
                </div>
                <div className="text-[12px] text-[#434655] w-16 text-right">{app.applied}</div>
                <div className="flex gap-2 shrink-0">
                  <button className="px-3 py-1.5 rounded-lg bg-[#10b981]/10 text-[#10b981] text-[12px] font-bold hover:bg-[#10b981]/20 transition-colors">Approve</button>
                  <button className="px-3 py-1.5 rounded-lg bg-[#ffb4ab]/10 text-[#ffb4ab] text-[12px] font-bold hover:bg-[#ffb4ab]/20 transition-colors">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
