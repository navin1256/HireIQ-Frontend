import React from 'react';
import { Link } from 'react-router-dom';

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-[#080f17] text-[#dce3f0] flex items-center justify-center p-8 relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }`}</style>
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#10b981]/5 blur-[150px] pointer-events-none"></div>

      <div className="w-full max-w-[440px] relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "'Comfortaa', cursive" }}>
              hire<span className="text-[#b4c5ff]">iq</span>
            </h1>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-[#131b2e]/60 backdrop-blur-xl border border-white/8 rounded-2xl p-8 shadow-2xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-[#10b981] text-[32px]">mark_email_read</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Check Your Email</h2>
          <p className="text-[#8d90a0] text-[14px] mb-6 leading-relaxed">
            We've sent a verification link to your email address. Click the link to verify your account and get started.
          </p>

          <div className="bg-[#080f17] rounded-xl p-4 mb-6 border border-white/5">
            <p className="text-[13px] text-[#c3c6d7]">
              Sent to <span className="text-white font-medium">user@example.com</span>
            </p>
          </div>

          <button className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-[#c3c6d7] font-bold text-[14px] hover:bg-white/10 transition-colors mb-4">
            Resend Verification Email
          </button>

          <p className="text-[12px] text-[#434655]">
            Wrong email? <Link to="/signup" className="text-[#b4c5ff] hover:underline">Go back to signup</Link>
          </p>
        </div>

        <p className="text-center mt-6 text-[12px] text-[#434655]">
          Didn't receive the email? Check your spam folder or <a href="mailto:support@hireiq.com" className="text-[#b4c5ff] hover:underline">contact support</a>
        </p>
      </div>
    </div>
  );
}
