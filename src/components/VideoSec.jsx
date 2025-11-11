import React from "react";
import { BsMagic } from "react-icons/bs";
export default function VideoSec() {
  return (
    <section
      className="relative  lg:pb-20 bg-cover bg-center bg-no-repeat flex flex-col justify-center"

    >



      <div className="max-w-6xl bg-indigo-100 rounded-3xl w-full flex flex-col justify-between items-center  mx-auto ">

        <div className="flex flex-col lg:flex-row justify-between  w-full">


          <div
            className="flex z-10 flex-col justify-center text-center lg:text-left rounded-2xl lg:basis-3/5 xl:basis-4/6 p-8"
           
          >
           <iframe width="100%" height="315" src="https://www.youtube.com/embed/OHz0xIR8uwI?si=ygUObAsqBqsKof8n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>


          <div className="p-6 lg:p-14 flex items-center justify-center mt-8 lg:mt-0 lg:basis-3/6 relative bg-indigo-600 lg:rounded-r-2xl ">
          <div>
             <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:mb-4 text-white font-bold leading-tight">
           A New Resume Fast
          </h1>
          <p className="text-white lg:text-2xl">Creating a mistake-free resume with Resume Now’s AI Resume Builder is not only fast, but easy to do!</p>
          </div>
          </div>

        </div>

      </div>




    </section>
  );
}
