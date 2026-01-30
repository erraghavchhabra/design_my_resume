import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useResume } from "../context/ResumeContext";
import ModernTemplate from "../components/resume/ModernTemplate";
import ClassicTemplate from "../components/resume/ClassicTemplate";
// import ExecutiveProTemplate from "../components/resume/ExecutiveProTemplate";
// import MinimalTemplate from "../components/resume/MinimalTemplate";
// import ProfessionalTemplate from "../components/resume/ProfessionalTemplate";
import CreativeTemplate from "../components/resume/CreativeTemplate";
import { createResume_api } from "../api/ResumeApis";
import axios from "axios";
import Cookies from "js-cookie";
import CircleLoading from "../components/ui/circle-loading";
// import ExecutiveTemplate from "../components/resume/ExecutiveTemplate";
// import CompactTemplate from "../components/resume/CompactTemplate";
// import ElegantTemplate from "../components/resume/ElegantTemplate";
// import BoldTemplate from "../components/resume/BoldTemplate";
// import TechnicalTemplate from "../components/resume/TechnicalTemplate";
// import AcademicTemplate from "../components/resume/AcademicTemplate";
// import InfographicTemplate from "../components/resume/InfographicTemplate";
// import TimelineTemplate from "../components/resume/TimelineTemplate";
// import ModernProfessionalTemplate from "../components/resume/ModernProfessionalTemplate";

const templates = [
  { id: "modern", name: "Modern", preview: ModernTemplate },
  { id: "classic", name: "Classic", preview: ClassicTemplate },
  { id: "creative", name: "Creative", preview: CreativeTemplate },
  // { id: "executive", name: "Executive Pro", preview: ExecutiveProTemplate },
  // { id: 'modern', name: 'Modern Professional', preview: ModernProfessionalTemplate },
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
  const [selectedColor, setSelectedColor] = useState(resumeData.theme_color);

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
                className={` group transition-all relative duration-400 outline outline-transparent hover:outline-4 hover:outline-[#2f5cf8]`}
              >
                <div className="aspect-[3/4]  bg-muted rounded-sm md:rounded-md flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 transform scale-[0.20] md:scale-[0.38] origin-top-left pointer-events-none w-full">
                    <div className="w-[800px] h-[1100px] bg-white shadow-sm rounded-lg overflow-hidden">
                      <template.preview data={resumeData} />
                    </div>
                  </div>
                </div>
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
    </div>
  );
};

export default SetupResume;
