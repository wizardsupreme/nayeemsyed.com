import SectionTitle from '../ui/SectionTitle';
import SkillCard from '../ui/SkillCard';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CommandLineIcon, 
  CpuChipIcon 
} from '@heroicons/react/24/outline';

export default function SkillsSection() {
  return (
    <section id="skills" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="A comprehensive overview of my technical skills and areas of expertise."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend Development */}
          <SkillCard
            title="Frontend Development"
            skills={[
              'React & Next.js',
              'TypeScript',
              'HTML5 & CSS3',
              'Tailwind CSS',
              'Responsive Design'
            ]}
            icon={<CodeBracketIcon className="h-8 w-8" />}
            delay={0.1}
          />
          
          {/* Backend Development */}
          <SkillCard
            title="Backend Development"
            skills={[
              'Rust',
              'Python',
              'Ruby on Rails',
              'Node.js',
              'RESTful APIs',
              'GraphQL'
            ]}
            icon={<ServerIcon className="h-8 w-8" />}
            delay={0.2}
          />
          
          {/* DevOps & Infrastructure */}
          <SkillCard
            title="DevOps & Infrastructure"
            skills={[
              'Docker & Kubernetes',
              'CI/CD Pipelines',
              'AWS & Cloud Services',
              'Infrastructure as Code',
              'Monitoring & Logging'
            ]}
            icon={<CommandLineIcon className="h-8 w-8" />}
            delay={0.3}
          />
          
          {/* AI & Automation */}
          <SkillCard
            title="AI & Automation"
            skills={[
              'Machine Learning',
              'Process Automation',
              'Data Analysis',
              'AI Integration',
              'Workflow Optimization'
            ]}
            icon={<CpuChipIcon className="h-8 w-8" />}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
