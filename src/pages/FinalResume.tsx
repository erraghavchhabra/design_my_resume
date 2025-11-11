import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'sonner';
import ModernTemplate from '../components/resume/ModernTemplate';
import ClassicTemplate from '../components/resume/ClassicTemplate';
import MinimalTemplate from '../components/resume/MinimalTemplate';
import ProfessionalTemplate from '../components/resume/ProfessionalTemplate';
import CreativeTemplate from '../components/resume/CreativeTemplate';
import ExecutiveTemplate from '../components/resume/ExecutiveTemplate';
import CompactTemplate from '../components/resume/CompactTemplate';
import ElegantTemplate from '../components/resume/ElegantTemplate';
import BoldTemplate from '../components/resume/BoldTemplate';
import TechnicalTemplate from '../components/resume/TechnicalTemplate';
import AcademicTemplate from '../components/resume/AcademicTemplate';
import InfographicTemplate from '../components/resume/InfographicTemplate';
import TimelineTemplate from '../components/resume/TimelineTemplate';

const templates = [
  { id: 'modern', name: 'Modern', preview: ModernTemplate },
  { id: 'classic', name: 'Classic', preview: ClassicTemplate },
  // { id: 'minimal', name: 'Minimal', preview: MinimalTemplate },
  // { id: 'professional', name: 'Professional', preview: ProfessionalTemplate },
  // { id: 'creative', name: 'Creative', preview: CreativeTemplate },
  { id: 'executive', name: 'Executive', preview: ExecutiveTemplate },
  // { id: 'compact', name: 'Compact', preview: CompactTemplate },
  // { id: 'elegant', name: 'Elegant', preview: ElegantTemplate },
  // { id: 'bold', name: 'Bold', preview: BoldTemplate },
  // { id: 'technical', name: 'Technical', preview: TechnicalTemplate },
  // { id: 'academic', name: 'Academic', preview: AcademicTemplate },
  // { id: 'infographic', name: 'Infographic', preview: InfographicTemplate },
  // { id: 'timeline', name: 'Timeline', preview: TimelineTemplate },
];

const themeColors = [
  { name: 'Red', value: '#dc2626' },
  { name: 'Blue', value: '#2563eb' },
  { name: 'Green', value: '#16a34a' },
  { name: 'Purple', value: '#9333ea' },
  { name: 'Orange', value: '#ea580c' },
  { name: 'Teal', value: '#0d9488' },
  { name: 'Pink', value: '#db2777' },
  { name: 'Indigo', value: '#4f46e5' },
];

const fonts = [
  { name: 'Inter', value: 'Inter' },
  { name: 'Roboto', value: 'Roboto' },
  { name: 'Open Sans', value: 'Open Sans' },
  { name: 'Lato', value: 'Lato' },
  { name: 'Montserrat', value: 'Montserrat' },
  { name: 'Playfair Display', value: 'Playfair Display' },
  { name: 'Merriweather', value: 'Merriweather' },
  { name: 'Poppins', value: 'Poppins' },
];

const FinalResume = () => {
  const navigate = useNavigate();
  const { resumeData, setTemplate, setThemeColor, setFontFamily } = useResume();
  const [isDownloading, setIsDownloading] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = async (format: 'pdf' | 'docx') => {
    setIsDownloading(true);
    try {
      if (format === 'pdf') {
        if (!resumeRef.current) {
          toast.error('Resume preview not found');
          return;
        }

        const canvas = await html2canvas(resumeRef.current, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = pdfWidth / (imgWidth / 2);
        
        let heightLeft = (imgHeight / 2) * (pdfWidth / (imgWidth / 2));
        let position = 0;

        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, heightLeft);
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
          position = heightLeft - (imgHeight / 2) * (pdfWidth / (imgWidth / 2));
          pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, (imgHeight / 2) * (pdfWidth / (imgWidth / 2)));
          heightLeft -= pdfHeight;
        }

        pdf.save(`${resumeData.personalInfo.fullName || 'resume'}.pdf`);
        toast.success('Resume downloaded as PDF!');
      } else {
        toast.info('DOCX export coming soon!');
      }
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const renderTemplate = () => {
    const template = templates.find(t => t.id === resumeData.template);
    const TemplateComponent = template?.preview || ModernTemplate;
    return <TemplateComponent data={resumeData} />;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/builder')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-semibold">Your Resume</h1>
              <p className="text-xs text-muted-foreground">
                {resumeData.personalInfo.fullName}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Sidebar - Templates & Customization */}
        <div className="w-80 border-r border-border overflow-y-auto bg-muted/20">
          <Tabs defaultValue="templates" className="w-full">
            <TabsList className="w-full rounded-none border-b">
              <TabsTrigger value="templates" className="flex-1">Templates</TabsTrigger>
              <TabsTrigger value="customize" className="flex-1">Customize</TabsTrigger>
            </TabsList>

            <TabsContent value="templates" className="p-4 space-y-4 mt-0">
              <div className="space-y-3">
                {templates.map((template) => (
                  <Card
                    key={template.id}
                    className={`cursor-pointer transition-all p-3 hover:shadow-md ${
                      resumeData.template === template.id
                        ? 'ring-2 ring-primary'
                        : ''
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
                        <p className="text-xs text-muted-foreground">
                          {template.id === resumeData.template ? 'Active' : 'Click to apply'}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="customize" className="p-4 space-y-6 mt-0">
              <div>
                <h3 className="font-medium mb-3">Theme Color</h3>
                <div className="grid grid-cols-4 gap-3">
                  {themeColors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setThemeColor(color.value)}
                      className={`w-full aspect-square rounded-lg transition-all ${
                        resumeData.themeColor === color.value
                          ? 'ring-2 ring-primary ring-offset-2'
                          : 'hover:ring-2 hover:ring-muted-foreground'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Font Family</h3>
                <div className="space-y-2">
                  {fonts.map((font) => (
                    <Button
                      key={font.value}
                      variant={resumeData.fontFamily === font.value ? 'default' : 'outline'}
                      className="w-full justify-start"
                      onClick={() => setFontFamily(font.value)}
                      style={{ fontFamily: font.value }}
                    >
                      {font.name}
                    </Button>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Side - Preview & Download */}
        <div className="flex-1 overflow-y-auto bg-muted/30 p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Download Buttons */}
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold mb-1">Download Your Resume</h2>
                  <p className="text-sm text-muted-foreground">
                    Choose your preferred format
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleDownload('pdf')}
                    disabled={isDownloading}
                    size="lg"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    PDF
                  </Button>
                  <Button
                    onClick={() => handleDownload('docx')}
                    disabled={isDownloading}
                    variant="outline"
                    size="lg"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    DOCX
                  </Button>
                </div>
              </div>
            </Card>

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
                  width: '210mm',
                  minHeight: '297mm',
                  maxWidth: '100%',
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

export default FinalResume;
