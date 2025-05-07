import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <div className=" px-4 sm:px-6  md:px-8  py-20 lg:py-28   lg:px-24 xl:px-32">
      <p className="text-[30px] uppercase text-center mb-12 text-gray-800">About Us</p>
      
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-96 lg:h-[697px]">
            <Image
              src="/aboutt.png" // Replace with your actual image path
              alt="About Us"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1024px) 100vw, 686px"
            />
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-[18px] text-gray-600 mb-6">
            Drip was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          
          <p className="text-[18px] text-gray-600 mb-6">
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          
          <h2 className="text-[18px] font-medium text-gray-800 mb-4">Our Mission</h2>
          
          <p className="text-[18px] text-gray-600">
            Our mission at Drip is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;