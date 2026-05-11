import React from 'react';
import { Link } from 'react-router-dom';

export default function CandidateSettingsPage() {
  return (
    <div className="bg-[#f0f4fa] text-[#131b2e] min-h-screen font-body-md">
      <style>
        {`
          .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
              vertical-align: middle;
          }
          .glass-panel {
              background: rgba(255, 255, 255, 0.6);
              backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.8);
          }
          /* Custom toggle switch */
          .toggle-checkbox:checked {
            right: 0;
            border-color: #004ac6;
          }
          .toggle-checkbox:checked + .toggle-label {
            background-color: #004ac6;
          }
        `}
      </style>

      {/* Side Navigation Shell */}
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-[#c3c6d7] bg-[#f9fafc] flex flex-col py-8 z-50">
        <div className="px-6 mb-10">
          <h1 className="font-h3 text-[22px] font-bold text-[#131b2e] tracking-tight">HireIQ</h1>
          <p className="font-label-caps text-[10px] font-bold tracking-widest text-[#004ac6] uppercase mt-1">Candidate Portal</p>
        </div>
        
        <nav className="flex-1 space-y-2 px-3">
          <Link to="/candidate/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#434655] hover:bg-[#dbe1ff] transition-colors group">
            <span className="material-symbols-outlined text-[20px] group-hover:text-[#004ac6]">dashboard</span>
            <span className="font-medium text-[14px]">Dashboard</span>
          </Link>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#434655] hover:bg-[#dbe1ff] transition-colors group" href="#">
            <span className="material-symbols-outlined text-[20px] group-hover:text-[#004ac6]">work</span>
            <span className="font-medium text-[14px]">Applications</span>
          </a>
          
          <div className="pt-4 pb-2 px-3">
            <p className="font-label-caps text-[10px] font-bold text-[#8d90a0] uppercase tracking-wider">Preparation</p>
          </div>
          
          <Link to="/candidate/practice" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#434655] hover:bg-[#dbe1ff] transition-colors group">
            <span className="material-symbols-outlined text-[20px] group-hover:text-[#004ac6]">psychology</span>
            <span className="font-medium text-[14px]">Practice Mode</span>
          </Link>
          
          <Link to="/candidate/certifications" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#434655] hover:bg-[#dbe1ff] transition-colors group">
            <span className="material-symbols-outlined text-[20px] group-hover:text-[#004ac6]">workspace_premium</span>
            <span className="font-medium text-[14px]">Certifications</span>
          </Link>
        </nav>
        
        <div className="mt-auto px-3 border-t border-[#c3c6d7] pt-4">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#004ac6] bg-[#dbe1ff] font-bold">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
            <span className="text-[14px]">Settings</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 w-full z-40 bg-[#f9fafc]/80 backdrop-blur-md border-b border-[#c3c6d7] flex justify-between items-center px-8 py-4 h-[72px]">
          <div>
            <h2 className="font-h3 text-[18px] font-bold text-[#131b2e]">Profile & Settings</h2>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-l border-[#c3c6d7] pl-6">
              <button className="p-2 text-[#434655] hover:text-[#004ac6] transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div className="w-9 h-9 rounded-full bg-[#dce2f3] overflow-hidden border border-[#c3c6d7]">
                <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmfttdHOqsdR2BRQ-P6RC777vAKO1wcNu8t7EZFYaRIN5rfNjzSvMAAo7pRUmEveQb68AmZx7sSG4_2mGn5APpClkBP0xD94IfLNGAYOYNSpMPXfOjrPldtpPH2pyeIzcyT_2vhvny_fkQ5R7tV1YZSC_yXyz3L4OIJ4eboD4yF2MjNphjlAIE3MRZuDSXng1BqrGROEF3-OMLnxQ3QLhB2MHWycJWVSIZML7jtcWHRtc4kNh9SbH-ix38scG_CvIDisdiNAn0LdY" />
              </div>
            </div>
          </div>
        </header>

        {/* Settings Content */}
        <div className="max-w-[1000px] mx-auto p-8 flex gap-8">
          
          {/* Settings Navigation */}
          <div className="w-64 shrink-0">
             <div className="bg-white rounded-2xl border border-[#c3c6d7] p-4 sticky top-24 shadow-sm">
                <nav className="space-y-1">
                   <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#004ac6] bg-[#f0f4fa] font-bold text-left transition-colors">
                      <span className="material-symbols-outlined text-[18px]">person</span> General Profile
                   </button>
                   <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#434655] hover:bg-[#f9fafc] font-medium text-left transition-colors">
                      <span className="material-symbols-outlined text-[18px]">work_history</span> Experience
                   </button>
                   <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#434655] hover:bg-[#f9fafc] font-medium text-left transition-colors">
                      <span className="material-symbols-outlined text-[18px]">tune</span> Preferences
                   </button>
                   <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#434655] hover:bg-[#f9fafc] font-medium text-left transition-colors">
                      <span className="material-symbols-outlined text-[18px]">notifications</span> Notifications
                   </button>
                   <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#434655] hover:bg-[#f9fafc] font-medium text-left transition-colors mt-4 border-t border-[#c3c6d7] pt-4">
                      <span className="material-symbols-outlined text-[18px]">security</span> Security
                   </button>
                </nav>
             </div>
          </div>

          {/* Form Area */}
          <div className="flex-1 space-y-6">
             
             {/* Profile Header Card */}
             <div className="bg-white rounded-2xl border border-[#c3c6d7] p-8 shadow-sm">
                <h3 className="font-h3 text-[20px] font-bold text-[#131b2e] mb-6">Profile Information</h3>
                
                <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
                   <div className="relative group">
                      <div className="w-24 h-24 rounded-full bg-[#dce2f3] overflow-hidden border border-[#c3c6d7]">
                         <img alt="Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmfttdHOqsdR2BRQ-P6RC777vAKO1wcNu8t7EZFYaRIN5rfNjzSvMAAo7pRUmEveQb68AmZx7sSG4_2mGn5APpClkBP0xD94IfLNGAYOYNSpMPXfOjrPldtpPH2pyeIzcyT_2vhvny_fkQ5R7tV1YZSC_yXyz3L4OIJ4eboD4yF2MjNphjlAIE3MRZuDSXng1BqrGROEF3-OMLnxQ3QLhB2MHWycJWVSIZML7jtcWHRtc4kNh9SbH-ix38scG_CvIDisdiNAn0LdY" />
                      </div>
                      <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#004ac6] text-white rounded-full flex items-center justify-center border-2 border-white hover:bg-[#00399e] transition-colors shadow-sm">
                         <span className="material-symbols-outlined text-[16px]">edit</span>
                      </button>
                   </div>
                   <div className="flex-1 w-full space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="space-y-1">
                            <label className="text-[12px] font-bold text-[#434655] uppercase tracking-wider">First Name</label>
                            <input type="text" defaultValue="Alex" className="w-full bg-[#f9fafc] border border-[#c3c6d7] rounded-lg px-4 py-2.5 text-[14px] text-[#131b2e] focus:outline-none focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all" />
                         </div>
                         <div className="space-y-1">
                            <label className="text-[12px] font-bold text-[#434655] uppercase tracking-wider">Last Name</label>
                            <input type="text" defaultValue="Chen" className="w-full bg-[#f9fafc] border border-[#c3c6d7] rounded-lg px-4 py-2.5 text-[14px] text-[#131b2e] focus:outline-none focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all" />
                         </div>
                      </div>
                      <div className="space-y-1">
                         <label className="text-[12px] font-bold text-[#434655] uppercase tracking-wider">Professional Title</label>
                         <input type="text" defaultValue="Senior Frontend Engineer" className="w-full bg-[#f9fafc] border border-[#c3c6d7] rounded-lg px-4 py-2.5 text-[14px] text-[#131b2e] focus:outline-none focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all" />
                      </div>
                   </div>
                </div>

                <div className="space-y-4 border-t border-[#e1e2ed] pt-6">
                   <div className="space-y-1">
                      <label className="text-[12px] font-bold text-[#434655] uppercase tracking-wider">Email Address</label>
                      <input type="email" defaultValue="alex.chen@example.com" className="w-full bg-[#f9fafc] border border-[#c3c6d7] rounded-lg px-4 py-2.5 text-[14px] text-[#131b2e] focus:outline-none focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all" />
                   </div>
                   
                   <div className="space-y-1">
                      <label className="text-[12px] font-bold text-[#434655] uppercase tracking-wider">Location</label>
                      <input type="text" defaultValue="San Francisco, CA (Open to Remote)" className="w-full bg-[#f9fafc] border border-[#c3c6d7] rounded-lg px-4 py-2.5 text-[14px] text-[#131b2e] focus:outline-none focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all" />
                   </div>

                   <div className="space-y-1">
                      <label className="text-[12px] font-bold text-[#434655] uppercase tracking-wider flex justify-between">
                         Bio
                         <span className="text-[#8d90a0] font-normal normal-case">142 / 500</span>
                      </label>
                      <textarea rows={4} className="w-full bg-[#f9fafc] border border-[#c3c6d7] rounded-lg px-4 py-2.5 text-[14px] text-[#131b2e] focus:outline-none focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all resize-y" defaultValue="Passionate frontend engineer with 5+ years of experience building scalable web applications. Specialized in React ecosystem and performance optimization."></textarea>
                   </div>
                </div>

             </div>

             {/* Links & Socials */}
             <div className="bg-white rounded-2xl border border-[#c3c6d7] p-8 shadow-sm">
                <h3 className="font-h3 text-[20px] font-bold text-[#131b2e] mb-6">Links & Portfolio</h3>
                <div className="space-y-4">
                   
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-[#f0f4fa] flex items-center justify-center shrink-0 border border-[#c3c6d7]">
                         <span className="font-bold text-[18px]">in</span>
                      </div>
                      <input type="url" defaultValue="https://linkedin.com/in/alexchen" placeholder="LinkedIn URL" className="flex-1 bg-[#f9fafc] border border-[#c3c6d7] rounded-lg px-4 py-2 text-[14px] text-[#131b2e] focus:outline-none focus:border-[#004ac6]" />
                   </div>

                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-[#f0f4fa] flex items-center justify-center shrink-0 border border-[#c3c6d7]">
                         <svg className="w-5 h-5 text-[#131b2e]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                      </div>
                      <input type="url" defaultValue="https://github.com/alexchen-dev" placeholder="GitHub URL" className="flex-1 bg-[#f9fafc] border border-[#c3c6d7] rounded-lg px-4 py-2 text-[14px] text-[#131b2e] focus:outline-none focus:border-[#004ac6]" />
                   </div>

                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-[#f0f4fa] flex items-center justify-center shrink-0 border border-[#c3c6d7]">
                         <span className="material-symbols-outlined text-[#131b2e]">language</span>
                      </div>
                      <input type="url" defaultValue="https://alexchen.dev" placeholder="Personal Website" className="flex-1 bg-[#f9fafc] border border-[#c3c6d7] rounded-lg px-4 py-2 text-[14px] text-[#131b2e] focus:outline-none focus:border-[#004ac6]" />
                   </div>

                </div>
             </div>

             {/* Visibility & Status */}
             <div className="bg-white rounded-2xl border border-[#c3c6d7] p-8 shadow-sm">
                <h3 className="font-h3 text-[20px] font-bold text-[#131b2e] mb-6">Profile Status</h3>
                
                <div className="space-y-6">
                   <div className="flex items-center justify-between p-4 bg-[#f9fafc] border border-[#e1e2ed] rounded-xl">
                      <div>
                         <p className="font-bold text-[#131b2e] text-[14px]">Open to Opportunities</p>
                         <p className="text-[#434655] text-[13px] mt-1">Let companies know you are actively looking for roles.</p>
                      </div>
                      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                          <input type="checkbox" name="toggle" id="status-toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 transition-transform duration-200 ease-in-out border-[#c3c6d7]" defaultChecked />
                          <label htmlFor="status-toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-[#e1e2ed] cursor-pointer transition-colors duration-200 ease-in-out"></label>
                      </div>
                   </div>

                   <div className="flex items-center justify-between p-4 bg-[#f9fafc] border border-[#e1e2ed] rounded-xl">
                      <div>
                         <p className="font-bold text-[#131b2e] text-[14px]">Hide from Current Employer</p>
                         <p className="text-[#434655] text-[13px] mt-1">We'll hide your profile from users associated with your current company.</p>
                      </div>
                      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                          <input type="checkbox" name="toggle-hide" id="hide-toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 transition-transform duration-200 ease-in-out border-[#c3c6d7]" />
                          <label htmlFor="hide-toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-[#e1e2ed] cursor-pointer transition-colors duration-200 ease-in-out"></label>
                      </div>
                   </div>
                </div>
             </div>

             {/* Action Buttons */}
             <div className="flex justify-end gap-4 pt-4">
                <button className="px-6 py-2.5 rounded-lg text-[#434655] font-bold text-[14px] hover:bg-white transition-colors border border-transparent hover:border-[#c3c6d7]">
                   Cancel
                </button>
                <button className="px-6 py-2.5 rounded-lg bg-[#004ac6] text-white font-bold text-[14px] hover:bg-[#00399e] transition-colors shadow-sm">
                   Save Changes
                </button>
             </div>

          </div>
        </div>
      </main>
    </div>
  );
}
