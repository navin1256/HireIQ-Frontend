import { useNavigate } from 'react-router-dom';

export default function OnboardingCreateJobPage() {
  const navigate = useNavigate();

  const handleContinue = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    navigate('/onboarding/invite');
  };

  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body-md selection:bg-[#b4c5ff]/30 min-h-screen relative overflow-x-hidden">
      {/* Hero Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] blur-[100px]" style={{ background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.15) 0%, rgba(15, 23, 42, 0) 70%)' }}></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] blur-[150px]" style={{ background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.15) 0%, rgba(15, 23, 42, 0) 70%)' }}></div>
      </div>

      <main className="relative z-10 max-w-[800px] mx-auto px-[24px] py-[80px]">
        {/* Header & Progress */}
        <div className="mb-[80px] text-center">
          <div className="inline-flex items-center gap-[8px] mb-[24px]">
            <div className="w-8 h-8 rounded-full bg-[#2e353f] flex items-center justify-center text-[#c3c6d7] font-bold text-[12px]">1</div>
            <div className="w-12 h-[2px] bg-[#2e353f]"></div>
            <div className="w-8 h-8 rounded-full bg-[#2e353f] flex items-center justify-center text-[#c3c6d7] font-bold text-[12px]">2</div>
            <div className="w-12 h-[2px] bg-[#b4c5ff]"></div>
            <div className="w-10 h-10 rounded-full bg-[#b4c5ff] flex items-center justify-center text-[#002a78] font-bold shadow-[0_0_20px_rgba(180,197,255,0.3)]">3</div>
          </div>
          <h1 className="text-[48px] font-bold text-[#dce3f0] mb-[8px] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>Create your first job posting</h1>
          <p className="text-[18px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Set up the foundations for your AI-powered recruitment process.</p>
        </div>

        <div className="space-y-[24px]">
          {/* AI Info Card */}
          <div className="p-[24px] rounded-xl flex items-start gap-[24px] group" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="w-12 h-12 rounded-lg bg-[#b4c5ff]/10 flex items-center justify-center text-[#b4c5ff] group-hover:scale-110 transition-transform duration-200">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>robot_2</span>
            </div>
            <div>
              <h4 className="font-semibold text-[15px] text-[#eeefff] mb-1" style={{ fontFamily: 'Inter' }}>AI-Powered Optimization</h4>
              <p className="text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter' }}>AI generates 5 custom interview questions from your job description in 60 seconds.</p>
            </div>
          </div>

          {/* Main Form Card */}
          <div className="p-[48px] rounded-xl" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <form className="space-y-[48px]" onSubmit={handleContinue}>
              {/* Basic Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                <div className="space-y-[8px]">
                  <label className="text-[12px] font-semibold tracking-wider uppercase text-[#c3c6d7] block" style={{ fontFamily: 'Inter' }}>Job Title</label>
                  <input className="w-full bg-[#080f17] border border-[#434655] rounded-lg p-[24px] text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] outline-none transition-all duration-200" placeholder="e.g. Senior Product Designer" type="text" />
                </div>
                <div className="space-y-[8px]">
                  <label className="text-[12px] font-semibold tracking-wider uppercase text-[#c3c6d7] block" style={{ fontFamily: 'Inter' }}>Department</label>
                  <div className="relative">
                    <select className="w-full bg-[#080f17] border border-[#434655] rounded-lg p-[24px] text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] outline-none transition-all duration-200 appearance-none">
                      <option>Engineering</option>
                      <option>Design</option>
                      <option>Product Management</option>
                      <option>Marketing</option>
                      <option>Sales</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-[24px] top-1/2 -translate-y-1/2 pointer-events-none text-[#c3c6d7]" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
                  </div>
                </div>
              </div>

              {/* Location Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] items-end">
                <div className="space-y-[8px]">
                  <label className="text-[12px] font-semibold tracking-wider uppercase text-[#c3c6d7] block" style={{ fontFamily: 'Inter' }}>Location</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-[24px] top-1/2 -translate-y-1/2 text-[#c3c6d7]" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span>
                    <input className="w-full bg-[#080f17] border border-[#434655] rounded-lg p-[24px] pl-[60px] text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] outline-none transition-all duration-200" placeholder="San Francisco, CA" type="text" />
                  </div>
                </div>
                <div className="flex items-center gap-[16px] p-[24px] bg-[#151c25] rounded-lg border border-[#434655]/30">
                  <input className="w-5 h-5 rounded border-[#434655] bg-[#080f17] text-[#b4c5ff] focus:ring-[#b4c5ff]" id="remote" type="checkbox" />
                  <label className="text-[16px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }} htmlFor="remote">Remote Friendly Role</label>
                </div>
              </div>

              {/* Seniority Pills */}
              <div className="space-y-[16px]">
                <label className="text-[12px] font-semibold tracking-wider uppercase text-[#c3c6d7] block" style={{ fontFamily: 'Inter' }}>Seniority Level</label>
                <div className="flex flex-wrap gap-[8px]">
                  <button className="px-[24px] py-[8px] rounded-full border border-[#434655] text-[#c3c6d7] hover:border-[#b4c5ff] hover:text-[#b4c5ff] transition-all duration-200 font-semibold text-[15px]" style={{ fontFamily: 'Inter' }} type="button">Junior</button>
                  <button className="px-[24px] py-[8px] rounded-full bg-[#2563eb] text-[#eeefff] font-semibold text-[15px] border border-[#2563eb] shadow-[0_0_15px_rgba(37,99,235,0.2)]" style={{ fontFamily: 'Inter' }} type="button">Mid</button>
                  <button className="px-[24px] py-[8px] rounded-full border border-[#434655] text-[#c3c6d7] hover:border-[#b4c5ff] hover:text-[#b4c5ff] transition-all duration-200 font-semibold text-[15px]" style={{ fontFamily: 'Inter' }} type="button">Senior</button>
                  <button className="px-[24px] py-[8px] rounded-full border border-[#434655] text-[#c3c6d7] hover:border-[#b4c5ff] hover:text-[#b4c5ff] transition-all duration-200 font-semibold text-[15px]" style={{ fontFamily: 'Inter' }} type="button">Lead</button>
                  <button className="px-[24px] py-[8px] rounded-full border border-[#434655] text-[#c3c6d7] hover:border-[#b4c5ff] hover:text-[#b4c5ff] transition-all duration-200 font-semibold text-[15px]" style={{ fontFamily: 'Inter' }} type="button">Principal</button>
                  <button className="px-[24px] py-[8px] rounded-full border border-[#434655] text-[#c3c6d7] hover:border-[#b4c5ff] hover:text-[#b4c5ff] transition-all duration-200 font-semibold text-[15px]" style={{ fontFamily: 'Inter' }} type="button">Director</button>
                </div>
              </div>

              {/* Interview Type Grid */}
              <div className="space-y-[16px]">
                <label className="text-[12px] font-semibold tracking-wider uppercase text-[#c3c6d7] block" style={{ fontFamily: 'Inter' }}>Interview Type Selection</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                  {/* Option 1 */}
                  <div className="p-[24px] rounded-xl border border-[#b4c5ff] bg-[#b4c5ff]/5 flex items-center gap-[24px] cursor-pointer group transition-all duration-200">
                    <div className="w-10 h-10 rounded-full bg-[#b4c5ff]/20 flex items-center justify-center text-[#b4c5ff]">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>auto_awesome</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>AI Only</div>
                      <div className="text-[12px] text-[#c3c6d7]">Automated screening</div>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-[#b4c5ff] flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#b4c5ff]"></div>
                    </div>
                  </div>
                  
                  {/* Option 2 */}
                  <div className="p-[24px] rounded-xl border border-[#434655] bg-[#080f17] flex items-center gap-[24px] cursor-pointer hover:border-[#b4c5ff]/50 transition-all duration-200">
                    <div className="w-10 h-10 rounded-full bg-[#232a34] flex items-center justify-center text-[#c3c6d7]">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>terminal</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>AI + Live Coding</div>
                      <div className="text-[12px] text-[#c3c6d7]">Technical deep dive</div>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-[#434655]"></div>
                  </div>

                  {/* Option 3 */}
                  <div className="p-[24px] rounded-xl border border-[#434655] bg-[#080f17] flex items-center gap-[24px] cursor-pointer hover:border-[#b4c5ff]/50 transition-all duration-200">
                    <div className="w-10 h-10 rounded-full bg-[#232a34] flex items-center justify-center text-[#c3c6d7]">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>person_pin</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>AI + Expert</div>
                      <div className="text-[12px] text-[#c3c6d7]">Human-led final step</div>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-[#434655]"></div>
                  </div>

                  {/* Option 4 */}
                  <div className="p-[24px] rounded-xl border border-[#434655] bg-[#080f17] flex items-center gap-[24px] cursor-pointer hover:border-[#b4c5ff]/50 transition-all duration-200">
                    <div className="w-10 h-10 rounded-full bg-[#232a34] flex items-center justify-center text-[#c3c6d7]">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard_customize</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[15px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Custom Mix</div>
                      <div className="text-[12px] text-[#c3c6d7]">Build your own flow</div>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-[#434655]"></div>
                  </div>
                </div>
              </div>

              {/* Footer Action */}
              <div className="pt-[24px] border-t border-white/5 flex items-center justify-between gap-[24px]">
                <button className="text-[#c3c6d7] hover:text-[#dce3f0] font-semibold text-[15px] transition-colors duration-200 px-[24px] py-[24px] rounded-full" style={{ fontFamily: 'Inter' }} type="button">Save Draft</button>
                <button className="bg-[#22c55e] text-black font-semibold text-[15px] px-[80px] py-[24px] rounded-full shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-[8px]" style={{ fontFamily: 'Inter' }} type="submit">
                  Create Job &amp; Continue
                  <span className="material-symbols-outlined font-bold" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                </button>
              </div>
            </form>
          </div>

          {/* Supporting Imagery/Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <div className="p-[24px] rounded-xl border-l-4 border-l-[#b4c5ff] flex gap-[24px] items-center" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderRight: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <img className="w-16 h-16 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsAt4vx0PoqQy1n4k_U27HDNki5JnwiVY-7K2-vq6AkHMCatpoBKCebnmByf1w5adVWfYalbvrOwnlXplQW1042BoSsOAZmPcIjM_cP2pKaJ1irVcvjmPUc2zR2Jhl6sIoKBmOgnZiR6_1cZArX9FTHzGZMK20d3BgUO4Y1Cz4yuOLYA6pQy-WlO9fBVw3o_BOb8J99A2t4QHiGGnnrDlOF47UWxuegoglOGa8FFPOeIOOPUUcHgsPG7OlEklLaDhdp7qSY0S31g0" alt="Dashboard visualization" />
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-wider text-[#b4c5ff] mb-1" style={{ fontFamily: 'Inter' }}>PRO TIP</div>
                <div className="text-[16px] text-[#dce3f0] leading-tight" style={{ fontFamily: 'Inter' }}>Complete descriptions get 40% more AI accuracy.</div>
              </div>
            </div>
            <div className="p-[24px] rounded-xl border-l-4 border-l-[#d2bbff] flex gap-[24px] items-center" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderRight: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <img className="w-16 h-16 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9XFlII4BhljnvJllpPhYOa59loTTp6BoPYH1tHoEy6YQSjSRD6acWBqaD_iEoib0n5nzfXlNYl0i3ggvH2SM71Ix-xOwE0XHrZGOpyrbHFZQ-D3r8j2KbIYoHu1YUE50FvGKLmznsgBkEXjIhUoWWRvwr-zbZiBjPuy9aePfRZUGfHgrBBA1dapRWu7J-3AMmErqEXkIOEBo1UwvsmBOs3r_C1UGQKUGta7uN7R3LNsgMfF0aA2AxUwjXKJjL-MjOU4I8kifYlJU" alt="AI Neural Network" />
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-wider text-[#d2bbff] mb-1" style={{ fontFamily: 'Inter' }}>INTERVIEW READY</div>
                <div className="text-[16px] text-[#dce3f0] leading-tight" style={{ fontFamily: 'Inter' }}>AI interviews are available in 24 languages.</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Area */}
      <footer className="max-w-[1280px] mx-auto px-[48px] py-[80px] mt-[80px] border-t border-white/10 text-center">
        <div className="text-[32px] font-bold text-[#dce3f0] mb-[24px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</div>
        <p className="text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter' }}>© 2024 HireIQ AI. All rights reserved. Professional recruiting simplified.</p>
      </footer>
    </div>
  );
}
