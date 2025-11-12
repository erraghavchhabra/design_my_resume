import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SetupResume from "./pages/SetupResume";
import Builder from "./pages/Builder";
import FinalResume from "./pages/FinalResume";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import { ResumeProvider } from "./context/ResumeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/auth/LoginPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ResumeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/setup" element={<SetupResume />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="/final-resume" element={<FinalResume />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ResumeProvider>
  </QueryClientProvider>
);

export default App;
