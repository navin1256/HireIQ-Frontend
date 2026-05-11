import { Link, useNavigate } from 'react-router-dom';

export default function OnboardingConnectATSPage() {
  const navigate = useNavigate();

  const handleContinue = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    navigate('/onboarding/job'); 
  };

  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body-md overflow-x-hidden min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full h-[80px] z-50 bg-[#0d141d]/70 backdrop-blur-md border-b border-white/10 shadow-sm">
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-[48px] h-full">
          <div className="flex items-center gap-[24px]">
            <Link to="/" className="text-[32px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</Link>
            <div className="h-6 w-[1px] bg-white/10 mx-[4px]"></div>
            <div className="flex items-center gap-[16px]">
              <span className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>Step 2 of 3</span>
              <span className="text-[16px] text-[#b4c5ff] font-bold" style={{ fontFamily: 'Inter' }}>Connect ATS</span>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-[48px] items-center">
            <a className="text-[16px] text-[#c3c6d7] hover:text-[#dce3f0] transition-colors duration-200" style={{ fontFamily: 'Inter' }} href="#">Product</a>
            <a className="text-[16px] text-[#c3c6d7] hover:text-[#dce3f0] transition-colors duration-200" style={{ fontFamily: 'Inter' }} href="#">Features</a>
            <a className="text-[16px] text-[#c3c6d7] hover:text-[#dce3f0] transition-colors duration-200" style={{ fontFamily: 'Inter' }} href="#">Solutions</a>
            <a className="text-[16px] text-[#c3c6d7] hover:text-[#dce3f0] transition-colors duration-200" style={{ fontFamily: 'Inter' }} href="#">Pricing</a>
          </nav>
          
          <div className="flex gap-[16px]">
            <Link to="/login" className="font-semibold text-[15px] text-[#dce3f0] px-[24px] py-[4px] hover:bg-white/5 transition-all duration-200 ease-out rounded-full" style={{ fontFamily: 'Inter' }}>Login</Link>
            <Link to="/signup" className="font-semibold text-[15px] bg-[#2563eb] text-[#eeefff] px-[24px] py-[4px] rounded-full scale-95 active:scale-90 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.3)]" style={{ fontFamily: 'Inter' }}>Get Started</Link>
          </div>
        </div>
      </header>

      <main className="pt-[120px] pb-[80px] px-[48px] max-w-[1280px] mx-auto relative min-h-[calc(100vh-250px)]">
        {/* Ambient background glows */}
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.15) 0%, rgba(13, 20, 29, 0) 70%)' }}></div>
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.15) 0%, rgba(13, 20, 29, 0) 70%)' }}></div>
        
        {/* Progress Indicator */}
        <div className="flex justify-center mb-[80px]">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-[8px]">
              <div className="w-8 h-8 rounded-full bg-[#2563eb] flex items-center justify-center text-[#eeefff] font-bold">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
              </div>
              <span className="text-[#c3c6d7] text-[12px] font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>Profile</span>
            </div>
            <div className="w-12 h-[2px] bg-[#2563eb]"></div>
            <div className="flex items-center gap-[8px]">
              <div className="w-8 h-8 rounded-full bg-[#b4c5ff] flex items-center justify-center text-[#002a78] font-bold">2</div>
              <span className="text-[#b4c5ff] text-[12px] font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>Connect ATS</span>
            </div>
            <div className="w-12 h-[2px] bg-white/10"></div>
            <div className="flex items-center gap-[8px]">
              <div className="w-8 h-8 rounded-full bg-[#192029] flex items-center justify-center text-[#c3c6d7] font-bold border border-white/10">3</div>
              <span className="text-[#c3c6d7] text-[12px] font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>Finalize</span>
            </div>
          </div>
        </div>

        <section className="text-center mb-[80px] max-w-2xl mx-auto">
          <h1 className="text-[48px] font-bold mb-[16px] text-[#dce3f0] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>Connect your existing tools</h1>
          <p className="text-[18px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Optional — you can always do this later in Settings.</p>
        </section>

        {/* 2-Column Grid of ATS Providers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {/* Greenhouse */}
          <div className="p-[24px] rounded-xl hover:bg-[#1E293B] transition-all duration-200 ease-out group flex items-center justify-between" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="flex items-center gap-[24px]">
              <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden border border-white/10">
                <img alt="Greenhouse Logo" className="w-10 h-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGrgmuSYVp13K-6H86Ypz1F88ka904M5gx4Pc4PYkhjZpu9txa7v71oV72_CN6711_YQ5OogTmsk9VSt4vKOZCJJxDADdnJN0FWcJywIp2GfXjkvBv0EnObvzcTdZlFynw3IeXcHr4Ap--t4IhcACALUc9AOhvM-oZUkoPUT1MKo3oyFLgsBECmuKaXXtfUrU_D8wVlYczYl4F6is7FXEDquj_EklC28vHMdoECbS8nefsFkOCdeQ1BwvYqN8BY9ZQQrkBAm7s32I" />
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Greenhouse</h3>
                <p className="text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter' }}>Recruiting and Onboarding</p>
              </div>
            </div>
            <button className="font-semibold text-[15px] border border-[#8d90a0] px-[48px] py-[16px] rounded-full hover:bg-white/5 transition-all duration-200" style={{ fontFamily: 'Inter' }}>Connect</button>
          </div>

          {/* Lever */}
          <div className="p-[24px] rounded-xl hover:bg-[#1E293B] transition-all duration-200 ease-out group flex items-center justify-between" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="flex items-center gap-[24px]">
              <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden border border-white/10">
                <img alt="Lever Logo" className="w-10 h-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLJ9VrI8JXvLYGSgc-AitVemxCzmP48ucIwH8yuXfcuRBQvhx-3dxCuB5X4hqbtkmWKrHz4o3bgM9tu2SqAHnSPJs4H4VjIv8dA_pLnn-nGTOnK_EYgZQHwIKjyEKTA56Ug7hUruwJ-tfxe_xz50gY6WIti8pYI5WRrv7R8_ODdkEt69SpFlHP881wzg_7Q4j-OR40GKQoNfF6XVRZuhp8bit6DJODwgLQnLpCkfex1M2NRm6rhi2pqMzWOyDwCZA1-62vkLEHPp8" />
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Lever</h3>
                <p className="text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter' }}>Talent Acquisition Suite</p>
              </div>
            </div>
            <button className="font-semibold text-[15px] border border-[#8d90a0] px-[48px] py-[16px] rounded-full hover:bg-white/5 transition-all duration-200" style={{ fontFamily: 'Inter' }}>Connect</button>
          </div>

          {/* Workday */}
          <div className="p-[24px] rounded-xl hover:bg-[#1E293B] transition-all duration-200 ease-out group flex items-center justify-between" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="flex items-center gap-[24px]">
              <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden border border-white/10">
                <img alt="Workday Logo" className="w-10 h-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv2FWEnPpIoFjCLjSP-S7J6Xjn8ZZCMOSm1PyBAuEV5Ae7LNxThIoxvv3sH5AAdfIAD6LmNZmBsNTEDwenDjmAYBgC55qMNvKwbtW7mjn7umkhQCJ0XdLUWU9prYgxKCM1WBRZtaqutmeSapacsycU2G3z1P3XmbbITrHZJ4kkbjyr8LtgBfHTkhf-eJpPeCrgT5TeA3NFhpxI3BVM9XtjVYGqVh4rxj2Ysd14BT5mzVVOY9s6s1CRYmxz2MovgmcVT1hrWFVMym8" />
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Workday</h3>
                <p className="text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter' }}>Enterprise HR Management</p>
              </div>
            </div>
            <button className="font-semibold text-[15px] border border-[#8d90a0] px-[48px] py-[16px] rounded-full hover:bg-white/5 transition-all duration-200" style={{ fontFamily: 'Inter' }}>Connect</button>
          </div>

          {/* Ashby */}
          <div className="p-[24px] rounded-xl hover:bg-[#1E293B] transition-all duration-200 ease-out group flex items-center justify-between" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="flex items-center gap-[24px]">
              <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden border border-white/10">
                <img alt="Ashby Logo" className="w-10 h-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtlRPdUUtP-PI-c_BA1jUp2oRP9c76peBk9o_BuV2XXRtLV_Xm5Sm2Jqw56ylFYXv5PhPdvoh9CkxTNqAeIjJbyW7WXKUv4mXl34Ab25PGY6qwbtIJ65o6g18efFMvo5_glUI6hThipQaCQisFHSyWeYQePRVsjzvF69nb5PSnCFfoBefkbbBkgIyIoTkMMyG2M85F7kMsSbui8WjtI5rIoUuVnJJbnASzmMeBkQirwm9QEAVovIsS3-fzjVm5j0AM5EU6cgWEDZc" />
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Ashby</h3>
                <p className="text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter' }}>High-Growth Recruiting</p>
              </div>
            </div>
            <button className="font-semibold text-[15px] border border-[#8d90a0] px-[48px] py-[16px] rounded-full hover:bg-white/5 transition-all duration-200" style={{ fontFamily: 'Inter' }}>Connect</button>
          </div>

          {/* BambooHR */}
          <div className="p-[24px] rounded-xl hover:bg-[#1E293B] transition-all duration-200 ease-out group flex items-center justify-between" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="flex items-center gap-[24px]">
              <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden border border-white/10">
                <img alt="BambooHR Logo" className="w-10 h-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk2ZoNZscFlZRfSQyP57BkXrvYtsrHzRv_nb20xaEkSFyExW0EfQO9qSYJv2Ph6-fuMV8tR7sHx1cpQ127KnveK7HvecvTJ6g38Yov2yRPwWRqmgwFGszApCh6eYQb8VItOyMQxDZ32tBLnRXQRIz6gtHgww5Ub07qFo-bzLewYY-RljhOJN5sAyePGvSkRseKQw9skIaXmzNwF5QqENBG6jQ2BOpChZIQ0qSns0q8i_X62xnkOd4vIb1dbq5D34j13RdXTF53ZiU" />
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>BambooHR</h3>
                <p className="text-[#c3c6d7] text-[16px]" style={{ fontFamily: 'Inter' }}>HR Software for Small Business</p>
              </div>
            </div>
            <button className="font-semibold text-[15px] border border-[#8d90a0] px-[48px] py-[16px] rounded-full hover:bg-white/5 transition-all duration-200" style={{ fontFamily: 'Inter' }}>Connect</button>
          </div>

          {/* More Providers Empty State / Search */}
          <div className="p-[24px] rounded-xl border-dashed border-white/20 border-2 flex flex-col items-center justify-center text-center gap-[16px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)' }}>
            <span className="material-symbols-outlined text-[32px] text-[#c3c6d7]">search</span>
            <span className="text-[16px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>Don't see your tool?</span>
            <button className="text-[12px] font-semibold text-[#b4c5ff] hover:underline uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Search all integrations</button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-[80px] flex justify-between items-center border-t border-white/10 pt-[48px]">
          <Link to="/onboarding" className="font-semibold text-[15px] text-[#c3c6d7] hover:text-[#dce3f0] flex items-center gap-[8px]" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back
          </Link>
          <div className="flex gap-[24px]">
            <button onClick={handleContinue} className="font-semibold text-[15px] text-[#dce3f0] px-[48px] py-[16px] rounded-full hover:bg-white/5 transition-all" style={{ fontFamily: 'Inter' }}>Skip for now</button>
            <button onClick={handleContinue} className="font-semibold text-[15px] bg-[#2563eb] text-[#eeefff] px-[80px] py-[16px] rounded-full hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform active:scale-95" style={{ fontFamily: 'Inter' }}>Continue</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-[80px] bg-[#080f17] border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] max-w-[1280px] mx-auto px-[48px]">
          <div className="col-span-2 md:col-span-1">
            <span className="text-[32px] font-bold text-[#dce3f0] block mb-[24px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</span>
            <p className="text-[16px] text-[#c3c6d7]" style={{ fontFamily: 'Inter' }}>The AI-powered command center for modern talent acquisition.</p>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-[#b4c5ff] uppercase tracking-wider mb-[24px]" style={{ fontFamily: 'Inter' }}>Product</h4>
            <ul className="space-y-[16px]">
              <li><a className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors duration-200" href="#">Features</a></li>
              <li><a className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors duration-200" href="#">Solutions</a></li>
              <li><a className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors duration-200" href="#">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-[#b4c5ff] uppercase tracking-wider mb-[24px]" style={{ fontFamily: 'Inter' }}>Company</h4>
            <ul className="space-y-[16px]">
              <li><a className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors duration-200" href="#">About Us</a></li>
              <li><a className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors duration-200" href="#">Careers</a></li>
              <li><a className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors duration-200" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-[12px] font-semibold text-[#b4c5ff] uppercase tracking-wider mb-[24px]" style={{ fontFamily: 'Inter' }}>Connect</h4>
              <ul className="space-y-[16px]">
                <li><a className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors duration-200" href="#">Blog</a></li>
                <li><a className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors duration-200" href="#">Contact</a></li>
              </ul>
            </div>
            <p className="text-[16px] text-[#c3c6d7] mt-[48px] opacity-80" style={{ fontFamily: 'Inter' }}>© 2024 HireIQ AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
