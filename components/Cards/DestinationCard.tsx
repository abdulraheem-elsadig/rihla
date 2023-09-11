import React from "react";
import Image from "next/image";

const DestinationCard = ({ data }: any) => {
  return (
    <div className="bg-white  rounded-lg w-full  flex flex-col gap-3 custom-shadow">
      <Image
        src={data.image}
        sizes="100%"
        height={200}
        width={200}
        alt={data.title}
        className="rounded-lg w-full h-auto"
      />
      <div className="px-3 pb-3">
        <h3 className="font-medium text-sm ">{data.title}</h3>
        <div className="flex justify-between items-center">
          <h3 className="text-gray-500 text-sm mt-2">{data.location}</h3>
          <div className="flex gap-1 items-center justify-center mt-1">
            <h3 className="text-accent-blue font-bold text-sm">4.8</h3>
            <Image
              src="/icons/star-icon.svg"
              alt="star"
              width={12}
              height={12}
              className="mb-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
