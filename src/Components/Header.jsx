import React, { useState } from 'react'
import Flex from './SubComponents/Flex'
import Container from './SubComponents/Container'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";

const Header = () => {
  return (
    <header className='py-6 bg-[#F5F5F3]'>
      <Container>
        <Flex className='justify-between items-center'>

          <div>
            <Flex className='items-center gap-3 cursor-pointer'>
              <HiMiniBars3BottomLeft className='text-xl' />
              <p className='text-primary text-xs lg:text-sm font-semibold hidden md:block'>Shop by Category</p>
            </Flex>
          </div>

          <div className='relative'>

            <input type="text"  placeholder='Search Products' className='sm:w-[300px] md:w-[420px] lg:w-[500px] pl-2 pr-10 sm:pl-5 sm:pr-14 py-3 bg-white placeholder:text-[#C4C4C4] text-xs sm:text-sm rounded-md' />

            <div className='absolute top-[50%] right-2 translate-y-[-50%] p-2 rounded-full hover:bg-[#F5F5F3] duration-300'>
              <IoSearch className='text-base sm:text-xl text-primary'/>
            </div>

          </div>

          <div>
            <Flex className='items-center gap-3 sm:gap-10'>
              <Flex className='items-center sm:gap-1 cursor-pointer'>
                <FaUser className='text-sm sm:text-xl' />
                <BiSolidDownArrow className='text-[10px]' />
              </Flex>
              <div className='cursor-pointer'>
                <FaCartShopping className='text-sm sm:text-xl' />
              </div>
            </Flex>
          </div>

        </Flex>
      </Container>
    </header>
  )
}

export default Header