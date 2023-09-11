"use client";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
const Accordion = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <div
          className={`rounded-lg ease-in duration-200 custom-shadow  ${
            open ? "bg-accent-blue text-white" : "bg-white"
          }`}
        >
          <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2  transition-all focus:outline-none gap-4 h-12 items-center">
            <span className="font-medium  text-start">
              كيف يمكنني حجز تذكرة طيران على الموقع؟
            </span>

            <div
              className={` ${
                open ? "rotate-180 transform" : ""
              } ease-in duration-300 fill-white`}
            >
              <svg
                width="14"
                height="8"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.99967 1.35409L9.29134 8.64575L16.583 1.35409"
                  stroke={open ? "#fff" : "#177171"}
                  stroke-width="2.1875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-2 pb-2">
            <p>اختر وجهة أحلامك من بين مجموعة واسعة من الخيارات </p>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default Accordion;
