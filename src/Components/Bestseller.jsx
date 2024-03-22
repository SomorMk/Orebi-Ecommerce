import React, { useEffect, useState } from 'react'
import ProductShowcase from './SubComponents/ProductShowcase'
import Container from './SubComponents/Container'
import DisplayProduct from './SubComponents/DisplayProduct'
import productData from '../assets/productList.json'

const Bestseller = () => {
  let [data, setData] = useState([])
  useEffect(() => {
    let arr = [...productData.bestseller]
    setData(arr)
  }, [])
  
  return (
    <section className='my-8 md:my-[80px]'>
        <Container>
            <ProductShowcase shoeCaseName='Best Seller'>
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

export default Bestseller