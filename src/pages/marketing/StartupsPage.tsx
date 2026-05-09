import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function HeroSection() {
  return (
    <section className="relative py-[80px] overflow-hidden min-h-[819px] flex items-center justify-center">
      {/* Background Glows */}
      <div className="absolute filter blur-[120px] opacity-[0.12] z-0 pointer-events-none bg-[#b4c5ff] w-[500px] h-[500px] top-[-100px] left-[-100px]"></div>
      <div className="absolute filter blur-[120px] opacity-[0.12] z-0 pointer-events-none bg-[#8343f4] w-[600px] h-[600px] bottom-[-200px] right-[-100px]"></div>
      
      <div className="relative z-10 max-w-[1280px] mx-auto px-[48px] text-center">
        <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full glass border border-[#b4c5ff]/20 mb-[24px]">
          <span className="material-symbols-outlined text-[#b4c5ff] text-[18px]">rocket_launch</span>
          <span className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] uppercase" style={{ fontFamily: 'Inter' }}>For Startups</span>
        </div>
        <h1 className="text-[64px] font-bold max-w-[900px] mx-auto mb-[24px] text-[#dce3f0] leading-[1.1]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em' }}>
          Hire great engineers <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b4c5ff] to-[#d2bbff]">without an enterprise budget.</span>
        </h1>
        <p className="text-[18px] text-[#c3c6d7] max-w-[650px] mx-auto mb-[48px] leading-[1.6]" style={{ fontFamily: 'Inter' }}>
          Scale your engineering team from seed to Series A with AI-driven screening that delivers elite talent in days, not months. No $50k platform fees required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[24px]">
          <button className="bg-gradient-to-r from-[#2563eb] to-[#8343f4] px-[48px] py-[24px] rounded-full font-semibold text-[15px] text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-200 active:scale-95" style={{ fontFamily: 'Inter' }}>
            Build your team for $0
          </button>
          <button className="glass px-[48px] py-[24px] rounded-full font-semibold text-[15px] text-[#dce3f0] hover:bg-white/5 transition-all duration-200 active:scale-95" style={{ fontFamily: 'Inter' }}>
            Watch 2-min Demo
          </button>
        </div>
        
        <div className="mt-[80px] relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#b4c5ff] to-[#d2bbff] rounded-[32px] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
          <img 
            alt="HireIQ Platform Dashboard" 
            className="relative rounded-[32px] glass w-full max-w-[1000px] mx-auto shadow-2xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFYNxL1G1Jt4jdxnmnlBo_aFFSseaigrkG6iHfKUXr94zX0YdvvyHUr_-ixl5tXav7G4MCXOawPSU0270zZcIxhwSFeXH-T20Cx2NLc1pfyp8mv1vnBRnyBjP0D_NA9faXHfimuiokKjEoEyw4pFVSUFhZUrJx0rxK_W8TgyObIWpQB6QTIJt0QbcH26oeQ-prX_Ku6iee0OmyR9kOCSnzmOSA-MroTrCbZtOwAM2sgsPcfe2JaJVc7s4yvqbsdM_bQnrllUvUtUk"
          />
        </div>
      </div>
    </section>
  );
}

function PainPointsSection() {
  return (
    <section className="py-[80px] relative">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="text-center mb-[80px]">
          <h2 className="text-[48px] font-bold mb-[16px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>Startup hiring is broken.</h2>
          <p className="text-[18px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>We fixed the friction so you can focus on building.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {/* Lost Productivity */}
          <div className="glass p-[24px] rounded-[32px] hover:translate-y-[-4px] transition-all duration-200 border-[#ffb4ab]/10 bg-[#93000a]/5">
            <div className="w-12 h-12 rounded-xl bg-[#ffb4ab]/10 flex items-center justify-center mb-[24px]">
              <span className="material-symbols-outlined text-[#ffb4ab]">timer_off</span>
            </div>
            <h3 className="text-[24px] font-bold mb-[8px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Lost Productivity</h3>
            <p className="text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter' }}>Founders spend 40% of their time screening candidates. Every hour interviewing "bad fits" is an hour you aren't shipping code.</p>
          </div>
          
          {/* Pricing Gap */}
          <div className="glass p-[24px] rounded-[32px] hover:translate-y-[-4px] transition-all duration-200 border-[#ffb4ab]/10 bg-[#93000a]/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-[16px] py-[8px] bg-[#ffb4ab]/20 text-[#ffb4ab] text-[10px] font-semibold tracking-[0.05em] rounded-bl-xl" style={{ fontFamily: 'Inter' }}>THE GAP</div>
            <div className="w-12 h-12 rounded-xl bg-[#ffb4ab]/10 flex items-center justify-center mb-[24px]">
              <span className="material-symbols-outlined text-[#ffb4ab]">payments</span>
            </div>
            <h3 className="text-[24px] font-bold mb-[8px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>$100K vs $0</h3>
            <p className="text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter' }}>Enterprise platforms charge $100k+ annually. We give you the same elite screening tools for free while you're early stage.</p>
          </div>
          
          {/* Candidate Ghosting */}
          <div className="glass p-[24px] rounded-[32px] hover:translate-y-[-4px] transition-all duration-200 border-[#ffb4ab]/10 bg-[#93000a]/5">
            <div className="w-12 h-12 rounded-xl bg-[#ffb4ab]/10 flex items-center justify-center mb-[24px]">
              <span className="material-symbols-outlined text-[#ffb4ab]">person_off</span>
            </div>
            <h3 className="text-[24px] font-bold mb-[8px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Candidate Ghosting</h3>
            <p className="text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter' }}>Slow processes lose top engineers. Startups that take 3+ weeks to hire lose the best candidates to big tech instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoWallSection() {
  return (
    <section className="py-[48px] bg-[#080f17]/50 border-y border-white/5">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] text-center mb-[48px] uppercase" style={{ fontFamily: 'Inter' }}>Built for teams like yours</p>
        <div className="flex flex-wrap justify-center items-center gap-[80px] opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-[32px] font-extrabold tracking-tighter" style={{ fontFamily: 'Plus Jakarta Sans' }}>CLOUDCORE</span>
          <span className="text-[32px] font-extrabold tracking-tighter italic" style={{ fontFamily: 'Plus Jakarta Sans' }}>NEXUS.</span>
          <span className="text-[32px] font-extrabold tracking-tighter" style={{ fontFamily: 'Plus Jakarta Sans' }}>Velocity_</span>
          <span className="text-[32px] font-extrabold tracking-tighter" style={{ fontFamily: 'Plus Jakarta Sans' }}>SYNTH_</span>
          <span className="text-[32px] font-extrabold tracking-tighter" style={{ fontFamily: 'Plus Jakarta Sans' }}>VECTOR</span>
        </div>
      </div>
    </section>
  );
}

function FreePlanSection() {
  return (
    <section className="py-[80px] relative">
      <div className="max-w-[1000px] mx-auto px-[48px]">
        <div className="relative glass p-[80px] rounded-[32px] overflow-hidden">
          <div className="absolute filter blur-[120px] opacity-[0.20] z-0 pointer-events-none bg-[#b4c5ff] w-[300px] h-[300px] top-[-50px] right-[-50px]"></div>
          <div className="absolute filter blur-[120px] opacity-[0.20] z-0 pointer-events-none bg-[#8343f4] w-[300px] h-[300px] bottom-[-50px] left-[-50px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-[80px]">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-[56px] font-bold leading-tight mb-[24px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Our pricing for early stage? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b4c5ff] to-[#d2bbff]">$0</span></h2>
              <p className="text-[18px] text-[#c3c6d7] mb-[48px] leading-[1.6]" style={{ fontFamily: 'Inter' }}>
                We've been there. We support the ecosystem by offering our full screening engine for free to seed-stage startups.
              </p>
              <div className="flex flex-wrap gap-[24px] justify-center md:justify-start">
                <div className="flex items-center gap-[8px] text-[#dce3f0]">
                  <span className="material-symbols-outlined text-[#b4c5ff]">check_circle</span>
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-[8px] text-[#dce3f0]">
                  <span className="material-symbols-outlined text-[#b4c5ff]">check_circle</span>
                  <span>No demo call</span>
                </div>
                <div className="flex items-center gap-[8px] text-[#dce3f0]">
                  <span className="material-symbols-outlined text-[#b4c5ff]">check_circle</span>
                  <span>Unlimited seats</span>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="glass bg-[#232a34] p-[48px] rounded-[32px] text-center border-[#b4c5ff]/30 shadow-[0_0_30px_rgba(37,99,235,0.15)]">
                <p className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] mb-[16px]" style={{ fontFamily: 'Inter' }}>FREE FOREVER</p>
                <div className="text-[80px] font-bold mb-[8px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>$0<span className="text-[32px] text-[#c3c6d7]">/mo</span></div>
                <p className="text-[#c3c6d7] mb-[48px]">Up to 10 hires per year</p>
                <button className="bg-gradient-to-r from-[#2563eb] to-[#8343f4] w-full py-[24px] rounded-full font-semibold text-[15px] text-white active:scale-95 transition-transform" style={{ fontFamily: 'Inter' }}>Claim Startup Access</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="py-[80px] relative">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="text-center mb-[80px]">
          <h2 className="text-[48px] font-bold mb-[16px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>Hire in days, not weeks.</h2>
          <p className="text-[18px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Traditional agencies are too slow for startup speed.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
          {/* Traditional */}
          <div className="space-y-[24px]">
            <div className="flex items-center justify-between mb-[16px]">
              <h3 className="text-[24px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Traditional Hiring</h3>
              <span className="px-[16px] py-[4px] rounded-full bg-[#ffb4ab]/10 text-[#ffb4ab] text-[12px] font-semibold tracking-[0.05em]" style={{ fontFamily: 'Inter' }}>42 DAYS AVG.</span>
            </div>
            <div className="relative pl-[8px] border-l-2 border-[#ffb4ab]/30 space-y-[48px]">
              <div className="relative pl-[24px]">
                <div className="absolute -left-[14px] top-0 w-4 h-4 rounded-full bg-[#ffb4ab]"></div>
                <p className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Day 1-7: Sourcing & Manual Review</p>
                <p className="text-sm text-[#c3c6d7]">Reviewing hundreds of unqualified resumes manually.</p>
              </div>
              <div className="relative pl-[24px]">
                <div className="absolute -left-[14px] top-0 w-4 h-4 rounded-full bg-[#ffb4ab]"></div>
                <p className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Day 8-21: Initial Screenings</p>
                <p className="text-sm text-[#c3c6d7]">Phone screens with candidates who don't have the skills.</p>
              </div>
              <div className="relative pl-[24px]">
                <div className="absolute -left-[14px] top-0 w-4 h-4 rounded-full bg-[#ffb4ab]"></div>
                <p className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Day 22-42: Technical Debt</p>
                <p className="text-sm text-[#c3c6d7]">Engineering leads lose hours on technical interviews.</p>
              </div>
            </div>
          </div>
          
          {/* HireIQ */}
          <div className="space-y-[24px]">
            <div className="flex items-center justify-between mb-[16px]">
              <h3 className="text-[24px] font-bold text-[#b4c5ff]" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ Process</h3>
              <span className="px-[16px] py-[4px] rounded-full bg-[#b4c5ff]/10 text-[#b4c5ff] text-[12px] font-semibold tracking-[0.05em]" style={{ fontFamily: 'Inter' }}>9 DAYS AVG.</span>
            </div>
            <div className="relative pl-[8px] border-l-2 border-[#b4c5ff]/30 space-y-[48px]">
              <div className="relative pl-[24px]">
                <div className="absolute -left-[14px] top-0 w-4 h-4 rounded-full bg-[#b4c5ff] shadow-[0_0_10px_#2563eb]"></div>
                <p className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Day 1: AI Instant Sourcing</p>
                <p className="text-sm text-[#c3c6d7]">AI matches roles with pre-vetted engineers in our talent pool.</p>
              </div>
              <div className="relative pl-[24px]">
                <div className="absolute -left-[14px] top-0 w-4 h-4 rounded-full bg-[#b4c5ff] shadow-[0_0_10px_#2563eb]"></div>
                <p className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Day 2-5: Automated Tech Assessment</p>
                <p className="text-sm text-[#c3c6d7]">Candidates take high-signal AI-invigilated coding tasks.</p>
              </div>
              <div className="relative pl-[24px]">
                <div className="absolute -left-[14px] top-0 w-4 h-4 rounded-full bg-[#b4c5ff] shadow-[0_0_10px_#2563eb]"></div>
                <p className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Day 9: The Perfect Hire</p>
                <p className="text-sm text-[#c3c6d7]">Final interview with verified top 1% talent only.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-[80px] relative">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="glass p-[80px] rounded-[32px] text-center relative overflow-hidden">
          <div className="absolute filter blur-[120px] opacity-[0.30] z-0 pointer-events-none bg-[#b4c5ff] w-[800px] h-[300px] -bottom-[150px] left-1/2 -translate-x-1/2"></div>
          
          <h2 className="text-[48px] font-bold mb-[24px] relative z-10 text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>Your next engineer shouldn't take 6 weeks to hire.</h2>
          <p className="text-[18px] text-[#c3c6d7] max-w-[600px] mx-auto mb-[48px] relative z-10 leading-[1.6]" style={{ fontFamily: 'Inter' }}>
            Join 2,400+ ambitious startups building their future engineering teams with HireIQ. 
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[24px] relative z-10">
            <button className="bg-gradient-to-r from-[#2563eb] to-[#8343f4] px-[48px] py-[24px] rounded-full font-semibold text-[15px] text-white shadow-xl hover:brightness-110 active:scale-95 transition-all" style={{ fontFamily: 'Inter' }}>
              Start Hiring for Free
            </button>
            <button className="glass px-[48px] py-[24px] rounded-full font-semibold text-[15px] text-[#dce3f0] hover:bg-white/5 active:scale-95 transition-all" style={{ fontFamily: 'Inter' }}>
              Speak with a Specialist
            </button>
          </div>
          <p className="mt-[48px] text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase relative z-10" style={{ fontFamily: 'Inter' }}>
            Zero platform fees until your Series B.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function StartupsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0d141d', color: '#dce3f0' }}>
      <Navbar />
      <main className="relative pt-[80px]">
        <HeroSection />
        <PainPointsSection />
        <LogoWallSection />
        <FreePlanSection />
        <TimelineSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
