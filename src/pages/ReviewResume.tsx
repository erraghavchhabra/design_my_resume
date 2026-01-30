import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Edit, Check } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import ModernTemplate from '../components/resume/ModernTemplate';
import ClassicTemplate from '../components/resume/ClassicTemplate';
import MinimalTemplate from '../components/resume/MinimalTemplate';

const ReviewResume = () => {
  const navigate = useNavigate();
  const { resumeData } = useResume();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'basic', name: 'Personal Info', step: 0 },
    { id: 'summary', name: 'Summary', step: 1 },
    { id: 'experiences', name: 'Experience', step: 2 },
    { id: 'education', name: 'Education', step: 3 },
    { id: 'skills', name: 'Skills', step: 4 },
    { id: 'projects', name: 'Projects', step: 5 },
    { id: 'achievements', name: 'Achievements', step: 6 },
    { id: 'languages', name: 'Languages', step: 7 },
    { id: 'interests', name: 'Interests', step: 8 },
  ];

  const handleEdit = (step: number) => {
    navigate(`/builder?step=${step}&mode=edit`);
  };

  const handleComplete = () => {
    navigate('/final-resume');
  };

  const renderTemplate = () => {
    switch (resumeData.template) {
      case 'modern':
      case 'professional':
        return <ModernTemplate data={resumeData} />;
      case 'classic':
      case 'creative':
        return <ClassicTemplate data={resumeData} />;
      case 'minimal':
      case 'executive':
        return <MinimalTemplate data={resumeData} />;
      default:
        return <ModernTemplate data={resumeData} />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Review Your Resume</h1>
          <p className="text-muted-foreground">
            Hover over any section to edit it. Once you're happy, proceed to download.
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Sections List */}
          <Card className="p-6 h-fit sticky top-8">
            <h2 className="font-semibold mb-4">Sections</h2>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleEdit(section.step)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors text-left"
                >
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="font-medium">{section.name}</span>
                  </div>
                  <Edit className="h-4 w-4 text-muted-foreground" />
                </button>
              ))}
            </div>
            <Button
              onClick={handleComplete}
              className="w-full mt-6"
              size="lg"
            >
              Complete & Download
            </Button>
          </Card>

          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div
              ref={resumeRef}
              className="bg-white shadow-2xl mx-auto relative"
              style={{
                width: '210mm',
                minHeight: '297mm',
                maxWidth: '100%',
              }}
            >
              {renderTemplate()}
              
              {/* Edit Overlays */}
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`absolute inset-0 pointer-events-none transition-all ${
                    hoveredSection === section.id
                      ? 'bg-primary/5 border-2 border-primary'
                      : ''
                  }`}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  {hoveredSection === section.id && (
                    <button
                      onClick={() => handleEdit(section.step)}
                      className="absolute top-2 right-2 pointer-events-auto"
                    >
                      <Button size="sm" variant="default">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit {section.name}
                      </Button>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
