import React from 'react'

const Home = () => {
  return (
    <section className="w-full border border-gray-300 mt-16"> {/* Added mt-16 for navbar spacing */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Text Column */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-8 md:py-12 flex items-center justify-center text-center lg:text-left">
          <div className="flex flex-col lg:items-start lg:gap-6">
            <p className="text-base sm:text-[18px] md:text-xl uppercase text-gray-500">
              Our Bestsellers
            </p>
            <h3 className="text-4xl sm:text-[50px] md:text-[60px] font-prata text-gray-900 whitespace-nowrap">
              Latest Arrivals
            </h3>
            <p className="text-base sm:text-[18px] font-medium uppercase text-gray-600 mt-4 lg:mt-0">
              Shop Now
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full bg-pink-200 lg:w-1/2 h-64 sm:h-72 md:h-80 lg:h-auto">
          <img
            src="/file.png"
            alt="Fashion Model"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Home