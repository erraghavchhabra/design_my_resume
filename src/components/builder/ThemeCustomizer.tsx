import { useResume } from '../../context/ResumeContext';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Palette, Type } from 'lucide-react';

interface ThemeCustomizerProps {
  open: boolean;
  onClose: () => void;
}

const themeColors = [
  { name: 'Red', value: '#dc2626', light: '#fee2e2' },
  { name: 'Blue', value: '#2563eb', light: '#dbeafe' },
  { name: 'Green', value: '#16a34a', light: '#dcfce7' },
  { name: 'Purple', value: '#9333ea', light: '#f3e8ff' },
  { name: 'Orange', value: '#ea580c', light: '#ffedd5' },
  { name: 'Teal', value: '#0d9488', light: '#ccfbf1' },
  { name: 'Pink', value: '#db2777', light: '#fce7f3' },
  { name: 'Indigo', value: '#4f46e5', light: '#e0e7ff' },
  { name: 'Emerald', value: '#059669', light: '#d1fae5' },
  { name: 'Amber', value: '#d97706', light: '#fef3c7' },
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

const ThemeCustomizer = ({ open, onClose }: ThemeCustomizerProps) => {
  const { resumeData, updateResumeData } = useResume();

  const handleColorChange = (color: string) => {
    updateResumeData({ themeColor: color });
  };

  const handleFontChange = (font: string) => {
    updateResumeData({ fontFamily: font });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Customize Theme</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Color Picker */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Palette className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Theme Color</h3>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {themeColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleColorChange(color.value)}
                  className={`relative h-16 rounded-lg transition-all hover:scale-105 ${
                    resumeData.themeColor === color.value
                      ? 'ring-2 ring-offset-2 ring-primary'
                      : ''
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
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Type className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Font Family</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {fonts.map((font) => (
                <Button
                  key={font.value}
                  variant={resumeData.fontFamily === font.value ? 'default' : 'outline'}
                  className="h-auto py-4 justify-start"
                  onClick={() => handleFontChange(font.value)}
                  style={{ fontFamily: font.value }}
                >
                  <span className="text-base">{font.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ThemeCustomizer;
