import React from 'react'
import Card from './Card'
import { courses } from '../data/courses'
import Slider from 'react-slick'

const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <section className='w-full bg-white py-24 p-4'>
        <div className='md:max-w-[1100px] m-auto max-w-[400px]'>
            <h1 className='py-4 text-3xl font-bold'>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
            <p className='text-[#6D737A] py-3'>Various versions have evolved over the years, sometimes by accident.</p>
          </div>
        <div className='md:max-w-[1100px] m-auto grid md:grid-cols-3 max-w-[400px] gap-5'>
          {/* <Slider {...settings} className='px-5'> */}
            {courses && courses.map((course) =>(
                <Card key={course.id} title={course.title} category={course.category} rating={course.rating} price={course.price} linkImg={course.linkImg}/>
            ))}
            {/* </Slider> */}
        </div>
    </section>
  )
}

export default Courses