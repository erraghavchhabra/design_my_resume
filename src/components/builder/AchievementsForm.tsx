import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Plus, Trash2 } from "lucide-react";
import { useResume } from "../../context/ResumeContext";
import { Button } from "../ui/button";
import { Achievement } from "../../types/resume";

const AchievementsForm = () => {
  const { resumeData, updateResumeData } = useResume();

  const addAchievement = () => {
    const newAchievement: Achievement = {
      id: Date.now().toString(),
      title: "",
      description: "",
      date: "",
    };
    updateResumeData({
      achievements: [...resumeData.achievements, newAchievement],
    });
  };

  const removeAchievement = (id: string) => {
    updateResumeData({
      achievements: resumeData.achievements.filter((ach: any) => ach.id !== id),
    });
  };

  const updateAchievement = (
    id: string,
    field: keyof Achievement,
    value: string
  ) => {
    updateResumeData({
      achievements: resumeData.achievements.map((ach: any) =>
        ach.id === id ? { ...ach, [field]: value } : ach
      ),
    });
  };

  return (
    <div className="space-y-4">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-2xl md:text-4xl font-bold mb-1">
            Achievements & Awards
          </p>
          <p className="text-sm md:text-md text-muted-foreground">
            Highlight your notable achievements and awards
          </p>
        </div>

        <Button
          onClick={addAchievement}
          size="sm"
          className="self-start md:self-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>

      {/* Achievements List */}
      <div className="space-y-4">
        {resumeData.achievements.map((achievement: any) => (
          <div
            key={achievement.id}
            className="rounded-xl md:rounded-2xl bg-[#F7F7FB] p-4 md:p-6"
          >
            {/* Entry Header */}
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-base md:text-lg">
                Achievement Entry
              </h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 md:h-8 md:w-8"
                onClick={() => removeAchievement(achievement.id)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Title */}
              <div className="md:col-span-2 space-y-2">
                <Label>Title</Label>
                <Input
                  value={achievement.title}
                  onChange={(e) =>
                    updateAchievement(achievement.id, "title", e.target.value)
                  }
                  placeholder="Employee of the Year"
                  className="text-sm md:text-base"
                />
              </div>

              {/* Year */}
              <div className="space-y-2">
                <Label>Year</Label>
                <Input
                  value={achievement.date}
                  onChange={(e) =>
                    updateAchievement(achievement.id, "date", e.target.value)
                  }
                  placeholder="2023"
                  className="text-sm md:text-base"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 mt-4">
              <Label>Description (Optional)</Label>
              <Textarea
                rows={2}
                value={achievement.description}
                onChange={(e) =>
                  updateAchievement(
                    achievement.id,
                    "description",
                    e.target.value
                  )
                }
                className="resize-none text-sm md:text-base"
                placeholder="Recognized for outstanding performance and leadership..."
              />
            </div>
          </div>
        ))}

        {/* Empty View */}
        {resumeData.achievements.length === 0 && (
          <div className="text-center py-6 md:py-8 text-muted-foreground text-sm md:text-base">
            <p>No achievements added yet. Click the Add button above.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementsForm;
