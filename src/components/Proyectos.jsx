import React from 'react'
import FormContact from './FormContact'
import { SubtitleComponent } from './SubtitleComponent'
import { TitleComponent } from './TitleComponent'
import { DescriptionCard } from './DescriptionCard'
import imgProyecto from '../assets/img/fachada.png'
import { LocationMarkerIcon } from '@heroicons/react/outline';


const Proyectos = () => {
  return (
    <div id="Proyectos" className="bg-primary-100 w-full">
      <div className="bg-primary-100 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-20">
        <div className="mx-auto py-16 sm:py-24 lg:py-32 ">
          <h2 className="text-2xl xl:text-xl font-normal text-primary text-center ">
            <span className="border-t border-primary inline-block mb-1">
              Proyectos
            </span>
          </h2>
          <h2 className="text-5xl font-bold text-primary-400 pb-12 text-center mb-5">
            Construccion de Gemma
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-1 xl:gap-20 xxl:gap-[106px]">
            <div className="col-span-1 lg:col-span-2 p-0">
              <img
                className="block w-full lg:pl-20 lg:pr-14"
                src={imgProyecto}
                alt="Proyecto" />
            </div>

            <div className="col-span-1 py-0 md:pt-10 lg:py-1 md:px-6 lg:px-0 lg:pr-20 flex flex-col gap-6">
              <div className="flex flex-col-reverse md:flex-col gap-6 items-center lg:items-start">
                <h4 className="text-lg leading-[140%] font-normal text-secondary-900 text-left flex items-center">
                  <LocationMarkerIcon className="h-5 w-5 text-primary-400 mr-2" />
                  Arequipa
                </h4>
              </div>
              <h3 className="text-left text-[32px] sm:text-4xl leading-[110%] font-bold text-primary-400 w-full">
                La primera ciudad comercial del sur del Perú
              </h3>

              <span className="leading-[140%] inline-block text-primary-400 mb-20 text-xl text-left">
                Concresur está colaborando activamente en la construcción de Gemma, un proyecto que
                fusiona el modelo comercial tradicional con infraestructura moderna y gestión
                profesional. Gemma ofrece más de 60,000 m2 de áreas comerciales y de esparcimiento.
                Este centro comercial será un nuevo punto de encuentro en la ciudad y una gran
                oportunidad para comerciantes e inversores.
              </span>
              <button className="bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-primary-800 transition duration-300 ease-in-out">
                Ver Más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proyectos