import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Award,
  Globe,
  Heart,
} from "lucide-react";
import { ResumeData } from "../../types/resume";

interface TemplateProps {
  data: ResumeData;
}

const ModernProfessionalTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white" style={{ fontFamily: data.fontFamily }}>
      {/* Header Section */}
      <div
        className="relative px-12 py-10 text-white overflow-hidden"
        style={{ backgroundColor: data.themeColor }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 bg-white transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 bg-white transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 flex items-center gap-8">
          {data.personalInfo.profileImage && (
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0">
              <img
                src={data.personalInfo.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-2">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-xl mb-4 opacity-90">
              {data.personalInfo.headline}
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{data.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{data.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{data.personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-12 py-8">
        {/* Professional Summary */}
        {data.summary.content && (
          <section className="mb-8">
            <h2
              className="text-2xl font-bold mb-4 pb-2 border-b-2"
              style={{ color: data.themeColor, borderColor: data.themeColor }}
            >
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {data.summary.content}
            </p>
          </section>
        )}

        {/* Core Skills */}
        {data.skills.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-bold mb-4 pb-2 border-b-2"
              style={{ color: data.themeColor, borderColor: data.themeColor }}
            >
              Core Skills
            </h2>
            <div className="grid grid-cols-4 gap-3">
              {data.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="px-4 py-2 text-center text-sm font-semibold rounded-lg border-2 hover:shadow-md transition-all"
                  style={{
                    borderColor: data.themeColor + "40",
                    color: data.themeColor,
                  }}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Work Experience */}
        {data.experience.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-bold mb-4 pb-2 border-b-2"
              style={{ color: data.themeColor, borderColor: data.themeColor }}
            >
              <Briefcase className="inline-block mr-2 h-6 w-6 mb-1" />
              Work Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-8 border-l-4"
                  style={{ borderColor: data.themeColor + "30" }}
                >
                  <div
                    className="absolute -left-2 top-0 w-4 h-4 rounded-full"
                    style={{ backgroundColor: data.themeColor }}
                  />
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3
                        className="text-xl font-bold"
                        style={{ color: data.themeColor }}
                      >
                        {exp.position}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right text-sm">
                      <p className="font-semibold text-gray-700">
                        {exp.startDate} -{" "}
                        {exp.current ? "Present" : exp.endDate}
                      </p>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-bold mb-4 pb-2 border-b-2"
              style={{ color: data.themeColor, borderColor: data.themeColor }}
            >
              <FolderOpen className="inline-block mr-2 h-6 w-6 mb-1" />
              Key Projects
            </h2>
            <div className="space-y-4">
              {data.projects.map((project) => (
                <div
                  key={project.id}
                  className="p-5 rounded-lg border-l-4"
                  style={{
                    borderColor: data.themeColor,
                    backgroundColor: data.themeColor + "08",
                  }}
                >
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: data.themeColor }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{
                            backgroundColor: data.themeColor + "20",
                            color: data.themeColor,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-bold mb-4 pb-2 border-b-2"
              style={{ color: data.themeColor, borderColor: data.themeColor }}
            >
              <GraduationCap className="inline-block mr-2 h-6 w-6 mb-1" />
              Education
            </h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: data.themeColor }}
                    >
                      {edu.degree}
                    </h3>
                    <p className="text-base font-semibold text-gray-700">
                      {edu.field}
                    </p>
                    <p className="text-sm text-gray-600">{edu.institution}</p>
                    {edu.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        {edu.description}
                      </p>
                    )}
                  </div>
                  <div className="text-right text-sm">
                    <p className="font-semibold text-gray-700">
                      {edu.startDate} - {edu.endDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Achievements */}
        {data.achievements.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-bold mb-4 pb-2 border-b-2"
              style={{ color: data.themeColor, borderColor: data.themeColor }}
            >
              <Award className="inline-block mr-2 h-6 w-6 mb-1" />
              Achievements & Awards
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {data.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="p-4 rounded-lg border-l-4"
                  style={{
                    borderColor: data.themeColor,
                    backgroundColor: data.themeColor + "05",
                  }}
                >
                  <h3
                    className="font-bold mb-1"
                    style={{ color: data.themeColor }}
                  >
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {achievement.description}
                  </p>
                  {achievement.date && (
                    <p className="text-xs text-gray-600 mt-2">
                      {achievement.date}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Languages & Interests */}
        <div className="grid grid-cols-2 gap-6">
          {/* Languages */}
          {data.languages.length > 0 && (
            <section>
              <h2
                className="text-xl font-bold mb-4 pb-2 border-b-2"
                style={{ color: data.themeColor, borderColor: data.themeColor }}
              >
                <Globe className="inline-block mr-2 h-5 w-5 mb-1" />
                Languages
              </h2>
              <div className="space-y-3">
                {data.languages.map((lang) => (
                  <div
                    key={lang.id}
                    className="flex justify-between items-center"
                  >
                    <span className="font-semibold text-gray-900">
                      {lang.name}
                    </span>
                    <span
                      className="px-3 py-1 text-xs font-semibold rounded-full"
                      style={{
                        backgroundColor: data.themeColor + "20",
                        color: data.themeColor,
                      }}
                    >
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Interests */}
          {data.interests.length > 0 && (
            <section>
              <h2
                className="text-xl font-bold mb-4 pb-2 border-b-2"
                style={{ color: data.themeColor, borderColor: data.themeColor }}
              >
                <Heart className="inline-block mr-2 h-5 w-5 mb-1" />
                Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.interests.map((interest) => (
                  <span
                    key={interest.id}
                    className="px-3 py-2 text-sm font-medium rounded-lg"
                    style={{
                      backgroundColor: data.themeColor + "15",
                      color: data.themeColor,
                    }}
                  >
                    {interest.name}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernProfessionalTemplate;
