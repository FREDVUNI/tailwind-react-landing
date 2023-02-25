import React from 'react'
import Rating from './Rating'
import blog1 from '../assets/blog-1.png'


const Card = ({title,category,rating,price,linkImg}) => {
  return (
    <div className='bg-white drop-shadow-md overflow-hidden mr-2 my-4'>
        <img src={blog1} alt="courses"  className='h-40 w-full object-cover'/>
        <div className='p-5'>
            <h1 className='py-2 truncate'>{title}</h1>
            <Rating rating={3}/>
        </div>
        <h3 className='p-5 text-xl bottom-0'>{price}</h3>
        <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
            {category}
        </div>
    </div>
  )
}

export default Card