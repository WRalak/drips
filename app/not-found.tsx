// For App Router (`app/not-found.tsx`)
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-6 text-center">
      <h1 className="text-6xl font-bold tracking-wide mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for isn't in our collection.</p>
      <Link href="/" className="px-6 py-3 bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300">
        Return to Homepage
      </Link>
    </div>
  );
}
