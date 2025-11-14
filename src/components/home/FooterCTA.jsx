
const FooterCTA = () => {
  return (
    <section className="relative ms-ft-sec max-w-7xl mt-14 mx-auto overflow-hidden bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 text-white py-10 lg:py-16 px-6 sm:px-10 lg:px-20 rounded-3xl">
      {/* Background Vectors */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-400 opacity-20 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 opacity-30 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl"></div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-7xl mx-auto">
        {/* Left Text Section */}
        <div className="text-center lg:text-left max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6">
            Generate a Resume Fast with <br />
            <span className="text-indigo-300">Design My Resume Easy AI Resume Builder</span>
          </h2>

          <button className="mt-4 bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-50 hover:scale-105 transition-all duration-300">
            Make a New Resume
          </button>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/assets/img/r-cta.png"
              alt="AI Resume Preview"
              className="w-[380px] sm:w-[420px] lg:w-[460px] transition-transform duration-300 hover:scale-105"
            />

            {/* Decorative Shape Overlay */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-400 opacity-30 rounded-full blur-2xl"></div>
            <div className="absolute top-0 -right-8 w-20 h-20 bg-indigo-500 opacity-40 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
