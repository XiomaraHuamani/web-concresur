import React from 'react'

const SocialAncor = ({ icon, url }) => {
  return (
    <div className=" w-[16px] h-[18px]">
      <a className=" block" href={url} target="__blank">
        {icon}
      </a>
    </div>
  )
}

export default SocialAncor