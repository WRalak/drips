
import Image from 'next/image';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <div className="px-4 sm:px-6  md:px-8  py-20 lg:py-28   lg:px-24 xl:px-32">
      <p className="text-[30px] uppercase font-medium text-center mb-12 text-gray-400">Contact Us</p>
      
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-96 lg:h-[598px]">
            <Image
              src="/conts.png" // Replace with your actual image path
              alt="Contact Us"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1024px) 100vw, 598px"
            />
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-[18px] uppercase font-semibold text-gray-800">Our Store</p>
          
          <div className="space-y-4 text-[18px] text-gray-600">
            <p>Be Humble,Sit Down, Compton, USA</p>
            <p>Tel: (254) 718600199</p>
            <p>Email: wallaceralak@gmail.com</p>
          </div>
          
          <div className="pt-8 mt-8 border-t border-gray-200">
            <p className="text-[18px] uppercase font-medium text-gray-800 mb-4">Careers at Drip</p>
            <p className="text-[18px] text-gray-600 mb-6">
              Learn more about our teams and job openings.
            </p>
            <Link 
              href="/careers" 
              className="inline-block border border-black bg-white text-black px-8 py-4"
            >
              Explore Jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;