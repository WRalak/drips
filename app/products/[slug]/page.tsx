'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

// This should match exactly with your ProductFilterPage data
type Product = {
  id: number;
  name: string;
  category: string;
  gender: string;
  price: number;
  image: string;
  slug: string;
  description?: string; // Added optional description property
};

const allProducts: Product[] = [
  { id: 1, name: 'Women Round Neck Cotton Top', category: 'Topwear', gender: 'Women', price: 29.99, image: '/10.png', slug: 'women-cotton-top' },
  { id: 2, name: 'Men Slim Fit Jeans', category: 'Bottomwear', gender: 'Men', price: 49.99, image: '/11.png', slug: 'men-slim-jeans' },
  { id: 3, name: 'Kids Winter Jacket', category: 'Winterwear', gender: 'Kids', price: 59.99, image: '/12.png', slug: 'kids-winter-jacket' },
  { id: 4, name: 'Women Wool Sweater', category: 'Winterwear', gender: 'Women', price: 39.99, image: '/13.png', slug: 'women-wool-sweater' },
  { id: 5, name: 'Men Casual T-Shirt', category: 'Topwear', gender: 'Men', price: 19.99, image: '/14.png', slug: 'men-casual-tshirt' },
  { id: 6, name: 'Women Denim Skirt', category: 'Bottomwear', gender: 'Women', price: 34.99, image: '/15.png', slug: 'women-denim-skirt' },
  { id: 7, name: 'Kids Cotton Top', category: 'Topwear', gender: 'Kids', price: 24.99, image: '/16.png', slug: 'kids-cotton-top' },
  { id: 8, name: 'Men Winter Coat', category: 'Winterwear', gender: 'Men', price: 79.99, image: '/17.png', slug: 'men-winter-coat' },
  { id: 9, name: 'Women Round Neck Cotton Top', category: 'Topwear', gender: 'Women', price: 29.99, image: '/0.png', slug: 'women-cotton-top-2' },
  { id: 10, name: 'Men Slim Fit Jeans', category: 'Bottomwear', gender: 'Men', price: 49.99, image: '/18.png', slug: 'men-slim-jeans-2' },
  { id: 11, name: 'Kids Winter Jacket', category: 'Winterwear', gender: 'Kids', price: 59.99, image: '/19.png', slug: 'kids-winter-jacket-2' },
  { id: 12, name: 'Women Wool Sweater', category: 'Winterwear', gender: 'Women', price: 39.99, image: '/20.png', slug: 'women-wool-sweater-2' },
  { id: 13, name: 'Men Casual T-Shirt', category: 'Topwear', gender: 'Men', price: 19.99, image: '/21.png', slug: 'men-casual-tshirt-2' },
  { id: 14, name: 'Women Denim Skirt', category: 'Bottomwear', gender: 'Women', price: 34.99, image: '/22.png', slug: 'women-denim-skirt-2' },
  { id: 15, name: 'Kids Cotton Top', category: 'Topwear', gender: 'Kids', price: 24.99, image: '/23.png', slug: 'kids-cotton-top-2' },
  { id: 16, name: 'Men Winter Coat', category: 'Winterwear', gender: 'Men', price: 79.99, image: '/24.png', slug: 'men-winter-coat-2' },
  { id: 17, name: 'Women Round Neck Cotton Top', category: 'Topwear', gender: 'Women', price: 29.99, image: '/0.png', slug: 'women-cotton-top-3' },
  { id: 18, name: 'Men Slim Fit Jeans', category: 'Bottomwear', gender: 'Men', price: 49.99, image: '/25.png', slug: 'men-slim-jeans-3' },
  { id: 19, name: 'Kids Winter Jacket', category: 'Winterwear', gender: 'Kids', price: 59.99, image: '/26.png', slug: 'kids-winter-jacket-3' },
  { id: 20, name: 'Women Wool Sweater', category: 'Winterwear', gender: 'Women', price: 39.99, image: '/27.png', slug: 'women-wool-sweater-3' },
  { id: 21, name: 'Men Casual T-Shirt', category: 'Topwear', gender: 'Men', price: 19.99, image: '/28.png', slug: 'men-casual-tshirt-3' },
  { id: 22, name: 'Women Denim Skirt', category: 'Bottomwear', gender: 'Women', price: 34.99, image: '/0.png', slug: 'women-denim-skirt-3' },
  { id: 23, name: 'Kids Cotton Top', category: 'Topwear', gender: 'Kids', price: 24.99, image: '/29.png', slug: 'kids-cotton-top-3' },
  { id: 24, name: 'Men Winter Coat', category: 'Winterwear', gender: 'Men', price: 79.99, image: '/30.png', slug: 'men-winter-coat-3' },
  { id: 25, name: 'Men Casual T-Shirt', category: 'Topwear', gender: 'Men', price: 19.99, image: '/31.png', slug: 'men-casual-tshirt-4' },
  { id: 26, name: 'Women Denim Skirt', category: 'Bottomwear', gender: 'Women', price: 34.99, image: '/32.png', slug: 'women-denim-skirt-4' },
  { id: 27, name: 'Kids Cotton Top', category: 'Topwear', gender: 'Kids', price: 24.99, image: '/33.png', slug: 'kids-cotton-top-4' },
  { id: 28, name: 'Men Winter Coat', category: 'Winterwear', gender: 'Men', price: 79.99, image: '/34.png', slug: 'men-winter-coat-4' },
  { id: 29, name: "Urban Jacket", description: "Women Round Neck Cotton Top", price: 89.99, image: "/0.png", slug: "urban-jacket", category: 'Outerwear', gender: 'Women' },
  { id: 30, name: "Classic Tee", description: "Men Round Neck Pure Cotton T-shirt", price: 29.99, image: "/1.png", slug: "classic-tee", category: 'Topwear', gender: 'Men' },
  { id: 31, name: "Slim Jeans", description: "Men Round Neck Pure Cotton T-shirt", price: 59.99, image: "/2.png", slug: "slim-jeans", category: 'Bottomwear', gender: 'Men' },
  { id: 32, name: "Canvas Sneakers", description: "Men Round Neck Pure Cotton T-shirt", price: 49.99, image: "/3.png", slug: "canvas-sneakers", category: 'Footwear', gender: 'Men' },
  { id: 33, name: "Wool Beanie", description: "Women Round Neck Cotton Top", price: 24.99, image: "/4.png", slug: "wool-beanie", category: 'Accessories', gender: 'Women' },
  { id: 34, name: "Silk Scarf", description: "Men Printed Plain Cotton Shirt", price: 34.99, image: "/5.png", slug: "silk-scarf", category: 'Accessories', gender: 'Men' },
  { id: 35, name: "Leather Belt", description: "Men Round Neck Pure Cotton T-shirt", price: 39.99, image: "/6.png", slug: "leather-belt", category: 'Accessories', gender: 'Men' },
  { id: 36, name: "Aviator Sunglasses", description: "Men Round Neck Pure Cotton T-shirt", price: 79.99, image: "/7.png", slug: "aviator-sunglasses", category: 'Accessories', gender: 'Men' },
  { id: 37, name: "Cashmere Sweater", description: "Oversized knit in heather grey", price: 129.99, image: "/8.png", slug: "cashmere-sweater", category: 'Winterwear', gender: 'Women' },
  { id: 38, name: "Canvas Tote", description: "Women Round Neck Cotton Top", price: 19.99, image: "/9.png", slug: "canvas-tote", category: 'Accessories', gender: 'Women' }
];

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      if (params?.slug) {
        const foundProduct = allProducts.find(p => p.slug === params.slug);
        setProduct(foundProduct || null);
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link 
          href="/products" 
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <FiArrowLeft /> Back to shop
        </Link>
      </div>
    );
  }

  const availableSizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Navigation */}
        <nav className="px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <div className="flex items-center">
                <Link 
                  href="/products" 
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Products
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-500">
                  {product.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="mx-auto mt-6 max-w-2xl px-4 sm:px-6 lg:max-w-7xl  md:px-16 lg:px-24 xl:px-32">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <div className="flex flex-col-reverse">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <div className="mt-3">
                <h3 className="sr-only">Category</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{product.gender}'s</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
              </div>

              {/* Sizes */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium ${
                        selectedSize === size
                          ? 'bg-black text-white border-black'
                          : 'border-gray-300 text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="mt-2 flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 border border-gray-300 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="h-10 w-12 border-t border-b border-gray-300 flex items-center justify-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 border border-gray-300 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                type="button"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Add to cart
              </button>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {product.description || `High-quality ${product.category.toLowerCase()} designed for ${product.gender.toLowerCase()}. Made with premium materials for comfort and durability. Perfect for everyday wear or special occasions.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}