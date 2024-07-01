import React from 'react'
import FormContact from './FormContact'
import { SubtitleComponent } from './SubtitleComponent'
import { TitleComponent } from './TitleComponent'
import { DescriptionCard } from './DescriptionCard'
import imgProyecto from '../assets/img/constGemma.svg'

const Proyectos = () => {
  return (
    <div className="bg-primary-100 w-full">
      {/* <div className="bg-primary-100 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-20 border border-red-600"> */}
        <div className="mx-auto py-16 sm:py-24 lg:py-32 ">
          <h2 className="text-2xl xl:text-xl font-normal text-primary text-center ">
            <span className="border-t border-primary inline-block mb-1">
              Proyectos
            </span>
          </h2>
          <h2 className="text-5xl font-bold text-primary-400 text-center mb-5">
            Construccion de Gemma
          </h2>

          {/* <div className="w-full  mt-6 md:mt-0 bg-secondary border border-red-500" id="contacto" > */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center  lg:px-0 xl:px-0 xxl:px-0 lg:py-16 gap-1 xl:gap-20 xxl:gap-[106px]  border border-red-700">
          <img
          src={imgProyecto}
          alt="Reform"
          width={800}
          height={600}
          />
          
        
        <div className='py-0 md:pt-10 lg:py-1 md:px-6 lg:px-0 flex flex-col gap-6 border border-red-600'>
          <div className='flex flex-col-reverse md:flex-col gap-6 items-center lg:items-start'>
              <h4 className='text-lg leading-[140%] font-normal text-secondary-900 text-left'>Arequipa</h4>
          </div>
            <h3 className='text-rigth text-[32px] sm:text-4xl-c text-secondary-900 leading-[110%] inline-block w-full'>
              La primera ciudad comercial del sur del Peru
            </h3>
          
            <span className='text-lg leading-[140%] font-normal text-secondary-900 text-left '>
              Concresur está colaborando activamente en la construcción de Gemma, un proyecto que 
              fusiona el modelo comercial tradicional con infraestructura moderna y gestión 
              profesional. Gemma ofrece más de 60,000 m2 de áreas comerciales y de esparcimiento. 
              Este centro comercial será un nuevo punto de encuentro en la ciudad y una gran 
              oportunidad para comerciantes e inversores.
            </span>
        </div>
        
      </div>
    </div>
        </div>
      // </div>
    // </div>
  )
}

export default Proyectos