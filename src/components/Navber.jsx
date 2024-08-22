import React, { useState } from 'react'
import Container from '../layer/Container'
import Img from '../layer/Img'

import Logo from '/logo.png'
import Li from '../layer/Li'
import { PiDotsNineBold } from 'react-icons/pi'
import { IoClose } from 'react-icons/io5'

const Navber = () => {

  let [show, setShow] = useState(true)

  return (
    <div className='bg-slate-100'>
      <Container className="flex justify-between items-center py-3 md:py-8 px-3 md:px-0 relative">
        <Img src={Logo} />
        {
          show && (
            <ul className='w-full gap-x-10 justify-center absolute left-0 top-full md:static flex flex-col md:flex-row bg-orange-200 md:bg-transparent p-4 md:p-0 text-right md:text-left '>
              <Li className="text-[#262626]" listItem="Home" />
              <Li listItem="Shop" />
              <Li listItem="About" />
              <Li listItem="Contacts" />
              <Li listItem="Journal" />
            </ul>
          )
        }

        <div onClick={()=> setShow(!show)} className='block md:hidden'>
         
         {/* {
          show ? <IoClose /> :  
          <PiDotsNineBold />
         } */}
        <IoClose className={`absolute top-1/2 -translate-y-1/2 right-3 transition-all duration-300 ${show?"opacity-100":"opacity-0 rotate-90"}`} /> 
        <PiDotsNineBold className={`absolute top-1/2 -translate-y-1/2 right-3 transition-all duration-300 ${show?"opacity-0":"opacity-100 -rotate-90"}`} />

        </div>

      </Container>
    </div>
  )
}

export default Navber