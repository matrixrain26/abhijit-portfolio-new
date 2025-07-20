'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Project data with the 5 categories requested
const projectCategories = [
  'All',
  'Career',
  'Finance',
  'Fitness',
  'Travel',
];

const projectsData = [
  {
    id: 1,
    title: 'Foray into Product Management',
    description: 'My journey transitioning into product management in the fintech industry.',
    category: 'Career',
    image: '/local_profile_image/858112681_218174.jpg',
    slug: 'product-management',
  },
  {
    id: 2,
    title: 'Half Marathons',
    description: "4 half marathons (Pune ×1, Hyderabad ×3). Two 10Ks started it all. Fifth half in Aug 2025—chasing sub‑2:10 with data‑driven training, a Garmin Forerunner, Asics footwear, structured fueling, and a long‑term runway toward a Hyderabad full and the Ladakh marathon.",
    category: 'Fitness',
    image: '/local_half_marathon/WhatsApp Image 2025-07-20 at 14.21.28.jpeg',
    slug: 'half-marathons',
  },
  {
    id: 3,
    title: 'Biocon Trade',
    description: 'Analysis and execution of a profitable investment in Biocon.',
    category: 'Finance',
    image: '/local_profile_image/858112681_218174.jpg',
    slug: 'biocon-trade',
  },
  {
    id: 4,
    title: 'Career Advancement',
    description: 'Key milestones and strategies that helped advance my career in fintech.',
    category: 'Career',
    image: '/local_profile_image/858112681_218174.jpg',
    slug: 'career-advancement',
  },
  {
    id: 5,
    title: 'Fitness Journey',
    description: 'My personal transformation through fitness and healthy lifestyle choices.',
    category: 'Fitness',
    image: '/local_half_marathon/WhatsApp Image 2025-07-20 at 14.21.28 (1).jpeg',
    slug: 'fitness-journey',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-secondary mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my diverse range of projects and experiences across different areas of my life and career.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-end gap-2 mb-12 max-w-5xl ml-auto">
          {projectCategories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 ml-auto max-w-5xl">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="p-8 flex flex-col h-56">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-secondary mb-1">{project.title}</h3>
                  <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                <div className="mt-auto">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
