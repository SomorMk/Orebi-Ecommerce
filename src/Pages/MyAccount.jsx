import React, { useEffect } from 'react'
import Breadcrumb from '../Components/SubComponents/Breadcrumb'
import Container from '../Components/SubComponents/Container'

const MyAccount = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Breadcrumb />
            <Container>
            </Container>
        </>
    )
}

export default MyAccount