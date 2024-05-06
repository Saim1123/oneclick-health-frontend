"use client"
import { useForm } from "react-hook-form"

const page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div className='bg-gray-100 py-20 flex justify-center'>
            {/* Sign up Section */}
            <form onSubmit={handleSubmit(onSubmit)} className='bg-white w-[400px] sm:w-[600px] rounded-md shadow-xl px-6 py-8'>
                <h2 className='text-2xl text-center font-bold text-[#c30404] mb-4'>Sign up & Start using Shifaam
                    Healthcare Clinic</h2>
                <div className='sm:flex sm:justify-between sm:gap-4'>
                    <div className="w-full">

                        {errors.firstName && (
                            <p className="bg-red-300 p-2 rounded-md">first name is required</p>
                        )}
                        <input  {...register("firstName", { required: true })} type='text' placeholder="First Name" className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                    </div>
                    <div className="w-full">

                        {errors.lastName && (
                            <p className="bg-red-300 p-2 rounded-md">last name is required</p>
                        )}
                        <input {...register("lastName", { required: true })} type='text' placeholder="Last Name" className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                    </div>
                </div>
                <div className='sm:flex sm:justify-between sm:gap-4'>
                    <div>
                        {errors.college && (
                            <p className="bg-red-300 p-2 rounded-md">must required</p>
                        )}
                        <input {...register("college", { required: true })} type='text' placeholder="Medical College/University" className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                    </div>
                    <div>
                        {/* Dropdown (add all option) */}

                        <select className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" >
                            <option value="">Acupuncturist</option>
                            <option value="Aesthetic Gynaecologist">Aesthetic Gynaecologist</option>
                            <option value="Aesthetic Urogynaecologist">Aesthetic Urogynaecologist</option>
                            <option value="Allergist">Allergist</option>
                            <option value="Pending">Add all other options</option>
                        </select>
                    </div>
                </div>
                <div className='sm:flex sm:justify-between sm:gap-4'>
                    <div className="w-full">
                        {errors.number && (
                            <p className="bg-red-300 p-2 rounded-md">number is required</p>
                        )}
                        <input  {...register("number", { required: true })} type='number' placeholder="0301 2345678" className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                    </div>
                    <div className="w-full">
                        {errors.verificationCode && (
                            <p className="bg-red-300 p-2 rounded-md">verificationCode is required</p>
                        )}
                        <input  {...register("verificationCode", { required: true })} type='number' placeholder="Enter Verification Code" className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                    </div>
                </div>
                <div className='sm:flex sm:justify-between sm:gap-4'>
                    <div>
                        {errors.email && (
                            <p className="bg-red-300 p-2 rounded-md">email is required</p>
                        )}
                        <input  {...register("email", { required: true })} type='email' placeholder="Your Email" className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                    </div>
                    <div>
                        {errors.password && (
                            <p className="bg-red-300 p-2 rounded-md">password is required</p>
                        )}
                        <input {...register("password", { required: true })} type='password' placeholder="Password" className="bg-transparent mt-1 mb-6 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                    </div>
                </div>
                <div className='sm:flex sm:justify-between sm:gap-4'>

                    {/* Dropdown (add all option) */}
                    <select className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" >
                        <option value="">Karachi</option>
                        <option value="Abbottabad">Abbottabad</option>
                        <option value="Attock">Attock</option>
                        <option value="Bagh">Bagh</option>
                        <option value="Pending">Add all other options</option>
                    </select>
                    <input {...register("pmcNumber")} type='number' placeholder="PMC Number" className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                </div>
                <div className='sm:flex sm:justify-between sm:gap-4'>
                    <input {...register("cnicNumber")} type='number' placeholder="Cnic Number" className="bg-transparent sm:w-1/2 mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                    <div className='relative sm:w-1/2'>
                        <label  {...register("pmcCertificate")} htmlFor='file' className='absolute text-sm bottom-[77px]'>Upload PMC Certificate</label>
                        <input {...register("file")} type='file' id='file' className="bg-transparent mt-1 mb-6 outline-none border border-gray-300 focus:border-[#c30404] hover:bg-[#c30404] hover:cursor-pointer hover:text-white transition-all ease-in-out duration-300 focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                    </div>
                </div>
                <div>

                    {/* Gender radio buttons */}
                    <p>Gender</p>
                    <label>
                        <input  {...register("gender")} type="radio" name="gender" value="male" /> Male</label>
                    <label className='px-2'>
                        <input type="radio" name="gender" value="female" /> Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="other" /> Other
                    </label>
                </div>
                <div className='sm:flex sm:justify-center'>
                    <button type="submit" className='w-full sm:w-1/2 border border-[#c30404] mt-4 text-[#c30404] rounded-full py-1  hover:bg-[#c30404] transition-all ease-in-out duration-300 hover:shadow-md hover:text-white'>Submit</button>
                </div>
                <div className="border-t-4 border-[#c30404] my-8"></div>

                {/* assisted signup section */}
                <h2 className='text-3xl text-center font-bold text-[#c30404] mb-4'>OR</h2>
                <h2 className='text-2xl text-center font-bold text-[#c30404] mb-4'>Send us your details for assisted signup</h2>
                <input type='text' placeholder="Your Name" className="bg-transparent mt-1 mb-2 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                <input type='email' placeholder="email@domain.com" className="bg-transparent mt-1 mb-2 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                <input type='number' placeholder="03xxxxxxxxx" className="bg-transparent mt-1 mb-2 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                <div className='sm:flex sm:justify-center'>
                    <button className='w-full sm:w-1/2 border border-[#c30404] mt-4 text-[#c30404] rounded-full py-1  hover:bg-[#c30404] transition-all ease-in-out duration-300 hover:shadow-md hover:text-white'>Submit Request</button>
                </div>
            </form>
        </div>
    )
}

export default page