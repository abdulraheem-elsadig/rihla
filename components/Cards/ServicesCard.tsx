import Image from "next/image";
import React from "react";

const ServicesCard = ({ title, description, icon }: any) => {
  return (
    <div className="flex bg-white p-4 gap-4 items-start rounded-lg custom-shadow">
      <Image src={icon} alt="" width={24} height={24} />
      <div className="">
        <h3 className="font-bold text-accent-blue mb-4 ">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
