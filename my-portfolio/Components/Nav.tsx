import { FiAlignJustify } from "react-icons/fi";import React from 'react'

interface Props {
    openNav: () => void;
}


const Nav = ({openNav}:Props) => {
  return (
    <div className='w-[100%] top-0 h-[12vh] bg-[#141c27] shadow-md'>
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold '>
                WEB
                <span className='text-yellow-300'>DEV</span>
            </h1>
            <div className='nav-link font-semibold text-yellow-300 cursor-pointer'>HOME</div>
            <div className='nav-link font-semibold cursor-pointer'>SERVICES</div>
            <div className='nav-link font-semibold cursor-pointer'>PROJECTS</div>
            <div className='nav-link font-semibold cursor-pointer'>ABOUT</div>
            <div className='nav-link font-semibold cursor-pointer'>CONTACT</div>
            <div onClick={openNav}>
                <FiAlignJustify className="w-[2rem] h-[2rem] md:hidden cursor-pointer text-yellow-400"/>
            </div>
        </div>

    </div>
  )
}

export default Nav