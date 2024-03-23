import React, { useState } from 'react'
import Breadcrumb from '../Components/SubComponents/Breadcrumb'
import Container from '../Components/SubComponents/Container'
import InputBox from '../Components/SubComponents/InputBox'
import Flex from '../Components/SubComponents/Flex'
import Button from '../Components/SubComponents/Button'
import Map from '../Components/Map'
import { FaPlus } from "react-icons/fa6";
import officeAddress from '../assets/officeAddress.json'

const Contact = () => {
    let [currentOffice, setCurrentOffice] = useState(officeAddress[0].name)
    
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [message, setMessage] = useState('')

    let [nameErr, setNameErr] = useState(false)
    let [emailErr, setEmailErr] = useState(false)
    let [messageErr, setMessageErr] = useState(false)


    let handelNameChange = (e) => {
        setName(e.target.value);
        setNameErr(false)
    }
    let handelEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailErr(false)
    }
    let handelMessageChange = (e) => {
        setMessage(e.target.value);
        setMessageErr(false)
    }

    let handelPost = () => {
        (() => {
            if (!name) {
                setNameErr(true)
            }
        })();
        (() => {
            if (!email) {
                setEmailErr(true)
            }
        })();
        (() => {
            if (!message) {
                setMessageErr(true)
            }
        })();
    }


    return (
        <>
            <Breadcrumb />
            <Container>

                <div className='mb-[50px] sm:mb-[80px] md:mb-[100px]'>
                    <h2 className='text-primary text-2xl sm:text-4xl font-bold'>Fill up a Form</h2>
                    <div className='w-full lg:w-1/2'>
                        <Flex className='flex-col gap-y-6 mt-10'>
                            <InputBox onChange={handelNameChange} as='input' title='Name' type='text' placeholder='Your Name Here' className={`${nameErr && '!border-red-500 border-b-[2px]'}`} />
                            <InputBox onChange={handelEmailChange} as='input' title='Email' type='email' placeholder='Your Email Here' className={`${emailErr && '!border-red-500 border-b-[2px]'}`} />
                            <InputBox onChange={handelMessageChange} as='textarea' title='Message' type='text' placeholder='Your Message Here' className={`${messageErr && '!border-red-500 border-b-[2px]'}`} />
                        </Flex>
                        <Button name='Post' onClick={handelPost} className='mt-7' />
                    </div>
                </div>

                <div className='w-full mb-[50px] sm:mb-[80px] md:mb-[100px] relative'>

                    <div className='w-full h-[200px] sm:h-[400px] md:h-[572px]'>
                        {
                            officeAddress.map((item, index)=>(
                                currentOffice == item.name && (
                                    <Map link={item.officeLocation} />
                                )
                            ))
                        }
                    </div>

                    <div className='w-full md:w-[350px] lg:w-[450px] md:absolute md:top-[50%] md:right-[10%] md:translate-y-[-50%] mt-5 md:mt-0'>

                        {
                            officeAddress.map((office, index) => (
                                <div onClick={()=>setCurrentOffice(office.name)} class="w-full select-text group flex flex-col gap-2 bg-white text-black border-b border-[#F0F0F0] py-4 md:py-7 px-5" tabindex={index+1} >
                                    <div class="flex cursor-pointer items-center justify-between">
                                        <span className='text-sm sm:text-base text-primary font-bold'>{office.name}</span>
                                        <FaPlus />
                                    </div>
                                    <div class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000" >
                                        <ul className='flex flex-col gap-y-3 py-5'>
                                            <li className='text-xs sm:text-base text-secondary'>{office.address}</li>
                                            <li className='text-xs sm:text-base text-secondary'>{office.number}</li>
                                            <li className='text-xs sm:text-base text-secondary'>{office.mail}</li>
                                            <li className='text-xs sm:text-base text-secondary'>{office.officeHour}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>

            </Container>
        </>
    )
}

export default Contact