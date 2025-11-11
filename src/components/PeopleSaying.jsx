// PeopleSaying.jsx
import React from "react";
import image1 from "../assets/img/user1.png";
import image2 from "../assets/img/user2.png";
const testimonials = [
  {
    name: "Sarah Johnson",
    image: image2,
    text: "This service completely exceeded my expectations! The experience was seamless and delightful from start to finish.",
  },
  {
    name: "James Carter",
    image: image1,
    text: "Absolutely phenomenal! I’ve never encountered such professionalism and quality before. Highly recommended.",
  },
  {
    name: "Emily Davis",
    image: image2,
    text: "I’m genuinely impressed. The attention to detail and customer care really made me feel valued. I’ll definitely return!",
  },
];

const PeopleSaying = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="mb-10 text-3xl font-bold leading-none tracking-tight text-indigo-600 sm:text-4xl">
          What People Are Saying About Our Resume Maker
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-20 h-20 rounded-full mx-auto object-cover mb-4 border-4 border-indigo-100"
              />
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                {person.name}
              </h3>
              <p className="text-gray-800 text-l leading-relaxed">
                “{person.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleSaying;
