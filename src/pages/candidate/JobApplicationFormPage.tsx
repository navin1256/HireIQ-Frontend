import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function JobApplicationFormPage() {
  const { jobId } = useParams<{ jobId: string }>();

  return (
    <div className="min-h-screen flex flex-col text-[#191c1d] bg-[#F9FAFB] font-['Inter']">
      {/* TopNavBar Shell */}
      <header className="bg-[#ffffff] border-b border-[#c6c6cd] w-full top-0 sticky z-50">
        <div className="flex justify-between items-center w-full max-w-[1120px] mx-auto px-[24px] h-16">
          <div className="text-[20px] leading-[1.4] font-extrabold text-[#000000]">Acme Technologies</div>
          <div className="flex items-center gap-[12px]">
            <span className="text-[16px] leading-[1.5] font-normal text-[#45464c]">Verified Employer</span>
            <span className="material-symbols-outlined text-[#000000]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          </div>
        </div>
      </header>

      <main className="flex-grow py-[48px] px-[24px]">
        <div className="max-w-[640px] mx-auto space-y-[24px]">
          {/* Job Details Card */}
          <section className="bg-[#ffffff] border border-[#c6c6cd] rounded-xl p-[24px]">
            <h1 className="text-[30px] leading-[1.2] tracking-[-0.01em] font-bold mb-[12px]">Senior React Developer</h1>
            <div className="flex flex-wrap gap-[4px] mb-[24px]">
              <span className="bg-[#f3f4f5] text-[#45464c] px-[12px] py-[4px] rounded-full text-[12px] leading-[1] tracking-[0.05em] font-semibold">Engineering</span>
              <span className="bg-[#f3f4f5] text-[#45464c] px-[12px] py-[4px] rounded-full text-[12px] leading-[1] tracking-[0.05em] font-semibold">Remote</span>
              <span className="bg-[#f3f4f5] text-[#45464c] px-[12px] py-[4px] rounded-full text-[12px] leading-[1] tracking-[0.05em] font-semibold">Full-time</span>
              <span className="bg-[#56fc99] text-[#00723c] px-[12px] py-[4px] rounded-full text-[12px] leading-[1] tracking-[0.05em] font-semibold">$120K-$160K</span>
            </div>
            <div className="space-y-[12px]">
              <h3 className="text-[20px] leading-[1.4] font-semibold">About this role</h3>
              <p className="text-[16px] leading-[1.5] font-normal text-[#45464c]">
                We are looking for a Senior React Developer to lead the evolution of our core productivity platform. You'll be architecting highly performant, accessible web applications and collaborating with a world-class product team.
              </p>
              <button className="text-[#000000] text-[14px] leading-[1] font-bold flex items-center gap-[4px] hover:opacity-80 transition-opacity">
                Read full description
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
            </div>
          </section>

          {/* Hiring Process Indicator */}
          <section className="bg-[#ffffff] border border-[#c6c6cd] rounded-xl p-[24px]">
            <div className="flex justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-4 left-0 w-full h-[2px] bg-[#e1e3e4] z-0"></div>
              <div className="absolute top-4 left-0 w-1/3 h-[2px] bg-[#22D97A] z-0"></div>
              
              {/* Steps */}
              <div className="relative z-10 flex flex-col items-center gap-[4px] group">
                <div className="w-8 h-8 rounded-full bg-[#22D97A] flex items-center justify-center text-[#ffffff] shadow-sm">
                  <span className="text-[14px] leading-[1] font-bold">1</span>
                </div>
                <span className="text-[12px] leading-[1] tracking-[0.05em] text-[#191c1d] font-bold">Apply now</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-[4px]">
                <div className="w-8 h-8 rounded-full bg-[#e1e3e4] flex items-center justify-center text-[#45464c]">
                  <span className="text-[14px] leading-[1] font-bold">2</span>
                </div>
                <span className="text-[12px] leading-[1] tracking-[0.05em] text-[#45464c] font-semibold">AI Interview</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-[4px]">
                <div className="w-8 h-8 rounded-full bg-[#e1e3e4] flex items-center justify-center text-[#45464c]">
                  <span className="text-[14px] leading-[1] font-bold">3</span>
                </div>
                <span className="text-[12px] leading-[1] tracking-[0.05em] text-[#45464c] font-semibold">Company reviews</span>
              </div>
            </div>
          </section>

          {/* Application Form Card */}
          <section className="bg-[#ffffff] border border-[#c6c6cd] rounded-xl p-[24px] shadow-sm">
            <form className="space-y-[24px]">
              {/* Personal Info */}
              <div className="grid grid-cols-1 gap-[24px]">
                <div className="space-y-[4px]">
                  <label className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Full Name *</label>
                  <input className="w-full px-[24px] py-[12px] rounded-lg border border-[#c6c6cd] focus:border-[#000000] focus:ring-0 transition-colors bg-white text-[16px] leading-[1.5] font-normal" placeholder="Jane Doe" required type="text" />
                </div>
                <div className="space-y-[4px]">
                  <label className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Email Address *</label>
                  <input className="w-full px-[24px] py-[12px] rounded-lg border border-[#c6c6cd] focus:border-[#000000] focus:ring-0 transition-colors bg-white text-[16px] leading-[1.5] font-normal" placeholder="jane@example.com" required type="email" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                  <div className="space-y-[4px]">
                    <label className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Phone Number</label>
                    <input className="w-full px-[24px] py-[12px] rounded-lg border border-[#c6c6cd] focus:border-[#000000] focus:ring-0 transition-colors bg-white text-[16px] leading-[1.5] font-normal" placeholder="+1 (555) 000-0000" type="tel" />
                  </div>
                  <div className="space-y-[4px]">
                    <label className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">LinkedIn URL</label>
                    <input className="w-full px-[24px] py-[12px] rounded-lg border border-[#c6c6cd] focus:border-[#000000] focus:ring-0 transition-colors bg-white text-[16px] leading-[1.5] font-normal" placeholder="linkedin.com/in/username" type="url" />
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="space-y-[4px]">
                <label className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Resume/CV *</label>
                <div className="p-[80px] flex flex-col items-center justify-center gap-[12px] bg-[#f3f4f5] hover:bg-[#edeeef] transition-colors cursor-pointer group" style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\' rx=\'8\' ry=\'8\' stroke=\'%23E5E7EBFF\' stroke-width=\'2\' stroke-dasharray=\'6%2c 8\' stroke-dashoffset=\'0\' stroke-linecap=\'square\'/%3e%3c/svg%3e")', borderRadius: '8px' }}>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#45464c] group-hover:text-[#000000] transition-colors">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>cloud_upload</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[16px] leading-[1.5] font-semibold">Click to upload or drag and drop</p>
                    <p className="text-[14px] leading-[1.5] font-normal text-[#45464c]">PDF, DOCX up to 10MB</p>
                  </div>
                </div>
              </div>

              {/* Cover Message */}
              <div className="space-y-[4px]">
                <label className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#45464c]">Cover Message</label>
                <textarea className="w-full px-[24px] py-[12px] rounded-lg border border-[#c6c6cd] focus:border-[#000000] focus:ring-0 transition-colors bg-white text-[16px] leading-[1.5] font-normal resize-none" placeholder="Tell us why you're excited about Acme..." rows={4}></textarea>
              </div>

              {/* Submit */}
              <div className="pt-[12px]">
                <button className="w-full bg-[#22D97A] hover:bg-[#1ebf6b] text-white py-[24px] rounded-lg text-[14px] leading-[1] font-bold transition-all active:scale-[0.98] shadow-sm" type="submit">
                  Submit Application
                </button>
              </div>

              {/* Trust Note */}
              <div className="flex items-center justify-center gap-[4px] text-[#45464c] opacity-70">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                <span className="text-[14px] leading-[1.5] font-normal">Your information is secure</span>
              </div>
            </form>
          </section>
        </div>
      </main>

      {/* Footer Shell */}
      <footer className="bg-[#f8f9fa] border-t border-[#c6c6cd] w-full py-[80px] mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1120px] mx-auto px-[24px] gap-[24px]">
          <div className="text-[12px] leading-[1] font-semibold uppercase tracking-[0.05em] text-[#45464c]">
            Powered by HireIQ
          </div>
          <div className="flex gap-[24px]">
            <a className="text-[14px] leading-[1.5] font-normal text-[#45464c] hover:text-[#22D97A] transition-colors" href="#">Terms of Service</a>
            <a className="text-[14px] leading-[1.5] font-normal text-[#45464c] hover:text-[#22D97A] transition-colors" href="#">Privacy Policy</a>
            <a className="text-[14px] leading-[1.5] font-normal text-[#45464c] hover:text-[#22D97A] transition-colors" href="#">Accessibility</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
