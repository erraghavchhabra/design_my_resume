import { useResume } from "../../context/ResumeContext";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Palette, Type } from "lucide-react";
import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import ModernTemplate from "../resume/ModernTemplate";
import ClassicTemplate from "../resume/ClassicTemplate";
import CreativeTemplate from "../resume/CreativeTemplate";
import { Card } from "../ui/card";
import { MotionConfig } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { useMediaQuery } from "../../lib/useMediaQuery";

interface ThemeCustomizerProps {
  open: boolean;
  onClose: () => void;
}

const templates = [
  { id: "modern", name: "Modern", preview: ModernTemplate },
  { id: "classic", name: "Classic", preview: ClassicTemplate },
  { id: "creative", name: "Creative", preview: CreativeTemplate },
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

const ThemeCustomizer = ({ open, onClose }: ThemeCustomizerProps) => {
  const { resumeData, updateResumeData, setTemplate } = useResume();
  const renderTemplate = () => {
    const template = templates.find((t) => t.id === resumeData.template);
    const TemplateComponent = template?.preview || ModernTemplate;
    return <TemplateComponent data={resumeData} />;
  };
  const handleColorChange = (color: string) => {
    updateResumeData({ themeColor: color });
  };

  const handleFontChange = (font: string) => {
    updateResumeData({ fontFamily: font });
  };
  const isMobile = useMediaQuery("(max-width: 768px)");
  return !isMobile ? (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className=" max-w-5xl p-0 overflow-hidden max-h-[90vh]">
        <div className="grid grid-cols-2 ">
          <div className="bg-gray-300 px-10 py-5">
            <div
              style={{
                transform: `scale(0.47)`,
                transformOrigin: "left top",
                width: "900px",
              }}
              className="bg-white shadow-xl border rounded-md overflow-hidden"
            >
              {renderTemplate()}
            </div>
          </div>
          <div className=" bg-white p-7 relative">
            <Button
              className="absolute top-[80vh] rounded-full right-9 "
              onClick={onClose}
            >
              Save
            </Button>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <p className="font-bold text-2xl">Change Template</p>
              </div>
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold">Colors</p>
                {themeColors?.slice(0, 10).map((color) => (
                  <button
                    key={color.value}
                    onClick={() => handleColorChange(color.value)}
                    className={`relative w-6 h-6 rounded-full transition-all hover:scale-105 ${
                      resumeData.themeColor === color.value
                        ? "ring-2 ring-offset-2 ring-primary"
                        : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  >
                    {resumeData.themeColor === color.value && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            style={{ color: color.value }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Font Picker */}
            <div className="flex items-center justify-between gap-2 mt-5">
              <p className="font-semibold">Font Family</p>

              <Select
                value={resumeData.fontFamily}
                onValueChange={(value) => handleFontChange(value)}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>

                <SelectContent>
                  {fonts.map((font) => (
                    <SelectItem
                      key={font.value}
                      value={font.value}
                      style={{ fontFamily: font.value }} // preview inside dropdown
                    >
                      {font.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex  flex-col  gap-2 mt-5 max-h-[60vh] overflow-auto scrollbar-hidden">
              <p className="font-semibold">Templates</p>

              <div className="grid grid-cols-2 gap-6 w-full  p-2 ">
                {templates.map((template) => (
                  <Card
                    key={template.id}
                    className={`cursor-pointer transition-all overflow-hidden rounded-sm  hover:shadow-md ${
                      resumeData.template === template.id
                        ? "ring-2 ring-primary"
                        : ""
                    }`}
                    onClick={() => setTemplate(template.id as any)}
                  >
                    <div className="w-full min-h-72 bg-white max-h-72 bg-muted rounded overflow-hidden flex-shrink-0">
                      <div className="scale-[0.18] origin-top-left w-[1200px] h-[2000px]">
                        <template.preview data={resumeData} />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  ) : (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="bottom"
        className="h-auto min-h-[90vh] p-4 bg-background"
      >
        <SheetHeader>
          <SheetTitle>Customize Resume</SheetTitle>
        </SheetHeader>
        <div className="flex  flex-col  gap-2 mt-5 max-h-[62vh] overflow-auto scrollbar-hidden">
          <div className="grid grid-cols-2 gap-3 w-full  p-2 ">
            {templates.map((template) => (
              <Card
                key={template.id}
                className={`cursor-pointer transition-all overflow-hidden rounded-sm  hover:shadow-md ${
                  resumeData.template === template.id
                    ? "ring-2 ring-primary"
                    : ""
                }`}
                onClick={() => setTemplate(template.id as any)}
              >
                <div className="w-full min-h-40 bg-white max-h-48 bg-muted rounded overflow-hidden flex-shrink-0">
                  <div className="scale-[0.14] origin-top-left w-[1200px] h-[2000px]">
                    <template.preview data={resumeData} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <SheetFooter className="flex w-full  flex-col bg-white absolute bottom-0 left-0 p-2">
          <div className="flex items-center justify-between gap-2 ">
            <p>Font Family</p>

            <Select
              value={resumeData.fontFamily}
              onValueChange={(value) => handleFontChange(value)}
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select font" />
              </SelectTrigger>

              <SelectContent>
                {fonts.map((font) => (
                  <SelectItem
                    key={font.value}
                    value={font.value}
                    style={{ fontFamily: font.value }} // preview inside dropdown
                  >
                    {font.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-full  mt-3  items-center gap-2">
            <p>Colors</p>
            {themeColors?.slice(0, 10).map((color) => (
              <motion.button
                key={color.value}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleColorChange(color.value)}
                className={`w-6 h-6 rounded-full transition-all ${
                  resumeData.themeColor === color.value
                    ? "ring-1 ring-primary ring-offset-2"
                    : "hover:ring-1 hover:ring-muted-foreground"
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ThemeCustomizer;
