import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/* ─────────────────────────── DATA ─────────────────────────── */

const PLANS = [
  {
    key: 'free',
    label: 'Free Forever',
    monthlyPrice: '$0',
    annualPrice: '$0',
    period: '/mo',
    badge: null,
    featured: false,
    enterprise: false,
    badgeText: 'No credit card ever',
    features: [
      '5 AI Interviews / mo',
      'Standard ATS Export',
      'Public Career Page',
    ],
    cta: 'Start Free',
    ctaStyle: 'outline' as const,
    checkColor: '#b4c5ff',
  },
  {
    key: 'starter',
    label: 'Starter',
    monthlyPrice: '$79',
    annualPrice: '$63',
    period: '/mo',
    badge: null,
    featured: false,
    enterprise: false,
    badgeText: null,
    features: [
      '25 AI Interviews / mo',
      'Custom Assessment Logic',
      'Email Support',
    ],
    cta: 'Go Starter',
    ctaStyle: 'gradient' as const,
    checkColor: '#b4c5ff',
  },
  {
    key: 'growth',
    label: 'Growth',
    monthlyPrice: '$149',
    annualPrice: '$119',
    period: '/mo',
    badge: 'Most Popular',
    featured: true,
    enterprise: false,
    badgeText: null,
    features: [
      'Unlimited Interviews',
      'Team Collaboration (5 seats)',
      'Custom Branding & Themes',
      'Priority Support',
    ],
    cta: 'Go Pro',
    ctaStyle: 'gradient' as const,
    checkColor: '#b4c5ff',
  },
  {
    key: 'enterprise',
    label: 'Enterprise',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    period: '',
    badge: null,
    featured: false,
    enterprise: true,
    badgeText: null,
    features: [
      'Dedicated Solution Engineer',
      'Custom API Webhooks',
      'SSO & SAML Integration',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'tertiary' as const,
    checkColor: '#d2bbff',
  },
];

const ADDONS = [
  {
    icon: 'psychology',
    title: 'Advanced AI Analytics',
    desc: 'Deeper insights into candidate psychological markers and soft skills.',
    price: '+$49/mo',
  },
  {
    icon: 'language',
    title: 'Multi-Language Pack',
    desc: 'Screen candidates in 45+ languages with native-level AI voice.',
    price: '+$29/mo',
  },
  {
    icon: 'shield_person',
    title: 'Anti-Cheating Pro',
    desc: 'Biometric identity verification and screen-lock proctoring.',
    price: '+$39/mo',
  },
];

const TABLE_ROWS = [
  { feature: 'AI Interviews / mo', free: '5', starter: '25', growth: 'Unlimited', enterprise: 'Custom', growthBold: true },
  { feature: 'Interview Length',   free: '15 mins', starter: '30 mins', growth: '60 mins', enterprise: 'Unlimited', growthBold: false },
  { feature: 'Transcript Generation', free: 'check', starter: 'check', growth: 'check', enterprise: 'check', growthBold: false },
  { feature: 'Custom Assessment Flow', free: '—', starter: 'check', growth: 'check', enterprise: 'check', growthBold: false },
  { feature: 'SSO/SAML',           free: '—', starter: '—', growth: '—', enterprise: 'check-tertiary', growthBold: false },
];

const FAQS = [
  'Can I change my plan later?',
  'What happens if I exceed my interview limit?',
  'Do you offer discounts for non-profits?',
  'Is candidate data secure and GDPR compliant?',
];

/* ─────────────────────────── HELPERS ─────────────────────────── */

function CheckIcon({ color = '#b4c5ff', size = 20 }: { color?: string; size?: number }) {
  return (
    <span className="material-symbols-outlined" style={{ color, fontSize: `${size}px`, flexShrink: 0 }}>
      check_circle
    </span>
  );
}

function TableCell({ value, tertiary = false }: { value: string; tertiary?: boolean }) {
  if (value === 'check') return <span className="material-symbols-outlined text-[#b4c5ff]" style={{ fontSize: 18 }}>check</span>;
  if (value === 'check-tertiary') return <span className="material-symbols-outlined text-[#d2bbff]" style={{ fontSize: 18 }}>check</span>;
  return <>{value}</>;
}


/* ─────────────────────────── HERO ─────────────────────────── */

function HeroSection({ annual, setAnnual }: { annual: boolean; setAnnual: (v: boolean) => void }) {
  return (
    <section className="relative pt-[160px] pb-[80px] px-[48px] min-h-[614px] flex flex-col items-center text-center"
             style={{ background: 'radial-gradient(circle at center,rgba(37,99,235,0.15) 0%,rgba(13,20,29,0) 70%)' }}>
      <div className="max-w-[800px] mx-auto">
        <span className="text-[12px] font-semibold text-[#b4c5ff] tracking-widest block mb-[16px] uppercase" style={{ fontFamily: 'Inter' }}>
          PRICING
        </span>
        <h1 className="text-[64px] font-extrabold text-[#dce3f0] mb-[24px]"
            style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Simple, honest pricing. No surprises. Ever.
        </h1>
        <p className="text-[18px] text-[#c3c6d7] leading-[1.6] mb-[48px] max-w-[600px] mx-auto">
          Stop paying per-interview legacy fees. HireIQ gives you enterprise-grade AI screening for a fraction of the cost.
        </p>

        {/* Karat Comparison */}
        <div className="inline-flex items-center gap-[24px] p-[24px] rounded-xl mb-[80px]"
             style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex items-center gap-[8px]">
            <span className="text-[#c3c6d7]">Karat:</span>
            <span className="font-bold text-[#ffb4ab]" style={{ textDecoration: 'line-through', textDecorationColor: '#ffb4ab', textDecorationThickness: 2 }}>
              $100k+/year
            </span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-[8px]">
            <span className="text-[#c3c6d7]">HireIQ:</span>
            <span className="font-bold text-[#b4c5ff]">Free Forever</span>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-[16px]">
          <span className="text-[#c3c6d7] font-semibold text-[15px]">Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className="w-[56px] h-[30px] rounded-full p-1 flex items-center transition-all duration-300 cursor-pointer"
            style={{
              background: 'rgba(15,23,42,0.7)',
              border: '1px solid rgba(255,255,255,0.08)',
              justifyContent: annual ? 'flex-end' : 'flex-start',
            }}
          >
            <div className="w-[22px] h-[22px] rounded-full bg-[#b4c5ff] shadow-sm transition-all duration-300" />
          </button>
          <span className="text-[#dce3f0] font-semibold text-[15px] flex items-center gap-[8px]">
            Annual
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-[#b4c5ff]"
                  style={{ background: 'rgba(180,197,255,0.2)' }}>
              Save 20%
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CARDS ─────────────────────────── */

function PricingCards({ annual }: { annual: boolean }) {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] mb-[80px] relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] items-end">
        {PLANS.map((plan) => {
          const price = annual ? plan.annualPrice : plan.monthlyPrice;
          return (
            <div
              key={plan.key}
              className="flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:bg-white/5"
              style={{
                background: 'rgba(15,23,42,0.7)',
                backdropFilter: 'blur(12px)',
                border: plan.featured
                  ? '1px solid rgba(180,197,255,0.4)'
                  : plan.enterprise
                  ? '1px solid rgba(131,67,244,0.2)'
                  : '1px solid rgba(255,255,255,0.08)',
                borderRadius: 28,
                padding: 48,
                transform: plan.featured ? 'scale(1.04)' : undefined,
                boxShadow: plan.featured ? '0 0 30px rgba(37,99,235,0.15)' : undefined,
                zIndex: plan.featured ? 20 : undefined,
              }}
            >
              {/* Top gradient bar for featured */}
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 h-1"
                     style={{ background: 'linear-gradient(135deg,#2563eb,#b4c5ff)' }} />
              )}

              {/* Header */}
              <div className="mb-[48px]" style={{ paddingTop: plan.featured ? 8 : 0 }}>
                <div className="flex justify-between items-center mb-[16px]">
                  <span className="text-[12px] font-semibold uppercase tracking-wider"
                        style={{ fontFamily: 'Inter', color: plan.featured ? '#b4c5ff' : '#c3c6d7' }}>
                    {plan.label}
                  </span>
                  {plan.badge && (
                    <span className="px-[16px] py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter text-[#002a78]"
                          style={{ background: 'linear-gradient(135deg,#2563eb,#b4c5ff)' }}>
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-[8px]">
                  <span className="font-extrabold"
                        style={{
                          fontFamily: 'Plus Jakarta Sans',
                          fontSize: 48,
                          background: plan.featured ? 'linear-gradient(135deg,#b4c5ff,#2563eb)' : undefined,
                          WebkitBackgroundClip: plan.featured ? 'text' : undefined,
                          WebkitTextFillColor: plan.featured ? 'transparent' : '#dce3f0',
                        }}>
                    {price}
                  </span>
                  {plan.period && <span className="text-[#c3c6d7]">{plan.period}</span>}
                </div>

                {plan.badgeText && (
                  <span className="inline-block mt-[16px] px-[16px] py-1 rounded-full text-[11px] text-[#c3c6d7] font-medium"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {plan.badgeText}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="flex-grow space-y-[24px] mb-[48px]">
                {plan.features.map((f, i) => (
                  <li key={f} className="flex items-start gap-[8px] text-[#c3c6d7]">
                    <CheckIcon color={plan.checkColor} size={20} />
                    <span className={plan.featured && i === 0 ? 'font-semibold text-[#dce3f0]' : ''}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {plan.ctaStyle === 'outline' && (
                <button className="w-full py-[16px] rounded-full font-semibold text-[15px] text-[#dce3f0] hover:bg-white/5 transition-all"
                        style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
                  {plan.cta}
                </button>
              )}
              {plan.ctaStyle === 'gradient' && (
                <button className="w-full py-[16px] rounded-full font-semibold text-[15px] text-[#002a78] hover:opacity-90 transition-all"
                        style={{
                          background: 'linear-gradient(135deg,#2563eb,#b4c5ff)',
                          boxShadow: plan.featured ? '0 0 25px rgba(37,99,235,0.4)' : undefined,
                        }}>
                  {plan.cta}
                </button>
              )}
              {plan.ctaStyle === 'tertiary' && (
                <button className="w-full py-[16px] rounded-full font-semibold text-[15px] text-[#d2bbff] hover:bg-[#8343f4]/10 transition-all"
                        style={{ border: '1px solid #8343f4' }}>
                  {plan.cta}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────────────────────── ADD-ONS ─────────────────────────── */

function AddOnsSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] mb-[80px]">
      <h3 className="text-[32px] font-bold text-center mb-[48px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
        Powerful Add-ons
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {ADDONS.map((addon) => (
          <div key={addon.title} className="relative overflow-hidden group transition-all duration-300 cursor-default"
               style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 24 }}>
            <div className="absolute inset-0 bg-[#b4c5ff]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-[16px] relative z-10"
                 style={{ background: 'rgba(180,197,255,0.1)' }}>
              <span className="material-symbols-outlined text-[#b4c5ff]">{addon.icon}</span>
            </div>
            <h4 className="text-[20px] font-bold mb-[8px] relative z-10" style={{ fontFamily: 'Plus Jakarta Sans' }}>{addon.title}</h4>
            <p className="text-[#c3c6d7] text-sm mb-[16px] relative z-10">{addon.desc}</p>
            <span className="font-bold text-[#b4c5ff] relative z-10">{addon.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── TABLE ─────────────────────────── */

function ComparisonTable() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] mb-[80px]">
      <div className="overflow-hidden" style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28 }}>
        <div className="p-[48px] border-b border-white/5">
          <h3 className="text-[32px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>Feature Breakdown</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                {['Feature', 'Free', 'Starter', 'Growth', 'Enterprise'].map((h, i) => (
                  <th key={h} className="p-[24px] text-[12px] font-semibold uppercase tracking-widest"
                      style={{ fontFamily: 'Inter', color: i === 4 ? '#d2bbff' : '#c3c6d7' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#c3c6d7] text-sm">
              {TABLE_ROWS.map((row) => (
                <tr key={row.feature} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-[24px] font-medium text-[#dce3f0]">{row.feature}</td>
                  <td className="p-[24px]"><TableCell value={row.free} /></td>
                  <td className="p-[24px]"><TableCell value={row.starter} /></td>
                  <td className="p-[24px]">
                    <span className={row.growthBold ? 'text-[#b4c5ff] font-bold' : ''}>
                      <TableCell value={row.growth} />
                    </span>
                  </td>
                  <td className="p-[24px]"><TableCell value={row.enterprise} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FAQ ─────────────────────────── */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="max-w-[800px] mx-auto px-[48px] mb-[80px]">
      <h3 className="text-[32px] font-bold text-center mb-[48px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
        Frequently Asked Questions
      </h3>
      <div className="space-y-[16px]">
        {FAQS.map((q, i) => (
          <div key={q}
               className="cursor-pointer transition-all duration-200"
               style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', padding: 24 }}
               onClick={() => setOpen(open === i ? null : i)}>
            <div className="flex justify-between items-center">
              <span className="text-[18px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>{q}</span>
              <span className="material-symbols-outlined text-[#b4c5ff] transition-transform duration-300"
                    style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                expand_more
              </span>
            </div>
            {open === i && (
              <p className="mt-[16px] text-[#c3c6d7] text-[16px] leading-[1.5]">
                Yes — you can upgrade, downgrade, or cancel at any time. Changes take effect at the start of your next billing cycle.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


/* ─────────────────────────── PAGE ─────────────────────────── */

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0d141d', color: '#dce3f0' }}>
      <Navbar />
      <main>
        <HeroSection annual={annual} setAnnual={setAnnual} />
        <PricingCards annual={annual} />
        <AddOnsSection />
        <ComparisonTable />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
