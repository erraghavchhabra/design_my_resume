import { useResume } from '../../context/ResumeContext';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const SummaryForm = () => {
  const { resumeData, updateResumeData } = useResume();

  const handleChange = (value: string) => {
    updateResumeData({
      summary: { content: value },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Professional Summary</h2>
        <p className="text-sm text-muted-foreground">
          Write a brief overview of your professional background and key achievements
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary">Summary</Label>
        <Textarea
          id="summary"
          value={resumeData.summary.content}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Passionate software engineer with 5+ years of experience..."
          rows={8}
          className="resize-none"
        />
        <p className="text-xs text-muted-foreground">
          {resumeData.summary.content.length} characters
        </p>
      </div>
    </div>
  );
};

export default SummaryForm;
