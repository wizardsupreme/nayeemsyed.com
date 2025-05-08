import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ContactForm from '../ui/ContactForm';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Have a project in mind or want to discuss a potential collaboration? Reach out to me."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div>
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-primary-600 dark:text-primary-400">
                    <EnvelopeIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Email
                    </h4>
                    <a 
                      href="mailto:contact@nayeemsyed.com" 
                      className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      contact@nayeemsyed.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-primary-600 dark:text-primary-400">
                    <PhoneIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Phone
                    </h4>
                    <p className="text-gray-900 dark:text-white">
                      Available upon request
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-primary-600 dark:text-primary-400">
                    <MapPinIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Location
                    </h4>
                    <p className="text-gray-900 dark:text-white">
                      Available for remote work globally
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Download CV
                </h4>
                <a 
                  href="/cv_nsm_250504.pdf" 
                  download 
                  className="btn-primary inline-block"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
