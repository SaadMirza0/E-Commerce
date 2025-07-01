"use client"
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-lg py-2" : "bg-gradient-to-r from-indigo-900 to-purple-800 py-1"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with scale animation */}
          <div 
            className="flex-shrink-0 cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => router.push('/')}
          >
            <Image
              className="h-10 w-auto md:h-12"
              src={assets.logo}
              alt="logo"
              width={120}
              height={48}
            />
          </div>

          {/* Desktop Navigation with fade-in effect */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`relative font-medium transition-all duration-300 ${scrolled ? "text-gray-800 hover:text-indigo-600" : "text-white hover:text-indigo-200"}`}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/all-products" 
              className={`relative font-medium transition-all duration-300 ${scrolled ? "text-gray-800 hover:text-indigo-600" : "text-white hover:text-indigo-200"}`}
            >
              Shop
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className={`relative font-medium transition-all duration-300 ${scrolled ? "text-gray-800 hover:text-indigo-600" : "text-white hover:text-indigo-200"}`}
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/contact" 
              className={`relative font-medium transition-all duration-300 ${scrolled ? "text-gray-800 hover:text-indigo-600" : "text-white hover:text-indigo-200"}`}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right Side Icons with bounce animation */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="p-1 rounded-full hover:bg-white/10 transition-all duration-300 hover:animate-pulse">
              <Image 
                src={assets.search_icon} 
                alt="Search" 
                width={20} 
                height={20} 
                className={`w-5 h-5 ${scrolled ? "text-gray-800" : "text-white"}`}
              />
            </button>
            
            <button className="p-1 rounded-full hover:bg-white/10 transition-all duration-300 hover:animate-bounce">
              <Image 
                src={assets.user_icon} 
                alt="Account" 
                width={20} 
                height={20} 
                className={`w-5 h-5 ${scrolled ? "text-gray-800" : "text-white"}`}
              />
            </button>

            {/* Cart with counter animation */}
            <button className="relative p-1 rounded-full hover:bg-white/10 transition-all duration-300">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-6 w-6 ${scrolled ? "text-gray-800" : "text-white"}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform hover:scale-110 transition-transform">
                3
              </span>
            </button>

            {isSeller && (
              <button 
                onClick={() => router.push('/seller')} 
                className={`hidden md:block ml-4 px-4 py-2 rounded-md font-medium transition-all duration-300 ${scrolled ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-white text-indigo-800 hover:bg-indigo-100"}`}
              >
                Seller Dashboard
              </button>
            )}
          </div>

          {/* Mobile menu button with animated hamburger */}
          <div className="md:hidden flex items-center">
            {isSeller && (
              <button 
                onClick={() => router.push('/seller')} 
                className={`mr-3 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${scrolled ? "bg-indigo-600 text-white" : "bg-white text-indigo-800"}`}
              >
                Dashboard
              </button>
            )}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <div className={`w-6 flex flex-col items-end space-y-1.5 transition-all duration-300 ${mobileMenuOpen ? "transform rotate-180" : ""}`}>
                <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
                <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "w-5"}`}></span>
                <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-4"}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with slide-down animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? "max-h-96" : "max-h-0"}`}>
          <div className="px-2 pt-2 pb-4 space-y-2 bg-white/90 backdrop-blur-sm rounded-lg mt-2">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-indigo-50 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/all-products" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-indigo-50 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-indigo-50 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-indigo-50 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;