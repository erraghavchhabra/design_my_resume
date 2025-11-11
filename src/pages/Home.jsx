import React from "react";
import Hero from "../components/Hero";
import GenerateBullet from "../components/GenerateBullet";
import { ProcessStep } from "../components/ProcessStep";
import VideoSec from "../components/VideoSec";
import TestimonialSlider from "../components/TestimonialSlider";
import CalltoAction from "../components/CalltoAction";
import Features from "../components/Features";
import BuilderBg from "../assets/img/left-right-bg.svg";
import { ChooseTemplate } from "../components/ChooseTemplate";
import PeopleSaying from "../components/PeopleSaying";
import { ExampleTemplate } from "../components/ExampleTemplate";
import CTAResumeCounter from "../components/CTAResumeCounter";
import BlogSection from "../components/BlogSection";
import FAQSection from "../components/FAQSection";
import FooterCTA from "../components/FooterCTA";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
        style={{ backgroundImage: `url(${BuilderBg})` }}
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
