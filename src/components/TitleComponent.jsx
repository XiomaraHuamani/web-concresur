import React from 'react'

export const TitleComponent = ({ children }) => {
  return (
    <div className='text-left text-[32px] sm:text-4xl-c text-secondary-900 leading-[110%] font-bold w-full'>
      {children}
    </div>
  )
}
