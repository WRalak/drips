'use client'

import { useState, useEffect } from 'react';
import { FiFilter, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import Link from 'next/link';

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

export default function ProductFilterPage() {
  const [filters, setFilters] = useState<{
    gender: string[];
    category: string[];
  }>({
    gender: [],
    category: [],
  });
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  // Updated product data to match with ProductDetailPage
  const products: Product[] = [
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

  // Extracting all unique categories from products
  const allCategories = Array.from(new Set(products.map(product => product.category)));

  const toggleGenderFilter = (gender: string) => {
    setFilters(prev => ({
      ...prev,
      gender: prev.gender.includes(gender)
        ? prev.gender.filter(g => g !== gender)
        : [...prev.gender, gender],
    }));
  };

  const toggleCategoryFilter = (category: string) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter(c => c !== category)
        : [...prev.category, category],
    }));
  };

  const toggleSortOrder = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const filteredProducts = products
    .filter(product => {
      if (filters.gender.length === 0 && filters.category.length === 0) return true;
      const genderMatch = filters.gender.length === 0 || filters.gender.includes(product.gender);
      const categoryMatch = filters.category.length === 0 || filters.category.includes(product.category);
      return genderMatch && categoryMatch;
    })
    .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

  // Mobile filter toggle
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Add event listener for screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsFilterOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on mount
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full px-4 md:px-8 py-20 lg:py-28 lg:px-24 xl:px-32">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">All Collections</h1>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                Home
              </Link>
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
                  Collections
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 relative">
        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-4 flex justify-between items-center">
          <button 
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg"
            onClick={toggleFilter}
          >
            <FiFilter />
            <span>Filters</span>
          </button>
        </div>

        {/* Filters Sidebar - Left with fixed positioning on lg */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block lg:w-80 flex-shrink-0`}>
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-2 mb-4">
              <p className="text-sm font-semibold">Filters</p>
            </div>

            {/* Gender Filter Section */}
            <div className="border border-gray-400 rounded-lg p-4 mb-6 w-full lg:w-[315px]">
              <p className="font-medium mb-3">Gender</p>
              <div className="space-y-2">
                {['Men', 'Women', 'Kids'].map(gender => (
                  <label key={gender} className="flex text-sm items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.gender.includes(gender)}
                      onChange={() => toggleGenderFilter(gender)}
                      className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                    />
                    <span>{gender}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Category Filter Section */}
            <div className="border border-gray-400 rounded-lg p-4 w-full lg:w-[315px]">
              <p className="font-medium mb-3">Category</p>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {allCategories.map(category => (
                  <label key={category} className="flex text-sm items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.category.includes(category)}
                      onChange={() => toggleCategoryFilter(category)}
                      className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter (Added section) */}
            <div className="border border-gray-400 rounded-lg p-4 mt-6 w-full lg:w-[315px]">
              <p className="font-medium mb-3">Price Range</p>
              <div className="mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-600 block mb-1">Min</label>
                    <input 
                      type="number" 
                      placeholder="$0" 
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm" 
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 block mb-1">Max</label>
                    <input 
                      type="number" 
                      placeholder="$200" 
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm" 
                    />
                  </div>
                </div>
                <button className="mt-4 w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors text-sm">
                  Apply
                </button>
              </div>
            </div>

            {/* Clear Filters Button (Added) */}
            <button 
              onClick={() => setFilters({ gender: [], category: [] })}
              className="mt-6 text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear all filters
            </button>
          </div>
        </div>

        {/* Products Section - Right */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <p className="text-2xl font-medium text-gray-800">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} 
              {(filters.gender.length > 0 || filters.category.length > 0) && ' (Filtered)'}
            </p>
            
            {/* Sort Section */}
            <div className="border border-gray-300 rounded-lg p-3 w-full md:w-auto">
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-sm">Sort by: Price: {sortOrder === 'asc' ? 'Low To High' : 'High To Low'}</p>
                <button onClick={toggleSortOrder} className="text-gray-500 hover:text-gray-800">
                  {sortOrder === 'asc' ? <FiArrowUp /> : <FiArrowDown />}
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="group relative">
                <Link href={`/products/${product.slug}`} className="block">
                  <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg relative">
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
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-600">{product.name}</p>
                    <p className="mt-1 text-sm font-bold text-gray-700">${product.price.toFixed(2)}</p>
                    
                    {/* Quick add button - New feature */}
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        type="button"
                        className="w-full py-2 text-xs bg-pink-800 text-white rounded "
                      >
                        Quick Add
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900"></h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
              <div className="mt-6">
                <button
                  onClick={() => setFilters({ gender: [], category: [] })}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}

          {/* Featured Products Section (New) */}
          {filteredProducts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-6">
                Best Sellers
              </h2>
              <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                {products.filter(p => p.badge === 'BESTSELLER').slice(0, 4).map((product) => (
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
          )}
        </div>
      </div>
    </div>
  );
}