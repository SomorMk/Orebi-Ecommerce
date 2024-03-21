import React from 'react'
import ProductShowcase from './SubComponents/ProductShowcase'
import Container from './SubComponents/Container'
import DisplayProduct from './SubComponents/DisplayProduct'
import product9 from '/images/products/product (9).png'
import product10 from '/images/products/product (10).png'
import product11 from '/images/products/product (11).png'
import product12 from '/images/products/product (12).png'

const SpecialOffer = () => {
  return (
    <section className='my-8 md:my-[80px]'>
        <Container>
            <ProductShowcase shoeCaseName='Special Offer'>
                <DisplayProduct name='Basic Crew Neck Tee' price='$44.00' image={product9} color='Black' tag='new' />
                <DisplayProduct name='Basic Crew Neck Tee' price='$44.00' image={product10} color='Black' tag='new' />
                <DisplayProduct name='Basic Crew Neck Tee' price='$44.00' image={product11} color='Black' tag='new' />
                <DisplayProduct name='Basic Crew Neck Tee' price='$44.00' image={product12} color='Black' tag='new' />
            </ProductShowcase>
        </Container>
    </section>
  )
}

export default SpecialOffer