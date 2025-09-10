'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Image src="/logo.svg" alt="Logo" width={40} height={40} />
  );
};

export const ChevronDown = ({fill, size, height, width, ...props}) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Menu = ({fill = "currentColor", size, height, width, ...props}) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 12h18M3 6h18M3 18h18"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
};

export const X = ({fill = "currentColor", size, height, width, ...props}) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
};

export const Lock = ({fill, size, height, width, ...props}) => {
  const color = fill;

  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(3.5 2)">
        <path
          d="M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(3.85 0.75)"
        />
        <path
          d="M.5,0V2.221"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(7.91 12.156)"
        />
        <path
          d="M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(0.75 6.824)"
        />
      </g>
    </svg>
  );
};

export const Activity = ({fill, size, height, width, ...props}) => {
  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
        <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
        <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
      </g>
    </svg>
  );
};

export const Flash = ({fill = "currentColor", size, height, width, ...props}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Server = ({fill = "currentColor", size, height, width, ...props}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const TagUser = ({fill = "currentColor", size, height, width, ...props}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Scale = ({fill = "currentColor", size, height, width, ...props}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M18 10V6h-4M6 14v4h4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-yellow-500" fill="currentColor" size={24} />,
    lock: <Lock className="text-green-500" fill="currentColor" size={24} />,
    activity: <Activity className="text-purple-500" fill="currentColor" size={24} />,
    flash: <Flash className="text-blue-500" fill="currentColor" size={24} />,
    server: <Server className="text-green-500" fill="currentColor" size={24} />,
    user: <TagUser className="text-red-500" fill="currentColor" size={24} />,
  };

  const features = [
    {
      key: "autoscaling",
      title: "Autoscaling",
      description: "ACME scales apps based on demand and load",
      icon: icons.scale
    },
    {
      key: "usage_metrics",
      title: "Usage Metrics", 
      description: "Real-time metrics to debug issues",
      icon: icons.activity
    },
    {
      key: "production_ready",
      title: "Production Ready",
      description: "ACME runs on ACME, join us at web scale",
      icon: icons.flash
    },
    {
      key: "99_uptime",
      title: "+99% Uptime",
      description: "High availability and uptime guarantees",
      icon: icons.server
    },
    {
      key: "supreme_support",
      title: "+Supreme Support",
      description: "Support team ready to respond",
      icon: icons.user
    }
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <nav className="relative flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        {/* Brand */}
        <Link href="/">
            <div className="flex items-center space-x-3">
            <Logo />
            <span className="font-bold text-xl text-gray-900">UniVent</span>
            </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
          {/* Features Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 focus:outline-none transition-colors"
            >
              <span>Features</span>
              <div className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                {icons.chevron}
              </div>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                <div className="py-2">
                  {features.map((feature) => (
                    <a
                      key={feature.key}
                      href="#"
                      className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{feature.title}</div>
                        <div className="text-sm text-gray-500 mt-1">{feature.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Regular Navigation Items */}
          <Link href="/exploreevents" className="text-gray-700 hover:text-gray-900 transition-colors">Explore Events</Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">About Us</Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            Login
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-900 transition-colors"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-25"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu Panel */}
          <div className="relative bg-white border-b border-gray-200 shadow-lg">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Logo />
                <span className="font-bold text-xl text-gray-900">UniVent</span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-700 hover:text-gray-900"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="px-4 py-6 space-y-6 max-h-[80vh] overflow-y-auto">
              <Link href="/" className="block text-gray-700 font-medium text-lg hover:text-gray-900 transition-colors">Home</Link>
              {/* Features Section */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-900 font-medium text-lg"
                >
                  <span>Features</span>
                  <div className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                    {icons.chevron}
                  </div>
                </button>
                
                {isDropdownOpen && (
                  <div className="mt-4 space-y-4">
                    {features.map((feature) => (
                      <a
                        key={feature.key}
                        href="#"
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        <div className="flex-shrink-0 mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{feature.title}</div>
                          <div className="text-sm text-gray-500 mt-1">{feature.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Navigation Links */}
              <div className="space-y-4">
                <Link href="/" className="block text-gray-700 font-medium text-lg hover:text-gray-900 transition-colors">Home</Link>
                <Link 
                  href="/exploreevents" 
                  className="block text-gray-700 font-medium text-lg hover:text-gray-900 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Explore Events
                </Link>
                <Link 
                  href="/about" 
                  className="block text-gray-700 font-medium text-lg hover:text-gray-900 transition-colors"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </div>

              {/* Auth Buttons */}
              <div className="pt-6 space-y-4 border-t border-gray-200">
                <a
                  href="#"
                  className="block w-full text-center py-3 text-gray-700 font-medium text-lg hover:text-gray-900 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Login
                </a>
                <a
                  href="#"
                  className="block w-full text-center py-3 bg-green-700 text-white font-medium rounded-lg hover:bg-green-900 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Dropdown Backdrop */}
      {isDropdownOpen && !isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </>
  );
}