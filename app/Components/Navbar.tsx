
'use client'


import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "COLLECTION", path: "/collection" },
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
          {/* Desktop Icons - Right aligned */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <FiSearch size={18} />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <FiUser size={18} />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <FiShoppingCart size={18} />
            </button>
          </div>

          {/* Mobile Icons - All three icons plus menu toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <FiSearch size={18} />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <FiUser size={18} />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <FiShoppingCart size={18} />
            </button>
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
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}