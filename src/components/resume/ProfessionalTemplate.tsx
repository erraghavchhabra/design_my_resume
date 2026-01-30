import { ResumeData } from '../../types/resume';

interface TemplateProps {
  data: ResumeData;
}

const ProfessionalTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="p-12 bg-white" style={{ fontFamily: data.font_family }}>
      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Sidebar */}
        <div className="col-span-1 space-y-6">
          {/* Profile Image */}
          {data.personal_info.profile_image && (
            <div className="flex justify-center">
              <img
                src={data.personal_info.profile_image}
                alt={data.personal_info.full_name}
                className="w-32 h-32 rounded-full object-cover border-4"
                style={{ borderColor: data.theme_color }}
              />
            </div>
          )}

          {/* Contact Info */}
          <div>
            <h2 
              className="text-lg font-bold mb-3 pb-2 border-b-2"
              style={{ color: data.theme_color, borderColor: data.theme_color }}
            >
              CONTACT
            </h2>
            <div className="space-y-2 text-sm">
              <p className="break-words">{data.personal_info.email}</p>
              <p>{data.personal_info.phone}</p>
              <p>{data.personal_info.location}</p>
            </div>
          </div>

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 
                className="text-lg font-bold mb-3 pb-2 border-b-2"
                style={{ color: data.theme_color, borderColor: data.theme_color }}
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
                            backgroundColor: data.theme_color,
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
                style={{ color: data.theme_color, borderColor: data.theme_color }}
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
          <div className="pb-4 border-b-2" style={{ borderColor: data.theme_color }}>
            <h1 className="text-4xl font-bold mb-2" style={{ color: data.theme_color }}>
              {data.personal_info.full_name}
            </h1>
            <p className="text-xl text-gray-600">{data.personal_info.headline}</p>
          </div>

          {/* Summary */}
          {data.summary.content && (
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: data.theme_color }}>
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-gray-700 leading-relaxed">{data.summary.content}</p>
            </div>
          )}

          {/* Experience */}
          {data.experiences.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: data.theme_color }}>
                EXPERIENCE
              </h2>
              <div className="space-y-4">
                {data.experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-bold text-lg">{exp.position}</h3>
                        <p className="font-semibold" style={{ color: data.theme_color }}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-sm text-gray-600 text-right">
                        <p>{exp.location}</p>
                        <p>{exp.start_date} - {exp.current ? 'Present' : exp.end_date}</p>
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
              <h2 className="text-xl font-bold mb-3" style={{ color: data.theme_color }}>
                EDUCATION
              </h2>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold">{edu.degree} in {edu.field}</h3>
                    <p className="font-semibold" style={{ color: data.theme_color }}>
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600">
                      {edu.start_date} - {edu.end_date}
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
