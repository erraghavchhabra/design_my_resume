export const ProcessStep = () => {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div></div>
        <h2 className="mb-6  text-3xl font-bold leading-none text-center text-indigo-600 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                width="52"
                height="24"
              />
            </svg>
            <br /> <br />
          </span>{" "}
          Make a Resume That Gets Results
        </h2>
      </div>
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4 text-center relative">
          {/* Step 1 */}
          <div className="relative">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
              <img
                src="/assets/img/choose.png"
                alt="template"
                className="w-12"
              />
            </div>
            <h6 className="mb-2 text-[22px]">
              Choose a recruiter-approved template
            </h6>

            {/* Arrow to next step */}
            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute lg:flex">
              <svg
                className="w-8 text-indigo-400 transform rotate-90 lg:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
              <img
                src="/assets/img/to-do-list.png"
                alt="skills"
                className="w-12"
              />
            </div>
            <h6 className="mb-2 text-[22px]">
              Add skills and bullet points in one click
            </h6>

            {/* Arrow */}
            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute lg:flex">
              <svg
                className="w-8 text-indigo-400 transform rotate-90 lg:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
              <img src="/assets/img/resume.png" alt="resume" className="w-12" />
            </div>
            <h6 className="mb-2 text-[22px]">Finish your resume in minutes</h6>

            {/* Arrow */}
            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute lg:flex">
              <svg
                className="w-8 text-indigo-400 transform rotate-90 lg:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
              <img
                src="/assets/img/download.png"
                alt="download"
                className="w-12"
              />
            </div>
            <h6 className="mb-2 text-[22px]">Download in Word, PDF and more</h6>
          </div>
        </div>
      </div>

      <div className="w-full text-center mt-8 lg:mt-14">
        <a
          href="/resume-loading"
          className="px-8 py-3 text-lg font-semibold rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Create My Resume
        </a>
      </div>
    </div>
  );
};
