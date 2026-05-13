import { Link } from 'react-router-dom';

export default function JobDetailsPage() {
  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body-md overflow-x-hidden min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col py-[16px] bg-[#080f17] border-r border-[#434655]/10 z-[60]">
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0566d9] rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>memory</span>
          </div>
          <div>
            <h1 className="text-[20px] font-bold text-[#adc6ff] leading-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</h1>
            <p className="text-[10px] text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>AI Talent Suite</p>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] transition-all duration-200 hover:bg-[#2e353f]/20 hover:text-[#adc6ff] rounded-xl" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard</span>
            <span className="text-[16px]">Dashboard</span>
          </Link>
          <Link to="/jobs" className="flex items-center gap-3 px-4 py-3 text-[#adc6ff] bg-[#0566d9]/10 border-r-4 border-[#adc6ff] transition-all duration-200 rounded-xl" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
            <span className="text-[16px]">Jobs</span>
          </Link>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] transition-all duration-200 hover:bg-[#2e353f]/20 hover:text-[#adc6ff] rounded-xl" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>group</span>
            <span className="text-[16px]">Candidates</span>
          </a>
          <Link to="/interviews/builder" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] transition-all duration-200 hover:bg-[#2e353f]/20 hover:text-[#adc6ff] rounded-xl" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_today</span>
            <span className="text-[16px]">Interviews</span>
          </Link>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] transition-all duration-200 hover:bg-[#2e353f]/20 hover:text-[#adc6ff] rounded-xl" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>quiz</span>
            <span className="text-[16px]">Assessments</span>
          </a>
          <Link to="/analytics" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] transition-all duration-200 hover:bg-[#2e353f]/20 hover:text-[#adc6ff] rounded-xl" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>bar_chart</span>
            <span className="text-[16px]">Analytics</span>
          </Link>
        </nav>
        <div className="px-4 mt-auto">
          <Link to="/settings" className="flex items-center gap-3 px-4 py-3 text-[#c3c6d7] transition-all duration-200 hover:bg-[#2e353f]/20 hover:text-[#adc6ff] rounded-xl mb-4" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
            <span className="text-[16px]">Settings</span>
          </Link>
          <Link to="/jobs/new" className="w-full bg-[#2563eb] text-white py-3 rounded-xl font-semibold text-[15px] hover:brightness-110 transition-all flex items-center justify-center gap-2" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
            Create New Job
          </Link>
        </div>
      </aside>

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 flex justify-between items-center px-[48px] py-[16px] ml-64 max-w-[calc(100%-16rem)]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)' }}>
        <div className="flex flex-col">
          <nav className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7] mb-1" style={{ fontFamily: 'Inter' }}>
            <Link to="/jobs" className="hover:text-[#dce3f0] transition-colors">Jobs</Link>
            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>chevron_right</span>
            <span className="text-[#adc6ff]">Senior React Developer</span>
          </nav>
          <h2 className="text-[24px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Senior React Developer</h2>
        </div>
        <div className="flex items-center gap-[16px]">
          <button className="px-5 py-2 text-[#c3c6d7] font-semibold text-[15px] hover:text-[#dce3f0] transition-colors flex items-center gap-2" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>edit</span>
            Edit
          </button>
          <button className="px-5 py-2 border border-[#ffb4ab]/40 text-[#ffb4ab] font-semibold text-[15px] hover:bg-[#ffb4ab]/10 rounded-full transition-all flex items-center gap-2" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>pause_circle</span>
            Pause Job
          </button>
          <Link to="/pipeline/senior-react-developer" className="px-6 py-2 bg-[#22D97A] text-[#0d141d] font-semibold text-[15px] hover:brightness-105 rounded-full transition-all shadow-[0_0_20px_rgba(34,217,122,0.2)] flex items-center gap-2" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
            View Pipeline
          </Link>
          <div className="h-8 w-[1px] bg-[#434655]/30 mx-2"></div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#c3c6d7]" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#434655]">
              <img alt="User Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeo6_kkuDiRGiswOLY3dLDB-VMcdvuJWLG1GmdlUPnpbYLsramwNIS9jq0lb92I2wo0jzUCG23O1YvZ_oJ1WFKQppfF5OP9_9BVBq9sv2GvuTgxW3NU3VszBvZUIMO-VoQjR3Tfa8wZcMlMmGw1P44Z38WRS312_mR4wcjwB8U4l1PwuofLStOwr4OjgLZqD8XFUh0HrFtV96021IuUl1p_AhYfO3eSRDXHSHpSY16mNmGfQc8XTkCRCUWP3QHU1pM6Z8zLG16FE4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="ml-64 p-[48px] max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-[24px]">
        {/* Background Ambient Glows */}
        <div className="fixed top-20 right-0 w-[500px] h-[500px] pointer-events-none -z-10" style={{ background: 'radial-gradient(circle at center, rgba(34, 217, 122, 0.1) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="fixed bottom-0 left-64 w-[400px] h-[400px] opacity-50 pointer-events-none -z-10" style={{ background: 'radial-gradient(circle at center, rgba(34, 217, 122, 0.1) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>

        {/* LEFT COLUMN */}
        <div className="space-y-[24px]">
          {/* Job Header Card */}
          <section className="p-[24px] rounded-xl" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-[48px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.2, letterSpacing: '-0.01em' }}>Senior React Developer</h3>
                  <span className="px-3 py-1 bg-[#22D97A]/10 text-[#22D97A] text-[12px] font-bold rounded-full border border-[#22D97A]/20 flex items-center gap-1 uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
                    <span className="w-2 h-2 bg-[#22D97A] rounded-full animate-pulse"></span>
                    Active
                  </span>
                </div>
                <div className="flex flex-wrap gap-[16px] text-[#c3c6d7]">
                  <div className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
                    <span className="material-symbols-outlined text-[#adc6ff] text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>engineering</span>
                    Engineering
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
                    <span className="material-symbols-outlined text-[#adc6ff] text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>distance</span>
                    Remote
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
                    <span className="material-symbols-outlined text-[#adc6ff] text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
                    Full-time
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
                    <span className="material-symbols-outlined text-[#adc6ff] text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>signal_cellular_alt</span>
                    Senior Level
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-[#adc6ff]" style={{ fontFamily: 'Inter' }}>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>payments</span>
                    $120K–$160K
                  </div>
                </div>
              </div>
              <div className="w-16 h-16 bg-[#192029] rounded-xl flex items-center justify-center border border-white/5">
                <img alt="React Logo" className="w-10 h-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQmEuecHYJ59cfQBG-In3yRyCe_1DuXMwQyfXYeECupFQSTLh1uNirNwcMo6HoV3OJYf7vl2HcAHCXN09yc9r_HNVT2pqfOBFo1moh5CmvB0wxTvX8EJcxQXouQezNLTHUak47NpJkb5F2s4dOJt2uzEe-C-IPi8dd3pKKdI9SFtXsaltakEKVxxAFODN_X85uE9IUX3iJs0Le_6OVwYAGjdWSdgyYos-Wiiw8xD-lSLgV4A7qb6wuihPNgQbic_otAIXVNOuJl2g" />
              </div>
            </div>
          </section>

          {/* Pipeline Overview Card */}
          <section className="p-[24px] rounded-xl" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7] mb-6 flex items-center gap-2" style={{ fontFamily: 'Inter' }}>
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>reorder</span>
              Hiring Pipeline Overview
            </h4>
            <div className="flex gap-[16px] overflow-x-auto pb-2">
              <div className="min-w-[140px] flex-1 bg-[#232a34]/50 p-4 rounded-xl border border-white/5 hover:border-[#2563eb]/30 transition-all cursor-pointer group">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7] mb-2" style={{ fontFamily: 'Inter' }}>Applied</p>
                <div className="flex items-center justify-between">
                  <span className="text-[32px] font-bold text-[#dbe1ff]" style={{ fontFamily: 'Plus Jakarta Sans' }}>34</span>
                  <span className="material-symbols-outlined text-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                </div>
                <div className="w-full h-1 bg-[#2563eb]/20 mt-3 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-[#2563eb]"></div>
                </div>
              </div>

              <div className="min-w-[140px] flex-1 bg-[#232a34]/50 p-4 rounded-xl border border-white/5 hover:border-[#22D97A]/30 transition-all cursor-pointer group">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7] mb-2" style={{ fontFamily: 'Inter' }}>AI Screened</p>
                <div className="flex items-center justify-between">
                  <span className="text-[32px] font-bold text-[#22D97A]" style={{ fontFamily: 'Plus Jakarta Sans' }}>18</span>
                  <span className="material-symbols-outlined text-[#22D97A] opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                </div>
                <div className="w-full h-1 bg-[#22D97A]/20 mt-3 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-[#22D97A]"></div>
                </div>
              </div>

              <div className="min-w-[140px] flex-1 bg-[#232a34]/50 p-4 rounded-xl border border-white/5 hover:border-[#8343f4]/30 transition-all cursor-pointer group">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7] mb-2" style={{ fontFamily: 'Inter' }}>Assessment</p>
                <div className="flex items-center justify-between">
                  <span className="text-[32px] font-bold text-[#d2bbff]" style={{ fontFamily: 'Plus Jakarta Sans' }}>12</span>
                  <span className="material-symbols-outlined text-[#8343f4] opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                </div>
                <div className="w-full h-1 bg-[#8343f4]/20 mt-3 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-[#8343f4]"></div>
                </div>
              </div>

              <div className="min-w-[140px] flex-1 bg-[#232a34]/50 p-4 rounded-xl border border-white/5 hover:border-[#adc6ff]/30 transition-all cursor-pointer group">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7] mb-2" style={{ fontFamily: 'Inter' }}>Interviewed</p>
                <div className="flex items-center justify-between">
                  <span className="text-[32px] font-bold text-[#adc6ff]" style={{ fontFamily: 'Plus Jakarta Sans' }}>7</span>
                  <span className="material-symbols-outlined text-[#adc6ff] opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                </div>
                <div className="w-full h-1 bg-[#adc6ff]/20 mt-3 rounded-full overflow-hidden">
                  <div className="w-1/4 h-full bg-[#adc6ff]"></div>
                </div>
              </div>

              <div className="min-w-[140px] flex-1 bg-[#232a34]/50 p-4 rounded-xl border border-white/5 hover:border-[#22D97A]/30 transition-all cursor-pointer group">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7] mb-2" style={{ fontFamily: 'Inter' }}>Decision</p>
                <div className="flex items-center justify-between">
                  <span className="text-[32px] font-bold text-[#22D97A]" style={{ fontFamily: 'Plus Jakarta Sans' }}>3</span>
                  <span className="material-symbols-outlined text-[#22D97A] opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                </div>
                <div className="w-full h-1 bg-[#22D97A]/20 mt-3 rounded-full overflow-hidden">
                  <div className="w-1/6 h-full bg-[#22D97A]"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Job Description Card */}
          <section className="p-[24px] rounded-xl" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="space-y-[32px] text-[#c3c6d7] leading-[1.8]" style={{ fontFamily: 'Inter' }}>
              <div>
                <h4 className="text-[20px] font-bold text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Overview</h4>
                <p className="text-[16px]">We are seeking a Senior React Developer to lead the evolution of our frontend architecture. You'll be responsible for building high-performance, scalable web applications that interface with our core AI engines. This role requires a deep understanding of modern React patterns and a passion for crafting pixel-perfect user experiences.</p>
              </div>
              <div>
                <h4 className="text-[20px] font-bold text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Responsibilities</h4>
                <ul className="list-disc pl-5 space-y-[8px] text-[16px]">
                  <li>Design and implement reusable frontend components using React and TypeScript.</li>
                  <li>Optimize application performance for maximum speed and scalability across diverse devices.</li>
                  <li>Collaborate with UI/UX designers to translate Figma designs into high-quality code.</li>
                  <li>Architect state management solutions using Next.js and specialized libraries.</li>
                  <li>Mentor junior developers and lead technical code reviews.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[20px] font-bold text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Requirements</h4>
                <ul className="list-disc pl-5 space-y-[8px] text-[16px]">
                  <li>6+ years of professional experience in frontend development.</li>
                  <li>Expertise in React, including hooks, context API, and advanced patterns.</li>
                  <li>Strong proficiency in TypeScript and modern JavaScript (ES6+).</li>
                  <li>Experience with Next.js, GraphQL, and Tailwind CSS.</li>
                  <li>Solid understanding of CI/CD pipelines and cloud infrastructure (AWS).</li>
                </ul>
              </div>
              <div className="p-[24px] bg-[#232a34]/30 rounded-xl border border-white/5">
                <h4 className="text-[20px] font-bold text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Benefits</h4>
                <div className="grid grid-cols-2 gap-[16px] text-[16px]">
                  <div className="flex items-center gap-[12px]">
                    <span className="material-symbols-outlined text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                    <span>Premium Healthcare</span>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <span className="material-symbols-outlined text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                    <span>Unlimited PTO</span>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <span className="material-symbols-outlined text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                    <span>$2k Annual Learning Stipend</span>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <span className="material-symbols-outlined text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                    <span>Equity Package</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Required Skills Card */}
          <section className="p-[24px] rounded-xl" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7] mb-[24px]" style={{ fontFamily: 'Inter' }}>Required Skills &amp; Tech Stack</h4>
            <div className="flex flex-wrap gap-[12px]">
              {['React', 'TypeScript', 'Next.js', 'Node.js', 'GraphQL', 'AWS', 'Docker', 'PostgreSQL'].map(skill => (
                <span key={skill} className="px-[20px] py-[8px] rounded-full border border-white/10 bg-[#192029] text-[#adc6ff] font-semibold text-[15px] hover:border-[#22D97A] hover:shadow-[0_0_15px_rgba(34,217,122,0.4)] transition-all duration-200 cursor-default" style={{ fontFamily: 'Inter' }}>{skill}</span>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-[24px]">
          {/* Job Analytics Card */}
          <section className="p-[24px] rounded-xl" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7] mb-[24px]" style={{ fontFamily: 'Inter' }}>Live Insights</h4>
            <div className="space-y-[24px]">
              <div>
                <div className="flex justify-between items-end mb-[8px]">
                  <span className="text-[#c3c6d7] text-[14px]" style={{ fontFamily: 'Inter' }}>Avg Candidate Score</span>
                  <span className="text-[32px] font-bold text-[#22D97A]" style={{ fontFamily: 'Plus Jakarta Sans' }}>74<span className="text-[14px] font-normal text-[#c3c6d7]/50" style={{ fontFamily: 'Inter' }}>/100</span></span>
                </div>
                <div className="w-full h-1.5 bg-[#192029] rounded-full overflow-hidden">
                  <div className="w-[74%] h-full bg-[#22D97A] shadow-[0_0_10px_rgba(34,217,122,0.4)]"></div>
                </div>
              </div>

              <div className="flex justify-between p-[16px] bg-[#151c25] rounded-xl border border-white/5">
                <div>
                  <p className="text-[10px] text-[#c3c6d7] uppercase tracking-wider mb-[4px]" style={{ fontFamily: 'Inter' }}>Pass Rate</p>
                  <p className="text-[20px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>52%</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[#c3c6d7] uppercase tracking-wider mb-[4px]" style={{ fontFamily: 'Inter' }}>Avg Time to Hire</p>
                  <p className="text-[20px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>14 days</p>
                </div>
              </div>

              <div className="h-20 w-full bg-[#232a34]/30 rounded-xl p-[8px] relative overflow-hidden">
                {/* Mini Trend Graph SVG */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <path d="M0 60 Q 20 50, 40 55 T 80 40 T 120 45 T 160 30 T 200 35 T 240 20 T 280 25 T 320 15" fill="none" stroke="#22D97A" strokeWidth="2"></path>
                  <path d="M0 60 Q 20 50, 40 55 T 80 40 T 120 45 T 160 30 T 200 35 T 240 20 T 280 25 T 320 15 V 80 H 0 Z" fill="url(#grad1)" opacity="0.2"></path>
                  <defs>
                    <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#22D97A', stopOpacity: 1 }}></stop>
                      <stop offset="100%" style={{ stopColor: '#22D97A', stopOpacity: 0 }}></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute bottom-[8px] right-[16px] flex items-center gap-1 text-[10px] text-[#22D97A] font-bold" style={{ fontFamily: 'Inter' }}>
                  <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 0" }}>trending_up</span>
                  +12% vs last month
                </div>
              </div>
            </div>
          </section>

          {/* Interview Settings Card */}
          <section className="p-[24px] rounded-xl" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7] mb-[24px] flex items-center justify-between" style={{ fontFamily: 'Inter' }}>
              <span>Interview Settings</span>
              <button className="text-[#adc6ff] text-[11px] hover:underline transition-all">Configure</button>
            </h4>
            <div className="space-y-[16px]">
              <div className="flex items-center justify-between py-[8px] border-b border-white/5">
                <div className="flex items-center gap-[12px]">
                  <span className="material-symbols-outlined text-[#adc6ff] text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>terminal</span>
                  <span className="text-[14px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>AI + Live Coding</span>
                </div>
                <span className="w-8 h-4 bg-[#2563eb]/20 rounded-full relative flex items-center px-1">
                  <div className="w-2.5 h-2.5 bg-[#2563eb] rounded-full translate-x-3.5"></div>
                </span>
              </div>
              <div className="flex items-center justify-between py-[8px] border-b border-white/5">
                <div className="flex items-center gap-[12px]">
                  <span className="material-symbols-outlined text-[#adc6ff] text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>security</span>
                  <span className="text-[14px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Proctoring</span>
                </div>
                <span className="text-[11px] font-bold text-[#22D97A] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Enabled</span>
              </div>
              <div className="flex items-center justify-between py-[8px] border-b border-white/5">
                <div className="flex items-center gap-[12px]">
                  <span className="material-symbols-outlined text-[#adc6ff] text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>tune</span>
                  <span className="text-[14px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>AI Sensitivity</span>
                </div>
                <span className="text-[11px] font-bold text-[#c3c6d7] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Medium</span>
              </div>
              <div className="flex items-center justify-between py-[8px]">
                <div className="flex items-center gap-[12px]">
                  <span className="material-symbols-outlined text-[#adc6ff] text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>analytics</span>
                  <span className="text-[14px] text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Assessment</span>
                </div>
                <span className="text-[11px] font-bold text-[#22D97A] uppercase tracking-widest" style={{ fontFamily: 'Inter' }}>Enabled</span>
              </div>
            </div>
          </section>

          {/* Shareable Application Card */}
          <section className="p-[24px] rounded-xl relative overflow-hidden group" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563eb]/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-[#c3c6d7] mb-[16px]" style={{ fontFamily: 'Inter' }}>Share Application</h4>
            <div className="space-y-[16px]">
              <div className="p-[16px] bg-[#080f17] rounded-xl border border-white/5 flex items-center justify-between">
                <p className="font-mono text-[13px] text-[#adc6ff] truncate mr-2">hireiq.ai/apply/senior-react-developer</p>
                <button className="material-symbols-outlined text-[#c3c6d7] hover:text-[#adc6ff] transition-colors cursor-pointer" style={{ fontVariationSettings: "'FILL' 0" }}>content_copy</button>
              </div>
              <div className="flex items-center gap-[16px]">
                <div className="w-24 h-24 bg-white p-2 rounded-lg flex items-center justify-center">
                  <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center border-2 border-dashed border-slate-300">
                    <span className="material-symbols-outlined text-slate-400" style={{ fontVariationSettings: "'FILL' 0" }}>qr_code_2</span>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#c3c6d7] mb-[8px]" style={{ fontFamily: 'Inter' }}>Scan or copy to invite candidates directly to the pipeline.</p>
                  <button className="text-[#adc6ff] font-semibold text-[14px] flex items-center gap-1 group-hover:gap-2 transition-all" style={{ fontFamily: 'Inter' }}>
                    Generate New Key
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>refresh</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
