import React, { useEffect, useState } from 'react'
import ProductShowcase from './SubComponents/ProductShowcase'
import Container from './SubComponents/Container'
import DisplayProduct from './SubComponents/DisplayProduct'
import productData from '../assets/productList.json'

const SpecialOffer = () => {
  let [data, setData] = useState([])
  useEffect(() => {
    let arr = [...productData.specialOffer]
    setData(arr)
  }, [])
  
  return (
    <section className='my-8 md:my-[80px]'>
        <Container>
            <ProductShowcase shoeCaseName='Special Offer'>
              {
                data.map((data, key)=>(
                  <DisplayProduct link={data.link} name={data.name} price={data.price} image={data.image} color={data.colour} tag={data.tag} itemKey={key+1} />
                ))
              }
            </ProductShowcase>
        </Container>
    </section>
  )
}

export default SpecialOffer