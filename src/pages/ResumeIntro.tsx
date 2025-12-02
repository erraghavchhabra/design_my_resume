import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { MdCheck } from "react-icons/md";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DownloadCloud, FileText, PencilLine } from "lucide-react";
const Star = () => (
  <span className="text-white text-sm bg-[#00B67A] rounded w-5 h-5 flex items-center justify-center">
    ★
  </span>
);
function ResumeIntro() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const steps = [
    {
      title: "Pick a template",
      icon: FileText,
      points: ["ATS friendly", "Flexible layouts", "Industry matching"],
    },
    {
      title: "Add content with AI",
      icon: PencilLine,
      points: ["Smart prompts", "Expert language", "Tailored wording"],
    },
    {
      title: "Download & send",
      icon: DownloadCloud,
      points: ["PDF & DOCX", "Instant profile", "Unlimited versions"],
    },
  ];
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i < steps.length) setActive(i);
      else clearInterval(interval);
    }, 1100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative  ">
      <div className="pointer-events-none z-0 absolute top-5 md:top-40 -left-32 h-40 w-40 md:h-96 md:w-96 rounded-full bg-[#FDE4C8] blur-3xl opacity-60" />
      <div className="pointer-events-none z-0 absolute -top-10 left-48 h-40 w-40  md:h-80 md:w-80 rounded-full bg-[#b29cdf] blur-[90px] opacity-50" />
      <div className="pointer-events-none z-0 absolute top-3/4 md:top-2/4 max-md:left-0 md:right-20  h-40 w-40  md:h-[420px] md:w-[420px] rounded-full bg-[#DDE6FF] blur-[64px] opacity-70" />
      <div className="container  mx-auto pt-20  z-20">
        <div className="w-full flex items-center justify-center md:justify-start">
          <Link to="/" className="w-32">
            <img src="/assets/svg/logo.svg" className="w-32" alt="logo" />
          </Link>
        </div>
        <div className="flex items-center flex-col gap-5 z-10 relative mt-10 md:mt-20">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Here’s how we get you hired
          </h1>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8 w-full ">
            {steps.map((s, idx) => {
              const isVisible = idx <= active;
              const Icon = s.icon;
              return (
                <motion.div
                  key={idx}
                  className="border p-6 rounded-xl shadow-md bg-white relative"
                  initial={{ opacity: 0.3, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0.3,
                    y: isVisible ? 0 : 8,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Progress Line */}
                  <motion.div className="h-1 w-full bg-gray-200 rounded-full mb-6 overflow-hidden">
                    <motion.div
                      className="h-full bg-green-300"
                      initial={{ width: 0 }}
                      animate={{ width: isVisible ? "100%" : "0%" }}
                      transition={{ duration: 0.85, ease: "easeInOut" }}
                    />
                  </motion.div>

                  {/* Icon */}
                  {/* Animated Icon */}
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0.4 }}
                    animate={{
                      scale: isVisible ? 1 : 0.85,
                      opacity: isVisible ? 1 : 0.4,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon
                      size={40}
                      strokeWidth={1.8}
                      className="text-gray-800 mb-4"
                    />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="font-bold text-2xl mb-4"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {s.title}
                  </motion.h3>

                  {/* Points */}
                  <ul className="space-y-2 text-gray-700">
                    {isVisible &&
                      s.points.map((p, i2) => (
                        <motion.li
                          key={i2}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.2 + i2 * 0.15,
                            duration: 0.35,
                          }}
                        >
                          {/* check animation */}
                          <motion.svg viewBox="0 0 24 24" className="w-5 h-5">
                            <motion.path
                              d="M5 13l4 4L19 7"
                              fill="none"
                              stroke="#86EFAC"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{
                                duration: 0.3,
                                ease: "easeOut",
                                delay: 0.3 + i2 * 0.15,
                              }}
                            />
                          </motion.svg>
                          {p}
                        </motion.li>
                      ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              size="lg"
              className="px-12 mt-5 py-6 text-lg font-semibold rounded-full"
              onClick={() => navigate("/setup")}
            >
              Continue
            </Button>
          </motion.div>
          {/* ⭐ Trustpilot Inline Section */}
          <div className="flex flex-col max-md:w-full md:mt-10 md:flex-row items-center justify-center md:justify-start gap-3 p-6 py-3 bg-[#E8ECF8] rounded-md">
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
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mt-5 md:mt-10 text-sm text-center md:text-left">
            {/* Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Link to="/" className="md:pr-4 md:border-r">
                Terms & Conditions
              </Link>
              <Link to="/" className="md:pr-4 md:border-r">
                Privacy Policy
              </Link>
              <Link to="/" className="md:pr-4 md:border-r">
                Contact Us
              </Link>
              <Link to="/">Accessibility</Link>
            </div>

            {/* Copyright */}
            <p className="whitespace-nowrap">
              © 2025, NOW Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResumeIntro;
