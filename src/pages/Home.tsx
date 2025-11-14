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
export default function Home() {
  return (
    <>
      <Navbar />

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
      <FAQSection />
      <FooterCTA />
      <Footer />
    </>
  );
}
