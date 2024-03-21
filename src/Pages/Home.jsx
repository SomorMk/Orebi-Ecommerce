import React from 'react'
import Banner from '../Components/Banner'
import IntroInfo from '../Components/IntroInfo'
import Ads from '../Components/Ads'
import AdsBanner from '../Components/AdsBanner'
import NewArrival from '../Components/NewArrival'
import Bestseller from '../Components/Bestseller'
import SpecialOffer from '../Components/SpecialOffer'

const Home = () => {
  return (
    <>
      <Banner />
      <IntroInfo />
      <Ads />
      <NewArrival />
      <Bestseller />
      <AdsBanner />
      <SpecialOffer />
    </>
  )
}

export default Home