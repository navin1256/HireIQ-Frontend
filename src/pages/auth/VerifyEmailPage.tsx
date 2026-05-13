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