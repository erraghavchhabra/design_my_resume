import { useState, useMemo } from "react";
import { useResume } from "../../context/ResumeContext";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus, Minus, Search, X } from "lucide-react";

const interestSuggestions = [
  "Photography",
  "Traveling",
  "Reading",
  "Cooking",
  "Gardening",
  "Hiking",
  "Writing",
  "Painting",
  "Music",
  "Dancing",
  "Blogging",
  "Volunteering",
  "Fitness",
  "Gaming",
  "Cycling",
  "Meditation",
  "Yoga",
  "Podcasting",
  "Collecting",
  "Movies & TV",
  "Fashion",
  "Public Speaking",
  "Chess",
  "Crafting",
  "DIY Projects",
  "Animal Care",
  "Sports",
];

const InterestsForm = () => {
  const { resumeData, updateResumeData } = useResume();
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return interestSuggestions.filter((interest) =>
      interest.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const addInterest = (interest: string) => {
    if (
      !resumeData.interests.some(
        (i: any) => i.name.toLowerCase() === interest.toLowerCase()
      )
    ) {
      updateResumeData({
        interests: [
          ...resumeData.interests,
          { id: Date.now().toString(), name: interest },
        ],
      });
    }
  };

  const removeInterest = (name: string) => {
    updateResumeData({
      interests: resumeData.interests.filter((i: any) => i.name !== name),
    });
  };

  const isAdded = (interest: string) =>
    resumeData.interests.some(
      (i: any) => i.name.toLowerCase() === interest.toLowerCase()
    );

  return (
    <div className="space-y-4">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-2xl md:text-4xl font-bold mb-1">
            Interests & Hobbies
          </p>
          <p className="text-sm md:text-md text-muted-foreground">
            Share your personal interests — it helps employers connect with you!
          </p>
        </div>
      </div>

      {/* Main Box */}
      <div className="rounded-2xl bg-[#F7F7FB] p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT — Suggestions */}
          <div className="flex flex-col h-full">
            <div className="relative mb-3 md:mb-4">
              <Input
                placeholder="Search interests..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 text-xs md:text-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            {search && (
              <p className="text-xs md:text-sm text-muted-foreground mb-2">
                Showing {filtered.length} results for{" "}
                <span className="font-semibold">{search}</span>
              </p>
            )}

            <div className="flex-1 max-h-[360px] overflow-y-auto space-y-2 md:space-y-3 custom_scrollbar pr-2">
              {filtered.map((interest) => {
                const added = isAdded(interest);

                return (
                  <div
                    key={interest}
                    className="flex items-center justify-between rounded-full px-3 py-2 border shadow-sm bg-white text-xs md:text-sm"
                  >
                    <span>{interest}</span>

                    {added ? (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-600 h-6 w-6 md:h-7 md:w-7 hover:bg-gray-100 rounded-full p-0"
                        onClick={() => removeInterest(interest)}
                      >
                        <Minus size={14} />
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="bg-amber-300 h-6 w-6 md:h-7 md:w-7 hover:bg-amber-400 text-black rounded-full p-0"
                        onClick={() => addInterest(interest)}
                      >
                        <Plus size={14} />
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Selected Interests */}
          <div className="flex flex-col h-full">
            <Label className="text-xs md:text-sm font-semibold mb-2">
              Your Interests
            </Label>

            <div className="bg-white rounded-xl border shadow-sm min-h-[200px] p-4 md:p-5">
              {resumeData.interests.length > 0 ? (
                <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
                  {resumeData.interests.map((interest: any) => (
                    <li
                      key={interest.id}
                      className="flex items-center gap-2 border rounded-full px-3 py-1 h-7 md:h-8"
                    >
                      <span>{interest.name}</span>

                      <button
                        onClick={() => removeInterest(interest.name)}
                        className="transition text-gray-500 hover:text-red-500"
                      >
                        <X size={12} />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs md:text-sm text-muted-foreground">
                  No interests added yet. Select interests from left panel.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestsForm;
