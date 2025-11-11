import { ResumeData } from '../../types/resume';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate = ({ data }: ModernTemplateProps) => {
  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    return `${month}/${year}`;
  };

  const themeColor = data.themeColor || '#dc2626';
  const fontFamily = data.fontFamily || 'Inter';

  return (
    <div className="p-12 text-gray-900" style={{ fontFamily }}>
      {/* Header */}
      <header className="mb-8 pb-6" style={{ borderBottom: `4px solid ${themeColor}` }}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {data.personalInfo.fullName || 'Your Name'}
            </h1>
            <p className="text-xl font-semibold mb-3" style={{ color: themeColor }}>
              {data.personalInfo.headline || 'Professional Title'}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
              {data.personalInfo.email && (
                <div className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  <span>{data.personalInfo.email}</span>
                </div>
              )}
              {data.personalInfo.phone && (
                <div className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  <span>{data.personalInfo.phone}</span>
                </div>
              )}
              {data.personalInfo.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{data.personalInfo.location}</span>
                </div>
              )}
            </div>
          </div>
          {data.personalInfo.profileImage && (
            <img
              src={data.personalInfo.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4"
              style={{ borderColor: themeColor }}
            />
          )}
        </div>
      </header>

      {/* Summary */}
      {data.summary.content && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide" style={{ color: themeColor }}>
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {data.summary.content}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3 uppercase tracking-wide" style={{ color: themeColor }}>
            Work Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-sm text-gray-600">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <p>
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </p>
                    {exp.location && <p className="text-xs">{exp.location}</p>}
                  </div>
                </div>
                {exp.description && (
                  <p className="text-sm text-gray-700 mt-1">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3 uppercase tracking-wide" style={{ color: themeColor }}>
            Education
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-sm text-gray-600">{edu.institution}</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </p>
                </div>
                {edu.description && (
                  <p className="text-sm text-gray-700 mt-1">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide" style={{ color: themeColor }}>
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span
                key={skill.id}
                className="px-3 py-1 text-sm rounded-full border"
                style={{ 
                  backgroundColor: `${themeColor}15`,
                  color: themeColor,
                  borderColor: `${themeColor}40`
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3 uppercase tracking-wide" style={{ color: themeColor }}>
            Projects
          </h2>
          <div className="space-y-3">
            {data.projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-bold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{project.description}</p>
                {project.technologies.length > 0 && (
                  <p className="text-xs text-gray-600 mt-1">
                    <span className="font-semibold">Technologies:</span>{' '}
                    {project.technologies.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-6">
        {/* Languages */}
        {data.languages.length > 0 && (
          <section>
            <h2 className="text-lg font-bold mb-2 uppercase tracking-wide" style={{ color: themeColor }}>
              Languages
            </h2>
            <div className="space-y-1">
              {data.languages.map((lang) => (
                <div key={lang.id} className="text-sm">
                  <span className="font-semibold text-gray-900">{lang.name}</span>
                  <span className="text-gray-600"> - {lang.proficiency}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Interests */}
        {data.interests.length > 0 && (
          <section>
            <h2 className="text-lg font-bold mb-2 uppercase tracking-wide" style={{ color: themeColor }}>
              Interests
            </h2>
            <p className="text-sm text-gray-700">
              {data.interests.map((interest) => interest.name).join(', ')}
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
