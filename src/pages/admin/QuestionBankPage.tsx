import React from 'react';
import { Link } from 'react-router-dom';

const questions = [
  { id: 'Q-001', title: 'Implement a debounce function', category: 'JavaScript', difficulty: 'Medium', usageCount: 1284, rating: 4.8 },
  { id: 'Q-002', title: 'Design a URL shortener system', category: 'System Design', difficulty: 'Hard', usageCount: 967, rating: 4.9 },
  { id: 'Q-003', title: 'Build a React hook for infinite scroll', category: 'React', difficulty: 'Medium', usageCount: 843, rating: 4.7 },
  { id: 'Q-004', title: 'Implement LRU Cache', category: 'Data Structures', difficulty: 'Hard', usageCount: 1562, rating: 4.6 },
  { id: 'Q-005', title: 'REST vs GraphQL trade-offs', category: 'Backend', difficulty: 'Easy', usageCount: 2103, rating: 4.5 },
  { id: 'Q-006', title: 'Optimize a slow SQL query', category: 'Database', difficulty: 'Medium', usageCount: 712, rating: 4.8 },
  { id: 'Q-007', title: 'Design a real-time chat system', category: 'System Design', difficulty: 'Hard', usageCount: 534, rating: 4.9 },
  { id: 'Q-008', title: 'Implement Promise.all from scratch', category: 'JavaScript', difficulty: 'Hard', usageCount: 891, rating: 4.7 },
];

export default function QuestionBankPage() {
  return (
    <div className="bg-[#080f17] text-[#dce3f0] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; vertical-align: middle; } .glass-card { background: rgba(19, 27, 46, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.06); }`}</style>

      <aside className="fixed left-0 top-0 h-full w-60 bg-[#0b101e] border-r border-white/5 flex flex-col py-6 z-50">
        <div className="px-5 mb-8"><h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Comfortaa', cursive" }}>hire<span className="text-[#ffb4ab]">iq</span></h1><p className="text-[10px] font-bold text-[#ffb4ab] uppercase tracking-widest mt-1">Admin Console</p></div>
        <nav className="flex-1 space-y-0.5 px-2">
          <Link to="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">dashboard</span>Dashboard</Link>
          <Link to="/admin/content/questions" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#ffb4ab] bg-[#ffb4ab]/8 font-bold"><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>quiz</span>Question Bank</Link>
          <Link to="/admin/content/blog" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">edit_note</span>Blog CMS</Link>
        </nav>
      </aside>

      <main className="ml-60 min-h-screen">
        <header className="sticky top-0 z-40 bg-[#080f17]/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6">
          <h2 className="text-lg font-bold text-white">Question Bank</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#434655] text-[18px]">search</span>
              <input type="text" placeholder="Search questions..." className="bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-[13px] text-white placeholder-[#434655] focus:outline-none w-64" />
            </div>
            <button className="px-4 py-2 rounded-lg bg-[#b4c5ff] text-[#080f17] text-[13px] font-bold hover:opacity-90 flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">add</span>New Question</button>
          </div>
        </header>

        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total Questions', value: '2,847', color: '#b4c5ff' },
              { label: 'Categories', value: '14', color: '#d2bbff' },
              { label: 'Avg Rating', value: '4.7', color: '#fbbf24' },
              { label: 'AI Generated', value: '1,203', color: '#10b981' },
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
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Question</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Category</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Difficulty</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Usage</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Rating</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {questions.map((q) => (
                  <tr key={q.id} className="hover:bg-white/3 transition-colors">
                    <td className="px-5 py-3.5 text-[13px] font-mono text-[#434655]">{q.id}</td>
                    <td className="px-5 py-3.5 text-[13px] font-medium text-white">{q.title}</td>
                    <td className="px-5 py-3.5"><span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#b4c5ff]/10 text-[#b4c5ff]">{q.category}</span></td>
                    <td className="px-5 py-3.5">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${q.difficulty === 'Hard' ? 'text-[#ffb4ab] bg-[#ffb4ab]/10' : q.difficulty === 'Medium' ? 'text-[#fbbf24] bg-[#fbbf24]/10' : 'text-[#10b981] bg-[#10b981]/10'}`}>{q.difficulty}</span>
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-[#c3c6d7]">{q.usageCount.toLocaleString()}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#fbbf24] font-medium">★ {q.rating}</td>
                    <td className="px-5 py-3.5 text-right">
                      <button className="text-[#b4c5ff] text-[13px] font-medium hover:underline mr-3">Edit</button>
                      <button className="text-[#ffb4ab] text-[13px] font-medium hover:underline">Archive</button>
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
