import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { HeroSection, TrustBarSection } from '@/components/home/HeroSection';
import { ProblemSection, HowItWorksSection } from '@/components/home/ProblemSection';
import {
  WorldwideFirstSection,
  ROICalculatorSection,
  PricingSection,
  FinalCTASection,
} from '@/components/home/BottomSections';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: '#0d141d', color: '#dce3f0' }}>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBarSection />
        <ProblemSection />
        <HowItWorksSection />
        <WorldwideFirstSection />
        <ROICalculatorSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
