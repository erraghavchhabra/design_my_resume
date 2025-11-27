import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Card } from "../ui/card";
import { Plus, Trash2 } from "lucide-react";
import { useResume } from "../../context/ResumeContext";
import { Language } from "../../types/resume";

const LanguagesForm = () => {
  const { resumeData, updateResumeData } = useResume();

  const proficiencyLevels = [
    "Native",
    "Fluent",
    "Advanced",
    "Intermediate",
    "Beginner",
  ];

  const addLanguage = () => {
    const newLanguage: Language = {
      id: Date.now().toString(),
      name: "",
      proficiency: "Intermediate",
    };
    updateResumeData({
      languages: [...resumeData.languages, newLanguage],
    });
  };

  const removeLanguage = (id: string) => {
    updateResumeData({
      languages: resumeData.languages.filter((lang: any) => lang.id !== id),
    });
  };

  const updateLanguage = (id: string, field: keyof Language, value: string) => {
    updateResumeData({
      languages: resumeData.languages.map((lang: any) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      ),
    });
  };

  return (
    <div className="space-y-4">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-2xl md:text-4xl font-bold mb-1">Languages</p>
          <p className="text-sm md:text-md text-muted-foreground">
            Add languages you speak and your proficiency level
          </p>
        </div>

        <Button
          onClick={addLanguage}
          size="sm"
          className="self-start md:self-auto"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>

      {/* Language list */}
      <div className="space-y-4">
        {resumeData.languages.map((language: any) => (
          <div
            key={language.id}
            className="rounded-2xl bg-[#F7F7FB] p-4 md:p-6 space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 justify-between">
              {/* Fields */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs md:text-sm">Language</Label>
                  <Input
                    className="text-xs md:text-sm"
                    value={language.name}
                    onChange={(e) =>
                      updateLanguage(language.id, "name", e.target.value)
                    }
                    placeholder="English"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs md:text-sm">Proficiency</Label>
                  <Select
                    value={language.proficiency}
                    onValueChange={(value) =>
                      updateLanguage(language.id, "proficiency", value)
                    }
                  >
                    <SelectTrigger className="text-xs md:text-sm">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      {proficiencyLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Remove button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeLanguage(language.id)}
                className="h-8 w-8 self-end md:self-auto"
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          </div>
        ))}

        {resumeData.languages.length === 0 && (
          <div className="text-center py-6 text-sm text-muted-foreground">
            No languages added yet. Tap “Add” to get started.
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguagesForm;
