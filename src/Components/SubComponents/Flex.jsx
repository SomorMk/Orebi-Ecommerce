import React from 'react'

const Flex = ({children, className, onClick}) => {
  return (
    <div onClick={onClick} className={`flex ${className}`}>
        {children}
    </div>
  )
}

export default Flex