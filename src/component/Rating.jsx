import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai'

const Rating = () => {

    const [rating, setRating] = useState(0);

  return (
    <div className='flex cursor-pointer items-center'>
        <div className='flex items-center mt-1 px-1'>
            {[...Array(5)].map(( _ ,index)=> <span key={index} 
            onClick={(() => setRating(index))}>
            {rating >= index ? <AiFillStar className='text-yellow-500'/> : <AiOutlineStar />}</span>)}
        </div>
    </div>
  )
}

export default Rating;
