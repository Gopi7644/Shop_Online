import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='flex justify-center flex-col items-center h-screen'>       
      <div className='spinner'></div>
      <p className='font-bold py-2'>Loading...</p>
    </div>
  )
}

export default Spinner