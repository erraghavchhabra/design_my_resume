import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Plus, Trash2 } from "lucide-react";
import { Education } from "../../types/resume";
import { useResume } from "../../context/ResumeContext";
import { CustomOnlyDateSelector } from "../ui/CustomOnlyDateSelector";

const EducationForm = () => {
  const { resumeData, updateResumeData } = useResume();

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    updateResumeData({
      education: [...resumeData.education, newEducation],
    });
  };

  const removeEducation = (id: string) => {
    updateResumeData({
      education: resumeData.education.filter((edu: any) => edu.id !== id),
    });
  };

  const updateEducation = (
    id: string,
    field: keyof Education,
    value: string
  ) => {
    updateResumeData({
      education: resumeData.education.map((edu: any) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  return (
    <div className="space-y-4">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-2xl md:text-4xl font-bold mb-1">Education</p>
          <p className="text-sm md:text-md text-muted-foreground">
            Add your educational background
          </p>
        </div>

        <Button
          onClick={addEducation}
          size="sm"
          className="self-start md:self-auto"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>

      <div className="space-y-4">
        {resumeData.education.map((edu: any) => (
          <div
            key={edu.id}
            className="rounded-2xl bg-[#F7F7FB] p-4 md:p-6 space-y-5"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm md:text-base font-semibold">
                Education Entry
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeEducation(edu.id)}
                className="h-8 w-8"
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>

            {/* Institution */}
            <div className="space-y-1.5">
              <Label className="text-xs md:text-sm">Institution</Label>
              <Input
                value={edu.institution}
                onChange={(e) =>
                  updateEducation(edu.id, "institution", e.target.value)
                }
                placeholder="University of California"
              />
            </div>

            {/* Degree + Field */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs md:text-sm">Degree</Label>
                <Input
                  value={edu.degree}
                  onChange={(e) =>
                    updateEducation(edu.id, "degree", e.target.value)
                  }
                  placeholder="Bachelor of Science"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs md:text-sm">Field of Study</Label>
                <Input
                  value={edu.field}
                  onChange={(e) =>
                    updateEducation(edu.id, "field", e.target.value)
                  }
                  placeholder="Computer Science"
                />
              </div>
            </div>

            {/* Start + End Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <CustomOnlyDateSelector
                label="Start Date"
                value={edu.startDate}
                onChange={(val) =>
                  updateEducation(
                    edu.id,
                    "startDate",
                    new Date(val)?.toISOString()
                  )
                }
              />

              <CustomOnlyDateSelector
                label="End Date"
                value={edu.endDate}
                onChange={(val) =>
                  updateEducation(
                    edu.id,
                    "endDate",
                    new Date(val)?.toISOString()
                  )
                }
              />
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <Label className="text-xs md:text-sm">
                Description (Optional)
              </Label>
              <Textarea
                value={edu.description}
                onChange={(e) =>
                  updateEducation(edu.id, "description", e.target.value)
                }
                rows={3}
                className="resize-none text-xs md:text-sm"
                placeholder="Graduated with honors. Focus on software engineering..."
              />
            </div>
          </div>
        ))}

        {resumeData.education.length === 0 && (
          <div className="text-center py-6 text-sm text-muted-foreground">
            No education added yet. Tap “Add” to get started.
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationForm;
