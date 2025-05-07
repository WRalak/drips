import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
    <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
      <div className="md:max-w-96">
      <Link href="/" className="text-2xl font-bold text-gray-900">
          DRIPS <span className="text-pink-700">•</span>
        </Link>
        <p className="mt-6 text-sm">
  Discover timeless style with our curated collection of modern fashion essentials. 
  From everyday basics to standout statement pieces, we blend comfort, quality, 
  and design to help you express your unique look. Fashion that fits your lifestyle—always.
</p>

      </div>
      <div className="flex-1 flex items-start md:justify-end gap-20">
        <div>
          <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
          <ul className="text-sm space-y-2">
         
            <li><a href="/home">Home</a></li>
            <li><button type="button" className="text-gray-500 ">About us</button></li>
            <li><button type="button" className="text-gray-500 ">Contact us</button></li>
            <li><button type="button" className="text-gray-500 ">Privacy policy</button></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
          <div className="text-sm space-y-2">
            <p>+254718600199</p>
            <p>wallaceralak@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    <p className="pt-4 text-center text-xs md:text-sm pb-5">
    &copy; {new Date().getFullYear()} DRIP. All Rights Reserved.
    </p>
  </footer>
  )
}

export default Footer