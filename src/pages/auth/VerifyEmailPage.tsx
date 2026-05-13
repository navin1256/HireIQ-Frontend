<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/auth.service';
import toast from 'react-hot-toast';

const VerifyEmailPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const hasAttempted = useRef(false);

  useEffect(() => {
    const token = searchParams.get('token');

    if (!token) {
      setVerificationStatus('error');
      toast.error('Invalid verification link');
      return;
    }

    if (hasAttempted.current) return;
    hasAttempted.current = true;

    const performVerification = async () => {
      try {
        const response = await AuthService.verifyEmail(token);
        if (response.verified) {
          setVerificationStatus('success');
          toast.success('Email verified successfully!');
        } else {
          setVerificationStatus('error');
        }
      } catch (error) {
        setVerificationStatus('error');
        toast.error('Failed to verify email. Link might be expired.');
      }
    };

    performVerification();
  }, [searchParams]);

  const handleGoToLogin = () => {
    navigate('/login/company');
  };

  if (verificationStatus === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D1A14] relative overflow-hidden" style={{ width: '100vw' }}>
        <div className="z-10 p-8 text-center bg-[#111111] border border-[#1A2A1F] rounded-[20px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] backdrop-blur-sm" style={{ width: '100%', maxWidth: '448px' }}>
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#22D97A] mx-auto mb-6"></div>
          <h2 className="text-2xl font-extrabold text-white mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Verifying your email...
          </h2>
          <p className="text-[#8d90a0]" style={{ fontFamily: 'Inter' }}>
            Please wait while we confirm your email address.
          </p>
        </div>
      </div>
    );
  }

  if (verificationStatus === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D1A14] relative overflow-hidden" style={{ width: '100vw' }}>
        {/* Decorative Ambient Glows */}
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[#22D97A]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-24 right-24 w-[400px] h-[400px] bg-[#22D97A]/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="z-10 p-8 text-center bg-[#111111] border border-[#1A2A1F] rounded-[20px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] backdrop-blur-sm" style={{ width: '100%', maxWidth: '448px' }}>
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-[#22D97A]/10 mb-6">
            <span className="material-symbols-outlined text-[#22D97A] text-4xl">check_circle</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Email Verified!
          </h2>
          <p className="text-[#8d90a0] mb-8 leading-relaxed" style={{ fontFamily: 'Inter' }}>
            Your email has been successfully verified. Your account is now active and ready to go.
          </p>
          <button
            onClick={handleGoToLogin}
            className="w-full py-4 bg-[#22D97A] text-[#0A0F0C] font-bold rounded-[10px] hover:brightness-110 hover:shadow-[0_4px_20px_rgba(34,217,122,0.3)] transition-all active:scale-[0.98]"
            style={{ fontFamily: 'Inter' }}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1A14] relative overflow-hidden" style={{ width: '100vw' }}>
       {/* Decorative Ambient Glows */}
       <div className="absolute bottom-24 right-24 w-[400px] h-[400px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none"></div>
       
      <div className="z-10 p-8 text-center bg-[#111111] border border-[#1A2A1F] rounded-[20px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] backdrop-blur-sm" style={{ width: '100%', maxWidth: '448px' }}>
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-500/10 mb-6">
          <span className="material-symbols-outlined text-red-500 text-4xl">error</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          Verification Failed
        </h2>
        <p className="text-[#8d90a0] mb-8 leading-relaxed" style={{ fontFamily: 'Inter' }}>
          The verification link is invalid or has expired. Please try again or request a new verification email.
        </p>
        <div className="space-y-4">
          <button
            onClick={handleGoToLogin}
            className="w-full py-4 bg-[#1A2A1F] text-white font-bold rounded-[10px] hover:bg-[#2A3A2F] transition-all active:scale-[0.98]"
            style={{ fontFamily: 'Inter' }}
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
=======
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
>>>>>>> 16d3be72ddc1432d79a91c1edef5b0700f908b57
