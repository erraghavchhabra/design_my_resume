import { ResumeData } from '../../types/resume';

interface TemplateProps {
  data: ResumeData;
}

const CompactTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="p-8 bg-white text-sm" style={{ fontFamily: data.fontFamily }}>
      {/* Compact Header */}
      <div className="mb-6 pb-4 border-b-2" style={{ borderColor: data.themeColor }}>
        <h1 className="text-3xl font-bold mb-1" style={{ color: data.themeColor }}>
          {data.personalInfo.fullName}
        </h1>
        <p className="text-base font-semibold text-gray-700 mb-2">{data.personalInfo.headline}</p>
        <div className="flex gap-4 text-xs text-gray-600">
          <span>{data.personalInfo.email}</span>
          <span>|</span>
          <span>{data.personalInfo.phone}</span>
          <span>|</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Column */}
        <div className="col-span-2 space-y-5">
          {/* Summary */}
          {data.summary.content && (
            <div>
              <h2 className="text-base font-bold mb-2 uppercase" style={{ color: data.themeColor }}>
                Summary
              </h2>
              <p className="text-gray-700 text-xs leading-relaxed">{data.summary.content}</p>
            </div>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <div>
              <h2 className="text-base font-bold mb-2 uppercase" style={{ color: data.themeColor }}>
                Experience
              </h2>
              <div className="space-y-3">
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold">{exp.position}</h3>
                      <span className="text-xs text-gray-500">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <p className="font-semibold text-xs" style={{ color: data.themeColor }}>
                      {exp.company} | {exp.location}
                    </p>
                    <p className="text-gray-700 text-xs mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <div>
              <h2 className="text-base font-bold mb-2 uppercase" style={{ color: data.themeColor }}>
                Projects
              </h2>
              <div className="space-y-2">
                {data.projects.map((project) => (
                  <div key={project.id}>
                    <h3 className="font-bold text-xs">{project.title}</h3>
                    <p className="text-gray-700 text-xs">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-base font-bold mb-2 uppercase" style={{ color: data.themeColor }}>
                Education
              </h2>
              <div className="space-y-2">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-xs">{edu.degree}</h3>
                    <p className="text-xs">{edu.field}</p>
                    <p className="text-xs font-semibold" style={{ color: data.themeColor }}>
                      {edu.institution}
                    </p>
                    <p className="text-xs text-gray-500">{edu.endDate}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-base font-bold mb-2 uppercase" style={{ color: data.themeColor }}>
                Skills
              </h2>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-2 py-1 rounded text-xs text-white"
                    style={{ backgroundColor: data.themeColor }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {data.languages.length > 0 && (
            <div>
              <h2 className="text-base font-bold mb-2 uppercase" style={{ color: data.themeColor }}>
                Languages
              </h2>
              <div className="space-y-1">
                {data.languages.map((lang) => (
                  <div key={lang.id} className="text-xs">
                    <span className="font-semibold">{lang.name}:</span> {lang.proficiency}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interests */}
          {data.interests.length > 0 && (
            <div>
              <h2 className="text-base font-bold mb-2 uppercase" style={{ color: data.themeColor }}>
                Interests
              </h2>
              <div className="text-xs text-gray-700">
                {data.interests.map((interest, idx) => (
                  <span key={interest.id}>
                    {interest.name}
                    {idx < data.interests.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompactTemplate;
