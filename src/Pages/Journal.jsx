import React, { useEffect } from 'react'
import Breadcrumb from '../Components/SubComponents/Breadcrumb'

const Journal = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Breadcrumb />
    </>
  )
}

export default Journal