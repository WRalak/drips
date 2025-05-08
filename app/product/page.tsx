'use client'

import { useState, useEffect } from 'react';
import { FiFilter } from 'react-icons/fi';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  category: string;
  gender: string;
  price: number;
  image: string;
  slug: string;
};

type FilterOptions = {
  gender: string[];
  category: string[];
};

export default function ProductFilterPage() {
  const [filters, setFilters] = useState<FilterOptions>({
    gender: [],
    category: [],
  });
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  // Sample product data
  const products: Product[] = [
  { id: 1, name: 'Women Round Neck Cotton Top', category: 'Topwear', gender: 'Women', price: 29.99, image: '/10.png', slug: 'women-cotton-top' },
  { id: 2, name: 'Men Slim Fit Jeans', category: 'Bottomwear', gender: 'Men', price: 49.99, image: '/11.png', slug: 'men-slim-jeans' },
  { id: 3, name: 'Kids Winter Jacket', category: 'Winterwear', gender: 'Kids', price: 59.99, image: '/12.png', slug: 'kids-winter-jacket' },
  { id: 4, name: 'Women Wool Sweater', category: 'Winterwear', gender: 'Women', price: 39.99, image: '/13.png', slug: 'women-wool-sweater' },
  { id: 5, name: 'Men Casual T-Shirt', category: 'Topwear', gender: 'Men', price: 19.99, image: '/14.png', slug: 'men-casual-tshirt' },
  { id: 6, name: 'Women Denim Skirt', category: 'Bottomwear', gender: 'Women', price: 34.99, image: '/15.png', slug: 'women-denim-skirt' },
  { id: 7, name: 'Kids Cotton Top', category: 'Topwear', gender: 'Kids', price: 24.99, image: '/16.png', slug: 'kids-cotton-top' },
  { id: 8, name: 'Men Winter Coat', category: 'Winterwear', gender: 'Men', price: 79.99, image: '/17.png', slug: 'men-winter-coat' },
  { id: 9, name: 'Women Round Neck Cotton Top', category: 'Topwear', gender: 'Women', price: 29.99, image: '/0.png', slug: 'women-cotton-top' },
  { id: 10, name: 'Men Slim Fit Jeans', category: 'Bottomwear', gender: 'Men', price: 49.99, image: '/18.png', slug: 'men-slim-jeans' },
  { id: 11, name: 'Kids Winter Jacket', category: 'Winterwear', gender: 'Kids', price: 59.99, image: '/19.png', slug: 'kids-winter-jacket' },
  { id: 12, name: 'Women Wool Sweater', category: 'Winterwear', gender: 'Women', price: 39.99, image: '/20.png', slug: 'women-wool-sweater' },
  { id: 13, name: 'Men Casual T-Shirt', category: 'Topwear', gender: 'Men', price: 19.99, image: '/21.png', slug: 'men-casual-tshirt' },
  { id: 14, name: 'Women Denim Skirt', category: 'Bottomwear', gender: 'Women', price: 34.99, image: '/22.png', slug: 'women-denim-skirt' },
  { id: 15, name: 'Kids Cotton Top', category: 'Topwear', gender: 'Kids', price: 24.99, image: '/23.png', slug: 'kids-cotton-top' },
  { id: 16, name: 'Men Winter Coat', category: 'Winterwear', gender: 'Men', price: 79.99, image: '/24.png', slug: 'men-winter-coat' },
  { id: 17, name: 'Women Round Neck Cotton Top', category: 'Topwear', gender: 'Women', price: 29.99, image: '/0.png', slug: 'women-cotton-top' },
  { id: 18, name: 'Men Slim Fit Jeans', category: 'Bottomwear', gender: 'Men', price: 49.99, image: '/25.png', slug: 'men-slim-jeans' },
  { id: 19, name: 'Kids Winter Jacket', category: 'Winterwear', gender: 'Kids', price: 59.99, image: '/26.png', slug: 'kids-winter-jacket' },
  { id: 20, name: 'Women Wool Sweater', category: 'Winterwear', gender: 'Women', price: 39.99, image: '/27.png', slug: 'women-wool-sweater' },
  { id: 21, name: 'Men Casual T-Shirt', category: 'Topwear', gender: 'Men', price: 19.99, image: '/28.png', slug: 'men-casual-tshirt' },
  { id: 22, name: 'Women Denim Skirt', category: 'Bottomwear', gender: 'Women', price: 34.99, image: '/0.png', slug: 'women-denim-skirt' },
  { id: 23, name: 'Kids Cotton Top', category: 'Topwear', gender: 'Kids', price: 24.99, image: '/29.png', slug: 'kids-cotton-top' },
  { id: 24, name: 'Men Winter Coat', category: 'Winterwear', gender: 'Men', price: 79.99, image: '/30.png', slug: 'men-winter-coat' },
  { id: 25, name: 'Men Casual T-Shirt', category: 'Topwear', gender: 'Men', price: 19.99, image: '/31.png', slug: 'men-casual-tshirt' },
  { id: 26, name: 'Women Denim Skirt', category: 'Bottomwear', gender: 'Women', price: 34.99, image: '/32.png', slug: 'women-denim-skirt' },
  { id: 27, name: 'Kids Cotton Top', category: 'Topwear', gender: 'Kids', price: 24.99, image: '/33.png', slug: 'kids-cotton-top' },
{ id: 28, name: 'Men Winter Coat', category: 'Winterwear', gender: 'Men', price: 79.99, image: '/34.png', slug: 'men-winter-coat' }]

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
    <div className=" w-full px-4 md:px-8  py-20 lg:py-28   lg:px-24 xl:px-32">
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
            <div className="border border-gray-400 rounded-lg p-4 mb-6 w-full lg:w-[315px] h-[169px]">
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
            <div className="border border-gray-400 rounded-lg p-4 w-full lg:w-[315px] h-[169px]">
              <p className="font-medium mb-3">Category</p>
              <div className="space-y-2">
                {['Topwear', 'Bottomwear', 'Winterwear'].map(category => (
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
          </div>
        </div>

        {/* Products Section - Right */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <p className="text-[35px] uppercase font-medium text-gray-800">All Collections</p>
            
            {/* Sort Section */}
            <div className="border border-gray-300 rounded-lg p-3 w-full md:w-auto lg:w-[315px] h-[50px] flex items-center justify-between">
              <p className="text-gray-600 text-sm">Sort by: Price: {sortOrder === 'asc' ? 'Low To High' : 'High To Low'}</p>
              <button onClick={toggleSortOrder} className="text-gray-500 hover:text-gray-800">
                {sortOrder === 'asc' ? <FiArrowUp /> : <FiArrowDown />}
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="group">
                <Link href={`/products/${product.slug}`} className="block">
                  <div className="aspect-square overflow-hidden  bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-600">{product.name}</p>
                    <p className="mt-1 text-sm font-bold text-gray-700">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products match your filters.</p>
              <button
                onClick={() => setFilters({ gender: [], category: [] })}
                className="mt-4 text-indigo-600 hover:text-indigo-800"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}