import React from 'react'
import ProductShowcase from './SubComponents/ProductShowcase'
import Container from './SubComponents/Container'
import DisplayProduct from './SubComponents/DisplayProduct'
import product5 from '/images/products/product (5).png'
import product6 from '/images/products/product (6).png'
import product7 from '/images/products/product (7).png'
import product8 from '/images/products/product (8).png'

const Bestseller = () => {
  return (
    <section className='my-8 md:my-[80px]'>
        <Container>
            <ProductShowcase shoeCaseName='Best Seller'>
                <DisplayProduct name='Basic Crew Neck Tee' price='$44.00' image={product5} color='Black' tag='new' />
                <DisplayProduct name='Basic Crew Neck Tee' price='$44.00' image={product6} color='Black' tag='new' />
                <DisplayProduct name='Basic Crew Neck Tee' price='$44.00' image={product7} color='Black' tag='new' />
                <DisplayProduct name='Basic Crew Neck Tee' price='$44.00' image={product8} color='Black' tag='new' />
            </ProductShowcase>
        </Container>
    </section>
  )
}

export default Bestseller