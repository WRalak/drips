import React from 'react'

const NewsLetter = () => {
  return (
    <div className=" py-10">
    <div className="md:grid md:grid-cols-2  bg-white mx-4 md:mx-auto rounded-xl">
      <img  
        src="/remark.jpg"
        alt="newsletter"
        className="hidden md:block w-full max-w-lg rounded-xl"
      />
      <div className="relative flex items-center justify-center">
       
        <div className="max-md:py-20 px-6 md:px-10 text-center">
          <h1 className="text-xl font-bold">
            Subscribe to our newsletter
          </h1>
          <p className="mt-4 text-gray-600">
            Be the first to get the latest news about trends, promotions, and much more!
          </p>
          <form className="mt-8 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full outline-none rounded-l-md border border-r-0 border-gray-300 p-4 text-gray-900"
            />
            <button
              type="submit"
              className="rounded-r-md bg-pink-900 px-7 py-2 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewsLetter