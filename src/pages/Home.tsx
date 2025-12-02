import Hero from "../components/home/Hero";
import GenerateBullet from "../components/home/GenerateBullet";
import { ProcessStep } from "../components/home/ProcessStep";
import VideoSec from "../components/home/VideoSec";
import TestimonialSlider from "../components/home/TestimonialSlider";
import CalltoAction from "../components/home/CalltoAction";
import Features from "../components/home/Features";
import { ChooseTemplate } from "../components/home/ChooseTemplate";
import PeopleSaying from "../components/home/PeopleSaying";
import { ExampleTemplate } from "../components/home/ExampleTemplate";
import CTAResumeCounter from "../components/home/CTAResumeCounter";
import BlogSection from "../components/home/BlogSection";
import FAQSection from "../components/home/FAQSection";
import FooterCTA from "../components/home/FooterCTA";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import HomeLayout from "../layout/HomeLayout";
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
export default function Home() {
  return (
    <HomeLayout headerClassName="fixed" footerTopSpace={true}>
      <Hero />
      <GenerateBullet />
      <div className="tab-sec relative">
        <ProcessStep />
        <VideoSec />
      </div>
      <TestimonialSlider />
      <CalltoAction />
      <ChooseTemplate />
      <div
        className="bg-cover ms-feature relative bg-fixed bg-top bg-no-repeat"
        style={{ backgroundImage: `url("/assets/svg/left-right-bg.svg")` }}
      >
        <Features />
      </div>
      <PeopleSaying />
      <ExampleTemplate />
      <CTAResumeCounter />
      <BlogSection />
      <FAQSection
        faqsData={faqs}
        mainHeading="Frequently Asked Questions"
        description="Answers to common questions about Resume Now’s AI-powered resume
            builder and tools."
      />
      <FooterCTA />
    </HomeLayout>
  );
}
