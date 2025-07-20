'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I'm <span className="text-primary">Abhijit Khadilkar</span>
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Product Manager with 10 years of experience in fintech and hedge fund servicing.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#projects" className="btn btn-primary">
              View My Projects
            </Link>
            <Link href="#contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            {/* Using the local profile image */}
            <Image 
              src="/local_profile_image/858112681_218174.jpg" 
              alt="Abhijit Khadilkar" 
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary flex justify-center pt-2">
          <motion.div 
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
