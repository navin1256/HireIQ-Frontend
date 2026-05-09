import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function HeroSection() {
  return (
    <section className="relative min-h-[716px] flex flex-col items-center justify-center text-center px-[48px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#b4c5ff] rounded-full blur-[100px] opacity-15 z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8343f4] rounded-full blur-[100px] opacity-15 z-0"></div>
        {/* Particles would be implemented with JS, using SVG dots for static representation */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="20%" fill="white" r="1"></circle>
          <circle cx="85%" cy="15%" fill="white" r="1"></circle>
          <circle cx="45%" cy="80%" fill="white" r="2"></circle>
          <circle cx="70%" cy="60%" fill="white" r="1"></circle>
        </svg>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] uppercase block mb-[16px]" style={{ fontFamily: 'Inter' }}>OUR MISSION</span>
        <h1 className="text-[64px] font-bold text-[#dce3f0] mb-[24px] leading-[1.1]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em' }}>Make great hiring accessible to everyone.</h1>
        <p className="text-[48px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#b4c5ff] to-[#8343f4]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>And make every candidate feel respected.</p>
      </div>
    </section>
  );
}

function FounderStorySection() {
  return (
    <section className="py-[80px] px-[48px] max-w-[1280px] mx-auto">
      <div className="grid md:grid-cols-2 gap-[80px] items-center">
        <div className="space-y-[24px]">
          <h2 className="text-[48px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Built from Frustration, Powered by Empathy.</h2>
          <p className="text-[18px] text-[#c3c6d7] leading-relaxed" style={{ fontFamily: 'Inter' }}>
            Hiring shouldn't be a black hole. We started HireIQ after seeing too many brilliant engineers lost in automated resume screens and too many founders spending 40% of their time on logistics instead of building.
          </p>
          <p className="text-[18px] text-[#c3c6d7] leading-relaxed" style={{ fontFamily: 'Inter' }}>
            Our goal was simple: bridge the gap between technical potential and professional opportunity. We're not just building a tool; we're fixing the fundamental infrastructure of the modern workforce.
          </p>
          <div className="pt-[16px]">
            <div className="flex items-center gap-[16px]">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#b4c5ff]/20">
                <img 
                  alt="Founder Portrait" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzYiXb9gmEc-uRZkq9uBIsJs-6x1uPW6Mn7E5pFUYpgb98VDWLG45l8fIzZAGOM3BRtIIIjAo5S7TrybQzaO8YitpFuh5qPeDkiGQMdSvXeI5ynIPY4C5aSbSMckmxu4fB3or_nBMBdQgZ9-mZfCni_ntZkW_QYwhx04Z7kRPAqGimlx3sFHOKfrvmOAxYP5qmxkPv5WBRjsnCvC2dVzEyIy9cqQobTzlKRfxGdb14YSlEYiMDTV5YSDWEy0awgjbeyiiOVR4Ar2Q"
                />
              </div>
              <div>
                <p className="text-[16px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Julian Vance</p>
                <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Founder & CEO, HireIQ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#b4c5ff]/10 rounded-xl blur-2xl group-hover:bg-[#b4c5ff]/20 transition-all duration-500"></div>
          <div className="relative rounded-xl overflow-hidden glass">
            <img 
              alt="Executive Workspace" 
              className="w-full h-[500px] object-cover opacity-80" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCExb66nNo4meaFv08dLKCEcBIjwCQh0sertw-_BvvxerOB43yONhfCZmsAzcWiNNkIGzLKRFfeCif6-sxbBH4_9jFX3q-1Cg4VZt4qklOTG6Olw6SzoXUCOW4tw7CQdkwhK3TOPU7X3Qj7acWNL0Sg6cz4bUO6LF9d53ZrXw96wNubuFmegBeoP1scztdGX7XH3cMkakxbHWL3hAgAWu-3OiCGglOTgsb2aW3tnGX4BJH__jc4r9QjFWSjejlCHFeLTS87Ttaw4UQ"
            />
            {/* Floating Stat Cards */}
            <div className="absolute top-10 -left-6 glass p-[16px] rounded-lg shadow-xl animate-[bounce_3s_infinite]">
              <div className="flex flex-col">
                <span className="text-[32px] font-bold text-[#b4c5ff]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>47M</span>
                <span className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>Candidates Ghosted Yearly</span>
              </div>
            </div>
            <div className="absolute bottom-10 -right-6 glass p-[16px] rounded-lg shadow-xl">
              <div className="flex flex-col">
                <span className="text-[32px] font-bold text-[#d2bbff]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>60%</span>
                <span className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>Faster Hiring Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionCardsSection() {
  return (
    <section className="py-[80px] px-[48px] bg-[#080f17]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-[80px]">
          <span className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] uppercase" style={{ fontFamily: 'Inter' }}>ECOSYSTEM IMPACT</span>
          <h2 className="text-[48px] font-bold text-[#dce3f0] mt-[8px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>A new standard for everyone.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-[24px]">
          {/* Card 1 */}
          <div className="glass p-[48px] rounded-[24px] hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] transition-all duration-200">
            <div className="w-12 h-12 rounded-full bg-[#b4c5ff]/10 flex items-center justify-center mb-[24px]">
              <span className="material-symbols-outlined text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 1" }}>business_center</span>
            </div>
            <h3 className="text-[32px] font-bold text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>For Companies</h3>
            <p className="text-[16px] text-[#c3c6d7] leading-[1.5]" style={{ fontFamily: 'Inter' }}>Automate the noise. HireIQ identifies the top 1% of talent using ethical AI, saving thousands of hours for talent teams.</p>
          </div>
          {/* Card 2 */}
          <div className="glass p-[48px] rounded-[24px] hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(131,67,244,0.1)] transition-all duration-200">
            <div className="w-12 h-12 rounded-full bg-[#8343f4]/10 flex items-center justify-center mb-[24px]">
              <span className="material-symbols-outlined text-[#d2bbff]" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
            </div>
            <h3 className="text-[32px] font-bold text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>For Candidates</h3>
            <p className="text-[16px] text-[#c3c6d7] leading-[1.5]" style={{ fontFamily: 'Inter' }}>Real feedback, every time. No more ghosting. Every candidate gets detailed insights to help them grow, regardless of the outcome.</p>
          </div>
          {/* Card 3 */}
          <div className="glass p-[48px] rounded-[24px] hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] transition-all duration-200 border-[#b4c5ff]/20">
            <div className="w-12 h-12 rounded-full bg-[#b4c5ff]/10 flex items-center justify-center mb-[24px]">
              <span className="material-symbols-outlined text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
            </div>
            <h3 className="text-[32px] font-bold text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>For the Industry</h3>
            <p className="text-[16px] text-[#c3c6d7] leading-[1.5]" style={{ fontFamily: 'Inter' }}>Redefining the meritocracy. We’re removing bias from technical screening and opening doors based on pure skill and potential.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="py-[80px] px-[48px] max-w-4xl mx-auto">
      <h2 className="text-[48px] font-bold text-[#dce3f0] text-center mb-[80px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Our Journey</h2>
      <div className="relative">
        {/* Glowing Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#b4c5ff] via-[#d2bbff] to-transparent shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
        <div className="space-y-[100px] relative">
          {/* Milestone 1 */}
          <div className="flex items-center justify-between w-full">
            <div className="w-5/12 text-right">
              <div className="glass p-[24px] rounded-xl inline-block">
                <span className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] uppercase" style={{ fontFamily: 'Inter' }}>MAY 2025</span>
                <h4 className="text-[18px] font-bold text-[#dce3f0] mt-[8px]" style={{ fontFamily: 'Inter' }}>Started</h4>
                <p className="text-[16px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>HireIQ conceptualized in a small garage in San Francisco.</p>
              </div>
            </div>
            <div className="z-10 w-4 h-4 rounded-full bg-[#b4c5ff] border-4 border-[#0d141d] shadow-[0_0_15px_rgba(37,99,235,1)]"></div>
            <div className="w-5/12"></div>
          </div>
          {/* Milestone 2 */}
          <div className="flex items-center justify-between w-full">
            <div className="w-5/12"></div>
            <div className="z-10 w-4 h-4 rounded-full bg-[#d2bbff] border-4 border-[#0d141d] shadow-[0_0_15px_rgba(131,67,244,1)]"></div>
            <div className="w-5/12 text-left">
              <div className="glass p-[24px] rounded-xl inline-block">
                <span className="text-[12px] font-semibold tracking-[0.05em] text-[#d2bbff] uppercase" style={{ fontFamily: 'Inter' }}>JUNE 2025</span>
                <h4 className="text-[18px] font-bold text-[#dce3f0] mt-[8px]" style={{ fontFamily: 'Inter' }}>Private Beta</h4>
                <p className="text-[16px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Launched with 50 select enterprise partners globally.</p>
              </div>
            </div>
          </div>
          {/* Milestone 3 */}
          <div className="flex items-center justify-between w-full">
            <div className="w-5/12 text-right">
              <div className="glass p-[24px] rounded-xl inline-block border-[#b4c5ff]">
                <span className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] uppercase" style={{ fontFamily: 'Inter' }}>NOV 2025</span>
                <h4 className="text-[18px] font-bold text-[#dce3f0] mt-[8px]" style={{ fontFamily: 'Inter' }}>Public Launch</h4>
                <p className="text-[16px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Opening the doors to companies of all sizes everywhere.</p>
              </div>
            </div>
            <div className="z-10 w-4 h-4 rounded-full bg-[#b4c5ff] border-4 border-[#0d141d] shadow-[0_0_15px_rgba(37,99,235,1)]"></div>
            <div className="w-5/12"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PressSection() {
  return (
    <section className="py-[80px] px-[48px]">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-center text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] mb-[48px] opacity-60" style={{ fontFamily: 'Inter' }}>FEATURED IN</p>
        <div className="flex flex-wrap justify-center items-center gap-[80px] md:gap-[100px] grayscale opacity-50 contrast-125">
          <span className="text-[32px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>TechCrunch</span>
          <span className="text-[32px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>Y Combinator</span>
          <span className="text-[32px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>Product Hunt</span>
          <span className="text-[32px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>Forbes</span>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-[80px] px-[48px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative overflow-hidden rounded-[40px] glass p-[80px] text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#8343f4] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#b4c5ff] rounded-full blur-[100px] opacity-15 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8343f4] rounded-full blur-[100px] opacity-15 translate-y-1/2 -translate-x-1/2"></div>
          </div>
          <div className="relative z-10 space-y-[24px]">
            <h2 className="text-[48px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Help us redefine technical hiring.</h2>
            <p className="max-w-2xl mx-auto text-[18px] text-[#c3c6d7] leading-[1.6]" style={{ fontFamily: 'Inter' }}>Join hundreds of industry-leading companies waiting to build the future of their teams with HireIQ.</p>
            <div className="pt-[24px]">
              <button className="bg-gradient-to-r from-[#2563eb] to-[#8343f4] text-white px-[48px] py-[24px] rounded-full text-lg shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:brightness-110 transition-all active:scale-95 font-semibold" style={{ fontFamily: 'Inter' }}>Join the Waitlist</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0d141d', color: '#dce3f0' }}>
      <Navbar />
      <main className="pt-[80px]">
        <HeroSection />
        <FounderStorySection />
        <MissionCardsSection />
        <TimelineSection />
        <PressSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
