"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

const NavBar = () => {
  const navList = [
    { link: "Doctor", secondLine: "Book an Appointment", url: "#" },
    { link: "Lab Tests", secondLine: "Book Test Online", url: "#" },
    { link: "Pharmacy", secondLine: "Medicines & Health Products", url: "#" },
    { link: "Find Therapist", secondLine: "+92 325 78904521", url: "#" },
    { link: "Childhood Epilepsy", secondLine: "+92 325 78904521", url: "#" },
    { link: "RHD", secondLine: "Remote Health Desk", url: "#" },
  ];

  const DropDown = [
    { link: "Dermatologist", url: "#" },
    { link: "Gynecologist", url: "#" },
    { link: "Child Specialist", url: "#" },
    { link: "Gastroenterologist", url: "#" },
    { link: "Neurologist", url: "#" },
    { link: "General Physician", url: "#" },
    { link: "Oncologist", url: "#" },

    { link: "Doctors in Lahore", url: "#" },
    { link: "Doctors in Karachi", url: "#" },
    { link: " Doctors in Islamabad", url: "#" },
    { link: "Doctors in Peshawar", url: "#" },
    { link: " Doctors in Quetta", url: "#" },
    { link: "Doctors in All Cities - Pakistan", url: "#" },

    { link: "Shifaam Physical Clinic", url: "#" },
    { link: "South City Hospital", url: "#" },
    { link: " Usman Memorial Hospital", url: "#" },
    { link: "Tabba Heart Institute", url: "#" },
    { link: " Anum Hospital", url: "#" },
  ];

  const drop = [
    { link: "Chughtai Lab - up to 10% OFF", url: "#" },
    { link: "Dr. Essa’s Lab - up to 15%", url: "#" },
    { link: "Hashmani's hospital Lab - up to 20%", url: "#" },
    { link: "One Health Lab - up to 10%", url: "#" },
    { link: "eShifa - up to 20%", url: "#" },
    { link: "Tabba Heart Institute - up to 20% OFF", url: "#" },

    { link: "Labs in Karachi", url: "#" },
    { link: "Labs in Lahore", url: "#" },
    { link: "Labs in Islamabad", url: "#" },
    { link: "Labs in Peshawar", url: "#" },
    { link: "Labs in Quetta", url: "#" },
    { link: "Labs in All Cities - Pakistan", url: "#" },
  ];

  const drop1 = [
    { link: "Dermatologist in Karachi", url: "#" },
    { link: "Dermatologist in Lahore", url: "#" },
    { link: "Dermatologist in Islamabad", url: "#" },
    { link: "Dermatologist in  Peshawar", url: "#" },
  ];

  const drop2 = [
    { link: "Gynecologist in Karachi", url: "#" },
    { link: "Gynecologist in Lahore", url: "#" },
    { link: "Gynecologist in Islamabad", url: "#" },
    { link: "Gynecologist in  Peshawar", url: "#" },
  ];

  const drop3 = [
    { link: "Child Specialist in Karachi", url: "#" },
    { link: "Child Specialist in Lahore", url: "#" },
    { link: "Child Specialist in Islamabad", url: "#" },
    { link: "Child Specialist in  Peshawar", url: "#" },
  ];

  const drop4 = [
    { link: "Gastroenterologist in Karachi", url: "#" },
    { link: "Gastroenterologist in Lahore", url: "#" },
    { link: "Gastroenterologist in Islamabad", url: "#" },
    { link: "Gastroenterologist in  Peshawar", url: "#" },
  ];

  const drop5 = [
    { link: "Neurologist in Karachi", url: "#" },
    { link: "Neurologist in Lahore", url: "#" },
    { link: "Neurologist in Islamabad", url: "#" },
    { link: "Neurologist in  Peshawar", url: "#" },
  ];

  const drop6 = [
    { link: "General Physician in Karachi", url: "#" },
    { link: "General Physician in Lahore", url: "#" },
    { link: "General Physician in Islamabad", url: "#" },
    { link: "General Physician in  Peshawar", url: "#" },
  ];

  const drop7 = [{ link: "Oncologist in Karachi", url: "#" }];

  const [navOpen, setNavOpen] = useState(false);
  const [showdropdown, setShowDropdown] = useState(false);
  const [showdrop, setShowDrop] = useState(false);
  const [showdrop1, setShowDrop1] = useState(false);
  const [showdrop2, setShowDrop2] = useState(false);
  const [showdrop3, setShowDrop3] = useState(false);
  const [showdrop4, setShowDrop4] = useState(false);
  const [showdrop5, setShowDrop5] = useState(false);
  const [showdrop6, setShowDrop6] = useState(false);
  const [showdrop7, setShowDrop7] = useState(false);
  const [loginDrop, setLoginDrop] = useState(false);

  const toggleSidebar = () => {
    setNavOpen(!navOpen);
    document.body.style.overflow = navOpen ? "" : "hidden";
  };

  const toggleDropdown = () => {
    setShowDropdown(!showdropdown);
    setShowDrop(false);
    setShowDrop1(false);
    setShowDrop2(false);
    setShowDrop3(false);
    setShowDrop4(false);
    setShowDrop5(false);
    setShowDrop6(false);
    setShowDrop7(false);
  };

  const toggleDrop = () => {
    setShowDrop(!showdrop);
    setShowDropdown(false);
    setShowDrop1(false);
    setShowDrop2(false);
    setShowDrop3(false);
    setShowDrop4(false);
    setShowDrop5(false);
    setShowDrop6(false);
    setShowDrop7(false);

  };

  const toggledrop1 = () => {
    setShowDrop1(!showdrop1);
    setShowDrop2(false);
    setShowDrop3(false);
    setShowDrop4(false);
    setShowDrop5(false);
    setShowDrop6(false);
    setShowDrop7(false);

  };

  const toggledrop2 = () => {
    setShowDrop2(!showdrop2);
    setShowDrop1(false);
    setShowDrop3(false);
    setShowDrop4(false);
    setShowDrop5(false);
    setShowDrop6(false);
    setShowDrop7(false);

  };
  const toggledrop3 = () => {
    setShowDrop3(!showdrop3);
    setShowDrop1(false);
    setShowDrop2(false);
    setShowDrop4(false);
    setShowDrop5(false);
    setShowDrop6(false);
    setShowDrop7(false);

  };

  const toggledrop4 = () => {
    setShowDrop4(!showdrop4);
    setShowDrop1(false);
    setShowDrop2(false);
    setShowDrop3(false);
    setShowDrop5(false);
    setShowDrop6(false);
    setShowDrop7(false);

  };

  const toggledrop5 = () => {
    setShowDrop5(!showdrop5);
    setShowDrop1(false);
    setShowDrop2(false);
    setShowDrop3(false);
    setShowDrop4(false);
    setShowDrop6(false);
    setShowDrop7(false);

  };

  const toggledrop6 = () => {
    setShowDrop5(!showdrop5);
    setShowDrop1(false);
    setShowDrop2(false);
    setShowDrop3(false);
    setShowDrop4(false);
    setShowDrop5(false);
    setShowDrop7(false);


  };

  const toggledrop7 = () => {
    setShowDrop7(!showdrop7);
    setShowDrop5(!showdrop5);
    setShowDrop1(false);
    setShowDrop2(false);
    setShowDrop3(false);
    setShowDrop4(false);
    setShowDrop5(false);
    setShowDrop6(false);

  };

  const loginDropdown = () => {
    setShowDropdown(false);
    setLoginDrop(!loginDrop)
    setShowDrop(false);
    setShowDrop1(false);
    setShowDrop2(false);
    setShowDrop3(false);
    setShowDrop4(false);
    setShowDrop5(false);
    setShowDrop6(false);
    setShowDrop7(false);
  }

  return (
    <>
      <nav className="relative">
        <div className="flex justify-between w-full h-16 items-center bg-white px-6 md:px-4 xl:px-12 shadow-md">
          <div>
            <img className="w-32" src="/health1.png" alt="img" />
          </div>

          <div className="hidden lg:block">
            <ul className="flex gap-6 cursor-pointer">
              <li className="" onClick={toggleDropdown} >

                <span className="flex items-end text-sm font-bold">{navList[0].link}<IoMdArrowDropdown />  </span>

                {navList[0].secondLine && (
                  <div className="text-[10px]">{navList[0].secondLine}</div>
                )}
              </li>
              <li className="" onClick={toggleDrop}>
                <span className="flex items-end text-sm font-bold">{navList[1].link} <IoMdArrowDropdown />  </span>
                {navList[1].secondLine && (
                  <div className="text-[10px]">{navList[1].secondLine}</div>
                )}
              </li>
              <li>
                <span className="text-sm font-bold mt-[-2px]">{navList[2].link}</span>
                {navList[2].secondLine && (
                  <div className="text-[10px] mt-[-2px]">{navList[2].secondLine}</div>
                )}
              </li>
              <li>
                <span className="text-sm font-bold">{navList[3].link}</span>
                {navList[3].secondLine && (
                  <div className="text-[10px]">{navList[3].secondLine}</div>
                )}
              </li>
              <li>
                <span className="text-sm font-bold">{navList[4].link}</span>
                {navList[4].secondLine && (
                  <div className="text-[10px]">{navList[4].secondLine}</div>
                )}
              </li>
              <li>
                <span className="text-sm font-bold">{navList[5].link}</span>
                {navList[5].secondLine && (
                  <div className="text-[10px]">{navList[5].secondLine}</div>
                )}
              </li>
            </ul>
          </div>

          <div onClick={loginDropdown} className="hidden cursor-pointer text-sm lg:flex gap-2 items-center">
            <FaRegUserCircle className="text-lg" />
            <div className="gap-1 flex items-center">
              Login | Signup
              <IoMdArrowDropdown className="text-lg" />
            </div>
          </div>

          {loginDrop && <ul className="absolute w-40 top-16 right-10 border-black bg-white rounded-[4px]">
            <li className="hover:bg-[#c30404] hover:text-white p-2 rounded-t-[4px]"><Link href="/patient/login">Patient Login</Link></li>
            <li className="hover:bg-[#c30404] hover:text-white p-2 rounded-b-[4px]" ><Link href="/doctor/login">Doctor Login</Link></li>
            </ul>}

          <div className="lg:hidden">
            {navOpen ? (
              <IoClose className="text-2xl" onClick={toggleSidebar} />
            ) : (
              <FaBars onClick={toggleSidebar} />
            )}
          </div>
        </div>

        <div
          className={`lg:hidden w-full absolute h-1200  backdrop-blur bg-gray-900 bg-opacity-40 z-50 transform -translate-x-full transition-all duration-300 ease-in-out ${navOpen ? "transform translate-x-0" : "transform -translate-x-full"
            }`}
        >
          <ul className="w-3/4  bg-white shadow-md h-full flex flex-col px-12 gap-8 pt-4 ">
            <li onClick={toggleDropdown}>
              <span className="text-sm">{navList[0].link}</span>
              {navList[0].secondLine && (
                <div className="text-[10px]">{navList[0].secondLine}</div>
              )}
              <ul className="postion- cursor-pointer">
                {
                  showdropdown && (

                    <div className="lg:hidden flex gap-20 mt-4 bg-white shadow-xl px-6 h-96 w-[600px] relative">
                      <div className="space-y-3">
                        <h3 className="font-semibold">Find docter by speciality</h3>
                        <li className="" onClick={toggledrop1}>
                          <span>{DropDown[0].link}</span>


                          <ul>
                            {showdrop1 && (
                              <div className="absolute top-[160px] left-[290px] bg-[#c30404] text-white px-3 py-2  rounded cursor-pointer">
                                <li>
                                  {" "}
                                  <span>{drop1[0].link}</span>
                                </li>
                                <li>
                                  <span>{drop1[1].link}</span>
                                </li>
                                <li>
                                  <span>{drop1[2].link}</span>
                                </li>
                                <li>
                                  <span>{drop1[3].link}</span>
                                </li>
                              </div>
                            )}
                          </ul>
                        </li>
                        <li className="" onClick={toggledrop2}>
                          <span >{DropDown[1].link}
                            <ul>
                              {showdrop2 && (
                                <div className="absolute top-[180px] left-[290px] bg-[#c30404] text-white px-3 py-2  rounded cursor-pointer">
                                  <li>
                                    {" "}
                                    <span>{drop2[0].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop2[1].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop2[2].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop2[3].link}</span>
                                  </li>
                                </div>
                              )}
                            </ul></span>
                        </li>
                        <li className="" onClick={toggledrop3}>
                          <span>{DropDown[2].link}
                            <ul>
                              {showdrop3 && (
                                <div className="absolute top-[210px] left-[290px] bg-[#c30404] text-white px-3 py-2  rounded cursor-pointer">
                                  <li>
                                    {" "}
                                    <span>{drop3[0].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop3[1].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop3[2].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop3[3].link}</span>
                                  </li>
                                </div>
                              )}
                            </ul></span>
                        </li>

                        <li className="" onClick={toggledrop4}>
                          <span>{DropDown[3].link}
                            <ul>
                              {showdrop4 && (
                                <div className="absolute top-[250px] left-[320px] bg-[#c30404] text-white px-3 py-2  rounded cursor-pointer">
                                  <li>
                                    {" "}
                                    <span>{drop4[0].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop4[1].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop4[2].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop4[3].link}</span>
                                  </li>
                                </div>
                              )}
                            </ul></span>
                        </li>
                        <li className="" onClick={toggledrop5}>
                          <span>{DropDown[4].link}
                            <ul>
                              {showdrop5 && (
                                <div className="absolute top-[290px] left-[310px] bg-[#c30404] text-white px-3 py-2  rounded cursor-pointer">
                                  <li>
                                    {" "}
                                    <span>{drop5[0].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop5[1].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop5[2].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop5[3].link}</span>
                                  </li>
                                </div>
                              )}
                            </ul></span>
                        </li>

                        <li className="" onClick={toggledrop6}>
                          <span>{DropDown[5].link}
                            <ul>
                              {showdrop6 && (
                                <div className="absolute top-[330px] left-[310px] bg-[#c30404] text-white px-3 py-2  rounded cursor-pointer">
                                  <li>
                                    {" "}
                                    <span>{drop6[0].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop6[1].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop6[2].link}</span>
                                  </li>
                                  <li>
                                    <span>{drop6[3].link}</span>
                                  </li>
                                </div>
                              )}
                            </ul></span>
                        </li>
                        <li className="" onClick={toggledrop7}>
                          <span>{DropDown[6].link}<ul>
                            {showdrop7 && (
                              <div className="absolute top-[340px] left-[270px] bg-[#c30404] text-white px-3 py-2 rounded cursor-pointer">
                                <li>
                                  <span>{drop7[0].link}</span>
                                </li>
                              </div>
                            )}
                          </ul>
                          </span>
                        </li>
                        <Link href="/doctor/signup" className="px-0 w-full border-2 ml-6 border-[#c30404] text-[#c30404] text-sm rounded-full py-2  mt-1 hover:bg-[#c30404] transition-all ease-in-out duration-300 hover:shadow-md hover:text-white ">
                          Are You a Doctor?
                        </Link>
                      </div>
                      <div className="space-y-3">
                        {" "}
                        <h3 className="font-semibold">Find docter via city</h3>
                        <li className="">
                          <span>{DropDown[7].link}</span>
                        </li>
                        <li className="">
                          <span>{DropDown[8].link}</span>
                        </li>
                        <li className="">
                          <span>{DropDown[9].link}</span>
                        </li>
                        <li className="">
                          <span>{DropDown[10].link}</span>
                        </li>
                        <li className="">
                          <span>{DropDown[11].link}</span>
                        </li>
                        <li className="">
                          <span>{DropDown[12].link}</span>
                        </li>
                      </div>

                      <div className="space-y-3">
                        {" "}
                        <h3 className="font-semibold">Search by hospital</h3>
                        <li className="">
                          <span>{DropDown[13].link}</span>
                        </li>
                        <li className="">
                          <span>{DropDown[14].link}</span>
                        </li>
                        <li className="">
                          <span>{DropDown[15].link}</span>
                        </li>
                        <li className="">
                          <span>{DropDown[16].link}</span>
                        </li>
                        <li className="">
                          <span>{DropDown[17].link}</span>
                        </li>
                      </div>
                    </div>
                  )
                  // ))}
                }
              </ul>
            </li>

            <li onClick={toggleDrop}>
              <span className="text-sm">{navList[1].link}</span>
              {navList[1].secondLine && (
                <div className="text-[10px]">{navList[1].secondLine}
                </div>
              )}
              <ul className="postiion cursor-pointer">
                {showdrop && (
                  <div className="lg:flex px-24 gap-24 mt-4  bg-white shadow-xl w-[600px]">
                    <div className="space-y-3">
                      <h3 className="font-semibold">Book lab Tests</h3>
                      <li className="">
                        <span>{drop[0].link}</span>
                      </li>
                      <li className="">
                        <span>{drop[1].link}</span>
                      </li>
                      <li className="">
                        <span>{drop[2].link}</span>
                      </li>
                      <li className="">
                        <span>{drop[3].link}</span>
                      </li>
                      <li className="">
                        <span>{drop[4].link}</span>
                      </li>
                      <li>
                        <span>{drop[5].link}</span>
                      </li>
                    </div>
                    <div className="space-y-3">
                      {" "}
                      <h3 className="font-semibold"> Labs In Pakistan</h3>
                      <li>
                        <span>{drop[6].link}</span>
                      </li>
                      <li>
                        <span>{drop[7].link}</span>
                      </li>
                      <li>
                        <span>{drop[8].link}</span>
                      </li>
                      <li>
                        <span>{drop[9].link}</span>
                      </li>
                      <li>
                        <span>{drop[10].link}</span>
                      </li>
                      <li>
                        <span>{drop[11].link}</span>
                      </li>
                    </div>
                  </div>
                )}
              </ul>

            </li>

            <li>
              <span className="text-sm">{navList[2].link}</span>
              {navList[2].secondLine && (
                <div className="text-[10px]">{navList[2].secondLine}</div>
              )}
            </li>

            <li>
              <span className="text-sm">{navList[3].link}</span>
              {navList[3].secondLine && (
                <div className="text-[10px]">{navList[3].secondLine}</div>
              )}
            </li>

            <li>
              <span className="text-sm">{navList[4].link}</span>
              {navList[4].secondLine && (
                <div className="text-[10px]">{navList[4].secondLine}</div>
              )}
            </li>

            <li>
              <span className="text-sm">{navList[5].link}</span>
              {navList[5].secondLine && (
                <div className="text-[10px]">{navList[5].secondLine}</div>
              )}
            </li>

            <div className="flex gap-2 items-center text-sm">
              <FaRegUserCircle className="text-lg" />
              Login | Signup
            </div>
          </ul>
        </div>
      </nav>

      <ul className="postion- px-36 cursor-pointer">
        {
          showdropdown && (

            <div className="hidden lg:flex gap-20 mt-4 bg-white shadow-xl px-6 h-96 w-[800px] relative">
              <div className="space-y-3">
                <h3 className="font-semibold">Find docter by speciality</h3>
                <li className="" onClick={toggledrop1}>
                  <span>{DropDown[0].link}</span>
                </li>
                <li className="" onClick={toggledrop2}>
                  <span>{DropDown[1].link}</span>
                </li>
                <li className="" onClick={toggledrop3}>
                  <span>{DropDown[2].link}</span>
                </li>

                <li className="" onClick={toggledrop4}>
                  <span>{DropDown[3].link}</span>
                </li>

                <li className="" onClick={toggledrop5}>
                  <span>{DropDown[4].link}</span>
                </li>

                <li className="" onClick={toggledrop6}>
                  <span>{DropDown[5].link}</span>
                </li>
                <li className="mb-2" onClick={toggledrop7}>
                  <span className="mb-2">{DropDown[6].link}</span>
                </li>
                <div onClick={() => setShowDropdown(!showdropdown)}>
                  <Link href="/doctor/signup" className="px-4 border-2 border-[#c30404] text-[#c30404] text-sm rounded-full py-2 mt-5 hover:bg-[#c30404] transition-all ease-in-out duration-300 hover:shadow-md hover:text-white">
                    Are You a Doctor?
                  </Link>
                </div>
              </div>
              <div className="space-y-3">
                {" "}
                <h3 className="font-semibold">Find docter via city</h3>
                <li className="">
                  <span>{DropDown[7].link}</span>
                </li>
                <li className="">
                  <span>{DropDown[8].link}</span>
                </li>
                <li className="">
                  <span>{DropDown[9].link}</span>
                </li>
                <li className="">
                  <span>{DropDown[10].link}</span>
                </li>
                <li className="">
                  <span>{DropDown[11].link}</span>
                </li>
                <li className="">
                  <span>{DropDown[12].link}</span>
                </li>
              </div>

              <div className="space-y-3">
                {" "}
                <h3 className="font-semibold">Search by hospital</h3>
                <li className="">
                  <span>{DropDown[13].link}</span>
                </li>
                <li className="">
                  <span>{DropDown[14].link}</span>
                </li>
                <li className="">
                  <span>{DropDown[15].link}</span>
                </li>
                <li className="">
                  <span>{DropDown[16].link}</span>
                </li>
                <li className="">
                  <span>{DropDown[17].link}</span>
                </li>
              </div>
            </div>
          )
          // ))}
        }
      </ul>

      <ul className="postiion- px-36 cursor-pointer">
        {showdrop && (
          <div className="hidden lg:flex px-24 gap-24 pb-24 mt-4  bg-white shadow-xl w-[800px]">
            <div className="space-y-3">
              <h3 className="font-semibold">Book lab Tests</h3>
              <li className="">
                <span>{drop[0].link}</span>
              </li>
              <li className="">
                <span>{drop[1].link}</span>
              </li>
              <li className="">
                <span>{drop[2].link}</span>
              </li>
              <li className="">
                <span>{drop[3].link}</span>
              </li>
              <li className="">
                <span>{drop[4].link}</span>
              </li>
              <li>
                <span>{drop[5].link}</span>
              </li>
            </div>
            <div className="space-y-3">
              {" "}
              <h3 className="font-semibold"> Labs In Pakistan</h3>
              <li>
                <span>{drop[6].link}</span>
              </li>
              <li>
                <span>{drop[7].link}</span>
              </li>
              <li>
                <span>{drop[8].link}</span>
              </li>
              <li>
                <span>{drop[9].link}</span>
              </li>
              <li>
                <span>{drop[10].link}</span>
              </li>
              <li>
                <span>{drop[11].link}</span>
              </li>
            </div>
          </div>
        )}
      </ul>

      <ul>
        {showdrop1 && (
          <div className="absolute top-[160px] left-[290px] bg-[#c30404] text-white px-3 py-2  rounded cursor-pointer">
            <li>
              {" "}
              <span>{drop1[0].link}</span>
            </li>
            <li>
              <span>{drop1[1].link}</span>
            </li>
            <li>
              <span>{drop1[2].link}</span>
            </li>
            <li>
              <span>{drop1[3].link}</span>
            </li>
          </div>
        )}
      </ul>

      <ul>
        {showdrop2 && (
          <div className="absolute top-[180px] left-[290px] bg-[#c30404] text-white px-3 py-2  rounded cursor-pointer">
            <li>
              {" "}
              <span>{drop2[0].link}</span>
            </li>
            <li>
              <span>{drop2[1].link}</span>
            </li>
            <li>
              <span>{drop2[2].link}</span>
            </li>
            <li>
              <span>{drop2[3].link}</span>
            </li>
          </div>
        )}
      </ul>

      <ul>
        {showdrop3 && (
          <div className="absolute top-[210px] left-[290px] bg-[#c30404] text-white px-3 py-2  rounded cursor-pointer">
            <li>
              {" "}
              <span>{drop3[0].link}</span>
            </li>
            <li>
              <span>{drop3[1].link}</span>
            </li>
            <li>
              <span>{drop3[2].link}</span>
            </li>
            <li>
              <span>{drop3[3].link}</span>
            </li>
          </div>
        )}
      </ul>

      <ul>
        {showdrop4 && (
          <div className="absolute top-[250px] left-[320px] bg-[#c30404] text-white px-3 py-2  rounded cursor-pointer">
            <li>
              {" "}
              <span>{drop4[0].link}</span>
            </li>
            <li>
              <span>{drop4[1].link}</span>
            </li>
            <li>
              <span>{drop4[2].link}</span>
            </li>
            <li>
              <span>{drop4[3].link}</span>
            </li>
          </div>
        )}
      </ul>

      <ul>
        {showdrop5 && (
          <div className="absolute top-[290px] left-[310px] bg-[#c30404] text-white px-3 py-2  rounded cursor-pointer">
            <li>
              {" "}
              <span>{drop5[0].link}</span>
            </li>
            <li>
              <span>{drop5[1].link}</span>
            </li>
            <li>
              <span>{drop5[2].link}</span>
            </li>
            <li>
              <span>{drop5[3].link}</span>
            </li>
          </div>
        )}
      </ul>
      <ul>
        {showdrop6 && (
          <div className="absolute top-[330px] left-[310px] bg-[#c30404] text-white px-3 py-2  rounded cursor-pointer">
            <li>
              {" "}
              <span>{drop6[0].link}</span>
            </li>
            <li>
              <span>{drop6[1].link}</span>
            </li>
            <li>
              <span>{drop6[2].link}</span>
            </li>
            <li>
              <span>{drop6[3].link}</span>
            </li>
          </div>
        )}
      </ul>
      <ul>
        {showdrop7 && (
          <div className="absolute top-[340px] left-[270px] bg-[#c30404] text-white px-3 py-2 rounded cursor-pointer">
            <li>
              <span>{drop7[0].link}</span>
            </li>

          </div>
        )}
      </ul>

    </>
  );
};

export default NavBar;