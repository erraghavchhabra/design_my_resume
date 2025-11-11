import { ResumeData } from '../../types/resume';

interface TemplateProps {
  data: ResumeData;
}

const InfographicTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white" style={{ fontFamily: data.fontFamily }}>
      {/* Visual Header with split design */}
      <div className="grid grid-cols-2">
        <div className="p-12 bg-gray-50">
          <div 
            className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold"
            style={{ backgroundColor: data.themeColor }}
          >
            {data.personalInfo.fullName.split(' ').map(n => n[0]).join('')}
          </div>
          <h1 className="text-3xl font-bold text-center mb-2" style={{ color: data.themeColor }}>
            {data.personalInfo.fullName}
          </h1>
          <p className="text-center text-gray-600">{data.personalInfo.headline}</p>
        </div>
        <div className="p-12 flex flex-col justify-center" style={{ backgroundColor: `${data.themeColor}10` }}>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: data.themeColor }}>
                <span className="text-white text-xl">📧</span>
              </div>
              <span className="text-sm">{data.personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: data.themeColor }}>
                <span className="text-white text-xl">📱</span>
              </div>
              <span className="text-sm">{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: data.themeColor }}>
                <span className="text-white text-xl">📍</span>
              </div>
              <span className="text-sm">{data.personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12 space-y-10">
        {/* About with visual element */}
        {data.summary.content && (
          <div className="relative">
            <div 
              className="absolute left-0 top-0 w-1 h-full rounded-full"
              style={{ backgroundColor: data.themeColor }}
            />
            <div className="pl-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: data.themeColor }}>
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{data.summary.content}</p>
            </div>
          </div>
        )}

        {/* Experience Timeline */}
        {data.experience.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: data.themeColor }}>
              Career Journey
            </h2>
            <div className="relative">
              <div 
                className="absolute left-6 top-0 bottom-0 w-0.5"
                style={{ backgroundColor: `${data.themeColor}40` }}
              />
              <div className="space-y-8">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="relative pl-16">
                    <div 
                      className="absolute left-0 top-1 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: data.themeColor }}
                    >
                      {exp.startDate.split('-')[0].slice(2)}
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-xl mb-1">{exp.position}</h3>
                      <p className="font-semibold mb-2" style={{ color: data.themeColor }}>
                        {exp.company} • {exp.location}
                      </p>
                      <p className="text-sm text-gray-500 mb-3">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </p>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Skills with Progress Circles */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: data.themeColor }}>
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-4 gap-6">
              {data.skills.slice(0, 8).map((skill) => (
                <div key={skill.id} className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="44"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="44"
                        fill="none"
                        stroke={data.themeColor}
                        strokeWidth="8"
                        strokeDasharray={`${2 * Math.PI * 44}`}
                        strokeDashoffset={`${2 * Math.PI * 44 * (1 - (skill.level === 'Expert' ? 0.9 : skill.level === 'Advanced' ? 0.75 : 0.6))}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold" style={{ color: data.themeColor }}>
                        {skill.level === 'Expert' ? '90%' : skill.level === 'Advanced' ? '75%' : '60%'}
                      </span>
                    </div>
                  </div>
                  <p className="font-semibold text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Cards */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: data.themeColor }}>
              Education
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {data.education.map((edu) => (
                <div 
                  key={edu.id}
                  className="border-2 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  style={{ borderColor: `${data.themeColor}40` }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl mb-4"
                    style={{ backgroundColor: data.themeColor }}
                  >
                    🎓
                  </div>
                  <h3 className="font-bold text-lg mb-1">{edu.degree}</h3>
                  <p className="font-semibold mb-2" style={{ color: data.themeColor }}>
                    {edu.field}
                  </p>
                  <p className="text-gray-700">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mt-2">{edu.endDate}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfographicTemplate;
