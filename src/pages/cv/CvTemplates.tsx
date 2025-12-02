import React from "react";
import HomeLayout from "../../layout/HomeLayout";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import ModernTemplate from "../../components/resume/ModernTemplate";
import ClassicTemplate from "../../components/resume/ClassicTemplate";
import CreativeTemplate from "../../components/resume/CreativeTemplate";
import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import { useResume } from "../../context/ResumeContext";
import TestimonialSlider from "../../components/home/TestimonialSlider";
import { FaStar, FaDesktop, FaStopwatch } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import FAQSection from "../../components/home/FAQSection";
const Star = () => (
  <span className="text-white text-sm bg-[#00B67A] rounded w-5 h-5 flex items-center justify-center">
    ★
  </span>
);
function CvTemplates() {
  const { resumeData, updateResumeData, setTemplate, setThemeColor } =
    useResume();
  const templates = [
    { id: "modern", name: "Modern", preview: ModernTemplate },
    { id: "classic", name: "Classic", preview: ClassicTemplate },
    { id: "creative", name: "Creative", preview: CreativeTemplate },
  ];
  const themeColors = [
    { name: "Indigo", value: "#4F46E5" }, // modern + professional
    { name: "Blue", value: "#2563EB" }, // clean corporate blue
    { name: "Navy", value: "#1E3A8A" }, // deep premium resume color
    { name: "Teal", value: "#0D9488" }, // fresh, modern design
    { name: "Maroon", value: "#7F1D1D" }, // bold, classy, serious
    { name: "Purple", value: "#9333EA" }, // elegant + standout
    { name: "Slate", value: "#475569" }, // neutral modern gray-blue
    { name: "Sky Blue", value: "#0EA5E9" }, // bright highlight color
    { name: "Gold", value: "#B45309" }, // premium highlight gold
    { name: "Green", value: "#16A34A" }, // subtle success color
  ];
  const faqs = [
    {
      question: "How do you write a CV with no experience?",
      answer:
        "If you feel you don’t have experience to add to your CV, don’t worry. You have more experience than you think! For example, let’s suppose you are a graduate student applying for a research position at a university. In that case, you can list your graduate thesis, fellowships, grants, honors and awards, teaching experience, research skills, community involvement, presentations, volunteer activities, certifications, professional affiliations, and student activities or offices held. Regardless, we offer many CV templates for students, which you can build section by section in our CV maker with plenty of advice along the way.",
    },
    {
      question: "How do you write achievements on a CV?",
      answer:
        "Always weave your accomplishments throughout your CV. If you’re a lawyer, then publications, conference presentations, and community service achievements might be considered accomplishments. Be sure to quantify specific achievements, such as “Organized and managed a citywide campaign to raise funds for youth services that was valued at $3.5 million.” Also, be sure to call out any honors or awards you have received under their own section.",
    },
    {
      question: "Can you use bullet points on a CV?",
      answer:
        "Yes. In fact, bullet points are a must on a curriculum vitae. Use bullet points to organize your experience section, projects, and qualifications. Bullet points make your content easy to read at a glance and help ensure that you’re communicating concisely and effectively.",
    },
    {
      question: "Which template is best for a CV?",
      answer:
        "No single template is best. That’s why we suggest checking out many examples of CV templates before you pick one. When you look through our collection of free CV templates, download a style that will draw attention to your strengths while keeping your work experience, industry, and career goals top of mind. All our templates are customizable, so you can tailor them to each job you apply for. Choosing from many editable CV templates for free download can reinvigorate your job search.",
    },
    {
      question: "How do you set up a curriculum vitae?",
      answer:
        "To set up a CV, select one of our customizable templates to organize your job qualifications appropriately, and then go into our easy-to-use CV Maker to set up a professional, HR-approved document in no time.",
    },
    {
      question: "Is there a CV template in Word?",
      answer:
        "Absolutely! All of our free CV templates are in Word document format when you click to download. In addition to getting Word CV templates for free, you can download any of our premium templates in Word from inside the builder.",
    },
    {
      question: "How far back should a CV go?",
      answer:
        "Your CV should typically go back 10-15 years in terms of work experience. This timeframe is generally sufficient to demonstrate your qualifications and career progression. However, if you have relevant experience that is older than this, it can be included, especially if it adds significant value to your application. Academic and research CVs may go back further to include all relevant experiences and publications.",
    },
  ];
  return (
    <HomeLayout>
      <section className="py-8 md:py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-4xl lg:text-5xl font-boldMake a Resume That Gets Resu leading-tight">
              Free CV Templates for Your 2025 Job Search
            </p>

            <p className="text-lg text-gray-700 mt-5 max-w-[520px] mx-auto lg:mx-0">
              Select an ATS-friendly CV template, use it on any device, and get
              more interviews. Download one of five free templates in Word and
              Google Docs.
            </p>

            <Button size="lg" className="rounded-full mt-8" asChild>
              <Link to="/resume-loading">Create your CV</Link>
            </Button>

            {/* Rating */}
            <div className="flex flex-col mt-10 md:flex-row items-center justify-center md:justify-start gap-3 p-6 py-3 bg-[#E8ECF8] rounded-md">
              <h3 className="text-2xl font-bold">Excellent</h3>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Based on <span className="font-semibold">14,874 reviews</span>
              </p>
              <img
                src="/assets/svg/trustpilot.svg"
                alt="Trustpilot"
                className="w-24 md:w-28"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-end w-full lg:w-1/2">
            <img
              src="/assets/img/cv-maker-hero-img.png"
              alt="CV Preview"
              className="w-full max-w-[500px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
      {/* Template Selection */}
      <div className="container md:pb-5 px-8">
        <div className="flex   justify-center md:pb-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8  w-full">
            {templates.map((template) => (
              <motion.div
                key={template.id}
                // whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={` group transition-all relative duration-400 hover:shadow-2xl`}
                >
                  <div className="aspect-[3/4]  bg-muted rounded-sm md:rounded-md flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 transform scale-[0.20] md:scale-[0.48] origin-top-left pointer-events-none w-full">
                      <div className="w-[800px] h-[1100px] bg-white shadow-sm rounded-lg overflow-hidden">
                        <template.preview data={resumeData} />
                      </div>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="max-md:text-xs absolute bottom-5 md:bottom-10 left-2/4 -translate-x-2/4 rounded-full max-w-48 max-md:h-8 md:w-full"
                  >
                    <Link to="/resume-loading">
                      Choose <span className="max-md:hidden">template</span>
                    </Link>
                  </Button>
                  {/* <p className="text-center font-medium mt-2">
                    {template.name}
                  </p> */}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-10 items-center gap-2 bg-[#E8ECF8] rounded-md p-4 ">
          {themeColors?.map((color) => (
            <motion.button
              key={color.value}
              //   whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setThemeColor(color.value);
              }}
              onMouseOver={() => {
                setThemeColor(color.value);
              }}
              className={`w-full h-10 rounded-xl transition-all ${
                resumeData?.themeColor === color.value
                  ? "ring-1 ring-primary ring-offset-2"
                  : "hover:ring-1 hover:ring-muted-foreground"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>
      <TestimonialSlider />
      <section className="mt-2 py-16">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 leading-snug">
            Why Job Seekers Love Our <br />
            Curriculum Vitae Templates
          </h2>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Card 1 */}
            <div className="flex items-start gap-5">
              <div className="bg-blue-100 rounded-full p-4 text-blue-600">
                <FaStar size={40} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Free and premium options
                </h3>
                <p className="text-gray-700">
                  Browse a wide range of recruiter-approved CV templates, each
                  designed to give you the edge in a competitive market.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-5">
              <div className="bg-orange-100 rounded-full p-4 text-orange-500">
                <FaDesktop size={40} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Formatted for any screen
                </h3>
                <p className="text-gray-700">
                  Say goodbye to formatting hassles. Our templates work on every
                  device and auto-reformat for you.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-5">
              <div className="bg-green-100 rounded-full p-4 text-green-500">
                <MdPersonSearch size={40} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tailored to you</h3>
                <p className="text-gray-700">
                  Easily personalize each template with ready-to-use phrases you
                  can edit in a single click to fit your skills.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-start gap-5">
              <div className="bg-purple-100 rounded-full p-4 text-purple-500">
                <FaStopwatch size={40} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Quality done quickly
                </h3>
                <p className="text-gray-700">
                  Speed up your job search with a{" "}
                  <Link to="/cv-maker" className="text-blue-600 underline">
                    CV Maker
                  </Link>{" "}
                  that helps you create a professional CV in minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-20 ">
        <div className="absolute rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-0 blur-2xl  w-56 h-56 bg-gradient-to-br from-orange-50 via-white to-orange-100"></div>

        <div className="container px-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 leading-tight">
            What Users Say About Our CV <br className="hidden md:block" />
            Templates
          </h2>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 max-w-5xl mx-auto relative">
            <div className="absolute rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-0 blur-2xl opacity-50  max-w-xl w-full h-96 bg-gradient-to-br from-orange-100 to-orange-100"></div>

            {/* Cards */}
            {[
              {
                names: "Joy-Lynn Abplanalp, Clinical Nursing Tutor",
                title:
                  "Easy-to-use templates that give you ideas on how to structure and format your CV. Affordable and written quickly with the tool provided.",
              },
              {
                names: "Tiffany Colina-Lloyd, Registered Nurse",
                title:
                  "Great help for making CVs and cover letters. It is automated, making it easy to find the right words. I got my job of choice.",
              },
              {
                names: "Roxanne B. Mendoza, Registered Nurse",
                title:
                  "The templates are easy to use and easy to customize. I was able to make a CV that I was proud of.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md p-6 relative"
              >
                <div className="h-4 w-full bg-[#21006B] absolute left-0 top-0 rounded-t-3xl"></div>
                <h3 className="font-bold mt-6">{item.names}</h3>
                <p className="text-gray-700 mt-3">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqsData={faqs} mainHeading="CV Templates FAQ" />
    </HomeLayout>
  );
}

export default CvTemplates;
