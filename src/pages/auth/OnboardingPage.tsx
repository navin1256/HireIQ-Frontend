import { Link, useNavigate } from 'react-router-dom';

export default function OnboardingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body-md min-h-screen relative overflow-x-hidden selection:bg-[#b4c5ff]/30">
      {/* Subtle Ambient Glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-0" 
        style={{ background: 'radial-gradient(circle at center, rgba(34, 217, 122, 0.08) 0%, transparent 70%)' }}
      ></div>
      
      {/* Onboarding Header */}
      <header 
        className="fixed top-0 w-full h-[80px] z-50 border-b border-white/5"
        style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-[1280px] mx-auto px-[24px] md:px-[48px] h-full flex justify-between items-center">
          {/* Brand Logo */}
          <div className="flex items-center gap-[8px]">
            <div 
              className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center"
              style={{ boxShadow: '0 0 15px rgba(34, 217, 122, 0.3)' }}
            >
              <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <Link to="/" className="text-[24px] font-bold tracking-tight text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</Link>
          </div>
          
          {/* Progress Indicator (Hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-[48px]">
            <div className="flex items-center gap-[8px] group">
              <div className="w-6 h-6 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-[12px] font-bold">1</div>
              <span className="text-[11px] font-semibold text-[#b4c5ff] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Company Profile</span>
            </div>
            <div className="h-px w-8 bg-[#434655]"></div>
            <div className="flex items-center gap-[8px] opacity-40">
              <div className="w-6 h-6 rounded-full border border-[#434655] text-[#c3c6d7] flex items-center justify-center text-[12px] font-bold">2</div>
              <span className="text-[11px] font-semibold text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Connect ATS</span>
            </div>
            <div className="h-px w-8 bg-[#434655]"></div>
            <div className="flex items-center gap-[8px] opacity-40">
              <div className="w-6 h-6 rounded-full border border-[#434655] text-[#c3c6d7] flex items-center justify-center text-[12px] font-bold">3</div>
              <span className="text-[11px] font-semibold text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Create First Job</span>
            </div>
            <div className="h-px w-8 bg-[#434655]"></div>
            <div className="flex items-center gap-[8px] opacity-40">
              <div className="w-6 h-6 rounded-full border border-[#434655] text-[#c3c6d7] flex items-center justify-center text-[12px] font-bold">4</div>
              <span className="text-[11px] font-semibold text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Invite Team</span>
            </div>
          </nav>
          
          {/* Actions */}
          <div>
            <Link className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors font-semibold text-[15px]" style={{ fontFamily: 'Inter' }} to="/dashboard">Skip setup</Link>
          </div>
        </div>
      </header>
      
      <main className="relative z-10 pt-[120px] pb-[80px] px-[24px]">
        <div className="max-w-[640px] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-[80px]">
            <h1 className="text-[48px] font-bold text-[#dce3f0] mb-[8px] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Tell us about your company</h1>
            <p className="text-[18px] text-[#c3c6d7]" style={{ fontFamily: 'Inter', lineHeight: 1.6 }}>Personalize your HireIQ experience to match your brand and workflow.</p>
          </div>
          
          {/* Onboarding Card */}
          <div 
            className="p-[24px] md:p-[80px] rounded-xl shadow-2xl"
            style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
          >
            <form className="space-y-[48px]" onSubmit={(e) => {
              e.preventDefault();
              navigate('/onboarding/ats');
            }}>
              {/* Logo Upload */}
              <div className="space-y-[16px]">
                <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] block uppercase" style={{ fontFamily: 'Inter' }}>Company Logo</label>
                <div className="group relative flex flex-col items-center justify-center border-2 border-dashed border-[#434655] hover:border-[#b4c5ff]/50 rounded-xl p-[48px] transition-all duration-300 bg-[#080f17]/50 hover:bg-[#151c25]/50 cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-[#2e353f] flex items-center justify-center mb-[16px] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[#c3c6d7]" style={{ fontVariationSettings: "'FILL' 0" }}>upload</span>
                  </div>
                  <p className="text-[#dce3f0] font-semibold text-[15px] mb-[8px]" style={{ fontFamily: 'Inter' }}>Drag and drop or <span className="text-[#b4c5ff]">browse</span></p>
                  <p className="text-[#c3c6d7] text-[12px]" style={{ fontFamily: 'Inter' }}>SVG, PNG, JPG (max. 800x400px)</p>
                  <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                {/* Company Name */}
                <div className="space-y-[16px]">
                  <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] block uppercase" style={{ fontFamily: 'Inter' }}>Company Name</label>
                  <input className="w-full bg-[#080f17] border border-[#434655] rounded-lg px-[24px] py-[16px] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] text-[#dce3f0] placeholder:text-[#8d90a0] outline-none transition-all" placeholder="e.g. Acme Corp" type="text" />
                </div>
                {/* Website URL */}
                <div className="space-y-[16px]">
                  <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] block uppercase" style={{ fontFamily: 'Inter' }}>Website URL</label>
                  <div className="relative">
                    <span className="absolute left-[24px] top-1/2 -translate-y-1/2 text-[#8d90a0] text-[14px]">https://</span>
                    <input className="w-full bg-[#080f17] border border-[#434655] rounded-lg pl-[68px] pr-[24px] py-[16px] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] text-[#dce3f0] placeholder:text-[#8d90a0] outline-none transition-all" placeholder="www.acme.com" type="text" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                {/* Industry */}
                <div className="space-y-[16px]">
                  <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] block uppercase" style={{ fontFamily: 'Inter' }}>Industry</label>
                  <div className="relative">
                    <select className="w-full bg-[#080f17] border border-[#434655] rounded-lg px-[24px] py-[16px] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] text-[#dce3f0] appearance-none outline-none transition-all" defaultValue="">
                      <option disabled value="">Select industry</option>
                      <option value="tech">Technology &amp; Software</option>
                      <option value="finance">Finance &amp; Fintech</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="retail">Retail &amp; E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-[24px] top-1/2 -translate-y-1/2 pointer-events-none text-[#c3c6d7]" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
                  </div>
                </div>
                {/* Company Size */}
                <div className="space-y-[16px]">
                  <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] block uppercase" style={{ fontFamily: 'Inter' }}>Company Size</label>
                  <div className="relative">
                    <select className="w-full bg-[#080f17] border border-[#434655] rounded-lg px-[24px] py-[16px] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] text-[#dce3f0] appearance-none outline-none transition-all" defaultValue="">
                      <option disabled value="">Select size</option>
                      <option value="1-10">1 - 10 employees</option>
                      <option value="11-50">11 - 50 employees</option>
                      <option value="51-200">51 - 200 employees</option>
                      <option value="201-500">201 - 500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-[24px] top-1/2 -translate-y-1/2 pointer-events-none text-[#c3c6d7]" style={{ fontVariationSettings: "'FILL' 0" }}>groups</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="pt-[24px] flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                  <span className="material-symbols-outlined text-[#b4c5ff] text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>security</span>
                  <span className="text-[12px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Your data is encrypted and secure.</span>
                </div>
                <button 
                  className="bg-[#22D97A] hover:bg-[#1fb366] text-[#0D1A14] font-semibold text-[15px] px-[80px] py-[16px] rounded-full transition-all active:scale-95 flex items-center gap-[8px] group" 
                  style={{ fontFamily: 'Inter', boxShadow: '0 0 15px rgba(34, 217, 122, 0.3)' }}
                  type="submit"
                >
                  Continue
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
          
          {/* Support Text */}
          <p className="text-center mt-[48px] text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter' }}>
            Need help? <a className="text-[#b4c5ff] hover:underline" href="#">Chat with an onboarding specialist</a>
          </p>
        </div>
      </main>
      
      {/* Visual Background Element */}
      <div className="fixed bottom-0 right-0 w-1/3 h-1/2 opacity-20 pointer-events-none">
        <img className="w-full h-full object-cover mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2XZ8S3TCq6V4w1LARulvxIF2rk47Vc4627hON6n6mBSWYVVhQAiyiscXqxMJdRLHSocZGNFm5HLKzqlVhdJ0zjkHkKWp9W7hp2tRWd4pzUol0E6AiXl0Dv02bfTfce5xxIDAToS26RETZG-B-fomxDfl22IgJyOSmBzCvo3YQOjp7XVIxu_Inqsadxe0W4wiJv0NItsCnp0Mh-hO6PkoPLSWhBeT66cRdpAAcQQ6_Lj-zj0jjtmBJl7tkqJqTKXyXyI0Bb1M0A60" alt="Abstract Gradient" />
      </div>
    </div>
  );
}
