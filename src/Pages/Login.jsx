import React, { useEffect, useState } from 'react'
import Breadcrumb from '../Components/SubComponents/Breadcrumb'
import Container from '../Components/SubComponents/Container'
import Flex from '../Components/SubComponents/Flex'
import InputBox, { FormHead } from '../Components/SubComponents/InputBox'
import Button, { ButtonLink, ButtonW } from '../Components/SubComponents/Button'

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let [emailErr, setEmailErr] = useState(false)
    let [passwordErr, setPasswordErr] = useState(false)


    let handelEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailErr(false)
    }
    let handelPasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordErr(false)
    }

    let handelLogin = ()=>{
        (() => {
            if (!email) {
                setEmailErr(true)
            }
        })();
        (() => {
            if (!password) {
                setPasswordErr(true)
            }
        })();
    }
    
  return (
    <>
        <Breadcrumb />
        <Container>
            <div className='mb-[80px] md:mb-[100px]'>

                <div className='pb-8 sm:pb-14 border-b-[2px] border-[#F0F0F0]'>
                    <h6 className='text-xs sm:text-base text-secondary leading-7 sm:leading-8 max-w-full md:max-w-[80%] lg:max-w-[50%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</h6>
                </div>

                <div className='pb-8 pt-8 sm:py-14 border-b-[2px] border-[#F0F0F0]'>

                    <FormHead name='Returning Customer' />

                    <Flex className='max-w-full lg:max-w-[70%] w-full gap-y-8 sm:gap-y-0 gap-x-10 mt-10 flex-col sm:flex-row'>
                        <div className='max-w-full sm:max-w-[50%] w-full'>
                            <InputBox onChange={handelEmailChange} as='input' title='Email address' type='email' placeholder='company@domain.com' className={`${emailErr && '!border-red-500 border-b-[2px]'}`} />
                        </div>
                        <div className='max-w-full sm:max-w-[50%] w-full'>
                            <InputBox onChange={handelPasswordChange} as='input' title='Password' type='password' placeholder='********' className={`${passwordErr && '!border-red-500 border-b-[2px]'}`} />
                        </div>
                    </Flex>

                    <div className='mt-8'>
                        <ButtonW onClick={handelLogin} name='Log in' />
                    </div>

                </div>

                <div className='pb-8 pt-8 sm:py-14 border-b-[2px] border-[#F0F0F0]'>
                    <FormHead name='New Customer' />
                    <h6 className='text-xs sm:text-base text-secondary leading-7 sm:leading-8 max-w-full md:max-w-[80%] lg:max-w-[50%] mt-8 sm:mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</h6>
                    
                    <div className='mt-8'>
                        <ButtonLink to='/signup' name='Continue' />
                    </div>
                </div>

            </div>
        </Container>
    </>
  )
}

export default Login