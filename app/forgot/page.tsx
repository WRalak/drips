'use client'

// pages/forgot-password.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Head>
        <title>Forgot Password</title>
      </Head>
      
      <div className="w-full max-w-md px-4">
        <p className="text-3xl  text-center mb-2">Forgot Password</p>
        <p className="text-gray-600 text-center mb-8">
          {isSubmitted 
            ? "If an account exists with this email, you'll receive a password reset link."
            : "Enter your email to receive a password reset link"}
        </p>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="bg-white  px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="flex flex-col items-center justify-between space-y-4">
              <button
                className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Reset Password
              </button>
              
              <div className="text-center">
                <Link href="/login" className="text-sm font-bold ">
                  Back to Login
                </Link>
              </div>
            </div>
          </form>
        ) : (
          <div className="bg-white shadow-md rounded px-8 py-6 text-center">
            <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">Password reset email sent</h3>
            <p className="mt-1 text-sm text-gray-500 mb-4">
              Please check your inbox for instructions on how to reset your password.
            </p>
            <Link 
              href="/login" 
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Return to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}