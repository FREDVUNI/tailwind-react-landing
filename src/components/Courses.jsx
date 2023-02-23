import React from 'react'
import Card from './Card'

const Courses = () => {
  return (
    <section className='w-full bg-white py-24'>
        <div className='md:max-w-[1100px] m-auto grid md:grid-cols-2 max-w-[400px]'>
            <Card/>
        </div>
    </section>
  )
}

export default Courses