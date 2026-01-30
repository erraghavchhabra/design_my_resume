import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  ArrowLeft,
  Check,
  Download,
  Edit2,
  FileDown,
  FileText,
  Mail,
  Printer,
  Save,
} from "lucide-react";
import { useResume } from "../context/ResumeContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "sonner";
import ModernTemplate from "../components/resume/ModernTemplate";
import ClassicTemplate from "../components/resume/ClassicTemplate";
import CreativeTemplate from "../components/resume/CreativeTemplate";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import ThemeCustomizer from "../components/builder/ThemeCustomizer";
import { useMediaQuery } from "../lib/useMediaQuery";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet";
import axios from "axios";
import { createResume_api, getResume_api } from "../api/ResumeApis";
import Cookies from "js-cookie";
import CircleLoading from "../components/ui/circle-loading";
import AuthDialog from "./auth/AuthDialog";
// import ExecutiveProTemplate from "../components/resume/ExecutiveProTemplate";
// import MinimalTemplate from "../components/resume/MinimalTemplate";
// import ProfessionalTemplate from "../components/resume/ProfessionalTemplate";
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
  // { id: 'minimal', name: 'Minimal', preview: MinimalTemplate },
  // { id: 'professional', name: 'Professional', preview: ProfessionalTemplate },
  // { id: "executive", name: "Executive", preview: ExecutiveTemplate },
  // { id: 'compact', name: 'Compact', preview: CompactTemplate },
  // { id: 'elegant', name: 'Elegant', preview: ElegantTemplate },
  // { id: 'bold', name: 'Bold', preview: BoldTemplate },
  // { id: 'technical', name: 'Technical', preview: TechnicalTemplate },
  // { id: 'academic', name: 'Academic', preview: AcademicTemplate },
  // { id: 'infographic', name: 'Infographic', preview: InfographicTemplate },
  // { id: 'timeline', name: 'Timeline', preview: TimelineTemplate },
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

const fonts = [
  { name: "Inter", value: "Inter" },
  { name: "Roboto", value: "Roboto" },
  { name: "Open Sans", value: "Open Sans" },
  { name: "Lato", value: "Lato" },
  { name: "Montserrat", value: "Montserrat" },
  { name: "Playfair Display", value: "Playfair Display" },
  { name: "Merriweather", value: "Merriweather" },
  { name: "Poppins", value: "Poppins" },
];
const tempSteps = [
  {
    step: 0,
    id: "basic",
    title: "Basic Info",
    introtitle: "Let’s start with your",
    description:
      "Share your contact information so employers can reach you easily.",
  },
  {
    step: 1,
    id: "summary",
    title: "Summary",
    introtitle: "Craft a powerful professional",
    description:
      "Use expert suggestions or write your own compelling introduction.",
  },
  {
    step: 2,
    id: "experiences",
    title: "Experience",
    introtitle: "Showcase your work",
    description:
      "Highlight achievements, responsibilities, and measurable results.",
  },
  {
    step: 3,
    id: "education",
    title: "Education",
    introtitle: "Now, let’s add your",
    description:
      "Include schools, programs, certifications, and graduation dates.",
  },
  {
    step: 4,
    id: "skills",
    title: "Skills",
    introtitle: "Time to highlight your",
    description:
      "Use expertly written suggestions to optimize your skills section.",
  },
  {
    step: 5,
    id: "projects",
    title: "Projects",
    introtitle: "Show the impact of your",
    description:
      "Share accomplishments that prove your abilities and expertise.",
  },
  {
    step: 6,
    id: "achievements",
    title: "Achievements",
    introtitle: "Let’s celebrate your",
    description: "Awards, recognitions, and milestones go here.",
  },
  {
    step: 7,
    id: "languages",
    title: "Languages",
    introtitle: "Tell employers about your",
    description: "Show employers your communication strengths.",
  },
  {
    step: 8,
    id: "interests",
    title: "Interests",
    introtitle: "Share a bit about your",
    description: "Share hobbies and passions that make you unique.",
  },
];
const FinalResume = () => {
  const token = Cookies.get("user_token");
  const { id } = useParams();

  const update_resume_id = Cookies.get("update_resume_id");

  const navigate = useNavigate();
  const {
    resumeData,
    setTemplate,
    setThemeColor,
    setFontFamily,
    updateResumeData,
  } = useResume();
  const [authLoginOpen, setAuthLoginOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [customizeDialog, setCustomizeDialog] = useState(false);
  const [editSheet, setEditSheet] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);
  const [donwloadDialog, setDonwloadDialog] = useState(false);
  const template = templates.find((t) => t.id === resumeData.template);
  const steps = tempSteps?.filter((s) => template?.steps?.includes(s.id));
  const [loading, setLoading] = useState(false);
  //🟡🟡🟡

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

        // Edge case: logged in but no id
        else {
          const guestData = localStorage.getItem("guest_resume_data");

          if (guestData) {
            updateResumeData(JSON.parse(guestData));
          } else {
            navigate("/resume-intro");
          }
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
  async function createResumeFunc() {
    try {
      setLoading(true);
      if (!id) {
        const guestData = localStorage.getItem("guest_resume_data");
        const payload = guestData ? JSON.parse(guestData || "{}") : resumeData;
        const res = await axios.post(createResume_api, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res?.data?.success) {
          if (res?.data?.resume?.id) {
            Cookies.set("first_resume_id", res?.data?.resume?.id, {
              expires: 365, // 1year
            });
            setDonwloadDialog(true);
          }
        }
      } else {
        setDonwloadDialog(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  //🟡🟡🟡

  const handleDownload = async (format: "pdf" | "docx") => {
    setIsDownloading(true);
    try {
      if (format === "pdf") {
        if (!resumeRef.current) {
          toast.error("Resume preview not found");
          return;
        }

        const canvas = await html2canvas(resumeRef.current, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.95);
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        // const ratio = pdfWidth / (imgWidth / 2);

        let heightLeft = (imgHeight / 2) * (pdfWidth / (imgWidth / 2));
        let position = 0;

        pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, heightLeft);
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
          position = heightLeft - (imgHeight / 2) * (pdfWidth / (imgWidth / 2));
          pdf.addPage();
          pdf.addImage(
            imgData,
            "JPEG",
            0,
            position,
            pdfWidth,
            (imgHeight / 2) * (pdfWidth / (imgWidth / 2)),
          );
          heightLeft -= pdfHeight;
        }

        pdf.save(`${resumeData.personal_info.full_name || "resume"}.pdf`);
        toast.success("Resume downloaded as PDF!");
        setDonwloadDialog(false);
      } else {
        toast.info("DOCX export coming soon!");
      }
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Failed to download. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const renderTemplate = () => {
    const template = templates.find((t) => t.id === resumeData.template);
    const TemplateComponent = template?.preview || ModernTemplate;
    return <TemplateComponent data={resumeData} editMod={true} />;
  };
  const handleEditSection = (stepId: number) => {
    if (id) {
      navigate(`/builder/${id}?step=${stepId}&mode=edit`);
    } else {
      navigate(`/builder?step=${stepId}&mode=edit`);
    }
  };
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="bg-[#212D59]  ">
      <div className="min-h-screen  max-w-7xl mx-auto w-full pt-8 max-md:flex items-center flex-col ">
        <Link to="/">
          <img
            src="/assets/svg/ftlogo.svg"
            alt="logo"
            className="w-24 md:w-32"
          />
        </Link>
        {/* =========>mobile<========= */}
        <div className="grid grid-cols-2 md:hidden items-center mt-5 gap-3">
          <Button
            variant="outline"
            className="w-full border-white text-white rounded-full"
            onClick={() => setCustomizeDialog(true)}
          >
            Change
          </Button>
          <Button
            variant="outline"
            className="w-full border-white text-white rounded-full"
            onClick={() => setEditSheet(true)}
          >
            Edit
          </Button>
        </div>
        <div className=" md:hidden w-full px-4 mt-5 flex justify-center">
          {/* Resume Preview */}
          <div
            style={{
              transformOrigin: "left top",
              maxWidth: "380px",
              width: "100%",
              maxHeight: "70vh",
            }}
            className="overflow-hidden mb-5"
          >
            <div
              style={{
                transform: `scale(0.40)`,
                transformOrigin: "left top",
                width: "900px",
              }}
              className="bg-white shadow-xl border rounded-md overflow-hidden"
            >
              {renderTemplate()}
            </div>
          </div>
        </div>
        <div className=" md:hidden fixed bottom-0 left-0 grid grid-cols-3 gap-2 w-full bg-white p-2">
          {[
            {
              title: "Download",
              icon: <Save />,
              onClick: () => {
                if (!token) {
                  // navigate(`/login?redirect=/final-resume`);
                  setAuthLoginOpen(true);
                  return;
                }
                setDonwloadDialog(true);
              },
              disabled: isDownloading || loading,
              loadings: loading,
            },
            {
              title: "Print",
              icon: <Printer />,
              onClick: () => toast.error("coming soon"),
            },
            {
              title: "Email",
              icon: <Mail />,
              onClick: () => toast.error("coming soon"),
            },
          ].map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              disabled={item.disabled}
              className="
                    flex flex-col items-center justify-center
                    bg-gray-200 rounded-md p-2 w-full
                    shadow-sm text-[10px] hover:bg-primary text-black hover:text-white  hover:shadow-lg
                    transition-all duration-200
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
            >
              {item?.loadings ? <CircleLoading /> : item.icon}
              {/* <span className="mt-2 font-semibold">{item.title}</span> */}
            </button>
          ))}
        </div>
        {/* =========>mobile<========= */}

        <div className=" md:flex hidden  gap-8 mt-12 relative ">
          {/* Left Sidebar - Templates & Customization */}
          <div className=" w-72 max-h-[90vh]  sticky top-4">
            <div className=" bg-muted/20 rounded-md h-full overflow-hidden">
              <Tabs defaultValue="templates" className="w-full">
                <TabsList className="w-full rounded-none border-b bg-muted/30 text-black">
                  <TabsTrigger value="templates" className="flex-1">
                    Templates
                  </TabsTrigger>
                  <TabsTrigger value="customize" className="flex-1">
                    Customize
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="templates" className="p-4 space-y-4 mt-0">
                  <div className="space-y-3">
                    {templates.map((template) => (
                      <Card
                        key={template.id}
                        className={`cursor-pointer bg-white/10 backdrop-blur text-white transition-all p-3 hover:shadow-md ${
                          resumeData.template === template.id
                            ? "ring-2 ring-primary"
                            : ""
                        }`}
                        onClick={() => setTemplate(template.id as any)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-20 bg-muted rounded overflow-hidden flex-shrink-0">
                            <div className="scale-[0.08] origin-top-left w-[800px] h-[1000px]">
                              <template.preview data={resumeData} />
                            </div>
                          </div>
                          <div>
                            <p className="font-medium">{template.name}</p>
                            <p className="text-xs text-gray-400">
                              {template.id === resumeData.template
                                ? "Active"
                                : "Click to apply"}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="customize" className="p-4 space-y-6 mt-0">
                  <div>
                    <p className="font-medium mb-3 text-white">Theme Color</p>
                    <div className="flex items-center gap-2">
                      {themeColors?.slice(0, 8).map((color) => (
                        <motion.button
                          key={color.value}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setThemeColor(color.value);
                          }}
                          onMouseOver={() => {
                            setThemeColor(color.value);
                          }}
                          className={`w-6 h-6 rounded-full border-[0.5px] border-white transition-all ${
                            resumeData.theme_color === color.value
                              ? "ring-1 ring-primary ring-offset-2"
                              : "hover:ring-1 hover:ring-muted-foreground"
                          }`}
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-medium mb-3 text-white">Font Family</p>

                    <div className="grid grid-cols-1 gap-2">
                      {fonts.map((font) => {
                        const isSelected =
                          resumeData.font_family === font.value;

                        return (
                          <button
                            key={font.value}
                            onClick={() => setFontFamily(font.value)}
                            style={{ fontFamily: font.value }}
                            className={`
            w-full text-left px-4 py-2 rounded-xl transition-all
            border bg-white/10 backdrop-blur
            text-white shadow-sm hover:shadow-md hover:bg-white/20 flex items-center justify-between
            ${
              isSelected
                ? "border-indigo-400 shadow-lg bg-white/20"
                : "border-white/10"
            }
          `}
                          >
                            {font.name}
                            {isSelected && <Check className="h-4 w-4" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className=" w-full text-white text-[11px] flex items-center flex-col gap-2 mt-5">
              <div className="flex items-center gap-2">
                <a href="#" className=" border-r border-white pr-2">
                  Terms & Conditions
                </a>
                <a href="#" className=" border-r border-white pr-2">
                  Privacy Policy
                </a>
                <a href="#" className="">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* crenter Side - Preview & Download */}
          <div className="flex-1 overflow-y-auto rounded-sm mb-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Resume Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
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
          {/* Right Side */}
          <div className="max-w-60  max-h-[90vh] w-full sticky top-4">
            <div className="grid grid-cols-3 gap-2 w-full mb-8">
              {[
                {
                  title: "Download",
                  icon: <Save />,
                  onClick: () => {
                    if (!token) {
                      // navigate(`/login?redirect=/final-resume`);
                      setAuthLoginOpen(true);
                      return;
                    }
                    setDonwloadDialog(true);
                  },
                  disabled: isDownloading || loading,
                  loadings: loading,
                },
                // {
                //   title: "Save",
                //   icon: <Save />,
                //   onClick: () => createResumeFunc(),
                // },
                {
                  title: "Print",
                  icon: <Printer />,
                  onClick: () => toast.error("coming soon"),
                },
                {
                  title: "Email",
                  icon: <Mail />,
                  onClick: () => toast.error("coming soon"),
                },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={item.onClick}
                  disabled={item.disabled}
                  className="
                    flex flex-col items-center justify-center
                    bg-white rounded-md p-2 w-full
                    shadow-sm text-[10px] hover:bg-primary text-black hover:text-white  hover:shadow-lg
                    transition-all duration-200
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  {item?.loadings ? <CircleLoading /> : item.icon}
                  <span className="mt-2 font-semibold">{item.title}</span>
                </button>
              ))}
            </div>
            <div className="border-y-[1.5px] border-dashed border-white py-8">
              <p className="text-base text-white">Resume Sections</p>
              <div className="flex flex-col gap-3 ml-3 mt-5">
                {steps.map((section, index) => {
                  return (
                    <button
                      onClick={() => handleEditSection(section.step)}
                      className="flex items-center gap-2"
                    >
                      <div className="bg-white flex items-center justify-center w-4 h-4 rounded-full font-semibold text-xs">
                        {index + 1}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white group">
                        <span className="text-left transition-all duration-300 group-hover:scale-105 origin-left">
                          {section.title}
                        </span>
                        <Edit2 className="h-3 w-3  transition-all duration-300 opacity-0 group-hover:opacity-100" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={donwloadDialog} onOpenChange={setDonwloadDialog}>
        {/* === Dialog Box === */}
        <DialogContent
          className="
          max-w-sm rounded-2xl border bg-white/90 backdrop-blur-xl shadow-2xl 
          animate-in fade-in-0 zoom-in-95 duration-200
        "
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Choose a resume format
            </DialogTitle>

            <DialogDescription className="text-center text-gray-600 mt-1">
              Select a file format to download your resume.
            </DialogDescription>
          </DialogHeader>

          {/* === Options === */}
          <div className="grid grid-cols-2 gap-4 py-4 mt-2">
            <button
              onClick={() => handleDownload("pdf")}
              disabled={isDownloading}
              className="
              flex flex-col items-center justify-center gap-2 
              bg-white border rounded-xl p-4 shadow-sm
              hover:shadow-lg hover:bg-gray-50 transition-all duration-200
            "
            >
              <FileText className="w-10 h-10 text-indigo-600" />
              <span className="font-semibold">PDF</span>
            </button>

            <button
              onClick={() => handleDownload("docx")}
              disabled={isDownloading}
              className="
              flex flex-col items-center justify-center gap-2 
              bg-white border rounded-xl p-4 shadow-sm
              hover:shadow-lg hover:bg-gray-50 transition-all duration-200
            "
            >
              <FileDown className="w-10 h-10 text-indigo-600" />
              <span className="font-semibold">DOCX</span>
            </button>
          </div>

          <DialogFooter>
            <p className="w-full text-center text-xs text-gray-500">
              You can switch format anytime.
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <ThemeCustomizer
        open={customizeDialog}
        onClose={() => {
          setCustomizeDialog(false);
        }}
      />
      {isMobile && (
        <Sheet open={editSheet} onOpenChange={setEditSheet}>
          <SheetContent
            side="bottom"
            className="min-h-[92vh] p-4 bg-white rounded-t-3xl shadow-xl"
          >
            <SheetHeader className="pb-2">
              <SheetTitle className="text-xl font-semibold text-center">
                Edit Resume
              </SheetTitle>
            </SheetHeader>

            <div className="py-5 space-y-4">
              <h3 className="text-base font-medium text-gray-700">
                Resume Sections
              </h3>

              <div className="flex flex-col gap-3 overflow-auto max-h-[70vh] pb-14">
                {steps.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => handleEditSection(section.step)}
                    className="
                w-full text-left
                bg-gray-100 hover:bg-gray-200
                border border-gray-200
                px-5 py-4
                rounded-xl
                flex justify-between items-center
                transition
              "
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="font-medium text-gray-900 text-base">
                        {section.title}
                      </span>
                    </div>

                    <Edit2 className="w-4 h-4 text-gray-600 group-hover:text-black" />
                  </button>
                ))}
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t">
              <Button
                size="lg"
                className="w-full rounded-full text-base py-6 font-semibold"
                onClick={() => setEditSheet(false)}
              >
                Finish Editing
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      )}
      <AuthDialog
        open={authLoginOpen}
        onClose={() => setAuthLoginOpen(false)}
        onLogin={() => createResumeFunc()}
      />
    </section>
  );
};

export default FinalResume;
