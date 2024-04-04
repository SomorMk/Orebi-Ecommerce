import React, { useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { HiMiniXMark } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";

export const SideDropdown = ({ close, children, drop, className, name }) => {
    let [openOff, setOpen] = useState(close)
    let [dropDown, setDropDown] = useState(drop)


    return (
        <>
            {
                openOff ?
                    <div>
                        <div onClick={() => setDropDown(!dropDown)} className='flex justify-between cursor-pointer'>
                            <h3 className='text-xs md:text-xl text-primary font-bold mb-2 md:mb-6'>{name ? name : 'Catagory Name'}</h3>
                            {
                                openOff && <span><TiArrowSortedDown className={`text-sm md:text-xl text-primary duration-300 ${dropDown && 'rotate-180'}`} /></span>
                            }
                        </div>
                        {dropDown &&
                            <div>
                                {children}
                            </div>
                        }
                    </div>
                    :
                    <div>
                        <h3 className='text-xs md:text-xl text-primary font-bold mb-2 md:mb-6'>{name ? name : 'Catagory Name'}</h3>
                        <div>
                            {children}
                        </div>
                    </div>
            }
        </>
    )
}

export const DropItem = ({ sub, close, name, children, color }) => {
    let [subDropDown, setSubDropDown] = useState(sub)
    let [subOpenClose, setSubOpenClose] = useState(close)

    return (
        <>
            <div className='border-b border-gray-200 lg:border-[#F0F0F0] py-2 md:py-5'>
                <div onClick={() => setSubOpenClose(!subOpenClose)} className='flex justify-between items-center cursor-pointer'>
                    {subDropDown ?
                        <>
                            <h5 className='text-[10px] md:text-base text-secondary'>{name ? name : 'Sub catagory name'}</h5>
                            <span>{subOpenClose ? <HiMiniXMark className={`text-[10px] md:text-sm text-secondary duration-300`} /> : <AiOutlinePlus className={`text-[10px] md:text-sm text-secondary duration-300`} />}</span>
                        </>
                        :
                        <>{color ?
                            <div className='flex items-center gap-x-3'>
                                <span className={`w-3 h-3 rounded-full`} style={{background: color}}></span>
                                <h5 className='text-[10px] md:text-base text-secondary'>{name ? name : 'Sub catagory name'}</h5>
                            </div>
                            :
                            <h5 className='text-[10px] md:text-base text-secondary'>{name ? name : 'Sub catagory name'}</h5>}
                        </>
                    }
                </div>
                <div>
                    {
                        subOpenClose &&
                        <>
                            {subDropDown &&
                                <ul className='pl-3 md:pl-5 mt-3 md:mt-5 flex flex-col gap-y-2'>
                                    {children ? children : <li className='text-[10px] md:text-base text-secondary'>Empty</li>}
                                </ul>
                            }
                        </>
                    }
                </div>
            </div>

        </>
    )
}


export const SubDrop = ({ name }) => {
    return (
        <li className='text-[10px] md:text-base text-secondary cursor-pointer'>{name ? name : 'Sub item name'}</li>
    )
}