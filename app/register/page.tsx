'use client'

// pages/signup.js
import { useState } from 'react';
import Head from 'next/head';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
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
    <div className="min-h-screen flex flex-col items-center justify-center py-12">
      <Head>
        <title>Sign Up</title>
      </Head>
      
      <div className="w-full max-w-md px-4">
        <p className="text-3xl  text-center mb-8">Sign Up</p>
        
        <form onSubmit={handleSubmit} className="bg-white  px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
           
            <input
              className=" w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
          
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder=" Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-6">
          
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex items-center justify-center">
            <button
              className="bg-black hover:bg-gray-800 text-white  py-2 px-4  focus:outline-none focus:shadow-outline"
              type="submit"
             
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}