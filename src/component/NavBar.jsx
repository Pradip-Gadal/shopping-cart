import { useState } from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';
import { MdArrowDropDown } from 'react-icons/md';
import ItemsOnCart from "./ItemsOnCart";

const NavBar = () => {
    // for state change ---> drop down menu
    const [dropDownState, setDropDownState] = useState(false);

  return (
    <div className='w-full h-[100px] bg-gray-900 flex flex-row justify-between items-center px-10 m-1 rounded-3xl text-white'>
      
      <h2 className='font-bold text-yellow-500 border-2 border-yellow-500 rounded-md px-3 h-10 flex items-center'>SHOPING-CART</h2>

      <div>
        <BsSearch className="absolute text-xl mt-2.5 ml-2 text-yellow-500"/>
        <input type="text" placeholder="Search...."
        className=" h-10 w-auto rounded-md border-2 pl-10 border-yellow-500 bg-transparent"/>
      </div>

      <button
      className='bg-transparent h-10 w-[6rem] border-2 border-yellow-500 rounded-lg font-bold text-yellow-500'
      onClick={() => setDropDownState(!dropDownState)}>
        <div className="flex justify-around items-center">
            <div className="flex text-[13px]">
                <AiOutlineShoppingCart className="text-[30px]"/>
                <p className="text-yellow-600">10</p>
            </div> 
            {!dropDownState 
               ? <MdArrowDropDown /> 
               : <MdOutlineArrowDropDownCircle className="text-[16px]"/>}  
        </div>
         
        <div>
            {dropDownState && <ItemsOnCart />}
        </div>
      </button>
    </div>
  )
}

export default NavBar
