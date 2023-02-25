import React from 'react'
import avatar from '../assets/avatar.png'
import quotationMark from '../assets/quotationMark.png'

const FeedBackCard = () => {
  return (
    <div className='bg-white p-8 border shadow-sm my-8 mx-2'>
        <div className='flex justify-between'>
            <div className='flex gap-4'>
                <img src={avatar} alt="feedback" />
                <div>
                    <h1>Jenny Wilson</h1>
                    <p>UI/UX Designer</p>
                </div>
                <img src={quotationMark} alt="quote" className='h-8' />
            </div>
        </div>
        <div className='py-8'>
            <h3 className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto praesentium distinctio excepturi dolor, nihil unde exercitationem eligendi sit quam nemo cumque, tenetur hic, quasi atque. Fuga saepe vitae cum quasi!</h3>
        </div>
    </div>
  )
}

export default FeedBackCard