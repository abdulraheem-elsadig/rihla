import Image from "next/image";
import React from "react";
import CustomeButton from "./CustomeButton";

const About = () => {
  return (
    <div>
      <div className="flex flex-col container gap-8 md:gap-10 lg:flex-row">
        <Image
          src="/world.webp"
          alt="About Us"
          className="rounded-lg w-full lg:w-1/2"
          width={0}
          height={0}
          sizes="100%"
        />
        <div className="flex flex-col gap-6 items-center text-center md:gap-8 lg:text-start lg:items-start lg:justify-center">
          <h1 className="title">نحن فريق متخصص نضع العالم بين يديك،</h1>
          <p>
            نقدم تجارب سفر تفوق التوقعات وخدمة ترافقك في كل خطوة. مع معرفتنا
            العميقة بأفضل الوجهات، وشغفنا بتقديم كل ما هو مميز، نحن هنا لنشاركك
            رحلتك نحو استكشاف عوالم جديدة وصنع ذكريات لا تُنسى
          </p>
          <CustomeButton
            title="اقراء المزيد"
            buttonStyle="w-full h-10 lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
