'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      // Offset for navbar height (approx 80px) + some buffer
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (pathname.startsWith('/products') && href === '/products') return true;
    
    if (pathname === '/') {
      if (href === '/' && activeSection === 'home') return true;
      if (href === '/#about' && activeSection === 'about') return true;
      if (href === '/#services' && activeSection === 'services') return true;
      if (href === '/#contact' && activeSection === 'contact') return true;
    }
    
    return false;
  };

  const getLinkClasses = (href: string, isMobile = false) => {
    const baseClasses = "transition duration-200";
    const mobileClasses = "px-2 py-1 rounded-md"; // keeping your existing mobile base styles logic if needed, or just adding to it.
    // However, looking at original code:
    // Desktop: "hover:text-green-700 transition"
    // Mobile: "hover:text-green-700 transition px-2 py-1 rounded-md hover:bg-green-50"
    
    const activeClasses = "text-blue-700 font-bold";
    const inactiveClasses = "hover:text-blue-700 text-gray-600"; 
    // Note: Original text color wasn't explicitly set for inactive, likely inherited. 
    // Setting text-gray-600 for inactive to make the active green pop more, or just keep default 'text-black' equivalent?
    // Let's stick closer to original but add active weight/color.
    
    const activeStyle = isActive(href) ? activeClasses : inactiveClasses;
    
    if (isMobile) {
      return `${activeStyle} ${mobileClasses} ${isActive(href) ? 'bg-green-50' : 'hover:bg-green-50'}`;
    }
    return `${activeStyle}`;
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-[-3] ">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-green-700" onClick={() => handleLinkClick('/')}>
            <img src="/images/logo.png" alt="Logo" className="w-16" />  
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={getLinkClasses(link.href)}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.name}
              </Link>
            ))}
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
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={getLinkClasses(link.href, true)}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
