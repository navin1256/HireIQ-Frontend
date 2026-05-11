import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminBillingPage() {
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
          <Link to="/admin/companies" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#8d90a0] hover:bg-white/5 hover:text-white"><span className="material-symbols-outlined text-[18px]">apartment</span>Companies</Link>
          <Link to="/admin/billing" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-[#ffb4ab] bg-[#ffb4ab]/8 font-bold"><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>payments</span>Revenue</Link>
        </nav>
      </aside>

      <main className="ml-60 min-h-screen">
        <header className="sticky top-0 z-40 bg-[#080f17]/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6">
          <h2 className="text-lg font-bold text-white">Revenue & Billing</h2>
          <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[13px] text-[#c3c6d7] hover:bg-white/10 flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">download</span>Export Report</button>
        </header>

        <div className="p-6 space-y-6 max-w-[1400px]">
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Monthly Recurring Revenue', value: '$284,000', trend: '+15%', color: '#fbbf24' },
              { label: 'Annual Run Rate', value: '$3.41M', trend: '+22%', color: '#10b981' },
              { label: 'Avg Revenue Per Account', value: '$336', trend: '+8%', color: '#b4c5ff' },
              { label: 'Expert Payouts (Pending)', value: '$18,400', trend: '', color: '#d2bbff' },
            ].map((m) => (
              <div key={m.label} className="glass-card rounded-xl p-5">
                <p className="text-[11px] text-[#8d90a0] uppercase tracking-wider mb-1">{m.label}</p>
                <p className="text-2xl font-bold" style={{ color: m.color }}>{m.value}</p>
                {m.trend && <span className="text-[11px] text-[#10b981] font-bold">{m.trend} vs last month</span>}
              </div>
            ))}
          </div>

          {/* Revenue Chart Placeholder */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="font-bold text-white mb-6">Revenue Trend (6 Months)</h3>
            <div className="h-[240px] flex items-end justify-between gap-3 px-2">
              {[
                { month: 'Jul', value: 180, pct: '52%' }, { month: 'Aug', value: 195, pct: '57%' },
                { month: 'Sep', value: 210, pct: '61%' }, { month: 'Oct', value: 238, pct: '69%' },
                { month: 'Nov', value: 261, pct: '76%' }, { month: 'Dec', value: 284, pct: '83%' },
              ].map((d) => (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full bg-[#fbbf24]/20 rounded-t-lg group-hover:bg-[#fbbf24]/30 transition-all relative" style={{ height: d.pct }}>
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#131b2e] text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">${d.value}K</div>
                  </div>
                  <span className="text-[11px] text-[#8d90a0] font-medium">{d.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Plan Breakdown */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { plan: 'Enterprise', accounts: 42, mrr: '$209,958', pct: '74%', color: '#fbbf24' },
              { plan: 'Growth', accounts: 231, mrr: '$59,769', pct: '21%', color: '#b4c5ff' },
              { plan: 'Starter', accounts: 574, mrr: '$14,273', pct: '5%', color: '#d2bbff' },
            ].map((p) => (
              <div key={p.plan} className="glass-card rounded-xl p-5">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-white">{p.plan}</h4>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ color: p.color, background: `${p.color}15` }}>{p.pct}</span>
                </div>
                <p className="text-xl font-bold mb-1" style={{ color: p.color }}>{p.mrr}</p>
                <p className="text-[12px] text-[#8d90a0]">{p.accounts} accounts</p>
              </div>
            ))}
          </div>

          {/* Recent Transactions */}
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="p-5 border-b border-white/5">
              <h3 className="font-bold text-white">Recent Transactions</h3>
            </div>
            <table className="w-full text-left">
              <thead className="bg-white/3">
                <tr>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Date</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Company</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Plan</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Amount</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { date: 'Dec 1', company: 'Acme Corp', plan: 'Enterprise', amount: '$4,999', status: 'Paid' },
                  { date: 'Dec 1', company: 'CloudNine AI', plan: 'Growth', amount: '$1,299', status: 'Paid' },
                  { date: 'Dec 1', company: 'TechStart', plan: 'Growth', amount: '$1,299', status: 'Pending' },
                  { date: 'Nov 28', company: 'Dr. Sarah Chen', plan: 'Expert Payout', amount: '-$2,150', status: 'Paid' },
                  { date: 'Nov 15', company: 'Quantum Labs', plan: 'Enterprise', amount: '$4,999', status: 'Paid' },
                ].map((t, i) => (
                  <tr key={i} className="hover:bg-white/3 transition-colors">
                    <td className="px-5 py-3.5 text-[13px] text-[#8d90a0]">{t.date}</td>
                    <td className="px-5 py-3.5 text-[13px] text-white font-medium">{t.company}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#c3c6d7]">{t.plan}</td>
                    <td className={`px-5 py-3.5 text-[13px] font-bold ${t.amount.startsWith('-') ? 'text-[#ffb4ab]' : 'text-white'}`}>{t.amount}</td>
                    <td className="px-5 py-3.5">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${t.status === 'Paid' ? 'text-[#10b981] bg-[#10b981]/10' : 'text-[#fbbf24] bg-[#fbbf24]/10'}`}>{t.status}</span>
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
