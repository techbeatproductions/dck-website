import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { SiTiktok } from 'react-icons/si'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gradientColor1 to-gradientColor2 '>
      <div >
        Footer
      </div>
      <div></div>
      <div className='flex flex-row justify-center space-x-5 fill-current text-accent mb-8'>
        <a href=""><BsFacebook /></a>
        <a href=""><GrInstagram /></a>
        <a href=""><SiTiktok /></a>
        
      </div>
      <div className='flex flex-row justify-center space-x-2 fill-current text-accent mb-4'>
        <AiOutlineCopyrightCircle />
        <p className='font-sans text-xs font-regular'>Tech Beat Productions</p>
        
      </div>
    </div>
  )
}

export default Footer