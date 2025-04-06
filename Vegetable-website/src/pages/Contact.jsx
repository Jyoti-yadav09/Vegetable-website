import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Get in touch</h1>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-blue-200 p-3 w-full rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-blue-200 p-3 w-full rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border border-blue-200 p-3 w-full rounded"
            />
            <textarea
              placeholder="Description"
              rows="5"
              className="border border-blue-200 p-3 w-full rounded resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
              Get A Query
            </button>
          </form>
        </div>
      </section>

      {/* Info Footer */}
      <footer className="border-t border-black py-6">
        <div className="flex flex-col md:flex-row justify-around text-center text-sky-500 font-semibold gap-6">
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/ios/50/000000/phone--v1.png"
              className="w-6 h-6 mb-1"
              alt="Phone"
            />
            <p>9841 624 611</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/ios/50/000000/email--v1.png"
              className="w-6 h-6 mb-1"
              alt="Email"
            />
            <p>support@onlinetarkari.com</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/ios/50/000000/shop.png"
              className="w-6 h-6 mb-1"
              alt="Location"
            />
            <p>Kalimati Kathmandu</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;
