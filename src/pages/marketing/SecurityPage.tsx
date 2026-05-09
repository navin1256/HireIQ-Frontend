import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function HeroSection() {
  return (
    <section className="relative pt-[160px] pb-[80px] overflow-hidden min-h-[819px] flex flex-col justify-center items-center text-center">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] -z-10 opacity-60"></div>
      
      <div className="max-w-[900px] px-[24px] mx-auto relative">
        <div className="inline-flex items-center justify-center p-[4px] rounded-2xl bg-white/5 border border-white/10 mb-[24px]">
          <div className="bg-gradient-to-r from-[#2563eb] to-[#8343f4] p-[24px] rounded-xl shadow-[0_0_40px_rgba(37,99,235,0.4)]">
            <span className="material-symbols-outlined text-[72px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
          </div>
        </div>
        <h1 className="text-[64px] font-bold text-[#dce3f0] mb-[24px] leading-[1.1]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em' }}>Security you can trust.</h1>
        <p className="text-[18px] text-[#c3c6d7] max-w-[700px] mx-auto leading-[1.6]" style={{ fontFamily: 'Inter' }}>
          SOC 2. GDPR. DPDPA. CCPA. Encrypted at rest. Biometric consent. Every detail of security designed in, not added later.
        </p>
      </div>
    </section>
  );
}

function TrustBadgeSection() {
  return (
    <section className="py-[80px] relative z-10">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
          <div className="glass p-[48px] rounded-[24px] text-center group hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-full bg-[#b4c5ff]/10 flex items-center justify-center mx-auto mb-[16px]">
              <span className="material-symbols-outlined text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            </div>
            <div className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] mb-[8px] uppercase" style={{ fontFamily: 'Inter' }}>COMPLIANCE</div>
            <div className="text-[18px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>SOC 2 Type II</div>
          </div>
          <div className="glass p-[48px] rounded-[24px] text-center group hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-full bg-[#b4c5ff]/10 flex items-center justify-center mx-auto mb-[16px]">
              <span className="material-symbols-outlined text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
            </div>
            <div className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] mb-[8px] uppercase" style={{ fontFamily: 'Inter' }}>PRIVACY</div>
            <div className="text-[18px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>GDPR Ready</div>
          </div>
          <div className="glass p-[48px] rounded-[24px] text-center group hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-full bg-[#b4c5ff]/10 flex items-center justify-center mx-auto mb-[16px]">
              <span className="material-symbols-outlined text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 1" }}>policy</span>
            </div>
            <div className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] mb-[8px] uppercase" style={{ fontFamily: 'Inter' }}>REGULATION</div>
            <div className="text-[18px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>DPDPA Compliant</div>
          </div>
          <div className="glass p-[48px] rounded-[24px] text-center group hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-full bg-[#b4c5ff]/10 flex items-center justify-center mx-auto mb-[16px]">
              <span className="material-symbols-outlined text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 1" }}>lock_person</span>
            </div>
            <div className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] mb-[8px] uppercase" style={{ fontFamily: 'Inter' }}>DATA RIGHTS</div>
            <div className="text-[18px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>CCPA Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecurityFeaturesSection() {
  return (
    <section className="py-[80px] space-y-[120px]">
      {/* Data Encryption */}
      <div className="max-w-[1280px] mx-auto px-[48px] grid md:grid-cols-2 items-center gap-[80px]">
        <div className="order-2 md:order-1">
          <div className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] mb-[16px] uppercase" style={{ fontFamily: 'Inter' }}>DATA ENCRYPTION</div>
          <h2 className="text-[48px] font-bold mb-[24px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Enterprise-grade encryption across every layer.</h2>
          <p className="text-[16px] text-[#c3c6d7] mb-[24px] leading-[1.5]" style={{ fontFamily: 'Inter' }}>We utilize AES-256 encryption for data at rest and TLS 1.3 for data in transit. Your talent pool’s sensitive information is locked behind multiple layers of cryptographic security, ensuring that even the most rigorous security audits are passed with ease.</p>
          <ul className="space-y-[16px]">
            <li className="flex items-center gap-[8px] text-[#dce3f0]"><span className="material-symbols-outlined text-[#b4c5ff] text-[20px]">check_circle</span> AES-256 At-Rest Encryption</li>
            <li className="flex items-center gap-[8px] text-[#dce3f0]"><span className="material-symbols-outlined text-[#b4c5ff] text-[20px]">check_circle</span> Perfect Forward Secrecy</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="glass rounded-[32px] p-[24px] overflow-hidden relative group">
            <img className="w-full aspect-square object-cover rounded-[20px] grayscale brightness-50 group-hover:grayscale-0 transition-all duration-500" alt="Data encryption visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb8xS1TtF4R28xroy2rmFAovDDvATrOhGXIqqt4X4r4spWULLFoPn738MjYNs5zcqlvFoh-cvPwPh76juvNMZG4CoB-wFzTEjFUjsiQOjVFAnlIUssNzjjUegAWZBPCo9PdYcQVtFOESPh3gAGU0XRqIJUV0wiSLK2XKuhk11AJ1HML7t-ITtv3T3zNnA6IjQYMVs3xenIsR1cngHvRIVrjd9lkXTxIZCeGzFDY6jFRIJJgq9BrsnIaQ9cbdogvTKetrW44LpUhPs"/>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 border border-white/20 rounded-full flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-white text-[80px]" style={{ fontVariationSettings: "'FILL' 1" }}>enhanced_encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Biometric Data */}
      <div className="max-w-[1280px] mx-auto px-[48px] grid md:grid-cols-2 items-center gap-[80px]">
        <div>
          <div className="glass rounded-[32px] p-[24px] overflow-hidden relative group">
            <img className="w-full aspect-square object-cover rounded-[20px] grayscale brightness-50 group-hover:grayscale-0 transition-all duration-500" alt="Biometric dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFqV1RuTyIlcFtGPWRGTuDcSTy388mRix7O4jixlKTvm8JM_IZKX2DEI13g1W9JGBTDzOkRSuH9mDpvLu8GVXzcDuznHsYTNNqZm3b-Ccz7SClmGIRSwq3d9nW8o4oaEOPTInPm-nGrEFpYwln_c0iZKg4uwSK5coFuTEKZWv_4_eztqjMBs6k0vD7jZTPGWvZXICDVZeQ9JCLvEWZbAljQQZx3Jz3WYxFNh04Gz7xwL35z6jnWkysoT6Xj1MTCrfogV9ajOrUleE"/>
            <div className="absolute bottom-[24px] left-[24px] right-[24px] glass p-[16px] rounded-xl">
              <div className="flex items-center gap-[16px]">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-500 text-[18px]">fingerprint</span>
                </div>
                <span className="text-sm font-bold text-[#dce3f0]">Biometric Consent Verified</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] mb-[16px] uppercase" style={{ fontFamily: 'Inter' }}>BIOMETRIC DATA</div>
          <h2 className="text-[48px] font-bold mb-[24px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Privacy-first biometric processing.</h2>
          <p className="text-[16px] text-[#c3c6d7] mb-[24px] leading-[1.5]" style={{ fontFamily: 'Inter' }}>Our AI systems are designed with privacy at the core. We never store raw biometric data; instead, we use one-way mathematical hashes that are impossible to reverse-engineer. Candidates maintain full control over their data with explicit biometric consent workflows.</p>
          <div className="grid grid-cols-2 gap-[16px]">
            <div className="p-[16px] bg-white/5 rounded-xl border border-white/5">
              <div className="text-[#b4c5ff] font-bold mb-[8px]">100%</div>
              <div className="text-xs text-[#c3c6d7]">Consent-driven</div>
            </div>
            <div className="p-[16px] bg-white/5 rounded-xl border border-white/5">
              <div className="text-[#b4c5ff] font-bold mb-[8px]">0%</div>
              <div className="text-xs text-[#c3c6d7]">Raw storage</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Access Control */}
      <div className="max-w-[1280px] mx-auto px-[48px] grid md:grid-cols-2 items-center gap-[80px]">
        <div className="order-2 md:order-1">
          <div className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] mb-[16px] uppercase" style={{ fontFamily: 'Inter' }}>ACCESS CONTROL</div>
          <h2 className="text-[48px] font-bold mb-[24px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Strict access controls and audit transparency.</h2>
          <p className="text-[16px] text-[#c3c6d7] mb-[24px] leading-[1.5]" style={{ fontFamily: 'Inter' }}>Implement Role-Based Access Control (RBAC) to ensure your team only sees what they need to. Our detailed audit logs track every action within the platform, giving you total transparency and a complete paper trail for compliance requirements.</p>
          <ul className="space-y-[16px]">
            <li className="flex items-center gap-[8px] text-[#dce3f0]"><span className="material-symbols-outlined text-[#b4c5ff] text-[20px]">password_2</span> Multi-factor Authentication (MFA)</li>
            <li className="flex items-center gap-[8px] text-[#dce3f0]"><span className="material-symbols-outlined text-[#b4c5ff] text-[20px]">history</span> Immutable Audit Logs</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="glass rounded-[32px] p-[24px] overflow-hidden relative group">
            <img className="w-full aspect-square object-cover rounded-[20px] grayscale brightness-50 group-hover:grayscale-0 transition-all duration-500" alt="Access matrix" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfbLl_j9EYg1Ub7qr3ABaXBrVV7ESzzWuFediQ3wRN4ASCPwrr2rjzIb2rCdwo_jys6SzKwMVrvQlGG9ok8Kc8Rwg1cBSr0VWwjWgDKo12tNJim0koRurxmTYu3yqGpej8MJ0kBztK-4FpU5-aIjeHgVdIlB3ELmDPLqpaqrtAmA4OgtAo6zlXuKUYpLAhSkVBxODt56z0kSwGr5UfSuQKf-DegmORq6JORhjmLKgnMXJqSZPHLuspL3dtV7ShzZcThYjI2B6Wqgc"/>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass p-[24px] rounded-2xl border border-[#b4c5ff]/30">
                <div className="flex items-center gap-[24px]">
                  <div className="w-12 h-12 rounded-full bg-[#b4c5ff]/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#b4c5ff]">key</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#dce3f0]">Grant Access?</div>
                    <div className="text-xs text-[#c3c6d7]">Manager Role Request</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Compliance Map */}
      <div className="max-w-[1280px] mx-auto px-[48px] grid md:grid-cols-2 items-center gap-[80px]">
        <div>
          <div className="glass rounded-[32px] p-[24px] overflow-hidden relative group aspect-square">
            <div className="absolute inset-0 opacity-40 mix-blend-screen overflow-hidden">
              <img className="w-full h-full object-cover grayscale" alt="Global map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoPMgBROCetWZedIN2ENgzooO7RFcjXi0CrvZ48Dn7vBE1Nz4Fsv4byus7h1mWCFEVI-kxMQ8XXuJ6wcfrZeAUCfXVct9YDQKOSf2dg9IbQBey0lAijdNfOUckxg3ujTvOM03RSdW1bBbewYGEFcRBtfPY9GhvrOUfioQ-uTRSTOjw4wUf8hzFaH-pDgzaltsEyiVC8Kzfiil7T8Z7KG2LIcC6buyIdyVIid1w8aaq5HYCz-NIRWHOERUh3udza6DODezeGgM16Dk"/>
            </div>
            <div className="relative h-full flex flex-col justify-end p-[48px]">
              <div className="flex gap-[16px] flex-wrap">
                <span className="px-[24px] py-[8px] rounded-full bg-[#b4c5ff]/20 border border-[#b4c5ff]/30 text-xs font-bold text-white">US-EAST-1</span>
                <span className="px-[24px] py-[8px] rounded-full bg-[#b4c5ff]/20 border border-[#b4c5ff]/30 text-xs font-bold text-white">EU-WEST-1</span>
                <span className="px-[24px] py-[8px] rounded-full bg-[#b4c5ff]/20 border border-[#b4c5ff]/30 text-xs font-bold text-white">AP-SOUTH-1</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[12px] font-semibold tracking-[0.05em] text-[#b4c5ff] mb-[16px] uppercase" style={{ fontFamily: 'Inter' }}>GLOBAL COMPLIANCE</div>
          <h2 className="text-[48px] font-bold mb-[24px] text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Global compliance from day one.</h2>
          <p className="text-[16px] text-[#c3c6d7] mb-[24px] leading-[1.5]" style={{ fontFamily: 'Inter' }}>Navigating regional privacy laws is complex; we make it simple. HireIQ automatically applies the correct data residency and processing rules based on your candidate's location, ensuring you stay compliant with GDPR, CCPA, and DPDPA without manual intervention.</p>
          <div className="flex items-center gap-[24px] p-[24px] bg-white/5 rounded-2xl border border-white/5">
            <span className="material-symbols-outlined text-[#b4c5ff] text-[32px]">public</span>
            <div>
              <div className="font-bold text-[#dce3f0]">Regional Data Residency</div>
              <div className="text-sm text-[#c3c6d7]">Choice of data hosting locations across 3 continents.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-[80px]">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="glass bg-gradient-to-r from-[#2563eb] to-[#8343f4] rounded-[32px] p-[80px] text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent)]"></div>
          <div className="relative z-10">
            <h2 className="text-[48px] font-bold text-white mb-[24px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Security built for modern hiring teams.</h2>
            <p className="text-[18px] text-white/80 max-w-[600px] mx-auto mb-[48px] leading-[1.6]" style={{ fontFamily: 'Inter' }}>Join 500+ enterprises who trust HireIQ with their most sensitive talent data and interview intelligence.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-[24px]">
              <button className="px-[48px] py-[24px] bg-white text-[#2563eb] font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-200 active:scale-95" style={{ fontFamily: 'Inter' }}>Contact Security Team</button>
              <button className="px-[48px] py-[24px] border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-200 active:scale-95" style={{ fontFamily: 'Inter' }}>Download Security Whitepaper</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0d141d', color: '#dce3f0' }}>
      <Navbar />
      <main className="pt-[80px]">
        <HeroSection />
        <TrustBadgeSection />
        <SecurityFeaturesSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
