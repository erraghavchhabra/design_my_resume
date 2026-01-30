import { ResumeData } from '../../types/resume';

interface TemplateProps {
  data: ResumeData;
}

const TechnicalTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="p-10 bg-white" style={{ fontFamily: data.font_family }}>
      {/* Terminal-style Header */}
      <div 
        className="border-2 rounded-lg p-6 mb-8"
        style={{ borderColor: data.theme_color }}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span 
            className="font-mono text-sm ml-2"
            style={{ color: data.theme_color }}
          >
            ~/resume
          </span>
        </div>
        <div className="font-mono">
          <p className="text-sm text-gray-500 mb-1">$ cat profile.txt</p>
          <h1 className="text-3xl font-bold mb-2" style={{ color: data.theme_color }}>
            {data.personal_info.full_name}
          </h1>
          <p className="text-lg text-gray-700 mb-3">{data.personal_info.headline}</p>
          <div className="flex gap-4 text-sm text-gray-600">
            <span>📧 {data.personal_info.email}</span>
            <span>📱 {data.personal_info.phone}</span>
            <span>📍 {data.personal_info.location}</span>
          </div>
        </div>
      </div>

      {/* Summary as Code Comment */}
      {data.summary.content && (
        <div className="mb-8 font-mono text-sm">
          <p style={{ color: data.theme_color }}>/* =====================================</p>
          <p style={{ color: data.theme_color }}>   ABOUT</p>
          <p style={{ color: data.theme_color }}>   ===================================== */</p>
          <p className="text-gray-700 mt-2 leading-relaxed">{data.summary.content}</p>
        </div>
      )}

      {/* Experience as Function Blocks */}
      {data.experiences.length > 0 && (
        <div className="mb-8">
          <div className="font-mono text-sm mb-4">
            <p style={{ color: data.theme_color }}>// ===================================</p>
            <p style={{ color: data.theme_color }}>// EXPERIENCE</p>
            <p style={{ color: data.theme_color }}>// ===================================</p>
          </div>
          <div className="space-y-6">
            {data.experiences.map((exp) => (
              <div key={exp.id} className="font-mono text-sm">
                <p className="text-gray-500">
                  <span style={{ color: data.theme_color }}>function</span>{' '}
                  <span className="font-bold">{exp.position.replace(/\s+/g, '')}()</span> {'{'}
                </p>
                <div className="pl-6 py-2 space-y-1">
                  <p>
                    <span className="text-gray-500">company:</span>{' '}
                    <span className="font-semibold" style={{ color: data.theme_color }}>"{exp.company}"</span>
                  </p>
                  <p>
                    <span className="text-gray-500">location:</span> "{exp.location}"
                  </p>
                  <p>
                    <span className="text-gray-500">period:</span>{' '}
                    "{exp.start_date} - {exp.current ? 'Present' : exp.end_date}"
                  </p>
                  <p>
                    <span className="text-gray-500">description:</span> "{exp.description}"
                  </p>
                </div>
                <p className="text-gray-500">{'}'}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills as Array */}
      {data.skills.length > 0 && (
        <div className="mb-8">
          <div className="font-mono text-sm">
            <p style={{ color: data.theme_color }}>// Technical Skills</p>
            <p className="text-gray-500">
              <span style={{ color: data.theme_color }}>const</span> skills = [
            </p>
            <div className="pl-6 grid grid-cols-3 gap-2 py-2">
              {data.skills.map((skill, idx) => (
                <p key={skill.id} className="text-gray-700">
                  "{skill.name}"{idx < data.skills.length - 1 ? ',' : ''}
                </p>
              ))}
            </div>
            <p className="text-gray-500">];</p>
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <div className="font-mono text-sm">
            <p style={{ color: data.theme_color }}>// Education</p>
            <p className="text-gray-500">
              <span style={{ color: data.theme_color }}>const</span> education = [
            </p>
            <div className="pl-6 space-y-3 py-2">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <p className="text-gray-500">{'{'}</p>
                  <div className="pl-6">
                    <p>
                      <span className="text-gray-500">degree:</span>{' '}
                      <span style={{ color: data.theme_color }}>"{edu.degree}"</span>
                    </p>
                    <p>
                      <span className="text-gray-500">field:</span> "{edu.field}"
                    </p>
                    <p>
                      <span className="text-gray-500">institution:</span> "{edu.institution}"
                    </p>
                    <p>
                      <span className="text-gray-500">year:</span> "{edu.end_date}"
                    </p>
                  </div>
                  <p className="text-gray-500">{'},'}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500">];</p>
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div>
          <div className="font-mono text-sm">
            <p style={{ color: data.theme_color }}>// Featured Projects</p>
            <div className="space-y-4 mt-3">
              {data.projects.map((project) => (
                <div key={project.id} className="border-l-2 pl-4" style={{ borderColor: data.theme_color }}>
                  <p className="font-bold text-base">{project.title}</p>
                  <p className="text-gray-700 text-xs mt-1">{project.description}</p>
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded"
                          style={{ 
                            backgroundColor: `${data.theme_color}20`,
                            color: data.theme_color 
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalTemplate;
