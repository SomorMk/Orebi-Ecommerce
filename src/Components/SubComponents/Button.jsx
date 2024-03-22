import React from 'react'

const Button = ({name, className, onClick}) => {
  return (
    <button onClick={onClick} className={`text-xs sm:text-sm text-white font-bold w-[130px] sm:w-[200px] h-[40px] sm:h-[50px] bg-black ${className}`}>{name}</button>
  )
}

export default Button