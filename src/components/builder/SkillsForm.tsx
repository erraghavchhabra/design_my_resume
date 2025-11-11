import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Plus, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { useResume } from "../../context/ResumeContext";

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
  "Material-UI",
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
  const [skillInput, setSkillInput] = useState("");
  const [open, setOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] =
    useState(skillSuggestions);

  const addSkill = (skillName?: string) => {
    const name = skillName || skillInput.trim();
    if (
      name &&
      !resumeData.skills.find(
        (s: any) => s.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      const newSkill = {
        id: Date.now().toString(),
        name: name,
      };
      updateResumeData({
        skills: [...resumeData.skills, newSkill],
      });
      setSkillInput("");
      setOpen(false);
    }
  };

  const handleInputChange = (value: string) => {
    setSkillInput(value);
    if (value.trim()) {
      const filtered = skillSuggestions.filter(
        (skill) =>
          skill.toLowerCase().includes(value.toLowerCase()) &&
          !resumeData.skills.find(
            (s:any) => s.name.toLowerCase() === skill.toLowerCase()
          )
      );
      setFilteredSuggestions(filtered);
      setOpen(filtered.length > 0);
    } else {
      setFilteredSuggestions(skillSuggestions);
      setOpen(false);
    }
  };

  const removeSkill = (id: string) => {
    updateResumeData({
      skills: resumeData.skills.filter((skill:any) => skill.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <p className="text-sm text-muted-foreground">
          Add your technical and professional skills
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="skill">Add Skill</Label>
          <div className="flex gap-2">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <div className="flex-1 relative">
                  <Input
                    id="skill"
                    value={skillInput}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addSkill();
                      }
                    }}
                    onFocus={() => {
                      if (skillInput.trim() && filteredSuggestions.length > 0) {
                        setOpen(true);
                      }
                    }}
                    placeholder="Start typing or browse suggestions..."
                    className="pr-10"
                  />
                  {skillInput && (
                    <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary animate-pulse" />
                  )}
                </div>
              </PopoverTrigger>
              <PopoverContent
                className="w-[--radix-popover-trigger-width] p-0"
                align="start"
              >
                <Command>
                  <CommandInput
                    placeholder="Search skills..."
                    value={skillInput}
                    onValueChange={handleInputChange}
                  />
                  <CommandList>
                    <CommandEmpty>No skills found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      {filteredSuggestions.slice(0, 10).map((skill) => (
                        <CommandItem
                          key={skill}
                          onSelect={() => addSkill(skill)}
                          className="cursor-pointer"
                        >
                          {skill}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <Button onClick={() => addSkill()} disabled={!skillInput.trim()}>
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Your Skills</Label>
          {resumeData.skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill:any) => (
                <Badge
                  key={skill.id}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm"
                >
                  {skill.name}
                  <button
                    onClick={() => removeSkill(skill.id)}
                    className="ml-2 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground py-4">
              No skills added yet. Add your skills above.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
