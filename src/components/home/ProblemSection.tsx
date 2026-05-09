const PROBLEMS = [
  {
    icon: 'timer',
    color: '#ffb4ab',
    borderColor: '#ffb4ab',
    title: 'Time Sink',
    desc: 'Senior engineers spend 20+ hours a week interviewing candidates instead of building products.',
  },
  {
    icon: 'troubleshoot',
    color: '#adc6ff',
    borderColor: '#adc6ff',
    title: 'Unfair Bias',
    desc: 'Human reviewers are prone to unconscious bias, leading to missed opportunities and homogenous teams.',
  },
  {
    icon: 'sentiment_dissatisfied',
    color: '#d2bbff',
    borderColor: '#8343f4',
    title: 'Ghosting',
    desc: 'Top-tier candidates leave pipelines because feedback takes weeks instead of hours.',
  },
];

const STEPS = [
  { num: 1, title: 'Job Calibration', desc: 'Upload your JD and technical requirements. AI calibrates the ideal persona.' },
  { num: 2, title: 'AI Sourcing', desc: 'HireIQ scans GitHub, LinkedIn, and StackOverflow for hidden gems.' },
  { num: 3, title: 'Autonomous Vetting', desc: 'Candidates undergo real-world technical assessments monitored by AI.' },
  { num: 4, title: 'Final Interview', desc: 'Meet only the top 1% who are guaranteed to fit your technical bar.' },
];

export function ProblemSection() {
  return (
    <section className="py-[80px] relative">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <h2 className="text-[48px] font-bold text-center mb-[80px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>
          Technical hiring is <span className="text-[#ffb4ab]">broken</span> for everyone.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="glass p-[48px] rounded-[2rem] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: p.borderColor }} />
              <span className="material-symbols-outlined mb-[24px] block text-4xl" style={{ color: p.color }}>
                {p.icon}
              </span>
              <h3 className="text-[32px] font-bold mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>{p.title}</h3>
              <p className="text-[16px] text-[#c3c6d7] leading-[1.5]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section className="py-[80px]" style={{ background: 'rgba(21,28,37,0.5)' }}>
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="flex justify-between items-end mb-[80px]">
          <div className="max-w-[500px]">
            <span className="text-[12px] font-semibold text-[#b4c5ff] tracking-[0.2em] mb-[8px] block uppercase" style={{ fontFamily: 'Inter' }}>
              THE WORKFLOW
            </span>
            <h2 className="text-[48px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>
              Set up in minutes, hire in days.
            </h2>
          </div>
          <button className="glass font-semibold px-[24px] py-3 rounded-full hover:bg-white/5 transition-all text-[15px]">
            View Documentation
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px]">
          {STEPS.map((step) => (
            <div key={step.num} className="relative">
              <div className="w-12 h-12 primary-gradient rounded-full flex items-center justify-center text-white font-bold mb-[24px] shadow-lg"
                   style={{ boxShadow: '0 8px 24px rgba(180,197,255,0.2)' }}>
                {step.num}
              </div>
              <h4 className="text-xl font-bold mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>{step.title}</h4>
              <p className="text-[#c3c6d7] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
