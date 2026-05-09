import { Link, useNavigate } from 'react-router-dom';

export default function CompanyLoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="bg-[#0D1A14] font-body-md text-[#dce3f0] selection:bg-[#22D97A]/30 selection:text-[#22D97A] min-h-screen overflow-hidden relative">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 42, 31, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 42, 31, 0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: 'radial-gradient(circle at center, rgba(34, 217, 122, 0.04) 0%, transparent 70%)' }}
      ></div>

      {/* Main Content Canvas */}
      <main className="relative min-h-screen flex items-center justify-center">
        {/* Login Card Container */}
        <div className="relative z-10 w-full max-w-[440px] px-[16px]">
          <section className="bg-[#111111] border border-[#1A2A1F] rounded-[20px] p-[40px_36px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] backdrop-blur-sm">
            {/* Brand Logo */}
            <div className="flex justify-center mb-[80px]">
              <Link to="/" className="font-bold text-[32px] tracking-tight" style={{ fontFamily: 'Comfortaa, cursive' }}>
                <span className="text-white">hire</span><span className="text-[#22D97A]">iq</span>
              </Link>
            </div>
            
            {/* Header Text */}
            <div className="text-center mb-[24px]">
              <h1 className="text-[28px] font-extrabold text-white leading-tight mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Welcome back</h1>
              <p className="text-[15px] text-[#6B7280]" style={{ fontFamily: 'Inter' }}>Log in to your HireIQ dashboard</p>
            </div>
            
            {/* Auth Providers */}
            <button 
              onClick={() => handleLogin()}
              className="w-full h-12 flex items-center justify-center gap-[8px] bg-white rounded-[10px] transition-all duration-200 active:scale-95 mb-[24px] group"
              type="button"
            >
              <img alt="Google Logo" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsfvae3PNsu8VGFb6zpeHVdU27N0DGxFnXJ502khIhjx8qa7bzg6S_IM6T5TMEx0hNMHewcPS2L5W1-Tq0Frkbqvha4j3xcDDrIo86aQhwdJWj9KinP66b1m9wuDo5PoKNbZA_7rGORyDHWfqoiUVM0ZVpmYeMVx8s2FxTN0O8uRF-EWoHkEMzvMxjKq5b_hGiNUpuTuWUI3ZE6rNJID6wWAaasputK4ImgS41bLkgB1-EKavyRintSDh-HBvSOVqMnl1nyBLG9-U" />
              <span className="text-[15px] font-semibold text-[#1F2937]" style={{ fontFamily: 'Inter' }}>Continue with Google</span>
            </button>
            
            <div className="flex items-center gap-[8px] mb-[24px]">
              <div className="h-[1px] flex-1 bg-[#1A2A1F]"></div>
              <span className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-[0.05em]" style={{ fontFamily: 'Inter' }}>or</span>
              <div className="h-[1px] flex-1 bg-[#1A2A1F]"></div>
            </div>
            
            {/* Login Form */}
            <form className="space-y-[24px]" onSubmit={handleLogin}>
              {/* Email Field */}
              <div className="space-y-[8px]">
                <label className="text-[12px] font-semibold text-[#8d90a0] uppercase tracking-wider" htmlFor="email" style={{ fontFamily: 'Inter' }}>Email</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#434655] transition-colors text-[20px]">mail</span>
                  <input 
                    className="w-full bg-[#0D0D0D] border border-[#1A2A1F] rounded-[10px] py-3 pl-11 pr-4 text-white placeholder:text-[#434655] focus:ring-1 focus:ring-[#22D97A] focus:border-[#22D97A] transition-all outline-none text-[15px]" 
                    id="email" 
                    name="email" 
                    placeholder="name@company.com" 
                    type="email" 
                  />
                </div>
              </div>
              
              {/* Password Field */}
              <div className="space-y-[8px]">
                <div className="flex justify-between items-center">
                  <label className="text-[12px] font-semibold text-[#8d90a0] uppercase tracking-wider" htmlFor="password" style={{ fontFamily: 'Inter' }}>Password</label>
                  <Link to="/forgot-password" className="text-[12px] font-semibold text-[#22D97A] hover:underline" style={{ fontFamily: 'Inter' }}>Forgot password?</Link>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#434655] transition-colors text-[20px]">lock</span>
                  <input 
                    className="w-full bg-[#0D0D0D] border border-[#1A2A1F] rounded-[10px] py-3 pl-11 pr-11 text-white placeholder:text-[#434655] focus:ring-1 focus:ring-[#22D97A] focus:border-[#22D97A] transition-all outline-none text-[15px]" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    type="password" 
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#434655] hover:text-white transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>
              </div>
              
              {/* CTA Button */}
              <button 
                className="w-full h-[52px] bg-[#22D97A] text-[#0D1A14] rounded-[10px] text-[16px] font-extrabold transition-all duration-300 mt-[4px] hover:shadow-[0_4px_20px_rgba(34,217,122,0.3)] hover:-translate-y-0.5 active:translate-y-0" 
                type="submit" 
                style={{ fontFamily: 'Inter' }}
              >
                Login to Dashboard
              </button>
            </form>
            
            {/* Footer Link */}
            <div className="text-center mt-[80px]">
              <p className="text-[14px] text-[#6B7280]" style={{ fontFamily: 'Inter' }}>
                Don't have an account? 
                <Link to="/signup" className="text-[#22D97A] font-semibold hover:underline ml-[8px]">Sign up →</Link>
              </p>
            </div>
          </section>
        </div>

        {/* Decorative Ambient Glows */}
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[#22D97A]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-[#b4c5ff]/5 blur-[120px] rounded-full pointer-events-none"></div>
      </main>
    </div>
  );
}
