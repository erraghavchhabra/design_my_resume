import { useState, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import {
  IconZoomExclamation,
  IconReport,
  IconMedal,
  IconPencilQuestion,
  IconFileDescription,
  IconWand,
  IconSettingsCog,
  IconWritingSign,
  IconMedal2,
  IconChecklist,
  IconPhoneCall,
  IconNews,
  IconSpeakerphone,
  IconMessage2,
  IconCoin,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header
      className={`fixed ms-nav top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        scrolled ? "bg-white/90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/" onClick={(e) => e.preventDefault()}>
            <img
              className="w-[100px] sm:w-[100px] lg:w-[200px]"
              src="/assets/svg/logo.svg"
              alt="Logo"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8 font-medium relative">
          {/* Builder */}
          <div className="group relative">
            <button className="flex items-center gap-1 px-2 py-4 hover:text-indigo-600 transition font-semibold">
              Builder
              <IoChevronDown
                className="transition-transform duration-300 group-hover:rotate-180"
                size={16}
              />
            </button>

            {/* Builder Dropdown */}
            <div className="absolute left-0 top-full bg-white border border-gray-100 shadow-lg rounded-2xl p-6 w-[350px] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 ease-in-out z-40">
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="#"
                  className="relative pl-12 block hover:bg-slate-50 p-3 mb-2 rounded-lg transition"
                >
                  <IconWand
                    size={24}
                    stroke={1.5}
                    className="absolute left-3 top-4 text-indigo-600"
                  />
                  <h4 className="font-semibold mb-1 text-slate-800">
                    AI Resume Builder
                  </h4>
                  <p className="text-xs text-gray-600 leading-snug">
                    Create your professional resume instantly using our
                    AI-powered builder.
                  </p>
                </a>

                <a
                  href="#"
                  className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                >
                  <IconWritingSign
                    size={24}
                    stroke={1.5}
                    className="absolute left-3 top-4 text-green-400"
                  />
                  <h4 className="font-semibold mb-1 text-slate-800">
                    CV Maker
                  </h4>
                  <p className="text-xs text-gray-600 leading-snug">
                    Build a professional CV quickly with our easy-to-use CV
                    maker.
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Resume */}
          <div className="group relative">
            <button className="flex items-center gap-1 px-2 py-4 hover:text-indigo-600 transition font-semibold">
              Resume
              <IoChevronDown
                className="transition-transform duration-300 group-hover:rotate-180"
                size={16}
              />
            </button>

            {/* Mega Dropdown */}
            <div className="fixed left-1/2 top-[70px] -translate-x-1/2 bg-white border border-gray-100 shadow-lg rounded-3xl p-6 w-[1200px] max-w-[95vw] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 ease-in-out z-40">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Column 1 */}
                <div>
                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconReport
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-indigo-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      Resume Templates
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Browse customizable templates to create a resume quickly
                      and easily.
                    </p>
                  </a>

                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconMedal
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-red-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      Resume Examples
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Use examples for various job titles and industries as
                      inspiration.
                    </p>
                  </a>

                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconPencilQuestion
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-yellow-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      How to Make a Resume
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Learn step-by-step tips for writing a resume that gets
                      noticed.
                    </p>
                  </a>
                </div>

                {/* Column 2 */}
                <div>
                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconFileDescription
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-green-400"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      Resume Formats
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Learn different formats and choose the best one for your
                      background.
                    </p>
                  </a>

                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconWand
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-cyan-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      AI Summary Generator
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Generate a professional resume summary highlighting your
                      skills.
                    </p>
                  </a>
                </div>

                {/* Column 3 */}
                <div>
                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconSettingsCog
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-purple-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      AI Skills Generator
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Create strong, relevant resume skills with AI assistance.
                    </p>
                  </a>

                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconZoomExclamation
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-orange-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      AI Resume Review
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Get expert feedback and improvement suggestions instantly.
                    </p>
                  </a>
                </div>

                {/* Column 4 */}
                <div>
                  <div className="bg-gray-50 rounded-3xl p-5 text-center">
                    <img
                      src="/assets/img/mega-img.jpg"
                      className="rounded-xl mb-2"
                      alt=""
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      Save time with our builder
                    </h4>
                    <p className="text-xs text-gray-600 mb-8 leading-snug">
                      In just a few clicks you can make a professional resume
                      with our AI Resume Builder.
                    </p>
                    <a
                      href="#"
                      className="px-10 py-2 w-full mt-5 font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                      Build Your Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CV */}
          <div className="group relative">
            <button className="flex items-center gap-1 px-2 py-4 hover:text-indigo-600 transition font-semibold">
              CV
              <IoChevronDown
                className="transition-transform duration-300 group-hover:rotate-180"
                size={16}
              />
            </button>

            <div className="fixed left-1/2 top-[70px] -translate-x-1/2 bg-white border border-gray-100 shadow-lg rounded-3xl p-6 w-[1000px] max-w-[95vw] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 ease-in-out z-40">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Column 1 (was 2nd in Resume) */}
                <div>
                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconWritingSign
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-green-400"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      CV Maker
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Build a professional CV quickly with our easy-to-use CV
                      maker.
                    </p>
                  </a>

                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconMedal2
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-cyan-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      CV Examples
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Use examples for job titles and industries to guide you in
                      writing your CV.
                    </p>
                  </a>
                </div>

                {/* Column 2  */}
                <div>
                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconChecklist
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-purple-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      CV Templates
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Choose a customizable template to create an effective CV.
                    </p>
                  </a>

                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconPencilQuestion
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-orange-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      How to Write a CV
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Follow our guide to write a CV that showcases your best
                      qualifications.
                    </p>
                  </a>
                </div>

                {/* Column 3 (Image Card like Resume) */}
                <div>
                  <div className="bg-gray-50 rounded-3xl p-5 text-center">
                    <img
                      src="/assets/img/mega-img.jpg"
                      className="rounded-xl mb-2"
                      alt="CV Image"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      Build Your CV Instantly
                    </h4>
                    <p className="text-xs text-gray-600 mb-8 leading-snug">
                      Save time using our professional CV builder with
                      ready-made sections.
                    </p>
                    <a
                      href="#"
                      className="px-10 py-2 w-full mt-5 font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                      Build Your Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advice */}
          <div className="group relative">
            <button className="flex items-center gap-1 px-2 py-4 hover:text-indigo-600 transition font-semibold">
              Advice
              <IoChevronDown
                className="transition-transform duration-300 group-hover:rotate-180"
                size={16}
              />
            </button>

            <div className="fixed left-1/2 top-[70px] -translate-x-1/2 bg-white border border-gray-100 shadow-lg rounded-3xl p-6 w-[1000px] max-w-[95vw] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 ease-in-out z-40">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Column 1 */}
                <div>
                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconReport
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-indigo-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      Resumes
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Expert resume tips to help you land the job you want.
                    </p>
                  </a>

                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconWritingSign
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-green-500"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      Cover Letters
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Guidance on writing effective cover letters.
                    </p>
                  </a>
                </div>

                {/* Column 2 */}
                <div>
                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconChecklist
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-cyan-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      Job Search
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Tips and resources to help you find your next job.
                    </p>
                  </a>

                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconMedal2
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-yellow-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      Career Advice
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Get career guidance to grow and succeed.
                    </p>
                  </a>
                </div>

                {/* Column 4 (image card) */}
                <div>
                  <div className="bg-gray-50 rounded-3xl p-5 text-center">
                    <img
                      src="/assets/img/mega-img.jpg"
                      className="rounded-xl mb-2"
                      alt="Advice"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      Expert Career Help
                    </h4>
                    <p className="text-xs text-gray-600 mb-8 leading-snug">
                      Read professional tips and tricks to get ahead in your job
                      hunt.
                    </p>
                    <a
                      href="#"
                      className="px-10 py-2 w-full mt-5 font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                      Build Your Cover Letter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="group relative">
            <button className="flex items-center gap-1 px-2 py-4 hover:text-indigo-600 transition font-semibold">
              Resources
              <IoChevronDown
                className="transition-transform duration-300 group-hover:rotate-180"
                size={16}
              />
            </button>

            <div className="fixed left-1/2 top-[70px] -translate-x-1/2 bg-white border border-gray-100 shadow-lg rounded-3xl p-6 w-[600px] max-w-[95vw] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 ease-in-out z-40">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Column 1 */}
                <div>
                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconPhoneCall
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-indigo-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      Contact Us
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Reach out to us for any questions and comments.
                    </p>
                  </a>

                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconNews
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-purple-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      Editorial Guidelines
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Learn about our high-quality content standards.
                    </p>
                  </a>

                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconSpeakerphone
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-yellow-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">Press</h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Read our press releases and mentions in other media.
                    </p>
                  </a>
                </div>

                {/* Column 2 */}
                <div>
                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconMessage2
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-cyan-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      Customer Reviews
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      See what users say about our services.
                    </p>
                  </a>

                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconPencilQuestion
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-green-600"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">FAQ</h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      FAQ from jobseekers to help answer your questions.
                    </p>
                  </a>

                  <a
                    href="#"
                    className="relative pl-12 block hover:bg-slate-50 p-3 mb-5 rounded-lg transition"
                  >
                    <IconCoin
                      size={24}
                      stroke={1.5}
                      className="absolute left-3 top-4 text-orange-500"
                    />
                    <h4 className="font-semibold mb-1 text-slate-800">
                      Pricing
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      Get details about our different subscription plans.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/login"
            className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-50 transition font-medium"
          >
            Login
          </Link>
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            Free Account
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col space-y-1.5"
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-2 p-4 text-gray-800">
            {/* Builder */}
            <div>
              <button
                onClick={() => toggleDropdown("builder")}
                className="w-full flex items-center justify-between py-2 hover:text-indigo-600"
              >
                Builder
                <IoChevronDown
                  className={`transition-transform ${
                    openDropdown === "builder" ? "rotate-180" : ""
                  }`}
                  size={16}
                />
              </button>
              {openDropdown === "builder" && (
                <div className="pl-4 space-y-3 text-sm text-gray-700">
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconWand size={18} className="text-indigo-600" /> AI Resume
                    Builder
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconWritingSign size={18} className="text-green-500" /> CV
                    Maker
                  </a>
                </div>
              )}
            </div>

            {/* Resume */}
            <div>
              <button
                onClick={() => toggleDropdown("resume")}
                className="w-full flex items-center justify-between py-2 hover:text-indigo-600"
              >
                Resume
                <IoChevronDown
                  className={`transition-transform ${
                    openDropdown === "resume" ? "rotate-180" : ""
                  }`}
                  size={16}
                />
              </button>
              {openDropdown === "resume" && (
                <div className="pl-4 space-y-3 text-sm text-gray-700">
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconReport size={18} className="text-indigo-600" /> Resume
                    Templates
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconMedal size={18} className="text-red-600" /> Resume
                    Examples
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconPencilQuestion size={18} className="text-yellow-600" />{" "}
                    How to Make a Resume
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconFileDescription size={18} className="text-green-500" />{" "}
                    Resume Formats
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconWand size={18} className="text-cyan-600" /> AI Summary
                    Generator
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconSettingsCog size={18} className="text-purple-600" /> AI
                    Skills Generator
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconZoomExclamation
                      size={18}
                      className="text-orange-600"
                    />{" "}
                    AI Resume Review
                  </a>
                </div>
              )}
            </div>

            {/* CV */}
            <div>
              <button
                onClick={() => toggleDropdown("cv")}
                className="w-full flex items-center justify-between py-2 hover:text-indigo-600"
              >
                CV
                <IoChevronDown
                  className={`transition-transform ${
                    openDropdown === "cv" ? "rotate-180" : ""
                  }`}
                  size={16}
                />
              </button>
              {openDropdown === "cv" && (
                <div className="pl-4 space-y-3 text-sm text-gray-700">
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconWritingSign size={18} className="text-green-500" /> CV
                    Maker
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconMedal2 size={18} className="text-cyan-600" /> CV
                    Examples
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconChecklist size={18} className="text-purple-600" /> CV
                    Templates
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconPencilQuestion size={18} className="text-orange-600" />{" "}
                    How to Write a CV
                  </a>
                </div>
              )}
            </div>

            {/* Advice */}
            <div>
              <button
                onClick={() => toggleDropdown("advice")}
                className="w-full flex items-center justify-between py-2 hover:text-indigo-600"
              >
                Advice
                <IoChevronDown
                  className={`transition-transform ${
                    openDropdown === "advice" ? "rotate-180" : ""
                  }`}
                  size={16}
                />
              </button>
              {openDropdown === "advice" && (
                <div className="pl-4 space-y-3 text-sm text-gray-700">
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconReport size={18} className="text-indigo-600" /> Resumes
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconWritingSign size={18} className="text-green-500" />{" "}
                    Cover Letters
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconChecklist size={18} className="text-cyan-600" /> Job
                    Search
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconMedal2 size={18} className="text-yellow-600" /> Career
                    Advice
                  </a>
                </div>
              )}
            </div>

            {/* Resources */}
            <div>
              <button
                onClick={() => toggleDropdown("resources")}
                className="w-full flex items-center justify-between py-2 hover:text-indigo-600"
              >
                Resources
                <IoChevronDown
                  className={`transition-transform ${
                    openDropdown === "resources" ? "rotate-180" : ""
                  }`}
                  size={16}
                />
              </button>
              {openDropdown === "resources" && (
                <div className="pl-4 space-y-3 text-sm text-gray-700">
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconPhoneCall size={18} className="text-indigo-600" />{" "}
                    Contact Us
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconNews size={18} className="text-purple-600" /> Editorial
                    Guidelines
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconSpeakerphone size={18} className="text-yellow-600" />{" "}
                    Press
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconMessage2 size={18} className="text-cyan-600" />{" "}
                    Customer Reviews
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconPencilQuestion size={18} className="text-green-600" />{" "}
                    FAQ
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-indigo-600"
                  >
                    <IconCoin size={18} className="text-orange-500" /> Pricing
                  </a>
                </div>
              )}
            </div>

            {/* Buttons */}
            <Link
            to="/login"
              className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg text-center hover:bg-indigo-50 transition"
            >
              Login
            </Link>
            <Link
            to="/login"
              className="bg-indigo-600 text-white px-4 py-2 mt-2 rounded-lg hover:bg-indigo-700 text-center"
            >
              Free Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
