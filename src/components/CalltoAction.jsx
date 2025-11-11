import React from "react";
import { BsMagic } from "react-icons/bs";
import CTA from "../assets/img/cta.jpg";

export default function CalltoAction() {
  return (
    <section className="relative max-w-6xl py-8 bg-indigo-100 rounded-3xl w-full flex flex-col justify-between items-center  mx-auto ">
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-32 h-32 border-2 border-primary/20 rounded-lg rotate-12 animate-pulse" />
        <div className="absolute bottom-32 left-1/3 w-24 h-24 border-2 border-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary/10 rounded-lg rotate-45" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                Trusted by Millions
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                43,000,000+
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-3xl font-semibold text-foreground/90 leading-relaxed">
              Resumes Made with{" "}
              <span className="text-primary">Design My Resume</span>
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Join millions of professionals who have successfully landed their dream jobs with our powerful resume builder.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10">
              {/* Decorative elements around image */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-lg rotate-12 blur-sm" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-sm" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border-4 border-background bg-gradient-to-br from-primary/5 to-accent/5 p-2">
                <img
                  src={CTA}
                  alt="Resume Success"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-background border-2 border-primary/20 rounded-xl px-4 py-3 shadow-lg animate-pulse">
                <div className="text-sm font-semibold text-primary">✓ ATS Optimized</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-background border-2 border-accent/20 rounded-xl px-4 py-3 shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
                <div className="text-sm font-semibold text-accent">⚡ 5 Min Setup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
