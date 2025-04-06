import React from 'react';
import {Link} from "react-router-dom";
import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='text-gray-700'>
          {/* Breadcrumb */}
             <div className='py-4 px-56 bg-gray-50 mt-20'>
              <nav className='text-sm text-gray-600'>
                <ol className='flex items-center'>
                  <li> 
                    <Link to="/" className='  text-gray-700 hover:underline'>Home</Link>

                  </li>
                  <li> -> </li>
                  <li className='text-black-500'>Contact</li>
                </ol>
              </nav>
             </div>
       {/*contact form */}
       <section className='py-17 mb-7'>
        <div className='text-center mb-10 mt-1'>
          <h1 className='text-3xl font-bold'>Get in touch</h1>
        </div>

         <div className='mx-auto max-w-4xl px-4'>
          <form className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-4'>
              <input type="text" placeholder='Name' className='border border-gray-400 rounded p-3 '/>
              <input type="email" placeholder='Email' className='border border-gray-400 rounded p-3'/>
            </div>

            <input type="text" placeholder='Subject' className='border border-gray-400 rounded p-3 w-full'/>
            <textarea placeholder='Description' rows="5" className='border border-gray-400 rounded p-3 resize-none w-full'/>
            <button type="submit" className='bg-blue-500 px-8 py-3 rounded-4xl text-white hover:bg-blue-600 cursor-pointer'>Send</button>
          </form>

         </div>
       </section>

        <section className='border border-black mb-10 py-6'>
           <div className='flex flex-col md:flex-row text-center justify-evenly gap-6 font-semibold'>
            <div className='flex flex-col items-center'>
              <FaPhoneAlt className='text-2xl mb-1'/>
              <p>9804069762</p>   
              </div>
            
            <div className='flex flex-col items-center'> 
              <FaEnvelope className='text-2xl mb-1'/>
              <p>Freshbaseket@gmail.com</p>
            </div>

             <div className='flex flex-col items-center'>
              <FaMapMarkerAlt className='text-2xl mb-1'/>
              <p>Biratnagar, Nepal</p>
             </div>


           </div>

        </section>
       
    </div>
  )
}

export default Contact;
