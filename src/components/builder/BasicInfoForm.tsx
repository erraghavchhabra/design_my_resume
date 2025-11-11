import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Upload, X } from 'lucide-react';
import { useState } from 'react';
import { useResume } from '../../context/ResumeContext';

const BasicInfoForm = () => {
  const { resumeData, updateResumeData } = useResume();
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    resumeData.personalInfo.profileImage
  );

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        updateResumeData({
          personalInfo: { ...resumeData.personalInfo, profileImage: result },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(undefined);
    updateResumeData({
      personalInfo: { ...resumeData.personalInfo, profileImage: undefined },
    });
  };

  const handleChange = (field: string, value: string) => {
    updateResumeData({
      personalInfo: { ...resumeData.personalInfo, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Basic Information</h2>
        <p className="text-sm text-muted-foreground">
          Enter your personal details and contact information
        </p>
      </div>

      <div className="space-y-4">
        {/* Profile Image */}
        <div className="space-y-2">
          <Label>Profile Photo (Optional)</Label>
          <div className="flex items-center gap-4">
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-2 border-border"
                />
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                  onClick={handleRemoveImage}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-muted border-2 border-dashed border-border flex items-center justify-center">
                <Upload className="h-8 w-8 text-muted-foreground" />
              </div>
            )}
            <div>
              <input
                type="file"
                id="profile-image"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <Label
                htmlFor="profile-image"
                className="cursor-pointer inline-block"
              >
                <Button variant="outline" size="sm" asChild>
                  <span>Upload Photo</span>
                </Button>
              </Label>
              <p className="text-xs text-muted-foreground mt-1">
                JPG, PNG or WEBP (Max 5MB)
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={resumeData.personalInfo.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="headline">Professional Headline *</Label>
            <Input
              id="headline"
              value={resumeData.personalInfo.headline}
              onChange={(e) => handleChange('headline', e.target.value)}
              placeholder="Senior Software Engineer"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={resumeData.personalInfo.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john.doe@email.com"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={resumeData.personalInfo.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={resumeData.personalInfo.location}
              onChange={(e) => handleChange('location', e.target.value)}
              placeholder="San Francisco, CA"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoForm;
