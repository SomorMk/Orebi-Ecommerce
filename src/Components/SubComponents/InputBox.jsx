import React from 'react'

const InputBox = (props) => {
  return (
    <div>
      <h6 className='text-primary text-sm sm:text-base font-bold'>{props.title}</h6>
      <props.as onChange={props.onChange} type={props.type ? props.type : 'text'} placeholder={props.placeholder ? props.placeholder : 'Your text here'} className={`py-2 sm:py-4 border-b border-[#dadada] w-full outline-none placeholder:text-xs sm:placeholder:text-sm placeholder:text-secondary ${props.className}`} />
    </div>
  )
}

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
export const Option = ({name, value, className, onChange, onClick }) => {
  return (
    <option onChange={onChange} onClick={onClick} value={value} className={`${className}`} >{name}</option>
  )
}

export default InputBox