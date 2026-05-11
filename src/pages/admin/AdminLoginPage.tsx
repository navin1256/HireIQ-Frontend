import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-[#080f17] text-[#dce3f0] flex items-center justify-center p-8 relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
      `}</style>

      {/* Background effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#ba1a1a]/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#004ac6]/10 blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-[440px] relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2" style={{ fontFamily: "'Comfortaa', cursive" }}>
            hire<span className="text-[#ffb4ab]">iq</span>
          </h1>
          <div className="inline-flex items-center gap-2 bg-[#ba1a1a]/10 text-[#ffb4ab] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-[#ba1a1a]/20">
            <span className="material-symbols-outlined text-[14px]">shield</span>
            Admin Console
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-[#131b2e]/60 backdrop-blur-xl border border-white/8 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-1">Administrator Access</h2>
          <p className="text-[#8d90a0] text-sm mb-8">Restricted to authorized personnel only.</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-[#c3c6d7] uppercase tracking-wider">Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8d90a0] text-[18px]">mail</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@hireiq.com"
                  className="w-full bg-[#080f17] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-[#434655] focus:outline-none focus:border-[#ffb4ab]/50 focus:ring-1 focus:ring-[#ffb4ab]/30 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-[#c3c6d7] uppercase tracking-wider">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8d90a0] text-[18px]">lock</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full bg-[#080f17] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-[#434655] focus:outline-none focus:border-[#ffb4ab]/50 focus:ring-1 focus:ring-[#ffb4ab]/30 transition-all"
                />
              </div>
            </div>

            <Link
              to="/admin/dashboard"
              className="block w-full py-3.5 rounded-lg bg-[#ba1a1a] text-white font-bold text-sm text-center hover:bg-[#93000a] transition-colors shadow-lg shadow-[#ba1a1a]/20"
            >
              Sign In to Console
            </Link>
          </form>

          <div className="mt-6 pt-6 border-t border-white/5 text-center">
            <p className="text-[12px] text-[#8d90a0]">
              Need access? Contact <a href="mailto:security@hireiq.com" className="text-[#ffb4ab] hover:underline">security@hireiq.com</a>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 flex items-start gap-3 bg-[#131b2e]/40 border border-white/5 rounded-xl p-4">
          <span className="material-symbols-outlined text-[#8d90a0] text-[18px] mt-0.5">verified_user</span>
          <p className="text-[12px] text-[#8d90a0] leading-relaxed">
            This is a restricted area. All access attempts are logged and monitored. Unauthorized access is prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
