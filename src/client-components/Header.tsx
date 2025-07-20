'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const projectItems = [
  { name: 'Foray into Product Management', href: '/projects/product-management' },
  { name: 'Half Marathons', href: '/projects/half-marathons' },
  { name: 'Biocon Trade', href: '/projects/biocon-trade' },
  { name: 'Career Advancement', href: '/projects/career-advancement' },
  { name: 'Fitness Journey', href: '/projects/fitness-journey' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-end items-center">
        {/* Desktop Navigation - Empty header as requested */}
        <nav className="hidden md:block">
          <div className="relative">
            {/* Projects dropdown removed as requested */}
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-secondary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container-custom py-4">
            <div className="space-y-4">
              <div className="font-medium text-secondary mb-2">Projects</div>
              <ul className="space-y-2 pl-4">
                {projectItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-2 text-secondary hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
