import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { useResume } from '../../context/ResumeContext';

interface TemplateSelectorProps {
  open: boolean;
  onClose: () => void;
}

const TemplateSelector = ({ open, onClose }: TemplateSelectorProps) => {
  const { resumeData, setTemplate } = useResume();

  const templates = [
    {
      id: 'modern' as const,
      name: 'Modern',
      description: 'Clean and contemporary with red accents',
      preview: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200'
    },
    {
      id: 'classic' as const,
      name: 'Classic',
      description: 'Traditional two-column layout with blue theme',
      preview: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200'
    },
    {
      id: 'minimal' as const,
      name: 'Minimal',
      description: 'Simple black and white design',
      preview: 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
    }
  ];

  const handleSelect = (templateId: 'modern' | 'classic' | 'minimal') => {
    setTemplate(templateId);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Change Template</DialogTitle>
          <DialogDescription>
            Choose a different template for your resume
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-4 py-4">
          {templates.map((template, index) => (
            <div
              key={index}
              onClick={() => handleSelect(template?.id)}
              className={`cursor-pointer rounded-lg border-2 p-4 transition-smooth hover:shadow-md ${
                resumeData?.template === template?.id
                  ? 'border-primary shadow-md ring-2 ring-primary/20'
                  : 'border-border'
              }`}
            >
              <div className={`aspect-[8.5/11] rounded ${template?.preview} mb-3`} />
              <p className="font-semibold text-sm text-center mb-1">{template?.name}</p>
              <p className="text-xs text-muted-foreground text-center">{template?.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TemplateSelector;
