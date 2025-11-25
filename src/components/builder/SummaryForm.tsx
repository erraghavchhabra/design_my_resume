import { useMemo, useEffect } from "react";
import { useResume } from "../../context/ResumeContext";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Plus, Repeat } from "lucide-react";

// ✅ TipTap imports
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

const SummaryForm = () => {
  const { resumeData, updateResumeData } = useResume();

  const suggestions = useMemo(
    () => [
      "Highly-motivated employee with desire to take on new challenges. Strong work ethic, adaptability, and exceptional interpersonal skills. Adept at working effectively unsupervised and quickly mastering new skills.",
      "Hardworking employee with customer service, multitasking, and time management abilities. Devoted to giving every customer a positive and memorable experience.",
      "Outgoing student pursuing flexible part-time employment with weekend and evening shift options.",
      "Committed job seeker with a history of meeting company needs with consistent and organized practices. Skilled in working under pressure and adapting to new situations and challenges to best enhance the organizational brand.",
      "An organized and motivated individual, eager to utilize time management and organizational skills across diverse settings. Seeking entry-level opportunities to enhance abilities while contributing to company growth.",
      "Experienced in fast-paced environments and adaptable to last-minute changes. Thrives under pressure and consistently earns high marks for work quality and speed.",
      "Responsible and motivated student ready to apply education in the workplace. Offers excellent technical abilities with software and applications, ability to handle challenging work, and excellent time management skills.",
      "Dedicated and adaptable professional with a proactive attitude and the ability to learn quickly. Strong work ethic and effective communication skills. Eager to contribute to a dynamic team and support organizational goals.",
      "Recent graduate with excellent research, technical, and problem-solving skills. Detail-oriented and able to learn new concepts quickly.",
    ],
    []
  );

  const handleChange = (value: string) => {
    updateResumeData({
      summary: { content: value },
    });
  };

  // ✅ Initialize TipTap editor
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: resumeData.summary.content,
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  // ✅ Sync editor UI when summary updates (critical fix)
  useEffect(() => {
    if (!editor) return;

    const currentHtml = editor.getHTML();
    if (resumeData.summary.content !== currentHtml) {
      editor.commands.setContent(resumeData.summary.content);
    }
  }, [resumeData.summary.content, editor]);

  const isAdded = (text: string) => {
    return resumeData.summary.content.includes(text);
  };

  const handleAddSuggestion = (text: string) => {
    const current = resumeData.summary.content.trim();

    if (isAdded(text)) return;

    if (!current) {
      handleChange(text);
      return;
    }

    const updated = `${current}<br/><br/>${text}`;
    handleChange(updated);
  };

  const handleReplaceSuggestion = (text: string) => {
    handleChange(text);
  };

  const handleRemoveSuggestion = (text: string) => {
    let updated = resumeData.summary.content.replace(text, "").trim();
    updated = updated.replace(/(<br\s*\/?>\s*){3,}/g, "<br/><br/>");
    handleChange(updated);
  };

  return (
    <div className="space-y-4">
      {/* Heading */}
      <div>
        <p className="text-4xl font-bold mb-1">Craft your summary</p>
        <p className="text-md text-muted-foreground">
          Start with a prewritten option or write your own. Edit as needed, then
          use <span className="font-semibold">Enhance with AI</span> to polish
          it.
        </p>
      </div>

      {/* Main container */}
      <div className="mt-2 rounded-2xl bg-[#F7F7FB] p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* LEFT SIDE — Suggestions */}
          <div className="flex flex-col h-full">
            <p className="text-sm font-semibold mb-3">Prewritten options</p>

            <div className="flex-1 max-h-[360px] overflow-y-auto custom_scrollbar pr-2 space-y-4">
              {suggestions.map((item, idx) => {
                const added = isAdded(item);

                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border shadow-sm px-4 py-3 text-sm leading-5 flex flex-col justify-between"
                  >
                    <p className="mb-3">{item}</p>

                    <div className="flex justify-end gap-2">
                      {added ? (
                        <Button
                          type="button"
                          size="sm"
                          className="rounded-full bg-gray-200 text-gray-700 h-7 hover:bg-gray-300 px-4 py-1 text-xs font-semibold"
                          onClick={() => handleRemoveSuggestion(item)}
                        >
                          — Remove
                        </Button>
                      ) : (
                        <>
                          <Button
                            type="button"
                            size="sm"
                            className="rounded-full h-7"
                            variant="outline"
                            onClick={() => handleReplaceSuggestion(item)}
                          >
                            <Repeat size={15} /> Replace
                          </Button>

                          <Button
                            type="button"
                            size="sm"
                            className="rounded-full bg-amber-400 text-black hover:bg-amber-500 px-4 py-1 h-7 text-xs font-semibold"
                            onClick={() => handleAddSuggestion(item)}
                          >
                            <Plus size={15} /> Add
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE — TipTap Editor */}
          <div className="flex flex-col h-full">
            <Label className="text-sm font-semibold mb-2">Summary</Label>

            <div
              className="flex flex-col bg-white rounded-xl border shadow-sm h-full overflow-hidden"
              onClick={() => editor?.chain().focus().run()}
            >
              {/* Toolbar */}
              <div className="flex items-center gap-2 border-b px-3 py-2 text-sm">
                <button
                  type="button"
                  className="px-2 py-1 rounded hover:bg-gray-100 font-semibold"
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                >
                  B
                </button>
                <button
                  type="button"
                  className="px-2 py-1 rounded hover:bg-gray-100 italic"
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                >
                  I
                </button>
                <button
                  type="button"
                  className="px-2 py-1 rounded hover:bg-gray-100 underline"
                  onClick={() => editor?.chain().focus().toggleUnderline?.().run()}
                >
                  U
                </button>
              </div>

              {/* Editor area */}
              <EditorContent
                editor={editor}
                className="min-h-[230px] px-3 py-3 text-sm tiptap-editor h-full"
              />
            </div>

            <p className="mt-1 text-xs text-muted-foreground text-right">
              {resumeData.summary.content.replace(/<[^>]+>/g, "").length}{" "}
              characters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryForm;
