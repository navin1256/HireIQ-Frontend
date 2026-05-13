import React from 'react';
import { Link } from 'react-router-dom';

export default function ExpertLoginPage() {
  return (
    <div className="font-body-md text-on-surface antialiased min-h-screen flex flex-col items-center justify-center relative px-sm bg-[#0D1A14]">
      <style>
        {`
          .radial-glow {
              background: radial-gradient(circle at center, rgba(34, 217, 122, 0.08) 0%, rgba(13, 26, 20, 0) 70%);
          }
          .glass-card {
              background: rgba(15, 23, 42, 0.7);
              backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.08);
          }
          .expert-logo {
              font-family: 'Comfortaa', cursive;
          }
          .form-input-focus:focus {
              border-color: #22D97A !important;
              box-shadow: 0 0 0 1px #22D97A, 0 0 12px rgba(34, 217, 122, 0.2);
          }
          .brand-green-text {
              color: #22D97A;
          }
          .brand-green-bg {
              background-color: #22D97A;
          }
        `}
      </style>
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none radial-glow z-0"></div>

      {/* Navigation suppressed per rules for Transactional pages */}
      <main className="w-full max-w-container-max mx-auto relative z-10 flex flex-col md:flex-row items-center justify-center gap-xl py-lg">
        {/* Left Side: Login Content */}
        <div className="w-full max-w-[460px] flex flex-col items-center">
          {/* Branding */}
          <div className="flex flex-col items-center gap-xs mb-lg">
            <Link to="/" className="expert-logo text-[32px] font-bold tracking-tight">
              <span className="text-white">hire</span><span className="brand-green-text">iq</span>
            </Link>
            <div className="bg-surface-container-high px-sm py-xs rounded-full border border-white/5">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Expert Portal</span>
            </div>
          </div>

          {/* Login Card */}
          <div className="glass-card w-full rounded-xl p-lg shadow-2xl transition-all duration-300 hover:border-[#22D97A]/20">
            <div className="mb-lg text-center">
              <h1 className="font-h3 text-h3 font-extrabold text-white mb-xs">Welcome back, Expert</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Log in to your HireIQ Expert dashboard</p>
            </div>
            
            <form className="space-y-md" onSubmit={(e) => e.preventDefault()}>
              {/* Email Field */}
              <div className="space-y-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Email Address</label>
                <div className="relative">
                  <input className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-md py-sm text-body-md text-white placeholder:text-on-surface-variant/40 outline-none form-input-focus transition-all" placeholder="expert@hireiq.com" type="email" />
                </div>
              </div>
              
              {/* Password Field */}
              <div className="space-y-xs">
                <div className="flex justify-between items-center">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Password</label>
                  <a className="font-label-caps text-label-caps brand-green-text hover:underline" href="#">Forgot password?</a>
                </div>
                <div className="relative">
                  <input className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-md py-sm text-body-md text-white placeholder:text-on-surface-variant/40 outline-none form-input-focus transition-all" placeholder="••••••••" type="password" />
                  <button className="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-white transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>
              </div>
              
              {/* Login Button */}
              <button className="w-full brand-green-bg text-[#0D1A14] font-button text-button py-sm rounded-full transition-all duration-200 transform hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(34,217,122,0.3)] active:scale-95" type="submit">
                Log In
              </button>
            </form>

            {/* Security & Social Proof */}
            <div className="mt-lg pt-md border-t border-white/5 flex flex-col items-center gap-md">
              <div className="flex items-center gap-xs bg-white/5 px-sm py-xs rounded-full">
                <span className="material-symbols-outlined text-[16px] brand-green-text">verified_user</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant">Secure encrypted login</span>
              </div>
              <div className="text-center">
                <p className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase tracking-widest mb-sm">Trusted by interviewers from</p>
                <div className="flex flex-wrap justify-center items-center gap-md opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="font-bold text-white tracking-tighter">Google</span>
                  <span className="font-bold text-white tracking-tighter">Meta</span>
                  <span className="font-bold text-white tracking-tighter">Netflix</span>
                  <span className="font-bold text-white tracking-tighter">Amazon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-md">
            <Link to="/expert/apply" className="group flex items-center gap-xs font-body-md text-body-md text-on-surface-variant hover:text-[#22D97A] transition-colors">
              Not an expert yet? <span className="brand-green-text group-hover:translate-x-1 transition-transform">Apply now →</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Desktop Only Sidebar Info */}
        <aside className="hidden lg:flex flex-col gap-md w-full max-w-[320px]">
          {/* Top Expert Earnings Card */}
          <div className="glass-card rounded-xl p-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-sm">
              <div className="bg-[#22D97A]/10 brand-green-text border border-[#22D97A]/20 font-label-caps text-[10px] px-sm py-xs rounded-full">
                Top 5% Expert
              </div>
            </div>
            <div className="space-y-sm">
              <p className="font-label-caps text-label-caps text-on-surface-variant">Estimated Monthly Earnings</p>
              <div className="flex items-baseline gap-xs">
                <span className="text-h3 font-extrabold text-white">$8,420</span>
                <span className="text-on-surface-variant/60">/month</span>
              </div>
              <div className="flex items-center gap-sm mt-md">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#22D97A]/30">
                  <img alt="Top Expert" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNpgItkyDwhiHdH1CrCRVADeuYA2Zd9N52JSTbm3XQFd-2UfIJ1FBr1IAwq84nKE_iVwg6N8YuFrlNKt_mKV9fqjvYrbt40fZyw9jG8XdyLVOFkwF01TkRNnv7Sg77qyAohw0lo-RhIKxBjt8sf-0v5pAd7e5hqGwrMvTasX4B82ImA8Hz2PQqKUMToKmDthNpI_zRzRmpbuFB7yfX3dg2-zQyWc1EBmWoAXrlt3W55qWZ5pW1jUJMQK_yBj9uMiQeFT80u2UPlzM" />
                </div>
                <div>
                  <p className="text-white font-bold text-body-md">David Chen</p>
                  <p className="text-on-surface-variant text-label-caps">Senior Cloud Architect</p>
                </div>
              </div>
            </div>
            {/* Ambient background glow in card */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#22D97A]/5 blur-3xl rounded-full"></div>
          </div>

          {/* Side Card: Expertise Areas */}
          <div className="glass-card rounded-xl p-md space-y-sm">
            <h4 className="font-label-caps text-label-caps text-white mb-sm">Demanded expertise</h4>
            <div className="flex flex-wrap gap-xs">
              <span className="bg-white/5 text-on-surface-variant px-sm py-xs rounded-lg border border-white/5 text-[12px]">System Design</span>
              <span className="bg-white/5 text-on-surface-variant px-sm py-xs rounded-lg border border-white/5 text-[12px]">Machine Learning</span>
              <span className="bg-white/5 text-on-surface-variant px-sm py-xs rounded-lg border border-white/5 text-[12px]">Rust / Go</span>
              <span className="bg-white/5 text-on-surface-variant px-sm py-xs rounded-lg border border-white/5 text-[12px]">Product Mgt</span>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto py-md px-lg flex flex-col md:flex-row justify-between items-center gap-sm z-10 border-t border-white/5">
        <p className="font-label-caps text-label-caps text-on-surface-variant">© 2024 HireIQ Intelligence. Built for the elite.</p>
        <div className="flex gap-md">
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-[#22D97A] transition-colors" href="#">Privacy Policy</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-[#22D97A] transition-colors" href="#">Terms of Service</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-[#22D97A] transition-colors" href="#">Security</a>
        </div>
      </footer>
    </div>
  );
}
