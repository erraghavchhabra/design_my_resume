import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Plus, Trash2, X } from "lucide-react";
import { useState } from "react";
import { useResume } from "../../context/ResumeContext";
import { Project } from "../../types/resume";

const ProjectsForm = () => {
  const { resumeData, updateResumeData } = useResume();
  const [techInputs, setTechInputs] = useState<Record<string, string>>({});

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: "",
      description: "",
      link: "",
      technologies: [],
    };
    updateResumeData({
      projects: [...resumeData.projects, newProject],
    });
  };

  const removeProject = (id: string) => {
    updateResumeData({
      projects: resumeData.projects.filter((proj: any) => proj.id !== id),
    });
  };

  const updateProject = (id: string, field: keyof Project, value: any) => {
    updateResumeData({
      projects: resumeData.projects.map((proj: any) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      ),
    });
  };

  const addTechnology = (projectId: string) => {
    const tech = techInputs[projectId]?.trim();
    if (tech) {
      const project = resumeData.projects.find((p: any) => p.id === projectId);
      if (project) {
        updateProject(projectId, "technologies", [
          ...project.technologies,
          tech,
        ]);
        setTechInputs({ ...techInputs, [projectId]: "" });
      }
    }
  };

  const removeTechnology = (projectId: string, techIndex: number) => {
    const project = resumeData.projects.find((p: any) => p.id === projectId);
    if (project) {
      const newTechnologies = project.technologies.filter(
        (_: any, i: number) => i !== techIndex
      );
      updateProject(projectId, "technologies", newTechnologies);
    }
  };

  return (
    <div className="space-y-4">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-2xl md:text-4xl font-bold mb-1">Projects</p>
          <p className="text-sm md:text-md text-muted-foreground">
            Showcase your personal and professional projects
          </p>
        </div>

        <Button
          onClick={addProject}
          size="sm"
          className="self-start md:self-auto"
        >
          <Plus className="h-4 w-4 mr-2" /> Add
        </Button>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {resumeData.projects.map((project: any) => (
          <div
            key={project.id}
            className="rounded-2xl bg-[#F7F7FB] p-4 md:p-6 space-y-5"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm md:text-base font-semibold">
                Project Entry
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeProject(project.id)}
                className="h-8 w-8"
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>

            {/* Title */}
            <div className="space-y-1.5">
              <Label className="text-xs md:text-sm">Project Title</Label>
              <Input
                value={project.title}
                onChange={(e) =>
                  updateProject(project.id, "title", e.target.value)
                }
                placeholder="E-commerce Platform"
              />
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <Label className="text-xs md:text-sm">Description</Label>
              <Textarea
                value={project.description}
                className="resize-none text-xs md:text-sm"
                onChange={(e) =>
                  updateProject(project.id, "description", e.target.value)
                }
                rows={3}
                placeholder="Describe what the project does and your role..."
              />
            </div>

            {/* Link */}
            <div className="space-y-1.5">
              <Label className="text-xs md:text-sm">Link (Optional)</Label>
              <Input
                value={project.link}
                onChange={(e) =>
                  updateProject(project.id, "link", e.target.value)
                }
                placeholder="https://github.com/username/project"
              />
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <Label className="text-xs md:text-sm">Technologies Used</Label>

              <div className="flex gap-2">
                <Input
                  value={techInputs[project.id] || ""}
                  onChange={(e) =>
                    setTechInputs({
                      ...techInputs,
                      [project.id]: e.target.value,
                    })
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" && addTechnology(project.id)
                  }
                  placeholder="React, Node.js, etc."
                  className="text-xs md:text-sm"
                />
                <Button
                  size="sm"
                  className="h-8 md:h-9"
                  onClick={() => addTechnology(project.id)}
                  disabled={!techInputs[project.id]?.trim()}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech: any, index: number) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-2 py-1 text-xs md:text-sm"
                    >
                      {tech}
                      <button
                        className="ml-2 hover:text-destructive"
                        onClick={() => removeTechnology(project.id, index)}
                      >
                        <X className="h-3 w-3 md:h-4 md:w-4" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {resumeData.projects.length === 0 && (
          <div className="text-center py-6 text-sm text-muted-foreground">
            No projects added yet. Tap “Add” to get started.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsForm;
