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
  description?: string;
  badge?: string; // Added for best seller badges
};

const allProducts: Product[] = [
  { id: 1, name: 'Women Classic Round Neck Cotton Top', category: 'Topwear', gender: 'Women', price: 29.99, image: '/10.png', slug: 'women-classic-cotton-top' },
  { id: 2, name: 'Men Blue Slim Fit Jeans', category: 'Bottomwear', gender: 'Men', price: 49.99, image: '/11.png', slug: 'men-blue-slim-jeans', badge: 'BESTSELLER' },
  { id: 3, name: 'Kids Hooded Winter Jacket', category: 'Winterwear', gender: 'Kids', price: 59.99, image: '/12.png', slug: 'kids-hooded-winter-jacket' },
  { id: 4, name: 'Women Beige Wool Sweater', category: 'Winterwear', gender: 'Women', price: 39.99, image: '/13.png', slug: 'women-beige-wool-sweater', badge: 'TRENDING' },
  { id: 5, name: 'Men Grey Casual T-Shirt', category: 'Topwear', gender: 'Men', price: 19.99, image: '/14.png', slug: 'men-grey-casual-tshirt' },
  { id: 6, name: 'Women Light Wash Denim Skirt', category: 'Bottomwear', gender: 'Women', price: 34.99, image: '/15.png', slug: 'women-light-denim-skirt' },
  { id: 7, name: 'Kids Striped Cotton Top', category: 'Topwear', gender: 'Kids', price: 24.99, image: '/16.png', slug: 'kids-striped-cotton-top' },
  { id: 8, name: 'Men Black Winter Coat', category: 'Winterwear', gender: 'Men', price: 79.99, image: '/17.png', slug: 'men-black-winter-coat', badge: 'BESTSELLER' },
  { id: 9, name: 'Women Printed Cotton Top', category: 'Topwear', gender: 'Women', price: 29.99, image: '/0.png', slug: 'women-printed-cotton-top' },
  { id: 10, name: 'Men Black Slim Fit Jeans', category: 'Bottomwear', gender: 'Men', price: 49.99, image: '/18.png', slug: 'men-black-slim-jeans' },
  { id: 11, name: 'Kids Quilted Winter Jacket', category: 'Winterwear', gender: 'Kids', price: 59.99, image: '/19.png', slug: 'kids-quilted-winter-jacket' },
  { id: 12, name: 'Women Turtleneck Wool Sweater', category: 'Winterwear', gender: 'Women', price: 39.99, image: '/20.png', slug: 'women-turtleneck-wool-sweater', badge: 'TRENDING' },
  { id: 13, name: 'Men White Casual T-Shirt', category: 'Topwear', gender: 'Men', price: 19.99, image: '/21.png', slug: 'men-white-casual-tshirt' },
  { id: 14, name: 'Women Dark Wash Denim Skirt', category: 'Bottomwear', gender: 'Women', price: 34.99, image: '/22.png', slug: 'women-dark-denim-skirt' },
  { id: 15, name: 'Kids Graphic Cotton Top', category: 'Topwear', gender: 'Kids', price: 24.99, image: '/23.png', slug: 'kids-graphic-cotton-top' },
  { id: 16, name: 'Men Navy Winter Coat', category: 'Winterwear', gender: 'Men', price: 79.99, image: '/24.png', slug: 'men-navy-winter-coat', badge: 'BESTSELLER' },
  { id: 17, name: 'Women V-Neck Cotton Top', category: 'Topwear', gender: 'Women', price: 29.99, image: '/0.png', slug: 'women-v-neck-cotton-top' },
  { id: 18, name: 'Men Distressed Slim Fit Jeans', category: 'Bottomwear', gender: 'Men', price: 49.99, image: '/25.png', slug: 'men-distressed-slim-jeans' },
  { id: 19, name: 'Kids Puffer Winter Jacket', category: 'Winterwear', gender: 'Kids', price: 59.99, image: '/26.png', slug: 'kids-puffer-winter-jacket' },
  { id: 20, name: 'Women Cable Knit Wool Sweater', category: 'Winterwear', gender: 'Women', price: 39.99, image: '/27.png', slug: 'women-cable-knit-wool-sweater', badge: 'LIMITED' },
  { id: 21, name: 'Men Black Polo T-Shirt', category: 'Topwear', gender: 'Men', price: 19.99, image: '/28.png', slug: 'men-black-polo-tshirt' },
  { id: 22, name: 'Women Button-Front Denim Skirt', category: 'Bottomwear', gender: 'Women', price: 34.99, image: '/0.png', slug: 'women-button-front-denim-skirt' },
  { id: 23, name: 'Kids Long Sleeve Cotton Top', category: 'Topwear', gender: 'Kids', price: 24.99, image: '/29.png', slug: 'kids-long-sleeve-cotton-top' },
  { id: 24, name: 'Men Wool Blend Winter Coat', category: 'Winterwear', gender: 'Men', price: 79.99, image: '/30.png', slug: 'men-wool-blend-winter-coat' },
  { id: 25, name: 'Men Henley T-Shirt', category: 'Topwear', gender: 'Men', price: 19.99, image: '/31.png', slug: 'men-henley-tshirt' },
  { id: 26, name: 'Women A-Line Denim Skirt', category: 'Bottomwear', gender: 'Women', price: 34.99, image: '/32.png', slug: 'women-a-line-denim-skirt' },
  { id: 27, name: 'Kids Polo Cotton Top', category: 'Topwear', gender: 'Kids', price: 24.99, image: '/33.png', slug: 'kids-polo-cotton-top' },
  { id: 28, name: 'Men Hooded Winter Coat', category: 'Winterwear', gender: 'Men', price: 79.99, image: '/34.png', slug: 'men-hooded-winter-coat' },
  { id: 29, name: "Urban Jacket", description: "Premium women's jacket with water-resistant outer shell and cozy inner lining. Features adjustable cuffs and multiple pockets.", price: 89.99, image: "/0.png", slug: "urban-jacket", category: 'Outerwear', gender: 'Women', badge: 'NEW' },
  { id: 30, name: "Classic Tee", description: "Men's essential round neck t-shirt made from 100% organic cotton. Breathable fabric with a comfortable fit for everyday wear.", price: 29.99, image: "/1.png", slug: "classic-tee", category: 'Topwear', gender: 'Men' },
  { id: 31, name: "Slim Jeans", description: "Men's premium denim jeans with the perfect slim fit. Features stretch fabric for comfort and movement throughout the day.", price: 59.99, image: "/2.png", slug: "slim-jeans", category: 'Bottomwear', gender: 'Men', badge: 'BESTSELLER' },
  { id: 32, name: "Canvas Sneakers", description: "Classic canvas sneakers with rubber sole. Versatile design perfect for casual outfits and everyday comfort.", price: 49.99, image: "/3.png", slug: "canvas-sneakers", category: 'Footwear', gender: 'Men' },
  { id: 33, name: "Wool Beanie", description: "Soft and warm beanie made from premium wool blend. Perfect for cold weather and adds a stylish touch to any winter outfit.", price: 24.99, image: "/4.png", slug: "wool-beanie", category: 'Accessories', gender: 'Women' },
  { id: 34, name: "Silk Scarf", description: "Elegant silk scarf with subtle pattern. Adds sophistication to any outfit and provides light warmth for cooler days.", price: 34.99, image: "/5.png", slug: "silk-scarf", category: 'Accessories', gender: 'Men' },
  { id: 35, name: "Leather Belt", description: "Genuine leather belt with classic metal buckle. Durable construction ensures long-lasting wear.", price: 39.99, image: "/6.png", slug: "leather-belt", category: 'Accessories', gender: 'Men' },
  { id: 36, name: "Aviator Sunglasses", description: "Classic aviator style with UV protection. Metal frame with comfortable nose pads for all-day wear.", price: 79.99, image: "/7.png", slug: "aviator-sunglasses", category: 'Accessories', gender: 'Men', badge: 'TRENDING' },
  { id: 37, name: "Cashmere Sweater", description: "Luxurious oversized cashmere sweater in heather grey. Incredibly soft with ribbed cuffs and hem for a perfect fit.", price: 129.99, image: "/8.png", slug: "cashmere-sweater", category: 'Winterwear', gender: 'Women', badge: 'BESTSELLER' },
  { id: 38, name: "Canvas Tote", description: "Spacious canvas tote with reinforced handles. Perfect for shopping, beach days, or as an everyday bag.", price: 19.99, image: "/9.png", slug: "canvas-tote", category: 'Accessories', gender: 'Women' }
];

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState(1);

  // Filter best sellers (products with BESTSELLER badge)
  const bestSellers = allProducts.filter(p => p.badge === 'BESTSELLER');

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
        <div className="mx-auto mt-6 max-w-2xl px-4 sm:px-6 lg:max-w-7xl md:px-16 lg:px-24 xl:px-32">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <div className="flex flex-col-reverse">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 relative">
                {/* Product badge */}
                {product.badge && (
                  <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded-md z-10
                    ${product.badge === "BESTSELLER" ? 'bg-red-600 text-white' : 
                      product.badge === "TRENDING" ? 'bg-blue-600 text-white' :
                      product.badge === "LIMITED" ? 'bg-yellow-500 text-black' :
                      'bg-green-600 text-white'}`}>
                    {product.badge}
                  </span>
                )}
                
                <Link href={`/products/${product.slug}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </Link>
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
          
          {/* Best Sellers Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-6">
              Best Sellers
            </h2>
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
              {bestSellers.slice(0, 5).map((product) => (
                <Link 
                  key={product.id} 
                  href={`/products/${product.slug}`}
                  className="group relative"
                >
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                    {/* Product badge */}
                    {product.badge && (
                      <span className="absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded-md z-10 bg-red-600 text-white">
                        {product.badge}
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}