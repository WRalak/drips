import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { RiExchangeFundsLine } from 'react-icons/ri'
import { TbTruckReturn } from 'react-icons/tb'

const Policy = () => {
  return (
    <section className="py-12 "> {/* Added subtle background */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Better container padding */}
      <div className="flex flex-col items-center sm:grid sm:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
        {/* Item 1: Exchange Policy */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="mb-4 p-3 "> {/* Added icon background */}
            <RiExchangeFundsLine size={40} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2"> {/* Improved heading */}
            Easy Exchange Policy
          </h3>
          <p className="text-gray-600 text-sm">
            Hassle-free exchanges within 14 days
          </p>
        </div>
        
        {/* Item 2: Return Policy */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="mb-4 p-3 ">
            <TbTruckReturn size={40} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            7-Day Return Policy
          </h3>
          <p className="text-gray-600 text-sm">
            Free returns within 7 days of delivery
          </p>
        </div>
        
        {/* Item 3: Customer Support */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="mb-4 p-3 ">
            <BiSupport size={40} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            24/7 Customer Support
          </h3>
          <p className="text-gray-600 text-sm">
            Dedicated support team ready to help
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Policy