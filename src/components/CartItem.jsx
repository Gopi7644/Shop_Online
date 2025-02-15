import React from 'react'
import { MdAutoDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice'

const CartItem = ({ item, itemIndex }) => {
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id))
        toast.success("Item Removed")
    }
    return (
        <div>
            <div className='border-b-2 w-full h-100 max-w-200 flex justify-center items-end gap-8 mt-[-80px] mb-3'>

                <div className='h-60 w-40 p-2'>
                    <img src={item.image} alt="Product" className='h-full' />
                </div>

                <div className='h-60 w-75'>

                    <div className=''>
                        <h1 className=' text-gray-700 my-2 font-bold'>{item.title}</h1>
                        <p className='text-[13px] text-gray-600'>{item.description.split(" ").slice(0, 12).join(" ") + "..."}</p>
                    </div>

                    <div className='flex items-center justify-between py-12'>
                        <p className='font-bold  text-green-500'>₹{item.price}</p>
                        <div
                            className='text-red-500 text-8'
                            onClick={removeFromCart}>
                            <MdAutoDelete />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CartItem