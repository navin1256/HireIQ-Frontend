import { Link } from 'react-router-dom';

function ReportNavbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f8f9fa]/80 backdrop-blur-md border-b border-[#c6c6cd]/30">
      <div className="flex justify-between items-center h-16 px-[24px] max-w-[680px] mx-auto">
        <Link to="/" className="text-[20px] font-extrabold text-[#000000]" style={{ fontFamily: 'Inter' }}>HireIQ</Link>
        <div className="hidden md:block text-[16px] font-bold text-[#191c1d]" style={{ fontFamily: 'Inter' }}>Your Interview Report</div>
        <div className="flex items-center gap-[12px]">
          <button className="flex items-center gap-[4px] text-[14px] font-bold bg-[#000000] text-white px-4 py-2 rounded-lg hover:scale-95 transition-transform" style={{ fontFamily: 'Inter' }}>
            <span className="material-symbols-outlined text-[18px]">download</span>
            Download PDF
          </button>
        </div>
      </div>
    </nav>
  );
}

function ReportFooter() {
  return (
    <footer className="w-full py-[80px] bg-white border-t border-[#c6c6cd]/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-[24px] max-w-[680px] mx-auto gap-[24px]">
        <div className="text-[12px] font-bold text-[#000000] tracking-[0.05em]" style={{ fontFamily: 'Inter' }}>HireIQ</div>
        <div className="flex flex-wrap justify-center gap-[24px]">
          <a className="text-[14px] text-[#45464c] hover:text-[#000000] transition-colors" style={{ fontFamily: 'Inter' }} href="#">Privacy Policy</a>
          <a className="text-[14px] text-[#45464c] hover:text-[#000000] transition-colors" style={{ fontFamily: 'Inter' }} href="#">Terms of Service</a>
          <a className="text-[14px] text-[#45464c] hover:text-[#000000] transition-colors" style={{ fontFamily: 'Inter' }} href="#">Support</a>
          <a className="text-[14px] text-[#45464c] hover:text-[#000000] transition-colors" style={{ fontFamily: 'Inter' }} href="#">Feedback</a>
        </div>
        <p className="text-[14px] text-[#45464c]" style={{ fontFamily: 'Inter' }}>© 2024 HireIQ Premium Coaching.</p>
      </div>
    </footer>
  );
}

export default function CandidateFeedbackPage() {
  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen" style={{ fontFamily: 'Inter' }}>
      <ReportNavbar />
      
      <main className="pt-24 pb-[80px] px-[24px] max-w-[680px] mx-auto bg-white min-h-screen border-x border-[#c6c6cd]/20 shadow-sm">
        {/* Meta Row */}
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-[24px] mb-[48px] p-[24px] border border-[#c6c6cd]/20 rounded-[20px] bg-white shadow-sm">
          <div className="flex items-center gap-[24px]">
            <div className="w-12 h-12 bg-[#edeeef] rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                alt="TechCorp Logo" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyWY592CAz-kOv4Dbaq0HqxazZO-2EKvMN1F52uxD2EP09GLGHoCCH6FZWC5nWJ2D8AdYFXaseBydwzbC3XdPZa7XEFoGNXwchvkB5qRjrpa5QljGQsibRBE1sNt93CcFbw5vvEPYFPNDNv6mkoF_Tt-OThsgo8J9rqpOOsmg0AXbiZLwlyZqiKDZAa4LW1EtaJLAsWhNSVARGAHszZdZPPxVHYo4cp5XU9UtEkkWoYAQldgjaWoCQyRcVHOJOOLx9_7hUvi3Nz-E"
              />
            </div>
            <div>
              <h2 className="text-[20px] font-semibold text-[#191c1d]">Senior React Developer</h2>
              <p className="text-[14px] text-[#45464c]">TechCorp • Engineering Team</p>
            </div>
          </div>
          <div className="flex items-center gap-[4px] text-[#45464c]">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span className="text-[12px] font-semibold tracking-[0.05em]">Interview date: May 7, 2025</span>
          </div>
        </section>

        {/* Overall Score Section */}
        <section className="flex flex-col items-center mb-[80px]">
          <div className="relative w-[120px] h-[120px] mb-[24px]">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle className="text-[#e7e8e9] stroke-current" cx="50" cy="50" fill="transparent" r="42" strokeWidth="8"></circle>
              <circle 
                className="text-[#33e282] stroke-current transition-all duration-500 ease-out" 
                cx="50" cy="50" fill="transparent" r="42" strokeLinecap="round" strokeWidth="8" 
                style={{ strokeDasharray: 263.89, strokeDashoffset: '58.0558', transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[32px] font-extrabold text-[#000000]">78</span>
              <span className="text-[10px] font-semibold tracking-[0.05em] text-[#45464c]">/ 100</span>
            </div>
          </div>
          <div className="text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-[#56fc99] text-[#00723c] text-[14px] font-bold mb-[12px]">Strong Candidate</span>
            <p className="text-[16px] text-[#45464c] px-[24px]">Your performance was exceptional, showing a high degree of technical mastery and strategic thinking.</p>
          </div>
        </section>

        {/* Skill Breakdown */}
        <section className="mb-[48px] p-[24px] bg-white border border-[#c6c6cd]/30 rounded-[20px] shadow-sm">
          <h3 className="text-[20px] font-semibold mb-[24px] flex items-center gap-[12px]">
            <span className="material-symbols-outlined text-[#000000]">analytics</span>
            Competency Matrix
          </h3>
          <div className="space-y-[24px]">
            {/* Skill Item */}
            <div className="space-y-[4px]">
              <div className="flex justify-between text-[12px] font-semibold tracking-[0.05em] text-[#45464c]">
                <span>Technical Knowledge</span>
                <span className="font-bold">82%</span>
              </div>
              <div className="w-full h-2 bg-[#edeeef] rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>
            {/* Skill Item */}
            <div className="space-y-[4px]">
              <div className="flex justify-between text-[12px] font-semibold tracking-[0.05em] text-[#45464c]">
                <span>Problem Solving</span>
                <span className="font-bold">79%</span>
              </div>
              <div className="w-full h-2 bg-[#edeeef] rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '79%' }}></div>
              </div>
            </div>
            {/* Skill Item */}
            <div className="space-y-[4px]">
              <div className="flex justify-between text-[12px] font-semibold tracking-[0.05em] text-[#45464c]">
                <span>Communication</span>
                <span className="font-bold">74%</span>
              </div>
              <div className="w-full h-2 bg-[#edeeef] rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '74%' }}></div>
              </div>
            </div>
            {/* Skill Item */}
            <div className="space-y-[4px]">
              <div className="flex justify-between text-[12px] font-semibold tracking-[0.05em] text-[#45464c]">
                <span>AI Proficiency</span>
                <span className="font-bold">70%</span>
              </div>
              <div className="w-full h-2 bg-[#edeeef] rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Positive Feedback */}
        <section className="mb-[24px] p-[24px] bg-[#F0FDF4] border border-green-200 rounded-[20px]">
          <h3 className="text-[20px] font-semibold text-green-900 mb-[12px] flex items-center gap-[12px]">
            <span className="material-symbols-outlined">check_circle</span>
            Key Strengths
          </h3>
          <ul className="space-y-[12px] text-[16px] text-green-800">
            <li className="flex gap-[12px]">
              <span className="text-green-500 font-bold">•</span>
              Demonstrated profound understanding of React reconciliation and custom hook patterns in the live coding session.
            </li>
            <li className="flex gap-[12px]">
              <span className="text-green-500 font-bold">•</span>
              Articulated complex architectural trade-offs between micro-frontends and monorepos with clarity and business context.
            </li>
          </ul>
        </section>

        {/* Improvement Areas */}
        <section className="mb-[48px] p-[24px] bg-[#FFFBEB] border border-amber-200 rounded-[20px]">
          <h3 className="text-[20px] font-semibold text-amber-900 mb-[12px] flex items-center gap-[12px]">
            <span className="material-symbols-outlined">lightbulb</span>
            Growth Opportunities
          </h3>
          <ul className="space-y-[12px] text-[16px] text-amber-800">
            <li className="flex gap-[12px]">
              <span className="text-amber-500 font-bold">•</span>
              Deepen knowledge in distributed consistency models, specifically regarding CAP theorem applications in large-scale state management.
            </li>
            <li className="flex gap-[12px]">
              <span className="text-amber-500 font-bold">•</span>
              Consider exploring more rigorous Big O analysis for edge cases in custom data manipulation algorithms.
            </li>
          </ul>
        </section>

        {/* Recommended Resources */}
        <section className="mb-[48px]">
          <h3 className="text-[20px] font-semibold mb-[24px]">Coach's Library</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <div className="p-[24px] bg-white border border-indigo-100 rounded-[18px] hover:shadow-md transition-shadow group">
              <div className="w-full aspect-video bg-indigo-50 rounded-lg mb-[12px] overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-indigo-300 text-[48px] group-hover:scale-110 transition-transform">menu_book</span>
              </div>
              <h4 className="text-[16px] font-bold text-[#191c1d] mb-[4px]">System Design Interview</h4>
              <p className="text-[14px] text-[#45464c] mb-[24px]">By Alex Xu — Essential for distributed systems mastery.</p>
              <a className="text-[14px] font-bold text-indigo-600 hover:underline" href="#">View Book</a>
            </div>
            <div className="p-[24px] bg-white border border-indigo-100 rounded-[18px] hover:shadow-md transition-shadow group">
              <div className="w-full aspect-video bg-indigo-50 rounded-lg mb-[12px] overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-indigo-300 text-[48px] group-hover:scale-110 transition-transform">school</span>
              </div>
              <h4 className="text-[16px] font-bold text-[#191c1d] mb-[4px]">Advanced Algorithms</h4>
              <p className="text-[14px] text-[#45464c] mb-[24px]">Interactive course on complex problem solving.</p>
              <a className="text-[14px] font-bold text-indigo-600 hover:underline" href="#">Start Learning</a>
            </div>
          </div>
        </section>

        {/* Closing Message */}
        <section className="text-center py-[48px] border-t border-[#c6c6cd]/20">
          <p className="text-[18px] leading-[1.6] text-[#191c1d] mb-[8px]">"You have the technical foundation to lead high-impact engineering teams. Focus on the architectural nuances, and you'll be unstoppable."</p>
          <p className="text-[16px] text-[#45464c] font-bold">— The HireIQ Team</p>
        </section>

        {/* Share & Actions */}
        <section className="flex flex-col md:flex-row gap-[24px] justify-center mt-[24px]">
          <button className="flex items-center justify-center gap-[12px] px-6 py-3 bg-[#0077B5] text-white rounded-full text-[14px] font-bold hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-[20px]">share</span>
            Share on LinkedIn
          </button>
          <button className="flex items-center justify-center gap-[12px] px-6 py-3 border border-[#c6c6cd] text-[#191c1d] rounded-full text-[14px] font-bold hover:bg-[#f3f4f5] transition-colors">
            <span className="material-symbols-outlined text-[20px]">file_download</span>
            Save Report PDF
          </button>
        </section>

        {/* Premium Upgrade */}
        <div className="mt-[80px] p-[24px] bg-[#e1e3e4] rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <span className="material-symbols-outlined text-[#000000]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            <div>
              <h5 className="text-[12px] font-semibold tracking-[0.05em] text-[#191c1d] uppercase">Unlock Deeper Analysis</h5>
              <p className="text-[10px] text-[#45464c]">Full session recording & AI-driven coding review</p>
            </div>
          </div>
          <button className="bg-[#000000] text-white px-4 py-1.5 rounded-lg text-[12px] font-bold hover:scale-95 transition-transform">
            Upgrade for $19
          </button>
        </div>

      </main>
      
      <ReportFooter />
    </div>
  );
}
