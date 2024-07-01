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

const Footer = () => {
  return (
    <div className="bg-primary-800 md:px-[100px] lg:px-[150px] px-[50px] py-[56px] flex xl:flex-row flex-col-reverse md:gap-24 gap-10 w-full">
      <div className='max-w-[331px]'>
        <div className='flex items-end'>
          <img src={'/src/assets/img/nav-logo.svg'} alt="My Icon" width="200" height="90" className='h-[50px] w-[200px] pl-2' />
        </div>
        <div className="pt-6 md:pt-10">
          <span className="text-[#F5F5FB] text-xs sm:text-sm font-normal">
            Primera Ciudad Comercial de Arequipa. Convierte tus sueños de negocios en realidad con nuestros locales comerciales y disfruta de un espacio único donde la diversidad y la prosperidad se encuentran.
          </span>
        </div>
        <div className='pt-4 sm:pt-[26px]'>
          <span className='pt:4 sm:pt-6 text-[#FFF] text-sm'>
            © 2024 Corporación Gemma. Todos los derechos reservados.
          </span>
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:gap-24 gap-10'>
        <div className=''>
          <h2 className="text-[#F5F5FB] text-lg font-bold">Secciones</h2>
          <div className="text-primary-100 flex-col gap-2 sm:gap-4 inline-flex pt-6 md:pt-10 text-sm">
            <ul className='space-y-2'>
              {
                Routes.map(route => (
                  <li key={route.id} >
                    <Link
                      activeClass="active"
                      to={route.url}
                      spy={true}
                      smooth={true}
                      offset={-112}
                      duration={700}
                      className='cursor-pointer'
                    >
                      {route.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className='max-w-[248px]'>
          <h2 className=' text-[#F5F5FB] text-lg font-bold'>Contacto</h2>
          <div className="text-primary-100 flex-col inline-flex gap-4 pt-6 md:pt-10 text-xs sm:text-sm">
            <div className='flex justify-start'>
              <BsFillTelephoneFill className="text-[20px]" />
              <span className='pl-4'>954 184 431</span>
            </div>
            <div className="flex justify-start">
              <MdEmail className="text-[22px]" />
              <span className='pl-4'>info@gemmaperu.com</span>
            </div>
            <div className='flex justify-start'>
              <HiLocationMarker className="text-[30px]" />
              <span className='pl-4'>Urb. Magisterial Etapa II F-4 <br></br> Al frente del Estadio Umacollo</span>
            </div>
          </div>
        </div>
        <div className=''>
          <h2 className=' text-[#F5F5FB] text-lg font-bold'>Redes Sociales</h2>
          <div className="text-primary-100 gap-4 inline-flex pt-6 md:pt-10 ">
            <SocialAncor
              icon={<FaFacebookF className="text-[17px]" />}
              url={'https://www.facebook.com/ecomercadosgemmacc/'}
            />
            <SocialAncor
              icon={<FaInstagram className="text-[17px]" />}
              url={'https://www.instagram.com/gemmaciudadcomercial/'}
            />
            <SocialAncor
              icon={<SiLinkedin className="text-[17px]" />}
              url={'https://www.linkedin.com/company/ecomercados-gemma-ciudad-comercial/mycompany/'}
            />
            <SocialAncor
              icon={<FaYoutube className="text-[17px]" />}
              url={'https://www.youtube.com/@gemma0605'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
