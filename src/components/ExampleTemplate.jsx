import React from "react";
import { FaSearch } from "react-icons/fa";
import R1 from "../assets/img/r1.webp";
import R2 from "../assets/img/r2.webp";
import R3 from "../assets/img/r3.webp";
import R4 from "../assets/img/r4.webp";
const Exampletemplates = [
  {
    id: 1,
    title: "Teacher Resume",
    img: R1,
  },
  {
    id: 2,
    title: "College Resume",
    img: R2,
  },
  {
    id: 3,
    title: "Registered Nurse Resume",
    img: R3,
  },
  {
    id: 4,
    title: "Admin Resume",
    img: R4, 
  },
];

export const ExampleTemplate = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-6 py-12 sm:py-16 lg:py-20">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="mb-6 text-3xl font-bold leading-none  text-indigo-600 sm:text-4xl">
        Find Inspiration in Real-World Examples
        </h2>
        <p className="text-lg text-gray-700">
         Browse <span>{" "} </span>
           <a href="#" className="text-indigo-600 hover:underline">
            100+ popular resume examples
          </a>{" "}
        covering all types of jobs, industries and levels of experience. Every example has been reviewed and approved by a Certified Professional Resume Writer (CPRW).


        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Exampletemplates.map((template) => (
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
