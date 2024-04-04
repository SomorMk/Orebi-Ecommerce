import React from 'react'
import Flex from './Flex'

const InputBox = (props) => {
  return (
    <div>
      <h6 className='text-primary text-sm sm:text-base font-bold'>{props.title}</h6>
      <props.as onChange={props.onChange} type={props.type ? props.type : 'text'} placeholder={props.placeholder ? props.placeholder : 'Your text here'} className={`py-2 sm:py-4 border-b border-[#dadada] w-full outline-none placeholder:text-xs sm:placeholder:text-sm placeholder:text-secondary ${props.className}`} />
    </div>
  )
}
export default InputBox

export const FormHead = ({ name, className }) => {
  return (
    <h2 className={`text-xl sm:text-[39px] text-primary font-bold ${className}`}>{name}</h2>
  )
}

export const SelectBox = ({ children, className, onChange, onClick }) => {
  return (
    <select onChange={onChange} onClick={onClick} className={`${className} py-2 sm:py-4 border-b border-[#dadada] w-full outline-none`}>
      {children}
    </select>
  )
}
export const Option = ({ name, value, className, onChange, onClick }) => {
  return (
    <option onChange={onChange} onClick={onClick} value={value} className={`${className}`} >{name}</option>
  )
}


export const ShopSelectBox = ({ title, children, className, onChange, onClick }) => {
  return (
    <Flex className='gap-x-2 md:gap-x-5 items-center'>
      <p className='text-[10px] sm:text-xs md:text-base text-secondary'>{title}</p>
      <select onChange={onChange} onClick={onClick} className={`${className} text-[10px] md:text-base text-secondary border-2 border-[#F0F0F0] py-1 md:py-2 md:px-2 focus-visible:border-[#F0F0F0] focus-visible:outline-[#F0F0F0]`}>
        {children}
      </select>
    </Flex>
  )
}
export const ShopOption = ({ name, value, className, onChange, onClick }) => {
  return (
    <option onChange={onChange} onClick={onClick} value={value} className={`${className} text-[10px] md:text-base text-secondary bg-[#F0F0F0] border-none`} >{name}</option>
  )
}