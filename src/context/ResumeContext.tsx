import React, { createContext, useContext, useState, ReactNode } from 'react';
import { defaultResumeData, ResumeData } from '../types/resume';

interface ResumeContextType {
  resumeData: ResumeData;
  updateResumeData: (data: Partial<ResumeData>) => void;
  setTemplate: (template: 'modern' | 'classic' | 'minimal' | 'professional' | 'creative' | 'executive' | 'compact' | 'elegant' | 'bold' | 'technical' | 'academic' | 'infographic' | 'timeline') => void;
  setThemeColor: (color: string) => void;
  setFontFamily: (font: string) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);

  const updateResumeData = (data: Partial<ResumeData>) => {
    setResumeData((prev) => ({ ...prev, ...data }));
  };

  const setTemplate = (template: 'modern' | 'classic' | 'minimal' | 'professional' | 'creative' | 'executive' | 'compact' | 'elegant' | 'bold' | 'technical' | 'academic' | 'infographic' | 'timeline') => {
    setResumeData((prev) => ({ ...prev, template }));
  };

  const setThemeColor = (color: string) => {
    setResumeData((prev) => ({ ...prev, themeColor: color }));
  };

  const setFontFamily = (font: string) => {
    setResumeData((prev) => ({ ...prev, fontFamily: font }));
  };

  return (
    <ResumeContext.Provider value={{ resumeData, updateResumeData, setTemplate, setThemeColor, setFontFamily }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within ResumeProvider');
  }
  return context;
};
