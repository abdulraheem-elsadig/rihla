"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./Cards/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="">
      <div className="container pb-16 relative">
        <h1 className="title mb-8 text-center md:mb-10">
          {" "}
          ماذا يقول عملاؤنا عنا{" "}
        </h1>{" "}
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
        >
          <SwiperSlide className="pb-4">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="pb-4">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="pb-4">
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
