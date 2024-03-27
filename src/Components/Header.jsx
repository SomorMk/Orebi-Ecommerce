import React, { useEffect, useRef, useState } from 'react'
import Flex from './SubComponents/Flex'
import Container from './SubComponents/Container'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import List from './SubComponents/List'
import ListItem from './SubComponents/ListItem'
import { Link } from 'react-router-dom';
import Image from './SubComponents/Image'
import CartImage from '/images/cart-image.png'

const Header = () => {
  let [catagoryModal, setcatagoryModal] = useState(false)
  let [userModal, setUserModal] = useState(false)
  let [cartModal, setCartModal] = useState(false)

  let catagoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {

      (()=>{
        if (!catagoryRef.current.contains(e.target)) {
          setcatagoryModal(false)
        }
      })();

      (()=>{
        if (!userRef.current.contains(e.target)) {
        setUserModal(false)
      }
      })();

      (()=>{
        if (!cartRef.current.contains(e.target)) {
        setCartModal(false)
      }
      })();

    })
  }, [])



  return (
    <header className='py-3 sm:py-6 bg-headerBg'>
      <Container>
        <Flex className='justify-between items-center'>

          <div ref={catagoryRef} className='relative'>

            <Flex onClick={() => setcatagoryModal(!catagoryModal)} className='items-center gap-3 cursor-pointer'>
              {/* {
                catagoryModal ? <RxCross2 className='text-xl' /> : <HiMiniBars3BottomLeft className='text-xl' />
              } */}
              <HiMiniBars3BottomLeft className='text-xl' />
              <p className='text-primary text-xs lg:text-sm font-semibold hidden md:block'>Shop by Category</p>
            </Flex>

            <List className={`absolute top-[200%] left-0 z-10 w-[180px] sm:w-[260px] duration-300 ${catagoryModal ? 'block' : 'hidden'}`}>
              <ListItem className='border-b border-[#3e3e3e]'>
                <Link to='/' className='py-3 px-4 bg-primary block text-[rgba(255,255,255,0.7)] text-xs sm:text-sm hover:pl-8 hover:text-white hover:font-bold duration-300'>Accesories</Link>
              </ListItem>
              <ListItem className='border-b border-[#3e3e3e]'>
                <Link to='/' className='py-3 px-4 bg-primary block text-[rgba(255,255,255,0.7)] text-xs sm:text-sm hover:pl-8 hover:text-white hover:font-bold duration-300'>Furniture</Link>
              </ListItem>
              <ListItem className='border-b border-[#3e3e3e]'>
                <Link to='/' className='py-3 px-4 bg-primary block text-[rgba(255,255,255,0.7)] text-xs sm:text-sm hover:pl-8 hover:text-white hover:font-bold duration-300'>Electronics</Link>
              </ListItem>
              <ListItem className='border-b border-[#3e3e3e]'>
                <Link to='/' className='py-3 px-4 bg-primary block text-[rgba(255,255,255,0.7)] text-xs sm:text-sm hover:pl-8 hover:text-white hover:font-bold duration-300'>Clothes</Link>
              </ListItem>
              <ListItem className='border-b border-[#3e3e3e]'>
                <Link to='/' className='py-3 px-4 bg-primary block text-[rgba(255,255,255,0.7)] text-xs sm:text-sm hover:pl-8 hover:text-white hover:font-bold duration-300'>Bags</Link>
              </ListItem>
              <ListItem className='border-b border-[#3e3e3e]'>
                <Link to='/' className='py-3 px-4 bg-primary block text-[rgba(255,255,255,0.7)] text-xs sm:text-sm hover:pl-8 hover:text-white hover:font-bold duration-300'>Home appliances</Link>
              </ListItem>
            </List>

          </div>

          <div className='relative'>

            <input type="text" placeholder='Search Products' className='sm:w-[300px] md:w-[420px] lg:w-[500px] pl-2 pr-10 sm:pl-5 sm:pr-14 py-3 bg-white placeholder:text-[#C4C4C4] text-xs sm:text-sm rounded-md' />

            <div className='absolute top-[50%] right-2 translate-y-[-50%] p-2 rounded-full hover:bg-[#F5F5F3] duration-300 cursor-pointer'>
              <IoSearch className='text-base sm:text-xl text-primary' />
            </div>

          </div>

          <div>
            <Flex className='items-center gap-3 sm:gap-10'>

              <div ref={userRef} className='relative'>

                <Flex onClick={() => setUserModal(!userModal)} className='items-center sm:gap-1 cursor-pointer'>
                  <FaUser className='text-sm sm:text-xl' />
                  <BiSolidDownArrow className={`text-[10px] duration-300 ${userModal && 'rotate-180'}`} />
                </Flex>

                <List className={`absolute top-[270%] sm:top-[200%] right-0 w-[150px] z-10 sm:w-[200px] duration-300 ${userModal ? 'block' : 'hidden'}`}>
                  <ListItem>
                    <Link to='/my-account' className='py-3 px-4 sm:py-4 sm:px-5 text-xs sm:text-sm bg-primary text-white block text-center border border-[#ece6e6]'>My Account</Link>
                  </ListItem>
                  <ListItem>
                    <Link to='/login' className='py-3 px-4 sm:py-4 sm:px-5 text-xs sm:text-sm bg-white text-primary block text-center border border-[#ece6e6]'>Log In</Link>
                  </ListItem>
                </List>

              </div>

              <div ref={cartRef} className='relative'>

                <div onClick={() => setCartModal(!cartModal)} className='cursor-pointer'>
                  <FaCartShopping className='text-base sm:text-xl' />
                </div>

                <List className={`absolute top-[250%] sm:top-[200%] right-0 z-10 w-[300px] sm:w-[360px] bg-gray-200 border border-[#F0F0F0] ${cartModal ? 'block' : 'hidden'}`}>

                  <ListItem className='p-5 bg-headerBg'>
                    <Flex className='items-center gap-5 w-full'>
                      <div>
                        <Image src={CartImage} alt='Cart product Image' className='max-w-[50px] sm:max-w-[80px]' />
                      </div>
                      <Flex className='flex-col gap-y-2 relative w-full'>
                        <h3 className='text-xs sm:text-sm text-primary font-bold'>Black Smart Watch</h3>
                        <h3 className='text-xs sm:text-sm text-primary font-bold'>$44.00</h3>
                        <div className='absolute top-[50%] right-0 translate-y-[-50%] bg-transparent hover:bg-gray-200 rounded-full p-2 duration-200 cursor-pointer'>
                          <RxCross2 className='text-xl' />
                        </div>
                      </Flex>
                    </Flex>
                  </ListItem>

                  <ListItem className='p-5 bg-white'>
                    <h2 className='text-sm sm:text-base text-secondary'>Subtotal : <span className='text-primary font-bold'>$44.00</span></h2>
                    <Flex className='gap-5 mt-4'>
                      <Link to='/' className='text-xs sm:text-sm text-primary font-bold py-2 border-[2px] border-primary w-full text-center hover:scale-[1.01]' >View Cart</Link>
                      <Link to='/' className='text-xs sm:text-sm text-white bg-black font-bold py-2 border-[2px] border-primary w-full text-center hover:scale-[1.01]' >Checkout</Link>
                    </Flex>
                  </ListItem>

                </List>

              </div>


            </Flex>
          </div>

        </Flex>
      </Container>
    </header>
  )
}

export default Header