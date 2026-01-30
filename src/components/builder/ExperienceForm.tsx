import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Card } from "../ui/card";
import { Plus, Trash2 } from "lucide-react";
import { useResume } from "../../context/ResumeContext";
import { Experience } from "../../types/resume";
import { CustomOnlyDateSelector } from "../ui/CustomOnlyDateSelector";

const ExperienceForm = () => {
  const { resumeData, updateResumeData } = useResume();

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      start_date: "",
      end_date: "",
      current: false,
      location: "",
      description: "",
    };
    updateResumeData({
      experiences: [...resumeData.experiences, newExperience],
    });
  };

  const removeExperience = (id: string) => {
    updateResumeData({
      experiences: resumeData.experiences.filter((exp: any) => exp.id !== id),
    });
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: any
  ) => {
    updateResumeData({
      experiences: resumeData.experiences.map((exp: any) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  return (
    <div className="space-y-4">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-2xl md:text-4xl font-bold mb-1">Work Experience</p>
          <p className="text-sm md:text-md text-muted-foreground">
            Add your professional work experience
          </p>
        </div>

        <Button
          onClick={addExperience}
          size="sm"
          className="self-start md:self-auto"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>

      <div className="space-y-4">
        {resumeData.experiences.map((exp: any) => (
          <div
            key={exp.id}
            className="rounded-2xl bg-[#F7F7FB] p-4 md:p-6 space-y-5"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm md:text-base font-semibold">
                Experience Entry
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeExperience(exp.id)}
                className="h-8 w-8"
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>

            {/* Company & Position */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs md:text-sm">Company Name</Label>
                <Input
                  value={exp.company}
                  onChange={(e) =>
                    updateExperience(exp.id, "company", e.target.value)
                  }
                  placeholder="Tech Corp"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs md:text-sm">Position</Label>
                <Input
                  value={exp.position}
                  onChange={(e) =>
                    updateExperience(exp.id, "position", e.target.value)
                  }
                  placeholder="Senior Software Engineer"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <CustomOnlyDateSelector
                label="Start Date"
                value={exp.start_date}
                onChange={(val) =>
                  updateExperience(
                    exp.id,
                    "start_date",
                    new Date(val)?.toISOString()
                  )
                }
              />
              <CustomOnlyDateSelector
                label="End Date"
                value={exp.end_date}
                disabled={exp.current}
                onChange={(val) =>
                  updateExperience(
                    exp.id,
                    "end_date",
                    new Date(val)?.toISOString()
                  )
                }
              />
            </div>

            {/* Currently Working Here */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id={`current-${exp.id}`}
                checked={exp.current}
                onCheckedChange={(checked) =>
                  updateExperience(exp.id, "current", checked)
                }
              />
              <Label
                htmlFor={`current-${exp.id}`}
                className="text-xs md:text-sm font-normal cursor-pointer"
              >
                I currently work here
              </Label>
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <Label className="text-xs md:text-sm">Location</Label>
              <Input
                value={exp.location}
                onChange={(e) =>
                  updateExperience(exp.id, "location", e.target.value)
                }
                placeholder="San Francisco, CA"
              />
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <Label className="text-xs md:text-sm">Description</Label>
              <Textarea
                value={exp.description}
                onChange={(e) =>
                  updateExperience(exp.id, "description", e.target.value)
                }
                rows={4}
                className="resize-none text-xs md:text-sm"
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
          </div>
        ))}

        {resumeData.experiences.length === 0 && (
          <div className="text-center py-6 text-sm text-muted-foreground">
            No experience added yet. Tap “Add” to get started.
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceForm;
