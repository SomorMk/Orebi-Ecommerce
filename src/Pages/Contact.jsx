import React from 'react'
import Breadcrumb from '../Components/SubComponents/Breadcrumb'
import Container from '../Components/SubComponents/Container'
import InputBox from '../Components/SubComponents/InputBox'
import Flex from '../Components/SubComponents/Flex'
import Button from '../Components/SubComponents/Button'

const Contact = () => {
    let handelChange = (e)=>{
        console.log(e.target.value);
    }
  return (
    <>
        <Breadcrumb />
        <Container>
            <div className='mb-[100px]'>
                <h2 className='text-primary text-2xl sm:text-4xl font-bold'>Fill up a Form</h2>
                <div className='w-full lg:w-1/2'>
                    <Flex className='flex-col gap-y-6 mt-10'>
                        <InputBox onChange={handelChange} as='input' title='Name' type='text' placeholder='Your Name Here' />
                        <InputBox as='input' title='Email' type='email' placeholder='Your Email Here' />
                        <InputBox as='textarea' title='Message' type='text' placeholder='Your Message Here' />
                    </Flex>
                    <Button name='Post' className='mt-7' />
                </div>
            </div>
        </Container>
    </>
  )
}

export default Contact