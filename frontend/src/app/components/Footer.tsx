'use client';

import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container-custom py-12 px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">PIYUM PRODUCT</h3>
            <p className="text-green-200">
              Premium mushroom supplier providing fresh, organic mushrooms to hotels, 
              supermarkets, and restaurants across Sri Lanka.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-200 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-green-200 hover:text-white transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-green-200 hover:text-white transition"
                >
                  Services
                </button>
              </li>
              <li>
                <Link href="/products" className="text-green-200 hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-green-200 hover:text-white transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1" />
                <span>orders@piyumproduct.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1" />
                <span>Colombo 05, Sri Lanka</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-green-800 p-2 rounded-lg hover:bg-green-700 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-green-800 p-2 rounded-lg hover:bg-green-700 transition">
                <Instagram size={20} />
              </a>
            </div>
            <p className="mt-6 text-green-200 text-sm">
              Subscribe to our newsletter for updates
            </p>
            <div className="mt-3 flex">
              <input
                type="email"
                placeholder="Your email"
                className="grow px-4 py-2 rounded-l-lg text-gray-800"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} PIYUM PRODUCT. All rights reserved.</p>
          <p className="mt-2 text-sm">Website for product awareness only. Orders via phone/email.</p>
        </div>
      </div>
    </footer>
  );
}