import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Customer",
    date: "November 5",
    title: "It was helpful and good and great",
    text: "It was helpful and good and great.",
  },
  {
    name: "Karen G.",
    date: "November 5",
    title: "Create your future position!",
    text: "There are Job Opportunities and there are Job Offers... Resumenow got...",
  },
  {
    name: "JZ",
    date: "November 5",
    title: "Very helpful",
    text: "Very helpful and easy to use.",
  },
  {
    name: "John D.",
    date: "November 4",
    title: "Highly recommend!",
    text: "Excellent service for resume creation. Quick and professional.",
  },
  {
    name: "John D.",
    date: "November 4",
    title: "Highly recommend!",
    text: "Excellent service for resume creation. Quick and professional.",
  },
];

const Star = () => (
  <span className="text-white text-sm bg-[#00B67A] rounded w-5 h-5 flex items-center justify-center">
    ★
  </span>
);

const TestimonialSlider = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* CENTER HEADING */}
        <h2 className="mb-5 lg:mb-16 text-3xl font-bold leading-none sm:line-clamp-2 text-center text-indigo-600 sm:text-4xl md:mx-auto">
          Resume Now Is Rated Highly by Job Seekers
        </h2>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-10 items-start">
          {/* LEFT — Trustpilot Section */}
          <div className="text-center flex align-middle justify-between lg:block md:text-left space-y-4 p-6">
          <div>
              <h3 className="text-2xl font-bold mt-[13px] lg:mt-[0px]">Excellent</h3>

            <div className="flex justify-center md:justify-start space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            </div>

           <div className="mt-0">
             <p className="text-sm text-gray-600">
              Based on <span className="font-semibold">14,874 reviews</span>
            </p>

            <div className="flex justify-center md:justify-start mt-2">
              <img src="/assets/svg/trustpilot.svg" alt="Trustpilot" className="w-28" />
            </div>
           </div>
          </div>

          {/* RIGHT — Swiper Slider */}
          <div>
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              spaceBetween={0}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-10"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="p-6 pr-2 text-left h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} />
                        ))}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {review.title}
                      </h4>
                      <p className="text-sm text-gray-600">{review.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      {review.name} · {review.date}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
