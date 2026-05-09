import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function LoginPage() {
  return (
    <div className="min-h-screen font-body-md antialiased" style={{ background: '#faf8ff', color: '#191b23' }}>
      {/* We are replacing the HTML's custom header/footer with the app's global ones, 
          but if the user explicitly wants the exact light-theme header/footer, I can build them here.
          However, the user says "converte this code in react and connect in login home page button".
          Usually, marketing pages share the Navbar/Footer. But the provided HTML has a VERY DIFFERENT 
          light theme Navbar and Footer. I'll stick to the provided HTML's Navbar/Footer for fidelity, 
          but it's cleaner to use the standard ones unless they really want a standalone portal page.
          Looking at the HTML, it's a standalone portal selection page with a light theme. 
          I will implement it exactly as a standalone layout within this component to preserve the requested design. */}
      
      {/* TopNavBar Shell (Custom Light Theme for Portal) */}
      <header className="fixed top-0 w-full z-50 bg-[#faf8ff]/80 border-b border-[#E2E8F0]/50" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
        <div className="max-w-[1440px] mx-auto px-[40px] py-[12px] flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="text-[24px] tracking-tight" style={{ fontFamily: 'Comfortaa, cursive', fontWeight: 700 }}>
              <span className="text-[#0F172A]">hire</span><span className="text-[#2563eb]">iq</span>
            </Link>
          </div>
          {/* Trailing Actions */}
          <div className="flex items-center gap-[24px]">
            <Link to="/" className="hidden md:block font-semibold text-[14px] text-[#475569] hover:text-[#004ac6] transition-colors duration-200" style={{ fontFamily: 'Inter' }}>
              Why HireIQ?
            </Link>
            <Link to="/" className="bg-[#2563eb] text-white px-6 py-2.5 rounded-xl font-semibold text-[14px] active:scale-95 transition-transform shadow-sm hover:bg-[#1D4ED8]" style={{ fontFamily: 'Inter' }}>
              Join Waitlist
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-[48px] min-h-screen">
        <div className="max-w-[1440px] mx-auto px-[40px]">
          {/* Hero Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-[48px] text-[#0F172A]" style={{ fontFamily: 'Inter', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}>Who are you?</h1>
            <p className="text-[18px] text-[#64748B]" style={{ fontFamily: 'Inter', lineHeight: 1.6 }}>Select your portal to continue</p>
          </div>

          {/* Portal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Companies Portal */}
            <div className="group bg-white rounded-2xl p-8 border border-[#E2E8F0] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_10px_10px_-5px_rgba(0,0,0,0.04)] shadow-[0_1px_3px_0_rgba(0,0,0,0.05),0_1px_2px_-1px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(0,0,0,0.04)]">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold tracking-wide uppercase bg-[#ECFDF5] text-[#10B981]">
                  Save 90% hiring time
                </span>
              </div>
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#ECFDF5] flex items-center justify-center text-[#10B981] mb-4">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>corporate_fare</span>
                </div>
                <h2 className="text-[24px] font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'Inter', lineHeight: 1.4 }}>Companies</h2>
                <p className="text-[14px] text-[#475569]" style={{ fontFamily: 'Inter', lineHeight: 1.5 }}>Conduct AI-powered technical interviews at scale with unbiased evaluation.</p>
              </div>
              <ul className="space-y-3 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-[14px] text-[#475569]" style={{ fontFamily: 'Inter' }}>
                  <span className="material-symbols-outlined text-[#10B981] text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  AI interviews
                </li>
                <li className="flex items-center gap-3 text-[14px] text-[#475569]" style={{ fontFamily: 'Inter' }}>
                  <span className="material-symbols-outlined text-[#10B981] text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  6-dimension scoring
                </li>
                <li className="flex items-center gap-3 text-[14px] text-[#475569]" style={{ fontFamily: 'Inter' }}>
                  <span className="material-symbols-outlined text-[#10B981] text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  Post-hire tracking
                </li>
              </ul>
              <Link to="/login/company" className="w-full py-4 rounded-xl text-[14px] font-semibold text-white bg-[#10B981] hover:bg-[#059669] transition-all duration-200 active:scale-[0.98] text-center" style={{ fontFamily: 'Inter' }}>
                Login as Company
              </Link>
            </div>

            {/* Candidates Portal (Featured) */}
            <div className="group bg-white rounded-2xl p-8 border-2 border-[#6366F1] flex flex-col relative transition-all duration-300 hover:-translate-y-1 z-10 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_10px_10px_-5px_rgba(0,0,0,0.04)] shadow-[0_1px_3px_0_rgba(0,0,0,0.05),0_1px_2px_-1px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(0,0,0,0.04)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6366F1] text-white text-[11px] font-bold px-4 py-1 rounded-full tracking-wider uppercase">
                Most Popular
              </div>
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold tracking-wide uppercase bg-[#EEF2FF] text-[#6366F1]">
                  Free forever
                </span>
              </div>
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] mb-4">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
                </div>
                <h2 className="text-[24px] font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'Inter', lineHeight: 1.4 }}>Candidates</h2>
                <p className="text-[14px] text-[#475569]" style={{ fontFamily: 'Inter', lineHeight: 1.5 }}>Get real feedback after every interview. Practice with AI for free and land your dream job.</p>
              </div>
              <ul className="space-y-3 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-[14px] text-[#475569]" style={{ fontFamily: 'Inter' }}>
                  <span className="material-symbols-outlined text-[#6366F1] text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  Real feedback
                </li>
                <li className="flex items-center gap-3 text-[14px] text-[#475569]" style={{ fontFamily: 'Inter' }}>
                  <span className="material-symbols-outlined text-[#6366F1] text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  Free mock practice
                </li>
                <li className="flex items-center gap-3 text-[14px] text-[#475569]" style={{ fontFamily: 'Inter' }}>
                  <span className="material-symbols-outlined text-[#6366F1] text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  LinkedIn-ready certificates
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl text-[14px] font-semibold text-white bg-[#6366F1] hover:bg-[#4F46E5] transition-all duration-200 shadow-lg shadow-indigo-100 active:scale-[0.98]" style={{ fontFamily: 'Inter' }}>
                Login as Candidate
              </button>
            </div>

            {/* Experts Portal */}
            <div className="group bg-white rounded-2xl p-8 border border-[#E2E8F0] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_10px_10px_-5px_rgba(0,0,0,0.04)] shadow-[0_1px_3px_0_rgba(0,0,0,0.05),0_1px_2px_-1px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(0,0,0,0.04)]">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold tracking-wide uppercase bg-[#FFFBEB] text-[#F59E0B]">
                  Earn $75–$150 per interview
                </span>
              </div>
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#FFFBEB] flex items-center justify-center text-[#F59E0B] mb-4">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>verified</span>
                </div>
                <h2 className="text-[24px] font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'Inter', lineHeight: 1.4 }}>Expert Interviewers</h2>
                <p className="text-[14px] text-[#475569]" style={{ fontFamily: 'Inter', lineHeight: 1.5 }}>Join our FAANG-vetted expert panel. Conduct final-round interviews for top tech firms.</p>
              </div>
              <ul className="space-y-3 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-[14px] text-[#475569]" style={{ fontFamily: 'Inter' }}>
                  <span className="material-symbols-outlined text-[#F59E0B] text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  Premium pay
                </li>
                <li className="flex items-center gap-3 text-[14px] text-[#475569]" style={{ fontFamily: 'Inter' }}>
                  <span className="material-symbols-outlined text-[#F59E0B] text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  Flexible scheduling
                </li>
                <li className="flex items-center gap-3 text-[14px] text-[#475569]" style={{ fontFamily: 'Inter' }}>
                  <span className="material-symbols-outlined text-[#F59E0B] text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  Top companies
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl text-[14px] font-semibold text-[#F59E0B] border-2 border-[#F59E0B] hover:bg-[#FFFBEB] transition-all duration-200 active:scale-[0.98]" style={{ fontFamily: 'Inter' }}>
                Login as Expert
              </button>
            </div>
          </div>

          {/* Footer Help */}
          <div className="mt-16 text-center">
            <p className="text-[14px] text-[#94A3B8]" style={{ fontFamily: 'Inter' }}>
              Need help? <Link to="/contact" className="text-[#004ac6] font-medium hover:underline">Contact Support</Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer Shell (Custom Light Theme) */}
      <footer className="w-full py-[48px] border-t border-[#E2E8F0] bg-[#faf8ff]">
        <div className="max-w-[1440px] mx-auto px-[40px] flex flex-col md:flex-row justify-between items-center gap-[24px]">
          {/* Brand Column */}
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-bold text-[#0F172A]" style={{ fontFamily: 'Inter' }}>HireIQ Intelligence</span>
          </div>
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a className="text-[14px] text-[#94A3B8] hover:text-[#0F172A] transition-colors" style={{ fontFamily: 'Inter' }} href="#">Privacy Policy</a>
            <a className="text-[14px] text-[#94A3B8] hover:text-[#0F172A] transition-colors" style={{ fontFamily: 'Inter' }} href="#">Terms of Service</a>
            <Link to="/security" className="text-[14px] text-[#94A3B8] hover:text-[#0F172A] transition-colors" style={{ fontFamily: 'Inter' }}>Security</Link>
            <a className="text-[14px] text-[#94A3B8] hover:text-[#0F172A] transition-colors" style={{ fontFamily: 'Inter' }} href="#">Status</a>
          </div>
          {/* Copyright */}
          <div className="text-[14px] text-[#94A3B8]" style={{ fontFamily: 'Inter' }}>
            © 2024 HireIQ Intelligence. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
