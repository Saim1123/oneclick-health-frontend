"use client"
import React, { useEffect } from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const page = () => {


  return (
    <>
      <div>
        <div className="w-full flex items-center relative">
          <div className="w-4/6 bg-[#fedada] py-20 rounded-br-[150px]">
            <h2 className="text-5xl  px-12  font-bold text-[#c30404] mt-5">
              OneClick Remote <br></br>Health Desk
            </h2>
            <p className=" px-12 text-gray-700 mt-5">
              The remote Health desk provides free online clinical help to{" "}
              <br></br>underserved patients.
            </p>
            <button className="hover:underline px-12 text-orange-600 mt-5 flex items-center gap-2">
              {" "}
              <MdSlowMotionVideo className="w-1/5 h-20" /> Watch Rhd Video
            </button>
          </div>
          <div className="w-2/6 ">
            <img className="h-80 w-64 absolute right-[410px] object-cover object-center top-20 rounded-br-3xl rounded-tl-3xl shadow-md" src="docter.jpg" />
            <img className="w-80 h-50 absolute right-[50px] top-10 object-cover object-center" src="docter-2.jpg" />
            <img className="w-80 h-50 absolute right-[50px] top-[280px] object-cover object-center rounded-br-full" src="docter-3.jpg" />

          </div>
        </div>

        <div className="w-full mt-16 mb-16 flex px-12 items-center">
          <div className="w-2/4">
            <img className=" px-48 w-full h-full" src="/patient.avif" alt="img" />
          </div>
          <div className="w-2/4">
            <h2 className="text-5xl  mt-4 font-bold text-[#c30404] mb-4">
              About Nurse-Assisted Remote Health Desk
            </h2>
            <p>
              The Remote Health Desk is a nurse-assisted telemedicine clinic
              offering free-of-cost doctor-patient consultation to
              underprivileged patients in the rural areas of Pakistan. The RHD
              is accessible through the website, mobile web and through the
              Shifaam Health App which can be downloaded from Google Play
              <span className="text-blue-500 hover:underline">(bit.ly/2JqZo3C)</span> or the iOS App Store  <span className="text-blue-500 hover:underline">(apple.co/2QUVxQz)</span> </p>
            <p className="mt-3">
              The RHD uses technology to deliver healthcare to those cannot afford high
              healthcare cost and do not have access to certified doctor with
              the help of RHD Illnesses are detected and diagnosed at an early
              stage providing efficient primary healthcare, reducing the overall
              disease burden and lowering healthcare costs.
            </p>
            <p className="mt-6 flex items-center gap-2"><FaRegCheckCircle className="text-[#c30404]" /> Number of RHD'S<span className="font-bold">- 3</span></p>
            <p className="mt-3  flex items-center gap-2"><FaRegCheckCircle className="text-[#c30404]" />Patients Served & Continuing.<span className="font-bold">- 4850</span></p>
            <p className="mt-3  flex items-center gap-2"><FaRegCheckCircle className="text-[#c30404]" />Number of Certified Doctors.<span className="font-bold">- 20</span></p>
          </div>
        </div>


        <div className="w-full flex items-center">
          <div className="w-2/4">
            <h2 className="text-5xl  px-12  font-bold mt-5">
              Problem
            </h2>
            <p className="px-12 mt-5 mb-16">Pakistan has a rural population of over 136 million people who have limited or no access to basic healthcare facilities. Unavailability of certified doctors, lack of infrastructure, poverty and population growth have increased the disease burden in rural areas, creating a health crisis within the country.</p>
            <div className="h-96 bg-[#fdd1c8] mb-24 relative  ">
              <div className="ml-36 absolute  ">
                <div className=" w-[750px] px-12 py-4    bg-white shadow-2xl border rounded-xl  flex items-center absolute hover:shadow-gray-500 " >
                  <img className="w-12" src="problem-1.jpg" alt="img" />
                  <p className="px-6">  Inaccessibility of certified doctors</p>
                </div>

                <div className=" w-[750px] px-12 py-4  bg-white shadow-2xl border top-28 rounded-xl flex items-center   absolute  hover:shadow-gray-500">
                  <img className="w-12" src="problem-2.jpg" alt="img" />
                  <p className="px-6"> Insufficient availability of medicines</p>
                </div>

                <div className=" w-[750px] px-12 py-4  bg-white shadow-2xl border top-56 rounded-xl  flex items-center absolute  hover:shadow-gray-500">
                  <img className="w-12" src="problem-3.jpg" alt="img" />
                  <p className="px-6"> Lack of infrastructures</p>
                </div>

                <div className=" w-[750px] px-12 py-4  bg-white shadow-2xl border top-[345px] rounded-xl flex items-center  absolute  hover:shadow-gray-500">
                  <img className="w-12" src="problem-4.jpg" alt="img" />
                  <p className="px-6">Poverty</p>
                </div>
              </div>
            </div>




          </div>

          <div className="w-2/4">
            <img className="w-2/3  ml-36" src="map.jpg" alt="img" />
          </div>
        </div>


        <div className="w-full flex items-center ">

          <div className="w-2/4">
            <h2 className="text-5xl  ml-[470px]  font-bold  mt-5 mb-4">
              ریموٹ ہیلتھ ڈیسک
            </h2>

            <ul className="ml-36 mb-2 ">
              <li >
                موجودہ سرکاری ہسپتالوں پر بڑھتے ہوئے ہجوم کو کم کرنے کے لئے شِفام ہیلتھ ٹیک پرائیویٹ لمیٹڈ نے آن لائن چلنے والے ریموٹ ہیلتھ ڈیسک قائم کئے ہیں۔ جن میں سندھ اور پنجاب کے دیہی علاقوں میں مستحق مریضوں کو ۔
                <span className="pl-[172px]">ڈاکٹر سے مفت آن لائن مشورے کے ساتھ ساتھ مفت ادویات بھی فراہم کی جاتی ہیں</span>

              </li>

              <li className="ml-[550px] flex items-center gap-2 mt-2">

                .مفت ادویات
                <TiTick className="bg-green-200 rounded-full text-white" />
              </li>

              <li className="ml-[440px] mt-2 flex items-center gap-1 ">

                .مفت ڈاکٹر اور مریض مشاورت
                <TiTick className="bg-green-200 rounded-full text-white" />

              </li>

              <li className="ml-[80px] mt-4 ">
                .اگر آپ مستحق مریضوں کی مدد کے لئے اپنے علاقے میں ریموٹ ہیلتھ ڈیسک قائم کرنا چاہتے ہیں تو
                <span className="pl-[340px]">ابھی دیئے گئے نمبر پر رابطہ کریں</span>


              </li>

              <li className="ml-[490px] flex items-center gap-2 mt-4">

                021 37132273
                <FaPhone className="bg-green-600 rounded-full text-white" />
              </li>
              <li className="ml-[490px] flex items-center gap-2 mb-8">
                021 37132273
                <FaMobileAlt className="bg-green-600 rounded-full text-white" />
              </li>

              <li>

              </li>
            </ul>
          </div >
          <div className="w-2/4 flex items-center gap-24 flex-wrap  mb-10 px-24">


            <img src="solution.jpg" alt="" />


          </div>

        </div>




        <div className="w-full flex items-center">
          <div className="w-2/4">
            <img src="rhd1.jpg" alt="img" />


          </div>

          <div className="w-2/4">
            <h2 className="text-5xl  px-12  font-bold  mt-5">
              Patient Satisfication
            </h2>
            <Carousel>

            </Carousel>



          </div>
        </div>



      </div>





    </>
  )
}

export default page