import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                Nayeem Syed
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Fullstack Developer, Architect, and CTO as a Service with expertise in Rust, Python, Ruby, and more.
              </p>
            </motion.div>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact info */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  <a href="mailto:contact@nayeemsyed.com" className="hover:text-primary-600 dark:hover:text-primary-400">
                    contact@nayeemsyed.com
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                    Get in touch
                  </a>
                </li>
                <li>
                  <a href="/cv_nsm_250504.pdf" download className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                    Download CV
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {currentYear} Nayeem Syed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
