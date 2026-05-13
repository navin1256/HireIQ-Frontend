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
import ExpertLandingPage from './pages/expert/ExpertLandingPage';
import ExpertApplicationPage from './pages/expert/ExpertApplicationPage';
import ExpertLoginPage from './pages/auth/ExpertLoginPage';
import ExpertDashboardPage from './pages/expert/ExpertDashboardPage';
import ExpertInterviewGuidePage from './pages/expert/ExpertInterviewGuidePage';
import ExpertEarningsPage from './pages/expert/ExpertEarningsPage';
import LoginPage from './pages/auth/LoginPage';
import CompanyLoginPage from './pages/auth/CompanyLoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import VerifyEmailPage from './pages/auth/VerifyEmailPage';
import CandidateLoginPage from './pages/auth/CandidateLoginPage';
import CandidateSignupPage from './pages/auth/CandidateSignupPage';
import CandidateDashboardPage from './pages/candidate/CandidateDashboardPage';
import CandidateApplicationsPage from './pages/candidate/CandidateApplicationsPage';
import CandidateReportsPage from './pages/candidate/CandidateReportsPage';
import CandidatePracticeModePage from './pages/candidate/CandidatePracticeModePage';
import CandidateCertificationsPage from './pages/candidate/CandidateCertificationsPage';
import CandidateCertificationExamCompletePage from './pages/candidate/CandidateCertificationExamCompletePage';
import CandidateMyCertificatesPage from './pages/candidate/CandidateMyCertificatesPage';
import CandidateSettingsPage from './pages/candidate/CandidateSettingsPage';
import OnboardingPage from './pages/auth/OnboardingPage';
import OnboardingConnectATSPage from './pages/auth/OnboardingConnectATSPage';
import OnboardingCreateJobPage from './pages/auth/OnboardingCreateJobPage';
import OnboardingInviteTeamPage from './pages/auth/OnboardingInviteTeamPage';
import CompanyDashboardPage from './pages/dashboard/CompanyDashboardPage';
import CompanyJobsPage from './pages/dashboard/CompanyJobsPage';
import CreateJobPage from './pages/dashboard/CreateJobPage';
import JobDetailsPage from './pages/dashboard/JobDetailsPage';
import CandidatePipelinePage from './pages/dashboard/CandidatePipelinePage';
import AllCandidatesPipelinePage from './pages/dashboard/AllCandidatesPipelinePage';
import CandidateProfilePage from './pages/dashboard/CandidateProfilePage';
import InterviewBuilderPage from './pages/dashboard/InterviewBuilderPage';
import LiveInterviewRoomPage from './pages/dashboard/LiveInterviewRoomPage';
import AnalyticsDashboardPage from './pages/dashboard/AnalyticsDashboardPage';
import SettingsPage from './pages/dashboard/SettingsPage';
import BillingSettingsPage from './pages/dashboard/BillingSettingsPage';
import JobApplicationFormPage from './pages/candidate/JobApplicationFormPage';
import PreInterviewChecklistPage from './pages/candidate/PreInterviewChecklistPage';
import AIVideoInterviewPage from './pages/candidate/AIVideoInterviewPage';
import TechnicalAssessmentPage from './pages/candidate/TechnicalAssessmentPage';
import FeedbackReportPage from './pages/candidate/FeedbackReportPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import CompaniesListPage from './pages/admin/CompaniesListPage';
import CompanyDetailPage from './pages/admin/CompanyDetailPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import ExpertApplicationsPage from './pages/admin/ExpertApplicationsPage';
import InterviewsMonitorPage from './pages/admin/InterviewsMonitorPage';
import FlaggedQueuePage from './pages/admin/FlaggedQueuePage';
import AdminBillingPage from './pages/admin/AdminBillingPage';
import QuestionBankPage from './pages/admin/QuestionBankPage';
import BlogManagementPage from './pages/admin/BlogManagementPage';
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage';
import SystemHealthPage from './pages/admin/SystemHealthPage';
import NotFoundPage from './pages/NotFoundPage';
import ServerErrorPage from './pages/error/ServerErrorPage';
import MaintenancePage from './pages/error/MaintenancePage';
import LinkExpiredPage from './pages/error/LinkExpiredPage';
import AccessDeniedPage from './pages/error/AccessDeniedPage';

export default function App() {
  return (
    <Routes>
      {/* ── SECTION 1: Marketing Website ── */}
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/platform/ai-screening" element={<AiScreeningPage />} />
      <Route path="/platform/candidate-feedback" element={<CandidateFeedbackPage />} />
      <Route path="/vs-karat" element={<KaratComparisonPage />} />
      <Route path="/vs-intervue" element={<IntervueComparisonPage />} />
      <Route path="/for-candidates" element={<ForCandidatesPage />} />
      <Route path="/solutions/startups" element={<StartupsPage />} />
      <Route path="/solutions/enterprise" element={<EnterprisePage />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/roi-calculator" element={<RoiCalculatorPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* ── SECTION 2: Company Auth ── */}
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/company" element={<CompanyLoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/onboarding/ats" element={<OnboardingConnectATSPage />} />
      <Route path="/onboarding/job" element={<OnboardingCreateJobPage />} />
      <Route path="/onboarding/invite" element={<OnboardingInviteTeamPage />} />

      {/* ── SECTION 3: Company Dashboard ── */}
      <Route path="/dashboard" element={<CompanyDashboardPage />} />
      <Route path="/jobs" element={<CompanyJobsPage />} />
      <Route path="/jobs/new" element={<CreateJobPage />} />
      <Route path="/jobs/:id" element={<JobDetailsPage />} />
      <Route path="/pipeline" element={<AllCandidatesPipelinePage />} />
      <Route path="/pipeline/:id" element={<CandidatePipelinePage />} />
      <Route path="/candidates/:id" element={<CandidateProfilePage />} />
      <Route path="/interviews/builder" element={<InterviewBuilderPage />} />
      <Route path="/interviews/live/:id" element={<LiveInterviewRoomPage />} />
      <Route path="/analytics" element={<AnalyticsDashboardPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/settings/billing" element={<BillingSettingsPage />} />

      {/* ── SECTION 4: Candidate Pages ── */}
      <Route path="/apply/:jobId" element={<JobApplicationFormPage />} />
      <Route path="/checklist/:interviewId" element={<PreInterviewChecklistPage />} />
      <Route path="/interview/:interviewId" element={<AIVideoInterviewPage />} />
      <Route path="/assess/:assessmentId" element={<TechnicalAssessmentPage />} />
      <Route path="/report/:applicationId" element={<FeedbackReportPage />} />
      <Route path="/candidate/signup" element={<CandidateSignupPage />} />
      <Route path="/candidate/login" element={<CandidateLoginPage />} />
      <Route path="/candidate/dashboard" element={<CandidateDashboardPage />} />
      <Route path="/candidate/applications" element={<CandidateApplicationsPage />} />
      <Route path="/candidate/reports" element={<CandidateReportsPage />} />
      <Route path="/candidate/practice" element={<CandidatePracticeModePage />} />
      <Route path="/candidate/certifications" element={<CandidateCertificationsPage />} />
      <Route path="/candidate/certifications/:id/exam" element={<CandidateCertificationExamCompletePage />} />
      <Route path="/candidate/certifications/my-certs" element={<CandidateMyCertificatesPage />} />
      <Route path="/candidate/settings" element={<CandidateSettingsPage />} />

      {/* ── SECTION 5: Expert Pages ── */}
      <Route path="/become-an-expert" element={<ExpertLandingPage />} />
      <Route path="/expert/apply" element={<ExpertApplicationPage />} />
      <Route path="/expert/login" element={<ExpertLoginPage />} />
      <Route path="/expert/dashboard" element={<ExpertDashboardPage />} />
      <Route path="/expert/interviews/:id" element={<ExpertInterviewGuidePage />} />
      <Route path="/expert/earnings" element={<ExpertEarningsPage />} />

      {/* ── SECTION 6: Admin Pages ── */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      <Route path="/admin/companies" element={<CompaniesListPage />} />
      <Route path="/admin/companies/:id" element={<CompanyDetailPage />} />
      <Route path="/admin/users" element={<AdminUsersPage />} />
      <Route path="/admin/experts/applications" element={<ExpertApplicationsPage />} />
      <Route path="/admin/interviews" element={<InterviewsMonitorPage />} />
      <Route path="/admin/interviews/flagged" element={<FlaggedQueuePage />} />
      <Route path="/admin/billing" element={<AdminBillingPage />} />
      <Route path="/admin/content/questions" element={<QuestionBankPage />} />
      <Route path="/admin/content/blog" element={<BlogManagementPage />} />
      <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
      <Route path="/admin/system" element={<SystemHealthPage />} />

      {/* ── SECTION 7: Error Pages ── */}
      <Route path="/500" element={<ServerErrorPage />} />
      <Route path="/maintenance" element={<MaintenancePage />} />
      <Route path="/link-expired" element={<LinkExpiredPage />} />
      <Route path="/access-denied" element={<AccessDeniedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
