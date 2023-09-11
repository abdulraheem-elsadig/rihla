import React from "react";

const CustomeButton = ({ title, buttonStyle }: any) => {
  return (
    <button
      className={` bg-accent-blue font-medium text-white rounded-md px-6 pt-1 ${buttonStyle}`}
    >
      {title}
    </button>
  );
};

export default CustomeButton;
