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
    <section className='w-full bg-white py-14'>
      <div className='py-4 md:max-w-[1100px] m-auto '>
            <h1 className='py-3 text-3xl font-bold'>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
            <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>
          </div>
        <div className='md:max-w-[1100px] m-auto grid md:grid-cols-4 max-w-[500px] gap-5'>
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