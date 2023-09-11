import React from "react";
import { Accordion } from ".";

const Faq = () => {
  return (
    <div className="container">
      <h3 className="title text-center mb-8 md:mb-10 lg:mb-16">
        أسئلتك المتجوّلة: إجابات على تساؤلات رحلتك
      </h3>
      <div className="flex flex-col gap-6">
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </div>
  );
};

export default Faq;
