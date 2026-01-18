'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-green-700">
            PIYUM PRODUCT
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-green-700 transition">Home</Link>
            <Link href="/products" className="hover:text-green-700 transition">Products</Link>
            <Link href="/#services" className="hover:text-green-700 transition">Services</Link>
            <Link href="/#contact" className="hover:text-green-700 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-green-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4 mt-4">
              <Link 
                href="/" 
                className="hover:text-green-700 transition px-2 py-1 rounded-md hover:bg-green-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="hover:text-green-700 transition px-2 py-1 rounded-md hover:bg-green-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/#services" 
                className="hover:text-green-700 transition px-2 py-1 rounded-md hover:bg-green-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/#contact" 
                className="hover:text-green-700 transition px-2 py-1 rounded-md hover:bg-green-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
