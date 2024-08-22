import React, { useState } from 'react'
import Container from '../layer/Container'
import { HiMiniBars2 } from 'react-icons/hi2'
import { IoSearch } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link, useNavigate } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'

const SearchBar = () => {
    let navigate = useNavigate()

    let division = ["Barishal", "Chattogram", "Dhaka", "Khulna", "Rajshahi", "Rangpur", "Mymensingh", "Sylhet"]

    let [show, setShow] = useState(false)

    return (
        <div className='bg-[#d68813] '>
            <Container className='flex justify-between items-center relative py-5'>
                <div onClick={() => setShow(!show)} className="main flex gap-2 items-center cursor-pointer">
                    <HiMiniBars2 />
                    <p>Shop by Category</p>
                </div>

                <div className={`bg-slate-500 group transition-all duration-300 w-[263px] absolute top-full left-0  ${show ? "opacity-100 visible" : "opacity-0 invisible"}`}>

                    <ul>
                        <li className='bg-[#262626] border-b border-[#2D2D2D] relative '>
                            <Link className='text-gray-300 block hover:text-white  py-4 px-5 hover:pl-8 hover:font-bold transition-all duration-300'>Accesories</Link>
                            
                        </li>
                        <li className='bg-[#262626] border-b border-[#2D2D2D]'>
                            <Link className='text-gray-300 block hover:text-white  py-4 px-5 hover:pl-8 hover:font-bold transition-all duration-300'>Accesories</Link>
                        </li>
                        <li className='bg-[#262626] border-b border-[#2D2D2D]'>
                            <Link className='text-gray-300 block hover:text-white  py-4 px-5 hover:pl-8 hover:font-bold transition-all duration-300'>Accesories</Link>
                        </li>
                        <li className='bg-[#262626] border-b border-[#2D2D2D]'>
                            <Link className='text-gray-300 block hover:text-white  py-4 px-5 hover:pl-8 hover:font-bold transition-all duration-300'>Accesories</Link>
                        </li>
                        <li className='bg-[#262626]'>
                            <Link className='text-gray-300 block hover:text-white  py-4 px-5 hover:pl-8 hover:font-bold transition-all duration-300'>Accesories</Link>
                        </li>
                    </ul>
                    <div className='p-10 h-full absolute left-full flex gap-5 top-0 bg-slate-500 opacity-0 group-hover:opacity-100 '>
                                <ul>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                </ul>
                                <ul>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                </ul>
                                <ul>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                </ul>
                                <ul>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                </ul>
                                <ul>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                </ul>
                                <ul>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                </ul>
                                <ul>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                </ul>
                                <ul>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                </ul>
                                <ul>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                    <li>FDR 2401</li>
                                </ul>
                            </div>

                </div>



                <div className="main relative" >
                    <input className='w-[601px] py-4 px-4 outline-none ' type="text" placeholder='Search Products' />
                    <IoSearch className='absolute top-1/2 -translate-y-1/2 right-5' />
                </div>
                <div className="main flex gap-5 items-center">
                    <div className="user flex items-end gap-2">
                        <FaUser />
                        <TiArrowSortedDown />
                    </div>
                    <div>
                        <FaCartShopping />

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SearchBar