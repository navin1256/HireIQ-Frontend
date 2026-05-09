import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function HeroSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] py-[80px] text-center">
      <h1 className="text-[64px] md:text-[72px] font-bold mb-[24px] leading-tight" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em', color: '#dce3f0' }}>
        Looking for a <span className="text-gradient">Karat alternative?</span>
      </h1>
      <p className="text-[18px] text-[#c3c6d7] max-w-2xl mx-auto mb-[48px]" style={{ fontFamily: 'Inter', lineHeight: 1.6 }}>
        Unlock unmatched AI-powered features with a 99% lower cost structure. HireIQ empowers modern talent teams to scale without the legacy enterprise tax.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-[24px]">
        <button className="primary-gradient text-white font-semibold text-[18px] px-[80px] py-[24px] rounded-full shadow-lg hover:brightness-110 transition-all duration-200" style={{ boxShadow: '0 0 20px rgba(37,99,235,0.2)' }}>
          Start Free
        </button>
        <button className="glass px-[80px] py-[24px] font-semibold text-[18px] text-[#dce3f0] hover:bg-white/10 transition-all duration-200 rounded-full">
          See Comparison
        </button>
      </div>
    </section>
  );
}

function KeyDifferencesSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {/* Price */}
        <div className="glass p-[48px] group hover:bg-[#2e353f]/40 transition-all duration-300 rounded-[32px]">
          <div className="w-12 h-12 rounded-xl bg-[#b4c5ff]/10 flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[#b4c5ff]">payments</span>
          </div>
          <h3 className="text-[32px] font-bold text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Price</h3>
          <div className="space-y-[8px]">
            <p className="text-[#ffb4ab] font-semibold flex items-center gap-[8px]">
              <span className="material-symbols-outlined text-[18px]">close</span> Karat: $100k+ / year
            </p>
            <p className="text-[#adc6ff] font-semibold flex items-center gap-[8px]">
              <span className="material-symbols-outlined text-[18px]">check</span> HireIQ: From $0
            </p>
          </div>
        </div>
        {/* Access */}
        <div className="glass p-[48px] group hover:bg-[#2e353f]/40 transition-all duration-300 rounded-[32px]">
          <div className="w-12 h-12 rounded-xl bg-[#d2bbff]/10 flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[#d2bbff]">rocket_launch</span>
          </div>
          <h3 className="text-[32px] font-bold text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Access</h3>
          <div className="space-y-[8px]">
            <p className="text-[#ffb4ab] font-semibold flex items-center gap-[8px]">
              <span className="material-symbols-outlined text-[18px]">close</span> Karat: Sales Demo Only
            </p>
            <p className="text-[#adc6ff] font-semibold flex items-center gap-[8px]">
              <span className="material-symbols-outlined text-[18px]">check</span> HireIQ: Instant Self-serve
            </p>
          </div>
        </div>
        {/* Feedback */}
        <div className="glass p-[48px] group hover:bg-[#2e353f]/40 transition-all duration-300 rounded-[32px]">
          <div className="w-12 h-12 rounded-xl bg-[#b4c5ff]/10 flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[#b4c5ff]">analytics</span>
          </div>
          <h3 className="text-[32px] font-bold text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Feedback</h3>
          <div className="space-y-[8px]">
            <p className="text-[#ffb4ab] font-semibold flex items-center gap-[8px]">
              <span className="material-symbols-outlined text-[18px]">close</span> Karat: Black Box
            </p>
            <p className="text-[#adc6ff] font-semibold flex items-center gap-[8px]">
              <span className="material-symbols-outlined text-[18px]">check</span> HireIQ: Full Candidate Reports
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonTableSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] py-[80px]">
      <div className="glass overflow-hidden rounded-[32px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="p-[48px] text-[32px] font-bold text-[#dce3f0] w-1/3" style={{ fontFamily: 'Plus Jakarta Sans' }}>Features</th>
              <th className="p-[48px] text-[32px] font-bold text-[#c3c6d7]/60" style={{ fontFamily: 'Plus Jakarta Sans' }}>Karat</th>
              <th className="p-[48px] bg-[#2563eb]/20 border-x border-[#2563eb]/20 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2563eb]/10 to-transparent pointer-events-none"></div>
                <span className="text-[32px] font-bold text-[#b4c5ff] relative" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-[16px]" style={{ fontFamily: 'Inter' }}>
            <tr className="border-b border-white/5">
              <td className="p-[48px] text-[#dce3f0]">Pricing Transparency</td>
              <td className="p-[48px] text-[#c3c6d7]">Hidden / Custom</td>
              <td className="p-[48px] bg-[#2563eb]/10 border-x border-[#2563eb]/10 font-bold text-[#dce3f0]">100% Public</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="p-[48px] text-[#dce3f0]">Free Forever Plan</td>
              <td className="p-[48px] text-[#c3c6d7]">No</td>
              <td className="p-[48px] bg-[#2563eb]/10 border-x border-[#2563eb]/10 font-bold text-[#dce3f0]">Yes (Unlimited Candidates)</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="p-[48px] text-[#dce3f0]">Self-serve Signup</td>
              <td className="p-[48px] text-[#c3c6d7]">Weeks of Sales Calls</td>
              <td className="p-[48px] bg-[#2563eb]/10 border-x border-[#2563eb]/10 font-bold text-[#dce3f0]">Instant Setup</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="p-[48px] text-[#dce3f0]">AI Interview Depth</td>
              <td className="p-[48px] text-[#c3c6d7]">Basic NLP</td>
              <td className="p-[48px] bg-[#2563eb]/10 border-x border-[#2563eb]/10 font-bold text-[#dce3f0]">Advanced Multimodal LLMs</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="p-[48px] text-[#dce3f0]">Candidate Feedback</td>
              <td className="p-[48px] text-[#c3c6d7]">Manual Requests</td>
              <td className="p-[48px] bg-[#2563eb]/10 border-x border-[#2563eb]/10 font-bold text-[#dce3f0]">Automatic Dashboards</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function WhoShouldUseWhatSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        {/* Karat Card */}
        <div className="glass p-[48px] border-[#ffb4ab]/20 bg-[#93000a]/5 rounded-[32px]">
          <span className="text-[12px] font-semibold text-[#ffb4ab] mb-[24px] block uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>STAY WITH KARAT IF</span>
          <h3 className="text-[32px] font-bold text-[#dce3f0] mb-[24px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Legacy Enterprise Needs</h3>
          <ul className="space-y-[16px] text-[#c3c6d7] text-[16px]">
            <li className="flex items-start gap-[8px]">
              <span className="material-symbols-outlined text-[#ffb4ab]/60 text-[20px]">circle</span>
              You have excessive budget that must be spent.
            </li>
            <li className="flex items-start gap-[8px]">
              <span className="material-symbols-outlined text-[#ffb4ab]/60 text-[20px]">circle</span>
              You prefer human-moderated interviews over AI precision.
            </li>
            <li className="flex items-start gap-[8px]">
              <span className="material-symbols-outlined text-[#ffb4ab]/60 text-[20px]">circle</span>
              You don't mind long sales cycles and manual onboarding.
            </li>
          </ul>
        </div>
        {/* HireIQ Card */}
        <div className="glass p-[48px] border-[#b4c5ff]/40 bg-[#2563eb]/10 relative overflow-hidden rounded-[32px]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] blur-[100px] opacity-50"></div>
          <span className="text-[12px] font-semibold text-[#b4c5ff] mb-[24px] block uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>SWITCH TO HIREIQ IF</span>
          <h3 className="text-[32px] font-bold text-[#dce3f0] mb-[24px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Modern Agile Teams</h3>
          <ul className="space-y-[16px] text-[#c3c6d7] text-[16px] mb-[48px]">
            <li className="flex items-start gap-[8px]">
              <span className="material-symbols-outlined text-[#b4c5ff] text-[20px]">auto_awesome</span>
              You want to interview 10x more candidates for 10x less.
            </li>
            <li className="flex items-start gap-[8px]">
              <span className="material-symbols-outlined text-[#b4c5ff] text-[20px]">auto_awesome</span>
              You need instant, high-fidelity technical assessment reports.
            </li>
            <li className="flex items-start gap-[8px]">
              <span className="material-symbols-outlined text-[#b4c5ff] text-[20px]">auto_awesome</span>
              You value candidate experience and transparent feedback.
            </li>
          </ul>
          <button className="primary-gradient w-full py-[24px] rounded-xl font-semibold text-white shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-[15px]">
            Start in 5 minutes
          </button>
        </div>
      </div>
    </section>
  );
}

function BottomCTASection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] py-[80px] text-center relative overflow-hidden my-[80px] bg-[#151c25] rounded-[32px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(131,67,244,0.12)_0%,transparent_70%)] blur-[120px] opacity-20"></div>
      <div className="relative z-10 py-[48px]">
        <h2 className="text-[48px] md:text-[68px] font-bold text-[#dce3f0] mb-[48px] leading-tight" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>
          Switch to HireIQ today.
        </h2>
        <p className="text-[18px] text-[#c3c6d7] max-w-xl mx-auto mb-[80px] leading-[1.6]" style={{ fontFamily: 'Inter' }}>
          Join over 500+ engineering teams that have ditched legacy interviewing platforms for a faster, smarter, and more cost-effective approach.
        </p>
        <button className="primary-gradient text-white font-semibold text-[20px] px-[64px] py-[24px] rounded-full shadow-2xl hover:scale-105 transition-all duration-300" style={{ boxShadow: '0 0 40px rgba(37,99,235,0.4)' }}>
          Get Started Now
        </button>
      </div>
    </section>
  );
}

export default function KaratComparisonPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0d141d', color: '#dce3f0' }}>
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(131,67,244,0.12)_0%,transparent_70%)] blur-[120px]"></div>
      </div>
      
      <Navbar />
      <main className="pt-[120px]">
        <HeroSection />
        <KeyDifferencesSection />
        <ComparisonTableSection />
        <WhoShouldUseWhatSection />
        <BottomCTASection />
      </main>
      <Footer />
    </div>
  );
}
