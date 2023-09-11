import React from "react";
import { ServicesCard } from ".";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "قطع التذاكر",
      description:
        "اترك لنا مهمة شراء تذكرتك.مما يتيح لك المزيد من الوقت للتركيز على تخطيط تفاصيل رحلتك واستعدادك لتجربة سفر لا تنسى",
      icon: "/icons/ticket-logo.svg",
    },
    {
      id: 2,
      title: "قطع التذاكر",
      description:
        "اترك لنا مهمة شراء تذكرتك.مما يتيح لك المزيد من الوقت للتركيز على تخطيط تفاصيل رحلتك واستعدادك لتجربة سفر لا تنسى",
      icon: "/icons/ticket-logo.svg",
    },
    {
      id: 3,
      title: "قطع التذاكر",
      description:
        "اترك لنا مهمة شراء تذكرتك.مما يتيح لك المزيد من الوقت للتركيز على تخطيط تفاصيل رحلتك واستعدادك لتجربة سفر لا تنسى",
      icon: "/icons/ticket-logo.svg",
    },
    {
      id: 4,
      title: "قطع التذاكر",
      description:
        "اترك لنا مهمة شراء تذكرتك.مما يتيح لك المزيد من الوقت للتركيز على تخطيط تفاصيل رحلتك واستعدادك لتجربة سفر لا تنسى",
      icon: "/icons/ticket-logo.svg",
    },
    {
      id: 5,
      title: "قطع التذاكر",
      description:
        "اترك لنا مهمة شراء تذكرتك.مما يتيح لك المزيد من الوقت للتركيز على تخطيط تفاصيل رحلتك واستعدادك لتجربة سفر لا تنسى",
      icon: "/icons/ticket-logo.svg",
    },
  ];
  return (
    <div className="section">
      <div className="container">
        <h1 className="title text-center mx-auto mb-8 max-w-[500px] md:mb-10 lg:mb-16">
          نقدم مجموعة خدمات متميزة لجعل تجربتك استثنائية.
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {servicesData.map((service) => (
            <ServicesCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
