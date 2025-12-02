import React from "react";
import HomeLayout from "../../layout/HomeLayout";
import { Button } from "../../components/ui/button";
import { ProcessStep } from "../../components/home/ProcessStep";
import TestimonialSlider from "../../components/home/TestimonialSlider";
import { Link } from "react-router-dom";
const Star = () => (
  <span className="text-white text-sm bg-[#00B67A] rounded w-5 h-5 flex items-center justify-center">
    ★
  </span>
);
function CvMaker() {
  return (
    <HomeLayout>
      <section className="py-8 md:py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">
          {/* Left Image */}
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <img
              src="/assets/img/cv-maker-hero-img.png"
              alt="CV Preview"
              className="w-full max-w-[500px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-4xl lg:text-5xl font-boldMake a Resume That Gets Resu leading-tight">
              Online CV Maker{" "}
              <span className="font-semibold">(Fast & Free to Use)</span>
            </p>

            <p className="text-lg text-gray-700 mt-5 max-w-[520px] mx-auto lg:mx-0">
              Our online CV Maker simplifies the writing process with suggested
              content based on your personal skills and experience. It’s fast,
              easy, and free to use, so try it today!
            </p>

            <p className="text-sm text-gray-600 mt-4">
              Last Updated: <strong>September 04, 2025</strong>
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
        </div>
      </section>
      <ProcessStep />
      <TestimonialSlider />
    </HomeLayout>
  );
}

export default CvMaker;
