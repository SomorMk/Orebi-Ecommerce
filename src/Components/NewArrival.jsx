import React from 'react'
import ProductShowcase from './SubComponents/ProductShowcase'
import Container from './SubComponents/Container'
import DisplayProduct from './SubComponents/DisplayProduct'
import product1 from '/images/products/product (1).png'
import product2 from '/images/products/product (2).png'
import product3 from '/images/products/product (3).png'
import product4 from '/images/products/product (4).png'

const NewArrival = () => {
  return (
    <section className='my-8 md:my-[80px]'>
        <Container>
            <ProductShowcase shoeCaseName='New Arrival'>
                <DisplayProduct name='Basic Crew Neck Tee' price='$44.00' image={product1} color='Black' tag='new' />
                <DisplayProduct name='Basic Crew Neck Tee' price='$44.00' image={product2} color='Black' tag='new' />
                <DisplayProduct name='Basic Crew Neck Tee' price='$44.00' image={product3} color='Black' tag='new' />
                <DisplayProduct name='Basic Crew Neck Tee' price='$44.00' image={product4} color='Black' tag='new' />
            </ProductShowcase>
        </Container>
    </section>
  )
}

export default NewArrival