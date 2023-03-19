import React from 'react'
// import {FaQuoteLeft,FaQuoteRight} 

export default function Cards(props) {
    let review = props.review
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
            <img className="z-[20] aspect-square rounded-full w-[140px] h-[140px] z-25"
            src={review.image} />

            <div className='absolute bg-violet-500 w-[140px] h-[140px] rounded-full
            top-[-6px]  z-[-20] left-[10px]'></div>
        </div>
        
        <div className='text-center mt-7'>
            <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
            <p className='capitalize text-sm '>{review.job}</p>
        </div>

        {/* <div  className='text-center mt-7'>
        </div> */}

        <div  className='text-violet-400 mx-auto mt-5'>
            {/* <FaQ/> */}
        </div>

        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>

        <div  className='text-violet-400 mx-auto mt-5'>
            {/* <Fa/> */}
        </div>

    </div>
  )
}
