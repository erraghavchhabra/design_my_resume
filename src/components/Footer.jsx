import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { IoAdd, IoRemove } from "react-icons/io5";
import FtLogo from "../assets/img/ftlogo.svg";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Resume",
      items: [
        "AI Resume Builder",
        "Resume Templates",
        "Resume Examples",
        "Resume Formats",
        "ATS Resume Checker",
        "How To Make A Resume",
        "AI Resume Summary Generator",
        "AI Resume Skills Generator",
        "AI Resume Review",
      ],
    },
    {
      title: "Resume Now",
      items: [
        "About Us",
        "Customer Reviews",
        "Editorial Guidelines",
        "Privacy Policy",
        "Terms Of Service",
        "Cookies & Tracking Policy",
        "Sitemap",
      ],
    },
    {
      title: "Support",
      items: [
        "Contact",
        "Pricing",
        "FAQ",
        "Accessibility",
        "Affiliates",
        "Press Coverage",
      ],
    },
    {
      title: "Customer Service",
      custom: true,
    },
  ];

  return (
    <footer className="relative bg-[#122e50] text-white pt-16 pb-8 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500 opacity-20 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-700 opacity-30 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* Header Section */}
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 pb-10 border-b border-indigo-500/30">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={FtLogo} className="w-[150px]" alt="Resume Now Logo" />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 flex-wrap justify-center">
          {[
            { icon: <FaFacebookF />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaLinkedinIn />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaYoutube />, link: "#" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Links (Accordion on Mobile) */}
      <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-10 pt-12 pb-8 text-left">
        {sections.map((section, index) => (
          <div key={index} className="border-b border-indigo-500/20 lg:border-none pb-4 lg:pb-0">
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center lg:cursor-default"
            >
              <h3 className="font-semibold text-lg text-white">{section.title}</h3>
              <span className="lg:hidden text-2xl">
                {openIndex === index ? <IoRemove /> : <IoAdd />}
              </span>
            </button>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-all duration-300 lg:max-h-none ${
                openIndex === index ? "max-h-[600px] mt-4" : "max-h-0 lg:max-h-none"
              }`}
            >
              {!section.custom ? (
                <ul className="space-y-4 text-gray-200 text-sm mt-2 lg:mt-4">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="hover:text-indigo-300 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-3 text-gray-200 text-sm mt-4">
                  <li className="flex items-center gap-2">
                    <FaPhoneAlt className="text-indigo-300" /> 844-351-7484
                  </li>
                  <li className="flex items-center gap-2">
                    <FaEnvelope className="text-indigo-300" /> customerservice@resume-now.com
                  </li>
                  <li>
                    <strong className="mt-6 block">CS Support Schedule:</strong>
                    <ul className="mt-4 space-y-5 text-gray-300 text-xs">
                      <li>Mon – Fri 8:00 AM – 8:00 PM CST</li>
                      <li>Sat 8:00 AM – 5:00 PM CST</li>
                      <li>Sun 10:00 AM – 6:00 PM CST</li>
                    </ul>
                  </li>
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="text-center border-t border-indigo-500/30 mt-10 pt-6 text-gray-400 text-sm relative z-10">
        © {new Date().getFullYear()} Resume Now. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
