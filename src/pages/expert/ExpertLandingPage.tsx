import React from 'react';
import { Link } from 'react-router-dom';

export default function ExpertLandingPage() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary/30 min-h-screen">
      <style>
        {`
          .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
          .glass-card {
              background: rgba(15, 23, 42, 0.7);
              backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.08);
          }
          .expert-primary-gradient {
              background: linear-gradient(135deg, #22D97A 0%, #0566d9 100%);
          }
          .expert-ambient-glow {
              position: absolute;
              width: 400px;
              height: 400px;
              background: radial-gradient(circle, rgba(34, 217, 122, 0.1) 0%, transparent 70%);
              filter: blur(100px);
              z-index: -1;
          }
        `}
      </style>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md dark:bg-surface/70 border-b border-white/10 shadow-sm">
        <div className="max-w-container-max mx-auto px-lg flex items-center justify-between h-20">
          <div className="font-h3 text-h3 font-bold text-on-surface tracking-tight">HireIQ Expert</div>
          <div className="hidden md:flex items-center gap-lg">
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-200" href="#">Program</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-200" href="#">Earnings</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-200" href="#">Process</a>
            <a className="font-body-md text-body-md text-primary font-semibold" href="#">Requirements</a>
          </div>
          <button className="bg-primary-container text-on-primary-container px-lg py-sm rounded-full font-button text-button hover:opacity-80 transition-all duration-200 active:scale-95">
            Join Waitlist
          </button>
        </div>
      </nav>

      <main className="relative pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-xl pb-xl">
          <div className="expert-ambient-glow -top-20 -left-20"></div>
          <div className="max-w-container-max mx-auto px-lg text-center">
            <div className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-surface-container-highest border border-white/10 mb-md">
              <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">Now accepting Engineering Leads</span>
            </div>
            <h1 className="font-h1 text-h1 text-on-surface mb-md max-w-4xl mx-auto">
              Earn money doing what you already love — <span className="text-transparent bg-clip-text expert-primary-gradient">interviewing engineers.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-2xl mx-auto">
              Partner with the world's leading tech companies. Conduct technical interviews on your schedule and earn <span className="text-on-surface font-semibold">$75–$150 per interview.</span>
            </p>
            <div className="flex flex-col md:flex-row gap-md justify-center items-center">
              <button className="expert-primary-gradient text-white px-xl py-md rounded-full font-button text-button shadow-lg shadow-primary/20 hover:brightness-110 transition-all duration-200">
                Become an Expert
              </button>
              <button className="px-xl py-md rounded-full border border-white/10 bg-white/5 font-button text-button hover:bg-white/10 transition-all duration-200">
                View Sample Interview
              </button>
            </div>
          </div>
        </section>

        {/* Earnings Calculator Section */}
        <section className="py-xl relative">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="grid md:grid-cols-2 gap-xl items-center">
              <div>
                <h2 className="font-h2 text-h2 text-on-surface mb-md">Calculate your <br/>potential earnings</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                  The more you interview, the more you earn. Our experts typically conduct 5 to 10 interviews per week alongside their full-time roles.
                </p>
                <ul className="space-y-sm">
                  <li className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-[#22D97A]">check_circle</span>
                    <span className="text-on-surface">Weekly payouts via Stripe or PayPal</span>
                  </li>
                  <li className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-[#22D97A]">check_circle</span>
                    <span className="text-on-surface">Set your own rates as you level up</span>
                  </li>
                </ul>
              </div>
              <div className="glass-card p-lg rounded-xl shadow-2xl relative">
                <div className="expert-ambient-glow -bottom-20 -right-20 opacity-20"></div>
                <div className="mb-lg">
                  <label className="font-label-caps text-label-caps text-outline block mb-md">INTERVIEWS PER WEEK</label>
                  <input className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-[#22D97A]" max="20" min="1" type="range" defaultValue="5" />
                  <div className="flex justify-between mt-sm text-on-surface-variant font-label-caps">
                    <span>1</span>
                    <span>20+</span>
                  </div>
                </div>
                <div className="bg-surface-container-low p-lg rounded-lg border border-white/5">
                  <div className="text-center">
                    <span className="font-label-caps text-label-caps text-outline block mb-xs">ESTIMATED MONTHLY EARNINGS</span>
                    <div className="font-h1 text-h1 text-on-surface">$2,250</div>
                    <span className="text-primary-container font-semibold">Based on $112.50 avg / interview</span>
                  </div>
                </div>
                <button className="w-full mt-lg py-md rounded-full border border-[#22D97A]/30 text-[#22D97A] hover:bg-[#22D97A]/10 transition-all font-button">
                  Start Application
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Bento Grid */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="text-center mb-xl">
              <h2 className="font-h2 text-h2 text-on-surface mb-sm">What we look for</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">We only accept the top 1% of technical talent to our expert network.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
              <div className="md:col-span-2 glass-card p-lg rounded-xl flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary mb-md text-[40px]">psychology</span>
                  <h3 className="font-h3 text-h3 text-on-surface mb-sm">Experience</h3>
                  <p className="text-on-surface-variant">At least 5+ years of professional software engineering experience at top-tier tech companies or high-growth startups.</p>
                </div>
              </div>
              <div className="glass-card p-lg rounded-xl">
                <span className="material-symbols-outlined text-tertiary mb-md text-[40px]">history_edu</span>
                <h3 className="font-h3 text-[24px] text-on-surface mb-sm">Background</h3>
                <p className="text-on-surface-variant">Proven track record of hiring and mentoring engineers in your previous roles.</p>
              </div>
              <div className="glass-card p-lg rounded-xl">
                <span className="material-symbols-outlined text-secondary mb-md text-[40px]">forum</span>
                <h3 className="font-h3 text-[24px] text-on-surface mb-sm">Communication</h3>
                <p className="text-on-surface-variant">Exceptional English verbal skills and the ability to provide constructive feedback.</p>
              </div>
              <div className="md:col-span-4 glass-card p-lg rounded-xl flex flex-col md:flex-row items-center gap-lg">
                <div className="md:w-1/2">
                  <h3 className="font-h3 text-h3 text-on-surface mb-sm">Domain Specialties</h3>
                  <p className="text-on-surface-variant mb-md">We are actively seeking experts in Distributed Systems, Frontend (React/Next.js), Mobile (Swift/Kotlin), and Machine Learning Infrastructure.</p>
                  <div className="flex flex-wrap gap-xs">
                    <span className="px-sm py-xs rounded-full bg-primary/10 text-primary text-[12px] font-bold">DISTRIBUTED SYSTEMS</span>
                    <span className="px-sm py-xs rounded-full bg-secondary/10 text-secondary text-[12px] font-bold">LLM INFRA</span>
                    <span className="px-sm py-xs rounded-full bg-tertiary/10 text-tertiary text-[12px] font-bold">CYBERSECURITY</span>
                  </div>
                </div>
                <div className="md:w-1/2 w-full h-48 rounded-lg overflow-hidden relative">
                  <img alt="A sophisticated, high-contrast overhead shot of a modern dark-themed office environment where several professional software engineers are collaborating. The scene is illuminated by soft, focused neon green and blue ambient lighting that highlights the clean, minimalist lines of the workstation. The overall aesthetic is high-end, technical, and authoritative, perfectly aligning with a premium SaaS brand for technical experts." className="w-full h-full object-cover grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgmZGe_J3O0ayGROZ-_yh36Up2i6PV5KH7QEAdsNIeGcV0yHbR2BYZiDpJLuYNobcuxAByxXAp9oD4ikIIBT4j4beqEZh5ye5FeWp7QUGWmc547uYnBZarkh4pd7L11S-k2SPkJx_pP3KOjHjZL1j-CFUgZIO7hJ50rsEFBzau9DKMWiBMhySTYtivyWkCzPrtjy1ZLKpU-HCDCnjfIk0bz42gmulmcmWjyV81q0muduCDRfWI9PvJIFTvDz_MNYrv00KH050jAD8" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-xl">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="flex flex-col md:flex-row gap-xl items-center">
              <div className="md:w-1/2">
                <h2 className="font-h2 text-h2 text-on-surface mb-lg">Your journey to <br/>becoming an Expert</h2>
                <div className="space-y-lg">
                  <div className="flex gap-md">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 font-bold text-primary">1</div>
                    <div>
                      <h4 className="font-h3 text-[20px] text-on-surface mb-xs">Apply &amp; Resume Review</h4>
                      <p className="text-on-surface-variant">Submit your professional profile. Our team reviews your experience and hiring history to ensure a match.</p>
                    </div>
                  </div>
                  <div className="flex gap-md">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 font-bold text-secondary">2</div>
                    <div>
                      <h4 className="font-h3 text-[20px] text-on-surface mb-xs">Technical Vetting</h4>
                      <p className="text-on-surface-variant">Complete a mock interview and a technical screening to demonstrate your evaluation skills.</p>
                    </div>
                  </div>
                  <div className="flex gap-md">
                    <div className="w-12 h-12 rounded-full bg-tertiary/20 flex items-center justify-center shrink-0 font-bold text-tertiary">3</div>
                    <div>
                      <h4 className="font-h3 text-[20px] text-on-surface mb-xs">Get Matched &amp; Earn</h4>
                      <p className="text-on-surface-variant">Once onboarded, start receiving interview requests. Accept the ones that fit your schedule.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <img alt="A focused close-up of a professional software engineer participating in a remote technical interview, looking into the webcam with a confident and helpful expression. The room has soft, cinematic lighting with a deep navy and emerald green background glow. High-end headphones and a professional microphone are visible, emphasizing the quality and precision of the HireIQ expert network and the technological workspace." className="w-full aspect-square object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtJxSao-HloD-HciKDY348rr2vensL2_fYVnlcoq0CNK3kJ3_FlHxq00xVagrav_gnW6dBKf66N-v-uajvRAUh74W86-_X_emShk2Q9Pbh2mn9EUMKRjm-X0Ezeq5gyRTUA2rR-sWIDh68eRZ7xV0eb6L_xyFbKM2B1y_byX-VR_S2YY4pWKJm-_I2tsJTuUGOqwrM5T_DwnPQuFbhZL25kfzewvpniMY0c6_WrI0pSiXgJSqy_qwGd1gwRp3xhTSFN-_H_sQmi9M" />
                  <div className="absolute bottom-md left-md right-md glass-card p-md rounded-lg">
                    <div className="flex items-center gap-sm mb-xs">
                      <div className="w-2 h-2 rounded-full bg-[#22D97A] animate-pulse"></div>
                      <span className="font-label-caps text-[10px] text-white">LIVE INTERVIEW IN PROGRESS</span>
                    </div>
                    <div className="text-white font-semibold">System Design: Scaling Uber</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-xl bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-lg">
            <h2 className="font-h2 text-h2 text-center text-on-surface mb-xl">Voices from the network</h2>
            <div className="grid md:grid-cols-3 gap-lg">
              {/* Testimonial 1 */}
              <div className="glass-card p-lg rounded-xl border-t-4 border-primary">
                <div className="flex items-center gap-md mb-md">
                  <img alt="David K." className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqF6_R9uax4cDA9zXLsY5sLWS8bcm9rGl1oAJ47v8nOExifFQzzyQxfd9LHScQHOwdwv1Lct_6BfLUEF3xsvVrH1N1VTQWicm_fUiRw9DmH9xOSOsJeIY3d4c-4JPaw9fp2Os3oUyTCxQqRWL4LXZDqbF80AymmcBqZSKVtuOzzyI7dCZ8DIvgzvzYQbjOY0Aod3oNwj2pPJcH9XtTzWKHSYXSrXIV1DbwmzFq4q4Q_LNh1p196ua0NsNv78ubWMn29er0RxtFGek" />
                  <div>
                    <h4 className="text-on-surface font-bold">David K.</h4>
                    <p className="text-outline text-sm">Staff Engineer @ Meta</p>
                  </div>
                </div>
                <p className="text-on-surface-variant italic mb-lg">"HireIQ allows me to keep my interviewing skills sharp while helping companies find great talent. The payout is the best in the industry."</p>
                <div className="flex justify-between items-center pt-md border-t border-white/5">
                  <div>
                    <span className="block text-outline text-[10px] font-bold">EARNINGS</span>
                    <span className="text-on-surface font-bold">$18.5k+</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-outline text-[10px] font-bold">RATING</span>
                    <span className="text-[#22D97A] font-bold">4.9/5.0</span>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="glass-card p-lg rounded-xl border-t-4 border-[#22D97A]">
                <div className="flex items-center gap-md mb-md">
                  <img alt="Elena R." className="w-16 h-16 rounded-full object-cover border-2 border-[#22D97A]/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX5albCiGHIcGFUnmgUCTEKQlvc-lF-LEH8dXEBCq1WFNme6cV5YJbjD3GDUjF1i9WlT_GcGpDUrTkySR39dJze4pP4j5_RBcF5Owy5YKiPx8VaOGXKA1IbhVm7soFgfczqkUOnJuPd1AYfkKNoe83bXaBglAd0aA0h4uhWGHspsZGakcG22NIypPSqiJno39A5J1tOOpG1HBLn9r93r9tW_nEUkrP0L3ELzuzV6OyrEeoPvG6tqfRrRYW_ViHh27m16Xqv24nqU4" />
                  <div>
                    <h4 className="text-on-surface font-bold">Elena R.</h4>
                    <p className="text-outline text-sm">VP Engineering @ Stealth</p>
                  </div>
                </div>
                <p className="text-on-surface-variant italic mb-lg">"The flexibility is incredible. I schedule interviews during my morning blocks and the quality of the candidates provided is always top-notch."</p>
                <div className="flex justify-between items-center pt-md border-t border-white/5">
                  <div>
                    <span className="block text-outline text-[10px] font-bold">EARNINGS</span>
                    <span className="text-on-surface font-bold">$32.1k+</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-outline text-[10px] font-bold">RATING</span>
                    <span className="text-[#22D97A] font-bold">5.0/5.0</span>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="glass-card p-lg rounded-xl border-t-4 border-tertiary">
                <div className="flex items-center gap-md mb-md">
                  <img alt="Marcus T." className="w-16 h-16 rounded-full object-cover border-2 border-tertiary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBszTsthIZs47kEMeS38uFKREv_9EVa2QhNSVJUltbOiHBU4RlHmrQ4xTn-9p3CyltyICDDzvt2Fxc3iiXE6wl_ViYcZO0I94hgChhHrsrOK9c0zAmRPb_GE31tF3lrVZejcRAL1LDXS0DHViyn8xn26vt4hP_uGIGrbhneL-Wa-MOCqxhGAmOu_xd3WzIR0uFnWgw7sB9XUTFDrfkrQuAOxnYNEcIABoVXw6EKLr7BrbGDfxAIkpqNp6yQeOKu7QhOKdw56t8yD2o" />
                  <div>
                    <h4 className="text-on-surface font-bold">Marcus T.</h4>
                    <p className="text-outline text-sm">Sr. Architect @ Netflix</p>
                  </div>
                </div>
                <p className="text-on-surface-variant italic mb-lg">"I love the structured feedback system. It makes the job efficient and ensures the candidate gets a fair shot every time."</p>
                <div className="flex justify-between items-center pt-md border-t border-white/5">
                  <div>
                    <span className="block text-outline text-[10px] font-bold">EARNINGS</span>
                    <span className="text-on-surface font-bold">$12.2k+</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-outline text-[10px] font-bold">RATING</span>
                    <span className="text-[#22D97A] font-bold">4.8/5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-[120px] relative overflow-hidden">
          <div className="expert-ambient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
          <div className="max-w-container-max mx-auto px-lg text-center relative z-10">
            <h2 className="font-h1 text-h1 text-on-surface mb-lg">Ready to become a <br/>HireIQ expert?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-2xl mx-auto">
              Join a community of the world's best technical interviewers. We're currently reviewing applications for all roles.
            </p>
            <button className="expert-primary-gradient text-white px-[64px] py-[24px] rounded-full font-button text-[20px] shadow-2xl hover:scale-105 transition-all duration-300">
              Apply Now
            </button>
            <p className="mt-lg text-outline font-label-caps tracking-widest uppercase">Response time: ~48 hours</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest w-full py-xl border-t border-white/5">
        <div className="max-w-container-max mx-auto px-lg flex flex-col md:flex-row justify-between items-center gap-md">
          <div className="flex flex-col gap-xs items-center md:items-start">
            <div className="font-h3 text-h3 font-bold text-on-surface">HireIQ Expert</div>
            <p className="font-body-md text-body-md text-on-surface-variant opacity-60">Elevating the standard of technical hiring.</p>
          </div>
          <div className="flex gap-lg">
            <a className="font-body-md text-body-md text-outline hover:text-on-surface hover:text-primary transition-colors duration-200" href="#">Privacy Policy</a>
            <a className="font-body-md text-body-md text-outline hover:text-on-surface hover:text-primary transition-colors duration-200" href="#">Terms of Service</a>
            <a className="font-body-md text-body-md text-outline hover:text-on-surface hover:text-primary transition-colors duration-200" href="#">Expert Portal</a>
            <a className="font-body-md text-body-md text-outline hover:text-on-surface hover:text-primary transition-colors duration-200" href="#">Support</a>
          </div>
          <div className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant opacity-40">
            © 2024 HireIQ Global. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
