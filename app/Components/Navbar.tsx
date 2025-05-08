'use client'

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  // Check if user is logged in (you'll need to implement proper auth)
  useEffect(() => {
    // This is a placeholder - replace with your actual auth check
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    // Implement your logout logic here
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    setShowUserDropdown(false);
    router.push('/login');
  };

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "COLLECTION", path: "/product" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-2"
      }`}
    >
      <nav className="z-30 mx-auto px-4 flex items-center justify-between md:px-16 lg:px-24 xl:px-32">
        {/* Logo - Always on left */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          DRIPS <span className="text-pink-700">•</span>
        </Link>

        {/* Desktop Navigation - Center aligned on lg screens */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-900"></span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Icons - Different layouts for mobile and desktop */}
        <div className="flex items-center space-x-4">
          {/* Search input (desktop) */}
          {showSearch && (
            <form onSubmit={handleSearch} className="hidden lg:flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="border border-gray-300 rounded-l px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                autoFocus
              />
              <button
                type="submit"
                className="bg-pink-600 text-white px-3 py-1 rounded-r hover:bg-pink-700"
              >
                <FiSearch size={18} />
              </button>
            </form>
          )}

          {/* Desktop Icons - Right aligned */}
          <div className="hidden lg:flex items-center space-x-4">
            {!showSearch && (
              <button 
                onClick={() => setShowSearch(true)}
                className="text-gray-700 hover:text-gray-900"
              >
                <FiSearch size={18} />
              </button>
            )}
            
            <div className="relative">
              {isLoggedIn ? (
                <>
                  <button 
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="text-gray-700 hover:text-gray-900 flex items-center"
                  >
                    <FiUser size={18} />
                  </button>
                  {showUserDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowUserDropdown(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        href="/Orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowUserDropdown(false)}
                      >
                        Orders
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link 
                  href="/login" 
                  className="text-gray-700 hover:text-gray-900"
                >
                  <FiUser size={18} />
                </Link>
              )}
            </div>
            
            <Link className="text-gray-700 hover:text-gray-900" href={"/cart"}>
              <FiShoppingCart size={18} />
            </Link>
          </div>

          {/* Mobile Icons - All three icons plus menu toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Search input (mobile) */}
            {showSearch && (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="border border-gray-300 rounded-l px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-pink-600 text-white px-3 py-1 rounded-r hover:bg-pink-700"
                >
                  <FiSearch size={18} />
                </button>
              </form>
            )}
            
            {!showSearch && (
              <button 
                onClick={() => setShowSearch(true)}
                className="text-gray-700 hover:text-gray-900"
              >
                <FiSearch size={18} />
              </button>
            )}
            
            {isLoggedIn ? (
              <div className="relative">
                <button 
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="text-gray-700 hover:text-gray-900"
                >
                  <FiUser size={18} />
                </button>
                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserDropdown(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserDropdown(false)}
                    >
                      Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                href="/login" 
                className="text-gray-700 hover:text-gray-900"
              >
                <FiUser size={18} />
              </Link>
            )}
            
            <Link className="text-gray-700 hover:text-gray-900" href={"/cart"}>
              <FiShoppingCart size={18} />
            </Link>
            
            <button
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-3 py-2 text-sm font-medium ${
                    pathname === link.path
                      ? "text-gray-900 border-b-2 border-pink-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* Add profile links if logged in */}
              {isLoggedIn && (
                <>
                  <Link
                    href="/profile"
                    className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/orders"
                    className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
                  >
                    Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 text-sm font-medium text-left text-gray-500 hover:text-gray-900"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}