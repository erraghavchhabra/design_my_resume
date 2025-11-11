import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card } from '../ui/card';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import { Language } from '../../types/resume';

const LanguagesForm = () => {
  const { resumeData, updateResumeData } = useResume();

  const proficiencyLevels = ['Native', 'Fluent', 'Advanced', 'Intermediate', 'Beginner'];

  const addLanguage = () => {
    const newLanguage: Language = {
      id: Date.now().toString(),
      name: '',
      proficiency: 'Intermediate',
    };
    updateResumeData({
      languages: [...resumeData.languages, newLanguage],
    });
  };

  const removeLanguage = (id: string) => {
    updateResumeData({
      languages: resumeData.languages.filter((lang:any) => lang.id !== id),
    });
  };

  const updateLanguage = (id: string, field: keyof Language, value: string) => {
    updateResumeData({
      languages: resumeData.languages.map((lang:any) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      ),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Languages</h2>
          <p className="text-sm text-muted-foreground">
            Add languages you speak and your proficiency level
          </p>
        </div>
        <Button onClick={addLanguage} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>

      <div className="space-y-4">
        {resumeData.languages.map((language:any) => (
          <Card key={language.id} className="p-4">
            <div className="flex items-start gap-4">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Language</Label>
                  <Input
                    value={language.name}
                    onChange={(e) =>
                      updateLanguage(language.id, 'name', e.target.value)
                    }
                    placeholder="English"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Proficiency</Label>
                  <Select
                    value={language.proficiency}
                    onValueChange={(value) =>
                      updateLanguage(language.id, 'proficiency', value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
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

              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeLanguage(language.id)}
                className="h-8 w-8 mt-8"
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          </Card>
        ))}

        {resumeData.languages.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No languages added yet. Click "Add" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguagesForm;
