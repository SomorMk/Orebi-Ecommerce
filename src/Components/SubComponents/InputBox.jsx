import React from 'react'

const InputBox = (props) => {
  return (
    <div>
        <h6 className='text-primary text-sm sm:text-base font-bold'>{props.title}</h6>
        <props.as onChange={props.onChange} type={props.type ? props.type:'text'} placeholder={props.placeholder ? props.placeholder:'Your text here'} className={`py-2 sm:py-4 border-b border-[#dadada] w-full outline-none placeholder:text-xs sm:placeholder:text-sm placeholder:text-secondary ${props.className}`} />
    </div>
  )
}

export const FormHead = ({name, className}) => {
  return (
    <div>
        <h2 className={`text-xl sm:text-[39px] text-primary font-bold ${className}`}>{name}</h2>
    </div>
  )
}

export default InputBox