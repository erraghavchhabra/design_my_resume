import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import { useResume } from '../../context/ResumeContext';

const InterestsForm = () => {
  const { resumeData, updateResumeData } = useResume();
  const [interestInput, setInterestInput] = useState('');

  const addInterest = () => {
    if (interestInput.trim()) {
      const newInterest = {
        id: Date.now().toString(),
        name: interestInput.trim(),
      };
      updateResumeData({
        interests: [...resumeData.interests, newInterest],
      });
      setInterestInput('');
    }
  };

  const removeInterest = (id: string) => {
    updateResumeData({
      interests: resumeData.interests.filter((interest:any) => interest.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Interests & Hobbies</h2>
        <p className="text-sm text-muted-foreground">
          Share your personal interests and hobbies
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <div className="flex-1 space-y-2">
            <Label htmlFor="interest">Add Interest</Label>
            <Input
              id="interest"
              value={interestInput}
              onChange={(e) => setInterestInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addInterest()}
              placeholder="e.g., Photography, Hiking, Reading"
            />
          </div>
          <div className="flex items-end">
            <Button onClick={addInterest} disabled={!interestInput.trim()}>
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Your Interests</Label>
          {resumeData.interests.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {resumeData.interests.map((interest:any) => (
                <Badge
                  key={interest.id}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm"
                >
                  {interest.name}
                  <button
                    onClick={() => removeInterest(interest.id)}
                    className="ml-2 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground py-4">
              No interests added yet. Add your interests above.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterestsForm;
