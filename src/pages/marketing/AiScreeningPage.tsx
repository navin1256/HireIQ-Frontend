import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function HeroSection() {
  return (
    <section className="pt-[160px] pb-[80px] relative overflow-hidden">
      {/* Ambient Glow Backgrounds */}
      <div className="absolute -top-[200px] -left-[100px] w-[500px] h-[500px] bg-[#b4c5ff]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[10%] -right-[100px] w-[400px] h-[400px] bg-[#d2bbff]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-[48px] text-center relative z-10">
        <div className="inline-flex items-center gap-[16px] bg-[#232a34]/50 border border-white/10 px-[16px] py-[8px] rounded-full mb-[24px]">
          <span className="material-symbols-outlined text-[#b4c5ff] text-[18px]">auto_awesome</span>
          <span className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>
            Next-Gen AI Interviewing
          </span>
        </div>
        <h1 className="text-[64px] font-extrabold text-[#dce3f0] mb-[24px] max-w-4xl mx-auto" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          AI conducts your first 3 <span className="text-gradient">interview rounds</span> automatically.
        </h1>
        <p className="text-[18px] text-[#c3c6d7] leading-[1.6] mb-[48px] max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
          HireIQ analyzes thousands of candidates in hours, delivering a ranked shortlist of top performers to your dashboard within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-[24px] justify-center items-center">
          <button className="primary-gradient font-semibold text-[15px] text-white px-[80px] py-[24px] rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl" style={{ boxShadow: '0 20px 25px -5px rgba(37,99,235,0.2), 0 8px 10px -6px rgba(37,99,235,0.2)' }}>
            Book a Live Demo
          </button>
          <button className="glass font-semibold text-[15px] text-[#dce3f0] px-[80px] py-[24px] rounded-full hover:bg-white/10 active:scale-95 transition-all">
            View Enterprise Pricing
          </button>
        </div>
      </div>
    </section>
  );
}

function SplitScreenMockup() {
  return (
    <section className="pb-[80px] max-w-[1280px] mx-auto px-[48px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] glass rounded-[28px] overflow-hidden shadow-2xl relative">
        {/* Left Side: Candidate Experience */}
        <div className="relative bg-[#080f17] p-[48px] border-r border-white/10">
          <div className="absolute top-[24px] left-[24px] flex items-center gap-[16px]">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Recording Live</span>
          </div>
          <div className="aspect-video bg-black rounded-xl overflow-hidden mb-[24px] flex items-center justify-center relative border border-white/5">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuxYCYwQ-PewveZqV2GCwAWyCqP57jh4GTj5K_7bqzoU213Piwfavxd6q4K9-6Y06qpgAVHmuTQKiOpIU34oR-e5Nk6eNMOVKT-gnnu1LHPh6uTozGHE5WA9WD0N-yZQCWGnhbM7GlfpYrDA4X0ovGqok3OfAg_VyCZ09hWMjBiMsVwY98pcn1AKgl7BWvGi2qdSaPHUXHDmKexojSiIo4umx0pNTFkLIvdHP_XrZdptf7PheAJn7CSfygV4J1OGe958Qb0KcbtH8"
              alt="Candidate Video Interview"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-[24px] left-[24px] right-[24px] flex flex-col items-center gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <div className="w-1 h-8 bg-[#b4c5ff] rounded-full animate-pulse" />
                <div className="w-1 h-12 bg-[#b4c5ff] rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                <div className="w-1 h-4 bg-[#b4c5ff] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-1 h-10 bg-[#b4c5ff] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                <div className="w-1 h-14 bg-[#b4c5ff] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                <div className="w-1 h-6 bg-[#b4c5ff] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="w-1 h-9 bg-[#b4c5ff] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
              </div>
              <span className="text-[12px] font-semibold text-[#b4c5ff] uppercase" style={{ fontFamily: 'Inter' }}>Analyzing Communication Clarity...</span>
            </div>
          </div>
          <div className="p-[16px] glass rounded-xl">
            <p className="text-[#dce3f0] italic text-[16px] leading-[1.5]" style={{ fontFamily: 'Inter' }}>
              "How would you optimize a high-traffic SQL query that involves multiple joins and subqueries?"
            </p>
            <div className="mt-[8px] flex items-center gap-[16px]">
              <span className="material-symbols-outlined text-[#b4c5ff]">psychology</span>
              <span className="text-[12px] font-semibold text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Round 2: Technical depth</span>
            </div>
          </div>
        </div>

        {/* Right Side: HR Dashboard */}
        <div className="bg-[#192029] p-[48px]">
          <div className="flex justify-between items-center mb-[48px]">
            <h3 className="font-bold text-[#dce3f0] text-[24px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Candidate Ranking</h3>
            <span className="material-symbols-outlined text-[#c3c6d7]">more_horiz</span>
          </div>
          <div className="space-y-[16px]">
            {/* Rank Item 1 */}
            <div className="flex items-center justify-between p-[16px] glass rounded-xl border-l-4 border-[#b4c5ff]">
              <div className="flex items-center gap-[24px]">
                <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center font-bold text-white">SK</div>
                <div>
                  <p className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Sarah Kincaid</p>
                  <p className="text-[12px] font-semibold text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Senior Full-stack Engineer</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#b4c5ff] text-[20px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>94%</p>
                <span className="text-[12px] font-semibold text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>AI Score</span>
              </div>
            </div>
            {/* Rank Item 2 */}
            <div className="flex items-center justify-between p-[16px] bg-white/5 border border-white/5 rounded-xl">
              <div className="flex items-center gap-[24px]">
                <div className="w-10 h-10 rounded-full bg-[#232a34] flex items-center justify-center font-bold text-white">JD</div>
                <div>
                  <p className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>James Dalton</p>
                  <p className="text-[12px] font-semibold text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>DevOps Architect</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#dce3f0] text-[20px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>88%</p>
                <span className="text-[12px] font-semibold text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>AI Score</span>
              </div>
            </div>
            {/* Rank Item 3 */}
            <div className="flex items-center justify-between p-[16px] bg-white/5 border border-white/5 rounded-xl">
              <div className="flex items-center gap-[24px]">
                <div className="w-10 h-10 rounded-full bg-[#232a34] flex items-center justify-center font-bold text-white">EM</div>
                <div>
                  <p className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Elena Moreno</p>
                  <p className="text-[12px] font-semibold text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Frontend Developer</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#dce3f0] text-[20px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>82%</p>
                <span className="text-[12px] font-semibold text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>AI Score</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DimensionCards() {
  const dimensions = [
    { icon: 'terminal', color: 'text-blue-400', bg: 'bg-blue-500/10', title: 'Technical Knowledge', desc: 'Deep verification of conceptual mastery across 30+ programming languages and architectural patterns.' },
    { icon: 'extension', color: 'text-amber-400', bg: 'bg-amber-500/10', title: 'Problem Solving', desc: 'Real-time analysis of how candidates break down complex challenges during live AI whiteboarding sessions.' },
    { icon: 'forum', color: 'text-emerald-400', bg: 'bg-emerald-500/10', title: 'Communication', desc: 'Evaluating tone, clarity, confidence, and the ability to explain technical concepts to non-technical stakeholders.' },
    { icon: 'bolt', color: 'text-purple-400', bg: 'bg-purple-500/10', title: 'AI Proficiency', desc: 'New standard: Assessing how effectively candidates use AI tools to augment their own productivity and output.' },
    { icon: 'favorite', color: 'text-rose-400', bg: 'bg-rose-500/10', title: 'Cultural Fit', desc: 'Values-based alignment screening based on your specific company mission and behavioral requirements.' },
    { icon: 'fact_check', color: 'text-cyan-400', bg: 'bg-cyan-500/10', title: 'Code Quality', desc: 'Rigorous evaluation of readability, scalability, and adherence to industry-standard clean code principles.' },
  ];

  return (
    <section className="py-[80px] max-w-[1280px] mx-auto px-[48px]">
      <div className="text-center mb-[80px]">
        <h2 className="text-[48px] font-bold text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>
          What AI Evaluates
        </h2>
        <p className="text-[18px] text-[#c3c6d7] leading-[1.6] max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
          Beyond simple keyword matching. Our AI models deep-dive into the cognitive and technical dimensions of every candidate.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {dimensions.map((d, i) => (
          <div key={i} className="glass p-[48px] rounded-[28px] hover:bg-white/5 transition-all group">
            <div className={`w-12 h-12 rounded-xl ${d.bg} flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform`}>
              <span className={`material-symbols-outlined ${d.color}`}>{d.icon}</span>
            </div>
            <h3 className="font-bold text-[22px] text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>{d.title}</h3>
            <p className="text-[16px] text-[#c3c6d7] leading-[1.5]" style={{ fontFamily: 'Inter' }}>{d.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SampleReportSection() {
  return (
    <section className="py-[80px] relative overflow-hidden" style={{ background: 'rgba(8,15,23,0.5)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b4c5ff]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-[48px] relative z-10">
        <div className="text-center mb-[80px]">
          <h2 className="text-[48px] font-bold text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>
            Deep Candidate Insights
          </h2>
          <p className="text-[18px] text-[#c3c6d7] leading-[1.6] max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
            Get a level of detail that human interviews often miss.
          </p>
        </div>
        <div className="glass rounded-[28px] p-[80px] max-w-4xl mx-auto shadow-2xl">
          {/* Report Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[48px] border-b border-white/5 pb-[80px] mb-[80px]">
            <div className="flex items-center gap-[24px]">
              <div className="w-16 h-16 rounded-2xl bg-[#2563eb] flex items-center justify-center text-[32px] font-bold text-white">EM</div>
              <div>
                <h3 className="font-bold text-[28px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Elena Moreno</h3>
                <p className="text-[16px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Lead Designer & Frontend Specialist</p>
              </div>
            </div>
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle className="text-white/5" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8" />
                <circle cx="64" cy="64" fill="transparent" r="58" stroke="url(#score-grad)" strokeDasharray="364.4" strokeDashoffset="65.6" strokeWidth="8" />
                <defs>
                  <linearGradient id="score-grad" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#8343f4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[32px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>82</span>
                <span className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>OF 100</span>
              </div>
            </div>
          </div>

          {/* Score Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] mb-[80px]">
            <div className="space-y-[48px]">
              <div>
                <div className="flex justify-between mb-[8px]">
                  <span className="font-semibold text-[15px] text-[#dce3f0]">Problem Solving</span>
                  <span className="font-semibold text-[15px] text-[#b4c5ff]">94%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full primary-gradient w-[94%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-[8px]">
                  <span className="font-semibold text-[15px] text-[#dce3f0]">Communication</span>
                  <span className="font-semibold text-[15px] text-[#b4c5ff]">88%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full primary-gradient w-[88%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-[8px]">
                  <span className="font-semibold text-[15px] text-[#dce3f0]">Technical Breadth</span>
                  <span className="font-semibold text-[15px] text-[#b4c5ff]">76%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full primary-gradient w-[76%]" />
                </div>
              </div>
            </div>

            {/* Risk Detection Panel */}
            <div className="bg-[#232a34]/50 p-[48px] rounded-[28px] border border-white/5">
              <div className="flex items-center gap-[16px] mb-[24px]">
                <span className="material-symbols-outlined text-[#d2bbff]">privacy_tip</span>
                <h4 className="font-semibold text-[15px] text-[#dce3f0]">Risk Detection Analysis</h4>
              </div>
              <ul className="space-y-[16px]">
                <li className="flex items-center gap-[16px] text-[#c3c6d7] text-[16px]">
                  <span className="material-symbols-outlined text-emerald-400 text-[20px]">check_circle</span>
                  No evidence of LLM plagiarism detected
                </li>
                <li className="flex items-center gap-[16px] text-[#c3c6d7] text-[16px]">
                  <span className="material-symbols-outlined text-emerald-400 text-[20px]">check_circle</span>
                  High transcript consistency across rounds
                </li>
                <li className="flex items-center gap-[16px] text-[#c3c6d7] text-[16px]">
                  <span className="material-symbols-outlined text-amber-400 text-[20px]">warning</span>
                  Minor background noise in Round 1
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <button className="font-semibold text-[15px] text-[#b4c5ff] hover:underline" style={{ fontFamily: 'Inter' }}>
              Download Comprehensive 12-Page PDF Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BiasDetectionSection() {
  return (
    <section className="py-[80px] max-w-[1280px] mx-auto px-[48px]">
      <div className="glass rounded-[28px] p-[80px] flex flex-col md:flex-row items-center gap-[80px] bg-gradient-to-br from-[#151c25] to-[#0d141d]">
        <div className="w-24 h-24 rounded-full bg-[#b4c5ff]/10 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[48px] text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
        </div>
        <div>
          <h3 className="font-bold text-[32px] text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Built-in Fairness & Bias Detection
          </h3>
          <p className="text-[18px] text-[#c3c6d7] leading-[1.6] mb-[24px]">
            Our screening models are actively monitored for 12 distinct types of algorithmic bias, ensuring a blind, fair, and merit-based evaluation process that outperforms human panel interviews in objectivity.
          </p>
          <div className="flex flex-wrap gap-[16px]">
            {['No Gender Bias', 'No Ethnic Bias', 'Neurodiversity Friendly'].map(tag => (
              <span key={tag} className="px-[16px] py-[8px] bg-white/5 border border-white/5 rounded-full text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsRow() {
  return (
    <section className="py-[80px] border-y border-white/5 bg-[#080f17]">
      <div className="max-w-[1280px] mx-auto px-[48px] grid grid-cols-2 md:grid-cols-4 gap-[80px] text-center">
        <div>
          <p className="font-extrabold text-[48px] text-gradient mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em' }}>85%</p>
          <p className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Time Saved Per Hire</p>
        </div>
        <div>
          <p className="font-extrabold text-[48px] text-gradient mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em' }}>10k+</p>
          <p className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Interviews Per Week</p>
        </div>
        <div>
          <p className="font-extrabold text-[48px] text-gradient mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em' }}>24h</p>
          <p className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Avg. Shortlist Time</p>
        </div>
        <div>
          <p className="font-extrabold text-[48px] text-gradient mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em' }}>92%</p>
          <p className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Offer Acceptance</p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-[120px] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#b4c5ff]/5 opacity-30" />
      <div className="max-w-[1280px] mx-auto px-[48px] text-center relative z-10">
        <h2 className="font-extrabold text-[48px] md:text-[64px] text-[#dce3f0] mb-[48px]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Ready to transform your <br/><span className="text-gradient">hiring velocity?</span>
        </h2>
        <div className="flex flex-col items-center gap-[24px]">
          <button className="primary-gradient font-semibold text-[18px] text-white px-[80px] py-[48px] rounded-full hover:brightness-110 active:scale-95 transition-all shadow-2xl group flex items-center"
                  style={{ boxShadow: '0 0 30px rgba(37,99,235,0.3)', padding: '24px 48px' }}>
            See it in action — Start Free
            <span className="material-symbols-outlined align-middle ml-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <p className="text-[#c3c6d7] text-[16px] leading-[1.5]" style={{ fontFamily: 'Inter' }}>Join 400+ modern talent teams using HireIQ</p>
        </div>
      </div>
    </section>
  );
}

export default function AiScreeningPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0d141d', color: '#dce3f0' }}>
      <Navbar />
      <main>
        <HeroSection />
        <SplitScreenMockup />
        <DimensionCards />
        <SampleReportSection />
        <BiasDetectionSection />
        <StatsRow />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
