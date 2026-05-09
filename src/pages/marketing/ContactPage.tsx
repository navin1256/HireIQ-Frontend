import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function ContactForm() {
  return (
    <div className="lg:col-span-6 glass rounded-3xl p-[48px] shadow-2xl">
      <h1 className="text-[48px] font-bold text-white mb-[8px] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Get in touch</h1>
      <p className="text-[18px] text-[#8d90a0] mb-[48px]" style={{ fontFamily: 'Inter', lineHeight: 1.6 }}>Sales, support, or just want to say hello.</p>
      <form className="space-y-[16px]" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          <div className="space-y-[8px]">
            <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>FULL NAME</label>
            <input 
              className="w-full bg-white/5 border border-white/10 px-[24px] py-[16px] rounded-2xl text-white placeholder:text-[#8d90a0]/50 focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all outline-none" 
              placeholder="John Doe" 
              type="text"
            />
          </div>
          <div className="space-y-[8px]">
            <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>EMAIL ADDRESS</label>
            <input 
              className="w-full bg-white/5 border border-white/10 px-[24px] py-[16px] rounded-2xl text-white placeholder:text-[#8d90a0]/50 focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all outline-none" 
              placeholder="john@company.com" 
              type="email"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          <div className="space-y-[8px]">
            <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>COMPANY</label>
            <input 
              className="w-full bg-white/5 border border-white/10 px-[24px] py-[16px] rounded-2xl text-white placeholder:text-[#8d90a0]/50 focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all outline-none" 
              placeholder="Acme Inc" 
              type="text"
            />
          </div>
          <div className="space-y-[8px]">
            <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>INQUIRY TYPE</label>
            <select className="w-full bg-white/5 border border-white/10 px-[24px] py-[16px] rounded-2xl text-white appearance-none cursor-pointer focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all outline-none" defaultValue="Sales">
              <option value="Sales" className="bg-[#0d141d]">Sales</option>
              <option value="Support" className="bg-[#0d141d]">Support</option>
              <option value="Press" className="bg-[#0d141d]">Press</option>
              <option value="Other" className="bg-[#0d141d]">Other</option>
            </select>
          </div>
        </div>
        <div className="space-y-[8px]">
          <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>MESSAGE</label>
          <textarea 
            className="w-full bg-white/5 border border-white/10 px-[24px] py-[16px] rounded-2xl text-white placeholder:text-[#8d90a0]/50 resize-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all outline-none" 
            placeholder="How can we help you?" 
            rows={5}
          ></textarea>
        </div>
        <button 
          className="w-full bg-gradient-to-r from-[#2563eb] to-[#8343f4] py-[24px] rounded-full text-[15px] font-semibold text-white hover:brightness-110 active:scale-[0.98] transition-all mt-[24px] shadow-[0_4px_20px_rgba(37,99,235,0.4)]" 
          type="submit"
          style={{ fontFamily: 'Inter' }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

function InfoStack() {
  return (
    <div className="lg:col-span-4 space-y-[24px]">
      <h2 className="text-[32px] font-bold text-white mb-[24px]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>Or reach us directly</h2>
      {/* Email Card */}
      <div className="glass p-[24px] rounded-2xl flex items-start gap-[24px] group hover:bg-[#232a34] transition-all cursor-pointer">
        <div className="w-12 h-12 rounded-xl bg-[#2563eb]/20 flex items-center justify-center text-[#b4c5ff] group-hover:scale-110 transition-transform shrink-0">
          <span className="material-symbols-outlined">mail</span>
        </div>
        <div>
          <p className="text-[16px] text-white font-semibold" style={{ fontFamily: 'Inter' }}>support@hireiq.ai</p>
          <p className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] mt-1 uppercase" style={{ fontFamily: 'Inter' }}>Within 4 hours</p>
        </div>
      </div>
      {/* Instagram Card */}
      <div className="glass p-[24px] rounded-2xl flex items-start gap-[24px] group hover:bg-[#232a34] transition-all cursor-pointer">
        <div className="w-12 h-12 rounded-xl bg-[#8343f4]/20 flex items-center justify-center text-[#d2bbff] group-hover:scale-110 transition-transform shrink-0">
          <span className="material-symbols-outlined">camera</span>
        </div>
        <div>
          <p className="text-[16px] text-white font-semibold" style={{ fontFamily: 'Inter' }}>@hireiq.ai</p>
          <p className="text-[12px] font-semibold tracking-[0.05em] text-[#d2bbff] mt-1 uppercase" style={{ fontFamily: 'Inter' }}>Instagram</p>
        </div>
      </div>
      {/* Map Card */}
      <div className="glass rounded-2xl overflow-hidden group">
        <div className="h-48 relative bg-[#192029]">
          <img 
            className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC33VtxAJ8mXzIQXthoVH2WjQTMa5_fax56w-hhiFMf1zjR2AM7Kgq8vC02pBEMSHv501xIV0Qgw6yE6LP00HNK4TpAc1JK9AjMYSyHs_y5tlgcaQNfRgVof7X3TIOAmh95PYeKTO7yqLRmC23TsqxyYaHUO-IIiOQR5wJzOXSroo1uOjcz-qd9uISaWu4wy1ojT-mx6uFVraNAeZhCNcXJJmV3LCDWMX3QXdc24pLsnuFHYjdLYVB8V1P6MESovEd2dOI3eg2D6mE"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-[#2563eb] flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.8)] animate-[pulse_2s_infinite]">
              <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
          </div>
        </div>
        <div className="p-[24px]">
          <p className="text-[16px] text-white font-bold" style={{ fontFamily: 'Inter' }}>Global Remote Team</p>
          <p className="text-[12px] font-semibold tracking-[0.05em] text-[#8d90a0] mt-1 uppercase" style={{ fontFamily: 'Inter' }}>Headquartered in SF & Berlin</p>
        </div>
      </div>
    </div>
  );
}

function CTAStrip() {
  return (
    <section className="mt-[80px] max-w-[1280px] mx-auto px-[48px]">
      <div className="glass rounded-3xl p-[48px] flex flex-col md:flex-row justify-between items-center gap-[24px] border-[#b4c5ff]/20">
        <div>
          <h3 className="text-[32px] font-bold text-white mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>Ready to hire smarter?</h3>
          <p className="text-[#8d90a0] text-[16px]" style={{ fontFamily: 'Inter' }}>Join over 2,000+ companies using HireIQ to find top talent.</p>
        </div>
        <button className="bg-gradient-to-r from-[#2563eb] to-[#8343f4] px-[48px] py-[24px] rounded-full text-[15px] font-semibold text-white whitespace-nowrap hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all" style={{ fontFamily: 'Inter' }}>
          Start Your Free Trial
        </button>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0d141d', color: '#dce3f0' }}>
      <Navbar />
      <main className="relative pt-[140px] pb-[80px]">
        {/* Ambient Glows */}
        <div className="fixed top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-[#b4c5ff] blur-[120px] opacity-10 z-0 pointer-events-none"></div>
        <div className="fixed bottom-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-[#d2bbff] blur-[120px] opacity-10 z-0 pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-[48px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-[24px] items-start">
            <ContactForm />
            <InfoStack />
          </div>
        </div>
        
        <div className="relative z-10">
          <CTAStrip />
        </div>
      </main>
      <Footer />
    </div>
  );
}
