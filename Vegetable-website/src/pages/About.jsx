import React from 'react';

const About = () => {
  return (
    <div className='px-6 py-24 max-w-7xl mx-auto '>
        {/*About Section */}
      <div className='text-center mb-8 '>
         <h2 className='text-4xl font-bold text-green-600 mb-6 '>About</h2>
         <p className='text-xl mb-5 text-gray-700 text-left leading-8'>
         We are Online Tarkari Pasal, delivering fresh vegetables, fruits, and groceries. 
          You can purchase our products in just a few minutes. Simply browse a product, 
          add it to your cart, fill in your address, and place your order. We will deliver it within 1 hours.
         </p>
         <p className='text-xl mb-5 text-gray-700 text-left leading-8'> 
         We aim to revolutionize the traditional shopping experience. You no longer need to waste time 
          visiting local markets, bargaining with shopkeepers, or carrying heavy bags. With us, you can 
          simply select your products and buy them online; we will deliver them to your doorstep within a few hours.
         </p>
          <p className='text-xl text-gray-700 text-left leading-8'>
          We strive to shorten the time between the farm and your table. We deliver local food that is fresher, 
          tastier, and of better quality. Additionally, we aim to eliminate middleman costs, which often increase 
          vegetable prices. As direct customers buying from us as producers, you enjoy fair, mediator-free pricing.
          </p>

      </div>

       {/*Information Section */}
       <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto'>
        <div className='p-8 bg-green-50 rounded-lg shadow-md'>
            <h3 className='text-xl mb-3 font-bold text-green-800 text-center'>Why Choose Us?</h3>
            <p className='text-base text-gray-700'>
            We provide fresh, high-quality fruits, vegetables, and local products at affordable prices. Customer satisfaction is our priority,
             and we ensure fast
             delivery within 1 hours in Biratnagar. Enjoy convenience, reliability, and the best quality with every order!
            </p>
        </div>
        <div className='p-6 bg-green-50 rounded-lg shadow-md'>
            <h3 className='text-xl mb-3 font-bold text-green-800 text-center'>How to Order & Payment</h3>
            <p className='text-gray-700'>
            Placing an order is easy! Browse our products, add to cart, and checkout. We accept cash on delivery and the Delivery charge is Rs. 50
            </p>
        </div>
       </div>
    </div>
  )
}

export default About;

