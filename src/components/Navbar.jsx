import React from 'react'
import { IoIosCart } from "react-icons/io"
import LogoPic from "../assets/LogoPic.png"
import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux'
// import Spinner from './Spinner.css'

const Navbar = () => {
    const cart = useSelector((state) => state.cart)

    return (
        <div>
            <nav className='bg-blue-600 shadow-md active fixed top-0 w-full z-10'>
                <div className='container mx-auto flex flex-row justify-around items-center py-4 px-8 '>
                    <div>
                        <NavLink to="/">
                            <div className='flex items-center'>
                                <img src={LogoPic} alt="Logo" className='h-14 w-30 rounded-full mr-2' />
                                <span className='text-white text-xl font-bold'>All Rounder Store</span>
                            </div>
                        </NavLink>
                    </div>

                    <div className='flex items-center space-x-6'>
                        <NavLink to="/" className='text-white text-lg hover:text-gray-300'>
                            Home
                        </NavLink>

                        <NavLink to="/cart" className='relative text-white text-lg hover:text-gray-300'>
                            <IoIosCart size={26} />
                            {
                                cart.length > 0 &&
                                <span className='absolute -top-2 -right-2 animate-bounce bg-green-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>
                                    {cart.length}
                                </span>
                            }
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar