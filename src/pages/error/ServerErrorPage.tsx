import React from 'react';
import { Link } from 'react-router-dom';

export default function ServerErrorPage() {
  return (
    <div className="min-h-screen bg-[#080f17] text-[#dce3f0] flex items-center justify-center p-8 relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#ffb4ab]/5 blur-[150px] pointer-events-none"></div>

      <div className="text-center relative z-10 max-w-lg">
        <div className="text-[120px] font-extrabold leading-none tracking-tighter bg-gradient-to-b from-[#ffb4ab] to-[#434655] bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
          500
        </div>
        <h1 className="text-2xl font-bold text-white mt-4 mb-2">Server Error</h1>
        <p className="text-[#8d90a0] text-[15px] mb-8 max-w-md mx-auto">
          Something went wrong on our end. Our engineering team has been notified and is working on a fix.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => window.location.reload()} className="px-8 py-3 rounded-xl bg-[#2563eb] text-white font-bold text-[14px] hover:opacity-90 transition-all shadow-lg shadow-[#2563eb]/20">
            Try Again
          </button>
          <Link to="/" className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-[#c3c6d7] font-bold text-[14px] hover:bg-white/10 transition-all">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
