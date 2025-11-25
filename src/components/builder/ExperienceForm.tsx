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
      startDate: "",
      endDate: "",
      current: false,
      location: "",
      description: "",
    };
    updateResumeData({
      experience: [...resumeData.experience, newExperience],
    });
  };

  const removeExperience = (id: string) => {
    updateResumeData({
      experience: resumeData.experience.filter((exp: any) => exp.id !== id),
    });
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: any
  ) => {
    updateResumeData({
      experience: resumeData.experience.map((exp: any) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  return (
    <div className="space-y-4">
      {/* Heading */}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-bold mb-1">Work Experience</p>
          <p className="text-md text-muted-foreground">
            Add your professional work experience
          </p>
        </div>
        <Button onClick={addExperience} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>

      <div className="space-y-4">
        {resumeData.experience.map((exp: any) => (
          <div key={exp.id} className="rounded-2xl bg-[#F7F7FB] p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">Experience Entry</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeExperience(exp.id)}
                  className="h-8 w-8"
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Company Name</Label>
                  <Input
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(exp.id, "company", e.target.value)
                    }
                    placeholder="Tech Corp"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Position</Label>
                  <Input
                    value={exp.position}
                    onChange={(e) =>
                      updateExperience(exp.id, "position", e.target.value)
                    }
                    placeholder="Senior Software Engineer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomOnlyDateSelector
                  label="Start Date"
                  value={exp.startDate}
                  onChange={(val) =>
                    updateExperience(
                      exp.id,
                      "startDate",
                      new Date(val)?.toISOString()
                    )
                  }
                />
                <CustomOnlyDateSelector
                  label="End Date"
                  value={exp.endDate}
                  disabled={exp.current}
                  onChange={(val) =>
                    updateExperience(
                      exp.id,
                      "endDate",
                      new Date(val)?.toISOString()
                    )
                  }
                />
              </div>

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
                  className="text-sm font-normal cursor-pointer"
                >
                  I currently work here
                </Label>
              </div>

              <div className="space-y-2">
                <Label>Location</Label>
                <Input
                  value={exp.location}
                  onChange={(e) =>
                    updateExperience(exp.id, "location", e.target.value)
                  }
                  placeholder="San Francisco, CA"
                />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={exp.description}
                  onChange={(e) =>
                    updateExperience(exp.id, "description", e.target.value)
                  }
                  className="resize-none"
                  placeholder="Describe your responsibilities and achievements..."
                  rows={4}
                />
              </div>
            </div>
          </div>
        ))}

        {resumeData.experience.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No experience added yet. Click "Add" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceForm;
