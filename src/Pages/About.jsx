import React, { useEffect } from 'react'
import Breadcrumb from '../Components/SubComponents/Breadcrumb'
import Container from '../Components/SubComponents/Container'
import Flex from '../Components/SubComponents/Flex'
import Image from '../Components/SubComponents/Image'
import AboutImg1 from '/images/about-1.png'
import AboutImg2 from '/images/about-2.png'
import Button from '../Components/SubComponents/Button'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <Breadcrumb />
      <Container>

        <div>
          <Flex className='justify-evenly'>
            <div className='w-[47%] relative'>
              <Image src={AboutImg1} alt='About Image' className='w-full max-w-full' />
              <button className='w-[60px] sm:w-[100px] lg:w-[200px] xl:w-[250px] py-1 lg:py-4 xl:py-6 bg-primary text-[6px] sm:text-[10px] lg:text-base text-white font-bold absolute bottom-5 lg:bottom-16 left-[50%] translate-x-[-50%] hover:scale-105 duration-300'>Our Brands</button>
            </div>
            <div className='w-[47%] relative'>
              <Image src={AboutImg2} alt='About Image' className='w-full max-w-full' />
              <button className='w-[60px] sm:w-[100px] lg:w-[200px] xl:w-[250px] py-1 lg:py-4 xl:py-6 bg-primary text-[6px] sm:text-[10px] lg:text-base text-white font-bold absolute bottom-5 lg:bottom-16 left-[50%] translate-x-[-50%] hover:scale-105 duration-300'>Our Stores</button>
            </div>
          </Flex>
        </div>

        <div className='py-[50px] md:py-[80px] lg:py-[100px]'>
          <h2 className='text-primary font-medium text-base md:text-3xl lg:text-4xl leading-[30px] md:!leading-[40px] lg:!leading-[52px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h2>
        </div>

        <div className='mb-[50px] lg:mb-[130px]'>
          <Flex className='flex-col lg:flex-row gap-x-10'>
            <div className='w-full lg:w-1/3 mb-8 lg:mb-0'>
              <h5 className='text-primary text-xl md:text-2xl font-bold mb-2'>Our Vision</h5>
              <p className='text-sm md:text-base text-secondary leading-7 md:leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='w-full lg:w-1/3 mb-8 lg:mb-0'>
              <h5 className='text-primary text-xl md:text-2xl font-bold mb-2'>Our Story</h5>
              <p className='text-sm md:text-base text-secondary leading-7 md:leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>
            <div className='w-full lg:w-1/3 mb-8 lg:mb-0'>
              <h5 className='text-primary text-xl md:text-2xl font-bold mb-2'>Our Brands</h5>
              <p className='text-sm md:text-base text-secondary leading-7 md:leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
          </Flex>
        </div>

      </Container>
    </>
  )
}

export default About