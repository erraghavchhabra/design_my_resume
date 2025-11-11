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

const templates = [
  { id: "modern", name: "Modern", preview: ModernTemplate },
  { id: "classic", name: "Classic", preview: ClassicTemplate },
  // { id: "minimal", name: "Minimal", preview: MinimalTemplate },
  // { id: "professional", name: "Professional", preview: ProfessionalTemplate },
  // { id: "creative", name: "Creative", preview: CreativeTemplate },
  { id: "executive", name: "Executive", preview: ExecutiveTemplate },
  // { id: "compact", name: "Compact", preview: CompactTemplate },
  // { id: "elegant", name: "Elegant", preview: ElegantTemplate },
  // { id: "bold", name: "Bold", preview: BoldTemplate },
  // { id: "technical", name: "Technical", preview: TechnicalTemplate },
  // { id: "academic", name: "Academic", preview: AcademicTemplate },
  // { id: "infographic", name: "Infographic", preview: InfographicTemplate },
  // { id: "timeline", name: "Timeline", preview: TimelineTemplate },
];

const themeColors = [
  { name: "Teal", value: "#1e8675" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Purple", value: "#8b5cf6" },
  { name: "Red", value: "#ef4444" },
  { name: "Green", value: "#10b981" },
  { name: "Orange", value: "#f97316" },
];

const SetupResume = () => {
  const navigate = useNavigate();
  const { resumeData, updateResumeData, setTemplate, setThemeColor } =
    useResume();
  const [fullName, setFullName] = useState(
    resumeData.personalInfo.fullName || ""
  );
  const [selectedTemplate, setSelectedTemplate] = useState<string>(
    resumeData.template || "modern"
  );
  const [selectedColor, setSelectedColor] = useState(
    resumeData.themeColor || "#1e8675"
  );

  const handleStart = () => {
    if (!fullName.trim()) return;

    updateResumeData({
      personalInfo: { ...resumeData.personalInfo, fullName },
    });
    setTemplate(selectedTemplate as any);
    setThemeColor(selectedColor);
    navigate("/builder");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Create Your Perfect Resume
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start by entering your name, choosing a template, and customizing
              the theme
            </p>
          </div>

          <Card className="p-8 shadow-lg max-w-5xl mx-auto">
            {/* Name Input */}
            <div className="mb-8">
              <Label htmlFor="name" className="text-lg mb-3 block">
                What's your full name?
              </Label>
              <Input
                id="name"
                value={fullName}
                onChange={(e: any) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="text-lg h-12"
                autoFocus
              />
            </div>

            {/* Template Selection */}
            <div className="mb-8">
              <Label className="text-lg mb-4 block">Choose Your Template</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <motion.div
                    key={template.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      onClick={() => setSelectedTemplate(template.id)}
                      className={`cursor-pointer transition-all p-4 ${
                        selectedTemplate === template.id
                          ? "ring-2 ring-primary shadow-md"
                          : "hover:shadow-md"
                      }`}
                    >
                      <div className="aspect-[3/4]  bg-muted rounded-md mb-3 flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 transform scale-[0.35] origin-top-left pointer-events-none w-full">
                          <div className="w-[800px] h-[1100px] bg-white shadow-sm rounded-lg overflow-hidden">
                            <template.preview data={resumeData} />
                          </div>
                        </div>
                      </div>

                      <p className="text-center font-medium mt-2">
                        {template.name}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Theme Color Selection */}
            <div className="mb-8">
              <Label className="text-lg mb-4 block">
                Pick Your Theme Color
              </Label>
              <div className="flex gap-3 flex-wrap">
                {themeColors.map((color) => (
                  <motion.button
                    key={color.value}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-14 h-14 rounded-full transition-all ${
                      selectedColor === color.value
                        ? "ring-4 ring-primary ring-offset-2"
                        : "hover:ring-2 hover:ring-muted-foreground"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                size="lg"
                className="text-lg px-8"
                onClick={handleStart}
                disabled={!fullName.trim()}
              >
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SetupResume;
