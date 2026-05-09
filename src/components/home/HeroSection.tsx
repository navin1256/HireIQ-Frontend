const TRUST_LOGOS = [
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoHJc0lYVPLzm0mYtnuEYXSMY9brrkXRtpi4wJ8EXI3S0oSrAlaBri7eUhFwVpURlqbSctdV6_8HKip-SkQP7SZzDi7GYbt2-e14Nt3O9gPX-Xv-WvMtVDGWnx57EDb-yc_LQ0PG8YUJQjTW8CwupQm_-h5wo1I8lK2FfMJBwGdUFHj1xfeFhwBTwUqxuA2cuxUmU73yYOUUwE0ke8mDBqCn-Y2naZXRmUvB51FbXa6hRRIk46cSv9-UQor6YSj9VOTdBxCmBKK6g', alt: 'Logo 1' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQdoyBWBh_H-WUnKnwEtGD8En5OLwcsV5gqnnexxI9K7qerm_vbagoNjPAm0DDbWG-fUbDVZkxYBzF68tJqoGyvjrbiiCbQNCYKDtDWAjZqC7xtUTkGbzpxNvCeo5dQAtzN9K7zvgaI30_0rO75glRVTkpjGp1yuBdlbHrzkjvY1M9o3UTtgpUcloZkLcTRMNqX5XCwxA7c5-nQPwk9x5KzcR2SWBmTLg0rU9UWJehlJivkWqXGs8BwnKG3aXfG361HH7AzNJWtXQ', alt: 'Logo 2' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1AKXrRQaZr1FybSEsYKT2sDQMBb3N1qv7FGtuJXb0vJtRH3pwiSZKCixLkLtpGhO7x1W9zrgW_yv0yML5KILVxgl0X8mk5RGQfqHGYziNJ1Gim08F5g1TXVAsoL7jHWXTvG3zxIbBP_cKnk2SBo0lZ1vx8eI6WInacq55BDWgrkG1R0arBIRSqE3F-8e-XjqY9Rs94eBQiD57sdgWISrQJu1Lxqrpnr4vKPXaVvWJhfswtaUhqlQ0MSeCLDEmdVsdvwrOinEwiZg', alt: 'Logo 3' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwRuejScTQGI7iimWy1qUpPrHbUqOhyFR343ZCPcw9z72JxyV9fPuDrae2B2wHhsiPv2xdvzZ3KWUwFYrmAII81owN1zaLyGeSKuv2NMYplaTTLFYXe2ntP-q_5Ylf8tR1wcHk51tp0bzaDzT227SFWvK6EwW9WVwUD3uDsMuBdrHYrSPGk0hoPZ5MvT89eV5MP_CtAqnHXyTc8nn5WHEJwgPBa0n9NEROEOWj5gr-aXpdg2YblYdg-iiTwRNjYGOzxxX7esCwhnU', alt: 'Logo 4' },
];

export function HeroSection() {
  return (
    <section className="relative pt-[160px] pb-[80px] overflow-hidden flex flex-col items-center text-center">
      <div className="ambient-glow bg-[#b4c5ff] w-[500px] h-[500px] -top-64 -left-32" />
      <div className="ambient-glow bg-[#d2bbff] w-[400px] h-[400px] top-0 -right-32" />

      <div className="max-w-[1280px] px-[48px] z-10 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-[8px] bg-[#232a34] border border-white/10 px-[24px] py-2 rounded-full mb-[24px]">
          <span className="text-[12px] font-semibold text-[#adc6ff] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>New Update</span>
          <span className="text-[16px] font-medium text-[#dce3f0]">Launching November 1, 2025 🚀</span>
        </div>

        {/* Headline */}
        <h1 className="text-[72px] leading-[1.05] font-extrabold max-w-[900px] mb-[24px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em' }}>
          The AI that hires engineers{' '}
          <span className="text-gradient">smarter than any human could.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[18px] leading-[1.6] text-[#c3c6d7] max-w-[600px] mb-[80px]" style={{ fontFamily: 'Inter' }}>
          Streamline your technical recruitment with an autonomous talent acquisition engine designed for the high-velocity engineering teams of the future.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-[24px] mb-[80px]">
          <button className="primary-gradient font-semibold px-[48px] py-5 rounded-full text-white shadow-xl hover:brightness-110 transition-all text-lg">
            Start for Free
          </button>
          <button className="glass font-semibold px-[48px] py-5 rounded-full text-[#dce3f0] hover:bg-white/5 transition-all text-lg">
            Book a Demo
          </button>
        </div>

        {/* Browser Mockup */}
        <div className="relative w-full max-w-[1120px] mx-auto group">
          <div className="absolute -inset-1 primary-gradient opacity-20 blur-2xl group-hover:opacity-30 transition-opacity rounded-2xl" />
          <div className="relative glass rounded-2xl overflow-hidden shadow-2xl">
            {/* Window chrome */}
            <div className="bg-[#080f17]/50 border-b border-white/10 px-[24px] py-[4px] flex items-center gap-[8px]">
              <div className="flex gap-[4px]">
                <div className="w-3 h-3 rounded-full bg-[#ffb4ab]/40" />
                <div className="w-3 h-3 rounded-full bg-[#adc6ff]/40" />
                <div className="w-3 h-3 rounded-full bg-[#b4c5ff]/40" />
              </div>
            </div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQikpRyr8zQR2cU8W-SmFTtzKTw6YFlr0QTpA-a08b-qghdIsa5pUl2VorzvBh5z5lALrPjFgFxOCD3cnzrqZSsyaolfM2suaSNpQTWnBvKLqPBF8UPc0_HNQ7VwChAD89HUL4eiCHfnysDj73u4FwK8sKY36yVWXwCuxXURRonXwhHGDD2oeHs0sPlz6AY4yB9HG62TffRJMgmu-MX1mluJiSGCnP0Dhqkq1bJnyqRzTk1d7aFVveW01Sm4ZhKbjCyMRnxJqNeyQ"
              alt="HireIQ Dashboard Overview"
              className="w-full h-auto opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBarSection() {
  return (
    <section className="py-[80px] border-y border-white/5" style={{ background: 'rgba(8,15,23,0.3)' }}>
      <div className="max-w-[1280px] mx-auto px-[48px] text-center">
        <p className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest mb-[24px] opacity-60" style={{ fontFamily: 'Inter' }}>
          Trusted by engineering teams at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-[80px]">
          {TRUST_LOGOS.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-8 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
