import {
  Sparkles,
  Shield,
  Zap,
  LifeBuoy,
  FileText,
  Infinity,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "New, professional designs",
    description:
      "Choose from a wide range of styles for every job level and type. From fun and creative to simple and modern, there's a perfect design for everyone.",
    imagePosition: "right",
    image: "/assets/img/feature-templates.jpg",
  },
  {
    icon: Shield,
    title: "ATS-friendly",
    description:
      "Employers use applicant tracking systems (ATS) to filter out candidates. With our templates, be confident knowing that your ATS-friendly resume will reach the hiring manager successfully.",
    imagePosition: "left",
    image: "/assets/img/feature-ats.jpg",
  },
  {
    icon: Zap,
    title: "AI-powered content",
    description:
      "Get AI-generated content suggestions for your resume based on your previous roles. Each line has been refined by our career experts for maximum impact.",
    imagePosition: "right",
    image: "/assets/img/feature-ai.jpg",
  },
  {
    icon: LifeBuoy,
    title: "Step-by-step support",
    description:
      "Our Resume Creator provides detailed tips and advice throughout the process, with customer support ready to assist you anytime.",
    imagePosition: "left",
    image: "/assets/img/feature-support.jpg",
  },
  {
    icon: FileText,
    title: "Matching cover letter",
    description:
      "Easily create a memorable cover letter with customizable suggested text in our Cover Letter Generator. Then, choose a design that aligns with your resume for a cohesive professional look.",
    imagePosition: "right",
    image: "/assets/img/feature-cover-letter.jpg",
  },
  {
    icon: Infinity,
    title: "Unlimited resumes",
    description:
      "Make and edit unlimited resumes, experiment with multiple templates and download your resumes in various file formats.",
    imagePosition: "left",
    image: "/assets/img/feature-unlimited.jpg",
  },
];

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  imagePosition,
  image,
  index,
}) => {
  const content = (
    <div
      className="flex-1 space-y-4 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br bg-indigo-600 text-white shadow-lg">
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      <p className="text-lg text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );

  const visual = (
    <div
      className="flex-1 animate-fade-in"
      style={{ animationDelay: `${index * 100 + 50}ms` }}
    >
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-2xl"
        />
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div
        className={`flex flex-col ${
          imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
        } gap-8 md:gap-16 items-center p-6 md:p-12`}
      >
        {content}
        {visual}
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="relative py-10 lg:py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-5xl text-indigo-600">
            Why Use Our Online Resume Builder
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you create the perfect resume
            with ease
          </p>
        </div>

        <div className="space-y-8 md:space-y-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
