'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-green-700">
          PIYUM PRODUCT
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-green-700">Home</Link>
          <Link href="/products" className="hover:text-green-700">Products</Link>
          <Link href="/#services" className="hover:text-green-700">Services</Link>
          <Link href="/#contact" className="hover:text-green-700">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
