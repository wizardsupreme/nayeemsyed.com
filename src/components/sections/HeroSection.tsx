import { motion } from 'framer-motion';
import dubaiPhoto from '../../assets/images/dubai.png';

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm <span className="text-primary-600 dark:text-primary-400">Nayeem Syed</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
                Fullstack Developer & Architect
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                I specialize in building robust, scalable applications with expertise in Rust, Python, Ruby, and modern web technologies. I also offer CTO as a service to help businesses thrive.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="btn-primary"
                >
                  Get in Touch
                </a>
                <a
                  href="/cv_nsm_250504.pdf"
                  download
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src={dubaiPhoto}
                  alt="Nayeem Syed in Dubai"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="text-primary-600 dark:text-primary-400 font-semibold">10+ Years Experience</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
