import React from 'react'
import Image from './Image'
import Flex from './Flex'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import DemoProductImg from '/images/products/demo-product.png'

const DisplayProduct = ({ link, image, tag, name, price, color, itemKey }) => {
  return (
    <div className='group w-1/2 md:w-1/3 lg:w-1/4 px-2 lg:px-4 mb-5 lg:mb-0'>
      <div className='overflow-hidden relative'>
        {image ? <Image src={image} alt='Product Image' className='w-full max-w-full group-hover:scale-105 duration-300' /> : <Image src={DemoProductImg} alt='Product Image' className='w-full max-w-full' />}
        <Flex className='absolute top-0 left-0 p-2 md:p-5 gap-5'>
          {tag && <span className='text-white text-[8px] md:text-xs font-bold py-1 px-3 md:py-2 md:px-8 bg-black uppercase'>{tag}</span>}
        </Flex>
        {image && name &&
          <div className='absolute bottom-[-200%] left-0 w-full bg-white p-2 md:p-5 group-hover:bottom-0 duration-500'>
            <ul className='flex flex-col items-end w-full'>
              {itemKey && <li className='text-[8px] md:text-[10px] text-secondary flex items-center leading-5 md:leading-8'>Product number : {itemKey}</li>}
              <li className='text-[10px] md:text-base text-secondary flex items-center leading-5 md:leading-8 cursor-pointer hover:font-bold hover:text-primary duration-300'>Add to Wish List <FaHeart className='text-primary text-[10px] md:text-base ml-2 md:ml-5' /></li>
              <li className='text-[10px] md:text-base text-secondary flex items-center leading-5 md:leading-8 cursor-pointer hover:font-bold hover:text-primary duration-300'>Compare <FaCodeCompare className='text-primary text-[10px] md:text-base ml-2 md:ml-5' /></li>
              <li className='text-[10px] md:text-base text-secondary flex items-center leading-5 md:leading-8 cursor-pointer hover:font-bold hover:text-primary duration-300'>Add to Cart <FaCartShopping className='text-primary text-[10px] md:text-base ml-2 md:ml-5' /></li>
            </ul>
          </div>
        }
      </div>
      <div className='py-2 sm:py-4'>
        <Link to={link}>
          <Flex className='flex-col sm:flex-row sm:justify-between mb-1 sm:mb-4'>
            {name ? <h4 className='text-[10px] sm:text-xl text-primary font-bold'>{name}</h4>:<h4 className='text-[10px] sm:text-xl text-primary font-bold'>Product Name</h4>}
            {price ? <p className='text-[8px] sm:text-base text-[#767676]'>{price}</p> : <p className='text-[8px] sm:text-base text-[#767676]'>Price</p>}
          </Flex>
          {color ? <p className='text-[10px] sm:text-base text-[#767676]'>{color}</p> : <p className='text-[10px] sm:text-base text-[#767676]'>Colour</p>}
        </Link>
      </div>
    </div>
  )
}

export default DisplayProduct