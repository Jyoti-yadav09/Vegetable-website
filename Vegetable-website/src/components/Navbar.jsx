import React from 'react';
import logo from '../assets/logo.png'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className='bg-green-400 min-w-screen h-27 flex items-center mt-10'> 
      <div className='h-10 w-auto'>
        <img src={logo} alt="Logo" className='h-20 w-auto object-contain' /> 
      </div>
      <div className='flex items-center'> 
        <input type="type" placeholder='Search Product Here' className='p-2 rounded-r-md'></input>
        <button>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </button>
      </div>
      <div className='flex'>
      <p>Login</p>
      <FontAwesomeIcon icon={faUser}/>
      </div>
      <FontAwesomeIcon icon={faCartShopping}/>
    </nav>
  );
}

export default Navbar;
