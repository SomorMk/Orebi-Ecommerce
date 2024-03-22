import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
    let path = window.location.pathname.split('/')
  return (
    <section className='my-16 sm:my-24 lg:my-32'>
        <Container>
            <h1 className='text-primary text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-5 capitalize'>{path}</h1>
            <Flex className='items-center gap-x-1'>
                <Link to='/'><span className='text-xs sm:text-sm text-secondary hover:text-primary'>Home</span></Link>
                <IoIosArrowForward className='text-xs sm:text-sm text-secondary' />
                <span className='capitalize text-xs sm:text-sm text-secondary'>{path}</span>
            </Flex>
        </Container>
    </section>
  )
}

export default Breadcrumb