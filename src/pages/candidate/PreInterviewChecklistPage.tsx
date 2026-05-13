import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PreInterviewChecklistPage() {
  const { interviewId } = useParams<{ interviewId: string }>();
  const [browserChecked, setBrowserChecked] = useState(true);
  const [connectionChecked, setConnectionChecked] = useState(true);
  const [environmentChecked, setEnvironmentChecked] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  return (
    <div className="bg-[#f8f9fa] font-['Inter'] text-[#191c1d] antialiased min-h-screen flex flex-col">
      <style>
        {`
          .mic-bar {
              width: 3px;
              background-color: #22D97A;
              border-radius: 99px;
              animation: bounce 1.2s ease-in-out infinite;
          }
          @keyframes bounce {
              0%, 100% { height: 4px; }
              50% { height: 16px; }
          }
          .shimmer {
              background: linear-gradient(90deg, #f3f4f5 25%, #e1e3e4 50%, #f3f4f5 75%);
              background-size: 200% 100%;
              animation: shimmer 2s infinite linear;
          }
          @keyframes shimmer {
              from { background-position: 200% 0; }
              to { background-position: -200% 0; }
          }
        `}
      </style>

      {/* Top Navigation Anchor */}
      <nav className="bg-[#ffffff] border-b border-[#c6c6cd] sticky top-0 z-50">
        <div className="flex justify-between items-center px-[24px] py-[12px] max-w-[1120px] mx-auto w-full">
          <span className="text-[20px] leading-[1.4] font-semibold text-[#000000] tracking-tight">HireIQ</span>
          <div className="hidden md:flex items-center gap-[24px]">
            <a className="text-[#45464c] hover:text-[#000000] transition-colors text-[16px]" href="#">My Applications</a>
            <a className="text-[#45464c] hover:text-[#000000] transition-colors text-[16px]" href="#">Interviews</a>
            <a className="text-[#45464c] hover:text-[#000000] transition-colors text-[16px]" href="#">Resources</a>
          </div>
          <div className="flex items-center gap-[12px]">
            <span className="material-symbols-outlined text-[#000000] text-[28px]" style={{ fontVariationSettings: "'FILL' 0" }}>account_circle</span>
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="max-w-[560px] mx-auto w-full px-[24px] py-[80px] flex-grow">
        {/* Header & Progress */}
        <header className="text-center mb-[48px]">
          <div className="inline-flex items-center gap-[4px] px-[12px] py-[4px] bg-[#e7e8e9] rounded-full mb-[24px]">
            <span className="w-2 h-2 rounded-full bg-[#006d39]"></span>
            <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#005229]">Step 1 of 2: Setup</span>
          </div>
          <h1 className="text-[30px] leading-[1.2] tracking-[-0.01em] font-bold text-[#000000] mb-[4px]">Almost ready to begin</h1>
          <p className="text-[16px] text-[#45464c]">Let's ensure your environment is perfect for your interview with Acme Corp.</p>
        </header>

        {/* Interview Context Grid */}
        <section className="grid grid-cols-3 gap-[12px] mb-[48px]">
          <div className="bg-[#f3f4f5] rounded-lg p-[12px] border border-[#c6c6cd]/30">
            <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#76777d] mb-[4px]">QUESTIONS</p>
            <p className="text-[16px] font-bold text-[#000000]">5 Total</p>
          </div>
          <div className="bg-[#f3f4f5] rounded-lg p-[12px] border border-[#c6c6cd]/30">
            <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#76777d] mb-[4px]">TIME</p>
            <p className="text-[16px] font-bold text-[#000000]">20 Mins</p>
          </div>
          <div className="bg-[#f3f4f5] rounded-lg p-[12px] border border-[#c6c6cd]/30">
            <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#76777d] mb-[4px]">FORMAT</p>
            <p className="text-[16px] font-bold text-[#000000]">Asynchronous</p>
          </div>
        </section>

        {/* Setup Card */}
        <div className="bg-[#ffffff] rounded-xl border border-[#c6c6cd] shadow-sm overflow-hidden mb-[24px]">
          {/* Camera Check */}
          <div className="p-[24px] border-b border-[#c6c6cd]">
            <div className="flex items-center justify-between mb-[24px]">
              <div className="flex items-center gap-[12px]">
                <span className="material-symbols-outlined text-[#000000]" style={{ fontVariationSettings: "'FILL' 0" }}>videocam</span>
                <h3 className="text-[20px] leading-[1.4] font-semibold">Camera Check</h3>
              </div>
              <span className="flex items-center gap-[4px] text-[#006d39] text-[14px] leading-[1] font-bold">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Active
              </span>
            </div>
            <div className="relative aspect-video bg-[#d9dadb] rounded-lg overflow-hidden group">
              <img className="w-full h-full object-cover" alt="Camera preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrG__FD3TvLB6q59v3FFEmZDOKpuzSiESG5ye_wRx7zN8OWw8QH_recciNGESCeAOfzISbAOnobGlqC1MstP29ZaSHlba6oYExJhH1JgSqg77MgmFwNjS6nRD4KuylxODqyFarTWEJeo2qhH5ljzi1TMimGc8DhWQVkVMVs6ro5fSaT4hgZnDvvQZXW81q_lkRUKTGynRs-ctcRfzeZYrbmoGWK1Ro5lR_l9zlZTSKyMBN_Hi7Ywm_zqollj1hsfUc4zIUPX0JXnY" />
              <div className="absolute bottom-[8px] left-[8px] bg-[#000000]/60 backdrop-blur px-[12px] py-[4px] rounded text-[#ffffff] text-[11px] flex items-center gap-[8px]">
                <span className="w-2 h-2 rounded-full bg-[#006d39] animate-pulse"></span>
                HD Stream Active
              </div>
            </div>
          </div>

          {/* Microphone Check */}
          <div className="p-[24px] border-b border-[#c6c6cd]">
            <div className="flex items-center justify-between mb-[12px]">
              <div className="flex items-center gap-[12px]">
                <span className="material-symbols-outlined text-[#000000]" style={{ fontVariationSettings: "'FILL' 0" }}>mic</span>
                <h3 className="text-[20px] leading-[1.4] font-semibold">Microphone</h3>
              </div>
              <div className="flex items-end gap-[2px] h-4">
                <div className="mic-bar" style={{ animationDelay: '0.1s' }}></div>
                <div className="mic-bar" style={{ animationDelay: '0.3s' }}></div>
                <div className="mic-bar" style={{ animationDelay: '0.2s' }}></div>
                <div className="mic-bar" style={{ animationDelay: '0.5s' }}></div>
                <div className="mic-bar" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
            <p className="text-[14px] text-[#45464c]">Standard Input (Built-in Microphone)</p>
          </div>

          {/* Browser & Environment */}
          <div className="p-[24px]">
            <div className="flex items-center gap-[12px] mb-[24px]">
              <span className="material-symbols-outlined text-[#000000]" style={{ fontVariationSettings: "'FILL' 0" }}>language</span>
              <h3 className="text-[20px] leading-[1.4] font-semibold">Requirements</h3>
            </div>
            <ul className="space-y-[12px]">
              <li className="flex items-start gap-[12px]">
                <div className="mt-1 flex-shrink-0">
                  <input 
                    checked={browserChecked} 
                    onChange={(e) => setBrowserChecked(e.target.checked)}
                    className="rounded border-[#c6c6cd] text-[#006d39] focus:ring-[#006d39] cursor-pointer" 
                    id="check-browser" 
                    type="checkbox" 
                  />
                </div>
                <label className="text-[16px] text-[#191c1d] cursor-pointer" htmlFor="check-browser">Using supported browser (Chrome, Safari, Edge)</label>
              </li>
              <li className="flex items-start gap-[12px]">
                <div className="mt-1 flex-shrink-0">
                  <input 
                    checked={connectionChecked} 
                    onChange={(e) => setConnectionChecked(e.target.checked)}
                    className="rounded border-[#c6c6cd] text-[#006d39] focus:ring-[#006d39] cursor-pointer" 
                    id="check-stable" 
                    type="checkbox" 
                  />
                </div>
                <label className="text-[16px] text-[#191c1d] cursor-pointer" htmlFor="check-stable">Stable internet connection (5Mbps+ recommended)</label>
              </li>
              <li className="flex items-start gap-[12px]">
                <div className="mt-1 flex-shrink-0">
                  <input 
                    checked={environmentChecked} 
                    onChange={(e) => setEnvironmentChecked(e.target.checked)}
                    className="rounded border-[#c6c6cd] text-[#006d39] focus:ring-[#006d39] cursor-pointer" 
                    id="check-quiet" 
                    type="checkbox" 
                  />
                </div>
                <label className="text-[16px] text-[#191c1d] cursor-pointer" htmlFor="check-quiet">I am in a quiet, well-lit environment</label>
              </li>
            </ul>
          </div>
        </div>

        {/* Integrity Notice Card */}
        <div className="bg-[#f3f4f5] rounded-xl p-[24px] border border-[#c6c6cd] mb-[48px]">
          <div className="flex items-start gap-[12px]">
            <span className="material-symbols-outlined text-[#76777d] mt-[4px]" style={{ fontVariationSettings: "'FILL' 0" }}>policy</span>
            <div>
              <h4 className="text-[16px] font-bold text-[#000000] mb-[4px]">Privacy &amp; Integrity Notice</h4>
              <p className="text-[14px] text-[#45464c] mb-[24px] leading-relaxed">
                To maintain a fair evaluation process, this interview uses AI proctoring. We will record audio and video to verify identity and detect potential external assistance. Data is encrypted and only accessible by authorized recruiters.
              </p>
              <div className="flex items-center gap-[12px]">
                <input 
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  className="rounded border-[#c6c6cd] text-[#006d39] focus:ring-[#006d39] cursor-pointer" 
                  id="consent" 
                  type="checkbox" 
                />
                <label className="text-[14px] font-bold text-[#000000] cursor-pointer" htmlFor="consent">I consent to the recording and proctoring terms</label>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Action */}
        <Link 
          to={`/interviews/live/${interviewId || 'demo'}`} 
          className={`w-full py-[24px] bg-[#000000] text-[#ffffff] text-[16px] font-bold rounded-xl hover:opacity-90 transition-all duration-200 shadow-lg shadow-[#000000]/10 flex items-center justify-center gap-[12px] group ${(!browserChecked || !connectionChecked || !environmentChecked || !consentChecked) ? 'opacity-50 pointer-events-none' : ''}`}
        >
          Start Interview
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
        </Link>
        <p className="text-center mt-[24px] text-[14px] text-[#76777d]">
          Need help? <a className="text-[#000000] underline decoration-[#c6c6cd]" href="#">Visit our Help Center</a>
        </p>
      </main>

      {/* Footer Content Anchor */}
      <footer className="bg-[#f8f9fa] border-t border-[#c6c6cd] mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-[24px] py-[48px] max-w-[1120px] mx-auto w-full gap-[8px]">
          <span className="text-[12px] leading-[1] uppercase tracking-[0.05em] font-semibold text-[#006d39]">HireIQ</span>
          <div className="flex gap-[24px]">
            <a className="text-[14px] text-[#45464c] hover:text-[#000000] transition-colors" href="#">Privacy Policy</a>
            <a className="text-[14px] text-[#45464c] hover:text-[#000000] transition-colors" href="#">Terms of Service</a>
            <a className="text-[14px] text-[#45464c] hover:text-[#000000] transition-colors" href="#">Help Center</a>
          </div>
          <p className="text-[14px] text-[#45464c]">© 2024 HireIQ. All rights reserved. Powered by HireIQ.</p>
        </div>
      </footer>
    </div>
  );
}
