import React from 'react'
import { DropItem, SideDropdown, SubDrop } from './SubComponents/ShopSidebarComponents';

const ShopSidebar = () => {
    return (
        <div>

            <div className='mb-6 md:mb-10'>
                <SideDropdown name='Shop by Category'>
                    <DropItem name='Men' sub={true} >
                        <SubDrop></SubDrop>
                        <SubDrop></SubDrop>
                        <SubDrop></SubDrop>
                    </DropItem>
                    <DropItem name='Women' ></DropItem>
                    <DropItem name='Kids' sub={true} >
                        <SubDrop></SubDrop>
                    </DropItem>
                    <DropItem name='Winter' ></DropItem>
                    <DropItem name='Summer' ></DropItem>
                </SideDropdown>
            </div>

            <div className='mb-6 md:mb-10'>
                <SideDropdown name='Shop by Color' close={true} drop={true}>
                    <DropItem name='Red' color='red' ></DropItem>
                    <DropItem name='Yellow' color='yellow' ></DropItem>
                    <DropItem name='Green' color='green' ></DropItem>
                    <DropItem name='Purple' color='purple' ></DropItem>
                    <DropItem name='Orange' color='orange' ></DropItem>
                </SideDropdown>
            </div>

            <div className='mb-6 md:mb-10'>
                <SideDropdown name='Shop by Brand' close={true} drop={true}>
                    <DropItem name='Adidas' ></DropItem>
                    <DropItem name='Nike' ></DropItem>
                    <DropItem name='Gucci' ></DropItem>
                    <DropItem name='Prada' ></DropItem>
                    <DropItem name='Armani' ></DropItem>
                </SideDropdown>
            </div>


            <div>
                <SideDropdown name='Shop by Price' close={true} drop={true}>
                    <DropItem name='$0.00 - $9.99' ></DropItem>
                    <DropItem name='$10.00 - $19.99' ></DropItem>
                    <DropItem name='$20.00 - $29.99' ></DropItem>
                    <DropItem name='$30.00 - $39.99' ></DropItem>
                    <DropItem name='$40.00 - $69.99' ></DropItem>
                </SideDropdown>
            </div>



        </div>
    )
}

export default ShopSidebar