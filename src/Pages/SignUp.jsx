import React, { useEffect } from 'react'
import Breadcrumb from '../Components/SubComponents/Breadcrumb'
import Container from '../Components/SubComponents/Container'
import InputBox, { FormHead, Option, SelectBox } from '../Components/SubComponents/InputBox'
import Flex from '../Components/SubComponents/Flex'
import Button from '../Components/SubComponents/Button'
import bdDivisions from '../assets/bd-divisions.json'
import bdDistricts from '../assets/bd-districts.json'

const SignUp = () => {
  let diviArr = bdDivisions.divisions
  let districts = bdDistricts.districts
  

  return (
    <>
      <Breadcrumb />
      <Container>
        <div className='mb-[80px] md:mb-[100px]'>

          <div className='pb-8 sm:pb-14 border-b-[2px] border-[#F0F0F0]'>
            <h6 className='text-xs sm:text-base text-secondary leading-7 sm:leading-8 max-w-full md:max-w-[80%] lg:max-w-[50%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</h6>
          </div>

          <div className='pb-8 pt-8 sm:py-14 border-b-[2px] border-[#F0F0F0]'>

            <FormHead name='Your Personal Details' />

            <Flex className='flex-wrap max-w-full lg:max-w-[70%] w-full gap-y-8 gap-x-10 mt-10 flex-col sm:flex-row'>
              <div className='max-w-full lg:max-w-[50%] w-full md:w-[70%] lg:w-[48%]'>
                <InputBox as='input' title='First Name' type='text' placeholder='First Name' />
              </div>
              <div className='max-w-full lg:max-w-[50%] w-full md:w-[70%] lg:w-[48%]'>
                <InputBox as='input' title='Last Name' type='text' placeholder='Last Name' />
              </div>
              <div className='max-w-full lg:max-w-[50%] w-full md:w-[70%] lg:w-[48%]'>
                <InputBox as='input' title='Email address' type='email' placeholder='company@domain.com' />
              </div>
              <div className='max-w-full lg:max-w-[50%] w-full md:w-[70%] lg:w-[48%]'>
                <InputBox as='input' title='Telephone' type='text' placeholder='Your phone number' />
              </div>
            </Flex>

          </div>

          <div className='pb-8 pt-8 sm:py-14 border-b-[2px] border-[#F0F0F0]'>

            <FormHead name='New Customer' />

            <Flex className='flex-wrap max-w-full lg:max-w-[70%] w-full gap-y-8 gap-x-10 mt-10 flex-col sm:flex-row'>
              <div className='max-w-full lg:max-w-[50%] w-full md:w-[70%] lg:w-[48%]'>
                <InputBox as='input' title='Address 1' type='text' placeholder='4279 Zboncak Port Suite 6212' />
              </div>
              <div className='max-w-full lg:max-w-[50%] w-full md:w-[70%] lg:w-[48%]'>
                <InputBox as='input' title='Address 2' type='text' placeholder='---' />
              </div>
              <div className='max-w-full lg:max-w-[50%] w-full md:w-[70%] lg:w-[48%]'>
                <InputBox as='input' title='City' type='text' placeholder='Your city' />
              </div>
              <div className='max-w-full lg:max-w-[50%] w-full md:w-[70%] lg:w-[48%]'>
                <InputBox as='input' title='Post Code' type='text' placeholder='05228' />
              </div>
              <div className='max-w-full lg:max-w-[50%] w-full md:w-[70%] lg:w-[48%]'>
                <h6 className='text-primary text-sm sm:text-base font-bold'>Division</h6>
                <SelectBox>
                  <Option name='Please select' value='' />
                  {
                    diviArr.map((i, id)=>(
                      <Option name={i.name} value={i.name} />
                    ))
                  }
                </SelectBox>
              </div>
              <div className='max-w-full lg:max-w-[50%] w-full md:w-[70%] lg:w-[48%]'>
                <h6 className='text-primary text-sm sm:text-base font-bold'>District</h6>
                <SelectBox>
                  <Option name='Please select' value='' />
                  {
                    districts.map((i, id)=>(
                      <Option name={i.name} value={i.name} />
                    ))
                  }
                </SelectBox>
              </div>
            </Flex>

          </div>

          <div className='pb-8 pt-8 sm:py-14 border-b-[2px] border-[#F0F0F0]'>

            <FormHead name='Your Password' />

            <Flex className='flex-wrap max-w-full lg:max-w-[70%] w-full gap-y-8 gap-x-10 mt-10 flex-col sm:flex-row'>
              <div className='max-w-full lg:max-w-[50%] w-full md:w-[70%] lg:w-[48%]'>
                <InputBox as='input' title='Password' type='password' placeholder='Password' />
              </div>
              <div className='max-w-full lg:max-w-[50%] w-full md:w-[70%] lg:w-[48%]'>
                <InputBox as='input' title='Repeat Password' type='password' placeholder='Repeat Password' />
              </div>
            </Flex>

          </div>

          <div className='pb-8 pt-8 sm:py-14 border-b-[2px] border-[#F0F0F0]'>

            <Flex className='gap-x-2 sm:gap-x-4 items-center'>
              <input type="checkbox" className='sm:w-4 sm:h-4 rounded-none' />
              <h6 className='text-xs sm:text-base text-secondary'>I have read and agree to the Privacy Policy</h6>
            </Flex>

            <Flex className='gap-x-4 sm:gap-x-8 mt-6'>
              <h6 className='text-xs sm:text-base text-secondary'>Subscribe Newsletter</h6>
              <Flex className='gap-x-4'>
                <Flex className='gap-x-2'>
                  <input type="radio" value='yes' name='subscribe' className='cursor-pointer' />
                  <span className='text-xs sm:text-base text-secondary'>Yes</span>
                </Flex>
                <Flex className='gap-x-2'>
                  <input type="radio" value='no' name='subscribe' className='cursor-pointer' />
                  <span className='text-xs sm:text-base text-secondary'>No</span>
                </Flex>
              </Flex>
            </Flex>

            <Button name='Sign Up' className='mt-7' />

          </div>

        </div>
      </Container>
    </>
  )
}

export default SignUp