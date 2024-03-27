import React from 'react'
import Container from './SubComponents/Container'
import Flex from './SubComponents/Flex'
import FooterMenuCol, { FooterContact, FooterMenuItem } from './SubComponents/FooterMenuCol'
import Image from './SubComponents/Image'
import Logo from '/images/logo.png'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='py-8 lg:py-14 bg-footerBg'>
        <Container>
            <Flex className='flex-col lg:flex-row'>

                <Flex className='w-full lg:w-6/12 order-2 lg:order-1'>
                    <div className='w-4/12'>
                        <FooterMenuCol colName='menu'>
                            <FooterMenuItem itemName='Home' to='/' />
                            <FooterMenuItem itemName='Shop' to='/shop' />
                            <FooterMenuItem itemName='About' to='/about' />
                            <FooterMenuItem itemName='Contact' to='/contact' />
                            <FooterMenuItem itemName='Journal' to='/journal' />
                        </FooterMenuCol>
                    </div>
                    <div className='w-4/12'>
                        <FooterMenuCol colName='shop'>
                            <FooterMenuItem itemName='Category 1' to='/' />
                            <FooterMenuItem itemName='Category 2' to='/' />
                            <FooterMenuItem itemName='Category 3' to='/' />
                            <FooterMenuItem itemName='Category 4' to='/' />
                            <FooterMenuItem itemName='Category 5' to='/' />
                        </FooterMenuCol>
                    </div>
                    <div className='w-4/12'>
                        <FooterMenuCol colName='help'>
                            <FooterMenuItem itemName='Privacy Policy' to='/' />
                            <FooterMenuItem itemName='Terms & Conditions' to='/' />
                            <FooterMenuItem itemName='Special E-shop' to='/' />
                            <FooterMenuItem itemName='Shipping' to='/' />
                            <FooterMenuItem itemName='Secure Payments' to='/' />
                        </FooterMenuCol>
                    </div>
                </Flex>

                <Flex className='w-full lg:w-6/12 flex-col lg:flex-row order-1 lg:order-2 mb-10 lg:mb-0'>

                    <div className='w-full lg:w-6/12 order-2 lg:order-1'>
                        <FooterContact />
                    </div>

                    <div className='w-full lg:w-6/12 order-1 lg:order-2 mb-5 lg:mb-0'>
                        <div>
                            <Image src={Logo} alt='Logo' className='w-full max-w-[70px] md:max-w-[100px]' />
                        </div>
                    </div>

                </Flex>

            </Flex>

            <Flex className='flex-col items-center lg:flex-row lg:justify-between lg:items-center mt-10'>
                <div>
                    <ul className='flex gap-5'>
                        <li><Link><FaFacebookF className='text-xs lg:text-base text-primary hover:scale-125 duration-300' /></Link></li>
                        <li><Link><FaInstagram className='text-xs lg:text-base text-primary hover:scale-125 duration-300' /></Link></li>
                        <li><Link><FaLinkedinIn className='text-xs lg:text-base text-primary hover:scale-125 duration-300' /></Link></li>
                    </ul>
                </div>
                <div className='mt-4 lg:mt-0'>
                    <p className='text-[10px] lg:text-xs text-[#6d6d6d] text-center lg:text-left'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>
            </Flex>

        </Container>
    </footer>
  )
}

export default Footer