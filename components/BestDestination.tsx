"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { DestinationCard } from ".";

const BestDestination = () => {
  const data = [
    {
      title: "حديقة تسافو الشرقية الوطنية",
      location: "كينيا",
      image: "/fake-data/africa.jpg",
    },
    { title: "كاواي", location: "جزر هاواي", image: "/fake-data/hawaii.jpg" },
    {
      title: "شلال سيلجالاندزفوس",
      location: "أيسلندا",
      image: "/fake-data/waterfall.jpg",
    },
  ];
  return (
    <div>
      <div className="section">
        <div className="container pb-16 relative">
          <h1 className="title mb-8 text-center md:mb-10 lg:mb-16 lg:text-start lg:m-0 lg:ml-auto lg:max-w-[450px]">
            استمتع بأفضل وجهات سفر لدينا.
          </h1>
          <Swiper
            slidesPerView={2}
            spaceBetween={12}
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
            // spaceBetween={30}
          >
            {data.map((item) => (
              <SwiperSlide className="pb-4 w-full">
                <DestinationCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestDestination;
