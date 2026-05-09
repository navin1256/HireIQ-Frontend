import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function HeroSection() {
  return (
    <section className="relative min-h-[819px] flex items-center justify-center overflow-hidden px-[24px] py-[80px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] -z-10 blur-[120px]"></div>
      <div className="max-w-[1000px] text-center space-y-[48px] relative z-10">
        <div className="inline-flex items-center px-[16px] py-[8px] glass rounded-full text-[12px] font-semibold tracking-widest text-[#b4c5ff] border border-[#b4c5ff]/20">
          <span className="material-symbols-outlined mr-[4px] text-[14px]">auto_awesome</span>
          NEXT-GEN ACQUISITION
        </div>
        <h1 className="text-[48px] md:text-[64px] font-bold tracking-tight leading-[1.05]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em', color: '#dce3f0' }}>
          Looking for an <span className="text-gradient">Intervue alternative?</span>
        </h1>
        <p className="text-[18px] text-[#c3c6d7] max-w-[800px] mx-auto leading-[1.6]" style={{ fontFamily: 'Inter' }}>
          HireIQ goes deeper on AI, has global reach from day one, and gives candidates something Intervue has never offered — real feedback after every interview.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[24px] pt-[24px]">
          <button className="w-full md:w-auto font-semibold text-[15px] primary-gradient text-white px-[80px] py-[24px] rounded-full hover:scale-110 active:scale-95 transition-all" style={{ boxShadow: '0 0 40px rgba(37,99,235,0.4)' }}>
            Upgrade to HireIQ
          </button>
          <button className="w-full md:w-auto font-semibold text-[15px] glass text-[#dce3f0] px-[80px] py-[24px] rounded-full hover:bg-white/10 transition-all">
            Compare Features
          </button>
        </div>
      </div>
    </section>
  );
}

function ComparisonTableSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] py-[80px]">
      <div className="text-center mb-[80px]">
        <h2 className="text-[48px] font-bold mb-[24px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', color: '#dce3f0' }}>Comparison at a Glance</h2>
        <p className="text-[16px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>See why top talent teams are making the switch.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 glass rounded-[32px] overflow-hidden shadow-2xl">
        {/* Row Headers */}
        <div className="p-[48px] bg-[#151c25]/50 border-r border-white/5 space-y-[80px] flex flex-col justify-end pb-[48px]">
          <div className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] opacity-50 uppercase">Category</div>
          <div className="h-24 flex items-center text-[18px] font-bold text-[#dce3f0]">Global Geography</div>
          <div className="h-24 flex items-center text-[18px] font-bold text-[#dce3f0]">AI Depth</div>
          <div className="h-24 flex items-center text-[18px] font-bold text-[#dce3f0]">Candidate Feedback</div>
          <div className="h-24 flex items-center text-[18px] font-bold text-[#dce3f0]">Post-hire Tracking</div>
        </div>
        {/* Intervue Column */}
        <div className="p-[48px] text-center space-y-[80px] border-r border-white/5 bg-[#080f17]">
          <div className="h-24 flex flex-col items-center justify-center gap-[8px]">
            <span className="text-[#c3c6d7] font-bold text-[24px]">Intervue</span>
            <span className="text-[12px] font-semibold px-[16px] py-1 bg-white/5 rounded-full text-[#c3c6d7] opacity-60 uppercase tracking-widest">Legacy Solution</span>
          </div>
          <div className="h-24 flex items-center justify-center text-[#c3c6d7]">
            Limited (India Centric)
          </div>
          <div className="h-24 flex items-center justify-center text-[#c3c6d7]">
            Transcription Only
          </div>
          <div className="h-24 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#ffb4ab] opacity-60">close</span>
          </div>
          <div className="h-24 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#ffb4ab] opacity-60">close</span>
          </div>
        </div>
        {/* HireIQ Column (Elevated) */}
        <div className="p-[48px] text-center space-y-[80px] relative bg-[#2563eb]/10">
          <div className="absolute inset-0 bg-[#b4c5ff]/5 -z-10"></div>
          <div className="h-24 flex flex-col items-center justify-center gap-[8px]">
            <span className="text-gradient text-[28px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</span>
            <span className="text-[12px] font-semibold px-[16px] py-1 bg-[#b4c5ff]/20 rounded-full text-[#b4c5ff] uppercase tracking-widest">Next-Gen Successor</span>
          </div>
          <div className="h-24 flex items-center justify-center font-bold text-[#dce3f0]">
            True Global Support
          </div>
          <div className="h-24 flex items-center justify-center font-bold text-[#dce3f0]">
            Deep Psychometrics & Skills
          </div>
          <div className="h-24 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#b4c5ff] scale-125" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <div className="h-24 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#b4c5ff] scale-125" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function GlobalAdvantageSection() {
  return (
    <section className="relative py-[80px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[48px] relative z-10">
        <div className="flex flex-col md:flex-row gap-[80px] items-center">
          <div className="md:w-1/2 space-y-[24px]">
            <h2 className="text-[48px] font-bold leading-tight" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', color: '#dce3f0' }}>
              Intervue is India-first. <br/>
              <span className="text-[#b4c5ff]">HireIQ is global from day one.</span>
            </h2>
            <p className="text-[18px] text-[#c3c6d7] leading-[1.6]">
              While legacy tools focus on a single region, HireIQ infrastructure is distributed across 24 edge regions globally. Experience zero latency interviews from San Francisco to Sydney.
            </p>
            <div className="grid grid-cols-2 gap-[24px] pt-[24px]">
              <div className="glass p-[24px] rounded-[32px] border-[#b4c5ff]/20">
                <div className="text-[32px] font-bold text-[#b4c5ff]" style={{ fontFamily: 'Plus Jakarta Sans' }}>99.9%</div>
                <div className="text-[12px] font-semibold text-[#c3c6d7] tracking-[0.05em]">NORTH AMERICA UPTIME</div>
              </div>
              <div className="glass p-[24px] rounded-[32px] border-[#d2bbff]/20">
                <div className="text-[32px] font-bold text-[#d2bbff]" style={{ fontFamily: 'Plus Jakarta Sans' }}>45ms</div>
                <div className="text-[12px] font-semibold text-[#c3c6d7] tracking-[0.05em]">EUROPE LATENCY</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] -z-10 blur-[80px]"></div>
            <div className="relative w-full h-full glass rounded-[32px] overflow-hidden p-[8px]">
              <img 
                className="w-full h-full object-cover rounded-[28px] opacity-40 mix-blend-luminosity" 
                alt="Global map visualization" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrXyPZRJg0_DQAd_qrwh48Nj77dMYVP44DJuxep9zztDesWccyct5YL2XzQ2PIyjXhJF6Go4prsqMQgsKUnRohyiSbZB1tU-IPG7kDGmsnMkAGLgaEModc-35kcWvCqrJ4mDlsNZGyKirZEw-VEvTi008yF7QyAeAFpISSgMxO0AXjy5fadOrKktzHpl39HBf7tsGOt4K2U7XFYtcR0PjVoKriC6X-ue7uDl25ZhHWT4WmuFMO01BqffYq98BwyS0YZGDGSDTLeME"
              />
              {/* Regional floating stats */}
              <div className="absolute top-[20%] left-[15%] glass px-[16px] py-[8px] rounded-lg animate-pulse text-[12px] text-[#b4c5ff] border-[#b4c5ff]/30">NA Hub: Active</div>
              <div className="absolute top-[40%] right-[20%] glass px-[16px] py-[8px] rounded-lg animate-pulse text-[12px] text-[#b4c5ff] border-[#b4c5ff]/30" style={{ animationDelay: '700ms' }}>EU Cluster: Optimal</div>
              <div className="absolute bottom-[30%] left-[45%] glass px-[16px] py-[8px] rounded-lg animate-pulse text-[12px] text-[#b4c5ff] border-[#b4c5ff]/30" style={{ animationDelay: '300ms' }}>APAC Edge: Fast</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CandidateFeedbackGapSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] py-[80px]">
      <div className="text-center mb-[80px]">
        <h2 className="text-[48px] font-bold mb-[24px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', color: '#dce3f0' }}>The Candidate Experience Gap</h2>
        <p className="text-[18px] text-[#c3c6d7] max-w-[700px] mx-auto leading-[1.6]">
          Talent remembers how you treat them. Don't let your process be a black hole.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px]">
        {/* Intervue Side */}
        <div className="space-y-[24px]">
          <div className="text-[12px] font-semibold text-[#c3c6d7] tracking-[0.05em]">INTERVUE: THE STATUS QUO</div>
          <div className="h-[400px] glass rounded-[32px] flex flex-col items-center justify-center text-center p-[80px] border-dashed opacity-50 grayscale">
            <span className="material-symbols-outlined text-[64px] mb-[24px] text-[#8d90a0]">inbox</span>
            <h3 className="text-[24px] font-bold text-[#dce3f0] mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>No report. No feedback.</h3>
            <p className="text-[#c3c6d7]">Candidates left wondering for weeks. Zero data provided back to the talent pool.</p>
          </div>
        </div>
        {/* HireIQ Side */}
        <div className="space-y-[24px]">
          <div className="text-[12px] font-semibold text-[#b4c5ff] tracking-[0.05em]">HIREIQ: THE NEXT-GEN WAY</div>
          <div className="h-[400px] glass rounded-[32px] p-[48px] relative overflow-hidden group shadow-2xl border-[#b4c5ff]/30">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#b4c5ff]/20 blur-[60px] rounded-full"></div>
            
            <div className="flex justify-between items-start mb-[48px]">
              <div className="flex items-center gap-[16px]">
                <div className="w-12 h-12 bg-[#2e353f] rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#b4c5ff]">analytics</span>
                </div>
                <div className="space-y-[4px]">
                  <div className="text-[20px] text-[#dce3f0] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>Feedback Report</div>
                  <div className="text-[12px] font-semibold text-[#c3c6d7] tracking-[0.05em]">SESSION ID: #HIQ-9823</div>
                </div>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-[#b4c5ff] flex items-center justify-center text-[#b4c5ff] font-bold text-[18px]" style={{ boxShadow: '0 0 20px rgba(37,99,235,0.2)' }}>
                8.4
              </div>
            </div>
            
            <div className="space-y-[16px]">
              <div className="space-y-[8px]">
                <div className="flex justify-between text-[12px] font-semibold text-[#c3c6d7] tracking-[0.05em]">
                  <span>TECHNICAL PROFICIENCY</span>
                  <span>92%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] primary-gradient"></div>
                </div>
              </div>
              <div className="space-y-[8px]">
                <div className="flex justify-between text-[12px] font-semibold text-[#c3c6d7] tracking-[0.05em]">
                  <span>COMMUNICATION CLARITY</span>
                  <span>88%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[88%] primary-gradient"></div>
                </div>
              </div>
              <div className="space-y-[8px]">
                <div className="flex justify-between text-[12px] font-semibold text-[#c3c6d7] tracking-[0.05em]">
                  <span>PROBLEM SOLVING</span>
                  <span>76%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[76%] primary-gradient"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-[48px] p-[16px] bg-white/5 rounded-xl border border-white/5 relative z-10">
              <p className="text-[14px] italic text-[#c3c6d7]">"Excellent handling of the recursion problem. Recommendation: Deepen knowledge of system design trade-offs."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] py-[80px]">
      <div className="glass rounded-[32px] p-[80px] text-center relative overflow-hidden bg-[#2e353f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] opacity-30 -z-10 blur-[100px]"></div>
        <div className="max-w-[700px] mx-auto space-y-[48px] relative z-10">
          <h2 className="text-[48px] md:text-[56px] font-bold leading-tight" style={{ fontFamily: 'Plus Jakarta Sans', color: '#dce3f0', letterSpacing: '-0.01em' }}>
            Ready to hire at the <span className="text-gradient">speed of AI?</span>
          </h2>
          <p className="text-[18px] text-[#c3c6d7] leading-[1.6]" style={{ fontFamily: 'Inter' }}>
            Join 500+ forward-thinking teams who switched from legacy interview tools to HireIQ's global platform.
          </p>
          <div className="pt-[24px]">
            <button className="font-semibold text-[18px] primary-gradient text-white px-[80px] py-[24px] rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl" style={{ boxShadow: '0 0 40px rgba(37,99,235,0.4)' }}>
              Start with HireIQ — Free
            </button>
          </div>
          <p className="text-[12px] font-semibold text-[#c3c6d7] opacity-60 tracking-widest">
            NO CREDIT CARD REQUIRED • UNLIMITED CANDIDATES FOR 14 DAYS
          </p>
        </div>
      </div>
    </section>
  );
}

export default function IntervueComparisonPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0d141d', color: '#dce3f0' }}>
      <Navbar />
      <main className="pt-[80px]">
        <HeroSection />
        <ComparisonTableSection />
        <GlobalAdvantageSection />
        <CandidateFeedbackGapSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
