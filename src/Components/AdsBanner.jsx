import React from 'react'
import Container from './SubComponents/Container'
import Image from './SubComponents/Image'
import BannerAd from '/images/Ads/AdsBanner.png'
import { Link } from 'react-router-dom'

const AdsBanner = () => {
  return (
    <section className='md:my-[50px]'>
        <Container>
            <div>
                <Link to='/'><Image src={BannerAd} alt='Ads Banner' className='w-full max-w-full'></Image></Link>
            </div>
        </Container>
    </section>
  )
}

export default AdsBanner