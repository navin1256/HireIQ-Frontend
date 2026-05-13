import React from 'react';
import { Link } from 'react-router-dom';

export default function AccessDeniedPage() {
  return (
    <div className="min-h-screen bg-[#080f17] text-[#dce3f0] flex items-center justify-center p-8 relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }`}</style>
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#ffb4ab]/5 blur-[150px] pointer-events-none"></div>

      <div className="text-center relative z-10 max-w-lg">
        <div className="w-20 h-20 rounded-2xl bg-[#ffb4ab]/10 border border-[#ffb4ab]/20 flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-[#ffb4ab] text-[40px]">shield</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Access Denied</h1>
        <p className="text-[#8d90a0] text-[15px] mb-8 max-w-md mx-auto">
          You don't have permission to access this resource. If you believe this is an error, contact your administrator.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="px-8 py-3 rounded-xl bg-[#2563eb] text-white font-bold text-[14px] hover:opacity-90 transition-all shadow-lg shadow-[#2563eb]/20">
            Go Home
          </Link>
          <Link to="/login" className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-[#c3c6d7] font-bold text-[14px] hover:bg-white/10 transition-all">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
