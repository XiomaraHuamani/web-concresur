
import React from 'react'
import Ggh from '../assets/img/LogoGHG.svg'
import Gemma from '../assets/img/LogoGemma.svg'
import Territorial from '../assets/img/LogoTerritorial.svg'
import Goar from '../assets/img/LogoGoar.svg'
import Dga from '../assets/img/LogoDga.svg'

const BanerLogos = () => {
  return (
    <div className="bg-primary-700 py-24 sm:py-10  w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary-400 text-center mb-30 ">
          Nuestras empresas vinculadas
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
          <img
            className="col-span-2 max-h-12 max-w-full object-contain lg:col-span-1"
            src={Ggh}
            alt="Transistor"
            width={108}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 max-w-full object-contain lg:col-span-1"
            src={Gemma}
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 max-w-full object-contain lg:col-span-1"
            src={Territorial}
            alt="Tuple"
            width={158}
            height={48} 
          />
          <img
            className="col-span-2 max-h-12 max-w-full object-contain sm:col-start-2 lg:col-span-1"
            src={Goar}
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 max-w-full object-contain sm:col-start-auto lg:col-span-1"
            src={Dga}
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  )
}

export default BanerLogos