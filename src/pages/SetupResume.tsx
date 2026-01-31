import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { useResume } from "../context/ResumeContext";
import ModernTemplate from "../components/resume/ModernTemplate";
import ClassicTemplate from "../components/resume/ClassicTemplate";
import CreativeTemplate from "../components/resume/CreativeTemplate";
import { createResume_api } from "../api/ResumeApis";
import axios from "axios";
import Cookies from "js-cookie";
import CircleLoading from "../components/ui/circle-loading";
import { useMediaQuery } from "../lib/useMediaQuery";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { Sheet, SheetContent } from "../components/ui/sheet";
import { MdAutoFixHigh, MdZoomIn } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaDownload, FaLightbulb } from "react-icons/fa";
import { RiPencilRuler2Fill } from "react-icons/ri";

const templates = [
  { id: "modern", name: "Modern", preview: ModernTemplate },
  { id: "classic", name: "Classic", preview: ClassicTemplate },
  { id: "creative", name: "Creative", preview: CreativeTemplate },
];

const themeColors = [
  { name: "Indigo", value: "#4F46E5" }, // modern + professional
  { name: "Blue", value: "#2563EB" }, // clean corporate blue
  { name: "Navy", value: "#1E3A8A" }, // deep premium resume color
  { name: "Teal", value: "#0D9488" }, // fresh, modern design
  { name: "Maroon", value: "#7F1D1D" }, // bold, classy, serious
  { name: "Purple", value: "#9333EA" }, // elegant + standout
  { name: "Slate", value: "#475569" }, // neutral modern gray-blue
  { name: "Sky Blue", value: "#0EA5E9" }, // bright highlight color
  { name: "Gold", value: "#B45309" }, // premium highlight gold
  { name: "Green", value: "#16A34A" }, // subtle success color
];

const SetupResume = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const { resumeData, updateResumeData, setTemplate, setThemeColor } =
    useResume();
  const [fullName, setFullName] = useState(
    resumeData.personal_info.full_name || "",
  );
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>(
    resumeData.template || "modern",
  );
  // const [openQuestionUI, setOpenQuestionUI] = useState(false);
  const [selectedColor, setSelectedColor] = useState(resumeData.theme_color);
  const [detailDailogOpen, setDetailDialogOpen] = useState(false);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setOpenQuestionUI(true);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);
  // const handleStart = async (theme: any) => {
  //   if (!fullName.trim()) return;
  //   setLoading(true);
  //   updateResumeData({
  //     personal_info: { ...resumeData.personal_info, full_name: fullName },
  //   });
  //   // setTemplate(selectedTemplate as any);
  //   // setThemeColor(selectedColor);
  //   const payload = {
  //     template: theme,
  //     theme_color: selectedColor,
  //     font_family: resumeData.font_family,
  //     personal_info: {
  //       full_name: fullName,
  //     },
  //   };
  //   const res = await axios.post(createResume_api, payload);
  //   if (res?.data?.success) {
  //     if (res?.data?.resume?.id) {
  //       Cookies.set("first_resume_id", res?.data?.resume?.id, {
  //         expires: 365, // 1year
  //       });
  //       Cookies.set("update_resume_id", res?.data?.resume?.id);
  //       navigate("/builder");
  //     }
  //   }
  //   setLoading(false);
  // };
  const handleStart = async (theme: any) => {
    if (!fullName.trim()) return;

    setLoading(true);

    const token = Cookies.get("user_token");

    const updatedData = {
      ...resumeData,
      template: theme,
      theme_color: selectedColor,
      personal_info: {
        ...resumeData.personal_info,
        full_name: fullName,
      },
    };

    // Update local state
    updateResumeData(updatedData);

    // 🔐 If user logged in → create on backend
    if (token) {
      try {
        const payload = {
          template: theme,
          theme_color: selectedColor,
          font_family: resumeData.font_family,
          personal_info: {
            full_name: fullName,
          },
        };

        const res = await axios.post(createResume_api, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res?.data?.success && res?.data?.resume?.id) {
          Cookies.set("first_resume_id", res.data.resume.id, {
            expires: 365,
          });
          // Cookies.set("update_resume_id", res.data.resume.id);

          navigate(`/builder/${res?.data?.resume?.id}`);
        }
      } catch (error) {
        console.error("Resume creation failed:", error);
      }
    } else {
      // 👤 Guest user → save to localStorage
      localStorage.setItem("guest_resume_data", JSON.stringify(updatedData));
      localStorage.setItem("guest_resume_created", "true");

      navigate("/builder");
    }

    setLoading(false);
  };
  const renderTemplate = () => {
    const template = templates.find((t) => t.id === selectedTemplate);
    const TemplateComponent = template?.preview || ModernTemplate;
    return <TemplateComponent data={resumeData} />;
  };
  const selectedTemplateData = templates.find((t) => t.id === selectedTemplate);
  const handleNext = () => {
    const currentIndex = templates.findIndex((t) => t.id === selectedTemplate);

    const nextIndex = (currentIndex + 1) % templates.length;

    setSelectedTemplate(templates[nextIndex].id);
    setTemplate(templates[nextIndex].id as any);
  };
  const handlePrevious = () => {
    const currentIndex = templates.findIndex((t) => t.id === selectedTemplate);

    const prevIndex = (currentIndex - 1 + templates.length) % templates.length;

    setSelectedTemplate(templates[prevIndex].id);
    setTemplate(templates[prevIndex].id as any);
  };
  return (
    <div className="min-h-screen bg-background relative ">
      {/* Bottom inner shadow */}
      <div
        className="absolute bottom-0 left-0 w-full h-28 
                  bg-gradient-to-t from-sky-300/40 to-transparent 
                  pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 py-5 md:py-12 sticky top-0 z-20">
        <Link to="/">
          <img
            src="/assets/svg/logo.svg"
            className="max-md:hidden w-32"
            alt="logo"
          />
        </Link>
        <div className="flex flex-col items-center">
          <div className="text-center ">
            <p className="text-xl md:text-4xl text-black font-bold md:mb-2 ">
              Templates we recommend for you
            </p>
            <p className="md:block hidden text-lg text-muted-foreground max-w-2xl mx-auto">
              You can always change your template later.
            </p>
          </div>
          <div className="w-full max-w-5xl bg-[#eaebf1] rounded-sm shadow-xl p-1 md:p-5 flex items-center gap-4 mt-5">
            <Input
              id="name"
              value={fullName}
              onChange={(e: any) => {
                if (e.target.value.length > 20) return;
                updateResumeData({
                  personal_info: {
                    ...resumeData.personal_info,
                    full_name: e.target.value,
                  },
                });
                setFullName(e.target.value);
              }}
              max={15}
              placeholder="Enter your full name"
              className="text-lg h-10 rounded-md"
              autoFocus
            />
            <div className="hidden md:flex items-center gap-2">
              <p>Colors</p>
              {themeColors?.slice(0, 8).map((color) => (
                <motion.button
                  key={color.value}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedColor(color.value);
                    setThemeColor(color.value);
                  }}
                  onMouseOver={() => {
                    setSelectedColor(color.value);
                    setThemeColor(color.value);
                  }}
                  className={`w-6 h-6 rounded-full transition-all ${
                    selectedColor === color.value
                      ? "ring-1 ring-primary ring-offset-2"
                      : "hover:ring-1 hover:ring-muted-foreground"
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Template Selection */}
      <div className="flex justify-center md:pb-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8  max-w-5xl w-full px-5">
          {templates.map((template) => (
            <motion.div
              key={template.id}
              // whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className={` group transition-all relative duration-400 outline outline-transparent rounded-sm md:rounded-md hover:outline-4 hover:outline-[#2f5cf8]`}
              >
                <div className="aspect-[3/4]  bg-muted rounded-sm md:rounded-md flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 transform scale-[0.20] md:scale-[0.38] origin-top-left pointer-events-none w-full">
                    <div className="w-[800px] h-[1100px] bg-white shadow-sm rounded-lg overflow-hidden">
                      <template.preview data={resumeData} />
                    </div>
                  </div>
                </div>
                <button
                  disabled={loading}
                  onClick={() => {
                    setSelectedTemplate(template.id);
                    setTemplate(template.id as any);
                    setDetailDialogOpen(true);
                  }}
                  className="md:opacity-0 group-hover:opacity-100 absolute top-2/4 left-2/4 -translate-x-2/4 hover:scale-105 transition-all duration-300 -translate-y-2/4 rounded-full w-12 h-12 flex items-center justify-center bg-[#4e46e5db] hover:bg-[#4e46e5ef] text-white text-3xl"
                >
                  <MdZoomIn />
                </button>
                <Button
                  onClick={() => {
                    setSelectedTemplate(template.id);
                    setTemplate(template.id as any);
                    handleStart(template.id);
                  }}
                  disabled={loading}
                  className="max-md:text-xs absolute bottom-5 md:bottom-10 left-2/4 -translate-x-2/4 rounded-full max-w-48 max-md:h-8 md:w-full"
                >
                  {resumeData?.template === template.id && loading ? (
                    <CircleLoading />
                  ) : (
                    <>
                      Choose <span className="max-md:hidden">template</span>
                    </>
                  )}
                </Button>
                {/* <p className="text-center font-medium mt-2">
                    {template.name}
                  </p> */}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Color Selection -> android */}
      <div className="flex w-full fixed bottom-0 left-0 bg-white p-4 md:hidden items-center gap-2">
        <p>Colors</p>
        {themeColors?.slice(0, 8).map((color) => (
          <motion.button
            key={color.value}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedColor(color.value);
              setThemeColor(color.value);
            }}
            onMouseOver={() => {
              setSelectedColor(color.value);
              setThemeColor(color.value);
            }}
            className={`w-6 h-6 rounded-full transition-all ${
              selectedColor === color.value
                ? "ring-1 ring-primary ring-offset-2"
                : "hover:ring-1 hover:ring-muted-foreground"
            }`}
            style={{ backgroundColor: color.value }}
            title={color.name}
          />
        ))}
      </div>
      {/* Desktop Dialog */}
      <Dialog open={detailDailogOpen} onOpenChange={setDetailDialogOpen}>
        <DialogContent
          className=" max-w-5xl p-0 overflow-hidden max-h-[90vh]"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 
                 bg-white shadow-lg rounded-full p-3 
                 hover:scale-110 transition z-20"
          >
            <ArrowLeft size={22} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 
                 bg-white shadow-lg rounded-full p-3 
                 hover:scale-110 transition z-20"
          >
            <ArrowRight size={22} />
          </button>
          <div className="grid grid-cols-2 ">
            <div className="bg-[#F4F5FB] p-8 relative max-h-[90vh] h-full overflow-hidden">
              <div>
                <div
                  style={{
                    transform: `scale(0.49)`,
                    transformOrigin: "left top",
                    width: "900px",
                  }}
                  className="bg-white shadow-xl border rounded-md overflow-hidden flex-1 "
                >
                  {renderTemplate()}
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 absolute left-2/4 -translate-x-2/4 bottom-5 z-30">
                <p>Colors</p>
                {themeColors?.slice(0, 8).map((color) => (
                  <motion.button
                    key={color.value}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedColor(color.value);
                      setThemeColor(color.value);
                    }}
                    onMouseOver={() => {
                      setSelectedColor(color.value);
                      setThemeColor(color.value);
                    }}
                    className={`w-6 h-6 rounded-full transition-all ${
                      selectedColor === color.value
                        ? "ring-1 ring-primary ring-offset-2"
                        : "hover:ring-1 hover:ring-muted-foreground"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
            <div className=" bg-white p-8 relative flex flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {[
                    { name: "Recommended", className: "bg-[#C9EDFF]" },
                    { name: "Modern", className: "bg-[#FFEDCE]" },
                  ]?.map((item) => {
                    return (
                      <div
                        className={`px-2 py-1 shadow-sm font-semibold text-[10px] text-[#402300] rounded-sm ${item.className}`}
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </div>
                <h1 className="text-4xl mt-5 font-extrabold text-black">
                  {selectedTemplateData?.name}
                </h1>
                <div className="flex flex-col gap-2 mt-10">
                  {[
                    "ATS-optimized",
                    "1-column layout",
                    "Editable sample content",
                    "Download as PDF, Word, or TXT file",
                  ]?.map((item) => {
                    return (
                      <div className="flex items-center gap-2">
                        <Check size={18} />
                        <p className="text-xm text-black">{item}</p>
                      </div>
                    );
                  })}
                </div>
                <Button
                  onClick={() => {
                    setTemplate(selectedTemplateData?.id as any);
                    handleStart(selectedTemplateData?.id);
                  }}
                  disabled={loading}
                  className="max-md:text-xs font-bold mt-10  rounded-full max-w-48 max-md:h-8 md:w-full"
                >
                  {loading ? <CircleLoading /> : <>Use this template</>}
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: <RiPencilRuler2Fill size={20} />,
                    name: "Customize your design",
                    description: "Match the resume to your professional style.",
                  },
                  {
                    icon: <MdAutoFixHigh size={20} />,
                    name: "Get personalized suggestions",
                    description:
                      "Use AI-generated content personalized to previous roles.",
                  },
                  {
                    icon: <FaLightbulb size={20} />,
                    name: "Access writing help",
                    description:
                      "Beat ATS by using suggested keywords from the job listing.",
                  },
                  {
                    icon: <FaDownload size={20} />,
                    name: "Download in multiple formats",
                    description:
                      "Easily download your resume in various file formats.",
                  },
                ]?.map((item) => {
                  return (
                    <div className="flex items-start gap-2 ">
                      {item.icon}
                      <div className="flex items-start flex-col gap-2 ">
                        <p className="text-xs font-bold text-black">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* {!isMobile && (
        <Dialog open={openQuestionUI} onOpenChange={setOpenQuestionUI}>
          <DialogContent className="max-w-lg rounded-xl">
            <h2 className="text-2xl font-bold mb-4">A few quick questions</h2>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                This will help us personalize your resume.
              </p>

              <div>
                <label className="font-medium">Are you a fresher?</label>
                <div className="flex gap-3 mt-2">
                  <Button variant="outline">Yes</Button>
                  <Button variant="outline">No</Button>
                </div>
              </div>
            </div>

            <Button
              className="w-full mt-6 rounded-full"
              onClick={() => setOpenQuestionUI(false)}
            >
              Continue
            </Button>
          </DialogContent>
        </Dialog>
      )}

      {isMobile && (
        <Sheet open={openQuestionUI} onOpenChange={setOpenQuestionUI}>
          <SheetContent
            side="bottom"
            className="rounded-t-3xl p-6 w-full border-none outline-none "
          >
            <img
              src="/assets/img/resume_questions.png"
              alt="resume_questions"
            />
            
            <div className="flex items-center flex-col gap-4 mt-5">
              <h2 className="text-2xl font-bold  text-center">
                Simple questions to your best template
              </h2>

              <p className="text-base text-center font-semibold text-muted-foreground">
                Get recommendations to match your style, field, and career
                goals.
              </p>
              <Button size="lg" className="px-5 mt-6  rounded-full">Let's go</Button>
              <button
                className="w-full font-bold text-primary"
                onClick={() => setOpenQuestionUI(false)}
              >
                No thanks
              </button>
            </div>

          </SheetContent>
        </Sheet>
      )} */}
    </div>
  );
};

export default SetupResume;
