import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import productData from '../../assets/all-product.json'
import Flex from './Flex';
import DisplayProduct from './DisplayProduct';
import PImage1 from '/images/products/product (1).png'


const items = [...productData.products];

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item, key) => (
                    <div key={key} className='w-[48%] sm:w-[31.5%]'>
                        <DisplayProduct name={currentItems[key].title} price={currentItems[key].price} image={PImage1} color={currentItems[key].brand} tag={Math.round(currentItems[key].discountPercentage) + '% off'} className='!w-[100%] !px-0 !mx-0' />
                    </div>
                ))}
        </>
    );
}

const ShopPaginate = ({ itemsPerPage }) => {

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset + 1} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
    };

    return (
        <div className='relative'>
            
            <Flex className='flex-wrap justify-between gapy-2 lg:gap-y-10'>
                <Items currentItems={currentItems} />
            </Flex>

            <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                containerClassName="pagination flex flex-wrap gap-x-2 gap-y-2 lg:gap-x-[15px] mt-[40px]"
                pageClassName="page-item"
                pageLinkClassName="page-link inline-block border border-[#F0F0F0] text-[10px] px-3 py-2 lg:px-[14px] lg:py-[9px] lg:text-base"
                previousClassName="page-item hidden"
                previousLinkClassName="page-link"
                nextClassName="page-item hidden"
                nextLinkClassName="page-link"
                activeClassName="active text-white bg-black"
            />

            <div className='text-end absolute right-0 bottom-[-40px] sm:bottom-5'>
                <h6 className=' text-secondary text-[10px] lg:text-sm'>Products from {itemOffset + 1} to {endOffset > items.length ? items.length : endOffset} of {items.length}</h6>
            </div>

        </div>
    );
}

export default ShopPaginate