import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/marketing/HomePage';
import PricingPage from './pages/marketing/PricingPage';
import AiScreeningPage from './pages/marketing/AiScreeningPage';
import CandidateFeedbackPage from './pages/marketing/CandidateFeedbackPage';
import KaratComparisonPage from './pages/marketing/KaratComparisonPage';
import IntervueComparisonPage from './pages/marketing/IntervueComparisonPage';
import ForCandidatesPage from './pages/marketing/ForCandidatesPage';
import StartupsPage from './pages/marketing/StartupsPage';
import EnterprisePage from './pages/marketing/EnterprisePage';
import SecurityPage from './pages/marketing/SecurityPage';
import AboutPage from './pages/marketing/AboutPage';
import BlogPage from './pages/marketing/BlogPage';
import RoiCalculatorPage from './pages/marketing/RoiCalculatorPage';
import ContactPage from './pages/marketing/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import CompanyLoginPage from './pages/auth/CompanyLoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import OnboardingPage from './pages/auth/OnboardingPage';
import CompanyDashboardPage from './pages/dashboard/CompanyDashboardPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/platform/ai-screening" element={<AiScreeningPage />} />
      <Route path="/platform/candidate-feedback" element={<CandidateFeedbackPage />} />
      <Route path="/compare/karat" element={<KaratComparisonPage />} />
      <Route path="/vs-intervue" element={<IntervueComparisonPage />} />
      <Route path="/for-candidates" element={<ForCandidatesPage />} />
      <Route path="/solutions/startups" element={<StartupsPage />} />
      <Route path="/solutions/enterprise" element={<EnterprisePage />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/roi-calculator" element={<RoiCalculatorPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/company" element={<CompanyLoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/dashboard" element={<CompanyDashboardPage />} />
    </Routes>
  );
}
