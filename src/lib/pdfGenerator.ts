import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { ResumeData } from '../types/resume';

export const generateResumePDF = (data: ResumeData) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const { personal_info, summary, experiences, education, skills, projects, achievements, languages, interests } = data;

  let yPos = 15;
  const leftMargin = 15;
  const rightMargin = 15;
  const pageWidth = doc.internal.pageSize.getWidth();
  const contentWidth = pageWidth - leftMargin - rightMargin;

  // Helper function to add section title
  const addSectionTitle = (title: string) => {
    doc.setFontSize(14);
    doc.setTextColor(37, 99, 235); // Primary blue color
    doc.setFont('helvetica', 'bold');
    doc.text(title, leftMargin, yPos);
    yPos += 2;
    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(0.5);
    doc.line(leftMargin, yPos, pageWidth - rightMargin, yPos);
    yPos += 6;
  };

  // Helper function to check if we need a new page
  const checkPageBreak = (neededSpace: number) => {
    if (yPos + neededSpace > doc.internal.pageSize.getHeight() - 20) {
      doc.addPage();
      yPos = 15;
      return true;
    }
    return false;
  };

  // Header - Personal Info
  doc.setFontSize(22);
  doc.setTextColor(26, 32, 44);
  doc.setFont('helvetica', 'bold');
  doc.text(personal_info.full_name, leftMargin, yPos);
  yPos += 8;

  // Headline
  if (personal_info.headline) {
    doc.setFontSize(12);
    doc.setTextColor(74, 85, 104);
    doc.setFont('helvetica', 'normal');
    doc.text(personal_info.headline, leftMargin, yPos);
    yPos += 6;
  }

  // Contact Info
  doc.setFontSize(9);
  doc.setTextColor(74, 85, 104);
  doc.setFont('helvetica', 'normal');
  const contactInfo = [
    personal_info.email,
    personal_info.phone,
    personal_info.location,
  ].filter(Boolean).join(' • ');
  
  if (contactInfo) {
    doc.text(contactInfo, leftMargin, yPos);
    yPos += 8;
  }

  // Summary
  if (summary?.content) {
    checkPageBreak(20);
    addSectionTitle('PROFESSIONAL SUMMARY');
    doc.setFontSize(10);
    doc.setTextColor(74, 85, 104);
    doc.setFont('helvetica', 'normal');
    const summaryLines = doc.splitTextToSize(summary.content, contentWidth);
    doc.text(summaryLines, leftMargin, yPos);
    yPos += summaryLines.length * 5 + 6;
  }

  // Experience
  if (experiences && experiences.length > 0) {
    checkPageBreak(20);
    addSectionTitle('EXPERIENCE');
    
    experiences.forEach((exp, index) => {
      checkPageBreak(25);
      
      doc.setFontSize(11);
      doc.setTextColor(26, 32, 44);
      doc.setFont('helvetica', 'bold');
      doc.text(exp.position, leftMargin, yPos);
      yPos += 5;
      
      doc.setFontSize(10);
      doc.setTextColor(74, 85, 104);
      doc.setFont('helvetica', 'normal');
      doc.text(exp.company, leftMargin, yPos);
      yPos += 4;
      
      doc.setFontSize(9);
      doc.setTextColor(113, 128, 150);
      const dateText = `${exp.start_date} - ${exp.current ? 'Present' : exp.end_date}`;
      doc.text(dateText, leftMargin, yPos);
      yPos += 5;
      
      if (exp.description) {
        doc.setFontSize(9);
        doc.setTextColor(74, 85, 104);
        const descLines = doc.splitTextToSize(exp.description, contentWidth);
        doc.text(descLines, leftMargin, yPos);
        yPos += descLines.length * 4 + 4;
      }
      
      if (index < experiences.length - 1) yPos += 2;
    });
    yPos += 4;
  }

  // Education
  if (education && education.length > 0) {
    checkPageBreak(20);
    addSectionTitle('EDUCATION');
    
    education.forEach((edu, index) => {
      checkPageBreak(20);
      
      doc.setFontSize(11);
      doc.setTextColor(26, 32, 44);
      doc.setFont('helvetica', 'bold');
      doc.text(edu.degree, leftMargin, yPos);
      yPos += 5;
      
      doc.setFontSize(10);
      doc.setTextColor(74, 85, 104);
      doc.setFont('helvetica', 'normal');
      doc.text(edu.institution, leftMargin, yPos);
      yPos += 4;
      
      doc.setFontSize(9);
      doc.setTextColor(113, 128, 150);
      const dateText = `${edu.start_date} - ${edu.end_date}`;
      doc.text(dateText, leftMargin, yPos);
      yPos += 5;
      
      if (edu.description) {
        doc.setFontSize(9);
        doc.setTextColor(74, 85, 104);
        const descLines = doc.splitTextToSize(edu.description, contentWidth);
        doc.text(descLines, leftMargin, yPos);
        yPos += descLines.length * 4 + 4;
      }
      
      if (index < education.length - 1) yPos += 2;
    });
    yPos += 4;
  }

  // Skills
  if (skills && skills.length > 0) {
    checkPageBreak(20);
    addSectionTitle('SKILLS');
    
    doc.setFontSize(9);
    doc.setTextColor(74, 85, 104);
    doc.setFont('helvetica', 'normal');
    const skillsText = skills.map(s => s.name).join(' • ');
    const skillLines = doc.splitTextToSize(skillsText, contentWidth);
    doc.text(skillLines, leftMargin, yPos);
    yPos += skillLines.length * 4 + 6;
  }

  // Projects
  if (projects && projects.length > 0) {
    checkPageBreak(20);
    addSectionTitle('PROJECTS');
    
    projects.forEach((project, index) => {
      checkPageBreak(20);
      
      doc.setFontSize(11);
      doc.setTextColor(26, 32, 44);
      doc.setFont('helvetica', 'bold');
      doc.text(project.title, leftMargin, yPos);
      yPos += 5;
      
      if (project.link) {
        doc.setFontSize(9);
        doc.setTextColor(37, 99, 235);
        doc.setFont('helvetica', 'normal');
        doc.text(project.link, leftMargin, yPos);
        yPos += 4;
      }
      
      if (project.description) {
        doc.setFontSize(9);
        doc.setTextColor(74, 85, 104);
        const descLines = doc.splitTextToSize(project.description, contentWidth);
        doc.text(descLines, leftMargin, yPos);
        yPos += descLines.length * 4 + 2;
      }
      
      if (project.technologies && project.technologies.length > 0) {
        doc.setFontSize(8);
        doc.setTextColor(113, 128, 150);
        doc.text(`Tech: ${project.technologies.join(', ')}`, leftMargin, yPos);
        yPos += 5;
      }
      
      if (index < projects.length - 1) yPos += 2;
    });
    yPos += 4;
  }

  // Achievements
  if (achievements && achievements.length > 0) {
    checkPageBreak(20);
    addSectionTitle('ACHIEVEMENTS');
    
    achievements.forEach((achievement, index) => {
      checkPageBreak(15);
      
      doc.setFontSize(10);
      doc.setTextColor(26, 32, 44);
      doc.setFont('helvetica', 'bold');
      doc.text(`• ${achievement.title}`, leftMargin, yPos);
      yPos += 4;
      
      doc.setFontSize(9);
      doc.setTextColor(113, 128, 150);
      doc.setFont('helvetica', 'normal');
      doc.text(achievement.date, leftMargin + 5, yPos);
      yPos += 4;
      
      if (achievement.description) {
        doc.setFontSize(9);
        doc.setTextColor(74, 85, 104);
        const descLines = doc.splitTextToSize(achievement.description, contentWidth - 5);
        doc.text(descLines, leftMargin + 5, yPos);
        yPos += descLines.length * 4 + 3;
      }
    });
    yPos += 4;
  }

  // Languages
  if (languages && languages.length > 0) {
    checkPageBreak(15);
    addSectionTitle('LANGUAGES');
    
    doc.setFontSize(9);
    doc.setTextColor(74, 85, 104);
    doc.setFont('helvetica', 'normal');
    languages.forEach((lang) => {
      doc.text(`• ${lang.name} - ${lang.proficiency}`, leftMargin, yPos);
      yPos += 5;
    });
    yPos += 4;
  }

  // Interests
  if (interests && interests.length > 0) {
    checkPageBreak(15);
    addSectionTitle('INTERESTS');
    
    doc.setFontSize(9);
    doc.setTextColor(74, 85, 104);
    doc.setFont('helvetica', 'normal');
    const interestsText = interests.map(i => i.name).join(' • ');
    const interestLines = doc.splitTextToSize(interestsText, contentWidth);
    doc.text(interestLines, leftMargin, yPos);
  }

  return doc;
};
