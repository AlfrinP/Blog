'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from './Button';
import Image from 'next/image';

export default function NavBar() {
  const menuItems = [
    { title: 'Homepage', href: '/' },
    { title: 'About us', href: '/about' },
    { title: 'Features', href: '/features' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact us', href: '/contact' },
  ];

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">My Website</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <Button variant="outline">Demo</Button>
                <Button>Get Started</Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <Image src="/images/close.svg" width={24} height={24} alt="close menu" className="w-6 h-6" />
                ) : (
                  <Image src="/images/menu.svg" width={24} height={24} alt="open menu" className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full h-screen w-screen bg-white inset-y-0 shadow-lg z-40">
            <div className="px-4 py-6 flex flex-col items-center justify-center gap-y-4">
              <nav className="flex flex-col items-center justify-center space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 py-2 transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
              <Button variant="outline">Demo</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        )}
      </header>
      <div className="h-16"></div>
    </>
  );
}
