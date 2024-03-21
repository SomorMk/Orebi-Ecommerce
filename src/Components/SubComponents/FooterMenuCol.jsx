import React from 'react'
import { Link } from 'react-router-dom'

const FooterMenuCol = ({colName,children}) => {
  return (
    <div>
        <h3 className='text-primary text-base font-bold uppercase'>{colName}</h3>
        <ul className='mt-4'>
            {children}
        </ul>
    </div>
  )
}

export const FooterMenuItem = ({itemName, className, to}) =>{
    return (
        <li><Link to={to} className={`text-xs lg:text-sm text-[#6d6d6d] leading-6 lg:leading-7 hover:pl-1 hover:text-primary duration-300 ${className}`}>{itemName}</Link></li>
    )
}

export const FooterContact = ({itemName, className}) =>{
    return (
        <div>
            <h3 className='text-primary text-sm lg:text-base font-bold'>(052) 611-5711</h3>
            <h3 className='text-primary text-sm lg:text-base font-bold'>company@domain.com</h3>
            <h4 className='text-[#6d6d6d] text-sm mt-4'>575 Crescent Ave. Quakertown, PA 18951</h4>
        </div>
    )
}

export default FooterMenuCol