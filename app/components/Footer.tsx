import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

// Required Logo Component for the Footer
const EventGoLogo = ({ color = '#FFFFFF' }: { color?: string }) => (
    <Image src="/logo.svg" alt="Logo" width={40} height={40} />
);

// Footer Component
const Footer = () => {
  return (
   <footer className="bg-[#1A202C] text-gray-300">
    <div className="container mx-auto px-6 py-12">
     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* --- Branding Section --- */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1">
       <div className="flex items-center space-x-3 mb-4">
        <EventGoLogo />
        <span className="text-xl font-bold text-white">EventGo</span>
       </div>
       <p className="text-sm text-gray-400">
        The central hub for all events at NSBM Green University, fostering a vibrant and engaging campus community.
       </p>
      </div>
 
      {/* --- Quick Links Section --- */}
      <div>
       <h3 className="font-semibold text-white mb-4">Quick Links</h3>
       <ul className="space-y-2 text-sm">
        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
        <li><Link href="/events" className="hover:text-white transition-colors">All Events</Link></li>
        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
        <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
       </ul>
      </div>
 
      {/* --- Legal Section --- */}
      <div>
       <h3 className="font-semibold text-white mb-4">Legal</h3>
       <ul className="space-y-2 text-sm">
        <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
        <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
       </ul>
      </div>
 
      {/* --- Social Media Section --- */}
      <div>
       <h3 className="font-semibold text-white mb-4">Follow Us</h3>
       <div className="flex space-x-4">
        <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
         <Facebook className="w-6 h-6" />
        </Link>
        <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
         <Twitter className="w-6 h-6" />
        </Link>
        <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
         <Linkedin className="w-6 h-6" />
        </Link>
       </div>
      </div>
     </div>
 
     {/* --- Copyright Bar --- */}
     <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Group 8. All Rights Reserved.</p>
     </div>
    </div>
   </footer>
  );
 };

 export default Footer;