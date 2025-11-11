import { ResumeData } from '../../types/resume';

interface TemplateProps {
  data: ResumeData;
}

const CreativeTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white" style={{ fontFamily: data.fontFamily }}>
      {/* Header with gradient */}
      <div 
        className="p-12 text-white relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${data.themeColor} 0%, ${data.themeColor}dd 100%)`
        }}
      >
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-2">{data.personalInfo.fullName}</h1>
          <p className="text-2xl opacity-90">{data.personalInfo.headline}</p>
          <div className="flex gap-6 mt-4 text-sm">
            <span>{data.personalInfo.email}</span>
            <span>{data.personalInfo.phone}</span>
            <span>{data.personalInfo.location}</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 right-20 w-40 h-40 bg-white opacity-10 rounded-full" />
      </div>

      <div className="p-12 space-y-8">
        {/* Summary */}
        {data.summary.content && (
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: data.themeColor }}>
            <p className="text-gray-700 text-lg leading-relaxed italic">{data.summary.content}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div>
            <h2 
              className="text-3xl font-bold mb-6 flex items-center gap-3"
              style={{ color: data.themeColor }}
            >
              <span className="w-12 h-1 rounded" style={{ backgroundColor: data.themeColor }} />
              Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-gray-200">
                  <div 
                    className="absolute left-0 top-0 w-4 h-4 rounded-full -ml-[9px]"
                    style={{ backgroundColor: data.themeColor }}
                  />
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <p className="font-semibold text-lg" style={{ color: data.themeColor }}>
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    {exp.location} | {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills in card format */}
        {data.skills.length > 0 && (
          <div>
            <h2 
              className="text-3xl font-bold mb-6 flex items-center gap-3"
              style={{ color: data.themeColor }}
            >
              <span className="w-12 h-1 rounded" style={{ backgroundColor: data.themeColor }} />
              Skills
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {data.skills.map((skill) => (
                <div 
                  key={skill.id} 
                  className="p-4 rounded-lg border-2 text-center hover:shadow-md transition-shadow"
                  style={{ borderColor: `${data.themeColor}40` }}
                >
                  <p className="font-semibold" style={{ color: data.themeColor }}>{skill.name}</p>
                  {skill.level && <p className="text-sm text-gray-600 mt-1">{skill.level}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 
              className="text-3xl font-bold mb-6 flex items-center gap-3"
              style={{ color: data.themeColor }}
            >
              <span className="w-12 h-1 rounded" style={{ backgroundColor: data.themeColor }} />
              Education
            </h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">{edu.degree} in {edu.field}</h3>
                  <p className="font-semibold" style={{ color: data.themeColor }}>
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreativeTemplate;
