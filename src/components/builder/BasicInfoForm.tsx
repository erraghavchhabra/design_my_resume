import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Upload, X } from "lucide-react";
import { useState } from "react";
import { useResume } from "../../context/ResumeContext";

const BasicInfoForm = ({ profileIamge = true }: any) => {
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
        <p className="text-2xl md:text-4xl font-bold mb-2">Basic Information</p>
        <p className="text-md font-semibold text-muted-foreground">
          Enter your personal details and contact information
        </p>
      </div>

      <div
        className="
      bg-[#F4F5FB] rounded-md
      p-4 md:p-6
      flex flex-col md:flex-row
      gap-6
    "
      >
        {/* Profile Image */}
        {profileIamge && (
          <div className="flex justify-center md:block">
            <div className="flex flex-col items-center gap-4">
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Profile"
                    className="w-32 h-32 md:w-36 md:h-36 rounded-md object-cover border-2 border-border"
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
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-md bg-muted border-2 border-dashed border-border flex items-center justify-center">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                </div>
              )}

              <Label htmlFor="profile-image" className="cursor-pointer">
                <Button variant="outline" size="sm" asChild>
                  <span>Upload Photo</span>
                </Button>
              </Label>

              <input
                type="file"
                id="profile-image"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        )}

        {/* FORM RIGHT SIDE */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              value={resumeData.personalInfo.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="headline">Professional Headline *</Label>
            <Input
              id="headline"
              placeholder="Senior Software Engineer"
              value={resumeData.personalInfo.headline}
              onChange={(e) => handleChange("headline", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@email.com"
              value={resumeData.personalInfo.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={resumeData.personalInfo.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="San Francisco, CA"
              value={resumeData.personalInfo.location}
              onChange={(e) => handleChange("location", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoForm;
