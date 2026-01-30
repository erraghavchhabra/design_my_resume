export interface PersonalInfo {
  full_name: string;
  email: string;
  phone: string;
  location: string;
  headline: string;
  profile_image?: string;
}

export interface Summary {
  content: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  start_date: string;
  end_date: string;
  location: string;
  description: string;
  current: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  start_date: string;
  end_date: string;
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
  personal_info: PersonalInfo;
  summary: Summary;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  achievements: Achievement[];
  languages: Language[];
  interests: Interest[];
  template:
    | "modern"
    | "classic"
    | "minimal"
    | "professional"
    | "creative"
    | "executive"
    | "compact"
    | "elegant"
    | "bold"
    | "technical"
    | "academic"
    | "infographic"
    | "timeline";
  theme_color: string;
  font_family: string;
  id?: any;
}

// export const defaultResumeData: ResumeData = {
//   personal_info: {
//     full_name: "John Doe",
//     email: "john.doe@email.com",
//     phone: "+1 (555) 123-4567",
//     location: "San Francisco, CA",
//     headline: "Senior Software Engineer",
//   },
//   summary: {
//     content:
//       "Passionate software engineer with 5+ years of experience building scalable web applications. Specialized in React, TypeScript, and modern frontend technologies.",
//   },
//   experiences: [
//     {
//       id: "1",
//       company: "Tech Corp",
//       position: "Senior Software Engineer",
//       start_date: "2021-01",
//       end_date: "",
//       current: true,
//       location: "San Francisco, CA",
//       description:
//         "Led development of customer-facing web applications using React and TypeScript. Improved performance by 40% through optimization techniques.",
//     },
//     {
//       id: "2",
//       company: "StartupXYZ",
//       position: "Frontend Developer",
//       start_date: "2019-06",
//       end_date: "2020-12",
//       current: false,
//       location: "Remote",
//       description:
//         "Built responsive web applications and collaborated with design team to implement pixel-perfect UI components.",
//     },
//   ],
//   education: [
//     {
//       id: "1",
//       institution: "University of California",
//       degree: "Bachelor of Science",
//       field: "Computer Science",
//       start_date: "2015-09",
//       end_date: "2019-05",
//       description:
//         "Graduated with honors. Focus on software engineering and web development.",
//     },
//   ],
//   skills: [
//     { id: "1", name: "React", level: "Expert" },
//     { id: "2", name: "TypeScript", level: "Advanced" },
//     { id: "3", name: "JavaScript", level: "Expert" },
//     { id: "4", name: "Node.js", level: "Intermediate" },
//     { id: "5", name: "Tailwind CSS", level: "Advanced" },
//     { id: "6", name: "Git", level: "Advanced" },
//   ],
//   projects: [
//     {
//       id: "1",
//       title: "E-commerce Platform",
//       description:
//         "Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented payment processing and order management.",
//       link: "https://github.com/johndoe/ecommerce",
//       technologies: ["React", "Node.js", "MongoDB", "Stripe"],
//     },
//     {
//       id: "2",
//       title: "Task Management App",
//       description:
//         "Created a real-time task management application with drag-and-drop functionality using React and Firebase.",
//       technologies: ["React", "Firebase", "Material-UI"],
//     },
//   ],
//   achievements: [
//     {
//       id: "1",
//       title: "Employee of the Year",
//       description: "Recognized for outstanding performance and leadership",
//       date: "2023",
//     },
//     {
//       id: "2",
//       title: "Hackathon Winner",
//       description: "First place at TechCrunch Hackathon 2022",
//       date: "2022",
//     },
//   ],
//   languages: [
//     { id: "1", name: "English", proficiency: "Native" },
//     { id: "2", name: "Spanish", proficiency: "Intermediate" },
//   ],
//   interests: [
//     { id: "1", name: "Open Source" },
//     { id: "2", name: "Photography" },
//     { id: "3", name: "Hiking" },
//     { id: "4", name: "Tech Blogging" },
//   ],
//   template: "modern",
//   theme_color: "#4F46E5",
//   font_family: "Inter",
// };
export const defaultResumeData: ResumeData = {
  personal_info: {
    full_name: "Your Full Name",
    email: "your.email@example.com",
    phone: "+00 0000 000000",
    location: "City, Country",
    headline: "Professional Title",
  },

  summary: {
    content:
      "Brief professional summary highlighting your experience, core skills, and career focus. Keep this section concise and impactful.",
  },

  experiences: [
    {
      id: "1",
      company: "Company Name",
      position: "Job Title",
      start_date: "2022-01",
      end_date: "",
      current: true,
      location: "Location",
      description:
        "Describe your key responsibilities, achievements, and contributions in this role. Focus on measurable results where possible.",
    },
  ],

  education: [
    {
      id: "1",
      institution: "University / Institution Name",
      degree: "Degree Name",
      field: "Field of Study",
      start_date: "2018-01",
      end_date: "2021-01",
      description: "Add relevant coursework, honors, or academic achievements.",
    },
  ],

  skills: [
    { id: "1", name: "Skill One", level: "Advanced" },
    { id: "2", name: "Skill Two", level: "Intermediate" },
    { id: "3", name: "Skill Three", level: "Beginner" },
  ],

  projects: [
    {
      id: "1",
      title: "Project Title",
      description:
        "Briefly describe the project, your role, and the technologies used.",
      link: "",
      technologies: ["Technology 1", "Technology 2"],
    },
    
  ],

  achievements: [
    {
      id: "1",
      title: "Achievement Title",
      description: "Short description of the achievement or recognition.",
      date: "2023",
    },
  ],

  languages: [{ id: "1", name: "Language", proficiency: "Proficiency Level" }],

  interests: [{ id: "1", name: "Interest Area" }],

  template: "modern",
  theme_color: "#4F46E5",
  font_family: "Inter",
};
