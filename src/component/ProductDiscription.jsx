import React, { useState } from 'react'
import Rating from './Rating'

const ProductDiscription = ({product}) => {

  const [addCart, setAddCart] = useState(false);

  return (
    <div className= 'bg-green-300 p-1 font-bold flex flex-col justify-between'>
      <div className='h-[10rem] w-full flex justify-center'>
        <img src={product.image} alt={product.name} 
          className='h-[10rem] w-full bg-yellow-500 bg-cover'
        />
      </div>
      <h1 className='text-xl my-1'>{product.name}</h1>
      <p >Rs. {product.price}</p>
      <p>{product.fastDelivery
      ? 'Fast Delivery': 'Delivery in 4 days' }</p>
      <div className='flex justify-start'>Rating:<Rating /></div>
      <div className='flex justify-center pt-1'>
        <button onClick={() => setAddCart(!addCart)}
        className='border-1 border-yellow-500 rounded-md text-white bg-blue-500 px-4 py-1 my-2 shadow-lg
        hover:scale-110 duration-300 active:scale-100 font-normal'
        style={addCart ? {backgroundColor:'red'}: {backgroundColor:'blue'}}>{addCart ? 'Remove':'Add to Cart'}</button>
      </div>
     
    </div>
  )
}

export default ProductDiscription
