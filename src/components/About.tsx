'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-secondary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 mb-8 md:mb-0"
          >
            <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/local_profile_image/858112681_218174.jpg"
                alt="Abhijit Khadilkar working"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Product Manager with 10 years of experience</h3>
            <p className="text-gray-600 mb-4">
              I'm Abhijit Khadilkar, a passionate Product Manager with a decade of experience in the fintech industry, 
              specializing in hedge fund servicing. Based in Hyderabad, India, I've dedicated my career to creating 
              innovative solutions that bridge the gap between technology and finance.
            </p>
            <p className="text-gray-600 mb-6">
              With expertise in product strategy, user experience design, and agile methodologies, 
              I've successfully led cross-functional teams to deliver products that solve complex problems 
              and exceed client expectations. My approach combines analytical thinking with creative problem-solving 
              to drive business growth and enhance user satisfaction.
            </p>
            
            {/* Skills */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span className="text-gray-700">Product Strategy</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span className="text-gray-700">Fintech Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span className="text-gray-700">Agile Methodologies</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span className="text-gray-700">User Experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span className="text-gray-700">Data Analysis</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span className="text-gray-700">Team Leadership</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
