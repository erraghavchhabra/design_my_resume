import React from "react";
import HomeLayout from "../../layout/HomeLayout";
import LogoLoopComponent from "../../components/resources/LogoLoopComponent";

function PressCoverage() {
  return (
    <HomeLayout>
      <section>
        <div className="container pt-10">
          <div className="text-center flex-col flex items-center gap-5 max-w-3xl mx-auto">
            <p className="inline-block relative text-4xl md:text-5xl font-black">
              <iframe
                title="data"
                className="w-[94px] -z-10 absolute max-md:left-[-26px] top-[-50px] right-[-40px] md:top-[-45px] h-[94px] filter hue-rotate-[20deg] saturate-50"
                src="https://lottie.host/embed/49ef9e95-4631-42fe-a4d5-ed8bf3addcfc/YLuZni78Ue.lottie"
              ></iframe>
              Resume Now Press Coverage
            </p>
            <p className="text-lg md:text-xl font-semibold">
              Resume Now’s AI Resume Builder is a trusted source for surveys and
              data exploring the state of the job market and workplace.
            </p>
          </div>
        </div>
      </section>
      <LogoLoopComponent className="py-5 md:py-10 " />
    </HomeLayout>
  );
}

export default PressCoverage;
