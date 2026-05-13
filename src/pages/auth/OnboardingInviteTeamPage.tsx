import { useNavigate } from 'react-router-dom';

export default function OnboardingInviteTeamPage() {
  const navigate = useNavigate();

  const handleFinish = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="bg-[#0d141d] text-[#dce3f0] min-h-screen flex flex-col font-body-md overflow-x-hidden selection:bg-[#b4c5ff]/30">
      {/* Ambient Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] bg-[#b4c5ff]/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-[#0566d9]/10 rounded-full blur-[150px]"></div>
      </div>

      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-[24px] py-[80px]">
        {/* Onboarding Progress Indicator */}
        <div className="w-full max-w-[600px] mb-[48px]">
          <div className="flex items-center justify-between px-[8px]">
            <div className="flex flex-col items-center gap-[8px]">
              <div className="w-8 h-8 rounded-full bg-[#b4c5ff] text-[#002a78] flex items-center justify-center font-bold text-sm">1</div>
            </div>
            <div className="flex-grow h-[2px] bg-[#b4c5ff] mx-[8px]"></div>
            <div className="flex flex-col items-center gap-[8px]">
              <div className="w-8 h-8 rounded-full bg-[#b4c5ff] text-[#002a78] flex items-center justify-center font-bold text-sm">2</div>
            </div>
            <div className="flex-grow h-[2px] bg-[#b4c5ff] mx-[8px]"></div>
            <div className="flex flex-col items-center gap-[8px]">
              <div className="w-8 h-8 rounded-full bg-[#b4c5ff] text-[#002a78] flex items-center justify-center font-bold text-sm">3</div>
            </div>
            <div className="flex-grow h-[2px] bg-[#b4c5ff] mx-[8px]"></div>
            <div className="flex flex-col items-center gap-[8px]">
              <div className="w-8 h-8 rounded-full bg-[#2563eb] text-[#eeefff] flex items-center justify-center font-bold text-sm ring-4 ring-[#2563eb]/20">4</div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-[640px] rounded-xl p-[48px] shadow-2xl relative overflow-hidden" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#b4c5ff]/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          {/* Header Section */}
          <div className="mb-[48px]">
            <h1 className="text-[32px] font-bold text-[#dce3f0] mb-[8px] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>Invite your hiring team</h1>
            <p className="text-[#c3c6d7] text-[18px]" style={{ fontFamily: 'Inter' }}>Optional — collaborate with recruiters, interviewers, and managers.</p>
          </div>

          {/* Invite Input Row */}
          <div className="flex flex-col md:flex-row gap-[16px] items-end mb-[48px]">
            <div className="flex-grow w-full">
              <label className="text-[12px] font-semibold tracking-wider uppercase text-[#c3c6d7] mb-[8px] block px-[8px]" style={{ fontFamily: 'Inter' }}>Email Address</label>
              <input className="w-full h-12 px-[24px] rounded-lg bg-[#080f17] border border-[#434655] focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] outline-none transition-all duration-200 text-[#dce3f0]" placeholder="colleague@company.com" type="email" />
            </div>
            <div className="w-full md:w-40">
              <label className="text-[12px] font-semibold tracking-wider uppercase text-[#c3c6d7] mb-[8px] block px-[8px]" style={{ fontFamily: 'Inter' }}>Role</label>
              <div className="relative">
                <select className="w-full h-12 pl-[24px] pr-[80px] rounded-lg bg-[#080f17] border border-[#434655] focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] outline-none transition-all duration-200 text-[#dce3f0] appearance-none">
                  <option>Admin</option>
                  <option>HR Manager</option>
                  <option>Viewer</option>
                </select>
                <span className="material-symbols-outlined absolute right-[24px] top-1/2 -translate-y-1/2 pointer-events-none text-[#c3c6d7]" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
              </div>
            </div>
            <button className="h-12 px-[48px] bg-[#2e353f] hover:bg-[#333a44] text-[#dce3f0] font-semibold text-[15px] rounded-full transition-all duration-200 active:scale-95 flex items-center gap-[8px]" style={{ fontFamily: 'Inter' }}>
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
              Add
            </button>
          </div>

          {/* Invited List */}
          <div className="space-y-[16px] mb-[80px]">
            <h3 className="text-[12px] font-semibold tracking-widest text-[#8d90a0] mb-[16px] px-[8px] uppercase" style={{ fontFamily: 'Inter' }}>Pending Invites</h3>
            
            {/* List Item 1 */}
            <div className="flex items-center justify-between p-[16px] rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-[16px]">
                <div className="w-10 h-10 rounded-full bg-[#0566d9]/30 border border-[#0566d9]/50 flex items-center justify-center text-[#adc6ff] font-bold">JD</div>
                <div>
                  <div className="text-[#dce3f0] font-medium">jane.doe@hireiq.ai</div>
                  <div className="text-[12px] text-[#c3c6d7] flex items-center gap-[4px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]"></span>
                    Invited • 2m ago
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[24px]">
                <span className="px-[16px] py-1 rounded-full bg-[#b4c5ff]/10 text-[#b4c5ff] text-[11px] font-bold uppercase tracking-wider">Admin</span>
                <button className="text-[#c3c6d7] hover:text-[#ffb4ab] transition-colors p-[8px] rounded-full hover:bg-[#ffb4ab]/10">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>close</span>
                </button>
              </div>
            </div>

            {/* List Item 2 */}
            <div className="flex items-center justify-between p-[16px] rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-[16px]">
                <div className="w-10 h-10 rounded-full bg-[#8343f4]/30 border border-[#8343f4]/50 flex items-center justify-center text-[#d2bbff] font-bold">MS</div>
                <div>
                  <div className="text-[#dce3f0] font-medium">mark.smith@hireiq.ai</div>
                  <div className="text-[12px] text-[#c3c6d7] flex items-center gap-[4px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]"></span>
                    Invited • Just now
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[24px]">
                <span className="px-[16px] py-1 rounded-full bg-[#d2bbff]/10 text-[#d2bbff] text-[11px] font-bold uppercase tracking-wider">Viewer</span>
                <button className="text-[#c3c6d7] hover:text-[#ffb4ab] transition-colors p-[8px] rounded-full hover:bg-[#ffb4ab]/10">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>close</span>
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex items-center justify-between pt-[48px] border-t border-white/5">
            <button onClick={handleFinish} className="text-[#c3c6d7] hover:text-[#dce3f0] font-semibold text-[15px] transition-colors px-[24px]" style={{ fontFamily: 'Inter' }}>Skip for now</button>
            <button onClick={handleFinish} className="px-[80px] py-[24px] bg-[#39FF14] text-[#0d141d] font-semibold text-[15px] rounded-full transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] flex items-center gap-[8px]" style={{ fontFamily: 'Inter' }}>
              Go to Dashboard
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Supportive Image Content */}
        <div className="mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-[24px] max-w-[1280px] w-full">
          <div className="p-[24px] rounded-xl flex flex-col items-center text-center" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <span className="material-symbols-outlined text-[#b4c5ff] mb-[16px] text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>groups</span>
            <h4 className="font-bold text-[#dce3f0] mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Collaborative Hiring</h4>
            <p className="text-[14px] text-[#c3c6d7]">Share candidate feedback in real-time with your entire talent acquisition team.</p>
          </div>
          <div className="p-[24px] rounded-xl flex flex-col items-center text-center" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <span className="material-symbols-outlined text-[#d2bbff] mb-[16px] text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>security</span>
            <h4 className="font-bold text-[#dce3f0] mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Role-Based Access</h4>
            <p className="text-[14px] text-[#c3c6d7]">Granular permissions ensure the right people see the right data at the right time.</p>
          </div>
          <div className="p-[24px] rounded-xl flex flex-col items-center text-center" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <span className="material-symbols-outlined text-[#adc6ff] mb-[16px] text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>bolt</span>
            <h4 className="font-bold text-[#dce3f0] mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Faster Decisions</h4>
            <p className="text-[14px] text-[#c3c6d7]">Reduce time-to-hire by automating interview scheduling and scorecard collections.</p>
          </div>
        </div>
      </main>

      {/* Footer Space */}
      <div className="h-[80px]"></div>
    </div>
  );
}
