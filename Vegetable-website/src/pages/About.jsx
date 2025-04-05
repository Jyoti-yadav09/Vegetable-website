import React from 'react';

const About = () => {
  return (
    <div className='px-6  max-w-7xl mx-auto'>
        {/*About Section */}
      <div className='text-center'>
         <h2 className=''>About</h2>
         <p>
         We are Online Tarkari Pasal, delivering fresh vegetables, fruits, and groceries. 
          You can purchase our products in just a few minutes. Simply browse a product, 
          add it to your cart, fill in your address, and place your order. We will deliver it within 1 hours.
         </p>
         <p> 
         We aim to revolutionize the traditional shopping experience. You no longer need to waste time 
          visiting local markets, bargaining with shopkeepers, or carrying heavy bags. With us, you can 
          simply select your products and buy them online; we will deliver them to your doorstep within a few hours.
         </p>
          <p>
          We strive to shorten the time between the farm and your table. We deliver local food that is fresher, 
          tastier, and of better quality. Additionally, we aim to eliminate middleman costs, which often increase 
          vegetable prices. As direct customers buying from us as producers, you enjoy fair, mediator-free pricing.
          </p>

      </div>

       {/*Information Section */}
       <div>
        <div>
            <h3>Why Choose Us</h3>
            <p>
            We provide fresh, high-quality fruits, vegetables, and local products at affordable prices. Customer satisfaction is our priority,
             and we ensure fast
             delivery within 1 hours in Biratnagar. Enjoy convenience, reliability, and the best quality with every order!
            </p>
        </div>
        <div>
            <h3>How to Order & Payment</h3>
            <p>
            Placing an order is easy! Browse our products, add to cart, and checkout. We accept cash on delivery and the Delivery charge: Rs. 50.
            </p>
        </div>
       </div>
    </div>
  )
}

export default About;

