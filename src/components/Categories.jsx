import React from 'react'
import CategoryCard from './CategoryCard'
import {BsVectorPen,BsBank,BsMusicNote} from 'react-icons/bs'
import { TiHtml5,TiMicrophone,TiBriefcase,TiBatteryCharge,TiCamera} from 'react-icons/ti'

const Categories = () => {
  return (
    <section className='w-full bg-[#F0F8F7] p-5'>
        <div className='md:max-w-[1100px] m-auto max-w-[400px]'>
            <h1 className='md:leading-[72px] text-3x1 font-bold'>Our <span className='text-[#208486]'>Popular Categories</span></h1>
            <p className="text-lg text-gray-600">
                Various versions have evolved over the years
            </p>
            <div className='grid md:grid-cols-3 py-12 gap-4'>
                <CategoryCard icon={<BsVectorPen size={30}/>} title={'Design'}/>
                <CategoryCard icon={<TiHtml5 size={30}/>} title={'Web Development'}/>
                <CategoryCard icon={<TiMicrophone size={30}/>} title={'Marketing'}/>
                <CategoryCard icon={<TiBriefcase size={30}/>} title={'Business'}/>
                <CategoryCard icon={<TiBatteryCharge size={30}/>} title={'Lifestyle'}/>
                <CategoryCard icon={<TiCamera size={30}/>} title={'Photograph'}/>
                <CategoryCard icon={<BsMusicNote size={30}/>} title={'Music'}/>
                <CategoryCard icon={<BsBank size={30}/>} title={'Finance'}/>
                <CategoryCard icon={<BsMusicNote size={30}/>} title={'Health & Fitness'}/>
            </div>
        </div>
    </section>
  )
}

export default Categories