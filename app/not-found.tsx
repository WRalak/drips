'use client'


import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="py-20 flex flex-col items-center justify-center bg-white text-gray-800 px-6 text-center">
      <Image
        src="/error.svg" // Make sure this image exists in your `public/` folder
        alt="404 Not Found"
        width={200}
        height={200}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-lg mb-6">Oops! The page you're looking for isn't in our collection.</p>
      <div className="flex gap-4">
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-white text-red-600 border cursor-pointer border-red-600 "
        >
          Retry
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg- text-black border border-black "
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

