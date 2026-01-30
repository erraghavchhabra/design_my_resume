import { ResumeData } from '../../types/resume';

interface TemplateProps {
  data: ResumeData;
}

const BoldTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white" style={{ fontFamily: data.font_family }}>
      {/* Bold Asymmetric Header */}
      <div className="grid grid-cols-5">
        <div 
          className="col-span-2 p-12 text-white flex flex-col justify-center"
          style={{ backgroundColor: data.theme_color }}
        >
          <h1 className="text-5xl font-black leading-tight mb-4">
            {data.personal_info.full_name.split(' ')[0]}<br />
            {data.personal_info.full_name.split(' ').slice(1).join(' ')}
          </h1>
          <p className="text-xl font-light opacity-90">{data.personal_info.headline}</p>
        </div>
        <div className="col-span-3 p-12 flex flex-col justify-center bg-gray-50">
          <div className="space-y-2 text-gray-700">
            <p className="font-semibold">CONTACT</p>
            <p>{data.personal_info.email}</p>
            <p>{data.personal_info.phone}</p>
            <p>{data.personal_info.location}</p>
          </div>
        </div>
      </div>

      <div className="p-12 space-y-10">
        {/* About */}
        {data.summary.content && (
          <div>
            <h2 
              className="text-4xl font-black mb-4 uppercase"
              style={{ color: data.theme_color }}
            >
              About
            </h2>
            <div className="h-1 w-20 mb-4" style={{ backgroundColor: data.theme_color }} />
            <p className="text-gray-700 text-lg leading-relaxed">{data.summary.content}</p>
          </div>
        )}

        {/* Experience */}
        {data.experiences.length > 0 && (
          <div>
            <h2 
              className="text-4xl font-black mb-4 uppercase"
              style={{ color: data.theme_color }}
            >
              Experience
            </h2>
            <div className="h-1 w-20 mb-6" style={{ backgroundColor: data.theme_color }} />
            <div className="space-y-8">
              {data.experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.position}</h3>
                      <p 
                        className="text-xl font-bold mt-1"
                        style={{ color: data.theme_color }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-700">
                        {exp.start_date} – {exp.current ? 'PRESENT' : exp.end_date}
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
                style={{ color: data.theme_color }}
              >
                Education
              </h2>
              <div className="h-1 w-20 mb-4" style={{ backgroundColor: data.theme_color }} />
              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <p className="font-bold" style={{ color: data.theme_color }}>
                      {edu.field}
                    </p>
                    <p className="text-gray-700">{edu.institution}</p>
                    <p className="text-sm text-gray-600">{edu.end_date}</p>
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
                style={{ color: data.theme_color }}
              >
                Skills
              </h2>
              <div className="h-1 w-20 mb-4" style={{ backgroundColor: data.theme_color }} />
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
                          backgroundColor: data.theme_color,
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
