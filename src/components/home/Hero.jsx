import { FaArrowRight } from "react-icons/fa";

// ⭐ Star component must be defined before Hero()
const Star = () => (
  <span className="text-white text-sm bg-[#00B67A] rounded w-5 h-5 flex items-center justify-center">
    ★
  </span>
);

export default function Hero() {
  return (
    <section
      className="relative pt-14 lg:pt-24 text-center bg-cover bg-center bg-no-repeat min-h-[100vh] flex flex-col justify-center"
      style={{ backgroundImage: `url("/assets/img/hero-bg.webp")` }}
    >
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between items-center p-6 mx-auto sm:py-12 lg:py-18">
        {/* LEFT TEXT SECTION */}
        <div className="flex z-10 flex-col justify-center text-center lg:text-left rounded-sm lg:basis-3/5 xl:basis-3/6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-2 lg:mb-4 leading-tight">
            AI-Powered Resume Builder{" "}
            <span className="text-indigo-600">– Free & Easy</span>
          </h1>

          <p className="mt-6 mb-8 text-lg w-[100%] lg:w-[70%] sm:mb-12 text-gray-700">
            Land your next job with our free AI resume builder. Choose from
            recruiter-approved templates and add skills in one click — all from
            your computer or phone.
          </p>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Import Your Resume
            </a>
            <a
              href="/setup"
              className="px-8 py-3 text-lg font-semibold border border-gray-300 rounded hover:bg-gray-100 transition"
            >
              Create Your Resume
            </a>
          </div>

          {/* ⭐ Trustpilot Inline Section */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 pl-0 p-6">
            <h3 className="text-2xl font-bold">Excellent</h3>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Based on <span className="font-semibold">14,874 reviews</span>
            </p>
            <img src="/assets/svg/trustpilot.svg" alt="Trustpilot" className="w-24 md:w-28" />
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex items-center justify-center p-2 lg:p-6 mt-8 lg:mt-0 lg:basis-3/6 relative">
          <div className="hero-img relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
            <div className="text-box">
              <div className="flex items-start mb-3">
                <h3 className="text-indigo-600 text-3xl sm:text-3xl lg:text-3xl">
                  Let AI do the work!
                </h3>
                <div>
                  <div className="flex">
                    <div className="relative group">
                      <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px] transition-all duration-300 whitespace-nowrap">
                        Try It First
                        <span className="absolute left-1/2 top-full -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></span>
                      </span>
                      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 group-hover:scale-110 shadow-lg">
                        <FaArrowRight className="text-l transform transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Describe your role in a few words, and we'll generate tailored
                content for your work experience section.
              </p>
            </div>
            15
            <img
              src="/assets/img/resume.jpg"
              alt="Resume Builder"
              className="resume-img"
            />
            <img
              src="/assets/svg/hero-lines.svg"
              alt="Resume Builder"
              className="hero-lines"
            />
            <img
              src="/assets/img/user-suppport.webp"
              alt="Support"
              className="user-support-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
