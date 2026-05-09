import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function HeroSection() {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden px-[48px] py-[80px]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,rgba(16,185,129,0)_70%)] opacity-60"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,rgba(37,99,235,0)_70%)] opacity-60"></div>
      
      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center relative z-10">
        <div className="space-y-[24px]">
          <div className="inline-flex items-center gap-[8px] px-[4px] py-[4px] pr-[24px] rounded-full bg-[#232a34] border border-white/10 w-fit">
            <span className="bg-[#0566d9] text-[#e6ecff] text-[10px] uppercase font-bold px-[16px] py-1 rounded-full">Candidate First</span>
            <span className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7]">The future of talent acquisition</span>
          </div>
          <h1 className="text-[64px] font-bold text-[#dce3f0] leading-tight" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em' }}>
            Finally, an interview process that respects your time.
          </h1>
          <p className="text-[18px] text-[#c3c6d7] max-w-xl leading-[1.6]" style={{ fontFamily: 'Inter' }}>
            Stop screaming into the void. Get detailed feedback reports for every interview and use our AI Practice Mode to sharpen your skills before the real thing.
          </p>
          <div className="flex flex-wrap gap-[24px] pt-[24px]">
            <button className="font-semibold text-[15px] px-[80px] py-[24px] bg-gradient-to-r from-[#2563eb] to-[#0566d9] text-white rounded-full shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all hover:brightness-110 active:scale-95" style={{ fontFamily: 'Inter' }}>
              Get Started for Free
            </button>
            <button className="font-semibold text-[15px] px-[80px] py-[24px] glass text-[#dce3f0] rounded-full hover:bg-white/5 transition-all active:scale-95" style={{ fontFamily: 'Inter' }}>
              Try Practice Mode
            </button>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center">
          {/* Floating Mockup */}
          <div className="relative glass rounded-[32px] p-[24px] w-full max-w-[480px] shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="flex justify-between items-center mb-[24px]">
              <div className="flex items-center gap-[16px]">
                <div className="w-10 h-10 rounded-full bg-[#2e353f] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#b4c5ff]">person</span>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold m-0 text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Sarah Jenkins</h4>
                  <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7]">Full Stack Engineer</p>
                </div>
              </div>
              <span className="text-[12px] font-semibold tracking-[0.05em] px-[16px] py-1 bg-[#0566d9]/20 text-[#adc6ff] rounded-full">Completed</span>
            </div>
            
            <div className="flex flex-col items-center py-[48px] space-y-[24px]">
              {/* Score Ring */}
              <div className="relative w-40 h-40 rounded-full flex items-center justify-center" style={{ background: 'conic-gradient(from 0deg, #10b981 0%, #2563eb 84%, transparent 84%)' }}>
                <div className="absolute w-[152px] h-[152px] rounded-full bg-[#192029]"></div>
                <div className="relative text-center">
                  <span className="text-[48px] font-bold block text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>84</span>
                  <span className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7]">Overall Match</span>
                </div>
              </div>
              
              <div className="w-full grid grid-cols-2 gap-[16px]">
                <div className="p-[16px] bg-[#151c25] rounded-xl border border-white/5">
                  <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] mb-[8px]">Technical Skills</p>
                  <div className="h-1.5 w-full bg-[#2e353f] rounded-full overflow-hidden">
                    <div className="h-full bg-[#b4c5ff] w-[90%]"></div>
                  </div>
                </div>
                <div className="p-[16px] bg-[#151c25] rounded-xl border border-white/5">
                  <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] mb-[8px]">Communication</p>
                  <div className="h-1.5 w-full bg-[#2e353f] rounded-full overflow-hidden">
                    <div className="h-full bg-[#10B981] w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-[24px] pt-[24px] border-t border-white/5">
              <p className="text-[16px] text-[#c3c6d7] italic text-sm" style={{ fontFamily: 'Inter' }}>"Sarah demonstrates exceptional problem-solving in React. Suggest focusing on system design scalability for the next round."</p>
            </div>
          </div>
          
          {/* Decorative Orbs */}
          <div className="absolute -z-10 -top-10 -right-10 w-32 h-32 bg-[#2563eb] blur-3xl opacity-30"></div>
          <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-[#10B981] blur-3xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] py-[80px]">
      <div className="text-center mb-[80px]">
        <h2 className="text-[48px] font-bold mb-[16px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>Tools for your success.</h2>
        <p className="text-[18px] text-[#c3c6d7] leading-[1.6]" style={{ fontFamily: 'Inter' }}>We built the platform we wished we had when we were job hunting.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        {/* Card 1 */}
        <div className="glass p-[48px] rounded-[32px] group hover:bg-[#2e353f]/40 transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-[#2563eb]/10 border border-[#2563eb]/20 flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[#b4c5ff] text-3xl">insights</span>
          </div>
          <h3 className="text-[32px] font-bold mb-[24px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Feedback Reports</h3>
          <p className="text-[16px] text-[#c3c6d7] leading-[1.5]" style={{ fontFamily: 'Inter' }}>Know exactly where you stand. Our AI analyzes your interview performance and provides actionable data on technical gaps and soft skills.</p>
        </div>
        
        {/* Card 2 */}
        <div className="glass p-[48px] rounded-[32px] group hover:bg-[#2e353f]/40 transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[#10B981] text-3xl">exercise</span>
          </div>
          <h3 className="text-[32px] font-bold mb-[24px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Practice Mode</h3>
          <p className="text-[16px] text-[#c3c6d7] leading-[1.5]" style={{ fontFamily: 'Inter' }}>Mock interviews that feel real. Record yourself answering industry-standard questions and get instant AI-generated tips to improve.</p>
        </div>
        
        {/* Card 3 */}
        <div className="glass p-[48px] rounded-[32px] group hover:bg-[#2e353f]/40 transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-[#8343f4]/10 border border-[#d2bbff]/20 flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[#d2bbff] text-3xl">verified</span>
          </div>
          <h3 className="text-[32px] font-bold mb-[24px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Certifications</h3>
          <p className="text-[16px] text-[#c3c6d7] leading-[1.5]" style={{ fontFamily: 'Inter' }}>Verify your skills once and reuse them. Earn HireIQ badges that top-tier companies trust, saving you from repetitive initial screens.</p>
        </div>
        
        {/* Card 4 */}
        <div className="glass p-[48px] rounded-[32px] group hover:bg-[#2e353f]/40 transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-[#0566d9]/10 border border-[#adc6ff]/20 flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[#adc6ff] text-3xl">list_alt</span>
          </div>
          <h3 className="text-[32px] font-bold mb-[24px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Application Tracker</h3>
          <p className="text-[16px] text-[#c3c6d7] leading-[1.5]" style={{ fontFamily: 'Inter' }}>A unified dashboard for your career journey. Track applications, interview dates, and offer status in one clean, distraction-free space.</p>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] py-[80px]">
      <div className="text-center mb-[80px]">
        <h2 className="text-[48px] font-bold mb-[16px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>A different kind of experience.</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-stretch">
        {/* Traditional */}
        <div className="flex flex-col bg-[#080f17] border border-white/5 rounded-[32px] overflow-hidden opacity-80">
          <div className="p-[48px] border-b border-white/5">
            <span className="text-[12px] font-semibold tracking-[0.05em] text-[#690005] uppercase px-[16px] py-1 bg-[#93000a] rounded-full mb-[24px] inline-block">The "Status Quo"</span>
            <h4 className="text-[32px] font-bold text-[#c3c6d7]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Cold & Frustrating</h4>
          </div>
          <div className="flex-grow p-[48px] flex flex-col items-center justify-center space-y-[24px] py-[100px]">
            <div className="w-full max-w-[320px] bg-[#2e353f]/30 rounded-xl p-[24px] border border-white/5">
              <div className="h-4 w-1/2 bg-[#2e353f] rounded mb-[8px]"></div>
              <div className="h-3 w-3/4 bg-[#2e353f]/50 rounded mb-[24px]"></div>
              <div className="h-20 w-full bg-[#2e353f]/20 rounded"></div>
            </div>
            <div className="text-center">
              <span className="material-symbols-outlined text-4xl text-[#8d90a0] mb-[16px]">mail</span>
              <p className="text-[#c3c6d7] text-[16px] leading-[1.5]" style={{ fontFamily: 'Inter' }}>"Thank you for your interest. Unfortunately, we have decided to move forward with other candidates."</p>
              <p className="text-sm text-[#8d90a0] mt-[16px] italic">No feedback provided.</p>
            </div>
          </div>
        </div>
        
        {/* HireIQ */}
        <div className="flex flex-col glass rounded-[32px] overflow-hidden shadow-[0_0_80px_rgba(16,185,129,0.1)]">
          <div className="p-[48px] border-b border-white/10 bg-gradient-to-r from-[#2563eb]/5 to-transparent">
            <span className="text-[12px] font-semibold tracking-[0.05em] text-[#10B981] uppercase px-[16px] py-1 bg-[#10B981]/10 rounded-full mb-[24px] inline-block">The HireIQ Way</span>
            <h4 className="text-[32px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Supportive & Valuable</h4>
          </div>
          <div className="flex-grow p-[48px] flex flex-col items-center justify-center space-y-[24px] py-[100px]">
            <div className="relative glass rounded-2xl p-[24px] w-full max-w-[350px] shadow-xl border-[#b4c5ff]/20">
              <div className="flex items-center gap-[16px] mb-[24px]">
                <div className="w-8 h-8 rounded-full bg-[#b4c5ff] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#002a78] text-sm">check_circle</span>
                </div>
                <h5 className="text-[16px] text-[#dce3f0] font-bold" style={{ fontFamily: 'Inter' }}>Your Performance Report</h5>
              </div>
              <div className="space-y-[16px]">
                <div className="flex justify-between text-xs text-[#c3c6d7]">
                  <span>Problem Solving</span>
                  <span className="text-[#b4c5ff]">Advanced</span>
                </div>
                <div className="h-1.5 w-full bg-[#2e353f] rounded-full">
                  <div className="h-full bg-[#b4c5ff] w-[85%]"></div>
                </div>
                <div className="p-[16px] bg-[#232a34] rounded-lg text-xs leading-relaxed text-[#c3c6d7]">
                  Great work on the binary search algorithm! You were 15% faster than the average candidate.
                </div>
              </div>
            </div>
            <p className="text-[#dce3f0] text-center text-[16px] pt-[24px]" style={{ fontFamily: 'Inter' }}>Valuable insights, even if you don't get the role. Every interview makes you stronger.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] py-[80px]">
      <div className="relative glass rounded-[48px] p-[80px] text-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,rgba(37,99,235,0)_70%)] opacity-30"></div>
        
        <div className="relative z-10 space-y-[24px] max-w-2xl mx-auto">
          <h2 className="text-[48px] lg:text-[64px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Ready to find a job that values you?</h2>
          <p className="text-[18px] text-[#c3c6d7] leading-[1.6]" style={{ fontFamily: 'Inter' }}>Join 50,000+ candidates who are interviewing smarter, not harder.</p>
          
          <div className="pt-[48px]">
            <button className="text-[24px] font-semibold px-[80px] py-[32px] bg-gradient-to-r from-[#2563eb] to-[#0566d9] text-white rounded-full shadow-[0_30px_100px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95" style={{ fontFamily: 'Inter' }}>
              Sign Up Free — No credit card needed
            </button>
          </div>
          
          <p className="text-[12px] font-semibold tracking-[0.05em] text-[#8d90a0] mt-[24px]">Takes less than 2 minutes to set up your profile.</p>
        </div>
      </div>
    </section>
  );
}

export default function ForCandidatesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0b0f19', color: '#dce3f0' }}>
      <Navbar />
      <main className="pt-[80px]">
        <HeroSection />
        <BenefitsSection />
        <ComparisonSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
