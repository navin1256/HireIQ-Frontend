import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CandidateSignupPage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/candidate/dashboard');
  };

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-['Inter'] antialiased min-h-screen">
      <style>
        {`
          .benefit-pill {
              background-color: #ffffff;
              border: 1px solid #E5E7EB;
              transition: all 0.2s ease;
          }
          .benefit-pill:hover {
              border-color: #22D97A;
              transform: translateY(-1px);
          }
        `}
      </style>
      <main className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side: Signup Form Container */}
        <section className="w-full md:w-[45%] bg-[#f8f9fa] flex flex-col justify-center items-center px-[24px] py-[80px]">
          <div className="w-full max-w-[480px]">
            {/* Brand Logo */}
            <div className="mb-[80px]">
              <Link className="font-['Comfortaa'] text-[30px] leading-[1.2] tracking-[-0.01em] font-bold flex items-center gap-1" to="/">
                <span className="text-[#111827]">hire</span><span className="text-[#006d39]">iq</span>
              </Link>
            </div>
            
            {/* Header */}
            <div className="mb-[48px]">
              <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-[#000000] mb-[4px]">Join HireIQ</h1>
              <p className="text-[18px] leading-[1.6] font-normal text-[#45464c]">Elevate your career with AI-driven interview intelligence.</p>
            </div>
            
            {/* Google Auth */}
            <button className="w-full flex items-center justify-center gap-[12px] py-[24px] px-[24px] bg-[#ffffff] border border-[#c6c6cd] rounded-lg text-[14px] leading-[1] font-bold text-[#191c1d] hover:bg-[#f3f4f5] transition-colors duration-200">
              <img 
                alt="Google Logo" 
                className="w-5 h-5" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnefG38u1j3uNUHF6siOtK23yWxHNYb7FeMpaj9S9lUWDut_qQM8Ih1D-7N-cfYCcH5hdkq5HLfh9ZDuEwO3YDI3fPifcg3iJNKRO6uszF7CjCDQZ_nW4ub89C7gCzByWCwZKuVJEDVYzrTX11Sd6tOt1cYykHDAckehU2BlXJNj-DvMozPhylO-u6rJI-Abg5pM12WjBwYgtn61bZhH0kLFNY_6z7fsWJNQfbY-PmyBxz3PPMVC6cR7S5yhH1UXeMH1KyUP1Yxdo"
              />
              Continue with Google
            </button>
            
            <div className="relative my-[48px]">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#c6c6cd]"></div>
              </div>
              <div className="relative flex justify-center text-[12px] leading-[1] tracking-[0.05em] font-semibold">
                <span className="bg-[#f8f9fa] px-[12px] text-[#45464c] text-[12px] leading-[1] tracking-[0.05em] font-semibold">OR</span>
              </div>
            </div>
            
            {/* Form */}
            <form className="space-y-[24px]" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c] mb-[4px]">Full Name</label>
                <input 
                  className="w-full px-[24px] py-[12px] rounded-lg border border-[#c6c6cd] bg-[#ffffff] focus:ring-1 focus:ring-[#000000] focus:border-[#000000] outline-none transition-all" 
                  placeholder="John Doe" 
                  type="text"
                />
              </div>
              <div>
                <label className="block text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c] mb-[4px]">Email Address</label>
                <input 
                  className="w-full px-[24px] py-[12px] rounded-lg border border-[#c6c6cd] bg-[#ffffff] focus:ring-1 focus:ring-[#000000] focus:border-[#000000] outline-none transition-all" 
                  placeholder="john@example.com" 
                  type="email"
                />
              </div>
              <div className="relative">
                <label className="block text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c] mb-[4px]">Password</label>
                <input 
                  className="w-full px-[24px] py-[12px] rounded-lg border border-[#c6c6cd] bg-[#ffffff] focus:ring-1 focus:ring-[#000000] focus:border-[#000000] outline-none transition-all" 
                  placeholder="••••••••" 
                  type="password"
                />
                <button className="absolute right-[24px] bottom-[12px] text-[#45464c] hover:text-[#000000]" type="button">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>visibility</span>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-[24px]">
                <div>
                  <label className="block text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c] mb-[4px]">Current Role</label>
                  <input 
                    className="w-full px-[24px] py-[12px] rounded-lg border border-[#c6c6cd] bg-[#ffffff] focus:ring-1 focus:ring-[#000000] focus:border-[#000000] outline-none transition-all" 
                    placeholder="Software Engineer" 
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c] mb-[4px]">Experience</label>
                  <select className="w-full px-[24px] py-[12px] rounded-lg border border-[#c6c6cd] bg-[#ffffff] focus:ring-1 focus:ring-[#000000] focus:border-[#000000] outline-none transition-all appearance-none">
                    <option>0-2 Years</option>
                    <option>3-5 Years</option>
                    <option>5-10 Years</option>
                    <option>10+ Years</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="block w-full py-[12px] px-[24px] bg-[#006d39] text-[#ffffff] rounded-lg text-[14px] leading-[1] font-bold shadow-sm hover:opacity-90 active:scale-[0.98] transition-all mt-[24px] text-center">
                Create Free Account
              </button>
            </form>
            
            {/* Footer Links */}
            <div className="mt-[48px] text-center">
              <p className="text-[14px] leading-[1.5] font-normal text-[#45464c]">
                Already have an account? <Link className="text-[#006d39] font-bold hover:underline ml-1" to="/candidate/login">Log in</Link>
              </p>
            </div>
            
            {/* Benefit Pills */}
            <div className="mt-[80px] flex flex-wrap gap-[12px] justify-center">
              <div className="benefit-pill px-[24px] py-[4px] rounded-full flex items-center gap-[4px]">
                <span className="material-symbols-outlined text-[18px] text-[#006d39]" style={{ fontVariationSettings: "'FILL' 0" }}>verified</span>
                <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[11px] uppercase tracking-wider text-[#45464c]">Free practice</span>
              </div>
              <div className="benefit-pill px-[24px] py-[4px] rounded-full flex items-center gap-[4px]">
                <span className="material-symbols-outlined text-[18px] text-[#006d39]" style={{ fontVariationSettings: "'FILL' 0" }}>forum</span>
                <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[11px] uppercase tracking-wider text-[#45464c]">Real feedback</span>
              </div>
              <div className="benefit-pill px-[24px] py-[4px] rounded-full flex items-center gap-[4px]">
                <span className="material-symbols-outlined text-[18px] text-[#006d39]" style={{ fontVariationSettings: "'FILL' 0" }}>card_membership</span>
                <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[11px] uppercase tracking-wider text-[#45464c]">Certificates</span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Motivational Panel */}
        <section className="hidden md:flex w-full md:w-[55%] bg-gradient-to-br from-[#ECFDF5] to-[#F0FDF4] relative overflow-hidden flex-col items-center justify-center p-[80px]">
          <div className="relative z-10 w-full max-w-2xl">
            <div className="mb-[80px] text-center">
              <h2 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-[40px] text-[#000000] leading-tight mb-[24px]">Improve with every interview.</h2>
              <p className="text-[18px] leading-[1.6] font-normal text-[#45464c] max-w-md mx-auto">Analyze your performance, track your growth, and land your dream job with confidence.</p>
            </div>
            
            {/* Product Preview Mockup */}
            <div className="relative bg-[#ffffff] border border-[#c6c6cd] shadow-2xl rounded-xl p-[24px] aspect-[4/3] overflow-hidden group">
              <div className="flex items-center justify-between mb-[24px]">
                <div className="flex gap-[4px]">
                  <div className="w-3 h-3 rounded-full bg-red-200"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-200"></div>
                  <div className="w-3 h-3 rounded-full bg-green-200"></div>
                </div>
                <div className="w-32 h-4 bg-[#f3f4f5] rounded-full"></div>
              </div>
              <div className="grid grid-cols-12 gap-[24px] h-full">
                {/* Sidebar Mock */}
                <div className="col-span-3 space-y-[24px]">
                  <div className="w-full h-8 bg-[#edeeef] rounded-lg"></div>
                  <div className="w-full h-8 bg-[#56fc99] opacity-50 rounded-lg border-l-4 border-[#006d39]"></div>
                  <div className="w-full h-8 bg-[#edeeef] rounded-lg"></div>
                  <div className="w-full h-8 bg-[#edeeef] rounded-lg"></div>
                </div>
                {/* Main Content Mock */}
                <div className="col-span-9 space-y-[24px]">
                  <div className="grid grid-cols-3 gap-[24px]">
                    <div className="bg-white border border-[#c6c6cd] p-[12px] rounded-lg shadow-sm">
                      <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px] text-[#45464c]">READINESS</span>
                      <div className="text-[20px] leading-[1.4] font-semibold text-[#006d39]">92%</div>
                    </div>
                    <div className="bg-white border border-[#c6c6cd] p-[12px] rounded-lg shadow-sm">
                      <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px] text-[#45464c]">SESSIONS</span>
                      <div className="text-[20px] leading-[1.4] font-semibold text-[#000000]">14</div>
                    </div>
                    <div className="bg-white border border-[#c6c6cd] p-[12px] rounded-lg shadow-sm">
                      <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px] text-[#45464c]">FEEDBACK</span>
                      <div className="text-[20px] leading-[1.4] font-semibold text-[#000000]">High</div>
                    </div>
                  </div>
                  <div className="bg-[#f3f4f5] h-32 rounded-xl flex items-center justify-center">
                    <div className="w-[80%] h-16 flex items-end gap-[4px]">
                      <div className="flex-1 bg-[#006d39] opacity-40 h-[40%] rounded-t-sm"></div>
                      <div className="flex-1 bg-[#006d39] opacity-60 h-[70%] rounded-t-sm"></div>
                      <div className="flex-1 bg-[#006d39] opacity-80 h-[50%] rounded-t-sm"></div>
                      <div className="flex-1 bg-[#006d39] h-[90%] rounded-t-sm"></div>
                      <div className="flex-1 bg-[#006d39] opacity-50 h-[30%] rounded-t-sm"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[24px] p-[24px] bg-white border border-[#c6c6cd] rounded-xl shadow-sm">
                    <span className="material-symbols-outlined text-[40px] text-[#33e282]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    <div>
                      <div className="text-[14px] leading-[1] font-bold text-[#191c1d]">Data Analyst Expert</div>
                      <div className="text-[14px] leading-[1.5] font-normal text-[#45464c]">Issued March 2024</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Abstract Decorations */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#006d39] opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#5eff9c] opacity-10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Footer for the panel */}
          <div className="absolute bottom-[24px] left-0 right-0 text-center">
            <p className="text-[14px] leading-[1.5] font-normal text-[#005229] opacity-70">Trusted by 50,000+ candidates worldwide</p>
          </div>
        </section>
      </main>
    </div>
  );
}
