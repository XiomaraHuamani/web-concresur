import { Link as LinkRouter } from "react-router-dom";
import React from "react";
import cart1 from "../assets/img/cart1.png";
import cart2 from "../assets/img/cart2.png";
import cart3 from "../assets/img/cart3.png";
import cart4 from "../assets/img/cart4.png";
import txcart1 from "../assets/img/txcart1.png";
import txcart2 from "../assets/img/txcart2.png";
import txcart3 from "../assets/img/txcart3.png";
import txcart4 from "../assets/img/txcart4.png";
import text5 from "../assets/img/Ranking.jpg";
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
    <>
      <div id="Servicios" className="bg-primary-700 w-full  relative">
        <div
          className="block xl:hidden absolute top-[-70px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-6 z-10 w-full max-w-sm sm:max-w-md md:max-w-lg text-center transition-transform duration-300"
          style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
        >
          <img
            src={text5}
            alt="Descripción"
            className="text-xl font-semibold mx-auto"
          />
          <p className="mt-2 text-sm" style={{ color: "#0451FF" }}>
            Descubre cómo se está construyendo la{" "}
            <span className="font-black">
              Primera Ciudad Comercial de Arequipa.
            </span>
          </p>
        </div>

        <div
          className="hidden xl:block absolute top-[-70px] left-1/2 transform -translate-x-[-80%] bg-white shadow-lg rounded-lg p-6 z-10 w-80 text-center transition-transform duration-300  hover:translate-x-[230px]"
          style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
        >
          <img
            src={text5}
            alt="Descripción"
            className="text-xl font-semibold mx-auto"
          />
          <p className="my-2 text-base mb-7" style={{ color: "#0451FF" }}>
            Descubre cómo se está construyendo la{" "}
            <span className="font-black">
              Primera Ciudad Comercial de Arequipa.
            </span>
          </p>
          <LinkRouter
            to={"/Construccion"}
            className="cursor-pointer bg-blue-600 rounded-full py-3 px-6  text-white"
          >
            ver mas
          </LinkRouter>
        </div>

        {/* Borde a lo largo del borde derecho, sobresaliendo la mitad del div */}

        <div className="w-full max-w-full mx-auto px-4 mt-14 sm:px-6 lg:px-20">
          <div className="mx-auto py-16 sm:py-24 lg:py-32">
            <h2 className="text-2xl xl:text-xl font-normal text-primary text-center">
              <span className="border-t border-primary inline-block mb-1">
                Servicios
              </span>
            </h2>
            <h2 className="text-5xl font-bold text-primary-400 text-center mb-16">
              Cubrimos todas tus necesidades
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-11">
              {callouts.map((callout) => (
                <div
                  key={callout.name}
                  className="flex-1 min-w-[150px] max-w-[250px] bg-white rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-51 w-full object-cover object-center transition duration-300 transform hover:scale-105"
                  />
                  <div className="flex justify-center items-center rounded-b-xl p-4 bg-white">
                    <img
                      src={callout.description}
                      alt={`${callout.name} description`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
