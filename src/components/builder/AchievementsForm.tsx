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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Achievements & Awards</h2>
          <p className="text-sm text-muted-foreground">
            Highlight your notable achievements and awards
          </p>
        </div>
        <Button onClick={addAchievement} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>

      <div className="space-y-4">
        {resumeData.achievements.map((achievement: any) => (
          <Card key={achievement.id} className="p-4">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">Achievement Entry</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeAchievement(achievement.id)}
                  className="h-8 w-8"
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={achievement.title}
                    onChange={(e) =>
                      updateAchievement(achievement.id, "title", e.target.value)
                    }
                    placeholder="Employee of the Year"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Year</Label>
                  <Input
                    value={achievement.date}
                    onChange={(e) =>
                      updateAchievement(achievement.id, "date", e.target.value)
                    }
                    placeholder="2023"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={achievement.description}
                  onChange={(e) =>
                    updateAchievement(
                      achievement.id,
                      "description",
                      e.target.value
                    )
                  }
                  placeholder="Recognized for outstanding performance and leadership..."
                  rows={2}
                />
              </div>
            </div>
          </Card>
        ))}

        {resumeData.achievements.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No achievements added yet. Click "Add" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementsForm;
