'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-96 md:h-[700px] bg-linear-to-r from-green-900/90 to-green-800/90">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1583141230851-d0d8534b52c5?auto=format&fit=crop&w=2070")',
        }}
      />
      <div className="relative container-custom h-full flex items-center px-4">
        <div className="text-white max-w-2xl">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Premium Quality Mushrooms from{' '}
            <span className="text-orange-400">PIYUM PRODUCT</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Supplying fresh and organic mushrooms to hotels, supermarkets, and restaurants across the country. 
            Experience the difference with our farm-to-table approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/products" 
              className="btn-secondary inline-flex items-center justify-center"
            >
              View Our Products <ArrowRight className="ml-2" size={20} />
            </Link>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}