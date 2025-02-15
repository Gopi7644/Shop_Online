import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    // console.log("Printing cart data...")
    // console.log(cart)
    const [totalAmount, setTotalAmount] = useState('0')

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])

    return (
        <div className='mt-5'>
            {
                cart.length > 0 ?
                    (<div className='flex justify-center gap-x-8  px-50'>
                        <div>
                            {
                                cart.map((item, index) => {
                                    return <CartItem key={item.id} item={item} itemIndex={index} />
                                })
                            }
                        </div>

                        <div className='flex flex-col gap-y-90 mt-25 w-100'>
                            <div className='text-sm text-green-500'>
                                <div className='uppercase'>Your cart</div>
                                <div className='text-2xl font-bold uppercase'>Summery</div>
                                <p className='text-xs'>
                                    <span>Total Itme: {cart.length}</span>
                                </p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-gray-700'>Total Amount : <span className='font-bold'>₹{totalAmount}</span></p>
                                <button className='bg-green-500 px-1 py-3 rounded-lg mt-2 text-white'>
                                    Checkout Now
                                </button>
                            </div>
                        </div>


                    </div>) :
                    (<div className='flex flex-col justify-center items-center h-screen'>
                        <h1 className='text-red-500 text-4xl uppercase bg-purple-900 m-8 p-8 rounded-lg'>Your cart is empty</h1>
                        <NavLink to="/">
                            <button
                            className='px-3 py-1 bg-blue-500 rounded-full text-white cursor-pointer'
                            >
                                Shop Now
                            </button>
                        </NavLink>
                    </div >)
            }
        </div >
    )
}

export default Cart