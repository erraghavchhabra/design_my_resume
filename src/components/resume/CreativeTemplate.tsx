import { ResumeData } from "../../types/resume";
import EditBox from "./EditBox";
import HighLightBox from "./HighLightBox";

interface TemplateProps {
  data: ResumeData;
  editMod?: boolean;
  high_lightStep?: number;
}

const CreativeTemplate = ({ data, editMod, high_lightStep }: TemplateProps) => {
  return (
    <div className="bg-white" style={{ fontFamily: data.fontFamily }}>
      {/* Header with gradient */}
      <div
        className="p-12 text-white relative overflow-hidden "
        style={{
          background: `linear-gradient(135deg, ${data.themeColor} 0%, ${data.themeColor}dd 100%)`,
        }}
      >
        <div className="relative group z-10">
          {high_lightStep === 0 && <HighLightBox />}

          {editMod && <EditBox href={`/builder?step=0&mode=edit`} />}
          <h1 className="text-5xl font-bold mb-2">
            {data.personalInfo.fullName}
          </h1>
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
          <div
            className="border-l-4 pl-6 py-2 relative group"
            style={{ borderColor: data.themeColor }}
          >
            {high_lightStep === 1 && <HighLightBox />}

            {editMod && <EditBox href={`/builder?step=1&mode=edit`} />}
            <p
              className="text-sm text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.summary.content }}
            >
              {/* {data.summary.content} */}
            </p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div>
            {/* Section Title */}
            <h2
              className="text-3xl font-bold mb-6 flex items-center gap-3"
              style={{ color: data.themeColor }}
            >
              <span
                className="w-12 h-1 rounded"
                style={{ backgroundColor: data.themeColor }}
              />
              Experience
            </h2>

            <div className="relative group space-y-4">
              {high_lightStep === 2 && <HighLightBox />}
              {editMod && <EditBox href={`/builder?step=2&mode=edit`} />}

              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-6 border-l border-gray-300"
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-[-7px] top-1 w-3 h-3 rounded-full"
                    style={{ backgroundColor: data.themeColor }}
                  />

                  {/* Position */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{exp.position}</h3>
                    <span className="text-xs text-gray-500">
                      {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                    </span>
                  </div>

                  {/* Company */}
                  <p
                    className="font-medium mt-0.5"
                    style={{ color: data.themeColor }}
                  >
                    {exp.company} — {exp.location}
                  </p>

                  {/* Description */}
                  {exp.description && (
                    <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {data.skills.length > 0 && (
          <div>
            <h2
              className="text-3xl font-bold mb-6 flex items-center gap-3"
              style={{ color: data.themeColor }}
            >
              <span
                className="w-12 h-1 rounded"
                style={{ backgroundColor: data.themeColor }}
              />
              Skills
            </h2>

            <div className="relative group">
              {high_lightStep === 4 && <HighLightBox />}
              {editMod && <EditBox href={`/builder?step=4&mode=edit`} />}

              <div className="flex flex-wrap gap-3">
                {data.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="
              px-4 py-2 rounded-full text-sm font-medium
              border bg-white shadow-sm
            "
                    style={{
                      borderColor: `${data.themeColor}55`,
                      color: data.themeColor,
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
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
              <span
                className="w-12 h-1 rounded"
                style={{ backgroundColor: data.themeColor }}
              />
              Education
            </h2>
            <div className="space-y-4 relative group">
              {high_lightStep === 3 && <HighLightBox />}

              {editMod && <EditBox href={`/builder?step=3&mode=edit`} />}
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p
                    className="font-semibold"
                    style={{ color: data.themeColor }}
                  >
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </p>
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
