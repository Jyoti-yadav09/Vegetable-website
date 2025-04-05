import React, { useState } from 'react';
import logo from '../assets/logo.png'; 
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {

   const [isCategorOpen, setIsCatogoryOpen]=useState(false);
  return (
    <nav className='bg-green-600 px-6 py-3 h-[100px] '> 
    
    <div className='flex items-center justify-between max-w-7xl mx-auto'> 
    
           {/*logo */}
      <div className='flex  h-24'>
        <img src={logo} alt="Logo" className='h-18 w-20' /> 
      </div>

           {/*Search */}
      <div className='flex  bg-white rounded-md overflow-hidden w-[500px] shadow-lg'> 
        <input type="type" placeholder='Search Product Here' className='p-2 flex-grow text-gray-700 outline-none'></input>
       
        <button className='p-3'>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </button>
      </div>

       {/*Wishlist, cart, login */}
        <div className='flex  gap-6 text-lg'>
              {/*wishlist */}
          <div className='relative cursor-pointer'>
            <FontAwesomeIcon icon={faHeart}/>
            <span className=''></span>
          </div>
       
           {/*cart */}
           <div className=' relative cursor-pointer'>
        <FontAwesomeIcon icon={faCartShopping}/>
       <span>  </span>
      </div>
    
           {/*Login */}
      <div className='flex items-center cursor-pointer'>
      <p className='md:block'>Login</p>
      <FontAwesomeIcon icon={faUser}/>
      </div>
     
      </div>
      </div>

        {/*Navigation Links-shop, contact*/} 
        <div className='bg-white shadow-md '>

          <div className=' flex items-center gap-10 px-6 py-3  mx-auto max-w-7xl '> 

            {/*Category dropdown */}
             <div className='relative'>              
            <div className='flex items-center gap-2 cursor-pointer' onClick={()=>setIsCatogoryOpen(!isCategorOpen)}>
              <FontAwesomeIcon icon={faBars}/>  
              <p className='text-lg'>Category</p>
            </div>
           
            {/* Dropdown menu*/}
                       {isCategorOpen && (
                        <div className='absolute left-0 top-12 w-38 bg-white shadow-lg rounded-lg '>
                          <ul className='py-2'>
                            <li className='px-4 py-2 cursor-pointer hover:text-blue-600 text-lg'>
                              Vegetables
                            </li>
                              <li className='px-4 py-2 cursor-pointer hover:text-blue-600 text-lg'>Fruits</li>
                              <li className='px-4 py-2 cursor-pointer hover:text-blue-600 text-lg'>Meat</li>
                              <li className='px-4 py-2 cursor-pointer hover:text-blue-600 text-lg'>Fish</li>
                          </ul>
                        </div>
                       )}
                            </div> 
        
                {/*shop and contact links}*/}
                <div className='flex items-center gap-6'>
                   <Link to="/shop" className='text-gray-700 text-lg hover:text-blue-600'>Shop</Link>
                   <Link to="/contact" className='text-gray-700 text-lg  hover:text-blue-600'>Contact</Link>
                </div>
                
          </div>
        </div>
     
    </nav>
  );
}

export default Navbar;

