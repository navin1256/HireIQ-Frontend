import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#080f17] text-[#dce3f0] flex items-center justify-center p-8 relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="absolute top-[-30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#b4c5ff]/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#d2bbff]/5 blur-[120px] pointer-events-none"></div>

      <div className="text-center relative z-10 max-w-lg">
        <div className="text-[120px] font-extrabold leading-none tracking-tighter bg-gradient-to-b from-[#b4c5ff] to-[#434655] bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
          404
        </div>
        <h1 className="text-2xl font-bold text-white mt-4 mb-2">Page Not Found</h1>
        <p className="text-[#8d90a0] text-[15px] mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="px-8 py-3 rounded-xl bg-[#2563eb] text-white font-bold text-[14px] hover:opacity-90 transition-all shadow-lg shadow-[#2563eb]/20">
            Go Home
          </Link>
          <Link to="/contact" className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-[#c3c6d7] font-bold text-[14px] hover:bg-white/10 transition-all">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
