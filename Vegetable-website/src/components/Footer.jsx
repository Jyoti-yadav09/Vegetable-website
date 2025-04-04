import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className='bg-gray-700 text-white py-8'>
      <div className='px-8 max-w-7xl mx-auto'>
        {/* upper sections */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
              
            {/*Company Info */}
            <div>   
            <h3 className='text-lg font-bold mb-3'>Company Info</h3>
            <ul className='space-y-2'>
                <li><Link to="/about" className='hover:underline'>About Us</Link></li>
                <li><Link to="/contact " className='hover:underline'>Contact</Link></li>
            </ul>
            </div>

             {/*Quick Links */}
             <div>
                <h3 className='text-lg font-bold mb-3'>Quick Links</h3>
                <ul className='space-y-2'>
                    <li><Link to="/home" className='hover:underline'>Home</Link></li>
                    <li><Link to="/category" className='hover:underline'>Categories</Link></li>
                    <li><Link to="/shop" className='hover:underline'>Shop</Link></li>
                </ul>
             </div>
                
                <div className='space-y-2'>
                    <h3 className='text-lg font-bold mb-3'>Opening Hours</h3>
                    <p >Sunday-Friday:8am to 6pm</p>
                    <p>Saturday:8am to 12pm</p>
                </div>
        </div>

                    {/* Bottom section- copyright and social media */}
                    <div className='text-center mt-8'>
                        <div className='flex justify-center space-x-6'>
                            <a href="https://facebook.com" target="_blank"> 
                            <FontAwesomeIcon icon={faFacebook} className='hover:text-blue-300 text-xl'/></a>

                           <a href="https://instagram.com" target="_blank">
                           <FontAwesomeIcon icon={faInstagram} className='hover:text-blue-300 text-xl'/> </a>

                           <a href="https://linkedin.com" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className='hover:text-blue-300 text-xl'/>  
                           </a>
                        </div>
                        <p className='mt-4 text-xm'>&copy; 2025 by Fresh Basket</p>
                    </div>
      </div>
    </footer>
  )
}

export default Footer;
