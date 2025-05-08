'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  slug: string;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const updateQuantity = (id: number, amount: number) => {
    const updated = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeItem = (id: number) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen px-4 md:px-8 py-16 lg:px-24 xl:px-32">
      <p className="text-3xl font-bold mb-8 text-center">Your Cart</p>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-900">
          <Image
            src="/error.svg"
            alt="Empty Cart"
            width={200}
            height={200}
            className="mx-auto mb-6"
          />
          <p className="text-xl mb-4">No items in your cart</p>
          <Link href="/product" className="text-blue-800 underline text-lg">
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-4 border p-4 rounded-lg shadow-sm">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button onClick={() => updateQuantity(item.id, -1)} className="px-2">-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="px-2">+</button>
                </div>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-8 p-4 border-t text-right">
          <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
          <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
