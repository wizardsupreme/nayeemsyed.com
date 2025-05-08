import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { CodeBracketIcon, BuildingOfficeIcon, PhotoIcon } from '@heroicons/react/24/outline';

export default function AboutSection() {
  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionTitle 
          title="About Me" 
          subtitle="Learn more about my background, expertise, and interests."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Professional Background
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a seasoned fullstack developer and architect with over a decade of experience building complex applications and systems. My expertise spans across the entire development lifecycle, from conceptualization to deployment and maintenance.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As a CTO as a service, I help businesses optimize their technical operations, implement best practices, and make strategic technology decisions that align with their business goals.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My technical proficiency includes Rust, Python, Ruby, and various modern web technologies. I'm passionate about creating efficient, scalable, and maintainable solutions that solve real-world problems.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Beyond Technology
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-primary-600 dark:text-primary-400">
                  <BuildingOfficeIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Business Acumen
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I have strong business acumen in commercial real estate, raising capital, and business efficiency and optimization, allowing me to bridge the gap between technology and business objectives.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-primary-600 dark:text-primary-400">
                  <CodeBracketIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Technical Leadership
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I excel in leading technical teams, establishing development processes, and implementing DevOps practices that enhance productivity and code quality.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-primary-600 dark:text-primary-400">
                  <PhotoIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Personal Interests
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Outside of technology, I enjoy Latin dancing and fashion photography, which provide me with creative outlets and a balanced perspective.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
