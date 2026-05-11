import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CandidateExamCompletePage() {
  const { certId } = useParams();

  return (
    <div className="bg-[#0d141d] text-[#dce3f0] min-h-screen flex items-center justify-center p-[24px] selection:bg-[#b4c5ff] selection:text-[#002a78] overflow-x-hidden font-['Inter'] relative z-0">
      <style>
        {`
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
          .glass-card {
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
          }
          .score-ring {
            background: conic-gradient(#10b981 87%, #1e293b 0);
            border-radius: 50%;
          }
          .inner-ring {
            background: #0d141d;
            border-radius: 50%;
          }
        `}
      </style>

      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#b4c5ff]/10 blur-[150px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#0566d9]/10 blur-[150px] rounded-full"></div>
      </div>

      {/* Main Navigation Shell (TopAppBar) */}
      <header className="fixed top-0 w-full flex justify-between items-center px-[48px] py-[16px] max-w-[1280px] mx-auto border-b border-white/10 bg-[#0d141d]/70 backdrop-blur-xl z-50">
        <div className="flex items-center gap-[8px]">
          <span className="text-[32px] leading-[1.3] font-bold font-extrabold text-[#b4c5ff] tracking-tight font-['Plus_Jakarta_Sans']">DevCert Elite</span>
        </div>
        <div className="flex items-center gap-[24px]">
          <div className="flex items-center gap-[16px]">
            <span className="material-symbols-outlined text-[#c3c6d7] text-[16px] leading-[1.5] font-normal hover:text-[#b4c5ff] transition-colors duration-200 cursor-pointer">timer</span>
            <span className="material-symbols-outlined text-[#c3c6d7] text-[16px] leading-[1.5] font-normal hover:text-[#b4c5ff] transition-colors duration-200 cursor-pointer">help_outline</span>
          </div>
          <button className="bg-[#2563eb] text-[#eeefff] px-[16px] py-[8px] rounded-full text-[15px] leading-[1] font-semibold hover:brightness-110 transition-all">Finish Exam</button>
        </div>
      </header>

      {/* Content Canvas: Success Modal */}
      <main className="w-full max-w-[560px] relative z-10 pt-[80px]">
        <div className="bg-[#111111] rounded-[28px] border border-white/10 shadow-2xl overflow-hidden p-[48px] flex flex-col items-center text-center relative">
          
          {/* Celebration Decorations */}
          <div className="absolute -top-12 -left-12 text-[#b4c5ff] opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
          </div>
          <div className="absolute -bottom-8 -right-8 text-[#0566d9] opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-[100px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </div>

          {/* Success Indicator */}
          <div className="relative w-40 h-40 flex items-center justify-center mb-[24px]">
            <div className="score-ring w-full h-full absolute"></div>
            <div className="inner-ring w-[88%] h-[88%] absolute flex flex-col items-center justify-center">
              <span className="text-[64px] leading-[1.1] tracking-[-0.02em] font-extrabold text-[40px] text-[#b4c5ff] font-['Plus_Jakarta_Sans']">87</span>
              <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#c3c6d7]">OUT OF 100</span>
            </div>
          </div>

          {/* Success Messaging */}
          <div className="mb-[48px]">
            <h2 className="text-[48px] leading-[1.2] tracking-[-0.01em] font-bold text-[#dce3f0] mb-[8px] font-['Plus_Jakarta_Sans']">Passed! 🎉</h2>
            <p className="text-[18px] leading-[1.6] font-normal text-[#c3c6d7]">You performed better than <span className="text-[#b4c5ff] font-bold">82%</span> of candidates.</p>
          </div>

          {/* Certificate Preview */}
          <div className="w-full bg-white rounded-xl p-[24px] shadow-lg mb-[48px] transform hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#b4c5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex justify-between items-start mb-[16px]">
              <div className="text-left">
                <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px] text-slate-500 uppercase tracking-widest mb-1">OFFICIAL CERTIFICATION</p>
                <h3 className="text-[32px] leading-[1.3] font-bold text-[20px] text-slate-900 leading-tight font-['Plus_Jakarta_Sans']">React Developer</h3>
              </div>
              <span className="material-symbols-outlined text-[#b4c5ff] scale-125" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            
            <div className="flex items-end justify-between">
              <div className="text-left">
                <p className="text-[16px] leading-[1.5] font-normal text-slate-600 text-sm">Issued to</p>
                <p className="text-[32px] leading-[1.3] font-bold text-slate-900 text-lg font-['Plus_Jakarta_Sans']">Alex Thompson</p>
              </div>
              <img alt="Alex Thompson" className="w-10 h-10 rounded-full border-2 border-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP5jLC9CTuvMaiOTojffqDnL9xbd29faCZqa_9kexJQOlT8PaAl8uzZpt29kUAtYTRdsCUPEhJkKVozB3--AJL6Fzc1bmsHU6ViEhbJ8NcCQFy4xX72M_H22jHQghrxlfBXVoIMW_T8jNeeAKxX65L7iRZYlEuHpOegquIt4QhHI3FZ3-eREE5UderbKRVLseImtzd-QAYQoD6KPh4Xk4atEytY63n446p3706-JXKh_B2gHIATZumPe84_0pDjNEth3iMGBHzke0"/>
            </div>
          </div>

          {/* Actions */}
          <div className="w-full flex flex-col gap-[16px] mb-[24px]">
            <button className="w-full bg-[#10b981] text-white py-[16px] rounded-full text-[15px] leading-[1] font-semibold hover:bg-[#059669] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/20">
              Download Certificate
            </button>
            <button className="w-full bg-transparent border border-[#0566d9] text-[#adc6ff] text-[15px] leading-[1] font-semibold py-[16px] rounded-full hover:bg-[#0566d9]/10 transition-all flex items-center justify-center gap-[8px]">
              <span className="material-symbols-outlined text-sm">share</span>
              Add to LinkedIn
            </button>
          </div>
          
          {/* Navigation Link */}
          <Link className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors flex items-center gap-[8px]" to="/candidate/dashboard">
            <span className="material-symbols-outlined text-[14px]">arrow_back</span>
            Return to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
