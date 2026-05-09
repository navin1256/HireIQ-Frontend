import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-[80px] bg-[#080f17] border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] mb-[80px]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-[8px] mb-[48px]">
              <span className="text-2xl font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>hire</span>
              <span className="text-2xl font-bold text-gradient" style={{ fontFamily: 'Plus Jakarta Sans' }}>iq</span>
            </div>
            <p className="text-[#c3c6d7] text-sm mb-[48px]">
              The world's leading autonomous technical recruitment platform powered by generative AI.
            </p>
            <div className="flex gap-[24px]">
              <span className="material-symbols-outlined text-[#c3c6d7] hover:text-[#b4c5ff] cursor-pointer transition-colors">public</span>
              <span className="material-symbols-outlined text-[#c3c6d7] hover:text-[#b4c5ff] cursor-pointer transition-colors">share</span>
              <span className="material-symbols-outlined text-[#c3c6d7] hover:text-[#b4c5ff] cursor-pointer transition-colors">podcasts</span>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-[16px]">
            <span className="text-[12px] font-semibold text-[#dce3f0] uppercase tracking-widest mb-[8px]" style={{ fontFamily: 'Inter' }}>Product</span>
            {['Platform', 'Features', 'Solutions', 'Pricing'].map((item) => (
              <a key={item} className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors text-sm" href="#">{item}</a>
            ))}
            <Link to="/compare/karat" className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors text-sm">Compare vs Karat</Link>
            <Link to="/vs-intervue" className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors text-sm">Compare vs Intervue</Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-[16px]">
            <span className="text-[12px] font-semibold text-[#dce3f0] uppercase tracking-widest mb-[8px]" style={{ fontFamily: 'Inter' }}>Company</span>
            <Link to="/about" className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors text-sm">About Us</Link>
            <Link to="/blog" className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors text-sm">Blog</Link>
            <Link to="/contact" className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors text-sm">Contact</Link>
            {['Careers'].map((item) => (
              <a key={item} className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors text-sm" href="#">{item}</a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-[16px]">
            <span className="text-[12px] font-semibold text-[#dce3f0] uppercase tracking-widest mb-[8px]" style={{ fontFamily: 'Inter' }}>Legal</span>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors text-sm" href="#">{item}</a>
            ))}
            <Link to="/security" className="text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors text-sm">Security</Link>
          </div>
        </div>

        <div className="pt-[48px] border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-[24px]">
          <p className="text-[#c3c6d7] text-sm opacity-60">© 2024 HireIQ AI. All rights reserved.</p>
          <span className="text-xs text-[#c3c6d7] opacity-40">Built with precision for engineering teams.</span>
        </div>
      </div>
    </footer>
  );
}
