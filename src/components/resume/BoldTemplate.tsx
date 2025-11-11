import { ResumeData } from '../../types/resume';

interface TemplateProps {
  data: ResumeData;
}

const BoldTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white" style={{ fontFamily: data.fontFamily }}>
      {/* Bold Asymmetric Header */}
      <div className="grid grid-cols-5">
        <div 
          className="col-span-2 p-12 text-white flex flex-col justify-center"
          style={{ backgroundColor: data.themeColor }}
        >
          <h1 className="text-5xl font-black leading-tight mb-4">
            {data.personalInfo.fullName.split(' ')[0]}<br />
            {data.personalInfo.fullName.split(' ').slice(1).join(' ')}
          </h1>
          <p className="text-xl font-light opacity-90">{data.personalInfo.headline}</p>
        </div>
        <div className="col-span-3 p-12 flex flex-col justify-center bg-gray-50">
          <div className="space-y-2 text-gray-700">
            <p className="font-semibold">CONTACT</p>
            <p>{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
            <p>{data.personalInfo.location}</p>
          </div>
        </div>
      </div>

      <div className="p-12 space-y-10">
        {/* About */}
        {data.summary.content && (
          <div>
            <h2 
              className="text-4xl font-black mb-4 uppercase"
              style={{ color: data.themeColor }}
            >
              About
            </h2>
            <div className="h-1 w-20 mb-4" style={{ backgroundColor: data.themeColor }} />
            <p className="text-gray-700 text-lg leading-relaxed">{data.summary.content}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div>
            <h2 
              className="text-4xl font-black mb-4 uppercase"
              style={{ color: data.themeColor }}
            >
              Experience
            </h2>
            <div className="h-1 w-20 mb-6" style={{ backgroundColor: data.themeColor }} />
            <div className="space-y-8">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.position}</h3>
                      <p 
                        className="text-xl font-bold mt-1"
                        style={{ color: data.themeColor }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-700">
                        {exp.startDate} – {exp.current ? 'PRESENT' : exp.endDate}
                      </p>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-10">
          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 
                className="text-3xl font-black mb-4 uppercase"
                style={{ color: data.themeColor }}
              >
                Education
              </h2>
              <div className="h-1 w-20 mb-4" style={{ backgroundColor: data.themeColor }} />
              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <p className="font-bold" style={{ color: data.themeColor }}>
                      {edu.field}
                    </p>
                    <p className="text-gray-700">{edu.institution}</p>
                    <p className="text-sm text-gray-600">{edu.endDate}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 
                className="text-3xl font-black mb-4 uppercase"
                style={{ color: data.themeColor }}
              >
                Skills
              </h2>
              <div className="h-1 w-20 mb-4" style={{ backgroundColor: data.themeColor }} />
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="font-bold">{skill.name}</span>
                      {skill.level && <span className="text-sm text-gray-600">{skill.level}</span>}
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: data.themeColor,
                          width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '80%' : '60%'
                        }}
                      />
                    </div>
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

export default BoldTemplate;
