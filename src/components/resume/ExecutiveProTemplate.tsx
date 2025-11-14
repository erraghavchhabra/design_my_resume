import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  FolderOpen,
  Award,
  Globe,
  Heart,
} from "lucide-react";
import { ResumeData } from "../../types/resume";
import EditBox from "./EditBox";

interface TemplateProps {
  data: ResumeData;
  editMod?: boolean;
}

const ExecutiveProTemplate = ({ data, editMod }: TemplateProps) => {
  return (
    <div className="bg-white" style={{ fontFamily: data.fontFamily }}>
      {/* Header Section with Gradient */}
      <div
        className="px-12 py-10 text-white relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${data.themeColor} 0%, ${data.themeColor}dd 100%)`,
        }}
      >
        <div className="relative group z-10 ">
          {editMod && <EditBox href={`/builder?step=0&mode=edit`} />}

          <h1 className="text-5xl font-bold mb-3 tracking-tight">
            {data.personalInfo.fullName}
          </h1>
          <p className="text-2xl mb-6 opacity-90">
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

      <div className="px-12 py-8">
        {/* Professional Summary */}
        {data.summary.content && (
          <section className="mb-8 relative group">
            {editMod && <EditBox href={`/builder?step=1&mode=edit`} />}

            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-1 rounded"
                style={{ backgroundColor: data.themeColor }}
              />
              <h2
                className="text-2xl font-bold"
                style={{ color: data.themeColor }}
              >
                Professional Summary
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify pl-15">
              {data.summary.content}
            </p>
          </section>
        )}

        {/* Professional Experience */}
        {data.experience.length > 0 && (
          <section className="mb-8 relative group">
            {editMod && <EditBox href={`/builder?step=2&mode=edit`} />}

            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-1 rounded"
                style={{ backgroundColor: data.themeColor }}
              />
              <h2
                className="text-2xl font-bold"
                style={{ color: data.themeColor }}
              >
                <Briefcase className="inline-block h-6 w-6 mr-2 mb-1" />
                Professional Experience
              </h2>
            </div>
            <div className="space-y-6 pl-15">
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative border-l-3 pl-6"
                  style={{ borderColor: data.themeColor }}
                >
                  <div
                    className="absolute -left-2 top-0 w-4 h-4 rounded-full"
                    style={{ backgroundColor: data.themeColor }}
                  />
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <p
                        className="text-lg font-semibold"
                        style={{ color: data.themeColor }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-600 ml-4">
                      <p className="font-semibold">
                        {exp.startDate} -{" "}
                        {exp.current ? "Present" : exp.endDate}
                      </p>
                      <p>{exp.location}</p>
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
          <section className="mb-8 relative group">
            {editMod && <EditBox href={`/builder?step=5&mode=edit`} />}

            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-1 rounded"
                style={{ backgroundColor: data.themeColor }}
              />
              <h2
                className="text-2xl font-bold"
                style={{ color: data.themeColor }}
              >
                <FolderOpen className="inline-block h-6 w-6 mr-2 mb-1" />
                Key Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 pl-15">
              {data.projects.map((project) => (
                <div
                  key={project.id}
                  className="border-l-3 pl-5 py-2"
                  style={{ borderColor: data.themeColor + "40" }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-semibold rounded-full text-white"
                          style={{ backgroundColor: data.themeColor }}
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

        {/* Education & Skills Grid */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Education */}
          {data.education.length > 0 && (
            <section className="relative group">
              {editMod && <EditBox href={`/builder?step=3&mode=edit`} />}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-1 rounded"
                  style={{ backgroundColor: data.themeColor }}
                />
                <h2
                  className="text-xl font-bold"
                  style={{ color: data.themeColor }}
                >
                  <GraduationCap className="inline-block h-5 w-5 mr-2 mb-1" />
                  Education
                </h2>
              </div>
              <div className="space-y-4 pl-11">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-gray-900">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="font-semibold text-gray-700">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600">
                      {edu.startDate} - {edu.endDate}
                    </p>
                    {edu.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <section className="relative group">
              {editMod && <EditBox href={`/builder?step=4&mode=edit`} />}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-1 rounded"
                  style={{ backgroundColor: data.themeColor }}
                />
                <h2
                  className="text-xl font-bold"
                  style={{ color: data.themeColor }}
                >
                  <Code className="inline-block h-5 w-5 mr-2 mb-1" />
                  Core Skills
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 pl-11">
                {data.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-4 py-2 text-sm font-semibold rounded-lg"
                    style={{
                      backgroundColor: data.themeColor + "15",
                      color: data.themeColor,
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Achievements */}
        {data.achievements.length > 0 && (
          <section className="mb-8 relative group">
            {editMod && <EditBox href={`/builder?step=6&mode=edit`} />}

            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-1 rounded"
                style={{ backgroundColor: data.themeColor }}
              />
              <h2
                className="text-2xl font-bold"
                style={{ color: data.themeColor }}
              >
                <Award className="inline-block h-6 w-6 mr-2 mb-1" />
                Achievements & Awards
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3 pl-15">
              {data.achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: data.themeColor }}
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {achievement.description}
                    </p>
                    {achievement.date && (
                      <p className="text-xs text-gray-600 mt-1">
                        {achievement.date}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Languages & Interests Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Languages */}
          {data.languages.length > 0 && (
            <section className="relative group">
              {editMod && <EditBox href={`/builder?step=7&mode=edit`} />}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-1 rounded"
                  style={{ backgroundColor: data.themeColor }}
                />
                <h2
                  className="text-xl font-bold"
                  style={{ color: data.themeColor }}
                >
                  <Globe className="inline-block h-5 w-5 mr-2 mb-1" />
                  Languages
                </h2>
              </div>
              <div className="space-y-2 pl-11">
                {data.languages.map((lang) => (
                  <div
                    key={lang.id}
                    className="flex justify-between items-center"
                  >
                    <span className="font-semibold text-gray-900">
                      {lang.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Interests */}
          {data.interests.length > 0 && (
            <section className="relative group">
              {editMod && <EditBox href={`/builder?step=8&mode=edit`} />}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-1 rounded"
                  style={{ backgroundColor: data.themeColor }}
                />
                <h2
                  className="text-xl font-bold"
                  style={{ color: data.themeColor }}
                >
                  <Heart className="inline-block h-5 w-5 mr-2 mb-1" />
                  Interests
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 pl-11">
                {data.interests.map((interest) => (
                  <span
                    key={interest.id}
                    className="px-3 py-1 text-sm rounded-full"
                    style={{
                      backgroundColor: data.themeColor + "10",
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

export default ExecutiveProTemplate;
