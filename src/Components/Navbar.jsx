import React, { useEffect, useState } from 'react'
import Container from './SubComponents/Container'
import Flex from './SubComponents/Flex'
import Image from './SubComponents/Image'
import { Link } from 'react-router-dom'
import List from './SubComponents/List'
import ListItem from './SubComponents/ListItem'
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [currentActive, setCurrentActive] = useState(null);

    useEffect(() => {
        setCurrentActive(location.pathname);
    }, [location]);


    let [showNav, setShowNav] = useState(false)
    let navModalControl = () => {
        setShowNav(false)
    }


    return (
        <>
            <nav className='py-5 sm:py-0 sticky top-0 z-50 bg-white'>
                <Container>
                    <Flex className='justify-between'>

                        <div className='flex items-center relative'>
                            <Link to='/'>
                                <Image src='images/logo.png' alt='Site Logo' />
                            </Link>
                        </div>

                        <div onClick={() => setShowNav(!showNav)} className='p-2 rounded-full bg-gray-100 absolute z-50 top-3 right-5 sm:hidden'>
                            {showNav ? <RxCross2 className='text-primary' /> : <FaBarsStaggered className='text-primary' />}
                        </div>

                        <div>
                            <List className={`sm:flex sm:items-center gap-x-10 absolute z-40 top-[60px] ${showNav ? 'left-0' : 'left-[-100%]'} w-full bg-gray-100 text-center py-5 sm:static sm:bg-transparent duration-300`}>
                                <ListItem className='my-2 sm:my-0'>
                                    <Link to='/' onClick={navModalControl} className={`text-sm text-secondary font-dm hover:font-bold duration-300 ${currentActive == '/' && 'text-black text-base font-bold'}`}>Home</Link>
                                </ListItem>
                                <ListItem className='my-2 sm:my-0'>
                                    <Link to='/shop' onClick={navModalControl} className={`text-sm text-secondary font-dm hover:font-bold duration-300 ${currentActive == '/shop' && 'text-black text-base font-bold'}`}>Shop</Link>
                                </ListItem>
                                <ListItem className='my-2 sm:my-0'>
                                    <Link to='/about' onClick={navModalControl} className={`text-sm text-secondary font-dm hover:font-bold duration-300 ${currentActive == '/about' && 'text-black text-base font-bold'}`}>About</Link>
                                </ListItem>
                                <ListItem className='my-2 sm:my-0'>
                                    <Link to='/contact' onClick={navModalControl} className={`text-sm text-secondary font-dm hover:font-bold duration-300 ${currentActive == '/contact' && 'text-black text-base font-bold'}`}>Contact</Link>
                                </ListItem>
                                <ListItem className='my-2 sm:my-0'>
                                    <Link to='/journal' onClick={navModalControl} className={`text-sm text-secondary font-dm hover:font-bold duration-300 ${currentActive == '/journal' && 'text-black text-base font-bold'}`}>Journal</Link>
                                </ListItem>
                            </List>
                        </div>

                    </Flex>
                </Container>
            </nav>
        </>
    )
}

export default Navbar