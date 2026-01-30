import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SetupResume from "./pages/SetupResume";
import Builder from "./pages/Builder";
import FinalResume from "./pages/FinalResume";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import { ResumeProvider } from "./context/ResumeContext";
import LoginPage from "./pages/auth/LoginPage";
import "react-day-picker/dist/style.css";
import SignupPage from "./pages/auth/SignupPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "./redux/store";
import AppInit from "./auth/AppInit";
import Cookies from "js-cookie";
import ResumeLoading from "./pages/ResumeLoading";
import ResumeIntro from "./pages/ResumeIntro";
import CvMaker from "./pages/cv/CvMaker";
import CvTemplates from "./pages/cv/CvTemplates";
import PressCoverage from "./pages/resources/PressCoverage";
import ResumeDashboard from "./pages/ResumeDashboard";
const queryClient = new QueryClient();

const App = () => {
  const token = Cookies.get("user_token");
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ResumeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner position="top-right" />
            <BrowserRouter>
              <AppInit />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume-loading" element={<ResumeLoading />} />
                <Route path="/resume-dashboard" element={<ResumeDashboard />} />
                <Route path="/resume-intro" element={<ResumeIntro />} />
                <Route path="/setup" element={<SetupResume />} />
                <Route path="/builder" element={<Builder />} />
                <Route path="/builder/:id" element={<Builder />} />
                <Route path="/final-resume" element={<FinalResume />} />
                <Route path="/final-resume/:id" element={<FinalResume />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
                <Route path="/cv-maker" element={<CvMaker />} />
                <Route path="/cv-templates" element={<CvTemplates />} />
                {/* press-coverage */}
                <Route path="/press-coverage" element={<PressCoverage />} />

                <Route
                  path="/login"
                  element={token ? <Navigate to="/" /> : <LoginPage />}
                />
                <Route
                  path="/signup"
                  element={token ? <Navigate to="/" /> : <SignupPage />}
                />
                <Route
                  path="/forget"
                  element={token ? <Navigate to="/" /> : <ForgotPasswordPage />}
                />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ResumeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
