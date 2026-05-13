import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CandidateLoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/candidate/dashboard');
  };

  return (
    <div className="bg-[#f8f9fa] font-['Inter'] text-[#191c1d] antialiased min-h-screen">
      <style>
        {`
          .login-card-shadow {
              box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
          }
          .input-focus-glow:focus {
              box-shadow: 0 0 0 4px rgba(34, 217, 122, 0.1);
          }
          .hover-lift:hover {
              transform: translateY(-2px);
              transition: transform 0.2s ease;
          }
        `}
      </style>
      <main className="flex min-h-screen">
        {/* Left Side: Login Form */}
        <section className="flex-1 flex flex-col items-center justify-center p-[24px] md:p-[48px] bg-[#f8f9fa]">
          <div className="w-full max-w-[460px] bg-[#ffffff] p-[24px] md:p-[48px] rounded-[20px] login-card-shadow">
            {/* Header */}
            <header className="mb-[48px]">
              <div className="flex items-center gap-[4px] mb-[24px]">
                <Link to="/" className="font-['Comfortaa'] font-bold text-[20px] leading-[1.4] font-semibold text-[#000000]">hireiq</Link>
              </div>
              <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-[28px] text-[#191c1d] mb-[4px] tracking-tight">Welcome back</h1>
              <p className="text-[16px] leading-[1.5] font-normal text-[#45464c]">Log in to your HireIQ account</p>
            </header>
            
            {/* Auth Options */}
            <div className="space-y-[8px]">
              <button className="w-full flex items-center justify-center gap-[12px] bg-[#f3f4f5] border border-[#c6c6cd] py-[8px] rounded-lg text-[20px] leading-[1.4] font-semibold text-[14px] font-semibold text-[#191c1d] hover:bg-[#e1e3e4] transition-colors hover-lift">
                <img 
                  alt="Google" 
                  className="w-5 h-5" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9QoM8EwKo6MjIUlTxPh9LUsxeQ7Lcc5EKxHnOwVeXaQWk6_g_IEeMwXxXX4tcP6w831Ag-ctRyNVYaNat7nc21GYcpAaobsxruLA82LiBKtsdPg8mdlgU0K-CZb457flh5G1BRJcGYwM8IEStwWplOtMMpM8EE0iOBVdGspH5mxLqhuEXv_nF7VT0JBt1cwd_qJVAbBb6BgqA8Kwt2x7EVfKHr6ya57G6vw-YwLmsYZjedpZNbFQYDfyQerLAqH7cEb76ZvnUCjQ"
                />
                Continue with Google
              </button>
              
              <div className="relative flex items-center py-[8px]">
                <div className="flex-grow border-t border-[#e1e3e4]"></div>
                <span className="flex-shrink mx-[8px] text-[14px] leading-[1.5] font-normal text-[#45464c]/60">or</span>
                <div className="flex-grow border-t border-[#e1e3e4]"></div>
              </div>
              
              {/* Form */}
              <form className="space-y-[24px]" onSubmit={handleSubmit}>
                <div className="space-y-[4px]">
                  <label className="block text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]" htmlFor="email">EMAIL ADDRESS</label>
                  <input 
                    className="w-full px-[8px] py-[8px] bg-[#f8f9fa] border border-[#c6c6cd] rounded-lg text-[16px] leading-[1.5] font-normal input-focus-glow focus:border-[#22D97A] outline-none transition-all" 
                    id="email" 
                    placeholder="name@company.com" 
                    type="email"
                  />
                </div>
                <div className="space-y-[4px]">
                  <div className="flex justify-between items-center">
                    <label className="block text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]" htmlFor="password">PASSWORD</label>
                    <a className="text-[20px] leading-[1.4] font-semibold text-[13px] font-medium text-[#22D97A] hover:opacity-80" href="#">Forgot password?</a>
                  </div>
                  <input 
                    className="w-full px-[8px] py-[8px] bg-[#f8f9fa] border border-[#c6c6cd] rounded-lg text-[16px] leading-[1.5] font-normal input-focus-glow focus:border-[#22D97A] outline-none transition-all" 
                    id="password" 
                    placeholder="••••••••" 
                    type="password"
                  />
                </div>
                <button className="w-full bg-[#22D97A] text-[#000000] py-[8px] rounded-lg text-[20px] leading-[1.4] font-semibold text-[16px] font-bold hover:opacity-90 hover-lift transition-all mt-[8px]" type="submit">
                  Log In
                </button>
              </form>
            </div>
            
            {/* Biometric Note */}
            <div className="mt-[24px] flex items-center justify-center gap-[4px] p-[4px] bg-[#f3f4f5] rounded-lg">
              <span className="material-symbols-outlined text-[18px] text-[#45464c]" style={{ fontVariationSettings: "'FILL' 0" }}>fingerprint</span>
              <p className="text-[14px] leading-[1.5] font-normal text-[#45464c] text-[12px]">Use Face ID or Fingerprint on mobile app</p>
            </div>
            
            {/* Footer Link */}
            <div className="mt-[48px] text-center">
              <p className="text-[16px] leading-[1.5] font-normal text-[#45464c]">
                Don’t have an account? 
                <Link className="text-[#22D97A] font-semibold hover:underline ml-1" to="/candidate/signup">Join free →</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Right Side: Motivational Panel (Desktop Only) */}
        <section className="hidden lg:flex flex-1 relative bg-gradient-to-br from-[#ECFDF5] to-[#F0FDF4] items-center justify-center p-[80px] overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-full h-full opacity-30">
            <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-[#22D97A] blur-[100px]"></div>
            <div className="absolute bottom-[20%] left-[5%] w-80 h-80 rounded-full bg-[#56fc99] blur-[120px]"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-[1120px] flex flex-col items-center">
            {/* Analytics Preview UI */}
            <div className="grid grid-cols-2 gap-[24px] w-full mb-[48px] max-w-lg">
              {/* Growth Card */}
              <div className="col-span-2 bg-white/80 backdrop-blur-md p-[24px] rounded-2xl border border-white shadow-lg">
                <div className="flex items-center justify-between mb-[8px]">
                  <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c] uppercase">Growth Trajectory</span>
                  <span className="text-[#22D97A] font-bold">+12% this month</span>
                </div>
                <div className="h-24 w-full flex items-end gap-1">
                  <div className="w-1/6 h-1/2 bg-[#e1e3e4] rounded-t-sm"></div>
                  <div className="w-1/6 h-2/3 bg-[#e1e3e4] rounded-t-sm"></div>
                  <div className="w-1/6 h-1/2 bg-[#e1e3e4] rounded-t-sm"></div>
                  <div className="w-1/6 h-3/4 bg-[#e1e3e4] rounded-t-sm"></div>
                  <div className="w-1/6 h-5/6 bg-[#22D97A] rounded-t-sm"></div>
                  <div className="w-1/6 h-full bg-[#22D97A] rounded-t-sm"></div>
                </div>
              </div>
              {/* AI Feedback Card 1 */}
              <div className="bg-white/80 backdrop-blur-md p-[24px] rounded-2xl border border-white shadow-lg flex flex-col gap-[4px]">
                <div className="flex items-center gap-[4px]">
                  <span className="material-symbols-outlined text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  <span className="text-[20px] leading-[1.4] font-semibold text-[14px]">AI Tip</span>
                </div>
                <p className="text-[14px] leading-[1.5] font-normal text-[#45464c] italic">"Try quantifying your impact in project summaries."</p>
              </div>
              {/* AI Feedback Card 2 */}
              <div className="bg-white/80 backdrop-blur-md p-[24px] rounded-2xl border border-white shadow-lg flex flex-col gap-[4px]">
                <div className="flex items-center gap-[4px]">
                  <span className="material-symbols-outlined text-[#006d39]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-[20px] leading-[1.4] font-semibold text-[14px]">Skill Check</span>
                </div>
                <p className="text-[14px] leading-[1.5] font-normal text-[#45464c] italic">"Python proficiency verified via practical test."</p>
              </div>
            </div>
            {/* Text Content */}
            <div className="text-center max-w-md">
              <h2 className="text-[30px] leading-[1.2] tracking-[-0.01em] font-bold text-[30px] leading-[1.2] tracking-[-0.01em] font-bold text-[#000000] mb-[8px]">Track your growth after every interview.</h2>
              <p className="text-[18px] leading-[1.6] font-normal text-[#45464c]">Get personalized feedback, skill insights, and real interview practice powered by AI.</p>
            </div>
          </div>
          
          {/* Representative Image Background Overlay */}
          <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLoFIuqOgBrjkZJihDe1YmuTmu24qzvlUl663jeVcrNSVkZDDC3MuzW8QdSa4rv7XWL0SAwGWwndvPl8K_YyYviitYpTpBETvodcwzSG9j8JGaPrs9efrEcHhhR2yuv_HcCoFoL_vJ3GtDqbLWTfT9hw2gczttmZ5UDcMlNb6adj1Og9-fsI6KwLZXJbX4MWekl0Jc491G8bSMh_5FF5lSC_bbL0Y2SFk4tRgCRH427OBG2qrWUImHLlR0c0yOYoPTFxkKAu2_5Dg"
            />
          </div>
        </section>
      </main>

      {/* Footer for Mobile View */}
      <footer className="lg:hidden w-full py-[24px] px-[24px] flex flex-col items-center border-t border-[#e1e3e4] bg-[#f8f9fa]">
        <p className="text-[14px] leading-[1.5] font-normal text-[#45464c] mb-[4px]">© 2024 HireIQ. All rights reserved.</p>
        <div className="flex gap-[8px] text-[14px] leading-[1.5] font-normal text-[#45464c]/80">
          <a className="hover:text-[#000000] underline" href="#">Privacy Policy</a>
          <a className="hover:text-[#000000] underline" href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
