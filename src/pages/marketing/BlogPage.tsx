import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function HeroSection() {
  return (
    <header className="relative pt-[160px] pb-[80px] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-[48px] relative z-10 text-center">
        <span className="text-[12px] font-semibold tracking-[0.2em] text-[#b4c5ff] mb-[16px] block uppercase" style={{ fontFamily: 'Inter' }}>THE HIREIQ JOURNAL</span>
        <h1 className="text-[64px] font-bold text-[#dce3f0] mb-[24px] leading-[1.1]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.02em' }}>HireIQ Blog</h1>
        <p className="text-[18px] text-[#c3c6d7] max-w-2xl mx-auto leading-[1.6]" style={{ fontFamily: 'Inter' }}>
          Hiring insights, engineering career advice, and AI hiring trends for the modern talent acquisition leader.
        </p>
      </div>
    </header>
  );
}

function CategoryFiltersSection() {
  return (
    <section className="mb-[80px] relative z-20">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="glass rounded-full p-[8px] flex justify-center items-center gap-[8px] max-w-fit mx-auto shadow-xl">
          <button className="px-[24px] py-[16px] rounded-full bg-[#2563eb] text-white font-semibold text-[15px] transition-all" style={{ fontFamily: 'Inter' }}>All Posts</button>
          <button className="px-[24px] py-[16px] rounded-full text-[#c3c6d7] hover:text-[#dce3f0] font-semibold text-[15px] transition-all" style={{ fontFamily: 'Inter' }}>AI Hiring</button>
          <button className="px-[24px] py-[16px] rounded-full text-[#c3c6d7] hover:text-[#dce3f0] font-semibold text-[15px] transition-all" style={{ fontFamily: 'Inter' }}>Candidate Experience</button>
          <button className="px-[24px] py-[16px] rounded-full text-[#c3c6d7] hover:text-[#dce3f0] font-semibold text-[15px] transition-all" style={{ fontFamily: 'Inter' }}>Engineering Leadership</button>
          <button className="px-[24px] py-[16px] rounded-full text-[#c3c6d7] hover:text-[#dce3f0] font-semibold text-[15px] transition-all" style={{ fontFamily: 'Inter' }}>Product Updates</button>
        </div>
      </div>
    </section>
  );
}

function FeaturedArticleSection() {
  return (
    <main className="max-w-[1280px] mx-auto px-[48px] mb-[80px]">
      <article className="glass rounded-[32px] overflow-hidden flex flex-col md:flex-row min-h-[500px] hover:border-[#b4c5ff]/20 transition-all duration-300 group">
        <div className="md:w-1/2 relative overflow-hidden">
          <img 
            alt="Featured Article" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh9kBW2Yq0vuRSAIQ2MFSSvt0QN7jXkeSwbrkvXDMyPJb246ZK_kfwcFbDPu-wfcBWYmqypN49h5dKsxWDyGB8L5wRsTz0Grkdy_oETQ1D_xUXka88WAwNcXxLgRh3J9j1hic8ZyF5j8sQ6kmj8pJfb0BjzetJn6BXsks7bLIaG_HalYJtekY_Mmyq-mFB_be5uEnyfr-m82qibUXROxEqWip6WxF0tcVTy9L96QNKlqVRScM6wpkawwBEou8geEHJfQxB6MyZYrY"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d141d]/80"></div>
        </div>
        <div className="md:w-1/2 p-[48px] md:p-[80px] flex flex-col justify-center">
          <div className="flex items-center gap-[16px] mb-[24px]">
            <span className="bg-[#2563eb]/20 text-[#b4c5ff] px-[16px] py-[8px] rounded-lg text-[12px] font-semibold tracking-[0.05em] uppercase" style={{ fontFamily: 'Inter' }}>AI HIRING</span>
            <span className="text-[#c3c6d7] text-[12px] font-semibold tracking-[0.05em] uppercase" style={{ fontFamily: 'Inter' }}>12 MIN READ</span>
          </div>
          <h2 className="text-[48px] font-bold text-[#dce3f0] mb-[24px] leading-tight" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em' }}>Why 76% of companies struggle to hire engineers in 2025</h2>
          <p className="text-[18px] text-[#c3c6d7] mb-[80px] leading-[1.6]" style={{ fontFamily: 'Inter' }}>
            As AI agents begin to augment senior developers, the traditional technical interview is broken. We analyze the shift from syntax testing to problem-solving orchestration in the new engineering landscape.
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-[16px]">
              <div className="w-10 h-10 rounded-full bg-[#2e353f] border border-white/10 overflow-hidden">
                <img 
                  alt="Author" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzEOE_IWhP9x-mSk4DpVmXX9mkmLaUXAJSM05tS7psuXFMO48809O7IggEkl3ADL4PfHWpUmJT-rQIedpw0mO0L6HAnctFqVP61Njg9c7rgcF-VWNwlPm6U-1S_Wu4VJyjcBQKNq59o1HC7dk7VSV4wDVbVl0POFtxMboAwX__aKy6jnwEMbI9tke0bmHXUsADU4JVNmUJyekhQ6ehB_95JdnsBwZbjgim18r0OanglIcBCOfnJPYC-b9EVVDTiRDCmuSmNCePtqo"
                />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#dce3f0]" style={{ fontFamily: 'Inter' }}>Marcus Thorne</p>
                <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>CTO @ HireIQ</p>
              </div>
            </div>
            <a className="flex items-center gap-[8px] text-[#b4c5ff] font-semibold text-[15px] group/link" href="#" style={{ fontFamily: 'Inter' }}>
              Read Article 
              <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}

function ArticleGridSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] mb-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {/* Card 1 */}
        <article className="glass rounded-[24px] p-[24px] flex flex-col hover:bg-[#232a34] transition-all duration-300 group">
          <div className="h-[240px] rounded-xl mb-[24px] overflow-hidden relative">
            <img 
              alt="Article Thumbnail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSRWGA2CT3ANJjUAdh4olYdweE-_TlsrGPCxH3C4F5nwQeB27ZI8IOxUQzWJ-io7r9RbSUkqMRhGjV5qp0ekq-t00enNUfYh0BBhIAqzQLZ-2gcu-4eAi-EpJXGLJ8DDk1nz-LJIxoX6D6Kioir8xqoEtoFHaeLd9U5C2SdJrElyHZtldMtJLh6QkFpJFZfX2ob8cPbIJGJhqIPoyMAejsmqjG2ie9B1gY0RSujB-aR80qqJPSMXVpBJ9OrSbnDL2ajy1nEz8MN-A"
            />
            <div className="absolute top-[16px] left-[16px]">
              <span className="bg-[#0d141d]/80 backdrop-blur-md text-[#adc6ff] px-[16px] py-[8px] rounded-lg text-[12px] font-semibold tracking-[0.05em] uppercase" style={{ fontFamily: 'Inter' }}>LEADERSHIP</span>
            </div>
          </div>
          <h3 className="text-[24px] font-bold text-[#dce3f0] mb-[16px] line-clamp-2" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>Scaling Culture: How to maintain engineering standards in remote teams</h3>
          <p className="text-[16px] text-[#c3c6d7] mb-[24px] line-clamp-3 leading-[1.5]" style={{ fontFamily: 'Inter' }}>
            Discover the frameworks used by top silicon valley firms to ensure code quality and cultural alignment across global timezones.
          </p>
          <div className="flex items-center gap-[16px] mt-auto">
            <div className="w-8 h-8 rounded-full bg-[#2e353f] border border-white/10 overflow-hidden">
              <img 
                alt="Author" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7KXh05aPm9TWzkuHHc6zQb69RA_QqMZRL8Oop3L6uQQ_cZxQuWANG5qINY5IpV_D220AMOP-0fCP-ZftuKMBNsbgXZM4SsNLUy-xJd_3u1E28aBwPPihrc3RIrhnaggQ_ZA_lukm6jlpDgWyyAbvgd5roRpsFoa7nQYltrnPAK0RCS7piPVPT_s4avrc5of2VO79x5GFInvEoOX0Zj8raCzFT4Jb5y6xnNZcvh45Nv9jVLi7WSbhz-2szbfThwSo3Btr9KgIA5Rc"
              />
            </div>
            <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>Sarah Chen • 5 min read</p>
          </div>
        </article>
        {/* Card 2 */}
        <article className="glass rounded-[24px] p-[24px] flex flex-col hover:bg-[#232a34] transition-all duration-300 group">
          <div className="h-[240px] rounded-xl mb-[24px] overflow-hidden relative">
            <img 
              alt="Article Thumbnail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjRbDA9tyTl7vuWsXSB8Ks3Ly_bo4i7_2ggVwyb6BV6wtgBc_j7OWZuo2dcTfbQiE-FKrYdL3Gf31_zWyU_g4YbMd4LXbQdAE-D0xZ9VrJ5ylnJOxhYIJxhyALFZFL71C_Pu7lxrolqsmVMMFSe4ncBfIUrZdoNytQFZj30ZT6-6vnwJx-5Nes98xpejJXZbKTk1xJ02z5u5JrzZ47kednee4-oXSj0IOfdVZ_e-I9oWl3_SHh4KDdZYuyf7QVR-JxngQ5pRs3Bh4"
            />
            <div className="absolute top-[16px] left-[16px]">
              <span className="bg-[#0d141d]/80 backdrop-blur-md text-[#adc6ff] px-[16px] py-[8px] rounded-lg text-[12px] font-semibold tracking-[0.05em] uppercase" style={{ fontFamily: 'Inter' }}>AI TRENDS</span>
            </div>
          </div>
          <h3 className="text-[24px] font-bold text-[#dce3f0] mb-[16px] line-clamp-2" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>The Rise of Autonomous Sourcing Agents in SaaS Recruitment</h3>
          <p className="text-[16px] text-[#c3c6d7] mb-[24px] line-clamp-3 leading-[1.5]" style={{ fontFamily: 'Inter' }}>
            How AI agents are moving beyond keyword matching to understanding deep technical expertise through GitHub contributions.
          </p>
          <div className="flex items-center gap-[16px] mt-auto">
            <div className="w-8 h-8 rounded-full bg-[#2e353f] border border-white/10 overflow-hidden">
              <img 
                alt="Author" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGlzg7UtV0KYMuZrg4aCgrNtwXuXq5bLMJsLzpaWH188T9JaVxsawtGPnUd9himAfCtUxQdgIjVloxrKPOk7gEVPWJ2dnUFUah8HFj7-Xs7IcZcPAbLNsr58LSHZO5P_Uqp6tfgiNR8lLLm3Pu4tRYujVmvwaZuYNJ6b4_7Im0n1I5Vh4Y73QvP7_AG-df34McvZU3mTl-LQ7sskD885aqUzBjevw6PVIf-M9UpNqaN-hgcfdxfLANG-W3trzOwI-EySZSGWv7m8c"
              />
            </div>
            <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>David Miller • 8 min read</p>
          </div>
        </article>
        {/* Card 3 */}
        <article className="glass rounded-[24px] p-[24px] flex flex-col hover:bg-[#232a34] transition-all duration-300 group">
          <div className="h-[240px] rounded-xl mb-[24px] overflow-hidden relative">
            <img 
              alt="Article Thumbnail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwL4lls7tkwjri9vUVMWy4nT7R2DPvEnpvhu5QrBp3rL4UkMw8e95g_JUr5dWJJHxNL4NlaQkdckfRawHHY-DhPxqdwPwBHlFlqBflzfvcy66RLWJPv2o9auC_SOySoZE2Cp3UJPKHwgoXJ2OITpuPGFldMPRlFIXKB1rkVgy094-YMHugQYQkBRAIzCqkY6rSny5Bo7yI9flZle2pBQm_-ibR26c_nE5JIkm6QGI0xeatiKemnH9EMvtr0h2GyIvuE11E8rQVIBo"
            />
            <div className="absolute top-[16px] left-[16px]">
              <span className="bg-[#0d141d]/80 backdrop-blur-md text-[#adc6ff] px-[16px] py-[8px] rounded-lg text-[12px] font-semibold tracking-[0.05em] uppercase" style={{ fontFamily: 'Inter' }}>PRODUCT</span>
            </div>
          </div>
          <h3 className="text-[24px] font-bold text-[#dce3f0] mb-[16px] line-clamp-2" style={{ fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3 }}>Announcing HireIQ Insights: Real-time candidate market data</h3>
          <p className="text-[16px] text-[#c3c6d7] mb-[24px] line-clamp-3 leading-[1.5]" style={{ fontFamily: 'Inter' }}>
            We’ve launched a new dashboard to help companies benchmark their technical offers against real-world market trends.
          </p>
          <div className="flex items-center gap-[16px] mt-auto">
            <div className="w-8 h-8 rounded-full bg-[#2e353f] border border-white/10 overflow-hidden">
              <img 
                alt="Author" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT2qDcQtRUnAQDEbGh9H48BwCdba1nRHiJimpB5oOI_puEvpy6-xTJa18Vi2F3SYi4Nenf1FMkvhayLvbWTa2avOptWBbFGNzqt8voXzbSK479KNUcpnBiAaIz7S95CpHPgPViiage7tk_fMIBemYgBsSA5-XHOvYoA7WkIqL1ubx8SmWCwihkNhqz-syas9MJnBFPKlpg9Qkci0OC7m85d3e7gVt56J9jqLUkl5pEs2wEwJeYG29mDRkHG5L7TGYB4KgVmuHPrBM"
              />
            </div>
            <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase" style={{ fontFamily: 'Inter' }}>Elena Rossi • 4 min read</p>
          </div>
        </article>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-[16px] mt-[80px]">
        <button className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-[#232a34] transition-all">
          <span className="material-symbols-outlined text-[20px]">chevron_left</span>
        </button>
        <button className="w-10 h-10 rounded-lg bg-[#2563eb] text-white font-semibold text-[15px] flex items-center justify-center shadow-lg" style={{ fontFamily: 'Inter' }}>1</button>
        <button className="w-10 h-10 rounded-lg glass text-[#c3c6d7] hover:text-[#dce3f0] font-semibold text-[15px] flex items-center justify-center transition-all" style={{ fontFamily: 'Inter' }}>2</button>
        <button className="w-10 h-10 rounded-lg glass text-[#c3c6d7] hover:text-[#dce3f0] font-semibold text-[15px] flex items-center justify-center transition-all" style={{ fontFamily: 'Inter' }}>3</button>
        <span className="text-[#c3c6d7]">...</span>
        <button className="w-10 h-10 rounded-lg glass text-[#c3c6d7] hover:text-[#dce3f0] font-semibold text-[15px] flex items-center justify-center transition-all" style={{ fontFamily: 'Inter' }}>12</button>
        <button className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-[#232a34] transition-all">
          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
        </button>
      </div>
    </section>
  );
}

function NewsletterCTASection() {
  return (
    <section className="max-w-[1280px] mx-auto px-[48px] mb-[80px]">
      <div className="glass rounded-[32px] p-[48px] md:p-[80px] text-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] opacity-50 blur-3xl"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-[48px] font-bold text-[#dce3f0] mb-[16px]" style={{ fontFamily: 'Plus Jakarta Sans', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Stay ahead of AI hiring trends</h2>
          <p className="text-[18px] text-[#c3c6d7] mb-[80px] leading-[1.6]" style={{ fontFamily: 'Inter' }}>
            Get bi-weekly insights on technical recruitment, engineering management, and the future of work delivered straight to your inbox.
          </p>
          <form className="flex flex-col md:flex-row gap-[16px] items-center">
            <div className="w-full relative group">
              <input className="w-full bg-[#080f17] border border-white/10 rounded-full px-[24px] py-[16px] focus:outline-none focus:border-[#b4c5ff] focus:ring-1 focus:ring-[#b4c5ff] transition-all text-[#dce3f0]" placeholder="Enter your work email" type="email"/>
            </div>
            <button className="whitespace-nowrap font-semibold text-[15px] bg-[#b4c5ff] text-[#002a78] px-[80px] py-[16px] rounded-full hover:brightness-110 shadow-lg transition-all scale-95 active:scale-90" type="submit" style={{ fontFamily: 'Inter' }}>Subscribe Now</button>
          </form>
          <p className="text-[12px] font-semibold tracking-[0.05em] text-[#c3c6d7] uppercase mt-[24px]" style={{ fontFamily: 'Inter' }}>Zero spam. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0d141d', color: '#dce3f0' }}>
      <Navbar />
      <main className="pt-[80px]">
        <HeroSection />
        <CategoryFiltersSection />
        <FeaturedArticleSection />
        <ArticleGridSection />
        <NewsletterCTASection />
      </main>
      <Footer />
    </div>
  );
}
