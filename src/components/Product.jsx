import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/CartSlice'
import { toast } from 'react-hot-toast'

const Product = ({ post }) => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to cart")
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from cart")
    }

    // console.log(post.title)
    return (
        <div className='flex flex-col items-center justify-between m-4 p-2 rounded-lg hover:scale-110 trransition duration-300 ease-in shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <div>
                <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
            </div>
            <div>
                <p className='w-40 text-gray-600 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </div>
            <div className='h-[200px] m-4 p-4'>
                <img src={post.image} alt="" className='h-full' />
            </div>
            <div className='flex justify-around items-center gap-15 w-full mt-2'>
            <div>
                <p className='text-green-400 font-bold'>₹{post.price}</p>
            </div>
            {
                cart.some((p) => p.id === post.id) ?
                    (<button
                    className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 uppercase px-3 hover:bg-gray-700 hover:text-white trransition duration-300 ease-in'
                        onClick={removeFromCart}
                    >
                        Remove Item
                    </button>) :
                    (<button
                    className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 uppercase px-3 hover:bg-gray-700 hover:text-white trransition duration-300 ease-in'
                        onClick={addToCart}
                    >
                        Add to cart
                    </button>)
            }
            </div>
        </div>
    )
}

export default Product