import React from 'react'
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
    const apiUrl = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(apiUrl)
            const data = await res.json();
            // console.log('this is api data...', data);
            setPosts(data);


        }
        catch (error) {
            console.log('check your Internet connection or something is wrong');
            setPosts([]);
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchProductData()
    }, [])
    return (
        <div className='mt-20'>
            {
                loading ? <Spinner /> :
                    posts.length > 1 ? (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
                        {
                            posts.map((post) => (
                                <Product key={post.id} post={post} />
                            ))
                        }
                    </div>) :
                        <div className='flex justify-center items-center h-screen'>
                            <p className='font-bold'>No Data Found</p>
                        </div>
            }
        </div>
    )
}

export default Home