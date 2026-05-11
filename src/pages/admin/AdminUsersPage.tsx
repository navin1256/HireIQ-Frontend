import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  { name: 'John Doe', email: 'john@acme-corp.com', role: 'Company Admin', company: 'Acme Corp', status: 'Active', lastLogin: '2h ago' },
  { name: 'Sarah Chen', email: 'sarah@example.com', role: 'Expert', company: '—', status: 'Active', lastLogin: '1h ago' },
  { name: 'Alex Kim', email: 'alex@techstart.io', role: 'Hiring Manager', company: 'TechStart Inc.', status: 'Active', lastLogin: '5h ago' },
  { name: 'Maria Garcia', email: 'maria@gmail.com', role: 'Candidate', company: '—', status: 'Active', lastLogin: '12h ago' },
  { name: 'Bob Wilson', email: 'bob@devhouse.com', role: 'Company Admin', company: 'DevHouse Ltd', status: 'Suspended', lastLogin: '7d ago' },
  { name: 'Lisa Park', email: 'lisa@example.com', role: 'Expert', company: '—', status: 'Active', lastLogin: '3h ago' },
  { name: 'Tom Brown', email: 'tom@cloudnine.ai', role: 'Recruiter', company: 'CloudNine AI', status: 'Active', lastLogin: '30m ago' },
  { name: 'Emily Davis', email: 'emily@proton.me', role: 'Candidate', company: '—', status: 'Inactive', lastLogin: '30d ago' },
];

export default function AdminUsersPage() {
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
          <Link to="/admin/users" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#ffb4ab] bg-[#ffb4ab]/8 font-bold"><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>group</span>Users</Link>
          <Link to="/admin/experts/applications" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">badge</span>Expert Apps</Link>
          <Link to="/admin/interviews" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">video_chat</span>Interviews</Link>
          <Link to="/admin/billing" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">payments</span>Revenue</Link>
        </nav>
      </aside>

      <main className="ml-60 min-h-screen">
        <header className="sticky top-0 z-40 bg-[#080f17]/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6">
          <h2 className="text-lg font-bold text-white">Users Management</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#434655] text-[18px]">search</span>
              <input type="text" placeholder="Search users..." className="bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-[13px] text-white placeholder-[#434655] focus:outline-none focus:border-[#b4c5ff]/50 w-64" />
            </div>
            <select className="bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-[13px] text-[#c3c6d7] focus:outline-none">
              <option>All Roles</option>
              <option>Company Admin</option>
              <option>Candidate</option>
              <option>Expert</option>
            </select>
          </div>
        </header>

        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total Users', value: '12,483', color: '#b4c5ff' },
              { label: 'Companies', value: '2,341', color: '#10b981' },
              { label: 'Candidates', value: '8,921', color: '#d2bbff' },
              { label: 'Experts', value: '1,221', color: '#fbbf24' },
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
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">User</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Role</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Company</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Last Login</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {users.map((u, i) => (
                  <tr key={i} className="hover:bg-white/3 transition-colors">
                    <td className="px-5 py-3.5">
                      <div>
                        <p className="text-[13px] font-medium text-white">{u.name}</p>
                        <p className="text-[11px] text-[#8d90a0]">{u.email}</p>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${u.role === 'Expert' ? 'text-[#fbbf24] bg-[#fbbf24]/10' : u.role === 'Candidate' ? 'text-[#d2bbff] bg-[#d2bbff]/10' : 'text-[#b4c5ff] bg-[#b4c5ff]/10'}`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-[#c3c6d7]">{u.company}</td>
                    <td className="px-5 py-3.5">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${u.status === 'Active' ? 'text-[#10b981] bg-[#10b981]/10' : u.status === 'Suspended' ? 'text-[#ffb4ab] bg-[#ffb4ab]/10' : 'text-[#8d90a0] bg-white/5'}`}>
                        {u.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-[#8d90a0]">{u.lastLogin}</td>
                    <td className="px-5 py-3.5 text-right">
                      <button className="text-[#b4c5ff] text-[13px] font-medium hover:underline mr-3">Edit</button>
                      <button className="text-[#ffb4ab] text-[13px] font-medium hover:underline">Suspend</button>
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
