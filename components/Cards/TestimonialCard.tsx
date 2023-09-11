import React from "react";
import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="bg-white custom-shadow px-4 py-8 rounded-lg">
      <p>
        تجربتي مع [اسم موقعك] كانت ببساطة رائعة. لقد ساعدوني في تنظيم رحلة مذهلة
        لوجهة أحلامي. من خلال انتقائهم لأماكن الإقامة الفاخرة والجولات الممتعة،
        شعرت أنني عشت تجربة فريدة لا تنسى. كان الفريق متعاونًا واهتم بكل تفاصيل
        الرحلة، مما جعلني أستمتع بكل لحظة.
      </p>
      <div className="flex gap-2 items-center mt-10 text-accent-blue">
        <Image
          src="/fake-data/user.png"
          height={40}
          width={40}
          alt="user image"
          className="rounded-full"
        />
        <div className="">
          <h3 className="font-bold leading-none">محمد عبد اللطيف</h3>
          <h3 className="leading-none mt-1">السودان</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
