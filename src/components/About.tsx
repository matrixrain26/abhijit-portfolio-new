'use client';

import { motion } from 'framer-motion';
import { FaChartLine, FaLightbulb, FaUsers, FaCode } from 'react-icons/fa';

const skills = [
  {
    icon: <FaChartLine className="text-4xl text-primary" />,
    title: 'Financial Analysis',
    description: 'Expert in analyzing financial data and market trends in the hedge fund industry.'
  },
  {
    icon: <FaLightbulb className="text-4xl text-primary" />,
    title: 'Product Strategy',
    description: 'Skilled in developing product roadmaps and strategic initiatives for fintech solutions.'
  },
  {
    icon: <FaUsers className="text-4xl text-primary" />,
    title: 'Team Leadership',
    description: 'Experienced in leading cross-functional teams to deliver high-impact products.'
  },
  {
    icon: <FaCode className="text-4xl text-primary" />,
    title: 'Technical Knowledge',
    description: 'Strong understanding of technical aspects in fintech product development.'
  }
];

export default function About() {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-secondary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Product Manager with 10 Years of Fintech Experience
            </h3>
            <p className="text-gray-700 mb-4">
              I'm Abhijit Khadilkar, a passionate Product Manager with a decade of experience in the fintech industry, specializing in hedge fund servicing. Based in Hyderabad, India, I've dedicated my career to developing innovative financial technology solutions that drive business growth and improve user experiences.
            </p>
            <p className="text-gray-700 mb-6">
              Throughout my career, I've successfully led the development and launch of multiple financial products, working closely with stakeholders, developers, and end-users to ensure that solutions meet market needs while maintaining technical excellence.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Fintech</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Product Management</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Hedge Fund Services</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Financial Analysis</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Team Leadership</span>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-xl font-bold text-secondary mb-2">{skill.title}</h4>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
