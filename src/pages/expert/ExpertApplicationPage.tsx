import React from 'react';
import { Link } from 'react-router-dom';

export default function ExpertApplicationPage() {
  return (
    <div className="font-body-md text-on-background antialiased selection:bg-emerald-accent/30 bg-background min-h-screen">
      <style>
        {`
          .glass-panel {
              background: rgba(15, 23, 42, 0.7);
              backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.08);
          }
          .form-card {
              background: #111111;
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 20px;
          }
          .input-glow:focus {
              outline: none;
              border-color: #22D97A;
              box-shadow: 0 0 0 4px rgba(34, 217, 122, 0.1);
          }
          .selection-card {
              transition: all 0.2s ease-in-out;
          }
          .selection-card:hover {
              transform: translateY(-4px);
              background: #1e293b;
          }
          .selection-card.active {
              border-color: #22D97A;
              box-shadow: 0 0 15px rgba(34, 217, 122, 0.2);
          }
          .bg-glow {
              position: fixed;
              top: 20%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 600px;
              height: 600px;
              background: radial-gradient(circle, rgba(34, 217, 122, 0.08) 0%, rgba(13, 20, 29, 0) 70%);
              z-index: -1;
              pointer-events: none;
          }
          .emerald-accent-text {
              color: #22D97A;
          }
          .emerald-accent-bg {
              background-color: #22D97A;
          }
          .emerald-accent-border {
              border-color: #22D97A;
          }
        `}
      </style>
      <div className="bg-glow"></div>
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-white/10 shadow-sm">
        <nav className="flex justify-between items-center px-lg h-20 max-w-container-max mx-auto">
          <div className="flex items-center gap-md">
            <Link to="/" className="flex items-center gap-xs">
              <span className="font-h3 text-h3 font-bold text-white tracking-tight">hire</span>
              <span className="font-h3 text-h3 font-bold emerald-accent-text tracking-tight">iq</span>
            </Link>
            <div className="hidden md:block h-6 w-px bg-white/10 mx-sm"></div>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Expert Application</span>
          </div>
          <div className="flex items-center gap-lg">
            <Link to="/become-an-expert" className="text-on-surface-variant hover:text-white transition-all duration-200 font-button text-button flex items-center gap-xs group">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to Career
            </Link>
            <button className="text-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-[28px]">account_circle</span>
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-xl px-md">
        <div className="max-w-[680px] mx-auto">
          {/* Form Card */}
          <div className="form-card p-lg md:p-[36px] shadow-2xl">
            <div className="mb-xl">
              <h1 className="font-h3 text-h3 text-white mb-xs" style={{ fontWeight: 800, fontFamily: "'Plus Jakarta Sans'", fontSize: '28px' }}>
                Apply to Become a HireIQ Expert Interviewer
              </h1>
              <p className="text-on-surface-variant font-body-md">Applications are reviewed within 3 business days.</p>
            </div>
            
            <form className="space-y-xl" onSubmit={(e) => e.preventDefault()}>
              {/* Section 1: Personal Info */}
              <section>
                <h2 className="font-label-caps text-label-caps emerald-accent-text mb-md uppercase tracking-widest">Personal Info</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="space-y-xs">
                    <label className="font-label-caps text-label-caps text-outline block">FULL NAME</label>
                    <input className="w-full bg-[#0B0F19] border border-white/10 rounded-lg p-sm input-glow text-white placeholder:text-white/20 transition-all" placeholder="Alex Chen" type="text" />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-caps text-label-caps text-outline block">EMAIL ADDRESS</label>
                    <input className="w-full bg-[#0B0F19] border border-white/10 rounded-lg p-sm input-glow text-white placeholder:text-white/20 transition-all" placeholder="alex@example.com" type="email" />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-caps text-label-caps text-outline block">PHONE NUMBER</label>
                    <input className="w-full bg-[#0B0F19] border border-white/10 rounded-lg p-sm input-glow text-white placeholder:text-white/20 transition-all" placeholder="+1 (555) 000-0000" type="tel" />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-caps text-label-caps text-outline block">LINKEDIN URL (REQ)</label>
                    <input className="w-full bg-[#0B0F19] border border-white/10 rounded-lg p-sm input-glow text-white placeholder:text-white/20 transition-all" placeholder="linkedin.com/in/alexchen" type="url" />
                  </div>
                  <div className="md:col-span-2 space-y-xs">
                    <label className="font-label-caps text-label-caps text-outline block">GITHUB OR PORTFOLIO</label>
                    <input className="w-full bg-[#0B0F19] border border-white/10 rounded-lg p-sm input-glow text-white placeholder:text-white/20 transition-all" placeholder="github.com/alexchen" type="url" />
                  </div>
                </div>
              </section>

              {/* Section 2: Professional Background */}
              <section>
                <h2 className="font-label-caps text-label-caps emerald-accent-text mb-md uppercase tracking-widest">Professional Background</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-md">
                  <div className="space-y-xs">
                    <label className="font-label-caps text-label-caps text-outline block">CURRENT COMPANY</label>
                    <input className="w-full bg-[#0B0F19] border border-white/10 rounded-lg p-sm input-glow text-white placeholder:text-white/20 transition-all" placeholder="e.g. Meta, Stripe" type="text" />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-caps text-label-caps text-outline block">CURRENT ROLE</label>
                    <input className="w-full bg-[#0B0F19] border border-white/10 rounded-lg p-sm input-glow text-white placeholder:text-white/20 transition-all" placeholder="Senior Software Engineer" type="text" />
                  </div>
                </div>
                <div className="space-y-xs mb-md">
                  <label className="font-label-caps text-label-caps text-outline block">YEARS OF EXPERIENCE</label>
                  <select className="w-full bg-[#0B0F19] border border-white/10 rounded-lg p-sm input-glow text-white appearance-none cursor-pointer">
                    <option>5-8 Years</option>
                    <option>8-12 Years</option>
                    <option>12+ Years</option>
                    <option>L6+ / Staff Level</option>
                  </select>
                </div>
                <div className="space-y-xs">
                  <label className="font-label-caps text-label-caps text-outline block">PREVIOUS COMPANIES</label>
                  <div className="flex flex-wrap gap-xs p-sm bg-[#0B0F19] border border-white/10 rounded-lg">
                    <span className="bg-white/5 px-sm py-1 rounded-full text-sm flex items-center gap-xs border border-white/10">Google <span className="material-symbols-outlined text-xs cursor-pointer hover:text-error">close</span></span>
                    <span className="bg-white/5 px-sm py-1 rounded-full text-sm flex items-center gap-xs border border-white/10">Stripe <span className="material-symbols-outlined text-xs cursor-pointer hover:text-error">close</span></span>
                    <input className="bg-transparent border-none focus:outline-none text-sm text-white placeholder:text-white/20 p-0 ml-xs flex-1" placeholder="Add company..." type="text" />
                  </div>
                </div>
              </section>

              {/* Section 3: Specializations */}
              <section>
                <h2 className="font-label-caps text-label-caps emerald-accent-text mb-md uppercase tracking-widest">Specializations</h2>
                <div className="grid grid-cols-2 gap-sm">
                  <label className="selection-card p-md rounded-xl border border-white/10 cursor-pointer flex items-center gap-sm group">
                    <input className="hidden peer" type="checkbox" />
                    <div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center peer-checked:bg-[#22D97A] peer-checked:border-[#22D97A] transition-colors">
                      <span className="material-symbols-outlined text-xs text-background font-bold opacity-0 peer-checked:opacity-100">check</span>
                    </div>
                    <span className="text-white group-hover:text-[#22D97A] transition-colors">React / Frontend</span>
                  </label>
                  <label className="selection-card p-md rounded-xl border border-white/10 cursor-pointer flex items-center gap-sm group">
                    <input defaultChecked className="hidden peer" type="checkbox" />
                    <div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center peer-checked:bg-[#22D97A] peer-checked:border-[#22D97A] transition-colors">
                      <span className="material-symbols-outlined text-xs text-background font-bold opacity-0 peer-checked:opacity-100">check</span>
                    </div>
                    <span className="text-white group-hover:text-[#22D97A] transition-colors">Backend Architecture</span>
                  </label>
                  <label className="selection-card p-md rounded-xl border border-white/10 cursor-pointer flex items-center gap-sm group">
                    <input defaultChecked className="hidden peer" type="checkbox" />
                    <div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center peer-checked:bg-[#22D97A] peer-checked:border-[#22D97A] transition-colors">
                      <span className="material-symbols-outlined text-xs text-background font-bold opacity-0 peer-checked:opacity-100">check</span>
                    </div>
                    <span className="text-white group-hover:text-[#22D97A] transition-colors">System Design</span>
                  </label>
                  <label className="selection-card p-md rounded-xl border border-white/10 cursor-pointer flex items-center gap-sm group">
                    <input className="hidden peer" type="checkbox" />
                    <div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center peer-checked:bg-[#22D97A] peer-checked:border-[#22D97A] transition-colors">
                      <span className="material-symbols-outlined text-xs text-background font-bold opacity-0 peer-checked:opacity-100">check</span>
                    </div>
                    <span className="text-white group-hover:text-[#22D97A] transition-colors">AI / ML</span>
                  </label>
                </div>
              </section>

              {/* Section 4: Languages */}
              <section>
                <div className="space-y-xs">
                  <label className="font-label-caps text-label-caps text-outline block">SPOKEN LANGUAGES</label>
                  <div className="flex flex-wrap gap-xs p-sm bg-[#0B0F19] border border-white/10 rounded-lg">
                    <span className="bg-white/5 px-sm py-1 rounded-full text-sm flex items-center gap-xs border border-white/10">English <span className="material-symbols-outlined text-xs cursor-pointer hover:text-error">close</span></span>
                    <span className="bg-white/5 px-sm py-1 rounded-full text-sm flex items-center gap-xs border border-white/10">Mandarin <span className="material-symbols-outlined text-xs cursor-pointer hover:text-error">close</span></span>
                    <input className="bg-transparent border-none focus:outline-none text-sm text-white placeholder:text-white/20 p-0 ml-xs flex-1" placeholder="Add language..." type="text" />
                  </div>
                </div>
              </section>

              {/* Section 5: Availability */}
              <section>
                <h2 className="font-label-caps text-label-caps emerald-accent-text mb-md uppercase tracking-widest">Availability</h2>
                <div className="space-y-md">
                  <div className="space-y-xs">
                    <label className="font-label-caps text-label-caps text-outline block">INTERVIEWS PER WEEK</label>
                    <select className="w-full bg-[#0B0F19] border border-white/10 rounded-lg p-sm input-glow text-white appearance-none cursor-pointer">
                      <option>2-5 interviews</option>
                      <option>5-10 interviews</option>
                      <option>10+ interviews</option>
                    </select>
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-caps text-label-caps text-outline block">PREFERRED TIMES (EST)</label>
                    <div className="flex gap-sm">
                      <button className="flex-1 py-sm rounded-full border border-white/10 text-white hover:border-[#22D97A] hover:bg-[#22D97A]/5 transition-all" type="button">Morning</button>
                      <button className="flex-1 py-sm rounded-full border border-[#22D97A] bg-[#22D97A]/10 emerald-accent-text transition-all font-bold" type="button">Afternoon</button>
                      <button className="flex-1 py-sm rounded-full border border-white/10 text-white hover:border-[#22D97A] hover:bg-[#22D97A]/5 transition-all" type="button">Evening</button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Why HireIQ */}
              <section>
                <div className="space-y-xs">
                  <label className="font-label-caps text-label-caps text-outline block">WHY DO YOU WANT TO JOIN HIREIQ?</label>
                  <textarea className="w-full bg-[#0B0F19] border border-white/10 rounded-lg p-sm input-glow text-white placeholder:text-white/20 transition-all resize-none" placeholder="Share your experience as an interviewer and what motivates you..." rows={4}></textarea>
                </div>
              </section>

              {/* Submit Button */}
              <button className="w-full py-md emerald-accent-bg hover:brightness-110 active:scale-[0.98] transition-all rounded-full text-background font-bold text-lg flex items-center justify-center gap-sm shadow-[0_8px_30px_rgb(34,217,122,0.3)]" type="submit">
                Submit Application
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>

          {/* Trust Badges */}
          <div className="mt-lg flex flex-wrap justify-center gap-md">
            <div className="flex items-center gap-sm px-md py-sm bg-surface-container-lowest border border-white/5 rounded-full">
              <span className="material-symbols-outlined emerald-accent-text text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">FAANG-VETTED</span>
            </div>
            <div className="flex items-center gap-sm px-md py-sm bg-surface-container-lowest border border-white/5 rounded-full">
              <span className="material-symbols-outlined emerald-accent-text text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">FLEXIBLE SCHEDULING</span>
            </div>
            <div className="flex items-center gap-sm px-md py-sm bg-surface-container-lowest border border-white/5 rounded-full">
              <span className="material-symbols-outlined emerald-accent-text text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">GLOBAL REMOTE INTERVIEWS</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-xl border-t border-white/5 bg-surface-container-lowest mt-xl">
        <div className="flex flex-col md:flex-row justify-between items-center px-lg max-w-container-max mx-auto gap-md">
          <div className="flex flex-col gap-xs items-center md:items-start">
            <div className="flex items-center gap-xs">
              <span className="font-h3 text-h3 text-white">hire</span>
              <span className="font-h3 text-h3 emerald-accent-text">iq</span>
            </div>
            <p className="font-label-caps text-label-caps text-outline">© 2024 HireIQ. Elite Interviewing Platform.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-lg">
            <a className="font-label-caps text-label-caps text-outline hover:text-on-surface transition-colors" href="#">FAANG-vetted</a>
            <a className="font-label-caps text-label-caps text-outline hover:text-on-surface transition-colors" href="#">Flexible scheduling</a>
            <a className="font-label-caps text-label-caps text-outline hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
