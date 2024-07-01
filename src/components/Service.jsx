import React from "react";
import cart1 from "../assets/img/cart1.svg";
import cart2 from "../assets/img/cart2.svg";
import cart3 from "../assets/img/cart3.svg";
import cart4 from "../assets/img/cart4.svg";
import txcart1 from "../assets/img/textcart1.svg";
import txcart2 from "../assets/img/textcart2.svg";
import txcart3 from "../assets/img/textcart3.svg";
import txcart4 from "../assets/img/textcart4.svg";

const callouts = [
  {
    name: "Desk and Office",
    description: txcart1,
    imageSrc: cart1,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: txcart2,
    imageSrc: cart2,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: txcart3,
    imageSrc: cart3,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Travel",
    description: txcart4,
    imageSrc: cart4,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

const Service = () => {
  return (
    <div className="bg-primary-700 w-full">
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-20">
        <div className="mx-auto py-16 sm:py-24 lg:py-32">
          <h2 className="text-2xl xl:text-xl font-normal text-primary text-center">
            <span className="border-t border-primary inline-block mb-1">
              Servicios
            </span>
          </h2>
          <h2 className="text-4xl font-bold text-primary-400 text-center mb-12">
            Cubrimos todas tus necesidades
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="flex-1 min-w-[200px] max-w-[350px] bg-white rounded-xl"
              >
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-50 w-full object-cover object-center rounded-t-xl"
                />
                <div className="flex justify-center items-center rounded-b-xl p-4 bg-white">
                  <img
                    src={callout.description}
                    alt={`${callout.name} description`}
                    className="h-full w-full object-cover object-center rounded-b-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
