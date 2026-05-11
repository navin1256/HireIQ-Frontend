import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('company_profile');

  const tabs = [
    { id: 'company_profile', label: 'Company Profile' },
    { id: 'team_members', label: 'Team Members' },
    { id: 'billing', label: 'Billing & Subscription' },
    { id: 'api_integrations', label: 'API & Integrations' },
  ];

  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body-md min-h-screen overflow-x-hidden">
      {/* Ambient Glows */}
      <div className="fixed top-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,rgba(37,99,235,0)_70%)] blur-[80px] pointer-events-none z-[0] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,rgba(37,99,235,0)_70%)] blur-[80px] pointer-events-none z-[0] translate-x-1/4 translate-y-1/4 opacity-50"></div>

      {/* SideNavBar */}
      <aside className="w-64 h-screen fixed left-0 top-0 bg-[#0d141d]/70 border-r border-white/10 backdrop-blur-xl shadow-xl flex flex-col gap-[16px] py-[48px] px-[24px] z-50">
        <div className="mb-[48px]">
          <h1 className="text-[32px] font-bold text-[#b4c5ff] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</h1>
          <p className="text-[12px] font-medium text-[#c3c6d7] opacity-70 tracking-widest uppercase mt-1">Enterprise AI</p>
        </div>
        <nav className="flex-1 flex flex-col gap-[8px]">
          <Link to="/dashboard" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#dce3f0] transition-all duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link to="/jobs" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#dce3f0] transition-all duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>work</span>
            <span>Jobs</span>
          </Link>
          <Link to="/pipeline" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#dce3f0] transition-all duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>group</span>
            <span>Candidates</span>
          </Link>
          <Link to="/interviews/builder" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#dce3f0] transition-all duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_today</span>
            <span>Interviews</span>
          </Link>
          <a href="#" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#dce3f0] transition-all duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>quiz</span>
            <span>Assessments</span>
          </a>
          <Link to="/analytics" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#dce3f0] transition-all duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>bar_chart</span>
            <span>Analytics</span>
          </Link>
          <a href="#" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#c3c6d7] font-medium hover:bg-white/5 hover:text-[#dce3f0] transition-all duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>verified_user</span>
            <span>Expert IaaS</span>
          </a>
          {/* Active Settings */}
          <Link to="/settings" className="flex items-center gap-[16px] px-[16px] py-[8px] rounded-lg text-[#b4c5ff] font-bold border-r-2 border-[#b4c5ff] bg-[#b4c5ff]/10 transition-all duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
            <span>Settings</span>
          </Link>
        </nav>
        <div className="mt-auto">
          <Link to="/jobs/new" className="w-full flex justify-center py-[16px] bg-[#2563eb] text-[#eeefff] font-semibold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:brightness-110 active:scale-95 transition-all">
            Post New Job
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen z-10 relative">
        {/* Top App Bar */}
        <header className="sticky top-0 w-full bg-[#0d141d]/70 backdrop-blur-md border-b border-white/10 flex justify-between items-center px-[48px] py-[16px] z-40">
          <div className="flex-1 max-w-xl relative">
            <span className="material-symbols-outlined absolute left-[16px] top-1/2 -translate-y-1/2 text-[#434655] text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
            <input className="w-full bg-[#080f17] border border-white/10 rounded-full py-[8px] pl-[48px] pr-[24px] text-[16px] focus:outline-none focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] transition-all" placeholder="Search settings, integrations..." type="text" />
          </div>
          <div className="flex items-center gap-[24px]">
            <div className="flex gap-[16px]">
              <button className="p-[8px] rounded-full text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors duration-200">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span>
              </button>
              <button className="p-[8px] rounded-full text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors duration-200">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>chat_bubble</span>
              </button>
            </div>
            <div className="h-8 w-[1px] bg-white/10"></div>
            <button className="flex items-center gap-[8px] px-[16px] py-[8px] hover:bg-white/5 rounded-full transition-all">
              <div className="text-right hidden lg:block mr-2">
                <p className="text-[16px] font-bold leading-none">Alex Rivera</p>
                <p className="text-[12px] text-[#c3c6d7]">Admin</p>
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#b4c5ff]/30">
                <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAohAbVgAao4CjBli-inip_S4rAfOn0PHuC1a4kjUEJjlIAaLxEIwhhTuDF_u6Sq2IdO00RNClbUjmPcLN2UUCeAjT9I1cuWyUzMa1aznlJSS3qKJzTHaBTkeM2tRp3gvZ0tPhbwcyt2qjaBp-k6YIR0O1XQe1gCWV5qyS45DFTTS65LnDGL83I9b6fuSkrOjAG7yexv8GG8MxLz8qd3APHC5yXjc3DnbBqj1OeHRUjqs_UctEuUp7eGrdv2Psl-cHAxjRKs4RUZT0" />
              </div>
              <span className="material-symbols-outlined text-[#c3c6d7]" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
            </button>
          </div>
        </header>

        {/* Page Canvas */}
        <div className="max-w-[1280px] mx-auto px-[48px] py-[48px]">
          {/* Header */}
          <div className="mb-[48px]">
            <h2 className="text-[48px] font-bold text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Settings</h2>
            <p className="text-[18px] text-[#c3c6d7]">Manage your organization's workspace, billing, and team configuration.</p>
          </div>

          {/* Horizontal Tabs */}
          <nav className="flex border-b border-white/10 mb-[48px] overflow-x-auto whitespace-nowrap" style={{ scrollbarWidth: 'none' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-[24px] py-[16px] font-medium transition-colors ${activeTab === tab.id ? 'text-[#b4c5ff] border-b-2 border-[#b4c5ff] font-bold' : 'text-[#c3c6d7] hover:text-[#dce3f0]'}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Tab Content Rendering */}
          {activeTab === 'company_profile' && <CompanyProfileTab />}
          {activeTab === 'team_members' && <TeamMembersTab />}
          {activeTab === 'billing' && <BillingTab />}
          {activeTab === 'api_integrations' && <ApiIntegrationsTab />}
        </div>
      </main>
    </div>
  );
}

function CompanyProfileTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[48px]">
      <div className="lg:col-span-2">
        <div className="rounded-xl p-[24px] lg:p-[48px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="flex items-start justify-between mb-[48px]">
            <div>
              <h3 className="text-[32px] font-bold text-[#dce3f0] mb-[8px]" style={{ fontFamily: 'Plus Jakarta Sans' }}>General Information</h3>
              <p className="text-[#c3c6d7]">Update your company presence and regional settings.</p>
            </div>
          </div>
          <form className="space-y-[48px]">
            {/* Logo Upload */}
            <div className="flex items-center gap-[48px] py-[24px] border-b border-white/5 mb-[24px]">
              <div className="relative group">
                <div className="w-[96px] h-[96px] rounded-full border-2 border-dashed border-[#434655] flex flex-col items-center justify-center bg-[#151c25] group-hover:border-[#b4c5ff] group-hover:bg-[#b4c5ff]/5 transition-all cursor-pointer overflow-hidden">
                  <span className="material-symbols-outlined text-[#c3c6d7] text-[32px] group-hover:text-[#b4c5ff] mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>cloud_upload</span>
                  <span className="text-[10px] font-semibold text-[#c3c6d7] uppercase text-center px-2 tracking-widest">Upload Logo</span>
                </div>
                <button className="absolute bottom-0 right-0 bg-[#b4c5ff] text-[#002a78] w-8 h-8 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform" type="button">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>edit</span>
                </button>
              </div>
              <div>
                <h4 className="text-[#dce3f0] font-semibold mb-1">Company Logo</h4>
                <p className="text-[16px] text-[#c3c6d7]">SVG, PNG, or JPG. Max size 2MB. Recommended 400x400px.</p>
              </div>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest">Company Name</label>
                <input className="bg-[#080f17] border border-[#434655] rounded-lg p-[16px] text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] outline-none transition-all" type="text" defaultValue="HireIQ" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest">Website</label>
                <input className="bg-[#080f17] border border-[#434655] rounded-lg p-[16px] text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] outline-none transition-all" type="url" defaultValue="https://hireiq.ai" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest">Industry</label>
                <select className="bg-[#080f17] border border-[#434655] rounded-lg p-[16px] text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] outline-none transition-all appearance-none">
                  <option>Artificial Intelligence</option>
                  <option>Software Engineering</option>
                  <option>Biotechnology</option>
                  <option>Fintech</option>
                </select>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest">Company Size</label>
                <select className="bg-[#080f17] border border-[#434655] rounded-lg p-[16px] text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] outline-none transition-all appearance-none" defaultValue="501-1000 employees">
                  <option>11-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-500 employees</option>
                  <option>501-1000 employees</option>
                </select>
              </div>
              <div className="flex flex-col gap-[8px] md:col-span-2">
                <label className="text-[12px] font-semibold text-[#c3c6d7] uppercase tracking-widest">Timezone</label>
                <div className="relative">
                  <select className="w-full bg-[#080f17] border border-[#434655] rounded-lg p-[16px] text-[#dce3f0] focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] outline-none transition-all appearance-none">
                    <option>(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                    <option>(GMT+00:00) Greenwich Mean Time</option>
                    <option>(GMT+01:00) Central European Time</option>
                    <option>(GMT+08:00) Singapore Time</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-[16px] top-1/2 -translate-y-1/2 text-[#c3c6d7] pointer-events-none" style={{ fontVariationSettings: "'FILL' 0" }}>keyboard_arrow_down</span>
                </div>
              </div>
            </div>
            
            <div className="pt-[48px] flex justify-end gap-[24px]">
              <button className="px-[80px] py-[16px] rounded-full font-semibold text-[#c3c6d7] hover:bg-white/5 transition-all" type="button">Cancel</button>
              <button className="px-[80px] py-[16px] rounded-full font-semibold bg-[#b4c5ff] text-[#002a78] hover:shadow-[0_0_15px_rgba(180,197,255,0.4)] transition-all active:scale-95" type="submit">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Info Sidebar */}
      <div className="space-y-[48px]">
        <div className="rounded-xl p-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="flex items-center gap-[16px] mb-[24px] text-[#b4c5ff]">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>info</span>
            <span className="font-semibold">Workspace Health</span>
          </div>
          <div className="space-y-[24px]">
            <div className="flex justify-between items-center">
              <span className="text-[#c3c6d7] text-[16px]">Profile Completion</span>
              <span className="text-[#b4c5ff] font-bold">85%</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-[#b4c5ff] w-[85%]"></div>
            </div>
            <p className="text-[13px] text-[#c3c6d7] leading-relaxed">Your profile is almost complete. Adding a custom domain will increase it to 100%.</p>
            <a className="text-[#b4c5ff] text-[13px] font-semibold flex items-center gap-[8px] hover:gap-[16px] transition-all" href="#">
              Complete setup
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>chevron_right</span>
            </a>
          </div>
        </div>

        <div className="rounded-xl p-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <h4 className="text-[#dce3f0] font-semibold mb-[16px]">Quick Actions</h4>
          <div className="space-y-[8px]">
            <button className="w-full text-left p-[16px] rounded-lg hover:bg-white/5 transition-colors flex items-center gap-[16px] group">
              <span className="material-symbols-outlined text-[#c3c6d7] group-hover:text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>domain</span>
              <span className="text-[16px] text-[#dce3f0]">Manage Domains</span>
            </button>
            <button className="w-full text-left p-[16px] rounded-lg hover:bg-white/5 transition-colors flex items-center gap-[16px] group">
              <span className="material-symbols-outlined text-[#c3c6d7] group-hover:text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>share</span>
              <span className="text-[16px] text-[#dce3f0]">Public Career Page</span>
            </button>
            <button className="w-full text-left p-[16px] rounded-lg hover:bg-white/5 transition-colors flex items-center gap-[16px] group">
              <span className="material-symbols-outlined text-[#c3c6d7] group-hover:text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>history</span>
              <span className="text-[16px] text-[#dce3f0]">Audit Logs</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamMembersTab() {
  const members = [
    { name: 'Alex Rivera', email: 'alex.rivera@hireiq.ai', role: 'Admin', status: 'Active', lastActive: 'Just now', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqGlWFPn7qe6ooIHIi54E2XBFRlNURWvHOLweRhjMkW-7COCCZZAohLgbu_2g_Gp77h5lLDLT9bJJjNdnbf4mKAjN5_b8T1Jd2QnIgBtOm1aUOP75WscCeC5Kur_QCoUVTaLOBU3ZDkN2kwKNTXc07eK6k1WrtGyuka-2JESXLlUfS9zCA5Jl9tZlnv9C9xRRp3ZiQGQbQkrhc5Y0N_0wNAKVoIn1hJxyvd7cF92xUBDeo9r9RsYv44lfTSdLUb0bSFDQ8vVp5FOs', roleColor: 'text-[#b4c5ff]', roleBg: 'bg-[#b4c5ff]/10', statusColor: 'bg-green-500' },
    { name: 'Sarah Jenkins', email: 'sarah.j@hireiq.ai', role: 'HR Manager', status: 'Active', lastActive: '2 hours ago', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsQRPwL6-Fv8EPuzJ7HMTVwiLnGidMkSxVldQ0wzy1lcImoJ4GmQEgEPUxnh51gN2t10MqoIJal1oyUqdPL2aILelUC_FzqpBtkTQs7S75tiM9CtFy0oa16f79BhhejG97t0-qACJ-zGedLLiZVEoGMs3GhxaOzDpBp_ffnQZ_R8mLhEYXvAynXNpDYTOCOEPRJH-8ias4WzdrvUR_nhpESL36wVLdeGLWIcG_95BnN8j6YYgx3SDPdJEiC_NccHUBBc0WOFxGOFc', roleColor: 'text-[#d2bbff]', roleBg: 'bg-[#d2bbff]/10', statusColor: 'bg-green-500' },
    { name: 'David Chen', email: 'd.chen@hireiq.ai', role: 'Viewer', status: 'Pending', lastActive: 'Invited 1d ago', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCagZthOddEBuI2mhIpAXMAc5A98ADnqtwfeR_YUJog5-hQtsDOWI7sIowrxtqTlZMzRitaai2xPYuivQi18IJjmoyccM0rcNA7cyfHKuKhC3_EfIfNYAf8WP6n1db8eWDQMYkGpRk70k1Rl5U-_DKLJ2VYUXEInG2F5oC-fQq7EJsOpptheQRv1_KjBxRcn1E6Gq4sudrD5tKR0t-JhUT6rj10m0bwAnkHYGC9PyeRp6G-w5nPswYC6TcJCp38cO_Uc5NmrOI-kb4', roleColor: 'text-[#adc6ff]', roleBg: 'bg-[#adc6ff]/10', statusColor: 'bg-amber-500' },
    { name: 'Maya Patel', email: 'maya.patel@hireiq.ai', role: 'HR Manager', status: 'Active', lastActive: 'Yesterday', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLfiUyFOdFrFmb_VD_EfwT9-fYuVffn3E-0dDib5wYMuTOfo1gI9R3yygoZezYM5fs72SM3UDPEQ39cbwVikZMoZxcgkNUuRZmuMx2_TxQs7TwPVkcntMbH3iqCr4G0iLE5yc4CguELMxegCRoJQaIufd1k_bO9g4Gtvf_A2it5XVFsQa0su8zVdvkvvscwZ4r6jDuac0ypviVAzS5yFll84cXdrEG8xvVv8G3LLNMSEi6-q7Z5zods-z9cjtH9n_9rh0NQAD7IXI', roleColor: 'text-[#d2bbff]', roleBg: 'bg-[#d2bbff]/10', statusColor: 'bg-green-500' },
    { name: 'Liam Wilson', email: 'liam.w@hireiq.ai', role: 'Viewer', status: 'Active', lastActive: '3 days ago', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5YfhUSNpo052XHtStc25tqM3FFCv3g7GQ6NyN6WUcFqPMhAfnR1nBoqLBl2nKIgqu4s8AcfV8BxgVEyEr2ekhP3ommVV8otdc7tTspMKzZ2yKtDIiS4k7mz-FKyzp9uFycFL3iatf3bCFuKgLFB6HefpClkP178_Pv4ShXik8TkUceK_wN8aP2lIMvZXQelm-J4pWe2VgEhXle5EkLPZ3-ro8DPETKNgoKOkgYdf7gP5A561NRXWrwrhRO_WHBlpaS6TGn9gVtiw', roleColor: 'text-[#adc6ff]', roleBg: 'bg-[#adc6ff]/10', statusColor: 'bg-green-500' }
  ];

  return (
    <section className="space-y-[24px]">
      <div className="flex justify-between items-center">
        <div className="flex items-baseline gap-[16px]">
          <h3 className="text-[32px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>Team Members</h3>
          <span className="text-[#c3c6d7] font-medium bg-[#232a34] px-[16px] py-1 rounded-full text-[16px]">5 members</span>
        </div>
        <button className="flex items-center gap-[8px] py-[16px] px-[48px] bg-[#2563eb] text-[#eeefff] font-semibold rounded-full hover:brightness-110 active:scale-95 transition-all shadow-lg">
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>person_add</span>
          Invite Member
        </button>
      </div>

      {/* Team Members Table */}
      <div className="bg-[#192029] rounded-xl overflow-hidden border border-white/5">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5">
              <th className="px-[24px] py-[16px] text-[12px] font-semibold tracking-widest text-[#c3c6d7] uppercase">Member</th>
              <th className="px-[24px] py-[16px] text-[12px] font-semibold tracking-widest text-[#c3c6d7] uppercase">Role</th>
              <th className="px-[24px] py-[16px] text-[12px] font-semibold tracking-widest text-[#c3c6d7] uppercase">Status</th>
              <th className="px-[24px] py-[16px] text-[12px] font-semibold tracking-widest text-[#c3c6d7] uppercase">Last Active</th>
              <th className="px-[24px] py-[16px] text-[12px] font-semibold tracking-widest text-[#c3c6d7] uppercase text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {members.map((member, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors duration-200">
                <td className="px-[24px] py-[24px]">
                  <div className="flex items-center gap-[16px]">
                    <img alt={member.name} className="w-10 h-10 rounded-full border border-white/10" src={member.img} />
                    <div>
                      <p className="text-[16px] font-bold text-[#dce3f0]">{member.name}</p>
                      <p className="text-sm text-[#c3c6d7]">{member.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-[24px] py-[24px]">
                  <span className={`${member.roleBg} ${member.roleColor} text-[11px] font-bold px-[16px] py-1 rounded-full uppercase tracking-wider`}>{member.role}</span>
                </td>
                <td className="px-[24px] py-[24px]">
                  <div className="flex items-center gap-[8px]">
                    <span className={`w-2 h-2 rounded-full ${member.statusColor}`}></span>
                    <span className="text-[16px] text-[#dce3f0]">{member.status}</span>
                  </div>
                </td>
                <td className="px-[24px] py-[24px] text-[#c3c6d7] text-[16px]">{member.lastActive}</td>
                <td className="px-[24px] py-[24px] text-right">
                  <button className="text-[#ffb4ab]/40 px-[16px] py-1 rounded hover:text-[#ffb4ab] hover:bg-[#ffb4ab]/5 transition-all">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Permission Legend */}
      <div className="mt-[48px] p-[24px] bg-white/[0.03] rounded-xl border border-white/5 flex flex-wrap gap-[80px]">
        <div className="flex items-start gap-[16px] max-w-xs">
          <span className="bg-[#b4c5ff]/10 text-[#b4c5ff] p-[8px] rounded-lg">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>verified_user</span>
          </span>
          <div>
            <p className="font-bold text-[16px] text-[#dce3f0]">Admin Access</p>
            <p className="text-sm text-[#c3c6d7]">Full control over billing, team management, and all recruitment pipelines.</p>
          </div>
        </div>
        <div className="flex items-start gap-[16px] max-w-xs">
          <span className="bg-[#d2bbff]/10 text-[#d2bbff] p-[8px] rounded-lg">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>work</span>
          </span>
          <div>
            <p className="font-bold text-[16px] text-[#dce3f0]">HR Manager</p>
            <p className="text-sm text-[#c3c6d7]">Can create jobs, invite candidates, and manage interviews.</p>
          </div>
        </div>
        <div className="flex items-start gap-[16px] max-w-xs">
          <span className="bg-[#adc6ff]/10 text-[#adc6ff] p-[8px] rounded-lg">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>visibility</span>
          </span>
          <div>
            <p className="font-bold text-[16px] text-[#dce3f0]">Viewer</p>
            <p className="text-sm text-[#c3c6d7]">Read-only access to candidate profiles and interview feedback.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BillingTab() {
  const invoices = [
    { id: '#INV-2024-009', date: 'Sep 12, 2024', amount: '$149.00', status: 'Paid' },
    { id: '#INV-2024-008', date: 'Aug 12, 2024', amount: '$149.00', status: 'Paid' },
    { id: '#INV-2024-007', date: 'Jul 12, 2024', amount: '$149.00', status: 'Paid' },
    { id: '#INV-2024-006', date: 'Jun 12, 2024', amount: '$224.00', status: 'Paid' },
  ];

  return (
    <>
      {/* Bento Grid Layout for Billing Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] mb-[80px]">
        {/* Growth Plan Card */}
        <div className="lg:col-span-2 relative group overflow-hidden rounded-[24px] p-[48px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] border-green-500/30" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-500/10 rounded-full blur-[100px]"></div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[48px] relative z-10">
            <div>
              <div className="flex items-center gap-[8px] mb-[8px]">
                <span className="px-[12px] py-1 rounded-full text-[12px] font-semibold bg-green-500/20 text-green-400">CURRENT PLAN</span>
                <span className="text-[12px] font-semibold tracking-widest text-[#c3c6d7] uppercase">ANNUAL BILLING</span>
              </div>
              <h3 className="text-[40px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Growth Plan</h3>
              <p className="text-[#c3c6d7] mt-1">Perfect for rapidly scaling tech teams.</p>
            </div>
            <div className="mt-[24px] md:mt-0 text-right">
              <div className="text-[#dce3f0] text-[32px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>$149<span className="text-[18px] text-[#c3c6d7] font-normal">/month</span></div>
              <p className="text-[#c3c6d7] text-[14px]">Next billing date: Oct 12, 2024</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] relative z-10">
            <div className="space-y-[16px]">
              <div className="flex justify-between items-center">
                <span className="text-[12px] font-semibold tracking-widest text-[#c3c6d7] uppercase">AI Interviews Used</span>
                <span className="text-[#dce3f0] font-bold">84 / 150</span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div className="bg-[#b4c5ff] h-full w-[56%] rounded-full"></div>
              </div>
            </div>
            <div className="space-y-[16px]">
              <div className="flex justify-between items-center">
                <span className="text-[12px] font-semibold tracking-widest text-[#c3c6d7] uppercase">Team Seats</span>
                <span className="text-[#dce3f0] font-bold">12 / 20</span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div className="bg-[#8343f4] h-full w-[60%] rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-[16px] mt-[48px] pt-[48px] border-t border-white/5 relative z-10">
            <button className="bg-[#2563eb] text-[#eeefff] font-semibold py-[16px] px-[48px] rounded-full hover:brightness-110 transition-all flex items-center gap-[8px]">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>upgrade</span>
              Upgrade Plan
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-[#dce3f0] font-semibold py-[16px] px-[48px] rounded-full transition-all flex items-center gap-[8px]">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>article</span>
              Download Usage Report
            </button>
            <button className="text-[#ffb4ab] hover:bg-[#ffb4ab]/10 font-semibold py-[16px] px-[48px] rounded-full transition-all ml-auto">
              Cancel Subscription
            </button>
          </div>
        </div>

        {/* Payment Method & Support */}
        <div className="flex flex-col gap-[24px]">
          <div className="rounded-[24px] p-[48px] flex-1" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h4 className="text-[12px] font-semibold tracking-widest text-[#c3c6d7] uppercase mb-[24px]">Payment Method</h4>
            <div className="flex items-center gap-[24px] p-[24px] bg-white/5 rounded-xl border border-white/5 mb-[24px]">
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center font-bold italic text-white">VISA</div>
              <div>
                <p className="font-bold text-[#dce3f0]">Visa ending in 4242</p>
                <p className="text-[12px] text-[#c3c6d7]">Expires 08/2026</p>
              </div>
              <button className="ml-auto text-[#b4c5ff] hover:underline font-semibold text-[14px]">Edit</button>
            </div>
            <p className="text-[13px] text-[#c3c6d7]">
              Invoices are sent to <span className="text-[#dce3f0] font-medium">billing@techcorp.ai</span> every month.
            </p>
          </div>
          
          <div className="rounded-[24px] p-[48px] flex flex-col items-center text-center justify-center space-y-[16px] bg-gradient-to-br from-[#8343f4]/10 to-transparent" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="w-12 h-12 rounded-full bg-[#8343f4]/20 flex items-center justify-center text-[#d2bbff]">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>help_outline</span>
            </div>
            <h4 className="font-bold text-[#dce3f0]">Need help with billing?</h4>
            <p className="text-[#c3c6d7] text-[14px]">Our support team is available 24/7 for account inquiries.</p>
            <button className="w-full bg-white/5 hover:bg-white/10 text-[#dce3f0] font-semibold py-[16px] rounded-full transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* Invoice History */}
      <section>
        <div className="flex justify-between items-end mb-[24px]">
          <div>
            <h3 className="text-[24px] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Invoice History</h3>
            <p className="text-[#c3c6d7]">View and download your past monthly statements.</p>
          </div>
          <button className="text-[#b4c5ff] hover:bg-[#b4c5ff]/5 px-[24px] py-[16px] rounded-lg font-semibold flex items-center gap-[8px]">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>filter_list</span>
            Filter
          </button>
        </div>
        
        <div className="rounded-[24px] overflow-hidden" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="px-[48px] py-[24px] text-[12px] font-semibold tracking-widest text-[#c3c6d7] uppercase">Invoice ID</th>
                <th className="px-[48px] py-[24px] text-[12px] font-semibold tracking-widest text-[#c3c6d7] uppercase">Date</th>
                <th className="px-[48px] py-[24px] text-[12px] font-semibold tracking-widest text-[#c3c6d7] uppercase">Amount</th>
                <th className="px-[48px] py-[24px] text-[12px] font-semibold tracking-widest text-[#c3c6d7] uppercase">Status</th>
                <th className="px-[48px] py-[24px] text-[12px] font-semibold tracking-widest text-[#c3c6d7] uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {invoices.map((inv, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-[48px] py-[24px] font-medium text-[#dce3f0]">{inv.id}</td>
                  <td className="px-[48px] py-[24px] text-[#c3c6d7]">{inv.date}</td>
                  <td className="px-[48px] py-[24px] text-[#dce3f0]">{inv.amount}</td>
                  <td className="px-[48px] py-[24px]">
                    <span className="px-[12px] py-1 rounded-full text-[12px] font-semibold bg-green-500/10 text-green-400">{inv.status}</span>
                  </td>
                  <td className="px-[48px] py-[24px] text-right">
                    <button className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors flex items-center gap-[8px] ml-auto">
                      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>download</span>
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-[48px] py-[24px] bg-white/[0.02] flex justify-center">
            <button className="text-[#b4c5ff] hover:underline font-semibold">Load More History</button>
          </div>
        </div>
      </section>
    </>
  );
}

function ApiIntegrationsTab() {
  return (
    <div className="grid grid-cols-12 gap-[48px]">
      {/* Left Column: API Controls */}
      <div className="col-span-12 lg:col-span-7 space-y-[48px]">
        {/* API Key Card */}
        <div className="p-[24px] rounded-xl space-y-[16px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-[16px] text-[#dce3f0]">Production API Key</h3>
              <p className="text-[12px] text-[#8d90a0] mt-1">Use this key to authenticate server-side requests.</p>
            </div>
            <button className="text-[12px] font-semibold tracking-widest px-[16px] py-[8px] border border-[#d2bbff] text-[#d2bbff] rounded-full hover:bg-[#d2bbff]/10 transition-colors uppercase">
              Open API Docs
            </button>
          </div>
          <div className="flex items-center gap-[16px] bg-[#0d141d] border border-white/5 p-[16px] rounded-lg mt-[24px]">
            <code className="flex-grow font-mono text-sm tracking-widest text-[#c3c6d7]">
              hi_••••••••••••••••••••••••••••••••92f8
            </code>
            <div className="flex items-center gap-[8px]">
              <button className="p-[8px] hover:bg-white/5 rounded transition-all text-[#8d90a0]" title="Show Key">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>visibility</span>
              </button>
              <button className="p-[8px] hover:bg-white/5 rounded transition-all text-[#8d90a0]" title="Copy Key">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>content_copy</span>
              </button>
            </div>
          </div>
          <div className="flex justify-end pt-[16px]">
            <button className="text-[12px] text-[#ffb4ab] font-semibold flex items-center gap-[8px] hover:underline active:opacity-70 transition-all">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>refresh</span>
              Regenerate Key
            </button>
          </div>
        </div>

        {/* Webhooks Section */}
        <div className="p-[24px] rounded-xl space-y-[24px]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-[16px] text-[#dce3f0]">Webhooks</h3>
            <span className="bg-[#b4c5ff]/10 text-[#b4c5ff] text-[10px] font-bold px-[16px] py-1 rounded-full uppercase tracking-tighter">Real-time Sync</span>
          </div>
          <div className="space-y-[4px]">
            <label className="text-[12px] font-semibold text-[#8d90a0] uppercase tracking-wider block mb-2">Endpoint URL</label>
            <input className="w-full bg-[#0B0F19] border border-white/10 rounded-lg p-[16px] text-[16px] focus:border-[#b4c5ff] transition-all outline-none text-[#dce3f0]" placeholder="https://api.yourdomain.com/webhooks/hireiq" type="url" />
          </div>
          <div className="space-y-[16px]">
            <p className="text-[12px] font-semibold text-[#8d90a0] uppercase tracking-wider">Events to Subscribe</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              <label className="flex items-center gap-[16px] p-[16px] bg-white/5 rounded-lg border border-transparent hover:border-white/10 cursor-pointer transition-all">
                <input defaultChecked className="rounded border-white/20 bg-[#0d141d] text-[#b4c5ff] focus:ring-[#b4c5ff] ring-offset-[#0d141d]" type="checkbox" />
                <span className="text-sm font-medium">candidate.created</span>
              </label>
              <label className="flex items-center gap-[16px] p-[16px] bg-white/5 rounded-lg border border-transparent hover:border-white/10 cursor-pointer transition-all">
                <input defaultChecked className="rounded border-white/20 bg-[#0d141d] text-[#b4c5ff] focus:ring-[#b4c5ff] ring-offset-[#0d141d]" type="checkbox" />
                <span className="text-sm font-medium">interview.scheduled</span>
              </label>
              <label className="flex items-center gap-[16px] p-[16px] bg-white/5 rounded-lg border border-transparent hover:border-white/10 cursor-pointer transition-all">
                <input className="rounded border-white/20 bg-[#0d141d] text-[#b4c5ff] focus:ring-[#b4c5ff] ring-offset-[#0d141d]" type="checkbox" />
                <span className="text-sm font-medium">assessment.completed</span>
              </label>
              <label className="flex items-center gap-[16px] p-[16px] bg-white/5 rounded-lg border border-transparent hover:border-white/10 cursor-pointer transition-all">
                <input className="rounded border-white/20 bg-[#0d141d] text-[#b4c5ff] focus:ring-[#b4c5ff] ring-offset-[#0d141d]" type="checkbox" />
                <span className="text-sm font-medium">hiring_decision.updated</span>
              </label>
            </div>
          </div>
          <div className="flex justify-end gap-[16px] pt-[24px]">
            <button className="px-[24px] py-[16px] bg-white/5 rounded-full font-semibold text-sm hover:bg-white/10 transition-all text-[#dce3f0]">Test Endpoint</button>
            <button className="px-[24px] py-[16px] bg-[#b4c5ff] text-[#002a78] rounded-full font-semibold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#b4c5ff]/20">Save Configuration</button>
          </div>
        </div>
      </div>

      {/* Right Column: ATS Integrations */}
      <div className="col-span-12 lg:col-span-5 space-y-[48px]">
        <div className="p-[24px] rounded-xl" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="flex items-center gap-[16px] mb-[48px]">
            <span className="material-symbols-outlined text-[#b4c5ff]" style={{ fontVariationSettings: "'FILL' 0" }}>hub</span>
            <h3 className="font-bold text-[16px] text-[#dce3f0]">ATS Integrations</h3>
          </div>
          <div className="space-y-[24px]">
            {/* Greenhouse */}
            <div className="flex items-center justify-between p-[16px] bg-white/5 rounded-xl border border-[#b4c5ff]/20">
              <div className="flex items-center gap-[24px]">
                <div className="w-12 h-12 rounded-lg bg-[#00A15D]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#00A15D]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                </div>
                <div>
                  <h4 className="font-bold text-[16px] text-[#dce3f0]">Greenhouse</h4>
                  <p className="text-xs text-[#00A15D] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A15D] animate-pulse"></span>
                    Connected
                  </p>
                </div>
              </div>
              <button className="p-[8px] text-[#8d90a0] hover:text-[#dce3f0]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
              </button>
            </div>
            
            {/* Lever */}
            <div className="flex items-center justify-between p-[16px] bg-white/5 rounded-xl border border-transparent hover:border-white/10 transition-all">
              <div className="flex items-center gap-[24px]">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#dce3f0]" style={{ fontVariationSettings: "'FILL' 0" }}>keyboard_option_key</span>
                </div>
                <div>
                  <h4 className="font-bold text-[16px] text-[#dce3f0]">Lever</h4>
                  <p className="text-xs text-[#8d90a0]">Disconnected</p>
                </div>
              </div>
              <button className="text-[12px] font-semibold tracking-widest px-[24px] py-[8px] bg-white/10 rounded-full hover:bg-white/20 transition-all uppercase">Connect</button>
            </div>
            
            {/* Workday */}
            <div className="flex items-center justify-between p-[16px] bg-white/5 rounded-xl border border-transparent hover:border-white/10 transition-all">
              <div className="flex items-center gap-[24px]">
                <div className="w-12 h-12 rounded-lg bg-[#005CB9]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#005CB9]" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
                </div>
                <div>
                  <h4 className="font-bold text-[16px] text-[#dce3f0]">Workday</h4>
                  <p className="text-xs text-[#8d90a0]">Enterprise Only</p>
                </div>
              </div>
              <button className="text-[12px] font-semibold tracking-widest px-[24px] py-[8px] bg-white/10 rounded-full hover:bg-white/20 transition-all uppercase">Upgrade</button>
            </div>
          </div>
          
          <div className="mt-[80px] p-[24px] bg-gradient-to-br from-[#2563eb]/20 to-[#8343f4]/20 rounded-xl border border-white/5 text-center">
            <p className="text-[14px] font-medium mb-[24px] text-[#dce3f0]">Need a custom integration?</p>
            <p className="text-[12px] text-[#c3c6d7] mb-[24px] leading-relaxed px-[16px]">
              Our Enterprise Engineering team can build bespoke sync agents for your proprietary talent stack.
            </p>
            <button className="w-full py-[16px] bg-white text-[#0d141d] rounded-full font-semibold hover:bg-white/90 active:scale-95 transition-all">
              Contact Solutions
            </button>
          </div>
        </div>

        <div className="p-[24px] rounded-xl border-l-4 border-l-[#d2bbff]" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)' }}>
          <h4 className="text-[14px] font-bold flex items-center gap-[8px] text-[#dce3f0]">
            <span className="material-symbols-outlined text-[#d2bbff] text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>security</span>
            API Usage Limits
          </h4>
          <div className="mt-[24px] space-y-[8px]">
            <div className="flex justify-between text-[12px]">
              <span className="text-[#8d90a0]">Monthly Requests</span>
              <span className="text-[#dce3f0] font-mono">14,203 / 50,000</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#d2bbff] h-full rounded-full" style={{ width: '28%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
