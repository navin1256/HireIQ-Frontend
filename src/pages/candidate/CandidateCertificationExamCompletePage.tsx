import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CandidateCertificationExamCompletePage() {
  const { id } = useParams();

  return (
    <div className="bg-[#0b101e] text-[#f0f4fa] min-h-screen font-body-md dark flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <style>
        {`
          .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
              vertical-align: middle;
          }
          .glass-card {
              background: rgba(19, 27, 46, 0.6);
              backdrop-filter: blur(20px);
              border: 1px solid rgba(255, 255, 255, 0.08);
          }
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>

      {/* Decorative Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-[#5a00c6]/20 to-[#004ac6]/20 blur-[100px] pointer-events-none"></div>
      
      {/* Success Particles (Static representation) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-[#b4c5ff] rounded-full animate-pulse shadow-[0_0_10px_#b4c5ff]"></div>
        <div className="absolute top-[40%] left-[70%] w-3 h-3 bg-[#eaddff] rounded-full animate-pulse shadow-[0_0_15px_#eaddff]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[70%] left-[40%] w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[30%] left-[60%] w-2.5 h-2.5 bg-[#004ac6] rounded-full animate-pulse shadow-[0_0_10px_#004ac6]" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="glass-card w-full max-w-[700px] rounded-[32px] p-10 md:p-14 relative z-10 text-center shadow-2xl">
        
        {/* Success Icon */}
        <div className="mb-8 relative inline-block animate-float">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#006e2f] to-[#2db560] flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(45,181,96,0.4)]">
             <span className="material-symbols-outlined text-white text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#0b101e] rounded-full p-1 border border-[#2db560]/30">
            <div className="w-8 h-8 rounded-full bg-[#131b2e] flex items-center justify-center border border-white/10">
               <span className="material-symbols-outlined text-[#b4c5ff] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-h2 text-[36px] md:text-[42px] font-bold text-white mb-4 leading-tight">
          Exam Completed
        </h1>
        <p className="text-[#c3c6d7] text-[16px] md:text-[18px] mb-10 max-w-[400px] mx-auto">
          You've successfully submitted the Senior React Developer certification exam {id ? `(${id})` : ''}.
        </p>

        {/* Results Card */}
        <div className="bg-[#131b2e] border border-white/10 rounded-2xl p-6 mb-10 text-left">
          <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
             <h2 className="font-h3 text-[18px] font-bold text-white">Preliminary Results</h2>
             <span className="bg-[#eaddff]/10 text-[#eaddff] px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider border border-[#eaddff]/20">Pending Manual Review</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-[#0b101e] p-4 rounded-xl border border-white/5">
                <p className="text-[12px] text-[#8d90a0] font-bold uppercase tracking-wider mb-1">Coding Score</p>
                <div className="flex items-baseline gap-2">
                   <span className="text-[28px] font-bold text-white">94</span>
                   <span className="text-[14px] text-[#8d90a0]">/ 100</span>
                </div>
             </div>
             
             <div className="bg-[#0b101e] p-4 rounded-xl border border-white/5">
                <p className="text-[12px] text-[#8d90a0] font-bold uppercase tracking-wider mb-1">Architecture Score</p>
                <div className="flex items-baseline gap-2">
                   <span className="text-[28px] font-bold text-white">88</span>
                   <span className="text-[14px] text-[#8d90a0]">/ 100</span>
                </div>
             </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5">
             <div className="flex items-start gap-4">
               <div className="bg-[#004ac6]/20 p-2 rounded-full mt-1">
                 <span className="material-symbols-outlined text-[#b4c5ff] text-[20px]">schedule</span>
               </div>
               <div>
                  <h4 className="font-bold text-white text-[15px] mb-1">What happens next?</h4>
                  <p className="text-[14px] text-[#c3c6d7] leading-relaxed">
                    Our expert panel will review your system design recording and final implementation. Final results and your verifiable badge will be issued within 48 hours.
                  </p>
               </div>
             </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/candidate/certifications" className="py-4 px-8 rounded-full bg-white text-[#131b2e] font-bold text-[15px] hover:bg-[#b4c5ff] transition-colors">
             Return to Catalog
          </Link>
          <Link to="/candidate/certifications/my-certs" className="py-4 px-8 rounded-full bg-[#131b2e] text-white font-bold text-[15px] border border-white/20 hover:bg-white/10 transition-colors">
             View My Certificates
          </Link>
        </div>

      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-50">
         <span className="font-h3 text-[14px] font-bold tracking-tight">HireIQ</span>
         <span className="w-1 h-1 rounded-full bg-white"></span>
         <span className="text-[12px]">Certification Authority</span>
      </div>

    </div>
  );
}
