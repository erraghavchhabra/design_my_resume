import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

const loadingItems = [
  "32+ Professional Resume Designs",
  "100,000+ Pre-Written Phrases",
  "15,000+ Job Titles",
  "9 Template Color Options",
];

export default function ResumeLoading() {
  const token = Cookies.get("user_token");

  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(-1);

  // Step by step line activate karo
  useEffect(() => {
    let current = 0;

    // start thoda delay se
    const startTimeout = setTimeout(() => {
      setActiveIndex(0);
      const interval = setInterval(() => {
        current++;
        if (current < loadingItems.length) {
          setActiveIndex(current);
        } else {
          clearInterval(interval);
        }
      }, 500); // har step ka gap
    }, 400);

    return () => clearTimeout(startTimeout);
  }, []);

  // Last me next page pe jao
  useEffect(() => {
    const timer = setTimeout(() => {
      if (token) {
        navigate("/resume-dashboard");
      } else {
        navigate("/resume-intro");
      }
    }, 2800); // total animation ke baad
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen container relative  ">
      <div className="flex justify-center items-center md:justify-start mt-10  z-20">
        <img src="/assets/svg/logo.svg" className=" w-32" alt="logo" />
      </div>
      <div className="pointer-events-none z-0 absolute top-5 md:top-40 -left-32 h-40 w-40 md:h-96 md:w-96 rounded-full bg-[#FDE4C8] blur-3xl opacity-60" />
      <div className="pointer-events-none z-0 absolute -top-10 left-48 h-40 w-40  md:h-80 md:w-80 rounded-full bg-[#b29cdf] blur-[90px] opacity-50" />
      <div className="pointer-events-none z-0 absolute top-3/4 md:top-2/4 max-md:left-0 md:right-20  h-40 w-40  md:h-[420px] md:w-[420px] rounded-full bg-[#DDE6FF] blur-[64px] opacity-70" />
      <div className="flex flex-col items-center justify-center gap-8 text-center mt-10 md:mt-20">
        {/* Top icon + loading text */}
        <div className="animate-pulse z-10">
          <div className="w-10 h-14 border-2 border-gray-700 mx-auto rounded" />
          <p className="mt-4 text-lg font-semibold">Loading...</p>
        </div>

        {/* Lines */}
        <ul className="space-y-4 text-left z-10">
          {loadingItems.map((text, i) => {
            const isActive = i <= activeIndex; // jo animate ho chuka ya ho raha
            const isCompleted = i < activeIndex; // pichle steps

            return (
              <li
                key={i}
                className={`flex items-center gap-3 transition-opacity duration-200 ${
                  !isActive ? "opacity-40" : "opacity-100"
                }`}
              >
                {/* Circle + animated check */}
                <motion.div
                  className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                  initial={false}
                  animate={{
                    backgroundColor: isActive ? "#bbf7d0" : "transparent",
                    borderColor: isActive ? "#16a34a" : "#9ca3af",
                    scale: isActive ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.1 }}
                >
                  {/* Check line draw animation */}
                  <motion.svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    initial={false}
                  >
                    <motion.path
                      d="M5 13l4 4L19 7"
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: isActive ? 1 : 0 }}
                      transition={{
                        duration: 0.05,
                        delay: isActive ? 0.1 : 0,
                      }}
                    />
                  </motion.svg>
                </motion.div>

                {/* Text animation (thoda slide-in) */}
                <motion.span
                  initial={{ x: -10, opacity: 0 }}
                  animate={{
                    x: isActive ? 0 : -10,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.1 }}
                >
                  {text}
                </motion.span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
