import React from 'react'

const List = ({className, children, ref}) => {
  return (
    <ul ref={ref} className={className}>
        {children}
    </ul>
  )
}

export default List