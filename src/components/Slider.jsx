import React from "react";
import cart1 from "../assets/img/cart1.svg";
import constructor from '../assets/img/constructor.jpg'



const Slider = () => {
  return (
    <div  id="Nosotros" className="bg-primary-700 w-full py-24 sm:pt-30 sm:pb-12">
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-20 ">
        <h2 className="text-2xl xl:text-xl font-normal text-primary text-center">
          <span className="border-t border-primary inline-block mb-3">
            ¿Quienes somos?
          </span>
        </h2>

        <h2 className="text-5xl font-bold text-primary-400 text-center mb-5">
          Tu aliado en soluciones integrales de concreto
        </h2>
        <div className="lg:py-1">
          <div className="max-w-4xl mx-auto">
            <h5 className="border-primary inline-block text-primary-400 text-center mb-20 text-xl">
              En Concresur, nos destacamos por ofrecer soluciones integrales y eficientes en concreto premezclado
              y prefabricados. Nuestro compromiso con la calidad y la satisfacción del cliente se refleja en nuestro
              servicio personalizado y asesoría técnica especializada, esenciales para garantizar el éxito y la seguridad
              en cada proyecto en el que participamos. 
            </h5>
          </div>
        </div>
        <div className="flex justify-center">
        <img
          className="object-cover object-center rounded-xl"
          src={constructor}
          alt=""
          style={{ width: '1050px', height: '600px' }} />
        </div>
      </div>
    </div>

  );
};

export default Slider;
