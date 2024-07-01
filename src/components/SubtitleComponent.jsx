import React from 'react'

export const SubtitleComponent = ({ children }) => {
  return (
    <div className='text-[1rem] md:text-2xl font-bold leading-[110%] uppercase tracking-[.2rem] md:tracking-[.3rem] text-primary'>
      {children}
    </div>
  )
}
