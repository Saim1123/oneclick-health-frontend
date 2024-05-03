import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='bg-gray-100 py-20 flex justify-center'>

                <div className='bg-white w-[400px] rounded-md shadow-xl px-6 py-8'>
                    <h2 className='text-2xl font-bold text-[#c30404] mb-4'>Patient Signup</h2>
                    
                    <label htmlFor='firstName' className=''>First Name</label>
                    <input type='text' required id='firstName' placeholder="First Name" className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                    
                    <label htmlFor='lastName' className=''>Last Name</label>
                    <input type='text' required id='lastName' placeholder="Last Name" className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />

                    <label htmlFor='nmb'  className=''>Mobile Number</label>
                    <input type='number' required id='nmb' placeholder="0301 2345678" className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                    
                    <label htmlFor='verifiCode' className=''>Verification Code</label>
                    <input type='text' required id='verifiCode' placeholder="Verification Code" className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />

                    <label htmlFor='pwd' className=''>Password</label>
                    <input type='password' required id='pwd' placeholder="Password" className="bg-transparent mt-1 mb-6 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />

                    <div>
                        <button className='w-full border border-[#c30404] mt-4 text-[#c30404] rounded-full py-1  hover:bg-[#c30404] transition-all ease-in-out duration-300 hover:shadow-md hover:text-white'>Sign Up</button>
                    </div>

                    <div className='flex justify-center mt-4'>
                        <p className='text-sm text-gray-500 font-medium '>Already have an account? <Link href="/patient/login" className='text-[#c30404] hover:cursor-pointer'>Sign in here</Link></p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default page