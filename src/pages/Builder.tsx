import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowLeft, Info } from "lucide-react";
import { useResume } from "../context/ResumeContext";
import { toast } from "sonner";

import BasicInfoForm from "../components/builder/BasicInfoForm";
import SummaryForm from "../components/builder/SummaryForm";
import ExperienceForm from "../components/builder/ExperienceForm";
import EducationForm from "../components/builder/EducationForm";
import SkillsForm from "../components/builder/SkillsForm";
import ProjectsForm from "../components/builder/ProjectsForm";
import AchievementsForm from "../components/builder/AchievementsForm";
import LanguagesForm from "../components/builder/LanguagesForm";
import InterestsForm from "../components/builder/InterestsForm";

import ModernTemplate from "../components/resume/ModernTemplate";
import ClassicTemplate from "../components/resume/ClassicTemplate";
import ExecutiveProTemplate from "../components/resume/ExecutiveProTemplate";
// import MinimalTemplate from "../components/resume/MinimalTemplate";
// import ProfessionalTemplate from "../components/resume/ProfessionalTemplate";
// import CreativeTemplate from "../components/resume/CreativeTemplate";
// import ExecutiveTemplate from "../components/resume/ExecutiveTemplate";
// import CompactTemplate from "../components/resume/CompactTemplate";
// import ElegantTemplate from "../components/resume/ElegantTemplate";
// import BoldTemplate from "../components/resume/BoldTemplate";
// import TechnicalTemplate from "../components/resume/TechnicalTemplate";
// import AcademicTemplate from "../components/resume/AcademicTemplate";
// import InfographicTemplate from "../components/resume/InfographicTemplate";
// import TimelineTemplate from "../components/resume/TimelineTemplate";
// import ModernProfessionalTemplate from "../components/resume/ModernProfessionalTemplate";

const Builder = () => {
  const navigate = useNavigate();
  const { resumeData } = useResume();
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showStepIntro, setShowStepIntro] = useState(true);
  const resumeRef = useRef<HTMLDivElement>(null);
  const templates = [
    { id: "modern", name: "Modern", preview: ModernTemplate },
    { id: "classic", name: "Classic", preview: ClassicTemplate },
    { id: 'executive', name: 'Executive Pro', preview: ExecutiveProTemplate },
  // { id: 'modern', name: 'Modern Professional', preview: ModernProfessionalTemplate },
    // { id: "minimal", name: "Minimal", preview: MinimalTemplate },
    // { id: "professional", name: "Professional", preview: ProfessionalTemplate },
    // { id: "creative", name: "Creative", preview: CreativeTemplate },
    // { id: "executive", name: "Executive", preview: ExecutiveTemplate },
    // { id: "compact", name: "Compact", preview: CompactTemplate },
    // { id: "elegant", name: "Elegant", preview: ElegantTemplate },
    // { id: "bold", name: "Bold", preview: BoldTemplate },
    // { id: "technical", name: "Technical", preview: TechnicalTemplate },
    // { id: "academic", name: "Academic", preview: AcademicTemplate },
    // { id: "infographic", name: "Infographic", preview: InfographicTemplate },
    // { id: "timeline", name: "Timeline", preview: TimelineTemplate },
  ];
  useEffect(() => {
    const stepParam = searchParams.get("step");
    const modeParam = searchParams.get("mode");
    if (stepParam) {
      setCurrentStep(parseInt(stepParam));
    }
    if (modeParam === "edit") {
      setIsEditMode(true);
    }
  }, [searchParams]);

  const steps = [
    {
      id: "basic",
      label: "Basic Info",
      title: "Personal Information",
      description:
        "Let's start with your basic contact details. This information will appear at the top of your resume.",
      details:
        "Include your full name, professional headline, email, phone, and location. This is what recruiters see first.",
    },
    {
      id: "summary",
      label: "Summary",
      title: "Professional Summary",
      description:
        "Write a brief overview of your professional background, key skills, and career objectives.",
      details:
        "This is your elevator pitch. Highlight your years of experience, key achievements, and what makes you unique in 3-4 sentences.",
    },
    {
      id: "experience",
      label: "Experience",
      title: "Work Experience",
      description:
        "Add your work history, including job titles, companies, dates, and key responsibilities.",
      details:
        "List your roles in reverse chronological order. Focus on achievements and quantifiable results rather than just duties.",
    },
    {
      id: "education",
      label: "Education",
      title: "Education & Qualifications",
      description:
        "Include your educational background, degrees, certifications, and relevant coursework.",
      details:
        "Add your degrees, diplomas, and relevant certifications. Include honors, GPA (if strong), and relevant projects.",
    },
    {
      id: "skills",
      label: "Skills",
      title: "Skills & Expertise",
      description:
        "List your technical skills, soft skills, and areas of expertise relevant to your field.",
      details:
        "Focus on skills that match the jobs you want. Use auto-suggestions to find commonly searched keywords.",
    },
    {
      id: "projects",
      label: "Projects",
      title: "Projects & Portfolio",
      description:
        "Showcase your notable projects, personal work, or portfolio pieces that demonstrate your abilities.",
      details:
        "Highlight 3-5 of your best projects. Include links, technologies used, and the impact of each project.",
    },
    {
      id: "achievements",
      label: "Achievements",
      title: "Achievements & Awards",
      description:
        "Highlight your accomplishments, awards, recognitions, and notable achievements.",
      details:
        "List awards, certifications, publications, or special recognition. Include the date and issuing organization.",
    },
    {
      id: "languages",
      label: "Languages",
      title: "Languages",
      description:
        "List languages you speak and your proficiency level in each.",
      details:
        "Specify your fluency level honestly. Language skills can be a significant advantage in many roles.",
    },
    {
      id: "interests",
      label: "Interests",
      title: "Interests & Hobbies",
      description:
        "Add your personal interests and hobbies to give a well-rounded view of yourself.",
      details:
        "This humanizes your resume. Include hobbies that show personality, teamwork, or leadership.",
    },
  ];

  const currentStepData = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setShowStepIntro(true);
      setCurrentStep(currentStep + 1);
      toast.success("Progress saved!");
    } else {
      navigate("/final-resume");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setShowStepIntro(true);
      setCurrentStep(currentStep - 1);
    }
  };

  const handleUpdate = () => {
    toast.success("Section updated!");
    navigate("/final-resume");
  };

  const renderStepForm = () => {
    switch (currentStepData.id) {
      case "basic":
        return <BasicInfoForm />;
      case "summary":
        return <SummaryForm />;
      case "experience":
        return <ExperienceForm />;
      case "education":
        return <EducationForm />;
      case "skills":
        return <SkillsForm />;
      case "projects":
        return <ProjectsForm />;
      case "achievements":
        return <AchievementsForm />;
      case "languages":
        return <LanguagesForm />;
      case "interests":
        return <InterestsForm />;
      default:
        return <BasicInfoForm />;
    }
  };

  const renderTemplate = () => {
    const template = templates.find((t) => t.id === resumeData.template);
    const TemplateComponent = template?.preview || ModernTemplate;
    return <TemplateComponent data={resumeData} />;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-20 shadow-sm">
        <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/setup")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-semibold">Building Your Resume</h1>
              <p className="text-xs text-muted-foreground">
                {resumeData.personalInfo.fullName || "Getting Started"}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-76.8px)]">
        {/* Left Side - Step Form */}
        <div className="w-full lg:w-[60%] overflow-y-auto p-8 bg-background">
          <div className="max-w-3xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-muted-foreground">
                  Step {currentStep + 1} of {steps.length}
                </span>
                <span className="text-sm font-semibold text-primary">
                  {Math.round(((currentStep + 1) / steps.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((currentStep + 1) / steps.length) * 100}%`,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {showStepIntro && (
                <motion.div
                  key={`intro-${currentStep}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 mb-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Info className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">
                          {currentStepData.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {currentStepData.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          💡 {currentStepData.details}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowStepIntro(false)}
                      >
                        Got it
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step Form */}
            <motion.div
              key={`form-${currentStep}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <Card className="p-8 shadow-lg">{renderStepForm()}</Card>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4">
              <Button
                variant="outline"
                size="lg"
                onClick={handlePrevious}
                disabled={currentStep === 0}
              >
                Previous
              </Button>

              {isEditMode ? (
                <Button size="lg" onClick={handleUpdate}>
                  Update Section
                </Button>
              ) : currentStep < steps.length - 1 ? (
                <Button size="lg" onClick={handleNext}>
                  Save & Continue
                </Button>
              ) : (
                <Button size="lg" onClick={handleNext}>
                  Complete Resume
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Live Preview */}
        <div className="w-full lg:w-[40%] bg-gradient-to-br from-muted/30 to-muted/50 overflow-y-auto p-6">
          <div className="sticky top-6">
            <div className="mb-4 text-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                Live Preview
              </h3>
              <p className="text-xs text-muted-foreground">
                Changes appear instantly
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="transform scale-[0.85] origin-top"
            >
              <div
                ref={resumeRef}
                className="bg-white shadow-2xl mx-auto"
                style={{
                  width: "210mm",
                  minHeight: "297mm",
                  maxWidth: "100%",
                }}
              >
                {renderTemplate()}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
