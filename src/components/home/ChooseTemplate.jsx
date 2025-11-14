import { FaSearch } from "react-icons/fa";

const templates = [
  {
    id: 1,
    title: "Creative resume templates",
    img: "/assets/img/r1.webp", // ✅ use the variable, not string
  },
  {
    id: 2,
    title: "Simple resume templates",
    img: "/assets/img/r2.webp",
  },
  {
    id: 3,
    title: "Modern resume templates",
    img: "/assets/img/r3.webp",
  },
];

export const ChooseTemplate = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-6 py-12 sm:py-16 lg:py-20">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="mb-6 text-3xl font-bold leading-none tracking-tight text-indigo-600 sm:text-4xl">
          Choose Your Professional Template
        </h2>
        <p className="text-lg text-gray-700">
          Select one of the{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            resume templates
          </a>{" "}
          below. Fill it in with AI-generated text inspired by your work experience.
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div key={template.id} className="group relative">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src={template.img}
                alt={template.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold">
                  Build Your Resume Now
                </button>
              </div>

              {/* Always Visible Search Button */}
              <button className="absolute bottom-3 right-3 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100 transition">
                <FaSearch />
              </button>
            </div>

            {/* Link Below */}
            <a
              href="#"
              className="block text-center text-xl mt-4 text-indigo-600 font-medium hover:underline"
            >
              {template.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
