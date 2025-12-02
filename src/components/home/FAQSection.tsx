// FAQSection.jsx
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = ({
  faqsData = [],
  mainHeading,
  description,
}: {
  faqsData: any[];
  mainHeading?: string;
  description?: string;
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-20 px-6 sm:px-10 lg:px-16">
      {/* Background Gradient + Vectors */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-indigo-100"></div>
      <div className="absolute -top-20 -left-32 w-96 h-96 bg-indigo-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-indigo-300 opacity-40 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          {mainHeading && (
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">
              {mainHeading}
            </h2>
          )}
          {description && (
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqsData?.map((faq: any, index: number) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-2xl  shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center text-left px-6 py-5 sm:py-4 transition-all"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-800 text-base sm:text-lg pr-4">
                  {faq.question}
                </span>
                <div className="text-indigo-600 flex-shrink-0 transition-transform duration-300">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              {/* Animated Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
