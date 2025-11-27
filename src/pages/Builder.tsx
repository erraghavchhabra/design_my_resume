// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import { ArrowLeft, Info } from "lucide-react";
// import { useResume } from "../context/ResumeContext";
// import { toast } from "sonner";

// import BasicInfoForm from "../components/builder/BasicInfoForm";
// import SummaryForm from "../components/builder/SummaryForm";
// import ExperienceForm from "../components/builder/ExperienceForm";
// import EducationForm from "../components/builder/EducationForm";
// import SkillsForm from "../components/builder/SkillsForm";
// import ProjectsForm from "../components/builder/ProjectsForm";
// import AchievementsForm from "../components/builder/AchievementsForm";
// import LanguagesForm from "../components/builder/LanguagesForm";
// import InterestsForm from "../components/builder/InterestsForm";

// import ModernTemplate from "../components/resume/ModernTemplate";
// import ClassicTemplate from "../components/resume/ClassicTemplate";
// import ExecutiveProTemplate from "../components/resume/ExecutiveProTemplate";
// import Stepper, { Step } from "../components/ui/Stepper";
// // import MinimalTemplate from "../components/resume/MinimalTemplate";
// // import ProfessionalTemplate from "../components/resume/ProfessionalTemplate";
// // import CreativeTemplate from "../components/resume/CreativeTemplate";
// // import ExecutiveTemplate from "../components/resume/ExecutiveTemplate";
// // import CompactTemplate from "../components/resume/CompactTemplate";
// // import ElegantTemplate from "../components/resume/ElegantTemplate";
// // import BoldTemplate from "../components/resume/BoldTemplate";
// // import TechnicalTemplate from "../components/resume/TechnicalTemplate";
// // import AcademicTemplate from "../components/resume/AcademicTemplate";
// // import InfographicTemplate from "../components/resume/InfographicTemplate";
// // import TimelineTemplate from "../components/resume/TimelineTemplate";
// // import ModernProfessionalTemplate from "../components/resume/ModernProfessionalTemplate";

// const Builder = () => {
//   const navigate = useNavigate();
//   const { resumeData } = useResume();
//   const [searchParams] = useSearchParams();
//   const [currentStep, setCurrentStep] = useState(0);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [showStepIntro, setShowStepIntro] = useState(true);
//   const [showMenu, setShowMenu] = useState(true);
//   const resumeRef = useRef<HTMLDivElement>(null);
//   const templates = [
//     { id: "modern", name: "Modern", preview: ModernTemplate },
//     { id: "classic", name: "Classic", preview: ClassicTemplate },
//     { id: "executive", name: "Executive Pro", preview: ExecutiveProTemplate },
//     // { id: 'modern', name: 'Modern Professional', preview: ModernProfessionalTemplate },
//     // { id: "minimal", name: "Minimal", preview: MinimalTemplate },
//     // { id: "professional", name: "Professional", preview: ProfessionalTemplate },
//     // { id: "creative", name: "Creative", preview: CreativeTemplate },
//     // { id: "executive", name: "Executive", preview: ExecutiveTemplate },
//     // { id: "compact", name: "Compact", preview: CompactTemplate },
//     // { id: "elegant", name: "Elegant", preview: ElegantTemplate },
//     // { id: "bold", name: "Bold", preview: BoldTemplate },
//     // { id: "technical", name: "Technical", preview: TechnicalTemplate },
//     // { id: "academic", name: "Academic", preview: AcademicTemplate },
//     // { id: "infographic", name: "Infographic", preview: InfographicTemplate },
//     // { id: "timeline", name: "Timeline", preview: TimelineTemplate },
//   ];
//   useEffect(() => {
//     const stepParam = searchParams.get("step");
//     const modeParam = searchParams.get("mode");
//     if (stepParam) {
//       setCurrentStep(parseInt(stepParam));
//     }
//     if (modeParam === "edit") {
//       setIsEditMode(true);
//     }
//   }, [searchParams]);

//   const steps = [
//     {
//       id: "basic",
//       label: "Basic Info",
//       title: "Personal Information",
//       description:
//         "Let's start with your basic contact details. This information will appear at the top of your resume.",
//       details:
//         "Include your full name, professional headline, email, phone, and location. This is what recruiters see first.",
//     },
//     {
//       id: "summary",
//       label: "Summary",
//       title: "Professional Summary",
//       description:
//         "Write a brief overview of your professional background, key skills, and career objectives.",
//       details:
//         "This is your elevator pitch. Highlight your years of experience, key achievements, and what makes you unique in 3-4 sentences.",
//     },
//     {
//       id: "experience",
//       label: "Experience",
//       title: "Work Experience",
//       description:
//         "Add your work history, including job titles, companies, dates, and key responsibilities.",
//       details:
//         "List your roles in reverse chronological order. Focus on achievements and quantifiable results rather than just duties.",
//     },
//     {
//       id: "education",
//       label: "Education",
//       title: "Education & Qualifications",
//       description:
//         "Include your educational background, degrees, certifications, and relevant coursework.",
//       details:
//         "Add your degrees, diplomas, and relevant certifications. Include honors, GPA (if strong), and relevant projects.",
//     },
//     {
//       id: "skills",
//       label: "Skills",
//       title: "Skills & Expertise",
//       description:
//         "List your technical skills, soft skills, and areas of expertise relevant to your field.",
//       details:
//         "Focus on skills that match the jobs you want. Use auto-suggestions to find commonly searched keywords.",
//     },
//     {
//       id: "projects",
//       label: "Projects",
//       title: "Projects & Portfolio",
//       description:
//         "Showcase your notable projects, personal work, or portfolio pieces that demonstrate your abilities.",
//       details:
//         "Highlight 3-5 of your best projects. Include links, technologies used, and the impact of each project.",
//     },
//     {
//       id: "achievements",
//       label: "Achievements",
//       title: "Achievements & Awards",
//       description:
//         "Highlight your accomplishments, awards, recognitions, and notable achievements.",
//       details:
//         "List awards, certifications, publications, or special recognition. Include the date and issuing organization.",
//     },
//     {
//       id: "languages",
//       label: "Languages",
//       title: "Languages",
//       description:
//         "List languages you speak and your proficiency level in each.",
//       details:
//         "Specify your fluency level honestly. Language skills can be a significant advantage in many roles.",
//     },
//     {
//       id: "interests",
//       label: "Interests",
//       title: "Interests & Hobbies",
//       description:
//         "Add your personal interests and hobbies to give a well-rounded view of yourself.",
//       details:
//         "This humanizes your resume. Include hobbies that show personality, teamwork, or leadership.",
//     },
//   ];

//   const currentStepData = steps[currentStep];

//   const handleNext = () => {
//     if (currentStep < steps.length - 1) {
//       setShowStepIntro(true);
//       setCurrentStep(currentStep + 1);
//       toast.success("Progress saved!");
//     } else {
//       navigate("/final-resume");
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStep > 0) {
//       setShowStepIntro(true);
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const handleUpdate = () => {
//     toast.success("Section updated!");
//     navigate("/final-resume");
//   };

//   const renderStepForm = () => {
//     switch (currentStepData.id) {
//       case "basic":
//         return <BasicInfoForm />;
//       case "summary":
//         return <SummaryForm />;
//       case "experience":
//         return <ExperienceForm />;
//       case "education":
//         return <EducationForm />;
//       case "skills":
//         return <SkillsForm />;
//       case "projects":
//         return <ProjectsForm />;
//       case "achievements":
//         return <AchievementsForm />;
//       case "languages":
//         return <LanguagesForm />;
//       case "interests":
//         return <InterestsForm />;
//       default:
//         return <BasicInfoForm />;
//     }
//   };

//   const renderTemplate = () => {
//     const template = templates.find((t) => t.id === resumeData.template);
//     const TemplateComponent = template?.preview || ModernTemplate;
//     return <TemplateComponent data={resumeData} />;
//   };

//   return (
//     <div className="min-h-screen bg-background flex ">
//       <div
//         className={` bg-[#212D59] flex  flex-col  min-h-screen transition-all duration-300 ${
//           showMenu ? "w-[310px] px-14" : "w-[100px]  px-5 items-center"
//         }   py-10`}
//       >
//         <button
//           onClick={() => {
//             setShowMenu(!showMenu);
//           }}
//         >
//           {showMenu ? (
//             <img src="/assets/svg/ftlogo.svg" className="w-36" alt="logo" />
//           ) : (
//             <img src="/assets/img/white_logo.png" className="w-10" alt="logo" />
//           )}
//         </button>
//         <div className="mt-5">
//           <Stepper
//             showMenu={showMenu}
//             stepsArray={steps}
//             initialStep={currentStep + 1}
//             onStepChange={(step) => {
//               setCurrentStep(step - 1);
//             }}
//             onFinalStepCompleted={() => console.log("All steps completed!")}
//             backButtonText="Previous"
//             nextButtonText="Next"
//           />
//         </div>
//       </div>
//       {/* Header */}
//       {/* <header className="border-b border-border bg-card sticky top-0 z-20 shadow-sm">
//         <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => navigate("/setup")}
//             >
//               <ArrowLeft className="h-5 w-5" />
//             </Button>
//             <div>
//               <h1 className="text-lg font-semibold">Building Your Resume</h1>
//               <p className="text-xs text-muted-foreground">
//                 {resumeData.personalInfo.fullName || "Getting Started"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </header> */}

//       <div className=" w-full flex items-start  ">
//         {/* Left Side - Step Form */}
//         <div className="w-full overflow-y-auto p-8 bg-background grid grid-cols-[2fr_1fr]">
//           <div className="max-w-3xl w-full  absolute top-0">

//             <AnimatePresence mode="wait">
//               {showStepIntro && (
//                 <motion.div
//                   key={`intro-${currentStep}`}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Card className="p-6 mb-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
//                     <div className="flex items-start gap-3">
//                       <div className="p-2 bg-primary/10 rounded-lg">
//                         <Info className="h-5 w-5 text-primary" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-semibold mb-1">
//                           {currentStepData.title}
//                         </h3>
//                         <p className="text-sm text-muted-foreground mb-2">
//                           {currentStepData.description}
//                         </p>
//                         <p className="text-xs text-muted-foreground">
//                           💡 {currentStepData.details}
//                         </p>
//                       </div>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => setShowStepIntro(false)}
//                       >
//                         Got it
//                       </Button>
//                     </div>
//                   </Card>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* Step Form */}
//             <motion.div
//               key={`form-${currentStep}`}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.3 }}
//               className="mb-8"
//             >
//               <Card className="p-8 shadow-lg">{renderStepForm()}</Card>
//             </motion.div>

//             {/* Navigation Buttons */}
//             <div className="flex items-center justify-between pt-4">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 onClick={handlePrevious}
//                 disabled={currentStep === 0}
//               >
//                 Previous
//               </Button>

//               {isEditMode ? (
//                 <Button size="lg" onClick={handleUpdate}>
//                   Update Section
//                 </Button>
//               ) : currentStep < steps.length - 1 ? (
//                 <Button size="lg" onClick={handleNext}>
//                   Save & Continue
//                 </Button>
//               ) : (
//                 <Button size="lg" onClick={handleNext}>
//                   Complete Resume
//                 </Button>
//               )}
//             </div>
//           </div>
//         </div>
//         {/* Right Side - Live Preview */}
//         <div className="flex items-start">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3 }}
//             className="transform origin-top"
//           >
//             {/* SCALE APPLY HERE (Important) */}
//             <div className="scale-[0.70] origin-top-right">
//               <div
//                 ref={resumeRef}
//                 className="bg-white shadow-2xl w-[600px] "
//               >
//                 {renderTemplate()}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Builder;

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowDown, ArrowLeft, ChevronDown, Info, ZoomIn } from "lucide-react";
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

import Stepper from "../components/ui/Stepper";
import ModernProfessionalTemplate from "../components/resume/ModernProfessionalTemplate";
import MinimalTemplate from "../components/resume/MinimalTemplate";
import ProfessionalTemplate from "../components/resume/ProfessionalTemplate";
import CreativeTemplate from "../components/resume/CreativeTemplate";
import ExecutiveTemplate from "../components/resume/ExecutiveTemplate";
import CompactTemplate from "../components/resume/CompactTemplate";
import ElegantTemplate from "../components/resume/ElegantTemplate";
import BoldTemplate from "../components/resume/BoldTemplate";
import TechnicalTemplate from "../components/resume/TechnicalTemplate";
import AcademicTemplate from "../components/resume/AcademicTemplate";
import InfographicTemplate from "../components/resume/InfographicTemplate";
import TimelineTemplate from "../components/resume/TimelineTemplate";
import ThemeCustomizer from "../components/builder/ThemeCustomizer";
import { useMediaQuery } from "../lib/useMediaQuery";
import { Sheet, SheetContent, SheetHeader } from "../components/ui/sheet";

const Builder = () => {
  const navigate = useNavigate();
  const { resumeData } = useResume();
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);

  const [showStepIntro, setShowStepIntro] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const [stepmenu, setStepMenu] = useState(false);
  const [openCustomizer, setOpenCustomizer] = useState(false);
  const [viewSheetOpen, setViewSheetOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  // Resume width (fixed A4 size)
  const resumeWidth = 800;
  const previewWidth = 360;
  const scale = previewWidth / resumeWidth;

  const templates = [
    {
      id: "modern",
      name: "Modern",
      preview: ModernTemplate,
      steps: [
        "basic",
        "summary",
        "experience",
        "education",
        "skills",
        "projects",
        "languages",
        "interests",
      ],
      profileImage: true,
    },
    {
      id: "classic",
      name: "Classic",
      preview: ClassicTemplate,
      steps: [
        "basic",
        "summary",
        "experience",
        "education",
        "skills",
        "projects",
        "achievements",
        "languages",
        "interests",
      ],
      profileImage: true,
    },
    {
      id: "creative",
      name: "Creative",
      preview: CreativeTemplate,
      steps: ["basic", "summary", "experience", "education", "skills"],
      profileImage: false,
    },
    // { id: "executive", name: "Executive Pro", preview: ExecutiveProTemplate },
    // {
    //   id: "modern",
    //   name: "Modern Professional",
    //   preview: ModernProfessionalTemplate,
    // },
    // { id: "minimal", name: "Minimal", preview: MinimalTemplate },
    // { id: "professional", name: "Professional", preview: ProfessionalTemplate },
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
  const isEditorEmpty = (html: string) => {
    if (!html) return true;

    const cleaned = html
      .replace(/<p>/g, "")
      .replace(/<\/p>/g, "")
      .replace(/<br\s*\/?>/g, "")
      .replace(/&nbsp;/g, "")
      .trim();

    return cleaned.length === 0;
  };
  const tempSteps = [
    {
      id: "basic",
      title: "Basic Info",
      introtitle: "Let’s start with your",
      description:
        "Share your contact information so employers can reach you easily.",
      complateStep:
        resumeData.personalInfo?.fullName &&
        resumeData.personalInfo?.headline &&
        resumeData.personalInfo?.email &&
        resumeData.personalInfo?.phone &&
        resumeData.personalInfo?.location,
    },
    {
      id: "summary",
      title: "Summary",
      introtitle: "Craft a powerful professional",
      description:
        "Use expert suggestions or write your own compelling introduction.",
      complateStep: !isEditorEmpty(resumeData.summary.content),
    },
    {
      id: "experience",
      title: "Experience",
      introtitle: "Showcase your work",
      description:
        "Highlight achievements, responsibilities, and measurable results.",
      complateStep: resumeData.experience.length > 0,
    },
    {
      id: "education",
      title: "Education",
      introtitle: "Now, let’s add your",
      description:
        "Include schools, programs, certifications, and graduation dates.",
      complateStep: resumeData.education.length > 0,
    },
    {
      id: "skills",
      title: "Skills",
      introtitle: "Time to highlight your",
      description:
        "Use expertly written suggestions to optimize your skills section.",
      complateStep: resumeData.skills.length > 0,
    },
    {
      id: "projects",
      title: "Projects",
      introtitle: "Show the impact of your",
      description:
        "Share accomplishments that prove your abilities and expertise.",
      complateStep: resumeData.projects.length > 0,
    },
    {
      id: "achievements",
      title: "Achievements",
      introtitle: "Let’s celebrate your",
      description: "Awards, recognitions, and milestones go here.",
      complateStep: resumeData.achievements.length > 0,
    },
    {
      id: "languages",
      title: "Languages",
      introtitle: "Tell employers about your",
      description: "Show employers your communication strengths.",
      complateStep: resumeData.languages.length > 0,
    },
    {
      id: "interests",
      title: "Interests",
      introtitle: "Share a bit about your",
      description: "Share hobbies and passions that make you unique.",
      complateStep: resumeData.interests.length > 0,
    },
  ];
  const template = templates.find((t) => t.id === resumeData.template);
  const steps = tempSteps?.filter((s) => template?.steps?.includes(s.id));

  const currentStepData = steps[currentStep];

  const renderStepForm = () => {
    switch (currentStepData.id) {
      case "basic":
        return <BasicInfoForm profileIamge={template?.profileImage} />;
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
    return <TemplateComponent data={resumeData} high_lightStep={currentStep} />;
  };
  const handleUpdate = () => {
    toast.success("Section updated!");
    navigate("/final-resume");
  };
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setShowStepIntro(true);
      setShowMenu(true);
      setCurrentStep(currentStep + 1);
      // toast.success("Progress saved!");
    } else {
      navigate("/final-resume");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setShowStepIntro(true);
      setShowMenu(true);
      setCurrentStep(currentStep - 1);
    }
  };
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="min-h-screen  bg-white md:flex">
      {/* LEFT SIDEBAR (Steps) */}
      <div
        className={`bg-[#212D59] hidden md:flex flex-col min-h-screen transition-all relative duration-300 
        ${showMenu ? "w-[300px] px-10" : "w-[100px] px-5 items-center"} py-10`}
      >
        <img src="/assets/svg/ftlogo.svg" alt="logo" className="w-28" />

        <div className="mt-6">
          <Stepper
            stepsArray={steps}
            initialStep={currentStep + 1}
            showMenu={showMenu}
            onStepChange={(step) => setCurrentStep(step - 1)}
          />
        </div>
        {showMenu && (
          <img
            className="absolute right-10 bottom-16 w-24 h-24"
            src="/assets/svg/sidebarDesign.svg"
            alt="sidebarDesign"
          />
        )}
        {showMenu && (
          <div className="absolute left-0 w-full bottom-3 text-white text-[10px] flex items-center flex-col gap-2">
            <div className="flex items-center gap-2">
              <a href="#" className="underline border-r border-white pr-2">
                Terms
              </a>
              <a href="#" className="underline border-r border-white pr-2">
                Privacy Policy
              </a>
              <a href="#" className="underline">
                Contact Us
              </a>
            </div>
            <p>© 2025, NOW Limited. All rights reserved.</p>
          </div>
        )}
      </div>
      {/* =============>mobile<============= */}
      {!showStepIntro && (
        <div className="relative bg-whit h-20 flex  md:hidden">
          <div
            className={`absolute  top-0 mt-2  left-2/4 -translate-x-2/4 w-[95%] ${
              stepmenu ? "rounded-md shadow-2xl z-40" : "rounded-full z-0"
            }  px-3 py-2 bg-[#f5f7f8] w-full`}
          >
            <div className="w-full flex items-center gap-2 justify-between">
              <button onClick={handlePrevious} disabled={currentStep === 0}>
                <ArrowLeft size={20} />
              </button>
              <div className="flex items-center flex-col">
                <p className="text-sm">
                  Step {currentStep + 1} of {steps.length}
                </p>
                <button
                  onClick={() => setStepMenu(!stepmenu)}
                  className="flex items-center gap-1 font-semibold"
                >
                  <p>{currentStepData.title}</p>
                  <ChevronDown
                    size={20}
                    className={`transition-all duration-200 ${
                      stepmenu && "rotate-180"
                    }`}
                  />
                </button>
              </div>
              <button
                onClick={() => {
                  setViewSheetOpen(true);
                }}
              >
                <ZoomIn size={20} />
              </button>
            </div>
            <div
              className={`border-t   ${
                stepmenu
                  ? "  h-[50vh] overflow-auto p-4 opacity-100"
                  : "h-0 opacity-0"
              }`}
            >
              <div className="mt-2">
                <Stepper
                  stepsArray={steps}
                  initialStep={currentStep + 1}
                  showMenu={stepmenu}
                  onStepChange={(step) => {
                    setCurrentStep(step - 1);
                    setStepMenu(false);
                    setShowStepIntro(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="md:hidden z-30 fixed bottom-0 bg-white left-0 w-full p-4 flex items-center justify-center">
        {showStepIntro ? (
          <Button
            className="rounded-full w-full"
            onClick={() => {
              setShowStepIntro(false);
              setShowMenu(false);
            }}
          >
            Continue
          </Button>
        ) : isEditMode ? (
          <Button className="rounded-full w-full" onClick={handleUpdate}>
            Update Section
          </Button>
        ) : (
          <Button className="rounded-full w-full" onClick={handleNext}>
            {currentStep < steps.length - 1
              ? "Save & Continue"
              : "Complete Resume"}
          </Button>
        )}
      </div>
      {/* =============>mobile<============= */}

      {/* MAIN CONTENT */}
      <div className="flex w-full md:max-h-screen md:overflow-hidden relative">
        {showStepIntro && (
          <>
            <div className="pointer-events-none z-0 absolute top-40 -left-32 h-96 w-96 rounded-full bg-[#FDE4C8] blur-3xl opacity-60" />
            <div className="pointer-events-none z-0 absolute -top-10 left-48 h-80 w-80 rounded-full bg-[#b29cdf] blur-[90px] opacity-50" />
            <div className="pointer-events-none z-0 absolute top-2/4 right-20 h-[420px] w-[420px] rounded-full bg-[#DDE6FF] blur-[64px] opacity-70" />
          </>
        )}
        {/* CENTER FORM SECTION */}
        <div className="flex-1 p-4 md:max-h-screen overflow-auto max-md:mb-16">
          {/* Intro Card */}
          {showStepIntro ? (
            !isMobile ? (
              <motion.div
                key={"form-" + currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="relative z-20   mt-10 p-8"
              >
                {/* Progress text */}
                <p className="text-lg font-medium text-gray-700">
                  Great progress! Next up →
                  <span className="font-semibold">
                    {" "}
                    {currentStepData.title}
                  </span>
                </p>

                {/* Main Heading */}
                <p className="text-6xl font-extrabold leading-tight tracking-tight mt-5">
                  {currentStepData.introtitle}{" "}
                  <span className="relative">
                    {currentStepData.title}
                    <img
                      className="absolute left-0 -bottom-1 w-full"
                      src="/assets/svg/underline.svg"
                      alt="underline"
                    />
                  </span>
                  <br />
                  {/* {currentStepData.introLine2} */}
                </p>

                {/* Description */}
                <p className="text-xl max-w-2xl text-gray-700 leading-relaxed mt-5">
                  {currentStepData.description}
                </p>

                {/* Arrow image (optional asset) */}
                {/* <img
                src="/arrow-curve.png"
                alt="arrow"
                className="w-32 ml-20 rotate-3 opacity-80"
              /> */}

                {/* Buttons */}
                <div className="flex items-center gap-6 mt-32 justify-between w-full">
                  <Button
                    variant="outline"
                    className="rounded-full px-10 py-5 text-lg bg-white border-black text-black"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                  >
                    Back
                  </Button>
                  <div className="relative">
                    <img
                      className="absolute right-[120%] bottom-[120%] w-full"
                      src="/assets/svg/drawnRightArrow.svg"
                      alt="drawnRightArrow"
                    />
                    <Button
                      className="rounded-full px-12 py-5 relative "
                      onClick={() => {
                        setShowStepIntro(false);
                        setShowMenu(false);
                      }}
                    >
                      Continue
                    </Button>
                  </div>
                </div>

                {/* ATS Note (optional like screenshot) */}
                <p className="text-xs text-gray-500 max-w-xl mt-10">
                  *Most companies use ATS (applicant tracking system) to scan
                  your resume based on keywords. Beat this ATS scan and get your
                  resume in the hands of a recruiter.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={"form-" + currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="relative flex flex-col gap-4 min-h-screen "
              >
                <p className="text-3xl text-black font-bold text-center">
                  Up Next:{" "}
                  <span className="relative">
                    {currentStepData.title}
                    <img
                      className="absolute left-0 -bottom-1 w-full"
                      src="/assets/svg/underline.svg"
                      alt="underline"
                    />
                  </span>
                </p>
                <button
                  onClick={() => setOpenCustomizer(true)}
                  className="text-primary text-xl hover:underline border-primary "
                >
                  Change template
                </button>
                <div
                  style={{
                    transformOrigin: "left top",
                    width: "900px",
                    maxHeight: "70vh",
                  }}
                  className="overflow-hidden"
                >
                  <div
                    style={{
                      transform: `scale(0.39)`,
                      transformOrigin: "left top",
                      width: "900px",
                    }}
                    className="bg-white shadow-xl border rounded-md overflow-hidden"
                  >
                    {renderTemplate()}
                  </div>
                </div>
              </motion.div>
            )
          ) : (
            <motion.div
              key={"form-" + currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="z-20 relative"
            >
              <div className="md:p-8">{renderStepForm()}</div>
            </motion.div>
          )}

          {/* Navigation */}
        </div>

        {/* RIGHT PREVIEW PANEL */}
        <div className="md:block hidden p-8 relative">
          {!showStepIntro && (
            <div className="flex justify-between gap-24 items-center bottom-5 right-10 absolute z-30">
              <Button
                variant="outline"
                className="rounded-full"
                onClick={handlePrevious}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              {isEditMode ? (
                <Button className="rounded-full" onClick={handleUpdate}>
                  Update Section
                </Button>
              ) : (
                <Button className="rounded-full" onClick={handleNext}>
                  {currentStep < steps.length - 1
                    ? "Save & Continue"
                    : "Complete Resume"}
                </Button>
              )}
            </div>
          )}
          <ThemeCustomizer
            open={openCustomizer}
            onClose={() => setOpenCustomizer(false)}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              width: previewWidth,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                transform: `scale(0.44)`,
                transformOrigin: "left top",
                width: "800px",
              }}
              className="bg-white  relative "
              ref={resumeRef}
            >
              <div className="max-h-[170vh] scrollbar-hidden border shadow-xl rounded-md overflow-auto">
                {renderTemplate()}
              </div>

              <button
                onClick={() => setOpenCustomizer(true)}
                className="text-primary text-3xl hover:border-b border-primary absolute -bottom-16 left-2/4 -translate-x-2/4"
              >
                Change template
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {isMobile && (
        <Sheet open={viewSheetOpen} onOpenChange={setViewSheetOpen}>
          <SheetContent
            side="bottom"
            className="min-h-[92vh] p-4 bg-white rounded-t-3xl shadow-xl"
          >
            {/* <SheetHeader className="pb-2">
              <SheetTitle className="text-xl font-semibold text-center">
                Edit Resume
              </SheetTitle>
            </SheetHeader> */}

            <div className="py-5 space-y-4">
              <h3 className="text-base font-medium text-gray-700">
                Resume Sections
              </h3>
            </div>
            <div
              style={{
                transformOrigin: "left top",
                width: "900px",
                maxHeight: "70vh",
              }}
              className="overflow-hidden"
            >
              <div
                style={{
                  transform: `scale(0.39)`,
                  transformOrigin: "left top",
                  width: "900px",
                }}
                className="bg-white shadow-xl border rounded-md overflow-hidden"
              >
                {renderTemplate()}
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full text-base py-6 font-semibold"
                onClick={() => setOpenCustomizer(true)}
              >
                Change Template
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
};

export default Builder;
