import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-[80px] pb-[120px]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,rgba(13,20,29,0)_70%)] z-0"></div>
      <div className="max-w-[1280px] mx-auto px-[48px] relative z-10 text-center">
        <div className="inline-flex items-center gap-[8px] px-[16px] py-1 rounded-full bg-white/5 border border-white/10 mb-[24px]">
          <span className="material-symbols-outlined text-[18px] text-[#b4c5ff]">verified_user</span>
          <span className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>Enterprise Ready</span>
        </div>
        <h1 className="text-[64px] font-bold max-w-[900px] mx-auto mb-[16px] text-[#dce3f0] leading-[1.1]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em' }}>
          Enterprise-grade AI hiring. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b4c5ff] to-[#2563eb]">Without enterprise pricing.</span>
        </h1>
        <p className="text-[18px] text-[#c3c6d7] max-w-[700px] mx-auto mb-[48px] leading-[1.6]" style={{ fontFamily: 'Inter' }}>
          SOC 2 Type II, SSO, Custom AI rubrics, and a dedicated CSM. Everything you need to scale your high-volume hiring with military-grade security.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[16px]">
          <button className="bg-gradient-to-r from-[#2563eb] to-[#1e40af] shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] px-[80px] py-[24px] rounded-full font-semibold text-[15px] text-white text-lg hover:brightness-110 active:scale-95 transition-all" style={{ fontFamily: 'Inter' }}>Contact Sales</button>
          <button className="glass font-semibold text-[15px] text-[#dce3f0] px-[80px] py-[24px] rounded-full text-lg hover:bg-white/10 active:scale-95 transition-all" style={{ fontFamily: 'Inter' }}>View Security Docs</button>
        </div>
      </div>
    </section>
  );
}

function DashboardVisualSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] -mt-[80px] relative z-20">
      <div className="glass rounded-3xl p-[24px] shadow-2xl relative">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,rgba(13,20,29,0)_70%)] blur-[100px] opacity-40"></div>
        <img 
          alt="Executive Dashboard" 
          className="w-full rounded-2xl border border-white/5 shadow-inner aspect-[16/8] object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi0Tnq5-gUCx29PUzZxcrwHDUca1kR1EcVuJVJQDUf_tiHrA7VujTltHbu1NT6F-JistLenph5WR9tpaRLBo0rmoW4_15SBx5Dg1zJbDiQUxmBAIY1NpyQ1TOI2U9MJfAb485AC2_OPJb8vHGAgn6D46ETv-8uW4CE-bUm17fmvhGmcACD3ADjpV5qQScyqe98_hcydlYrMHV-VZPBt4G83WprZ4qF4Wd2_UICyNwMsIEM64C7SBH4eDoZV_GkvvGcuxVODM5-X9U"
        />
        {/* Floating Labels/Overlay Elements */}
        <div className="absolute top-1/2 left-[48px] -translate-y-1/2 flex flex-col gap-[16px]">
          <div className="glass p-[16px] rounded-xl flex items-center gap-[16px] shadow-xl animate-pulse">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-[12px] font-semibold tracking-[0.05em] text-[#dce3f0] uppercase" style={{ fontFamily: 'Inter' }}>SOC 2 COMPLIANT</span>
          </div>
          <div className="glass p-[16px] rounded-xl flex items-center gap-[16px] shadow-xl">
            <span className="material-symbols-outlined text-[#b4c5ff]">vpn_key</span>
            <span className="text-[12px] font-semibold tracking-[0.05em] text-[#dce3f0] uppercase" style={{ fontFamily: 'Inter' }}>SSO ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureGridSection() {
  return (
    <section className="py-[80px]">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {/* Feature Card 1 */}
          <div className="glass p-[48px] rounded-3xl group hover:bg-[#192029] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#b4c5ff]/10 flex items-center justify-center mb-[24px] border border-[#b4c5ff]/20">
              <span className="material-symbols-outlined text-[#b4c5ff]">groups</span>
            </div>
            <h3 className="text-[24px] font-bold mb-[8px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>SSO & SAML</h3>
            <p className="text-[#c3c6d7] text-[16px] leading-[1.5]" style={{ fontFamily: 'Inter' }}>Seamlessly integrate with Okta, Azure AD, or Google Workspace for secure, centralized access control.</p>
          </div>
          {/* Feature Card 2 */}
          <div className="glass p-[48px] rounded-3xl group hover:bg-[#192029] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#b4c5ff]/10 flex items-center justify-center mb-[24px] border border-[#b4c5ff]/20">
              <span className="material-symbols-outlined text-[#b4c5ff]">security</span>
            </div>
            <h3 className="text-[24px] font-bold mb-[8px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>SOC 2 Compliance</h3>
            <p className="text-[#c3c6d7] text-[16px] leading-[1.5]" style={{ fontFamily: 'Inter' }}>Our systems are audited and certified to meet the highest security and availability standards.</p>
          </div>
          {/* Feature Card 3 */}
          <div className="glass p-[48px] rounded-3xl group hover:bg-[#192029] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#b4c5ff]/10 flex items-center justify-center mb-[24px] border border-[#b4c5ff]/20">
              <span className="material-symbols-outlined text-[#b4c5ff]">psychology</span>
            </div>
            <h3 className="text-[24px] font-bold mb-[8px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Custom AI Rubrics</h3>
            <p className="text-[#c3c6d7] text-[16px] leading-[1.5]" style={{ fontFamily: 'Inter' }}>Tailor our AI to evaluate candidates based on your specific cultural values and technical standards.</p>
          </div>
          {/* Feature Card 4 */}
          <div className="glass p-[48px] rounded-3xl group hover:bg-[#192029] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#b4c5ff]/10 flex items-center justify-center mb-[24px] border border-[#b4c5ff]/20">
              <span className="material-symbols-outlined text-[#b4c5ff]">support_agent</span>
            </div>
            <h3 className="text-[24px] font-bold mb-[8px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Dedicated CSM</h3>
            <p className="text-[#c3c6d7] text-[16px] leading-[1.5]" style={{ fontFamily: 'Inter' }}>Priority implementation and ongoing optimization with a dedicated Customer Success Manager.</p>
          </div>
          {/* Feature Card 5 */}
          <div className="glass p-[48px] rounded-3xl group hover:bg-[#192029] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#b4c5ff]/10 flex items-center justify-center mb-[24px] border border-[#b4c5ff]/20">
              <span className="material-symbols-outlined text-[#b4c5ff]">verified</span>
            </div>
            <h3 className="text-[24px] font-bold mb-[8px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>SLA Guarantee</h3>
            <p className="text-[#c3c6d7] text-[16px] leading-[1.5]" style={{ fontFamily: 'Inter' }}>99.9% uptime commitment backed by comprehensive Service Level Agreements.</p>
          </div>
          {/* Feature Card 6 */}
          <div className="glass p-[48px] rounded-3xl group hover:bg-[#192029] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#b4c5ff]/10 flex items-center justify-center mb-[24px] border border-[#b4c5ff]/20">
              <span className="material-symbols-outlined text-[#b4c5ff]">shield_with_heart</span>
            </div>
            <h3 className="text-[24px] font-bold mb-[8px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Advanced Proctoring</h3>
            <p className="text-[#c3c6d7] text-[16px] leading-[1.5]" style={{ fontFamily: 'Inter' }}>AI-powered anti-cheat mechanisms including eye-tracking and browser lock for integrity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section className="py-[80px] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,rgba(13,20,29,0)_70%)] z-0"></div>
      <div className="max-w-[1280px] mx-auto px-[48px] relative z-10">
        <div className="glass rounded-3xl p-[48px] md:p-[64px] border-emerald-500/20 overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-[48px] items-center">
            <div>
              <h2 className="text-[48px] font-bold mb-[24px] text-white" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                Enterprise security <br/><span className="text-emerald-400">built in.</span>
              </h2>
              <p className="text-[18px] text-[#c3c6d7] mb-[48px] leading-[1.6]" style={{ fontFamily: 'Inter' }}>
                We protect your most sensitive talent data with end-to-end encryption and strict adherence to global security frameworks.
              </p>
              <div className="flex flex-wrap gap-[24px]">
                <div className="bg-white/5 border border-white/10 px-[24px] py-[16px] rounded-xl flex items-center gap-[8px]">
                  <span className="material-symbols-outlined text-emerald-400">task_alt</span>
                  <span className="text-[12px] font-semibold tracking-[0.05em] uppercase text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>SOC 2 Type II</span>
                </div>
                <div className="bg-white/5 border border-white/10 px-[24px] py-[16px] rounded-xl flex items-center gap-[8px]">
                  <span className="material-symbols-outlined text-emerald-400">task_alt</span>
                  <span className="text-[12px] font-semibold tracking-[0.05em] uppercase text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Encryption at Rest</span>
                </div>
                <div className="bg-white/5 border border-white/10 px-[24px] py-[16px] rounded-xl flex items-center gap-[8px]">
                  <span className="material-symbols-outlined text-emerald-400">task_alt</span>
                  <span className="text-[12px] font-semibold tracking-[0.05em] uppercase text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>ISO 27001</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                alt="Security Visualization" 
                className="rounded-2xl shadow-2xl border border-white/10" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-ZJnu_XSiuBLGV17gm7i2VUuShTMipAEIWaX0h0MbaflUEkJxmMrRyHKcPEnS6nWZBFcAsIOf6BkiVSQgwbYDpcgVsaIJb-99FqNd2ybfjVpxrwNb458SK6ESPs1A6ZFV2TlkbDFsL6JGGzg8CBRNtXcpDuWJBJj2pvHFA9SdeqOLXf1zV2aJxGaNTxlsvK3MtB9K83hIdP4fzFZJcDJ7Sy7pZijBOyHie7OWCPb5FjeRdroKIHO5MNUYrPREEbuuHFfablD5gnc"
              />
              <div className="absolute -bottom-6 -left-6 glass p-[24px] rounded-2xl border-emerald-500/30">
                <span className="material-symbols-outlined text-emerald-400 text-[40px]">lock</span>
                <div className="mt-[8px]">
                  <p className="font-bold text-white text-[16px]" style={{ fontFamily: 'Inter' }}>AES-256</p>
                  <p className="text-[10px] text-[#c3c6d7] uppercase tracking-tighter" style={{ fontFamily: 'Inter' }}>Encrypted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComplianceSection() {
  return (
    <section className="py-[80px] bg-[#151c25]">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="mb-[80px] text-center">
          <h2 className="text-[32px] font-bold mb-[16px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>Global Compliance standards</h2>
          <p className="text-[#c3c6d7] max-w-[600px] mx-auto text-[16px]" style={{ fontFamily: 'Inter' }}>Regional data sovereignty and ethical AI audits are standard for all enterprise partners.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px]">
          <div className="glass p-[24px] rounded-2xl flex flex-col items-center text-center">
            <div className="text-[#b4c5ff] font-bold text-xl mb-[8px]">GDPR</div>
            <p className="text-[14px] text-[#c3c6d7]">Full EU data protection and portability compliance.</p>
          </div>
          <div className="glass p-[24px] rounded-2xl flex flex-col items-center text-center">
            <div className="text-[#b4c5ff] font-bold text-xl mb-[8px]">DPDPA</div>
            <p className="text-[14px] text-[#c3c6d7]">Strict adherence to Indian data protection laws.</p>
          </div>
          <div className="glass p-[24px] rounded-2xl flex flex-col items-center text-center">
            <div className="text-[#b4c5ff] font-bold text-xl mb-[8px]">CCPA</div>
            <p className="text-[14px] text-[#c3c6d7]">Comprehensive California consumer privacy rights.</p>
          </div>
          <div className="glass p-[24px] rounded-2xl flex flex-col items-center text-center border-[#b4c5ff]/30">
            <div className="text-[#b4c5ff] font-bold text-xl mb-[8px]">AI Bias Audit</div>
            <p className="text-[14px] text-[#c3c6d7]">Annual 3rd party audits for algorithmic fairness.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudySection() {
  return (
    <section className="py-[80px]">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="grid md:grid-cols-2 gap-[80px]">
          <div className="glass rounded-3xl overflow-hidden group border-white/5">
            <div className="p-[48px]">
              <div className="flex justify-between items-start mb-[48px]">
                <span className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] uppercase" style={{ fontFamily: 'Inter' }}>Fintech Global</span>
                <span className="material-symbols-outlined text-[#c3c6d7] group-hover:text-[#b4c5ff] transition-colors">north_east</span>
              </div>
              <h3 className="text-[28px] font-bold mb-[24px] leading-tight text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Scale hiring by 400% while reducing time-to-hire by 62%.</h3>
              <div className="grid grid-cols-2 gap-[24px] mt-[48px]">
                <div>
                  <p className="text-[32px] font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>62%</p>
                  <p className="text-[#c3c6d7] text-[14px]">Faster placement</p>
                </div>
                <div>
                  <p className="text-[32px] font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>4.8/5</p>
                  <p className="text-[#c3c6d7] text-[14px]">Candidate Rating</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass rounded-3xl overflow-hidden group border-white/5">
            <div className="p-[48px]">
              <div className="flex justify-between items-start mb-[48px]">
                <span className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] uppercase" style={{ fontFamily: 'Inter' }}>SaaS Enterprise</span>
                <span className="material-symbols-outlined text-[#c3c6d7] group-hover:text-[#b4c5ff] transition-colors">north_east</span>
              </div>
              <h3 className="text-[28px] font-bold mb-[24px] leading-tight text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Saving $2.4M annually in recruiter overhead with AI screening.</h3>
              <div className="grid grid-cols-2 gap-[24px] mt-[48px]">
                <div>
                  <p className="text-[32px] font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>$2.4M</p>
                  <p className="text-[#c3c6d7] text-[14px]">Annual Savings</p>
                </div>
                <div>
                  <p className="text-[32px] font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>12,000</p>
                  <p className="text-[#c3c6d7] text-[14px]">Interviews/Month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSalesSection() {
  return (
    <section className="py-[80px] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,rgba(13,20,29,0)_70%)] z-0 opacity-50"></div>
      <div className="max-w-[800px] mx-auto px-[48px] relative z-10">
        <div className="glass p-[48px] md:p-[64px] rounded-3xl shadow-2xl">
          <div className="text-center mb-[80px]">
            <h2 className="text-[32px] md:text-[48px] font-bold mb-[16px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>Let's talk Enterprise.</h2>
            <p className="text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter' }}>Speak with our solutions architects about custom implementation.</p>
          </div>
          <form className="space-y-[24px]">
            <div className="grid md:grid-cols-2 gap-[24px]">
              <div>
                <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase mb-[8px] block" style={{ fontFamily: 'Inter' }}>Full Name</label>
                <input className="w-full bg-[#0B0F19] border border-white/10 rounded-2xl px-[24px] py-[16px] text-[#dce3f0] focus:ring-1 focus:ring-[#b4c5ff] focus:border-[#b4c5ff] outline-none transition-all" placeholder="John Doe" type="text"/>
              </div>
              <div>
                <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase mb-[8px] block" style={{ fontFamily: 'Inter' }}>Work Email</label>
                <input className="w-full bg-[#0B0F19] border border-white/10 rounded-2xl px-[24px] py-[16px] text-[#dce3f0] focus:ring-1 focus:ring-[#b4c5ff] focus:border-[#b4c5ff] outline-none transition-all" placeholder="john@enterprise.com" type="email"/>
              </div>
            </div>
            <div>
              <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase mb-[8px] block" style={{ fontFamily: 'Inter' }}>Company Size</label>
              <select className="w-full bg-[#0B0F19] border border-white/10 rounded-2xl px-[24px] py-[16px] text-[#dce3f0] focus:ring-1 focus:ring-[#b4c5ff] focus:border-[#b4c5ff] outline-none transition-all">
                <option>500 - 1,000 employees</option>
                <option>1,000 - 5,000 employees</option>
                <option>5,000+ employees</option>
              </select>
            </div>
            <div>
              <label className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase mb-[8px] block" style={{ fontFamily: 'Inter' }}>How can we help?</label>
              <textarea className="w-full bg-[#0B0F19] border border-white/10 rounded-2xl px-[24px] py-[16px] text-[#dce3f0] focus:ring-1 focus:ring-[#b4c5ff] focus:border-[#b4c5ff] outline-none transition-all" placeholder="Tell us about your hiring volume..." rows={4}></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-[#2563eb] to-[#1e40af] shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] py-[24px] rounded-2xl text-white font-semibold text-[18px] hover:brightness-110 active:scale-[0.98] transition-all" type="submit" style={{ fontFamily: 'Inter' }}>
              Connect with Solutions Architect
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function EnterprisePage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0d141d', color: '#dce3f0' }}>
      <Navbar />
      <main className="pt-[80px]">
        <HeroSection />
        <DashboardVisualSection />
        <FeatureGridSection />
        <SecuritySection />
        <ComplianceSection />
        <CaseStudySection />
        <ContactSalesSection />
      </main>
      <Footer />
    </div>
  );
}
