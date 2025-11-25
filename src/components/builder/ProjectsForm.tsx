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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-bold mb-1">Projects</p>
          <p className="text-md text-muted-foreground">
            Showcase your personal and professional projects
          </p>
        </div>
        <Button onClick={addProject} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>

      <div className="space-y-4">
        {resumeData.projects.map((project: any) => (
          <div key={project.id} className="rounded-2xl bg-[#F7F7FB] p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">Project Entry</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeProject(project.id)}
                  className="h-8 w-8"
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Project Title</Label>
                <Input
                  value={project.title}
                  onChange={(e) =>
                    updateProject(project.id, "title", e.target.value)
                  }
                  placeholder="E-commerce Platform"
                />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={project.description}
                  onChange={(e) =>
                    updateProject(project.id, "description", e.target.value)
                  }
                  className="resize-none"
                  placeholder="Describe what the project does and your role..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Link (Optional)</Label>
                <Input
                  value={project.link}
                  onChange={(e) =>
                    updateProject(project.id, "link", e.target.value)
                  }
                  placeholder="https://github.com/username/project"
                />
              </div>

              <div className="space-y-2">
                <Label>Technologies Used</Label>
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
                  />
                  <Button
                    size="sm"
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
                        className="px-2 py-1"
                      >
                        {tech}
                        <button
                          onClick={() => removeTechnology(project.id, index)}
                          className="ml-2 hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {resumeData.projects.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No projects added yet. Click "Add" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsForm;
