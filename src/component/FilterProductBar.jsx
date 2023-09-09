import React, { useState } from 'react'
import Rating from './Rating';

const TYPE = {
  ASC : 'ascending',
  DESC: 'descending',
  OUT: 'outOfStock',
  QUICK: 'fastDelivary',

}

const FilterProductBar = () => {

  const [filterRadioType, setFilterRadioType] = useState();
  const [filterStockOutType, setFilterOutStockType] = useState('');
  const [filterFastType, setFilterFastType] = useState('')
  return (
    <div className='bg-gray-900 text-white p-3'>
      <h1 className='font-bold text-2xl'>Filter Product</h1>
      <div className='py-3'>
        <form className='flex flex-col gap-2'>

        {/* form including Radio type */}

          <label htmlFor='Ascending'><input 
          type='radio' 
          id='Ascending' 
          value={TYPE.ASC}
          name='typeSelection'
          // checked={arrangmentType === TYPE.ASC}
          onChange={e=> setFilterRadioType(e.target.value)}
          />Ascending</label>

          <label htmlFor='Descending'><input 
          type='radio' 
          id='Descending' 
          value={TYPE.DESC}
          name='typeSelection'
          // checked={arrangmentType === TYPE.DESC}
          onChange={e => setFilterRadioType(e.target.value)}
          />Descending</label>

        {/* form including checkbox type */}

          <label htmlFor='outOfStock'><input 
          type='checkbox'
          id='outOfStock'
          value={TYPE.OUT}
          name='typeSelection'
          onChange={e=> setFilterOutStockType(e.target.value)}  
          />Including Out of Stock</label>

          <label><input 
          type='checkbox'
          id='fastDelivary'
          value={TYPE.QUICK}
          name='typeSelection'
          onChange={e => setFilterFastType(e.target.value)}
          />Fast Delivery</label>

          <div className='flex'>
            Rating:<Rating />
          </div>
          

          {/* Submit button  */}

          <input type='submit' value='FILTER'
          className='border-4 rounded-3xl border-yellow-500 text-yellow-500 font-bold text-[24px] my-3 hover:bg-hover-effect active:scale-90 duration-300
          active:bg-gray-100 active:border-yellow-600 active:text-yellow-600 cursor-pointer shadow-xl active:shadow-md' 
          />
        </form>
      </div>
    </div>
  )
}

export default FilterProductBar
