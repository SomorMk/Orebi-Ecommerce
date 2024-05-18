import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from './SubComponents/Image'
import Container from './SubComponents/Container'
import BannerImg1 from '/images/banner1.png'
import BannerImg2 from '/images/banner2.png'
import BannerImg3 from '/images/banner3.png'
import { Link } from 'react-router-dom';

const Banner = () => {
  let [activeDot, setActiveDot] = useState('')
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    beforeChange: (prev, next) => {
      setActiveDot(next)
    },
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          transform: 'translateY(-50%)'
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i == activeDot ? {
            width: "30px",
            color: "#262626",
            fontSize: '12px',
            borderRight: "3px #262626 solid",
            padding: '8px 0',
            cursor: 'pointer'
          } : {
            width: "30px",
            color: "transparent",
            fontSize: '12px',
            borderRight: "3px white solid",
            padding: '8px 0',
            cursor: 'pointer'
          }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          appendDots: dots => (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '2%',
                transform: 'translateY(-50%)'
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={
                i == activeDot ? {
                  width: "15px",
                  color: "#262626",
                  fontSize: '8px',
                  borderRight: "1px #262626 solid",
                  padding: '1px 0',
                  cursor: 'pointer'
                } : {
                  width: "15px",
                  color: "transparent",
                  fontSize: '8px',
                  borderRight: "1px white solid",
                  padding: '1px 0',
                  cursor: 'pointer'
                }
              }
            >
              0{i + 1}
            </div>
          )
        }
      }
    ]
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div className='w-full'>
            <Link to='/' className='outline-0'>
              <Image src={BannerImg2} alt='Banner Image' className='w-full' />
            </Link>
          </div>
          <div className='w-full'>
            <Link to='/' className='outline-0'>
              <Image src={BannerImg1} alt='Banner Image' className='w-full' />
            </Link>
          </div>
          <div className='w-full'>
            <Link to='/' className='outline-0'>
              <Image src={BannerImg3} alt='Banner Image' className='w-full' />
            </Link>
          </div>
          <div className='w-full'>
            <Link to='/' className='outline-0'>
              <Image src={BannerImg1} alt='Banner Image' className='w-full' />
            </Link>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Banner