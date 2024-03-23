import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({name, className, onClick}) => {
  return (
    <button onClick={onClick} className={`text-xs sm:text-sm text-white font-bold w-[130px] sm:w-[200px] h-[40px] sm:h-[50px] bg-primary ${className}`}>{name}</button>
  )
}

export const ButtonW = ({name, className, onClick}) => {
  return (
    <button onClick={onClick} className={`text-xs sm:text-sm text-primary border border-primary font-bold w-[130px] sm:w-[200px] h-[40px] sm:h-[50px] bg-transparent ${className}`}>{name}</button>
  )
}

export const ButtonLink = ({name, className, onClick, to}) => {
  return (
    <Link to={to} onClick={onClick} className={`inline-block text-xs sm:text-sm text-white font-bold w-[130px] sm:w-[200px] h-[40px] sm:h-[50px] leading-10 sm:leading-[50px] text-center bg-primary ${className}`}>{name}</Link>
  )
}

export default Button