import React from "react";
import Image from "next/image";
import CustomeButton from "./CustomeButton";

const Hero = () => {
  return (
    <div className=" relative w-full h-screen overflow-hidden flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="bg-cover w-full h-full absolute top-0 left-0 z-[-1] object-cover "
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="flex items-center flex-col gap-8 lg:items-start">
          <div className="text-center text-white lg:text-start">
            <h1 className="mb-8 font-black text-4xl md:text-5xl lg:text-6xl lg:max-w-[670px] lg:leading-[120%]">
              اطلق العنان لرحلتك استكشف العالم معنا
            </h1>
            <p className="font-medium">
              المغامرات الطبيعية بانتظارك ابحث عن وجهات سفر تحاكي الطبيعة
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 bg-white bg-opacity-75 rounded-2xl flex flex-col gap-5  mt-10 mx-auto custom-shadow md:mt-16 md:flex-row ">
          <div className="bg-white h-12 rounded-lg px-4 flex gap-3 items-center md:flex-1">
            <Image
              src="/icons/location-icon.svg"
              width={18}
              height={18}
              className="w-5"
              alt="location icon"
            />
            <div className="mt-1">
              <h3 className="text-xs text-gray-500">الوجهة</h3>
              <h3 className="font-medium text-sm">وجهة رحلتك</h3>
            </div>
          </div>
          <div className="bg-white h-12 rounded-lg px-4 flex gap-3 items-center md:flex-1 ">
            <Image
              src="/icons/date-icon.svg"
              width={18}
              height={18}
              className="w-5"
              alt="location icon"
            />
            <div className="mt-1">
              <h3 className="text-xs text-gray-500">الوجهة</h3>
              <h3 className="font-medium text-sm">وجهة رحلتك</h3>
            </div>
          </div>
          <div className="bg-white h-12 rounded-lg px-4 flex gap-3 items-center md:flex-1">
            <Image
              src="/icons/user-icon.svg"
              width={18}
              height={18}
              className="w-5"
              alt="location icon"
            />
            <div className="mt-1">
              <h3 className="text-xs text-gray-500">الوجهة</h3>
              <h3 className="font-medium text-sm">وجهة رحلتك</h3>
            </div>
          </div>

          <CustomeButton
            title="بحث"
            buttonStyle="col-span-2 w-full h-12  md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
