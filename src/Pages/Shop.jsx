import React, { useEffect, useRef, useState } from 'react'
import Breadcrumb from '../Components/SubComponents/Breadcrumb'
import Flex from '../Components/SubComponents/Flex'
import Container from '../Components/SubComponents/Container'
import ShopPaginate from '../Components/SubComponents/ShopPaginate'
import DisplayProduct from '../Components/SubComponents/DisplayProduct'
import { Option, SelectBox, ShopOption, ShopSelectBox } from '../Components/SubComponents/InputBox'
import ShopSidebar from '../Components/ShopSidebar'
import { IoFilter } from "react-icons/io5";
import { HiMiniXMark } from 'react-icons/hi2'

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let [filterModal, setFilterModal] = useState(false)
  let filterModalRef = useRef()

  let [showCount, setShowCount] = useState(12)
  let [sortBy, setSortBy] = useState('Featured')

  let handelShowCount = (e) => {
    setShowCount(+e.target.value);
  }
  let handelSoryBy = (e) => {
    setSortBy(e.target.value);
  }

  return (
    <>
      <Breadcrumb />

      <section className='mb-20'>
        <Container>
          <Flex className='gap-x-10 relative'>

            <div ref={filterModalRef} className={`absolute top-0 ${filterModal ? 'left-0' : 'left-[-150%]'} w-[85%] sm:w-[400px] bg-[#F0F0F0] rounded-md z-10 px-4 py-5 lg:py-0 lg:px-0 lg:static lg:w-1/4 lg:bg-transparent duration-300`}>
              <span onClick={() => setFilterModal(false)} className='absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex justify-center items-center cursor-pointer lg:hidden'><HiMiniXMark className={`text-sm text-secondary duration-300`} /></span>
              <ShopSidebar />
            </div>

            <div className='w-full lg:w-3/4'>

              <div className='mb-10'>
                <Flex className='justify-between'>

                  <Flex onClick={() => setFilterModal(!filterModal)} className='items-center gap-x-2 lg:hidden cursor-pointer'>
                    <span><IoFilter className='text-secondary' /></span>
                    <p className='text-[10px] sm:text-xs md:text-base text-secondary'>Filter</p>
                  </Flex>
                  <div></div>

                  <Flex className='gap-x-3 md:gap-x-10'>
                    <div>
                      <ShopSelectBox onChange={handelSoryBy} title='Sort by:' className='w-[80px] sm:w-[100px] md:w-[240px]'>
                        <ShopOption name='Featured' value='Featured' />
                        <ShopOption name='Bestseller' value='Bestseller' />
                        <ShopOption name='New Arrival' value='New Arrival' />
                        <ShopOption name='Special Offer' value='Special Offer' />
                      </ShopSelectBox>
                    </div>
                    <div>
                      <ShopSelectBox onChange={handelShowCount} title='Show:' className='w-[50px] sm:w-[70px] md:w-[140px]'>
                        <ShopOption name='12' value='12' />
                        <ShopOption name='24' value='24' />
                        <ShopOption name='36' value='36' />
                        <ShopOption name='48' value='48' />
                      </ShopSelectBox>
                    </div>
                  </Flex>

                </Flex>
              </div>

              <div className=''>
                <ShopPaginate itemsPerPage={showCount} />
              </div>

            </div>

          </Flex>
        </Container>
      </section>
    </>
  )
}

export default Shop