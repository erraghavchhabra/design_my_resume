import { useState, useMemo } from "react";
import { useResume } from "../../context/ResumeContext";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus, Minus, Search, X } from "lucide-react";

const skillSuggestions = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "Git",
  "HTML",
  "CSS",
  "Vue.js",
  "Angular",
  "Express.js",
  "Django",
  "Flask",
  "Spring Boot",
  "REST API",
  "GraphQL",
  "Redux",
  "Next.js",
  "Tailwind CSS",
  "Firebase",
  "Leadership",
  "Communication",
  "Problem Solving",
  "Team Collaboration",
  "Project Management",
  "Agile",
  "Scrum",
  "Critical Thinking",
  "Time Management",
  "Presentation Skills",
];

const SkillsForm = () => {
  const { resumeData, updateResumeData } = useResume();
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return skillSuggestions.filter((skill) =>
      skill.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const addSkill = (skill: string) => {
    if (
      !resumeData.skills.some(
        (s: any) => s.name.toLowerCase() === skill.toLowerCase()
      )
    ) {
      updateResumeData({
        skills: [
          ...resumeData.skills,
          { id: Date.now().toString(), name: skill },
        ],
      });
    }
  };

  const removeSkill = (skillName: string) => {
    updateResumeData({
      skills: resumeData.skills.filter((s: any) => s.name !== skillName),
    });
  };

  const isAdded = (skill: string) =>
    resumeData.skills.some(
      (s: any) => s.name.toLowerCase() === skill.toLowerCase()
    );

  return (
    <div className="space-y-4">
      {/* Heading */}
      <div>
        <p className="text-2xl md:text-4xl font-bold mb-1">
          We recommend including 6-8 skills
        </p>
        <p className="text-sm md:text-md text-muted-foreground">
          Choose skills that align with the job requirements. Show employers
          you're confident of the work you do!
        </p>
      </div>

      {/* Main Box */}
      <div className="rounded-2xl bg-[#F7F7FB] p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT — Suggestions */}
          <div className="flex flex-col h-full">
            {/* Search Bar */}
            <div className="relative mb-3 md:mb-4">
              <Input
                placeholder="Search a skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 text-sm md:text-base"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            {/* Result count */}
            {search && (
              <p className="text-xs md:text-sm text-muted-foreground mb-2">
                Showing {filtered.length} results for
                <span className="font-semibold"> {search}</span>
              </p>
            )}

            {/* Suggestions List */}
            <div className="flex-1 max-h-[300px] md:max-h-[360px] overflow-y-auto space-y-2 md:space-y-3 custom_scrollbar pr-2">
              {filtered.map((skill) => {
                const added = isAdded(skill);

                return (
                  <div
                    key={skill}
                    className="flex items-center justify-between rounded-full px-4 py-2 border shadow-sm bg-white text-xs md:text-sm"
                  >
                    <span>{skill}</span>

                    {added ? (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-600 h-7 hover:bg-gray-100 rounded-full"
                        onClick={() => removeSkill(skill)}
                      >
                        <Minus size={16} />
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="bg-amber-300 h-7 hover:bg-amber-400 text-black rounded-full"
                        onClick={() => addSkill(skill)}
                      >
                        <Plus size={16} />
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Selected Skills */}
          <div className="flex flex-col h-full">
            <Label className="text-xs md:text-sm font-semibold mb-2">
              Your Skills
            </Label>

            <div className="bg-white rounded-xl border shadow-sm p-4 min-h-[230px] md:min-h-[260px]">
              {resumeData.skills.length > 0 ? (
                <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
                  {resumeData.skills.map((skill: any) => (
                    <li
                      key={skill.id}
                      className="flex items-center justify-between gap-1 md:gap-2 border rounded-full h-7 md:h-8 px-3"
                    >
                      <span>{skill.name}</span>

                      <button
                        onClick={() =>
                          updateResumeData({
                            skills: resumeData.skills.filter(
                              (s: any) => s.id !== skill.id
                            ),
                          })
                        }
                        className="transition text-gray-500 hover:text-red-500"
                      >
                        <X size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs md:text-sm text-muted-foreground">
                  No skills added yet. Select skills from the left panel.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
