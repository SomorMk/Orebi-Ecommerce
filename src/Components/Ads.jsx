import React from 'react'
import Flex from './SubComponents/Flex'
import Container from './SubComponents/Container'
import Image from './SubComponents/Image'
import Ad1 from '/images/Ads/Ad_1.png'
import Ad2 from '/images/Ads/Ad_2.png'
import Ad3 from '/images/Ads/Ad_3.png'
import { Link } from 'react-router-dom'

const Ads = () => {
  return (
    <section className='my-[30px] md:my-[50px]'>
          <Container>
              <Flex className='gap-4 xl:gap-10 items-center'>
                  <div className='overflow-hidden'>
                      <Link to='/'><Image src={Ad1} alt='Ads Image' className='hover:scale-[1.02] duration-300' /></Link>
                  </div>
                  <Flex className='flex-col gap-2 sm:gap-3 xl:gap-10'>
                      <div className='overflow-hidden'>
                        <Link to='/'><Image src={Ad2} alt='Ads Image' className='hover:scale-[1.02] duration-300' /></Link>
                      </div>
                      <div className='overflow-hidden'>
                        <Link to='/'><Image src={Ad3} alt='Ads Image' className='hover:scale-[1.02] duration-300' /></Link>
                      </div>
                  </Flex>
              </Flex>
          </Container>
    </section>
  )
}

export default Ads