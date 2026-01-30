import { ResumeData } from '../../types/resume';

interface TemplateProps {
  data: ResumeData;
}

const ElegantTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white" style={{ fontFamily: data.font_family }}>
      {/* Elegant Header with subtle background */}
      <div className="relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ backgroundColor: data.theme_color }}
        />
        <div className="relative p-12 text-center">
          <h1 
            className="text-5xl font-serif font-bold mb-3 tracking-tight"
            style={{ color: data.theme_color }}
          >
            {data.personal_info.full_name}
          </h1>
          <div 
            className="w-24 h-0.5 mx-auto mb-3"
            style={{ backgroundColor: data.theme_color }}
          />
          <p className="text-xl text-gray-600 italic mb-4">{data.personal_info.headline}</p>
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <span>{data.personal_info.email}</span>
            <span className="opacity-50">•</span>
            <span>{data.personal_info.phone}</span>
            <span className="opacity-50">•</span>
            <span>{data.personal_info.location}</span>
          </div>
        </div>
      </div>

      <div className="px-16 py-10 space-y-8">
        {/* Profile */}
        {data.summary.content && (
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed italic text-lg">
              "{data.summary.content}"
            </p>
          </div>
        )}

        {/* Experience */}
        {data.experiences.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5" style={{ backgroundColor: data.theme_color }} />
              <h2 className="text-2xl font-serif font-bold" style={{ color: data.theme_color }}>
                Professional Experience
              </h2>
              <div className="flex-1 h-0.5" style={{ backgroundColor: data.theme_color }} />
            </div>
            <div className="space-y-6">
              {data.experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {index > 0 && (
                    <div className="absolute -top-3 left-0 w-full h-px bg-gray-200" />
                  )}
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <p className="text-lg italic" style={{ color: data.theme_color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <p>{exp.start_date} — {exp.current ? 'Present' : exp.end_date}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5" style={{ backgroundColor: data.theme_color }} />
              <h2 className="text-2xl font-serif font-bold" style={{ color: data.theme_color }}>
                Education
              </h2>
              <div className="flex-1 h-0.5" style={{ backgroundColor: data.theme_color }} />
            </div>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{edu.degree} in {edu.field}</h3>
                    <p className="italic" style={{ color: data.theme_color }}>
                      {edu.institution}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">{edu.start_date} — {edu.end_date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5" style={{ backgroundColor: data.theme_color }} />
              <h2 className="text-2xl font-serif font-bold" style={{ color: data.theme_color }}>
                Expertise
              </h2>
              <div className="flex-1 h-0.5" style={{ backgroundColor: data.theme_color }} />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {data.skills.map((skill) => (
                <div key={skill.id} className="text-center">
                  <div 
                    className="w-3 h-3 rounded-full mx-auto mb-2"
                    style={{ backgroundColor: data.theme_color }}
                  />
                  <p className="font-medium text-sm">{skill.name}</p>
                  {skill.level && (
                    <p className="text-xs text-gray-500">{skill.level}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElegantTemplate;
