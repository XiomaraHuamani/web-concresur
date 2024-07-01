import React from 'react'
import FormContact from './FormContact'
import { SubtitleComponent } from './SubtitleComponent'
import { TitleComponent } from './TitleComponent'
import { DescriptionCard } from './DescriptionCard'

const SecondCallToAction = () => {
  return (
    <div className="w-full mt-6 md:mt-0 bg-secondary" id="contacto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-4 py-6 sm:px-10 md:px-16 lg:px-16 xl:px-24 xxl:px-32 lg:py-16 gap-12 xl:gap-20 xxl:gap-[106px]">
        <div className='py-0 md:pt-10 lg:py-16 md:px-6 lg:px-0 flex flex-col gap-6'>
          <div className='flex flex-col-reverse md:flex-col gap-6 items-center lg:items-start'>
            {/* <div className='w-[160px] h-[160px] bg-primary-200 rounded-full overflow-hidden'>
              <img src="/src/assets/img/avatar_2.png" width={160} alt="avatar_1" className='h-[160px]' />
            </div> */}
            <SubtitleComponent>
              <h4 className='text-primary'>°°°°°°°°°°°°°°°°°°°°°°</h4>
            </SubtitleComponent>
          </div>
          <TitleComponent>
            <h3 className='text-primary pr-0 xl:pr-10 text-center lg:text-left'> Empieza tu proyecto con nosotros</h3>
          </TitleComponent>
          <DescriptionCard>
            <span className='text-primary inline-block text-center lg:text-left'> Completa el formulario y recibe asesoria.</span>
          </DescriptionCard>
        </div>
        <div>
          <FormContact />
        </div>
      </div>
    </div>
  )
}

export default SecondCallToAction
