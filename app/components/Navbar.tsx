'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// MODIFIED: Added faChevronDown icon
import { faDollarSign, faGift, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Define a reusable type for all SVG icon props for TypeScript
interface IconProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
}

// Icon components
export const Logo = () => {
  return <Image src="/logo.svg" alt="Logo" width={40} height={40} />;
};
// REMOVED: The custom ChevronDown SVG component is no longer needed.

export const Menu: React.FC<IconProps> = ({fill = "currentColor", size, height, width, ...props}) => {
  return (
    <svg fill="none" height={size || height || 24} viewBox="0 0 24" width={size || width || 24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 12h18M3 6h18M3 18h18" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  );
};
export const X: React.FC<IconProps> = ({fill = "currentColor", size, height, width, ...props}) => {
  return (
    <svg fill="none" height={size || height || 24} viewBox="0 0 24" width={size || width || 24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 6L6 18M6 6l12 12" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  );
};


// --- Main Navbar Component ---
export default function Navbar() {
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  interface Feature {
    key: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string; 
  }

  const features: Feature[] = [
    { 
      key: "paid-events", 
      title: "Paid Events", 
      description: "Manage ticket sales and revenue.", 
      icon: <FontAwesomeIcon icon={faDollarSign} className="h-6 w-6 text-green-500" />, 
      href: "/paid-events" 
    },
    { 
      key: "unpaid-events", 
      title: "Unpaid Events", 
      description: "Organize free community gatherings.", 
      icon: <FontAwesomeIcon icon={faGift} className="h-6 w-6 text-blue-500" />, 
      href: "/unpaid-events" 
    }
  ];

  // Effect to handle clicks outside the DESKTOP dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesktopDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Effect to close all menus on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileDropdownOpen(false);
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 h-[65px]
                       bg-white/80 dark:bg-gray-950/75 backdrop-blur-lg 
                       border-b border-gray-200/60 dark:border-gray-500/20 shadow-sm">
        <Link href="/" onClick={isMobileMenuOpen ? closeMobileMenu : undefined}>
          <div className="flex items-center space-x-3">
            <Logo />
            <span className="font-bold text-xl text-gray-900 dark:text-gray-100">EventGo</span>
          </div>
        </Link>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
          
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none transition-colors"
            >
              <span>Events</span>
              {/* MODIFIED: Replaced ChevronDown with FontAwesomeIcon */}
              <div className={`transform transition-transform duration-200 ${isDesktopDropdownOpen ? 'rotate-180' : ''}`}>
                <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3" />
              </div>
            </button>
            {isDesktopDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg z-50 p-2">
                {features.map((feature) => (
                  <Link 
                    key={feature.key} 
                    href={feature.href} 
                    className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
                    onClick={() => setIsDesktopDropdownOpen(false)}
                  >
                    <div className="flex-shrink-0 mt-1 w-6 text-center">{feature.icon}</div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">{feature.title}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{feature.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/exploreevents" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Explore</Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">About Us</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Login</Link>
          <Link href="/register" className="inline-flex items-center px-4 py-2 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-900 transition-colors">Sign Up</Link>
        </div>

        {/* --- Mobile Menu Button --- */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-700 dark:text-gray-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* --- Mobile Menu Panel --- */}
      {isMobileMenuOpen && (
        <div className="fixed top-[65px] left-0 right-0 bottom-0 z-40 md:hidden
                       bg-white/80 dark:bg-gray-950/75 backdrop-blur-lg
                       overflow-y-auto">
          <div className="px-4 py-6 space-y-6 text-gray-900 dark:text-gray-100">
            <Link href="/" className="block font-medium text-lg" onClick={closeMobileMenu}>Home</Link>
            
            <div>
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="flex items-center justify-between w-full text-left font-medium text-lg"
              >
                <span>Events</span>
                 {/* MODIFIED: Replaced ChevronDown with FontAwesomeIcon */}
                <div className={`transform transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}>
                   <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
                </div>
              </button>
              {isMobileDropdownOpen && (
                <div className="mt-4 pl-2 space-y-4">
                  {features.map((feature) => (
                    <Link key={feature.key} href={feature.href} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50" onClick={closeMobileMenu}>
                      <div className="flex-shrink-0 mt-1 w-6 text-center">{feature.icon}</div>
                      <div>
                        <div className="font-medium">{feature.title}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{feature.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/exploreevents" className="block font-medium text-lg" onClick={closeMobileMenu}>Explore Events</Link>
            <Link href="/about" className="block font-medium text-lg" onClick={closeMobileMenu}>About Us</Link>

            <div className="pt-6 space-y-4 border-t border-gray-200/60 dark:border-gray-500/20">
              <Link href="/login" className="block w-full text-center py-3 font-medium text-lg" onClick={closeMobileMenu}>Login</Link>
              <Link href="/register" className="block w-full text-center py-3 bg-green-700 text-white font-medium rounded-lg hover:bg-green-900" onClick={closeMobileMenu}>Sign Up</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}