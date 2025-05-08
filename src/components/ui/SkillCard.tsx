import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay?: number;
}

export default function SkillCard({ 
  title, 
  skills, 
  icon,
  delay = 0 
}: SkillCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 text-primary-600 dark:text-primary-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300 flex items-center">
            <span className="mr-2">•</span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
