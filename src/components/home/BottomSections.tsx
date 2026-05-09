import { useState } from 'react';

const STATS = [
  { value: '92%',  label: 'Time Saved' },
  { value: '4.2x', label: 'Pipeline Velocity' },
  { value: '11ms', label: 'AI Latency' },
  { value: '0%',   label: 'Gender Bias' },
];

const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    features: ['3 Active Job Postings', 'Basic AI Screening', 'Community Support'],
    featured: false,
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    price: '$499',
    period: '/month',
    features: ['Unlimited Job Postings', 'Autonomous Sourcing Engine', 'Technical Live Environment', 'Priority AI Processing'],
    featured: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Custom AI Models', 'White-glove Onboarding', '24/7 Dedicated Support'],
    featured: false,
    cta: 'Contact Sales',
  },
];

export function WorldwideFirstSection() {
  return (
    <section className="py-[80px]">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="glass relative p-[80px] rounded-[2rem] overflow-hidden flex flex-col items-center text-center">
          <div className="ambient-glow bg-[#b4c5ff] w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
          <span className="text-[12px] font-semibold text-[#adc6ff] mb-[24px] tracking-widest uppercase" style={{ fontFamily: 'Inter' }}>
            INDUSTRY LEADERS
          </span>
          <h2 className="text-[48px] font-bold mb-[80px] max-w-2xl" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>
            The world's first autonomous AI for end-to-end technical sourcing.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[80px] w-full">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-[48px] font-bold text-gradient mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>{s.value}</p>
                <p className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ROICalculatorSection() {
  const [monthlyHires, setMonthlyHires] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(150);

  const savings = Math.round((monthlyHires * hourlyRate * 20 * 12 * 0.92) + monthlyHires * 2000);
  const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(savings);

  return (
    <section className="py-[80px] bg-[#080f17]">
      <div className="max-w-[1280px] mx-auto px-[48px] grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
        <div>
          <h2 className="text-[48px] font-bold mb-[24px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>
            Calculate your hiring savings.
          </h2>
          <p className="text-[18px] text-[#c3c6d7] leading-[1.6] mb-[80px]">
            Stop wasting expensive engineering hours on resume screens and bad interviews. See the impact on your bottom line.
          </p>
          <div className="space-y-[24px]">
            <div>
              <div className="flex justify-between mb-[16px]">
                <label className="text-[12px] font-semibold text-[#dce3f0] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Monthly Hires</label>
                <span className="text-[#b4c5ff] font-bold">{monthlyHires}</span>
              </div>
              <input
                type="range" min={1} max={50} value={monthlyHires}
                onChange={(e) => setMonthlyHires(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#b4c5ff] bg-[#2e353f]"
              />
            </div>
            <div>
              <div className="flex justify-between mb-[16px]">
                <label className="text-[12px] font-semibold text-[#dce3f0] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Engineer Hourly Rate</label>
                <span className="text-[#b4c5ff] font-bold">${hourlyRate}/hr</span>
              </div>
              <input
                type="range" min={50} max={500} step={10} value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#b4c5ff] bg-[#2e353f]"
              />
            </div>
          </div>
        </div>

        <div className="glass p-[80px] rounded-[2rem] border border-[#b4c5ff]/20 bg-[#b4c5ff]/5">
          <p className="text-[12px] font-semibold text-[#c3c6d7] mb-[24px] text-center uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>
            ESTIMATED ANNUAL SAVINGS
          </p>
          <p className="text-[64px] font-extrabold text-center text-[#b4c5ff] mb-[24px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            {formatted}
          </p>
          <div className="flex justify-center">
            <button className="primary-gradient font-semibold px-[48px] py-4 rounded-full text-white shadow-xl hover:scale-105 transition-all">
              Unlock Full Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section className="py-[80px]">
      <div className="max-w-[1280px] mx-auto px-[48px] text-center mb-[80px]">
        <h2 className="text-[48px] font-bold mb-[24px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>
          Simple, transparent pricing.
        </h2>
        <p className="text-[#c3c6d7] text-[18px] leading-[1.6]">Scale your hiring without scaling your costs.</p>
      </div>

      <div className="max-w-[1280px] mx-auto px-[48px] grid grid-cols-1 md:grid-cols-3 gap-[24px] items-center">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`glass p-[${plan.featured ? '80px' : '48px'}] rounded-${plan.featured ? '[2rem]' : '2xl'} relative ${
              plan.featured
                ? 'border border-[#b4c5ff] scale-105 shadow-2xl z-10 bg-[#232a34]'
                : ''
            }`}
            style={plan.featured ? { padding: '48px' } : { padding: '32px' }}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 primary-gradient px-[24px] py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                Most Popular
              </div>
            )}
            <h4 className="font-bold mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: plan.featured ? '24px' : '20px' }}>
              {plan.name}
            </h4>
            <div className="mb-[24px]">
              <span className="font-extrabold" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: plan.featured ? '56px' : '40px', color: plan.featured ? '#b4c5ff' : '#dce3f0' }}>
                {plan.price}
              </span>
              {plan.period && <span className="text-[#c3c6d7]">{plan.period}</span>}
            </div>
            <ul className="space-y-[16px] mb-[80px] text-left">
              {plan.features.map((f) => (
                <li key={f} className={`flex items-center gap-[8px] ${plan.featured ? 'text-base' : 'text-sm'}`}>
                  <span className="material-symbols-outlined text-[#b4c5ff]" style={{ fontSize: plan.featured ? '20px' : '16px' }}>check</span>
                  {f}
                </li>
              ))}
            </ul>
            {plan.featured ? (
              <button className="w-full primary-gradient py-4 rounded-2xl font-semibold text-white shadow-xl hover:brightness-110 transition-all">
                {plan.cta}
              </button>
            ) : (
              <button className="w-full glass py-3 rounded-xl font-semibold hover:bg-white/5 transition-all">
                {plan.cta}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
    <section className="py-[80px] relative overflow-hidden">
      <div className="ambient-glow bg-[#8343f4] w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
      <div className="max-w-[1280px] mx-auto px-[48px] text-center z-10 relative">
        <h2 className="text-[64px] font-extrabold mb-[80px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em' }}>
          Start hiring smarter today.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-[24px]">
          <button
            className="primary-gradient font-semibold text-xl px-[64px] py-6 rounded-full text-white transition-all"
            style={{ boxShadow: '0 0 50px rgba(37,99,235,0.4)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 80px rgba(37,99,235,0.6)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 50px rgba(37,99,235,0.4)'; }}
          >
            Get Early Access
          </button>
          <button className="glass font-semibold text-xl px-[64px] py-6 rounded-full text-[#dce3f0] hover:bg-white/10 transition-all">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}
