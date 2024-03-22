import React from 'react'

const Map = ({link}) => {
    return (
        <>
            <iframe src={link} width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}

export default Map