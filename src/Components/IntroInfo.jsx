import React from 'react'
import Container from './SubComponents/Container'
import Flex from './SubComponents/Flex'
import { RiNumber2 } from "react-icons/ri";
import { FaTruck } from "react-icons/fa6";
import { IoReloadSharp } from "react-icons/io5";

const IntroInfo = () => {
  return (
    <section className='border-b border-[#F0F0F0] pb-2 sm:pb-5 sm:pt-4'>
        <Container>
            <Flex className='justify-between'>
                <Flex className='items-center gap-1 sm:gap-4'>
                    <div><RiNumber2 className='text-primary text-sm lg:text-2xl'/></div>
                    <h6 className='text-[8px] lg:text-base text-[#6D6D6D]'>Two years warranty</h6>
                </Flex>
                <Flex className='items-center gap-1 sm:gap-4'>
                    <div><FaTruck className='text-primary text-sm lg:text-2xl'/></div>
                    <h6 className='text-[8px] lg:text-base text-[#6D6D6D]'>Free shipping</h6>
                </Flex>
                <Flex className='items-center gap-1 sm:gap-4'>
                    <div><IoReloadSharp className='text-primary text-sm lg:text-2xl'/></div>
                    <h6 className='text-[8px] lg:text-base text-[#6D6D6D]'>Return policy in 30 days</h6>
                </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default IntroInfo