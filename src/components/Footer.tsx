'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub, FaHeart, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div>
            <Link href="#home" className="text-2xl font-heading font-bold">
              Abhijit<span className="text-primary">.K</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Product Manager with 10 years of experience in fintech and hedge fund servicing industry.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/in/abhijit-khadilkar-04232aab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://x.com/askhadilkar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/abhijit_khadilkar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://github.com/matrixrain26" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          

          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block text-white">Address:</span>
                LH11 - 1607, Lanco Hills, Hyderabad - 500089
              </li>
              <li className="text-gray-400">
                <span className="block text-white">Phone:</span>
                +91 7506077147
              </li>
              <li className="text-gray-400">
                <span className="block text-white">Email:</span>
                abhijit.sk@somaiya.edu
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {currentYear} Abhijit Khadilkar. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2 md:mt-0">
            Made with <FaHeart className="inline text-primary mx-1" /> using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <motion.div
        className="fixed bottom-6 right-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="#home"
          className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-colors"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </Link>
      </motion.div>
    </footer>
  );
}
