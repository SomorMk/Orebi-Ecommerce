import React from 'react'
import Flex from './Flex'
import DisplayProduct from './DisplayProduct'

const ProductShowcase = ({shoeCaseName,children}) => {
  return (
    <div>
        <h2 className='text-xl md:text-4xl text-primary font-bold mb-8 md:mb-10'>{shoeCaseName}</h2>
        <div>
            <Flex className='flex-wrap'>
                {children}
            </Flex>
        </div>
    </div>
  )
}

export default ProductShowcase