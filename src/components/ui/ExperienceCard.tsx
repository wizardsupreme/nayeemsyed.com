import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-primary-600 dark:before:bg-primary-400 before:z-10 after:content-[''] after:absolute after:left-2 after:top-2 after:w-0.5 after:h-full after:bg-gray-200 dark:after:bg-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="text-primary-600 dark:text-primary-400 font-medium mb-1">
        {company}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {period}
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
}
