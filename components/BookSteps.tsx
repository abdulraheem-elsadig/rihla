import React from "react";

const BookSteps = () => {
  const data = [
    {
      title: "اختر الوجهة",
      description: "اختر وجهة أحلامك من بين مجموعة واسعة من الخيارات",
      icon: "/icons/step-location.svg",
    },
    {
      title: "قم بالدفع",
      description:
        "قم بتأمين مغامرتك من خلال عملية دفع خالية من المتاعب. توفر منصتنا بوابة دفع سلسة وآمنة",
      icon: "/icons/step-pay.svg",
    },
    {
      title: "الوصول إلى المطار في التاريخ المحدد",
      description:
        "      في يوم مغادرتك، توجه إلى المطار مع أجواء من الإثارة. لقد حانالوقت لبدء تجربة لا تُنسى.",
      icon: "/icons/step-airport.svg",
    },
  ];
  return (
    <div className="section">
      <div className="container">
        <h3 className="title text-center mb-8 md:mb-10 lg:mb-16 lg:text-start lg:mx-0 lg:max-w-[500px]">
          احجز رحلتك القادمة في 3 خطوات سهلة.
        </h3>
        <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-center">
          <img
            src="/easy-steps.webp"
            alt="easy-steps image"
            className="rounded-lg lg:w-1/2"
          />
          <div className="flex flex-col gap-8">
            {data.map((item) => (
              <div className="flex gap-2 items-start">
                <img
                  src={item.icon}
                  alt="icon"
                  width={40}
                  height={40}
                  className="w-8 h-auto"
                />
                <div className="">
                  <h3 className="font-bold">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSteps;
