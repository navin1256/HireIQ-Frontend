import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function AIVideoInterviewPage() {
  const { interviewId } = useParams<{ interviewId: string }>();
  const [timeLeft, setTimeLeft] = useState(107); // 1:47 in seconds

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercentage = (timeLeft / 120) * 100; // Assuming 2 mins max
  const dashoffset = 175.9 - (175.9 * progressPercentage) / 100;

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen font-['Inter'] antialiased" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #F5F7FA 100%)' }}>
      <style>
        {`
          .pulse-red {
              box-shadow: 0 0 0 0 rgba(186, 26, 26, 0.4);
              animation: pulse-red-effect 2s infinite;
          }
          @keyframes pulse-red-effect {
              0% { box-shadow: 0 0 0 0 rgba(186, 26, 26, 0.4); }
              70% { box-shadow: 0 0 0 4px rgba(186, 26, 26, 0); }
              100% { box-shadow: 0 0 0 0 rgba(186, 26, 26, 0); }
          }
          .waveform-bar {
              animation: waveform-height 1.2s ease-in-out infinite alternate;
          }
          @keyframes waveform-height {
              0% { height: 4px; }
              100% { height: 16px; }
          }
        `}
      </style>

      {/* TopNavBar */}
      <header className="bg-[#f8f9fa]/80 backdrop-blur-md border-b border-[#c6c6cd] sticky top-0 z-[100] w-full h-16">
        <div className="flex justify-between items-center w-full px-[24px] h-full max-w-[1120px] mx-auto">
          <div className="flex items-center gap-[24px]">
            <span className="text-[20px] leading-[1.4] font-extrabold text-[#000000]">HireIQ</span>
            <div className="h-4 w-px bg-[#c6c6cd] mx-2"></div>
            <div className="flex flex-col">
              <span className="text-[12px] leading-[1] font-semibold text-[#45464c] uppercase tracking-wider">Senior React Developer at TechCorp</span>
              <div className="flex gap-1 mt-1">
                <div className="w-3 h-1 bg-[#006d39] rounded-full"></div>
                <div className="w-3 h-1 bg-[#006d39] rounded-full"></div>
                <div className="w-3 h-1 bg-[#c6c6cd] rounded-full"></div>
                <div className="w-3 h-1 bg-[#c6c6cd] rounded-full"></div>
                <div className="w-3 h-1 bg-[#c6c6cd] rounded-full"></div>
                <span className="text-[12px] leading-[1] font-semibold text-[#45464c] ml-2 leading-none">Question 2 of 5</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-[24px]">
            <nav className="flex gap-[24px] mr-[48px]">
              <a className="text-[#45464c] text-[16px] leading-[1.5] hover:text-[#000000] transition-colors" href="#">Introduction</a>
              <a className="text-[#45464c] text-[16px] leading-[1.5] hover:text-[#000000] transition-colors" href="#">Question 1</a>
              <a className="text-[#006d39] font-bold border-b-2 border-[#006d39] pb-1" href="#">Question 2</a>
              <a className="text-[#45464c] text-[16px] leading-[1.5] hover:text-[#000000] transition-colors" href="#">Question 3</a>
              <a className="text-[#45464c] text-[16px] leading-[1.5] hover:text-[#000000] transition-colors" href="#">Summary</a>
            </nav>
            <div className="flex gap-[12px]">
              <button className="px-[12px] py-[4px] text-[14px] leading-[1] font-bold text-[#45464c] border border-[#c6c6cd] rounded-lg hover:bg-[#f3f4f5] transition-all">Device Test</button>
              <button className="px-[12px] py-[4px] text-[14px] leading-[1] font-bold bg-[#000000] text-[#ffffff] rounded-lg hover:opacity-80 transition-all">Finish Session</button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[960px] mx-auto px-[24px] py-[48px] mb-[80px]">
        {/* Video Section */}
        <section className="relative aspect-video bg-[#111827] rounded-[20px] overflow-hidden pulse-red border-2 border-[#ba1a1a]/20 mb-[24px]">
          <img 
            alt="Candidate focused on interview" 
            className="w-full h-full object-cover opacity-80 grayscale-[0.2]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcqOTbP6RpsRsGwZSuDjaZGUrFqkjuCEcY4Iq01pLWMvzxHehIy45VjipKv3CXQU29_CW27xJktU8Q3NYT6gqgx4ilWXDOJKw0yUe6AZGzRfW7HyEv94XO8NVqvFCoqB-MkBnwyCUbRLyhz5erhIpbm-Q2jDgc6mxGDcr9MvgQk80NmezeP-_Piw_O7dCwsQwo1Gc7qUsET3ltfsHY4FAVHP8WjGU5WScC38pMHZLEtZRvADjZ1g16g8Tzg3V7IQO-_63bJ6rqzCc"
          />
          
          {/* AI Assistant Overlay */}
          <div className="absolute top-[12px] left-[12px] flex items-center gap-[4px] px-[12px] py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <div className="relative flex items-center justify-center w-2 h-2">
              <div className="absolute w-2 h-2 bg-[#006d39] rounded-full animate-ping"></div>
              <div className="relative w-2 h-2 bg-[#006d39] rounded-full"></div>
            </div>
            <span className="text-white text-[10px] leading-[1] font-semibold tracking-widest uppercase">HireIQ AI Assistant</span>
          </div>

          {/* REC Indicator */}
          <div className="absolute top-[12px] right-[12px] flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <div className="w-2 h-2 bg-[#ba1a1a] rounded-full animate-pulse"></div>
            <span className="text-white text-[10px] leading-[1] font-semibold tracking-widest">REC</span>
          </div>

          {/* Camera Status */}
          <div className="absolute bottom-[12px] left-[12px] flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
            <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>videocam</span>
            <span className="text-white text-[10px] leading-[1] font-semibold">HD Camera • Active</span>
          </div>

          {/* Countdown Timer */}
          <div className="absolute bottom-[12px] right-[12px]">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle cx="32" cy="32" fill="none" r="28" stroke="rgba(255,255,255,0.1)" strokeWidth="4"></circle>
                <circle cx="32" cy="32" fill="none" r="28" stroke="#3b82f6" strokeDasharray="175.9" strokeDashoffset={dashoffset} strokeLinecap="round" strokeWidth="4"></circle>
              </svg>
              <span className="absolute text-white text-[14px] leading-[1] font-bold">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </section>

        {/* Question Card */}
        <div className="bg-[#ffffff] rounded-[18px] border border-[#c6c6cd] p-[24px] shadow-sm transition-all hover:shadow-md">
          <div className="flex items-start justify-between mb-[12px]">
            <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-[#3b82f6] rounded-full text-[11px] font-bold uppercase tracking-wider border border-blue-100">
              AI Follow-up Question
            </span>
            <div className="flex items-center gap-1">
              <div className="waveform-bar w-1 bg-blue-400 rounded-full" style={{ animationDelay: '0s' }}></div>
              <div className="waveform-bar w-1 bg-blue-500 rounded-full" style={{ animationDelay: '0.1s' }}></div>
              <div className="waveform-bar w-1 bg-blue-600 rounded-full" style={{ animationDelay: '0.2s' }}></div>
              <div className="waveform-bar w-1 bg-blue-400 rounded-full" style={{ animationDelay: '0.3s' }}></div>
              <span className="text-[11px] text-[#45464c] text-[12px] leading-[1] font-semibold ml-2">Speech clarity detected</span>
            </div>
          </div>
          <h2 className="text-[30px] leading-[1.2] tracking-[-0.01em] font-bold text-[#191c1d] mb-[12px] leading-tight">
            Can you walk me through how you would design a scalable REST API for a high-traffic application?
          </h2>
          <p className="text-[16px] leading-[1.5] font-normal text-[#45464c] italic border-l-4 border-[#c6c6cd] pl-4 mb-[48px]">
            "Take your time. Think before answering. The AI is listening."
          </p>
          <div className="flex items-center justify-between mt-[48px]">
            <button className="px-[24px] py-[12px] bg-[#000000] text-[#ffffff] rounded-xl text-[14px] leading-[1] font-bold flex items-center gap-2 hover:opacity-90 transition-transform active:scale-95 shadow-lg">
              I’ve Finished My Answer 
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
            </button>
            <button className="px-[24px] py-[12px] border border-[#c6c6cd] text-[#191c1d] text-[14px] leading-[1] font-bold rounded-xl hover:bg-[#f3f4f5] transition-all">
              Skip Question
            </button>
          </div>
        </div>
      </main>

      {/* Fixed Proctoring Bar */}
      <footer className="fixed bottom-0 left-0 w-full bg-[#f3f4f5] border-t border-[#c6c6cd] z-50">
        <div className="flex justify-between items-center w-full px-[48px] py-[12px] h-14">
          <div className="flex items-center gap-[12px]">
            <span className="material-symbols-outlined text-[#45464c] text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>shield</span>
            <span className="text-[14px] leading-[1.5] font-normal text-[#45464c]">Secure proctored interview</span>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="w-2 h-2 bg-[#006d39] rounded-full"></div>
            <span className="text-[14px] leading-[1.5] text-[#006d39] font-semibold">Answer naturally and in your own words</span>
          </div>
          <div className="hidden sm:flex items-center gap-[48px]">
            <span className="text-[12px] leading-[1] font-semibold text-[#45464c] uppercase tracking-widest text-[10px]">© 2024 AI Interview Proctoring System</span>
            <div className="flex gap-[24px]">
              <a className="text-[12px] leading-[1] font-semibold text-[10px] text-[#45464c] hover:underline transition-all" href="#">Privacy Protocol</a>
              <a className="text-[12px] leading-[1] font-semibold text-[10px] text-[#45464c] hover:underline transition-all" href="#">Technical Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
