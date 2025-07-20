'use client';

import Link from 'next/link';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">Abhijit Khadilkar</h2>
            <p className="text-gray-400">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
          
          {/* Contact info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3 text-blue-400">Contact Info</h3>
            <p className="text-gray-400 mb-1">LH11 - 1607, Lanco Hills, Hyderabad - 500089</p>
            <p className="text-gray-400 mb-1">Phone: +91 7506077147</p>
            <p className="text-gray-400">Email: abhijit.sk@somaiya.edu</p>
          </div>
          
          {/* Social links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-blue-400">Follow Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaTwitter className="text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaLinkedinIn className="text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaInstagram className="text-white" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaGithub className="text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>Designed and developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
