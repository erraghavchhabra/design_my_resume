// FAQSection.jsx
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is a resume builder?",
    answer:
      "A resume builder is an online tool that helps you quickly create a professional resume using templates and guided prompts. It eliminates formatting hassles and ensures your resume looks polished.",
  },
  {
    question:
      "What’s unique about using Resume Now’s AI Resume Builder to create my resume?",
    answer:
      "Resume Now’s AI Resume Builder provides smart content suggestions based on your experience and job title, helping you write powerful bullet points that get attention from recruiters.",
  },
  {
    question: "Is Resume Now’s Resume Builder free to use?",
    answer:
      "You can build and preview your resume for free. Some premium templates and download features may require a small upgrade, but you can start creating right away without payment.",
  },
  {
    question: "Can an AI make my resume?",
    answer:
      "Yes! Our AI can analyze your background and generate professional resume content tailored to your career goals, saving you time and improving your chances of getting noticed.",
  },
  {
    question: "Is there a free AI resume builder tool?",
    answer:
      "Yes. Resume Now offers a free AI resume builder where you can start creating or improving your resume instantly with intelligent, pre-written examples.",
  },
  {
    question: "Are your resumes ATS-friendly?",
    answer:
      "Absolutely. All templates are optimized to pass Applicant Tracking Systems (ATS), ensuring your resume gets read by real recruiters.",
  },
  {
    question: "Can I create a CV in your resume maker?",
    answer:
      "Yes. You can create a traditional CV or an academic CV with custom sections like publications and research, using our professional templates.",
  },
  {
    question: "Is it OK to use an online resume builder?",
    answer:
      "Definitely. Online resume builders make it faster and easier to create high-quality resumes that employers love. It’s a smart and widely accepted approach.",
  },
  {
    question: "Can your resume creator help me if I’m new to the workforce?",
    answer:
      "Yes! Our builder includes tailored examples for students and first-time job seekers so you can emphasize your skills, education, and potential.",
  },
  {
    question: "Can I create a cover letter with this resume generator?",
    answer:
      "Yes, you can generate a cover letter that matches your resume style, giving your application a professional and cohesive look.",
  },
  {
    question: "I can’t finish my resume right now. Will you save my work?",
    answer:
      "Yes, your progress is saved automatically when you sign in. You can return anytime to continue from where you left off.",
  },
  {
    question:
      "I’ve finished my resume. How can I download, print, and email it?",
    answer:
      "Once complete, you can download your resume as a PDF, print it, or send it directly to employers from your dashboard.",
  },
  {
    question: "Where can I get support from the Resume Now team?",
    answer:
      "Our support team is available 7 days a week through live chat, email, and our Help Center to assist with any questions.",
  },
  {
    question: "How can I protect myself from job scams?",
    answer:
      "Always apply through trusted sources, be cautious of unrealistic offers, and never share personal information or send money to employers.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Answers to common questions about Resume Now’s AI-powered resume
            builder and tools.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
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
