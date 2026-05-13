import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/auth.service';

export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await AuthService.signup({
        fullName,
        companyName,
        email,
        password,
        companySize
      });
      setShowPopup(true);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to sign up. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/login/company'); // Or wherever appropriate
  };

  return (
    <div className="bg-[#0D1A14] text-[#dce3f0] font-body-md overflow-x-hidden" style={{ width: '100vw' }}>
      {/* Verification Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" style={{ width: '100vw' }}>
          <div className="bg-[#0A0F0C] border border-[#22D97A]/30 rounded-2xl p-8 text-center shadow-2xl shadow-[#22D97A]/10" style={{ width: '100%', maxWidth: '448px' }}>
            <div className="w-16 h-16 bg-[#22D97A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-[#22D97A] text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>mail</span>
            </div>
            <h2 className="text-2xl font-bold text-[#dce3f0] mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>Verify your email</h2>
            <p className="text-[#c3c6d7] mb-8" style={{ fontFamily: 'Inter' }}>
              We've sent a verification link to <span className="font-semibold text-white">{email}</span>. Please check your inbox and verify your email before logging in.
            </p>
            <button 
              onClick={handleClosePopup}
              className="w-full py-3 bg-[#22D97A] text-[#0A0F0C] font-semibold rounded-xl hover:brightness-110 transition-all"
            >
              Go to Login
            </button>
          </div>
        </div>
      )}

      <main className="min-h-screen flex flex-col md:flex-row relative">
        {/* Left Side: Signup Form (60%) */}
        <section className="w-full md:w-[60%] min-h-screen flex flex-col items-center justify-center px-[24px] py-[80px] relative z-10 bg-[#0D1A14]">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34, 217, 122, 0.08) 0%, rgba(13, 26, 20, 0) 70%)' }}></div>
          <div className="max-w-[480px] w-full relative z-10">
            {/* Brand Header */}
            <div className="mb-[48px]">
              <Link to="/" className="text-[32px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>HireIQ</Link>
            </div>
            <div className="space-y-[8px] mb-[48px]">
              <h1 className="text-[48px] font-bold text-[#dce3f0] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Start hiring smarter</h1>
              <p className="text-[18px] text-[#c3c6d7]" style={{ fontFamily: 'Inter', lineHeight: 1.6 }}>Free forever. No credit card needed.</p>
            </div>
            
            {/* Google SSO */}
            <button className="w-full h-[52px] flex items-center justify-center gap-[16px] bg-white text-[#0d141d] font-semibold text-[15px] rounded-full border border-white/20 hover:bg-[#c3c6d7] transition-all duration-200 transform active:scale-[0.98]" style={{ fontFamily: 'Inter' }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              Continue with Google
            </button>
            
            <div className="flex items-center my-[48px]">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="px-[16px] text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>or continue with email</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>
            
            {/* Form */}
            <form className="space-y-[24px]" onSubmit={handleSubmit}>
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                <div className="space-y-[8px]">
                  <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase block" style={{ fontFamily: 'Inter' }}>FULL NAME</label>
                  <input required value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full bg-[#0A0F0C] border border-white/10 rounded-xl px-[16px] py-[4px] h-[48px] focus:ring-2 focus:ring-[#22D97A] focus:border-[#22D97A] outline-none transition-all placeholder:text-[#8d90a0]/50" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-[8px]">
                  <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase block" style={{ fontFamily: 'Inter' }}>COMPANY NAME</label>
                  <input required value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full bg-[#0A0F0C] border border-white/10 rounded-xl px-[16px] py-[4px] h-[48px] focus:ring-2 focus:ring-[#22D97A] focus:border-[#22D97A] outline-none transition-all placeholder:text-[#8d90a0]/50" placeholder="TechCorp" type="text" />
                </div>
              </div>
              <div className="space-y-[8px]">
                <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase block" style={{ fontFamily: 'Inter' }}>WORK EMAIL</label>
                <input required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#0A0F0C] border border-white/10 rounded-xl px-[16px] py-[4px] h-[48px] focus:ring-2 focus:ring-[#22D97A] focus:border-[#22D97A] outline-none transition-all placeholder:text-[#8d90a0]/50" placeholder="john@techcorp.com" type="email" />
              </div>
              <div className="space-y-[8px] relative">
                <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase block" style={{ fontFamily: 'Inter' }}>PASSWORD</label>
                <input required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-[#0A0F0C] border border-white/10 rounded-xl px-[16px] py-[4px] h-[48px] focus:ring-2 focus:ring-[#22D97A] focus:border-[#22D97A] outline-none transition-all placeholder:text-[#8d90a0]/50" placeholder="••••••••" type="password" />
                <button className="absolute right-[16px] top-[34px] text-[#c3c6d7] hover:text-[#dce3f0] transition-colors" type="button">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>visibility</span>
                </button>
              </div>
              <div className="space-y-[8px]">
                <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase block" style={{ fontFamily: 'Inter' }}>COMPANY SIZE</label>
                <select value={companySize} onChange={(e) => setCompanySize(e.target.value)} className="w-full bg-[#0A0F0C] border border-white/10 rounded-xl px-[16px] py-[4px] h-[48px] focus:ring-2 focus:ring-[#22D97A] focus:border-[#22D97A] outline-none transition-all appearance-none cursor-pointer">
                  <option value="">Select size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201+">201+ employees</option>
                </select>
              </div>
              <button disabled={isLoading} className={`w-full h-[56px] ${isLoading ? 'bg-[#22D97A]/50' : 'bg-[#22D97A]'} text-[#0A0F0C] font-semibold text-[15px] rounded-full hover:brightness-110 hover:shadow-[0_0_20px_rgba(34,217,122,0.3)] transform transition-all duration-200 active:scale-[0.98] mt-[24px]`} type="submit" style={{ fontFamily: 'Inter' }}>
                {isLoading ? 'Creating Account...' : 'Create Free Account'}
              </button>
            </form>
            
            <p className="mt-[48px] text-center text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter' }}>
              Already have an account? <Link className="text-[#22D97A] hover:underline transition-all" to="/login/company">Log in</Link>
            </p>
          </div>
          
          <footer className="md:absolute md:bottom-0 md:left-0 w-full p-[24px] bg-transparent z-20">
            <div className="flex flex-wrap justify-center md:justify-start gap-[24px]">
              <span className="text-[#c3c6d7] text-[12px] font-semibold tracking-[0.05em] uppercase" style={{ fontFamily: 'Inter' }}>© 2024 HireIQ AI. All rights reserved.</span>
              <a className="text-[#c3c6d7] hover:text-[#22D97A] text-[12px] font-semibold tracking-[0.05em] uppercase transition-colors" href="#" style={{ fontFamily: 'Inter' }}>Privacy Policy</a>
              <a className="text-[#c3c6d7] hover:text-[#22D97A] text-[12px] font-semibold tracking-[0.05em] uppercase transition-colors" href="#" style={{ fontFamily: 'Inter' }}>Terms of Service</a>
            </div>
          </footer>
        </section>

        {/* Right Side: Benefits & Testimonial (40%) */}
        <section className="w-full md:w-[40%] bg-[#0A0F0C] border-l border-white/5 flex flex-col justify-between p-[48px] md:p-[80px] relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#22D97A]/10 blur-[120px] rounded-full"></div>
          <div className="relative z-10 max-w-[400px]">
            <h3 className="text-[32px] font-bold text-[#dce3f0] mb-[80px]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>Join companies hiring smarter</h3>
            <ul className="space-y-[48px]">
              <li className="flex items-start gap-[24px] group">
                <div className="w-10 h-10 rounded-full bg-[#22D97A]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#22D97A]/20 transition-colors">
                  <span className="material-symbols-outlined text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[#dce3f0] mb-[8px]" style={{ fontFamily: 'Inter' }}>3 free AI interviews every month</h4>
                  <p className="text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter', lineHeight: 1.5 }}>Automate your initial screening rounds with our advanced AI assistants.</p>
                </div>
              </li>
              <li className="flex items-start gap-[24px] group">
                <div className="w-10 h-10 rounded-full bg-[#22D97A]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#22D97A]/20 transition-colors">
                  <span className="material-symbols-outlined text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[#dce3f0] mb-[8px]" style={{ fontFamily: 'Inter' }}>Candidates get structured feedback</h4>
                  <p className="text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter', lineHeight: 1.5 }}>Provide immediate value to every applicant, regardless of the outcome.</p>
                </div>
              </li>
              <li className="flex items-start gap-[24px] group">
                <div className="w-10 h-10 rounded-full bg-[#22D97A]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#22D97A]/20 transition-colors">
                  <span className="material-symbols-outlined text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[#dce3f0] mb-[8px]" style={{ fontFamily: 'Inter' }}>Set up in under 10 minutes</h4>
                  <p className="text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter', lineHeight: 1.5 }}>Our intuitive interface gets your first job posting live in record time.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="mt-[80px] relative z-10">
            <div className="p-[48px] rounded-2xl shadow-2xl transform hover:-translate-y-1 transition-transform duration-300" style={{ background: 'rgba(13, 26, 20, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex gap-1 mb-[16px]">
                <span className="material-symbols-outlined text-[#22D97A] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[#22D97A] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[#22D97A] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[#22D97A] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[#22D97A] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-[18px] italic text-[#dce3f0] mb-[48px] leading-relaxed" style={{ fontFamily: 'Inter' }}>
                "HireIQ cut our screening time by 70%. Best hiring decision we made."
              </p>
              <div className="flex items-center gap-[16px]">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#22D97A]/30">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsiXk-HxH26RL6Ky830frj4XwBYo43t27GI6S0Wna_jwL4N3_MNSp_7S6PEARMenIq15jniDBjwortNHMRGJerPwwOc6Uy5tWZ3agXSd_MYOCXTxWiT2dgJOUUkXDOg-BgB3Tpe1vmj3K-9oPS6_qtIw_DPlGbNUSPVyVlHfPJNMusSmQ2BSM62kL7AHykNQaAnDR-KlBvqBA1rH-au4uJobPs77dLYIEbpXhFZo3FPk995fms_7ete6rA0oHRlmUstRkgrWW9idU" alt="Alex, CTO at TechStartup" />
                </div>
                <div>
                  <p className="text-[16px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Alex</p>
                  <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>CTO at TechStartup</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 right-0 w-full h-1/2 opacity-20 pointer-events-none">
            <img className="w-full h-full object-cover mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8yLvnWvZOrI1p_IfO7mN0cPr6qs1ZuZo-LkaRXUEB_uR3ERtadveIh_AeVlVVSUn7xkjZGJf1NjU91-03Z63lcgfaT66VN34_bItgoUKjOIjW5ubLh6C-pO7wcJw7nE8aXormd-z_oJ4Dq9BKxZL61LCVcZ9k-WaS3HRp7q7Vep5o-GcWWAVMGQjb0cfoKqmOI0upi0ZatzNdka6B5R7-28Wy8OcwLZf8pKOTNVwW9A58eYri0ziKOIs29OExEsuUi20AJ71wuu0" alt="Data visualization" />
          </div>
        </section>
      </main>
    </div>
  );
}
