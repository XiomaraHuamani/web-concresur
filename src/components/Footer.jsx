import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { SiLinkedin } from 'react-icons/si'
import { Link } from 'react-scroll'
import { Routes } from '../resources/navBarRoutes'
import SocialAncor from './SocialAncor'
import navlogo from '../assets/img/nav-logo.svg'


const Footer = () => {
  return (
    <div className="bg-primary-800 md:px-[100px] lg:px-[150px] px-[50px] py-[56px] flex xl:flex-row flex-col-reverse md:gap-24 gap-10 w-full">
      <div className="max-w-[331px]">
        <div className="flex items-end">
          <img src={navlogo} alt="My Icon" width="200" height="90" className="h-[50px] w-[200px] pl-2" />
        </div>
        <div className="pt-6 md:pt-10">
          <span className="text-[#F5F5FB] text-xs sm:text-sm font-normal">
            Empresa concretera creada para lograr satisfacer las necesidades de los clientes brindándoles soluciones integrales e inmediatas a las obras de construcción, a través de un producto de calidad, con un servicio de asesoría y atención personalizada y permanente, con precios competitivos.
          </span>
        </div>
        <div className="pt-4 sm:pt-[26px]">
          <span className="pt:4 sm:pt-6 text-[#FFF] text-sm">
            © 2024 Concresur. Todos los derechos reservados.
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-24 gap-10">
        <div className="">
          <h2 className="text-[#F5F5FB] text-lg font-bold">Secciones</h2>
          <div className="text-primary-100 flex-col gap-2 sm:gap-4 inline-flex pt-6 md:pt-10 text-sm">
            <ul className="space-y-2">
              {Routes.map(route => (
                <li key={route.id}>
                  <Link
                    activeClass="active"
                    to={route.url}
                    spy={true}
                    smooth={true}
                    offset={-112}
                    duration={700}
                    className="cursor-pointer hover:text-primary transition-colors duration-300"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-[248px]">
          <h2 className="text-[#F5F5FB] text-lg font-bold">Contacto</h2>
          <div className="text-primary-100 flex-col inline-flex gap-4 pt-6 md:pt-10 text-xs sm:text-sm">
            <div className="flex justify-start items-center hover:text-primary transition-colors duration-300">
              <MdEmail className="text-[22px]" />
              <span className="pl-4">admin@concresur.pe</span>
            </div>
            <div className="flex justify-start items-center hover:text-primary transition-colors duration-300">
              <HiLocationMarker className="text-[30px]" />
              <span className="pl-4">Urb. Magisterial Etapa II F-4 <br></br> Al frente del Estadio Umacollo</span>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-[#F5F5FB] text-lg font-bold">Redes Sociales</h2>
          <div className="text-primary-100 gap-4 inline-flex pt-6 md:pt-10 ">
            <SocialAncor
              icon={<FaFacebookF className="text-[25px] hover:text-primary transition-colors duration-180" />}
              url={"https://www.facebook.com/ecomercadosgemmacc/"}
            />
            <SocialAncor
              icon={<FaInstagram className="text-[25px] hover:text-primary transition-colors duration-300" />}
              url={"https://www.instagram.com/gemmaciudadcomercial/"}
            />
            <SocialAncor
              icon={<SiLinkedin className="text-[25px] hover:text-primary transition-colors duration-300" />}
              url={"https://www.linkedin.com/company/ecomercados-gemma-ciudad-comercial/mycompany/"}
            />
            <SocialAncor
              icon={<FaYoutube className="text-[25px] hover:text-primary transition-colors duration-300" />}
              url={"https://www.youtube.com/@gemma0605"}
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer
