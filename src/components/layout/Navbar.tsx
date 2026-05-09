import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full h-[80px] z-50 backdrop-blur-md border-b border-white/10 shadow-sm" style={{ background: 'rgba(13,20,29,0.8)' }}>
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-[48px] h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-[8px]">
          <span className="text-[32px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>hire</span>
          <span className="text-[32px] font-bold text-gradient" style={{ fontFamily: 'Plus Jakarta Sans' }}>iq</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-[48px]">
          <div className="flex items-center gap-1">
            <Link to="/" className={`text-[16px] transition-colors duration-200 ${location.pathname === '/' ? 'text-[#b4c5ff] font-bold border-b-2 border-[#b4c5ff] pb-1' : 'text-[#c3c6d7] hover:text-[#dce3f0]'}`}>
              Platform
            </Link>
            <div className="relative group flex items-center cursor-pointer py-4">
              <span className="material-symbols-outlined text-[18px] text-[#c3c6d7] hover:text-[#dce3f0] transition-colors mt-0.5">expand_more</span>
              <div className="absolute top-[100%] left-[-16px] w-56 rounded-xl bg-[#0f172a]/95 backdrop-blur-md border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                <Link to="/platform/ai-screening" className="block px-4 py-2 text-[15px] text-[#c3c6d7] hover:text-[#b4c5ff] hover:bg-white/5 transition-colors">AI Screening</Link>
                <Link to="/platform/candidate-feedback" className="block px-4 py-2 text-[15px] text-[#c3c6d7] hover:text-[#b4c5ff] hover:bg-white/5 transition-colors">Candidate Feedback</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className={`text-[16px] transition-colors duration-200 ${location.pathname.startsWith('/solutions') ? 'text-[#b4c5ff] font-bold border-b-2 border-[#b4c5ff] pb-1' : 'text-[#c3c6d7] hover:text-[#dce3f0]'}`}>
              Solutions
            </span>
            <div className="relative group flex items-center cursor-pointer py-4">
              <span className="material-symbols-outlined text-[18px] text-[#c3c6d7] hover:text-[#dce3f0] transition-colors mt-0.5">expand_more</span>
              <div className="absolute top-[100%] left-[-16px] w-56 rounded-xl bg-[#0f172a]/95 backdrop-blur-md border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                <Link to="/solutions/startups" className="block px-4 py-2 text-[15px] text-[#c3c6d7] hover:text-[#b4c5ff] hover:bg-white/5 transition-colors">For Startups</Link>
                <Link to="/solutions/enterprise" className="block px-4 py-2 text-[15px] text-[#c3c6d7] hover:text-[#b4c5ff] hover:bg-white/5 transition-colors">For Enterprise</Link>
              </div>
            </div>
          </div>
          <Link to="/pricing" className={`text-[16px] transition-colors duration-200 ${location.pathname === '/pricing' ? 'text-[#b4c5ff] font-bold border-b-2 border-[#b4c5ff] pb-1' : 'text-[#c3c6d7] hover:text-[#dce3f0]'}`}>Pricing</Link>
          <div className="flex items-center gap-1">
            <span className={`text-[16px] transition-colors duration-200 ${location.pathname.startsWith('/roi-calculator') ? 'text-[#b4c5ff] font-bold border-b-2 border-[#b4c5ff] pb-1' : 'text-[#c3c6d7] hover:text-[#dce3f0]'}`}>
              Resources
            </span>
            <div className="relative group flex items-center cursor-pointer py-4">
              <span className="material-symbols-outlined text-[18px] text-[#c3c6d7] hover:text-[#dce3f0] transition-colors mt-0.5">expand_more</span>
              <div className="absolute top-[100%] left-[-16px] w-56 rounded-xl bg-[#0f172a]/95 backdrop-blur-md border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                <Link to="/roi-calculator" className="block px-4 py-2 text-[15px] text-[#c3c6d7] hover:text-[#b4c5ff] hover:bg-white/5 transition-colors">ROI Calculator</Link>
              </div>
            </div>
          </div>
          <Link to="/for-candidates" className={`text-[16px] transition-colors duration-200 ${location.pathname === '/for-candidates' ? 'text-[#b4c5ff] font-bold border-b-2 border-[#b4c5ff] pb-1' : 'text-[#c3c6d7] hover:text-[#dce3f0]'}`}>For Candidates</Link>
          <div className="flex items-center gap-1">
            <span className={`text-[16px] transition-colors duration-200 ${location.pathname.startsWith('/onboarding') ? 'text-[#b4c5ff] font-bold border-b-2 border-[#b4c5ff] pb-1' : 'text-[#c3c6d7] hover:text-[#dce3f0]'}`}>
              Company
            </span>
            <div className="relative group flex items-center cursor-pointer py-4">
              <span className="material-symbols-outlined text-[18px] text-[#c3c6d7] hover:text-[#dce3f0] transition-colors mt-0.5">expand_more</span>
              <div className="absolute top-[100%] left-[-16px] w-56 rounded-xl bg-[#0f172a]/95 backdrop-blur-md border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                <Link to="/onboarding" className="block px-4 py-2 text-[15px] text-[#c3c6d7] hover:text-[#b4c5ff] hover:bg-white/5 transition-colors">Onboarding Wizard</Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-[24px]">
          <Link to="/login" className="text-[15px] font-semibold text-[#c3c6d7] hover:text-white transition-all">Login</Link>
          <Link to="/signup" className="primary-gradient text-[15px] font-semibold px-[24px] py-3 rounded-full text-white shadow-lg hover:brightness-110 transition-all">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
