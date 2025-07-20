'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
    details?: any;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setSubmitStatus({
          success: true,
          message: 'Thank you! Your message has been sent successfully.',
          details: data
        });
        console.log('Email sent successfully:', data);
      } else {
        setSubmitStatus({
          success: false,
          message: `Failed to send message: ${data.error || 'Unknown error'}`,
          details: data
        });
        console.error('Error sending email:', data);
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'An error occurred while sending your message. Please try again.',
        details: error
      });
      console.error('Error in form submission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-secondary mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me using the form below or through my contact information.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary">Phone</h4>
                  <p className="text-gray-600">+91 7506077147</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary">Email</h4>
                  <p className="text-gray-600">abhijit.sk@somaiya.edu</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div className="mt-1">
                  <h4 className="text-lg font-semibold text-secondary">Office Address</h4>
                  <p className="text-gray-600 mb-3">
                    LH11 - 1607, Lanco Hills, Hyderabad - 500089
                  </p>
                  <div className="w-full h-48 rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5385009725247!2d78.5476!3d17.3855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9994cb7a3c3f%3A0x3b6b1d1c8e4a3c89!2sLanco%20Hills%2C%20Hyderabad%2C%20Telangana%20500089!5e0!3m2!1sen!2sin!4v1658472529531!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-secondary mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/abhijit-khadilkar-04232aab" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full transition-colors">
                  <FaLinkedin />
                </a>
                <a href="https://x.com/askhadilkar" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full transition-colors">
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com/abhijit_khadilkar" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full transition-colors">
                  <FaInstagram />
                </a>
                <a href="https://github.com/matrixrain26" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full transition-colors">
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-fit"
          >
            <div className="bg-white rounded-lg shadow-lg p-8" style={{ maxHeight: '480px', overflowY: 'auto' }}>
              <h3 className="text-2xl font-bold text-secondary mb-6">Send Me a Message</h3>
              
              {submitStatus && (
                <div className={`p-4 mb-6 rounded-md ${
                  submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  <p>{submitStatus.message}</p>
                  {!submitStatus.success && submitStatus.details && (
                    <details className="mt-2 text-sm">
                      <summary>Technical Details (for debugging)</summary>
                      <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto text-xs">
                        {JSON.stringify(submitStatus.details, null, 2)}
                      </pre>
                    </details>
                  )}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={10}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
