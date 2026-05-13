import React from 'react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#080f17] text-[#dce3f0] flex items-center justify-center p-8 relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }`}</style>
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#fbbf24]/5 blur-[150px] pointer-events-none"></div>

      <div className="text-center relative z-10 max-w-lg">
        <div className="w-20 h-20 rounded-2xl bg-[#fbbf24]/10 border border-[#fbbf24]/20 flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-[#fbbf24] text-[40px]">construction</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Scheduled Maintenance</h1>
        <p className="text-[#8d90a0] text-[15px] mb-6 max-w-md mx-auto">
          We're performing planned maintenance to improve platform performance and reliability. We'll be back shortly.
        </p>
        <div className="bg-[#131b2e]/60 backdrop-blur-xl border border-white/8 rounded-xl p-5 inline-block mb-8">
          <p className="text-[11px] text-[#8d90a0] uppercase tracking-widest mb-1">Estimated Return</p>
          <p className="text-xl font-bold text-[#fbbf24]">2:00 AM UTC</p>
        </div>
        <p className="text-[12px] text-[#434655]">
          Questions? Contact <a href="mailto:status@hireiq.com" className="text-[#b4c5ff] hover:underline">status@hireiq.com</a>
        </p>
      </div>
    </div>
  );
}
