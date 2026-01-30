import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  ArrowDown,
  ArrowLeft,
  ChevronDown,
  Info,
  Rss,
  ZoomIn,
} from "lucide-react";
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
import axios from "axios";
import { getResume_api, updateResume_api } from "../api/ResumeApis";
import Cookies from "js-cookie";
import CircleLoading from "../components/ui/circle-loading";
import { ResumeData } from "../types/resume";

const Builder = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const update_resume_id = Cookies.get("update_resume_id");
  const token = Cookies.get("user_token");
  const { resumeData, updateResumeData }: any = useResume();
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);

  const [showStepIntro, setShowStepIntro] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const [stepmenu, setStepMenu] = useState(false);
  const [openCustomizer, setOpenCustomizer] = useState(false);
  const [viewSheetOpen, setViewSheetOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
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
        "experiences",
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
        "experiences",
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
      steps: ["basic", "summary", "experiences", "education", "skills"],
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
  // useEffect(() => {
  //   async function fetchResumeData() {
  //     try {
  //       setLoading(true);
  //       if (update_resume_id) {
  //         const res = await axios.get(getResume_api(update_resume_id));
  //         if (res?.data?.id) {
  //           // updateResumeData({ ...resumeData, ...res?.data });
  //           updateResumeData(res?.data);
  //           // updateResumeData((prev: ResumeData) => ({
  //           //   // ...prev,

  //           //   ...res.data,

  //           //   // personal_info: {
  //           //   //   // ...prev.personal_info,
  //           //   //   ...res.data.personal_info,
  //           //   // },

  //           //   // summary: {
  //           //   //   ...prev.summary,
  //           //   //   ...res.data.summary,
  //           //   // },

  //           //   // experiences:
  //           //   //   res.data.experiences?.length > 0
  //           //   //     ? res.data.experiences
  //           //   //     : prev.experiences,

  //           //   // education:
  //           //   //   res.data.education?.length > 0
  //           //   //     ? res.data.education
  //           //   //     : prev.education,

  //           //   // skills:
  //           //   //   res.data.skills?.length > 0 ? res.data.skills : prev.skills,

  //           //   // projects:
  //           //   //   res.data.projects?.length > 0
  //           //   //     ? res.data.projects
  //           //   //     : prev.projects,

  //           //   // achievements:
  //           //   //   res.data.achievements?.length > 0
  //           //   //     ? res.data.achievements
  //           //   //     : prev.achievements,

  //           //   // languages:
  //           //   //   res.data.languages?.length > 0
  //           //   //     ? res.data.languages
  //           //   //     : prev.languages,

  //           //   // interests:
  //           //   //   res.data.interests?.length > 0
  //           //   //     ? res.data.interests
  //           //   //     : prev.interests,
  //           // }));
  //         } else {
  //           navigate("/resume-intro");
  //         }
  //       } else {
  //         navigate("/resume-intro");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //     // navigate("/setup")
  //   }
  //   if (token) {
  //     fetchResumeData();
  //   }
  // }, []);
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        setLoading(true);

        // 🔐 If logged in and resume id exists → fetch from API
        if (token && id) {
          const res = await axios.get(getResume_api(id), {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (res?.data?.id) {
            const formattedData = {
              ...res.data,
              projects: Array.isArray(res.data?.projects)
                ? res.data.projects.map((project: any) => ({
                    ...project,
                    technologies: Array.isArray(project?.technologies)
                      ? project.technologies
                          .map((t: any) =>
                            typeof t === "object" && t !== null
                              ? t.technology
                              : t,
                          )
                          .filter(Boolean)
                      : [],
                  }))
                : [],
            };
            updateResumeData(formattedData);
          } else {
            navigate("/resume-intro");
          }
        }

        // 👤 If NOT logged in → load guest resume
        else if (!token) {
          const guestData = localStorage.getItem("guest_resume_data");

          if (guestData) {
            updateResumeData(JSON.parse(guestData));
          } else {
            navigate("/resume-intro");
          }
        }

        // Edge case: logged in but no id
        else {
          navigate("/resume-intro");
        }
      } catch (error) {
        console.error("Failed to fetch resume:", error);
        navigate("/resume-intro");
      } finally {
        setLoading(false);
      }
    };

    fetchResumeData();
  }, []);

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
      api_section: "personal_info",
      introtitle: "Let’s start with your",
      description:
        "Share your contact information so employers can reach you easily.",
      complateStep:
        resumeData?.personal_info?.full_name &&
        resumeData?.personal_info?.headline &&
        resumeData?.personal_info?.email &&
        resumeData?.personal_info?.phone &&
        resumeData?.personal_info?.location,
    },
    {
      id: "summary",
      title: "Summary",
      api_section: "summary",
      introtitle: "Craft a powerful professional",
      description:
        "Use expert suggestions or write your own compelling introduction.",
      complateStep: !isEditorEmpty(resumeData?.summary?.content),
    },
    {
      id: "experiences",
      title: "Experience",
      api_section: "experiences",
      introtitle: "Showcase your work",
      description:
        "Highlight achievements, responsibilities, and measurable results.",
      complateStep: resumeData?.experiences?.length > 0,
    },
    {
      id: "education",
      title: "Education",
      api_section: "education",
      introtitle: "Now, let’s add your",
      description:
        "Include schools, programs, certifications, and graduation dates.",
      complateStep: resumeData?.education?.length > 0,
    },
    {
      id: "skills",
      title: "Skills",
      api_section: "skills",
      introtitle: "Time to highlight your",
      description:
        "Use expertly written suggestions to optimize your skills section.",
      complateStep: resumeData?.skills?.length > 0,
    },
    {
      id: "projects",
      title: "Projects",
      api_section: "projects",
      introtitle: "Show the impact of your",
      description:
        "Share accomplishments that prove your abilities and expertise.",
      complateStep: resumeData?.projects?.length > 0,
    },
    {
      id: "achievements",
      title: "Achievements",
      api_section: "achievements",
      introtitle: "Let’s celebrate your",
      description: "Awards, recognitions, and milestones go here.",
      complateStep: resumeData?.achievements?.length > 0,
    },
    {
      id: "languages",
      title: "Languages",
      api_section: "languages",
      introtitle: "Tell employers about your",
      description: "Show employers your communication strengths.",
      complateStep: resumeData?.languages?.length > 0,
    },
    {
      id: "interests",
      title: "Interests",
      api_section: "interests",
      introtitle: "Share a bit about your",
      description: "Share hobbies and passions that make you unique.",
      complateStep: resumeData?.interests?.length > 0,
    },
  ];
  const template = templates.find((t) => t.id === resumeData?.template);
  const steps = tempSteps?.filter((s) => template?.steps?.includes(s.id));

  const currentStepData = steps[currentStep];

  const renderStepForm = () => {
    switch (currentStepData.id) {
      case "basic":
        return <BasicInfoForm profileIamge={template?.profileImage} />;
      case "summary":
        return <SummaryForm />;
      case "experiences":
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
    const template = templates.find((t) => t.id === resumeData?.template);
    const TemplateComponent = template?.preview || ModernTemplate;
    return <TemplateComponent data={resumeData} high_lightStep={currentStep} />;
  };
  const api_section = currentStepData?.api_section;
  const api_section_data = resumeData[api_section];

  // const handleUpdate = async () => {
  //   try {
  //     setLoading(true);
  //     if (update_resume_id) {
  //       const payload = {
  //         section: api_section,
  //         data: api_section_data,
  //       };
  //       const res = await axios.post(
  //         updateResume_api(update_resume_id),
  //         payload,
  //       );
  //       if (res?.status === 200) {
  //         toast.success("Section updated!");
  //         navigate("/final-resume");
  //       }
  //     } else {
  //       toast.success("Section updated!");
  //       navigate("/final-resume");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleUpdate = async () => {
    setLoading(true);

    try {
      const token = Cookies.get("user_token");

      const goToUpdateStep = () => {
        toast.success("Section updated!");
        if (id) {
          navigate(`/final-resume/${id}`);
        } else {
          navigate(`/final-resume`);
        }
      };

      // 🔐 Logged-in user → Update API
      if (token && id) {
        const payload = {
          section: api_section,
          data: api_section_data,
        };

        const res = await axios.post(updateResume_api(Number(id)), payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res?.status === 200) {
          goToUpdateStep();
        }
      }

      // 👤 Guest user → Save to localStorage
      else {
        const existing = localStorage.getItem("guest_resume_data");

        if (existing) {
          const parsedData = JSON.parse(existing);

          const updatedData = {
            ...parsedData,
            [api_section]: api_section_data,
          };

          localStorage.setItem(
            "guest_resume_data",
            JSON.stringify(updatedData),
          );
        }

        goToUpdateStep();
      }
    } catch (err) {
      console.log("Update failed:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleNext = async () => {
    setLoading(true);

    try {
      const token = Cookies.get("user_token");

      const goToNextStep = () => {
        if (currentStep < steps.length - 1) {
          setShowStepIntro(true);
          setShowMenu(true);
          setCurrentStep(currentStep + 1);
        } else {
          if (id) {
            navigate(`/final-resume/${id}`);
          } else {
            navigate(`/final-resume`);
          }
        }
      };

      // 🔐 Logged-in user → Update API
      if (token && id) {
        const payload = {
          section: api_section,
          data: api_section_data,
        };

        const res = await axios.post(updateResume_api(Number(id)), payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res?.status === 200) {
          goToNextStep();
        }
      }

      // 👤 Guest user → Save to localStorage
      else {
        const existing = localStorage.getItem("guest_resume_data");

        if (existing) {
          const parsedData = JSON.parse(existing);

          const updatedData = {
            ...parsedData,
            [api_section]: api_section_data,
          };

          localStorage.setItem(
            "guest_resume_data",
            JSON.stringify(updatedData),
          );
        }

        goToNextStep();
      }
    } catch (err) {
      console.log("Update failed:", err);
    } finally {
      setLoading(false);
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
        <Link to="/">
          <img src="/assets/svg/ftlogo.svg" alt="logo" className="w-28" />
        </Link>

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
            <p>© 2026, NOW Limited. All rights reserved.</p>
          </div>
        )}
      </div>
      {/* =============>mobile<============= */}
      {!showStepIntro && (
        <div className="relative bg-whit h-20 flex  md:hidden">
          <div
            className={`absolute  top-0 mt-2  left-2/4 -translate-x-2/4 w-[92%] ${
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
            {loading ? <CircleLoading /> : "Update Section"}
          </Button>
        ) : (
          <Button className="rounded-full w-full" onClick={handleNext}>
            {loading ? (
              <CircleLoading />
            ) : currentStep < steps.length - 1 ? (
              "Save & Continue"
            ) : (
              "Complete Resume"
            )}
          </Button>
        )}
      </div>
      {/* =============>mobile<============= */}

      {/* MAIN CONTENT */}
      <div className="flex w-full md:max-h-screen md:overflow-hidden relative">
        {showStepIntro && (
          <>
            <div className="pointer-events-none z-0 absolute top-5 md:top-40 -left-32 h-40 w-40 md:h-96 md:w-96 rounded-full bg-[#FDE4C8] blur-3xl opacity-60" />
            <div className="pointer-events-none z-0 absolute -top-10 left-48 h-40 w-40  md:h-80 md:w-80 rounded-full bg-[#b29cdf] blur-[90px] opacity-50" />
            <div className="pointer-events-none z-0 absolute top-3/4 md:top-2/4 max-md:left-0 md:right-20  h-40 w-40  md:h-[420px] md:w-[420px] rounded-full bg-[#DDE6FF] blur-[64px] opacity-70" />
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
                className="relative flex flex-col items-center gap-4   w-full "
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
                    maxWidth: "330px",
                    width: "100%",
                    maxHeight: "65vh",
                  }}
                  className="overflow-hidden"
                >
                  <div
                    style={{
                      transform: `scale(0.37)`,
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
                <Button
                  disabled={loading}
                  className="rounded-full"
                  onClick={handleUpdate}
                >
                  {loading ? <CircleLoading /> : "Update Section"}
                </Button>
              ) : (
                <Button
                  disabled={loading}
                  className="rounded-full"
                  onClick={handleNext}
                >
                  {loading ? (
                    <CircleLoading />
                  ) : currentStep < steps.length - 1 ? (
                    "Save & Continue"
                  ) : (
                    "Complete Resume"
                  )}
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
