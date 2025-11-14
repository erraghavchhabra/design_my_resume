import { ResumeData } from "../../types/resume";
import EditBox from "./EditBox";

interface TemplateProps {
  data: ResumeData;
  editMod?: boolean;
}

const ExecutiveTemplate = ({ data, editMod }: TemplateProps) => {
  return (
    <div className="p-12 bg-white" style={{ fontFamily: data.fontFamily }}>
      {/* Header - Very formal */}
      <div
        className="text-center border-b-4 pb-8 mb-8  relative group"
        style={{ borderColor: data.themeColor }}
      >
        {editMod && <EditBox href={`/builder?step=0&mode=edit`} />}

        <h1
          className="text-4xl font-bold mb-3 tracking-wide uppercase"
          style={{ color: data.themeColor }}
        >
          {data.personalInfo.fullName}
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          {data.personalInfo.headline}
        </p>
        <div className="flex justify-center gap-8 text-sm text-gray-600">
          <span>{data.personalInfo.email}</span>
          <span>•</span>
          <span>{data.personalInfo.phone}</span>
          <span>•</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>

      {/* Executive Summary */}
      {data.summary.content && (
        <div className="mb-8  relative group">
          {editMod && <EditBox href={`/builder?step=1&mode=edit`} />}

          <h2
            className="text-2xl font-bold mb-4 uppercase tracking-wider border-b pb-2"
            style={{ color: data.themeColor }}
          >
            Executive Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            {data.summary.content}
          </p>
        </div>
      )}

      {/* Professional Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8  relative group">
          {editMod && <EditBox href={`/builder?step=2&mode=edit`} />}

          <h2
            className="text-2xl font-bold mb-4 uppercase tracking-wider border-b pb-2"
            style={{ color: data.themeColor }}
          >
            Professional Experience
          </h2>
          <div className="space-y-6">
            {data.experience.map((exp) => (
              <div
                key={exp.id}
                className="border-l-4 pl-6"
                style={{ borderColor: data.themeColor }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <p className="text-lg font-semibold text-gray-700">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <p className="font-semibold">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education & Qualifications */}
      {data.education.length > 0 && (
        <div className="mb-8  relative group">
          {editMod && <EditBox href={`/builder?step=3&mode=edit`} />}

          <h2
            className="text-2xl font-bold mb-4 uppercase tracking-wider border-b pb-2"
            style={{ color: data.themeColor }}
          >
            Education & Qualifications
          </h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="font-semibold text-gray-700">
                      {edu.institution}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
                {edu.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className=" relative group">
          {editMod && <EditBox href={`/builder?step=4&mode=edit`} />}

          <h2
            className="text-2xl font-bold mb-4 uppercase tracking-wider border-b pb-2"
            style={{ color: data.themeColor }}
          >
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-x-8 gap-y-2">
            {data.skills.map((skill) => (
              <div key={skill.id} className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: data.themeColor }}
                />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExecutiveTemplate;
