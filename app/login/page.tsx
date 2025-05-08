'use client'

// pages/login.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Login</title>
      </Head>
      
      <div className="w-full max-w-md px-4">
        <p className="text-3xl  text-center mb-8">Login</p>
        
        <form onSubmit={handleSubmit} className=" px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
           
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder=" Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="text-right">
              <Link href="/forgot" className="text-sm ">
                Forgot your password?
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-between space-y-4">
            <button
              className="bg-black  text-white  py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Sign in
            </button>
            
            <div className="text-center">
              <span className="text-sm text-gray-600">Don't have an account? </span>
              <Link href="/register" className="text-sm ">
                Create account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}