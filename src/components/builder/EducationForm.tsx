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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-bold mb-1">Education</p>
          <p className="text-md text-muted-foreground">
            Add your educational background
          </p>
        </div>
        <Button onClick={addEducation} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>

      <div className="space-y-4">
        {resumeData.education.map((edu: any) => (
          <div key={edu.id} className="rounded-2xl bg-[#F7F7FB] p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">Education Entry</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeEducation(edu.id)}
                  className="h-8 w-8"
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Institution</Label>
                <Input
                  value={edu.institution}
                  onChange={(e) =>
                    updateEducation(edu.id, "institution", e.target.value)
                  }
                  placeholder="University of California"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Degree</Label>
                  <Input
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducation(edu.id, "degree", e.target.value)
                    }
                    placeholder="Bachelor of Science"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Field of Study</Label>
                  <Input
                    value={edu.field}
                    onChange={(e) =>
                      updateEducation(edu.id, "field", e.target.value)
                    }
                    placeholder="Computer Science"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  value={edu.startDate}
                  onChange={(val) =>
                    updateEducation(
                      edu.id,
                      "endDate",
                      new Date(val)?.toISOString()
                    )
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Description (Optional)</Label>
                <Textarea
                  value={edu.description}
                  onChange={(e) =>
                    updateEducation(edu.id, "description", e.target.value)
                  }
                  className="resize-none"
                  placeholder="Graduated with honors. Focus on software engineering..."
                  rows={3}
                />
              </div>
            </div>
          </div>
        ))}

        {resumeData.education.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No education added yet. Click "Add" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationForm;
