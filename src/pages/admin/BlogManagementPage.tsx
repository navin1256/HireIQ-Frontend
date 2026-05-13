import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { title: 'AI Interview Best Practices for 2024', status: 'Published', author: 'Marketing', date: 'Dec 1', views: '4.2K', category: 'Guide' },
  { title: 'How We Built Our AI Scoring Engine', status: 'Published', author: 'Engineering', date: 'Nov 28', views: '8.1K', category: 'Technical' },
  { title: 'The Future of Technical Hiring', status: 'Draft', author: 'CEO', date: 'Nov 25', views: '—', category: 'Thought Leadership' },
  { title: 'Case Study: How Acme Corp Reduced TTH by 60%', status: 'Published', author: 'Sales', date: 'Nov 20', views: '3.4K', category: 'Case Study' },
  { title: 'Announcing SOC2 Type II Certification', status: 'Scheduled', author: 'Legal', date: 'Dec 5', views: '—', category: 'Announcement' },
  { title: 'Remote Interview Tips for Candidates', status: 'Published', author: 'Marketing', date: 'Nov 15', views: '12.3K', category: 'Guide' },
];

export default function BlogManagementPage() {
  return (
    <div className="bg-[#080f17] text-[#dce3f0] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; vertical-align: middle; } .glass-card { background: rgba(19, 27, 46, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.06); }`}</style>

      <aside className="fixed left-0 top-0 h-full w-60 bg-[#0b101e] border-r border-white/5 flex flex-col py-6 z-50">
        <div className="px-5 mb-8"><h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Comfortaa', cursive" }}>hire<span className="text-[#ffb4ab]">iq</span></h1><p className="text-[10px] font-bold text-[#ffb4ab] uppercase tracking-widest mt-1">Admin Console</p></div>
        <nav className="flex-1 space-y-0.5 px-2">
          <Link to="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">dashboard</span>Dashboard</Link>
          <Link to="/admin/content/questions" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">quiz</span>Question Bank</Link>
          <Link to="/admin/content/blog" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#ffb4ab] bg-[#ffb4ab]/8 font-bold"><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>edit_note</span>Blog CMS</Link>
        </nav>
      </aside>

      <main className="ml-60 min-h-screen">
        <header className="sticky top-0 z-40 bg-[#080f17]/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6">
          <h2 className="text-lg font-bold text-white">Blog Management</h2>
          <button className="px-4 py-2 rounded-lg bg-[#b4c5ff] text-[#080f17] text-[13px] font-bold hover:opacity-90 flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">add</span>New Post</button>
        </header>

        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total Posts', value: '84', color: '#b4c5ff' },
              { label: 'Published', value: '72', color: '#10b981' },
              { label: 'Drafts', value: '8', color: '#fbbf24' },
              { label: 'Total Views', value: '142K', color: '#d2bbff' },
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
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Title</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Category</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Author</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Date</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Views</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {posts.map((p, i) => (
                  <tr key={i} className="hover:bg-white/3 transition-colors">
                    <td className="px-5 py-3.5 text-[13px] font-medium text-white max-w-xs truncate">{p.title}</td>
                    <td className="px-5 py-3.5"><span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#d2bbff]/10 text-[#d2bbff]">{p.category}</span></td>
                    <td className="px-5 py-3.5 text-[13px] text-[#c3c6d7]">{p.author}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#8d90a0]">{p.date}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#c3c6d7]">{p.views}</td>
                    <td className="px-5 py-3.5">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${p.status === 'Published' ? 'text-[#10b981] bg-[#10b981]/10' : p.status === 'Draft' ? 'text-[#fbbf24] bg-[#fbbf24]/10' : 'text-[#b4c5ff] bg-[#b4c5ff]/10'}`}>{p.status}</span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <button className="text-[#b4c5ff] text-[13px] font-medium hover:underline mr-3">Edit</button>
                      <button className="text-[#ffb4ab] text-[13px] font-medium hover:underline">Delete</button>
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
