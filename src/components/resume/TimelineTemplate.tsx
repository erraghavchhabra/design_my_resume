import { ResumeData } from '../../types/resume';

interface TemplateProps {
  data: ResumeData;
}

const TimelineTemplate = ({ data }: TemplateProps) => {
  // Combine experience and education for timeline
  const timelineItems = [
    ...data.experience.map(exp => ({
      type: 'experience',
      year: exp.startDate.split('-')[0],
      title: exp.position,
      subtitle: exp.company,
      location: exp.location,
      description: exp.description,
      id: exp.id
    })),
    ...data.education.map(edu => ({
      type: 'education',
      year: edu.endDate.split('-')[0],
      title: edu.degree,
      subtitle: edu.institution,
      location: edu.field,
      description: edu.description,
      id: edu.id
    }))
  ].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <div className="p-12 bg-white" style={{ fontFamily: data.fontFamily }}>
      {/* Minimalist Header */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-light mb-3" style={{ color: data.themeColor }}>
          {data.personalInfo.fullName}
        </h1>
        <p className="text-xl text-gray-600 mb-4">{data.personalInfo.headline}</p>
        <div className="flex justify-center gap-4 text-sm text-gray-500">
          <span>{data.personalInfo.email}</span>
          <span>•</span>
          <span>{data.personalInfo.phone}</span>
          <span>•</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>

      {/* Summary */}
      {data.summary.content && (
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-gray-700 leading-relaxed text-lg">
            {data.summary.content}
          </p>
        </div>
      )}

      {/* Central Timeline */}
      <div className="relative max-w-4xl mx-auto mb-12">
        {/* Central vertical line */}
        <div 
          className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5"
          style={{ backgroundColor: `${data.themeColor}30` }}
        />

        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Timeline dot */}
              <div 
                className="absolute left-1/2 w-6 h-6 rounded-full -ml-3 border-4 border-white z-10"
                style={{ backgroundColor: data.themeColor }}
              />

              {/* Content alternates left and right */}
              <div className={`grid grid-cols-2 gap-12 ${index % 2 === 0 ? '' : 'text-right'}`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="pr-8">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span 
                            className="text-2xl font-bold"
                            style={{ color: data.themeColor }}
                          >
                            {item.year}
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full bg-white">
                            {item.type === 'experience' ? '💼 Work' : '🎓 Education'}
                          </span>
                        </div>
                        <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                        <p className="font-semibold mb-1" style={{ color: data.themeColor }}>
                          {item.subtitle}
                        </p>
                        <p className="text-sm text-gray-600 mb-3">{item.location}</p>
                        <p className="text-gray-700 text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <div className="pl-8">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center justify-end gap-2 mb-2">
                          <span className="px-3 py-1 text-xs rounded-full bg-white">
                            {item.type === 'experience' ? '💼 Work' : '🎓 Education'}
                          </span>
                          <span 
                            className="text-2xl font-bold"
                            style={{ color: data.themeColor }}
                          >
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                        <p className="font-semibold mb-1" style={{ color: data.themeColor }}>
                          {item.subtitle}
                        </p>
                        <p className="text-sm text-gray-600 mb-3">{item.location}</p>
                        <p className="text-gray-700 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Grid at Bottom */}
      {data.skills.length > 0 && (
        <div className="max-w-4xl mx-auto pt-12 border-t">
          <h2 className="text-2xl font-light mb-6 text-center" style={{ color: data.themeColor }}>
            Professional Skills
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {data.skills.map((skill) => (
              <div 
                key={skill.id}
                className="text-center p-4 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: `${data.themeColor}30` }}
              >
                <p className="font-semibold text-sm">{skill.name}</p>
                {skill.level && (
                  <p className="text-xs text-gray-500 mt-1">{skill.level}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelineTemplate;
