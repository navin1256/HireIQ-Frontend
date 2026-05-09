import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function CalculatorSection() {
  const [hiresPerMonth, setHiresPerMonth] = useState(5);
  const [costPerHire, setCostPerHire] = useState(8500);
  const [hrHours, setHrHours] = useState(40);

  // Simple mock calculation based on the static HTML provided
  // (In a real app, this would use a more complex formula)
  const annualSavings = Math.round((hiresPerMonth * costPerHire * hrHours) / 4); // Dummy math
  const formattedSavings = annualSavings.toLocaleString();

  return (
    <section className="max-w-[820px] mx-auto">
      <div className="glass rounded-2xl p-[48px] shadow-2xl relative overflow-hidden">
        {/* Subtle internal glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#b4c5ff]/10 blur-[60px]"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-[80px] mb-[80px] relative z-10">
          {/* Sliders */}
          <div className="space-y-[80px]">
            <div className="space-y-[24px]">
              <div className="flex justify-between items-center">
                <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>Engineering hires per month</label>
                <span className="text-[32px] font-bold text-[#b4c5ff]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>{hiresPerMonth}</span>
              </div>
              <input 
                className="w-full h-[6px] bg-white/10 rounded-[3px] appearance-none cursor-pointer accent-[#b4c5ff]" 
                max="50" min="1" type="range" 
                value={hiresPerMonth}
                onChange={(e) => setHiresPerMonth(parseInt(e.target.value))}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>
            <div className="space-y-[24px]">
              <div className="flex justify-between items-center">
                <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>Current cost per hire</label>
                <span className="text-[32px] font-bold text-[#b4c5ff]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>${costPerHire.toLocaleString()}</span>
              </div>
              <input 
                className="w-full h-[6px] bg-white/10 rounded-[3px] appearance-none cursor-pointer accent-[#b4c5ff]" 
                max="25000" min="1000" step="500" type="range" 
                value={costPerHire}
                onChange={(e) => setCostPerHire(parseInt(e.target.value))}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>
            <div className="space-y-[24px]">
              <div className="flex justify-between items-center">
                <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>HR hours spent per hire</label>
                <span className="text-[32px] font-bold text-[#b4c5ff]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>{hrHours}</span>
              </div>
              <input 
                className="w-full h-[6px] bg-white/10 rounded-[3px] appearance-none cursor-pointer accent-[#b4c5ff]" 
                max="120" min="10" type="range" 
                value={hrHours}
                onChange={(e) => setHrHours(parseInt(e.target.value))}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Results Display */}
        <div className="border-t border-white/10 pt-[80px] mt-[24px] relative z-10">
          <div className="text-center mb-[80px]">
            <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] mb-[8px] uppercase" style={{ fontFamily: 'Inter' }}>ESTIMATED ANNUAL IMPACT</p>
            <h2 className="text-[64px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#b4c5ff] to-[#d2bbff] mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              You save: $418,212/year
            </h2>
            <div className="inline-flex items-center gap-[8px] px-[24px] py-[8px] rounded-full bg-[#8343f4]/20 text-[#d2bbff] border border-[#d2bbff]/20">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
              <span className="text-[15px] font-semibold" style={{ fontFamily: 'Inter' }}>ROI: 23,279%</span>
            </div>
          </div>

          {/* Metric Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-[80px]">
            <div className="bg-[#151c25] p-[24px] rounded-xl border border-white/5 text-center">
              <span className="material-symbols-outlined text-[#b4c5ff] mb-[16px]">schedule</span>
              <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] mb-[8px] uppercase" style={{ fontFamily: 'Inter' }}>TIME SAVED</p>
              <p className="text-[32px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>2,400 hrs</p>
            </div>
            <div className="bg-[#151c25] p-[24px] rounded-xl border border-white/5 text-center">
              <span className="material-symbols-outlined text-[#b4c5ff] mb-[16px]">speed</span>
              <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] mb-[8px] uppercase" style={{ fontFamily: 'Inter' }}>SPEED BOOST</p>
              <p className="text-[32px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>3.4x faster</p>
            </div>
            <div className="bg-[#151c25] p-[24px] rounded-xl border border-white/5 text-center">
              <span className="material-symbols-outlined text-[#b4c5ff] mb-[16px]">payments</span>
              <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] mb-[8px] uppercase" style={{ fontFamily: 'Inter' }}>COST / HIRE</p>
              <p className="text-[32px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>-$2,140</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[24px]">
            <button className="w-full md:w-auto px-[80px] py-[24px] bg-gradient-to-r from-[#2563eb] to-[#8343f4] text-white rounded-full text-[15px] font-semibold shadow-lg shadow-[#2563eb]/20 hover:scale-[1.02] active:scale-95 transition-all" style={{ fontFamily: 'Inter' }}>
              Start saving today — Join Free
            </button>
            <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] opacity-60 uppercase" style={{ fontFamily: 'Inter' }}>Based on standard HireIQ Professional implementation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodologyAccordion() {
  return (
    <section className="max-w-[820px] mx-auto mt-[80px] pt-[80px]">
      <h3 className="text-[32px] font-bold text-[#dce3f0] text-center mb-[80px]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>Our methodology</h3>
      <div className="space-y-[24px]">
        <div className="glass p-[24px] rounded-xl cursor-pointer group">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[24px]">
              <div className="w-10 h-10 rounded-lg bg-[#232a34] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#b4c5ff]">engineering</span>
              </div>
              <span className="text-[15px] font-semibold text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Engineering Salary Assumptions</span>
            </div>
            <span className="material-symbols-outlined text-[#c3c6d7] group-hover:text-[#b4c5ff] transition-colors">add</span>
          </div>
        </div>
        <div className="glass p-[24px] rounded-xl cursor-pointer group">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[24px]">
              <div className="w-10 h-10 rounded-lg bg-[#232a34] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#b4c5ff]">timer</span>
              </div>
              <span className="text-[15px] font-semibold text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Time-to-hire Calculations</span>
            </div>
            <span className="material-symbols-outlined text-[#c3c6d7] group-hover:text-[#b4c5ff] transition-colors">add</span>
          </div>
        </div>
        <div className="glass p-[24px] rounded-xl cursor-pointer group">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[24px]">
              <div className="w-10 h-10 rounded-lg bg-[#232a34] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#b4c5ff]">analytics</span>
              </div>
              <span className="text-[15px] font-semibold text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Productivity Impact Analysis</span>
            </div>
            <span className="material-symbols-outlined text-[#c3c6d7] group-hover:text-[#b4c5ff] transition-colors">add</span>
          </div>
        </div>
        <div className="glass p-[24px] rounded-xl cursor-pointer group">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[24px]">
              <div className="w-10 h-10 rounded-lg bg-[#232a34] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#b4c5ff]">payments</span>
              </div>
              <span className="text-[15px] font-semibold text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Subscription vs. In-house Costs</span>
            </div>
            <span className="material-symbols-outlined text-[#c3c6d7] group-hover:text-[#b4c5ff] transition-colors">add</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="max-w-[1280px] mx-auto mt-[120px] text-center">
      <div className="relative py-[80px] px-[48px] rounded-[40px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#8343f4] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-[48px] font-bold text-[#dce3f0] mb-[24px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Start hiring smarter today.</h2>
          <p className="text-[18px] text-[#c3c6d7] mb-[80px] max-w-2xl mx-auto leading-[1.6]" style={{ fontFamily: 'Inter' }}>Join 500+ engineering teams who have automated their technical screening and saved thousands in recruiter hours.</p>
          <button className="px-[80px] py-[24px] bg-gradient-to-r from-[#2563eb] to-[#8343f4] text-white rounded-full text-[15px] font-semibold shadow-xl hover:brightness-110 transition-all flex items-center gap-[8px] mx-auto" style={{ fontFamily: 'Inter' }}>
            Start Free <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default function RoiCalculatorPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0d141d', color: '#dce3f0' }}>
      <Navbar />
      <main className="relative pt-[160px] pb-[80px] px-[24px] overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,rgba(131,67,244,0.05)_50%,transparent_100%)] blur-[80px] z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,rgba(131,67,244,0.05)_50%,transparent_100%)] blur-[80px] z-0 pointer-events-none"></div>

        <section className="max-w-4xl mx-auto text-center mb-[80px] relative z-10">
          <span className="inline-block px-[16px] py-[8px] rounded-full bg-[#2563eb]/20 text-[#b4c5ff] text-[12px] font-semibold tracking-[0.05em] uppercase mb-[24px]" style={{ fontFamily: 'Inter' }}>ROI CALCULATOR</span>
          <h1 className="text-[64px] font-bold text-[#dce3f0] mb-[24px] leading-tight" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em' }}>
            See exactly how much <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b4c5ff] to-[#d2bbff]">HireIQ saves you.</span>
          </h1>
          <p className="text-[18px] text-[#c3c6d7] leading-[1.6]" style={{ fontFamily: 'Inter' }}>No email required. Instant results. Our calculator uses industry benchmarks to quantify your potential engineering efficiency gains.</p>
        </section>

        <CalculatorSection />
        <MethodologyAccordion />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
