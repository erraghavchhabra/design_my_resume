import { ResumeData } from "../../types/resume";
import { Mail, Phone, MapPin, Calendar, Award } from "lucide-react";
import EditBox from "./EditBox";

interface ClassicTemplateProps {
  data: ResumeData;
  editMod?: boolean;
}

const ClassicTemplate = ({ data, editMod }: ClassicTemplateProps) => {
  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  const themeColor = data.themeColor || "#1e3a8a";
  const fontFamily = data.fontFamily || "Inter";
  console.log(651651 , fontFamily)

  return (
    <div className="flex min-h-full" style={{ fontFamily }}>
      {/* Left Sidebar */}
      <aside
        className="w-1/3 text-white p-8 "
        style={{ backgroundColor: themeColor }}
      >
        {/* Profile Image */}
        {data.personalInfo.profileImage && (
          <div className="mb-6 flex justify-center relative group">
            {editMod && <EditBox href={`/builder?step=0&mode=edit`} />}
            <img
              src={data.personalInfo.profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover shadow-lg"
              style={{ border: "4px solid white" }}
            />
          </div>
        )}

        {/* Contact Info */}
        <section className="mb-6 relative group">
          {editMod && <EditBox href={`/builder?step=0&mode=edit`} />}
          <h2
            className="text-lg font-bold mb-3 pb-1"
            style={{ borderBottom: "2px solid rgba(255,255,255,0.3)" }}
          >
            CONTACT
          </h2>
          <div className="space-y-2 text-sm">
            {data.personalInfo.email && (
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">{data.personalInfo.email}</span>
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
          </div>
        </section>

        {/* Skills */}
        {data.skills.length > 0 && (
          <section className="mb-6 relative group">
            {editMod && <EditBox href={`/builder?step=4&mode=edit`} />}
            <h2
              className="text-lg font-bold mb-3 pb-1"
              style={{ borderBottom: "2px solid rgba(255,255,255,0.3)" }}
            >
              SKILLS
            </h2>
            <ul className="space-y-1 text-sm">
              {data.skills.map((skill) => (
                <li key={skill.id} className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Languages */}
        {data.languages.length > 0 && (
          <section className="mb-6 relative group">
            {editMod && <EditBox href={`/builder?step=7&mode=edit`} />}
            <h2
              className="text-lg font-bold mb-3 pb-1"
              style={{ borderBottom: "2px solid rgba(255,255,255,0.3)" }}
            >
              LANGUAGES
            </h2>
            <div className="space-y-2 text-sm">
              {data.languages.map((lang) => (
                <div key={lang.id}>
                  <div className="font-semibold">{lang.name}</div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {lang.proficiency}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Interests */}
        {data.interests.length > 0 && (
          <section className="relative group">
            {editMod && <EditBox href={`/builder?step=8&mode=edit`} />}
            <h2
              className="text-lg font-bold mb-3 pb-1"
              style={{ borderBottom: "2px solid rgba(255,255,255,0.3)" }}
            >
              INTERESTS
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.interests.map((interest) => (
                <span
                  key={interest.id}
                  className="text-sm px-2 py-1 rounded"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  {interest.name}
                </span>
              ))}
            </div>
          </section>
        )}
      </aside>

      {/* Main Content */}
      <main className="w-2/3 p-8 bg-white">
        {/* Header */}
        <header className="mb-8 relative group">
          {editMod && <EditBox href={`/builder?step=0&mode=edit`} />}

          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {data.personalInfo.fullName || "Your Name"}
          </h1>
          <p className="text-xl font-semibold" style={{ color: themeColor }}>
            {data.personalInfo.headline || "Professional Title"}
          </p>
        </header>

        {/* Summary */}
        {data.summary.content && (
          <section className="mb-8 relative group">
            {editMod && <EditBox href={`/builder?step=1&mode=edit`} />}
            <h2
              className="text-xl font-bold mb-3 pb-1"
              style={{
                color: themeColor,
                borderBottom: `2px solid ${themeColor}`,
              }}
            >
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              {data.summary.content}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-8 relative group">
            {editMod && <EditBox href={`/builder?step=2&mode=edit`} />}
            <h2
              className="text-xl font-bold mb-3 pb-1"
              style={{
                color: themeColor,
                borderBottom: `2px solid ${themeColor}`,
              }}
            >
              WORK EXPERIENCE
            </h2>
            <div className="space-y-5">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900 text-base">
                      {exp.position}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(exp.startDate)} -{" "}
                      {exp.current ? "Present" : formatDate(exp.endDate)}
                    </div>
                  </div>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: themeColor }}
                  >
                    {exp.company} {exp.location && `• ${exp.location}`}
                  </p>
                  {exp.description && (
                    <p className="text-sm text-gray-700">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-8 relative group">
            {editMod && <EditBox href={`/builder?step=3&mode=edit`} />}
            <h2
              className="text-xl font-bold mb-3 pb-1"
              style={{
                color: themeColor,
                borderBottom: `2px solid ${themeColor}`,
              }}
            >
              EDUCATION
            </h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-bold text-gray-900">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: themeColor }}
                  >
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-600">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </p>
                  {edu.description && (
                    <p className="text-sm text-gray-700 mt-1">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <section className="mb-8 relative group">
            {editMod && <EditBox href={`/builder?step=5&mode=edit`} />}
            <h2
              className="text-xl font-bold mb-3 pb-1"
              style={{
                color: themeColor,
                borderBottom: `2px solid ${themeColor}`,
              }}
            >
              PROJECTS
            </h2>
            <div className="space-y-4">
              {data.projects.map((project) => (
                <div key={project.id}>
                  <h3 className="font-bold text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    {project.description}
                  </p>
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: `${themeColor}15`,
                            color: themeColor,
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
          </section>
        )}

        {/* Achievements */}
        {data.achievements.length > 0 && (
          <section className="relative group">
            {editMod && <EditBox href={`/builder?step=6&mode=edit`} />}
            <h2
              className="text-xl font-bold mb-3 pb-1"
              style={{
                color: themeColor,
                borderBottom: `2px solid ${themeColor}`,
              }}
            >
              ACHIEVEMENTS & AWARDS
            </h2>
            <div className="space-y-2">
              {data.achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-start gap-2">
                  <Award
                    className="h-4 w-4 mt-0.5 flex-shrink-0"
                    style={{ color: themeColor }}
                  />
                  <div>
                    <span className="font-semibold text-gray-900">
                      {achievement.title}
                    </span>
                    {achievement.date && (
                      <span className="text-gray-600 text-sm">
                        {" "}
                        ({achievement.date})
                      </span>
                    )}
                    {achievement.description && (
                      <p className="text-sm text-gray-700">
                        {achievement.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ClassicTemplate;
