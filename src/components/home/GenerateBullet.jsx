import { BsMagic } from "react-icons/bs";
export default function GenerateBullet() {
  return (
    <section className="relative  bg-cover bg-center bg-no-repeat flex flex-col justify-center">
      <div className="max-w-6xl bg-[#122e50] rounded-3xl w-full flex flex-col justify-between items-center p-6 mx-auto sm:py-12 lg:py-18">
        <div className="w-full text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl lg:mb-4 text-white font-bold leading-tight">
            Generate Your Resume Bullet Points with AI
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between  w-full">
          <div
            className="flex z-10 flex-col justify-center text-center lg:text-left rounded-2xl lg:basis-3/5 xl:basis-3/6 p-4 lg:p-6"
            style={{
              background: "rgb(255 253 253 / 9%)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <h4 className=" items-center gap-3 flex text-2xl text-white sm:text-3xl lg:text-3xl lg:mb-2">
              <BsMagic className="text-indigo-600" /> Let AI do the work!
            </h4>
            <p className="text-white text-left">
              Simplify the writing process with a single click. Enter a skill or
              responsibility to generate your choice of compelling bullet
              points.
            </p>
            <div className="relative mt-4">
              <textarea
                id="message"
                rows={7}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Try it Out! Enter Text Here..."
              ></textarea>
              <div className="flex justify-between items-center p-2 absolute bottom-1 w-full">
                <div className="">
                  <p className="text-sm text-gray-100">
                    <i>
                      0 remaining.
                      <span className="hidden lg:inline">
                        {" "}
                        Magic, right? See more in our builder.
                      </span>
                    </i>
                  </p>
                </div>
                <div className="text-left">
                  <button
                    type="button"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-3 py-1 text-center mb-0 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900"
                  >
                    Create Resume
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3 lg:px-6 mt-8 lg:mt-0 lg:basis-3/6 relative">
            <h4 className=" text-left text-1xl text-white lg:text-[20px] mb-4 lg:mb-8">
              Not sure what to write? Try one of these examples.
            </h4>
            <div className="suggestion-box bg-[#e4eaff] p-4 rounded-lg min-h-[80px] mb-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-gray-100">
                  <i>
                    administer medications, collaborate on care plans, educate
                    patients
                  </i>
                </p>
                <a
                  href="#"
                  className="text-[#5bb6ff] whitespace-nowrap hover:underline"
                >
                  Enhance This
                </a>
              </div>
            </div>
            <div className="suggestion-box bg-[#e4eaff] p-4 min-h-[80px] rounded-lg mb-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-gray-100">
                  <i>Created work schedule</i>
                </p>
                <a
                  href="#"
                  className="text-[#5bb6ff] whitespace-nowrap hover:underline"
                >
                  Enhance This
                </a>
              </div>
            </div>
            <div className="suggestion-box bg-[#e4eaff] p-4 min-h-[80px] rounded-lg">
              <div className="flex items-center justify-between gap-2">
                <p className="text-gray-100">
                  <i>Communication</i>
                </p>
                <a
                  href="#"
                  className="text-[#5bb6ff] whitespace-nowrap hover:underline"
                >
                  Enhance This
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-14">
          <a
             href="/resume-loading"
            className="px-8 py-3 text-lg font-semibold rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Create My Resume
          </a>
        </div>
      </div>
    </section>
  );
}
