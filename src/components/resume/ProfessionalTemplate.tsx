import { ResumeData } from '../../types/resume';

interface TemplateProps {
  data: ResumeData;
}

const ProfessionalTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="p-12 bg-white" style={{ fontFamily: data.fontFamily }}>
      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Sidebar */}
        <div className="col-span-1 space-y-6">
          {/* Profile Image */}
          {data.personalInfo.profileImage && (
            <div className="flex justify-center">
              <img
                src={data.personalInfo.profileImage}
                alt={data.personalInfo.fullName}
                className="w-32 h-32 rounded-full object-cover border-4"
                style={{ borderColor: data.themeColor }}
              />
            </div>
          )}

          {/* Contact Info */}
          <div>
            <h2 
              className="text-lg font-bold mb-3 pb-2 border-b-2"
              style={{ color: data.themeColor, borderColor: data.themeColor }}
            >
              CONTACT
            </h2>
            <div className="space-y-2 text-sm">
              <p className="break-words">{data.personalInfo.email}</p>
              <p>{data.personalInfo.phone}</p>
              <p>{data.personalInfo.location}</p>
            </div>
          </div>

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 
                className="text-lg font-bold mb-3 pb-2 border-b-2"
                style={{ color: data.themeColor, borderColor: data.themeColor }}
              >
                SKILLS
              </h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id}>
                    <p className="text-sm font-medium">{skill.name}</p>
                    {skill.level && (
                      <div className="mt-1 h-2 bg-gray-200 rounded">
                        <div
                          className="h-full rounded"
                          style={{
                            backgroundColor: data.themeColor,
                            width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '75%' : '50%'
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {data.languages.length > 0 && (
            <div>
              <h2 
                className="text-lg font-bold mb-3 pb-2 border-b-2"
                style={{ color: data.themeColor, borderColor: data.themeColor }}
              >
                LANGUAGES
              </h2>
              <div className="space-y-1 text-sm">
                {data.languages.map((lang) => (
                  <div key={lang.id}>
                    <span className="font-medium">{lang.name}</span> - {lang.proficiency}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Content */}
        <div className="col-span-2 space-y-6">
          {/* Header */}
          <div className="pb-4 border-b-2" style={{ borderColor: data.themeColor }}>
            <h1 className="text-4xl font-bold mb-2" style={{ color: data.themeColor }}>
              {data.personalInfo.fullName}
            </h1>
            <p className="text-xl text-gray-600">{data.personalInfo.headline}</p>
          </div>

          {/* Summary */}
          {data.summary.content && (
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: data.themeColor }}>
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-gray-700 leading-relaxed">{data.summary.content}</p>
            </div>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: data.themeColor }}>
                EXPERIENCE
              </h2>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-bold text-lg">{exp.position}</h3>
                        <p className="font-semibold" style={{ color: data.themeColor }}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-sm text-gray-600 text-right">
                        <p>{exp.location}</p>
                        <p>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: data.themeColor }}>
                EDUCATION
              </h2>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold">{edu.degree} in {edu.field}</h3>
                    <p className="font-semibold" style={{ color: data.themeColor }}>
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600">
                      {edu.startDate} - {edu.endDate}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
