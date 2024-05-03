import React from 'react'
import Link from 'next/link'

const ProductCard = ({ imgSrc, price, productName }) => {
    return (
        <>
            {/* <li className=''> */}
            <div className="overflow-hidden rounded-md bg-white border-2 border-gray-100 hover:shadow-md hover:shadow-slate-200">
                {/*  <!--  Image --> */}
                <figure>
                    <img
                        // aspect-video
                        src={imgSrc}
                        alt="card image"
                        className="w-[90%] p-2 bg-cover hover:cursor-pointer "
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                    <header>
                        <h3 className="text-xs lg:text-sm font-medium hover:cursor-pointer hover:text-[#c30404] transition-all ease-in-out duration-300">
                            {productName.length > 15 ? productName.slice(0, 20) + ' ...' : productName}
                        </h3>
                        <h2 className="text-sm lg:text-md font-bold my-1">From Rs. {price}</h2>
                        <div className='px-2 text-center text-sm lg:text-md border border-[#c30404] text-[#c30404]  rounded-full py-1 mt-2 hover:bg-[#c30404] transition-all ease-in-out duration-300 hover:shadow-md hover:text-white'>
                            <Link href="/patient/login">Add to cart</Link>
                        </div>
                    </header>
                </div>
            </div>
            {/* </li> */}
        </>
    )
}

export default ProductCard