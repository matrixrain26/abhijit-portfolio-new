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
        <div className="flex flex-wrap justify-center gap-2 mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white text-primary px-2 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link 
                  href={`/projects/${project.slug}`}
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
