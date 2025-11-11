import { ResumeData } from "../../types/resume";

interface TemplateProps {
  data: ResumeData;
}

const AcademicTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="p-12 bg-white" style={{ fontFamily: data.fontFamily }}>
      {/* Academic Header - Centered and formal */}
      <div className="text-center mb-8 pb-6 border-b">
        <h1 className="text-4xl font-bold mb-2" style={{ color: data.themeColor }}>
          {data.personalInfo.fullName}
        </h1>
        <p className="text-lg text-gray-600 mb-3">{data.personalInfo.headline}</p>
        <div className="text-sm text-gray-600 space-y-1">
          <p>{data.personalInfo.email} • {data.personalInfo.phone}</p>
          <p>{data.personalInfo.location}</p>
        </div>
      </div>

      {/* Research Interests / Summary */}
      {data.summary.content && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3 pb-2 border-b" style={{ color: data.themeColor }}>
            Research Interests
          </h2>
          <p className="text-gray-700 leading-relaxed">{data.summary.content}</p>
        </div>
      )}

      {/* Education - Most important for academic CVs */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3 pb-2 border-b" style={{ color: data.themeColor }}>
            Education
          </h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{edu.degree} in {edu.field}</h3>
                    <p className="font-semibold" style={{ color: data.themeColor }}>
                      {edu.institution}
                    </p>
                    {edu.description && (
                      <p className="text-gray-700 mt-1">{edu.description}</p>
                    )}
                  </div>
                  <p className="text-gray-600">{edu.startDate} – {edu.endDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Publications / Achievements */}
      {data.achievements.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3 pb-2 border-b" style={{ color: data.themeColor }}>
            Publications & Honors
          </h2>
          <div className="space-y-3">
            {data.achievements.map((achievement) => (
              <div key={achievement.id}>
                <p className="font-semibold">{achievement.title}</p>
                <p className="text-sm text-gray-700">{achievement.description}</p>
                <p className="text-sm text-gray-500">{achievement.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Research Experience / Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3 pb-2 border-b" style={{ color: data.themeColor }}>
            Research & Professional Experience
          </h2>
          <div className="space-y-5">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-lg">{exp.position}</h3>
                    <p className="font-semibold" style={{ color: data.themeColor }}>
                      {exp.company}, {exp.location}
                    </p>
                  </div>
                  <p className="text-gray-600">
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects / Research Projects */}
      {data.projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3 pb-2 border-b" style={{ color: data.themeColor }}>
            Research Projects
          </h2>
          <div className="space-y-4">
            {data.projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-bold">{project.title}</h3>
                <p className="text-gray-700 text-sm mt-1">{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link}
                    className="text-sm hover:underline"
                    style={{ color: data.themeColor }}
                  >
                    {project.link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills / Technical Proficiencies */}
      {data.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3 pb-2 border-b" style={{ color: data.themeColor }}>
            Technical Skills
          </h2>
          <div className="grid grid-cols-3 gap-x-6 gap-y-2">
            {data.skills.map((skill) => (
              <div key={skill.id} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: data.themeColor }} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {data.languages.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3 pb-2 border-b" style={{ color: data.themeColor }}>
            Languages
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {data.languages.map((lang) => (
              <p key={lang.id}>
                <span className="font-semibold">{lang.name}:</span> {lang.proficiency}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademicTemplate;
