import React from 'react'
import Rating from './Rating'
import blog1 from '../assets/blog-1.png'


const Card = () => {
  return (
    <div className='bg-white drop-shadow-md overflow-hidden rounded-2xl'>
        <img src={blog1} alt="courses"  className='h-40 w-full object-fit object-cover'/>
        <div className='p-5'>
            <h1 className='py-2'>course</h1>
            <Rating/>
        </div>
        <h3 className='p-5 text-xl'>$500</h3>
        <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
            HTML
        </div>
    </div>
  )
}

export default Card