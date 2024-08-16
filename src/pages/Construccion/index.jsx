import { get } from "lodash";
import React from "react";
import Layout from "../../components/layout";
import navlogo from "/assets/img/foto.png";
import { ClipboardCheckIcon } from "@heroicons/react/outline";

const Construccion = ({ deviceType }) => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center w-full mt-[88px]">
          <img src={navlogo} alt="My Icon" className="w-full -mt-16" />
          <div className="w-full max-w-full mx-auto px-4 mt-20  sm:px-6 lg:px-20">
            <h2 className="text-5xl font-bold text-primary text-center mb-16">
              Cubrimos todas tus necesidades
            </h2>
          </div>
        </div>
        <div className="container mx-auto sm:px-4 mb-20">
          <div
            className="flex flex-col lg:flex-row justify-center items-center gap-4"
            style={{ margin: "0 auto" }}
          >
            <div className="flex-1 py-0 md:pt-10 flex flex-col gap-4">
              <div className="flex flex-col-reverse md:flex-col gap-2 items-center lg:items-start">
                <h4 className="text-lg leading-[140%] font-normal text-secondary-900 text-left flex items-center ">
                  <ClipboardCheckIcon className="h-5 w-5 text-primary-400 mr-2" />
                  Descripción de la obra
                </h4>
              </div>
              <h3 className="text-left text-[28px] sm:text-3xl leading-[110%] font-bold text-primary-400 w-full mb-9">
                La primera Ciudad Comercial del Sur del Perú.
              </h3>
              <span className="leading-[140%] inline-block text-primary-400 text-lg text-left">
                Referencia -----este nuevo centro comercial tiene cines, tiendas
                anclas, restaurantes, gimnasios, tiendas intermedias,
                estacionamientos, entre otros espacios y cuenta con más de
                245,000 m2 techados. Contará con una conexión directa a la
                estación central del Metropolitano II.   Concresur logró cumplir
                con los requerimientos de esta obra, con una entrega de 25,000
                m3 mensuales, suministrando un total de 145,400 m3 de concreto,
                124,ooo de los cuales fueron bombeados.   Para cumplir con este
                reto se asignó la atención desde tres plantas cercanas a la
                obra, una flota exclusiva de 42 mixers y 11 bombas.------
              </span>
            </div>
            <div className="flex-1 text-white flex justify-center items-center lg:ml-6 ">
              <div className="bg-primary p-5 rounded-lg relative shadow-2xl p-10">
                <h4 className="text-left text-[20px] sm:text-2xl leading-[110%] font-bold w-full">
                  Propietario
                </h4>
                <span className="leading-[140%] mb-5 inline-block text-base text-left">
                  Gemma Holding Group - GHG
                </span>
                <h4 className="text-left text-[20px] sm:text-2xl leading-[110%] font-bold w-full">
                  Constructor
                </h4>
                <span className="leading-[140%] mb-5 inline-block text-base text-left">
                  Goar Constructora
                </span>
                <h4 className="text-left text-[20px] sm:text-2xl leading-[110%] font-bold w-full">
                  Ubicación
                </h4>
                <span className="leading-[140%] mb-5 inline-block text-base text-left">
                  Av Italia / Industrial, Cerro Colorado, Arequipa
                </span>
                <h4 className="text-left text-[20px] sm:text-2xl leading-[110%] font-bold w-full">
                  Metros cúbicos de concreto
                </h4>
                <span className="leading-[140%] mb-5 inline-block text-base text-left">
                  100,000 m3 aprox.
                </span>
                <h4 className="text-left text-[20px] sm:text-2xl leading-[110%] font-bold w-full">
                  Concreto Bombeado
                </h4>
                <span className="leading-[140%] mb-5 inline-block text-base text-left">
                  ----138,000 m3----
                </span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Construccion;
