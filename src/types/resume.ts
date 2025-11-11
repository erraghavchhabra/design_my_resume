export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  headline: string;
  profileImage?: string;
}

export interface Summary {
  content: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  current: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  technologies: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: string;
}

export interface Interest {
  id: string;
  name: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: Summary;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  achievements: Achievement[];
  languages: Language[];
  interests: Interest[];
  template: 'modern' | 'classic' | 'minimal' | 'professional' | 'creative' | 'executive' | 'compact' | 'elegant' | 'bold' | 'technical' | 'academic' | 'infographic' | 'timeline';
  themeColor: string;
  fontFamily: string;
}

export const defaultResumeData: ResumeData = {
  personalInfo: {
    fullName: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    headline: "Senior Software Engineer",
  },
  summary: {
    content: "Passionate software engineer with 5+ years of experience building scalable web applications. Specialized in React, TypeScript, and modern frontend technologies.",
  },
  experience: [
    {
      id: "1",
      company: "Tech Corp",
      position: "Senior Software Engineer",
      startDate: "2021-01",
      endDate: "",
      current: true,
      location: "San Francisco, CA",
      description: "Led development of customer-facing web applications using React and TypeScript. Improved performance by 40% through optimization techniques.",
    },
    {
      id: "2",
      company: "StartupXYZ",
      position: "Frontend Developer",
      startDate: "2019-06",
      endDate: "2020-12",
      current: false,
      location: "Remote",
      description: "Built responsive web applications and collaborated with design team to implement pixel-perfect UI components.",
    },
  ],
  education: [
    {
      id: "1",
      institution: "University of California",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2015-09",
      endDate: "2019-05",
      description: "Graduated with honors. Focus on software engineering and web development.",
    },
  ],
  skills: [
    { id: "1", name: "React", level: "Expert" },
    { id: "2", name: "TypeScript", level: "Advanced" },
    { id: "3", name: "JavaScript", level: "Expert" },
    { id: "4", name: "Node.js", level: "Intermediate" },
    { id: "5", name: "Tailwind CSS", level: "Advanced" },
    { id: "6", name: "Git", level: "Advanced" },
  ],
  projects: [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented payment processing and order management.",
      link: "https://github.com/johndoe/ecommerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Created a real-time task management application with drag-and-drop functionality using React and Firebase.",
      technologies: ["React", "Firebase", "Material-UI"],
    },
  ],
  achievements: [
    {
      id: "1",
      title: "Employee of the Year",
      description: "Recognized for outstanding performance and leadership",
      date: "2023",
    },
    {
      id: "2",
      title: "Hackathon Winner",
      description: "First place at TechCrunch Hackathon 2022",
      date: "2022",
    },
  ],
  languages: [
    { id: "1", name: "English", proficiency: "Native" },
    { id: "2", name: "Spanish", proficiency: "Intermediate" },
  ],
  interests: [
    { id: "1", name: "Open Source" },
    { id: "2", name: "Photography" },
    { id: "3", name: "Hiking" },
    { id: "4", name: "Tech Blogging" },
  ],
  template: "modern",
  themeColor: "#dc2626",
  fontFamily: "Inter",
};
