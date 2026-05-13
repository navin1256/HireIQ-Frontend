import { Link } from 'react-router-dom';

export default function CreateJobPage() {
  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body-md selection:bg-[#b4c5ff]/30 min-h-screen">
      {/* Sidebar Component */}
      <aside className="w-64 h-screen fixed left-0 top-0 bg-[#151c25] border-r border-white/10 backdrop-blur-xl shadow-xl flex flex-col py-[48px] px-[16px] z-50">
        <div className="mb-[80px] px-[16px]">
          <h1 className="text-[32px] font-bold text-[#b4c5ff]" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</h1>
          <p className="text-[#c3c6d7] text-[12px] opacity-60 uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>AI Talent Acquisition</p>
        </div>
        <nav className="flex-1 space-y-[4px]">
          <Link to="/dashboard" className="flex items-center gap-[16px] p-[16px] rounded-lg hover:bg-white/5 transition-all duration-200 text-[#c3c6d7] group" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard</span>
            <span className="text-[16px]">Dashboard</span>
          </Link>
          <Link to="/jobs" className="flex items-center gap-[16px] p-[16px] rounded-lg bg-white/5 text-[#b4c5ff] font-bold border-r-2 border-[#b4c5ff] transition-all duration-200 group" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>work</span>
            <span className="text-[16px]">Jobs</span>
          </Link>
          <a href="#" className="flex items-center gap-[16px] p-[16px] rounded-lg hover:bg-white/5 transition-all duration-200 text-[#c3c6d7] group" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>group</span>
            <span className="text-[16px]">Candidates</span>
          </a>
          <a href="#" className="flex items-center gap-[16px] p-[16px] rounded-lg hover:bg-white/5 transition-all duration-200 text-[#c3c6d7] group" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>event</span>
            <span className="text-[16px]">Interviews</span>
          </a>
          <a href="#" className="flex items-center gap-[16px] p-[16px] rounded-lg hover:bg-white/5 transition-all duration-200 text-[#c3c6d7] group" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>assignment</span>
            <span className="text-[16px]">Assessments</span>
          </a>
          <a href="#" className="flex items-center gap-[16px] p-[16px] rounded-lg hover:bg-white/5 transition-all duration-200 text-[#c3c6d7] group" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>monitoring</span>
            <span className="text-[16px]">Analytics</span>
          </a>
          <a href="#" className="flex items-center gap-[16px] p-[16px] rounded-lg hover:bg-white/5 transition-all duration-200 text-[#c3c6d7] group" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>psychology</span>
            <span className="text-[16px]">Expert IaaS</span>
          </a>
          <Link to="/settings" className="flex items-center gap-[16px] p-[16px] rounded-lg hover:bg-white/5 transition-all duration-200 text-[#c3c6d7] group" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
            <span className="text-[16px]">Settings</span>
          </Link>
        </nav>
        <div className="mt-auto border-t border-white/5 pt-[24px]">
          <button className="w-full bg-[#2563eb] text-[#eeefff] font-semibold text-[15px] py-[16px] rounded-full hover:brightness-110 transition-all duration-200 mb-[24px]" style={{ fontFamily: 'Inter' }}>
            Upgrade Plan
          </button>
          <div className="flex items-center gap-[16px] px-[16px] py-[16px] text-[#c3c6d7] hover:text-[#b4c5ff] cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>account_circle</span>
            <span className="text-[16px]" style={{ fontFamily: 'Inter' }}>Account</span>
          </div>
        </div>
      </aside>

      {/* Top Navigation */}
      <header className="flex justify-between items-center h-20 px-[24px] ml-64 sticky top-0 right-0 bg-[#0d141d]/70 backdrop-blur-md border-b border-white/5 z-40">
        <div className="flex items-center gap-[24px]">
          <Link to="/jobs" className="flex items-center gap-[8px] text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors duration-200 group">
            <span className="material-symbols-outlined text-[24px] group-hover:-translate-x-1 duration-150" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_back</span>
            <span className="font-semibold text-[15px] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>Back to Jobs</span>
          </Link>
          <div className="h-6 w-px bg-white/10"></div>
          <h2 className="text-[32px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Post New Job</h2>
        </div>
        <div className="flex items-center gap-[48px]">
          <div className="flex items-center gap-[8px] px-[24px] py-[8px] rounded-full bg-[#232a34] border border-white/5">
            <span className="w-2 h-2 rounded-full bg-[#b4c5ff] animate-pulse"></span>
            <span className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Draft Saved</span>
          </div>
          <div className="flex items-center gap-[24px]">
            <button className="material-symbols-outlined text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</button>
            <button className="material-symbols-outlined text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>help</button>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
              <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjR1YgNBfe8RhQAXyCLfNo1o2YG4pJn4NeI7iZoNXdEhtzb8Wk1wBcvJWJPFutOvZbCJKRyPWKEqHWw7FmGA-rqhn-7xFmqD-7jc6fAwuT0s7NfD6pHyE2RGcWPiwP4UYW6mBo3fjdDORYxmv7Obx1GLylYOWPsGuMusr5f-6mhRZkaxFRZhiRhPXlsdPfrrL53JkxZUreuGIR7sNo4Ac51z_qO6zFRvhQUVcS9yG6yvyDUC5X4tSJFhB46Jaybn9Nx1WYnqmqYns" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 p-[48px] relative overflow-hidden min-h-[calc(100vh-80px)]">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] pointer-events-none opacity-20" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 70%)' }}></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] pointer-events-none opacity-10" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 70%)' }}></div>
        
        <div className="max-w-[1280px] mx-auto space-y-[80px]">
          {/* Step Indicator */}
          <section className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center relative">
              {/* Progress Line Background */}
              <div className="absolute top-5 left-0 w-full h-[2px] bg-white/5 -z-10"></div>
              {/* Progress Line Active */}
              <div className="absolute top-5 left-0 w-1/4 h-[2px] bg-[#b4c5ff] -z-10"></div>
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-[16px]">
                <div className="w-10 h-10 rounded-full bg-[#b4c5ff] text-[#002a78] flex items-center justify-center font-bold shadow-[0_0_15px_rgba(180,197,255,0.3)]">1</div>
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[#b4c5ff]" style={{ fontFamily: 'Inter' }}>Job Details</span>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center gap-[16px]">
                <div className="w-10 h-10 rounded-full bg-[#232a34] border border-white/10 text-[#c3c6d7] flex items-center justify-center font-bold">2</div>
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Requirements</span>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center gap-[16px]">
                <div className="w-10 h-10 rounded-full bg-[#232a34] border border-white/10 text-[#c3c6d7] flex items-center justify-center font-bold">3</div>
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Interview Setup</span>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col items-center gap-[16px]">
                <div className="w-10 h-10 rounded-full bg-[#232a34] border border-white/10 text-[#c3c6d7] flex items-center justify-center font-bold">4</div>
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Review &amp; Publish</span>
              </div>
            </div>
          </section>

          {/* Form Content: Step 1 */}
          <section className="grid grid-cols-12 gap-[48px] items-start">
            {/* Left Column: Form Fields */}
            <div className="col-span-12 lg:col-span-8 space-y-[24px]">
              <div className="p-[24px] rounded-xl space-y-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="grid grid-cols-2 gap-[24px]">
                  <div className="col-span-2 md:col-span-1 space-y-[8px]">
                    <label className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Job Title</label>
                    <input className="w-full bg-[#0B0F19] border border-white/10 rounded-lg p-[16px] text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff]/20 transition-all outline-none" placeholder="e.g. Senior Backend Engineer" type="text" />
                  </div>
                  <div className="col-span-2 md:col-span-1 space-y-[8px]">
                    <label className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Department</label>
                    <div className="relative">
                      <select className="w-full bg-[#0B0F19] border border-white/10 rounded-lg p-[16px] text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff]/20 transition-all outline-none appearance-none">
                        <option>Engineering</option>
                        <option>Product Management</option>
                        <option>Design</option>
                        <option>Sales &amp; Marketing</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-[16px] top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-[24px]">
                  <div className="col-span-2 md:col-span-1 space-y-[8px]">
                    <label className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Location</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-[16px] top-1/2 -translate-y-1/2 text-[#c3c6d7] text-[24px]" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span>
                      <input className="w-full bg-[#0B0F19] border border-white/10 rounded-lg pl-10 pr-[16px] py-[16px] text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff]/20 transition-all outline-none" placeholder="City, State or Country" type="text" />
                    </div>
                  </div>
                  <div className="col-span-2 md:col-span-1 flex items-end pb-[16px]">
                    <label className="flex items-center gap-[16px] cursor-pointer group">
                      <input className="w-5 h-5 rounded border-white/10 bg-[#0B0F19] text-[#b4c5ff] focus:ring-[#b4c5ff]/20 transition-all" type="checkbox" />
                      <span className="text-[#dce3f0] text-[16px] group-hover:text-[#b4c5ff] transition-colors" style={{ fontFamily: 'Inter' }}>Remote Friendly Position</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-[8px]">
                  <label className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Job Type</label>
                  <div className="flex flex-wrap gap-[16px]">
                    <button className="px-[24px] py-[16px] rounded-full border border-[#b4c5ff] bg-[#b4c5ff]/10 text-[#b4c5ff] font-semibold text-[15px] transition-all" style={{ fontFamily: 'Inter' }}>Full-time</button>
                    <button className="px-[24px] py-[16px] rounded-full border border-white/10 hover:border-[#b4c5ff] hover:bg-white/5 transition-all text-[#c3c6d7] text-[15px] font-semibold" style={{ fontFamily: 'Inter' }}>Part-time</button>
                    <button className="px-[24px] py-[16px] rounded-full border border-white/10 hover:border-[#b4c5ff] hover:bg-white/5 transition-all text-[#c3c6d7] text-[15px] font-semibold" style={{ fontFamily: 'Inter' }}>Contract</button>
                    <button className="px-[24px] py-[16px] rounded-full border border-white/10 hover:border-[#b4c5ff] hover:bg-white/5 transition-all text-[#c3c6d7] text-[15px] font-semibold" style={{ fontFamily: 'Inter' }}>Internship</button>
                  </div>
                </div>

                <div className="space-y-[8px]">
                  <label className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Salary Range (Annual)</label>
                  <div className="flex items-center gap-[24px]">
                    <div className="flex-1 relative">
                      <span className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#c3c6d7]">$</span>
                      <input className="w-full bg-[#0B0F19] border border-white/10 rounded-lg pl-8 pr-[16px] py-[16px] text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff]/20 transition-all outline-none" placeholder="Min" type="number" />
                    </div>
                    <span className="text-white/20">—</span>
                    <div className="flex-1 relative">
                      <span className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#c3c6d7]">$</span>
                      <input className="w-full bg-[#0B0F19] border border-white/10 rounded-lg pl-8 pr-[16px] py-[16px] text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff]/20 transition-all outline-none" placeholder="Max" type="number" />
                    </div>
                    <select className="bg-[#0B0F19] border border-white/10 rounded-lg p-[16px] text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff]/20 transition-all outline-none">
                      <option>USD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Editor Component */}
              <div className="p-[24px] rounded-xl space-y-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="flex items-center justify-between">
                  <label className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Job Description</label>
                  <button className="flex items-center gap-[8px] text-[#b4c5ff] font-semibold text-[15px] hover:underline decoration-[#b4c5ff]/30" style={{ fontFamily: 'Inter' }}>
                    <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 0" }}>auto_awesome</span>
                    Generate with AI
                  </button>
                </div>
                <div className="bg-[#0B0F19] border border-white/10 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-[24px] p-[16px] border-b border-white/5 bg-white/5">
                    <span className="material-symbols-outlined text-[#c3c6d7] hover:text-[#dce3f0] cursor-pointer" style={{ fontVariationSettings: "'FILL' 0" }}>format_bold</span>
                    <span className="material-symbols-outlined text-[#c3c6d7] hover:text-[#dce3f0] cursor-pointer" style={{ fontVariationSettings: "'FILL' 0" }}>format_italic</span>
                    <span className="material-symbols-outlined text-[#c3c6d7] hover:text-[#dce3f0] cursor-pointer" style={{ fontVariationSettings: "'FILL' 0" }}>format_list_bulleted</span>
                    <span className="material-symbols-outlined text-[#c3c6d7] hover:text-[#dce3f0] cursor-pointer" style={{ fontVariationSettings: "'FILL' 0" }}>format_list_numbered</span>
                    <span className="material-symbols-outlined text-[#c3c6d7] hover:text-[#dce3f0] cursor-pointer" style={{ fontVariationSettings: "'FILL' 0" }}>link</span>
                  </div>
                  <textarea className="w-full bg-transparent p-[24px] text-[#dce3f0] placeholder:text-white/20 focus:outline-none resize-none" placeholder="Write about the role, culture, and what you're looking for..." rows={12}></textarea>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar / Summary */}
            <div className="col-span-12 lg:col-span-4 space-y-[24px]">
              <div className="p-[24px] rounded-xl space-y-[24px] sticky top-24" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <h4 className="text-[18px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>Posting Guide</h4>
                <div className="space-y-[16px]">
                  <div className="flex gap-[16px]">
                    <div className="w-8 h-8 rounded-full bg-[#b4c5ff]/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[#b4c5ff] text-[15px]" style={{ fontVariationSettings: "'FILL' 0" }}>check</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Be Specific</p>
                      <p className="text-[12px] text-[#c3c6d7]">Roles with specific titles get 35% more relevant applications.</p>
                    </div>
                  </div>
                  <div className="flex gap-[16px]">
                    <div className="w-8 h-8 rounded-full bg-[#b4c5ff]/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[#b4c5ff] text-[15px]" style={{ fontVariationSettings: "'FILL' 0" }}>check</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Salary Transparency</p>
                      <p className="text-[12px] text-[#c3c6d7]">Including a range increases click-through rates by 2.4x.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#232a34] rounded-xl p-[24px] border border-white/5 space-y-[16px]">
                  <div className="flex justify-between items-center text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>
                    <span>Optimization Score</span>
                    <span className="text-[#b4c5ff]">72%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[72%] h-full bg-[#b4c5ff]"></div>
                  </div>
                  <p className="text-[11px] text-[#c3c6d7]/60 italic">"Adding interview steps will boost your AI matching accuracy."</p>
                </div>
                <div className="pt-[24px] space-y-[16px]">
                  <button className="w-full bg-[#b4c5ff] text-[#002a78] font-semibold text-[15px] py-[16px] rounded-full hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200" style={{ fontFamily: 'Inter' }}>
                    Save &amp; Continue
                  </button>
                  <button className="w-full bg-white/5 text-[#c3c6d7] border border-white/10 font-semibold text-[15px] py-[16px] rounded-full hover:bg-white/10 transition-all duration-200" style={{ fontFamily: 'Inter' }}>
                    Preview Draft
                  </button>
                </div>
              </div>

              {/* Visual Accent Card */}
              <div className="rounded-xl overflow-hidden h-48 relative group cursor-pointer border border-white/10 shadow-2xl">
                <img alt="Office Environment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATgk2Hlt9BRwhMVRtKpTsiTD7_MmGlWfeaS_2dVePutISOP8Zm33hixdS8wJbmA461f4qngsJ0qwXIsf4kwywDwoJ2hKzrCSMotg2XNjgydGyxZXU4tb-u7U2vBVYXGkr8Yn39CHsxNTrfEIKmh1ZgwGqk9aCbFjXG2pJnJJbtqZEjquuwdIkXkqpZiiD0Bgq9u4UG5j_gOkp83smEUhsOZifGLo58QYxbUfjIPRlBcpQi09YYE7hnVAV75Hh4DnzTcb6yiWZH-W4" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d141d] to-transparent"></div>
                <div className="absolute bottom-[24px] left-[24px]">
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-[#b4c5ff] mb-1" style={{ fontFamily: 'Inter' }}>Company Culture</p>
                  <p className="text-[15px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Showcase where they'll work</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
