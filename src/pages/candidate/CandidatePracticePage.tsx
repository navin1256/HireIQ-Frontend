import React from 'react';
import { Link } from 'react-router-dom';

export default function CandidatePracticePage() {
  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-['Inter'] min-h-screen">
      <style>
        {`
          .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
              vertical-align: middle;
          }
          .logo-font { font-family: 'Comfortaa', sans-serif; }
        `}
      </style>
      
      {/* SideNavBar (Shared Component) */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#141b2b] dark:bg-[#ffffff] flex flex-col py-[48px] justify-between z-50">
        <div className="flex flex-col gap-[48px] px-[24px]">
          {/* Brand Logo */}
          <div className="flex items-center gap-[8px]">
            <span className="logo-font text-[20px] leading-[1.4] font-semibold font-black text-[#5eff9c]">HireAI</span>
          </div>
          {/* Profile Info */}
          <div className="flex items-center gap-[12px]">
            <img alt="Candidate Profile Picture" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2hun2AP4zxA8EhhP5_HkR_ND5yFXbyFqQO-CUs8nfxB8vOOKlk8p-whPN1kcCY-n33QtDqpvSLodiRmiAIUemcwhX9-detU2uIZr_8Rk3jtxmTjiH7VCt1vdk0hiKsOz2_hJ7zESp_fTOoAsL8-P4PrKuS6dQVdo1pXBy-7eIiPtj0c_EGpwtPYhJ9y0KrKeez0chilAqL1AqI8c_v542MjIhqhrnkOZ0-SY8T8Vd8qOpLGSUtnSWMlZxdradMXJV44vCN8ArvGk" />
            <div className="flex flex-col">
              <span className="text-[16px] leading-[1.5] font-normal text-white font-bold">Alex Rivers</span>
              <span className="text-[#7d8497] text-[12px] leading-[1] tracking-[0.05em] font-semibold">AI Engineer Candidate</span>
            </div>
          </div>
          {/* Nav Links */}
          <nav className="flex flex-col gap-[4px]">
            <Link className="flex items-center gap-[12px] px-[24px] py-[12px] text-[#c0c6db] hover:text-[#dce2f7] hover:bg-[#404758] transition-colors duration-200 rounded-lg" to="/candidate/dashboard">
              <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
              <span className="text-[16px] leading-[1.5] font-normal">Dashboard</span>
            </Link>
            <Link className="flex items-center gap-[12px] px-[24px] py-[12px] text-[#c0c6db] hover:text-[#dce2f7] hover:bg-[#404758] transition-colors duration-200 rounded-lg" to="/candidate/applications">
              <span className="material-symbols-outlined" data-icon="work">work</span>
              <span className="text-[16px] leading-[1.5] font-normal">Applications</span>
            </Link>
            <Link className="flex items-center gap-[12px] px-[24px] py-[12px] text-[#c0c6db] hover:text-[#dce2f7] hover:bg-[#404758] transition-colors duration-200 rounded-lg" to="/candidate/reports">
              <span className="material-symbols-outlined" data-icon="assessment">assessment</span>
              <span className="text-[16px] leading-[1.5] font-normal">Reports</span>
            </Link>
            {/* Active Tab */}
            <Link className="flex items-center gap-[12px] px-[24px] py-[12px] bg-[#5eff9c] text-[#00210d] rounded-lg font-bold transition-transform" to="/candidate/practice">
              <span className="material-symbols-outlined" data-icon="psychology" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              <span className="text-[16px] leading-[1.5] font-normal">Practice</span>
            </Link>
            <Link className="flex items-center gap-[12px] px-[24px] py-[12px] text-[#c0c6db] hover:text-[#dce2f7] hover:bg-[#404758] transition-colors duration-200 rounded-lg" to="/candidate/certifications">
              <span className="material-symbols-outlined" data-icon="verified">verified</span>
              <span className="text-[16px] leading-[1.5] font-normal">Certifications</span>
            </Link>
            <Link className="flex items-center gap-[12px] px-[24px] py-[12px] text-[#c0c6db] hover:text-[#dce2f7] hover:bg-[#404758] transition-colors duration-200 rounded-lg" to="/candidate/settings">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
              <span className="text-[16px] leading-[1.5] font-normal">Settings</span>
            </Link>
          </nav>
        </div>
        <div className="px-[24px] flex flex-col gap-[24px]">
          <button className="w-full bg-[#5eff9c] text-[#00210d] text-[14px] leading-[1] font-bold py-[12px] rounded-lg hover:opacity-90 transition-opacity">
            Start Practice
          </button>
          <a className="flex items-center gap-[12px] px-[24px] py-[12px] text-[#c0c6db] hover:text-[#dce2f7] transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="help">help</span>
            <span className="text-[16px] leading-[1.5] font-normal">Help Center</span>
          </a>
        </div>
      </aside>

      {/* TopAppBar (Shared Component Overlay) */}
      <header className="fixed top-0 right-0 left-64 z-40 bg-[#f8f9fa]/80 backdrop-blur-md flex justify-between items-center h-16 px-[24px] w-[calc(100%-16rem)] border-b border-[#c6c6cd]">
        <div className="flex items-center gap-[48px]">
          <span className="text-[20px] leading-[1.4] font-semibold font-extrabold text-[#000000]">HireAI Portal</span>
          <nav className="hidden md:flex gap-[24px]">
            <a className="text-[#45464c] hover:text-[#000000] transition-colors text-[14px] leading-[1.5] font-normal" href="#">My Progress</a>
            <a className="text-[#000000] font-bold border-b-2 border-[#000000] pb-1 text-[14px] leading-[1.5] font-normal" href="#">Interview Prep</a>
          </nav>
        </div>
        <div className="flex items-center gap-[24px]">
          <div className="flex items-center gap-[12px]">
            <span className="material-symbols-outlined text-[#45464c] hover:text-[#000000] cursor-pointer" data-icon="notifications">notifications</span>
            <span className="material-symbols-outlined text-[#45464c] hover:text-[#000000] cursor-pointer" data-icon="dark_mode">dark_mode</span>
          </div>
          <button className="bg-[#000000] text-white text-[14px] leading-[1] font-bold px-[24px] py-[4px] rounded-lg hover:opacity-90">Apply Now</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-64 pt-16 min-h-screen">
        <div className="max-w-[1120px] mx-auto px-[24px] py-[80px]">
          {/* Header Section */}
          <section className="mb-[80px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
              <div>
                <span className="inline-flex items-center gap-[4px] bg-[#56fc99] text-[#00723c] px-[12px] py-[4px] rounded-full text-[12px] leading-[1] tracking-[0.05em] font-semibold mb-[12px]">
                  <span className="material-symbols-outlined text-[16px]" data-icon="bolt">bolt</span>
                  IMPROVE WITH EVERY SESSION
                </span>
                <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-[#000000] mb-[4px]">Practice Mode 🎯</h1>
                <p className="text-[18px] leading-[1.6] font-normal text-[#45464c]">Practice with AI — completely free</p>
              </div>
              <div className="flex gap-[12px] items-center">
                <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c] uppercase tracking-widest">Difficulty</span>
                <div className="flex bg-[#edeeef] rounded-full p-1">
                  <button className="px-[24px] py-[4px] rounded-full text-[14px] leading-[1] font-bold text-[#45464c] hover:bg-[#f8f9fa] transition-all">Easy</button>
                  <button className="px-[24px] py-[4px] rounded-full text-[14px] leading-[1] font-bold bg-white text-[#000000] shadow-sm">Medium</button>
                  <button className="px-[24px] py-[4px] rounded-full text-[14px] leading-[1] font-bold text-[#45464c] hover:bg-[#f8f9fa] transition-all">Hard</button>
                </div>
              </div>
            </div>
          </section>

          {/* Role Selector Bento Grid */}
          <section className="mb-[80px]">
            <h3 className="text-[20px] leading-[1.4] font-semibold text-[#000000] mb-[24px]">What are you practicing for?</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {/* Cards */}
              <div className="group bg-white border border-[#c6c6cd] p-[24px] rounded-xl hover:border-[#22D97A] hover:shadow-xl transition-all cursor-pointer">
                <div className="w-12 h-12 bg-[#edeeef] rounded-lg flex items-center justify-center mb-[12px] group-hover:bg-[#56fc99] transition-colors">
                  <span className="material-symbols-outlined text-[#000000] group-hover:text-[#00723c]" data-icon="html">html</span>
                </div>
                <p className="text-[16px] leading-[1.5] font-normal font-bold">Frontend</p>
                <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">React, Vue, Web API</p>
              </div>
              <div className="group bg-white border border-[#c6c6cd] p-[24px] rounded-xl hover:border-[#22D97A] hover:shadow-xl transition-all cursor-pointer">
                <div className="w-12 h-12 bg-[#edeeef] rounded-lg flex items-center justify-center mb-[12px] group-hover:bg-[#56fc99] transition-colors">
                  <span className="material-symbols-outlined text-[#000000] group-hover:text-[#00723c]" data-icon="database">database</span>
                </div>
                <p className="text-[16px] leading-[1.5] font-normal font-bold">Backend</p>
                <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Node, Python, Go</p>
              </div>
              <div className="group bg-white border border-[#c6c6cd] p-[24px] rounded-xl hover:border-[#22D97A] hover:shadow-xl transition-all cursor-pointer">
                <div className="w-12 h-12 bg-[#edeeef] rounded-lg flex items-center justify-center mb-[12px] group-hover:bg-[#56fc99] transition-colors">
                  <span className="material-symbols-outlined text-[#000000] group-hover:text-[#00723c]" data-icon="layers">layers</span>
                </div>
                <p className="text-[16px] leading-[1.5] font-normal font-bold">Full Stack</p>
                <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">End-to-end Architecture</p>
              </div>
              <div className="group bg-white border border-[#c6c6cd] p-[24px] rounded-xl hover:border-[#22D97A] hover:shadow-xl transition-all cursor-pointer">
                <div className="w-12 h-12 bg-[#edeeef] rounded-lg flex items-center justify-center mb-[12px] group-hover:bg-[#56fc99] transition-colors">
                  <span className="material-symbols-outlined text-[#000000] group-hover:text-[#00723c]" data-icon="monitoring">monitoring</span>
                </div>
                <p className="text-[16px] leading-[1.5] font-normal font-bold">Data Science</p>
                <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Pandas, Stats, SQL</p>
              </div>
              <div className="group bg-white border border-[#c6c6cd] p-[24px] rounded-xl hover:border-[#22D97A] hover:shadow-xl transition-all cursor-pointer">
                <div className="w-12 h-12 bg-[#edeeef] rounded-lg flex items-center justify-center mb-[12px] group-hover:bg-[#56fc99] transition-colors">
                  <span className="material-symbols-outlined text-[#000000] group-hover:text-[#00723c]" data-icon="settings_input_component">settings_input_component</span>
                </div>
                <p className="text-[16px] leading-[1.5] font-normal font-bold">DevOps</p>
                <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">K8s, CI/CD, Terraform</p>
              </div>
              <div className="group bg-white border border-[#c6c6cd] p-[24px] rounded-xl hover:border-[#22D97A] hover:shadow-xl transition-all cursor-pointer">
                <div className="w-12 h-12 bg-[#edeeef] rounded-lg flex items-center justify-center mb-[12px] group-hover:bg-[#56fc99] transition-colors">
                  <span className="material-symbols-outlined text-[#000000] group-hover:text-[#00723c]" data-icon="hub">hub</span>
                </div>
                <p className="text-[16px] leading-[1.5] font-normal font-bold">System Design</p>
                <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Distributed Systems</p>
              </div>
              <div className="group bg-white border border-[#c6c6cd] p-[24px] rounded-xl hover:border-[#22D97A] hover:shadow-xl transition-all cursor-pointer">
                <div className="w-12 h-12 bg-[#edeeef] rounded-lg flex items-center justify-center mb-[12px] group-hover:bg-[#56fc99] transition-colors">
                  <span className="material-symbols-outlined text-[#000000] group-hover:text-[#00723c]" data-icon="smartphone">smartphone</span>
                </div>
                <p className="text-[16px] leading-[1.5] font-normal font-bold">Mobile</p>
                <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Swift, Kotlin, Flutter</p>
              </div>
              <div className="group bg-white border border-[#c6c6cd] p-[24px] rounded-xl hover:border-[#22D97A] hover:shadow-xl transition-all cursor-pointer">
                <div className="w-12 h-12 bg-[#edeeef] rounded-lg flex items-center justify-center mb-[12px] group-hover:bg-[#56fc99] transition-colors">
                  <span className="material-symbols-outlined text-[#000000] group-hover:text-[#00723c]" data-icon="psychology_alt">psychology_alt</span>
                </div>
                <p className="text-[16px] leading-[1.5] font-normal font-bold">ML</p>
                <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Deep Learning, PyTorch</p>
              </div>
            </div>
          </section>

          {/* Practice Modules */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[80px]">
            <div className="relative overflow-hidden bg-[#141b2b] text-white p-[48px] rounded-xl flex flex-col justify-between h-[400px]">
              <span className="material-symbols-outlined text-[#22D97A] text-[80px] absolute -right-4 -top-4 opacity-20 rotate-12" data-icon="forum">forum</span>
              <div>
                <h2 className="text-[30px] leading-[1.2] tracking-[-0.01em] font-bold mb-[12px]">AI Mock Interview</h2>
                <p className="text-[16px] leading-[1.5] font-normal text-[#c0c6db] mb-[24px] max-w-sm">Simulate real-world engineering interviews with our advanced AI behavioral and technical model.</p>
                <ul className="space-y-[12px] mb-[48px]">
                  <li className="flex items-center gap-[12px] text-[14px] leading-[1.5] font-normal">
                    <span className="material-symbols-outlined text-[#22D97A]" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Real-time voice interaction
                  </li>
                  <li className="flex items-center gap-[12px] text-[14px] leading-[1.5] font-normal">
                    <span className="material-symbols-outlined text-[#22D97A]" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Instant feedback & sentiment analysis
                  </li>
                  <li className="flex items-center gap-[12px] text-[14px] leading-[1.5] font-normal">
                    <span className="material-symbols-outlined text-[#22D97A]" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Personality fit assessment
                  </li>
                </ul>
              </div>
              <button className="flex items-center justify-center gap-[12px] w-full md:w-fit bg-[#22D97A] text-[#ffffff] px-[48px] py-[24px] rounded-lg text-[14px] leading-[1] font-bold hover:opacity-90 transition-all">
                Start Mock Interview <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
            
            <div className="relative overflow-hidden bg-white border-2 border-[#000000] p-[48px] rounded-xl flex flex-col justify-between h-[400px]">
              <span className="material-symbols-outlined text-[#000000] text-[80px] absolute -right-4 -top-4 opacity-5 rotate-12" data-icon="code">code</span>
              <div>
                <h2 className="text-[30px] leading-[1.2] tracking-[-0.01em] font-bold text-[#000000] mb-[12px]">Coding Challenge</h2>
                <p className="text-[16px] leading-[1.5] font-normal text-[#45464c] mb-[24px] max-w-sm">Sharpen your algorithm skills with interactive coding puzzles designed for top-tier companies.</p>
                <ul className="space-y-[12px] mb-[48px] text-[#191c1d]">
                  <li className="flex items-center gap-[12px] text-[14px] leading-[1.5] font-normal">
                    <span className="material-symbols-outlined text-[#22D97A]" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    20+ supported languages
                  </li>
                  <li className="flex items-center gap-[12px] text-[14px] leading-[1.5] font-normal">
                    <span className="material-symbols-outlined text-[#22D97A]" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Automated test case validation
                  </li>
                  <li className="flex items-center gap-[12px] text-[14px] leading-[1.5] font-normal">
                    <span className="material-symbols-outlined text-[#22D97A]" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Dynamic time & space complexity
                  </li>
                </ul>
              </div>
              <button className="flex items-center justify-center gap-[12px] w-full md:w-fit bg-[#000000] text-white px-[48px] py-[24px] rounded-lg text-[14px] leading-[1] font-bold hover:bg-[#45464c] transition-all">
                Start Challenge <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </section>

          {/* Progress & Stats */}
          <section className="mb-[80px] grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
            <div className="lg:col-span-2 bg-white border border-[#c6c6cd] p-[24px] rounded-xl">
              <div className="flex items-center justify-between mb-[24px]">
                <h3 className="text-[20px] leading-[1.4] font-semibold text-[#000000]">Your Progress 📈</h3>
                <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Last 30 Days</span>
              </div>
              <div className="grid grid-cols-3 divide-x divide-[#c6c6cd] text-center">
                <div className="px-[24px]">
                  <p className="text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-[#000000]">12</p>
                  <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c] uppercase">Interviews done</p>
                </div>
                <div className="px-[24px]">
                  <p className="text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-[#000000]">74<span className="text-[20px] leading-[1.4] font-semibold">%</span></p>
                  <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c] uppercase">Avg score</p>
                </div>
                <div className="px-[24px]">
                  <p className="text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-[#22D97A]">+8<span className="text-[20px] leading-[1.4] font-semibold">%</span></p>
                  <p className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c] uppercase">Improvement</p>
                </div>
              </div>
              <div className="mt-[24px] pt-[24px] border-t border-[#c6c6cd]">
                <div className="flex items-center justify-between mb-[12px]">
                  <span className="text-[14px] leading-[1.5] font-normal font-bold">Current Velocity</span>
                  <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#22D97A] font-bold">On track for Senior Role</span>
                </div>
                <div className="w-full bg-[#edeeef] rounded-full h-2">
                  <div className="bg-[#22D97A] h-full rounded-full" style={{ width: '74%' }}></div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#c6c6cd] p-[24px] rounded-xl flex flex-col items-center justify-center">
              <h4 className="text-[16px] leading-[1.5] font-normal font-bold mb-[24px] w-full">Skill Analysis</h4>
              {/* Mock Radar Chart Layout */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="absolute inset-0 border border-[#c6c6cd] rounded-full opacity-20"></div>
                <div className="absolute inset-4 border border-[#c6c6cd] rounded-full opacity-40"></div>
                <div className="absolute inset-8 border border-[#c6c6cd] rounded-full opacity-60"></div>
                {/* Hexagonal skill points visual representation */}
                <div className="absolute top-0 text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Coding</div>
                <div className="absolute bottom-0 text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Communication</div>
                <div className="absolute right-0 text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Logic</div>
                <div className="absolute left-0 text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Architecture</div>
                <div className="w-32 h-32 bg-[#22D97A]/10 border-2 border-[#22D97A] rotate-45 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#22D97A]" data-icon="diamond" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                </div>
              </div>
            </div>
          </section>

          {/* Recommendations */}
          <section>
            <h3 className="text-[20px] leading-[1.4] font-semibold text-[#000000] mb-[24px]">Recommended Practice</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              <div className="bg-[#edeeef] p-[24px] rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-[#c6c6cd]">
                <span className="inline-block px-[4px] py-[2px] bg-white rounded text-[10px] font-bold text-[#000000] mb-[12px] border border-[#c6c6cd]">POPULAR</span>
                <p className="text-[16px] leading-[1.5] font-normal font-bold mb-[4px]">System Design</p>
                <p className="text-[14px] leading-[1.5] font-normal text-[#45464c] mb-[24px]">Master scalability, load balancing, and high availability principles.</p>
                <a className="text-[#22D97A] text-[14px] leading-[1] font-bold flex items-center gap-[4px] hover:gap-[12px] transition-all" href="#">
                  Practice now <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </div>
              <div className="bg-[#edeeef] p-[24px] rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-[#c6c6cd]">
                <span className="inline-block px-[4px] py-[2px] bg-white rounded text-[10px] font-bold text-[#000000] mb-[12px] border border-[#c6c6cd]">TECHNICAL</span>
                <p className="text-[16px] leading-[1.5] font-normal font-bold mb-[4px]">React Performance</p>
                <p className="text-[14px] leading-[1.5] font-normal text-[#45464c] mb-[24px]">Deep dive into hooks, memoization, and rendering optimization.</p>
                <a className="text-[#22D97A] text-[14px] leading-[1] font-bold flex items-center gap-[4px] hover:gap-[12px] transition-all" href="#">
                  Practice now <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </div>
              <div className="bg-[#edeeef] p-[24px] rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-[#c6c6cd]">
                <span className="inline-block px-[4px] py-[2px] bg-white rounded text-[10px] font-bold text-[#000000] mb-[12px] border border-[#c6c6cd]">ADVANCED</span>
                <p className="text-[16px] leading-[1.5] font-normal font-bold mb-[4px]">Distributed Systems</p>
                <p className="text-[14px] leading-[1.5] font-normal text-[#45464c] mb-[24px]">Consistency models, consensus algorithms, and fault tolerance.</p>
                <a className="text-[#22D97A] text-[14px] leading-[1] font-bold flex items-center gap-[4px] hover:gap-[12px] transition-all" href="#">
                  Practice now <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Contextual FAB */}
      <div className="fixed bottom-[24px] right-[24px] z-50">
        <button className="bg-[#22D97A] text-[#ffffff] w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
          <span className="material-symbols-outlined" data-icon="add">add</span>
        </button>
      </div>
    </div>
  );
}
