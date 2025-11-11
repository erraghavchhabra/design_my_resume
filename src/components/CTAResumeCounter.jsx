// CTAResumeCounter.jsx
import React, { useEffect, useState } from "react";

const CTAResumeCounter = () => {
  const [count, setCount] = useState(0);
  const target = 496;
  const duration = 1500; // ms

  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 1);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center pt-10 py-16">
      {/* Card container */}
      <div className="relative bg-[#122e50] text-white rounded-2xl shadow-xl px-10 py-12 max-w-5xl w-full text-center overflow-hidden">
        {/* Decorative vector shapes */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg
            className="absolute -top-10 -left-10 w-56"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M43.6,-33.9C56.6,-20.2,67.5,-5.1,66.6,9.3C65.7,23.8,52.9,37.7,37.2,46.1C21.6,54.4,3.9,57.1,-11.9,52.7C-27.7,48.4,-41.6,36.9,-50.7,22.8C-59.8,8.7,-64,-7,-57.7,-20C-51.3,-33,-34.5,-43.2,-17.1,-48.3C0.3,-53.4,17.9,-53.5,33.6,-46.8C49.4,-40.2,62.1,-26.9,43.6,-33.9Z"
              transform="translate(100 100)"
            />
          </svg>

          <svg
            className="absolute -bottom-16 -right-16 w-64 rotate-12"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="80" fill="#ffffff" />
          </svg>
        </div>

        {/* Counter text */}
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-white">{count}</span>{" "}
            Resumes Are Being Created On Design My Resume
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CTAResumeCounter;
