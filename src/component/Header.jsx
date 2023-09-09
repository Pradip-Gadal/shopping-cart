import React, { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative flex flex-col items-center justify-center h-[250px] w-[200px] rounded-md bg-gradient-to-r from-purple-500 to-yellow-500'>
      <button className='bg-blue-400 py-1 w-full font-bold flex justify-start border-4 rounded-3xl px-4 border-transparent active:border-white duration-300 active:text-white active:scale-90'
      onClick={() => setIsOpen(prev => !prev)}>DropDown
      {isOpen ? '>': '---'}
      </button>
      {isOpen && 
      <div className='absolute w-full bg-blue-400 text-white mt-40 rounded-lg p-2 font-sm'>
        <h4 className='hover:bg-white hover:rounded-lg px-2 text-black'>good</h4>
        <h4>Bad</h4>
      </div>}
    </div>
  )
}

export default Header
