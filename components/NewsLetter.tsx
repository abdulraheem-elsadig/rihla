import React from "react";
import CustomeButton from "./CustomeButton";

const NewsLetter = () => {
  return (
    <div>
      <div className="container ">
        <div className="section">
          <div className=" ">
            <h3 className="title text-center mb-8 md:mb-10 lg:mb-16 ">
              اشترك في نشرتنا الإخبارية
            </h3>
            <div className="bg-white w-full flex rounded-lg custom-shadow mb-4 h-12 max-w-[550px] md:mx-auto">
              <input
                className="outline-none px-2"
                type="email"
                placeholder="ادخل بريدك الالكتروني"
              />
              <CustomeButton
                title="اشتراك"
                buttonStyle="h-12  rounded-s-none "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
