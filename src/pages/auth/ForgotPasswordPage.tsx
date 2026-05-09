import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-[24px]"
      style={{
        backgroundColor: '#0D1A14',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(34, 217, 122, 0.04) 0%, transparent 50%), linear-gradient(to right, #1A2A1F 1px, transparent 1px), linear-gradient(to bottom, #1A2A1F 1px, transparent 1px)',
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
      }}
    >
      {/* HireIQ Logo Fixed (Top Left) */}
      <div className="fixed top-[48px] left-[48px]">
        <Link to="/" className="text-[24px] font-extrabold text-[#dce3f0] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</Link>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed top-0 right-0 w-[400px] h-[400px] bg-[#22D97A]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-[#22D97A]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      {/* Main Container */}
      {!isSubmitted ? (
        <main 
          className="w-full max-w-[440px] rounded-2xl px-[36px] py-[40px] flex flex-col items-center relative z-10"
          style={{ background: '#111111', border: '1px solid #1A2A1F', boxShadow: '0 30px 80px rgba(0, 0, 0, 0.45)' }}
        >
          {/* Top Icon */}
          <div 
            className="w-[80px] h-[80px] flex items-center justify-center mb-[16px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(34, 217, 122, 0.12) 0%, transparent 70%)' }}
          >
            <span className="material-symbols-outlined text-[48px] text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 0" }}>
              lock_reset
            </span>
          </div>

          {/* Content Header */}
          <div className="text-center mb-[80px]">
            <h1 className="text-[26px] font-extrabold text-white leading-tight mb-[8px]" style={{ fontFamily: 'Inter' }}>
              Reset your password
            </h1>
            <p className="text-[15px] text-[#6B7280]" style={{ fontFamily: 'Inter' }}>
              Enter your email and we'll send you a reset link.
            </p>
          </div>

          {/* Reset Form */}
          <form className="w-full space-y-[24px]" onSubmit={handleSubmit}>
            <div className="space-y-[8px]">
              <label className="text-[12px] font-semibold tracking-[0.05em] text-[#6B7280] uppercase" htmlFor="email" style={{ fontFamily: 'Inter' }}>
                WORK EMAIL
              </label>
              <input 
                className="w-full h-[48px] bg-[#0D0D0D] border border-[#1A2A1F] text-white rounded-[10px] px-[16px] focus:ring-1 focus:ring-[#22D97A] focus:border-[#22D97A] transition-all duration-200 outline-none placeholder:text-[#333A44]" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com" 
                type="email" 
                required
              />
            </div>
            <button 
              className="w-full h-[48px] bg-[#22D97A] hover:bg-[#1fbf6b] active:scale-[0.98] transition-all duration-200 rounded-[10px] text-black text-[15px] font-bold flex items-center justify-center shadow-[0_4px_12px_rgba(34,217,122,0.2)]" 
              type="submit"
              style={{ fontFamily: 'Inter' }}
            >
              Send Reset Link
            </button>
          </form>

          {/* Back Navigation */}
          <div className="mt-[24px]">
            <Link className="flex items-center gap-[8px] text-[14px] text-[#6B7280] hover:text-white transition-colors duration-200" to="/login/company">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to Login
            </Link>
          </div>
        </main>
      ) : (
        <div 
          className="w-full max-w-[440px] rounded-2xl px-[36px] py-[40px] flex flex-col items-center relative z-10"
          style={{ background: '#111111', border: '1px solid #1A2A1F', boxShadow: '0 30px 80px rgba(0, 0, 0, 0.45)' }}
        >
          {/* Success Top Icon */}
          <div 
            className="w-[80px] h-[80px] flex items-center justify-center mb-[16px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(34, 217, 122, 0.12) 0%, transparent 70%)' }}
          >
            <span className="material-symbols-outlined text-[48px] text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 1" }}>
              mark_email_read
            </span>
          </div>

          {/* Success Content Header */}
          <div className="text-center mb-[80px]">
            <h1 className="text-[26px] font-extrabold text-white leading-tight mb-[8px]" style={{ fontFamily: 'Inter' }}>
              Check your inbox
            </h1>
            <p className="text-[15px] text-[#6B7280] max-w-[280px] mx-auto" style={{ fontFamily: 'Inter' }}>
              We've sent a password reset link to <span className="text-white font-medium">{email}</span>.
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#1A2A1F] mb-[24px]"></div>
          
          <p className="text-[14px] text-[#6B7280]" style={{ fontFamily: 'Inter' }}>
            Didn't receive it? 
            <button className="text-[#22D97A] hover:underline font-semibold ml-1">Resend</button>
          </p>
          
          <div className="mt-[48px]">
            <Link className="flex items-center gap-[8px] text-[14px] text-[#6B7280] hover:text-white transition-colors duration-200" to="/login/company">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
