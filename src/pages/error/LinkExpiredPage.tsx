import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkExpiredPage() {
  return (
    <div className="min-h-screen bg-[#080f17] text-[#dce3f0] flex items-center justify-center p-8 relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }`}</style>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#d2bbff]/5 blur-[120px] pointer-events-none"></div>

      <div className="text-center relative z-10 max-w-lg">
        <div className="w-20 h-20 rounded-2xl bg-[#d2bbff]/10 border border-[#d2bbff]/20 flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-[#d2bbff] text-[40px]">link_off</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Link Expired</h1>
        <p className="text-[#8d90a0] text-[15px] mb-8 max-w-md mx-auto">
          This link has expired or is no longer valid. Please request a new one or contact support if you need assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/forgot-password" className="px-8 py-3 rounded-xl bg-[#2563eb] text-white font-bold text-[14px] hover:opacity-90 transition-all shadow-lg shadow-[#2563eb]/20">
            Request New Link
          </Link>
          <Link to="/contact" className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-[#c3c6d7] font-bold text-[14px] hover:bg-white/10 transition-all">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
