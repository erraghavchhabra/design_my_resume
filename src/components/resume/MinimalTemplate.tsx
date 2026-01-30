import { ResumeData } from '../../types/resume';

interface MinimalTemplateProps {
  data: ResumeData;
}

const MinimalTemplate = ({ data }: MinimalTemplateProps) => {
  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    return `${month}.${year}`;
  };

  const fontFamily = data.font_family || 'Inter';

  return (
    <div className="p-12 text-black max-w-4xl mx-auto" style={{ fontFamily }}>
      {/* Header */}
      <header className="mb-10 text-center">
        {data.personal_info.profile_image && (
          <img
            src={data.personal_info.profile_image}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover mx-auto mb-4 grayscale"
          />
        )}
        <h1 className="text-5xl font-bold mb-2 tracking-tight">
          {data.personal_info.full_name || 'YOUR NAME'}
        </h1>
        <p className="text-lg mb-3 text-gray-700">
          {data.personal_info.headline || 'Professional Title'}
        </p>
        <div className="flex justify-center flex-wrap gap-x-4 text-sm text-gray-600">
          {data.personal_info.email && <span>{data.personal_info.email}</span>}
          {data.personal_info.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info.location && <span>{data.personal_info.location}</span>}
        </div>
      </header>

      <div className="space-y-8">
        {/* Summary */}
        {data.summary.content && (
          <section>
            <p className="text-sm leading-relaxed text-gray-800 text-center max-w-3xl mx-auto">
              {data.summary.content}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experiences.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider mb-4 border-b border-black pb-2">
              Experience
            </h2>
            <div className="space-y-6">
              {data.experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-base">{exp.position}</h3>
                    <span className="text-xs text-gray-600">
                      {formatDate(exp.start_date)} — {exp.current ? 'Present' : formatDate(exp.end_date)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    {exp.company}
                    {exp.location && ` • ${exp.location}`}
                  </p>
                  {exp.description && (
                    <p className="text-sm text-gray-800 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider mb-4 border-b border-black pb-2">
              Education
            </h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-base">
                      {edu.degree}, {edu.field}
                    </h3>
                    <span className="text-xs text-gray-600">
                      {formatDate(edu.start_date)} — {formatDate(edu.end_date)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{edu.institution}</p>
                  {edu.description && (
                    <p className="text-sm text-gray-800 mt-1">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider mb-4 border-b border-black pb-2">
              Projects
            </h2>
            <div className="space-y-4">
              {data.projects.map((project) => (
                <div key={project.id}>
                  <h3 className="font-bold text-base mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-800 leading-relaxed mb-2">{project.description}</p>
                  {project.technologies.length > 0 && (
                    <p className="text-xs text-gray-600">
                      {project.technologies.join(' • ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider mb-4 border-b border-black pb-2">
              Skills
            </h2>
            <p className="text-sm text-gray-800">
              {data.skills.map((skill) => skill.name).join(' • ')}
            </p>
          </section>
        )}

        <div className="grid grid-cols-2 gap-8">
          {/* Languages */}
          {data.languages.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider mb-3 border-b border-black pb-2">
                Languages
              </h2>
              <div className="space-y-1">
                {data.languages.map((lang) => (
                  <div key={lang.id} className="text-sm">
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-gray-600"> — {lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Interests */}
          {data.interests.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider mb-3 border-b border-black pb-2">
                Interests
              </h2>
              <p className="text-sm text-gray-800">
                {data.interests.map((interest) => interest.name).join(' • ')}
              </p>
            </section>
          )}
        </div>

        {/* Achievements */}
        {data.achievements.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider mb-4 border-b border-black pb-2">
              Achievements
            </h2>
            <div className="space-y-2">
              {data.achievements.map((achievement) => (
                <div key={achievement.id}>
                  <span className="font-semibold text-sm">{achievement.title}</span>
                  {achievement.date && <span className="text-xs text-gray-600"> ({achievement.date})</span>}
                  {achievement.description && (
                    <p className="text-sm text-gray-800">{achievement.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MinimalTemplate;
