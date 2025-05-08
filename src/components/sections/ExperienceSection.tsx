import SectionTitle from '../ui/SectionTitle';
import ExperienceCard from '../ui/ExperienceCard';

// Sample experience data - replace with your actual experience
const experiences = [
  {
    title: 'Chief Technology Officer',
    company: 'Tech Innovations Inc.',
    period: '2020 - Present',
    description: 'Leading the technical strategy and development of scalable cloud solutions. Managing a team of 15+ engineers and implementing DevOps practices that reduced deployment time by 40%.'
  },
  {
    title: 'Lead Software Architect',
    company: 'Digital Solutions Ltd.',
    period: '2017 - 2020',
    description: 'Designed and implemented microservices architecture for high-traffic applications. Led the migration from monolithic to microservices architecture, improving system reliability and scalability.'
  },
  {
    title: 'Senior Fullstack Developer',
    company: 'WebTech Systems',
    period: '2014 - 2017',
    description: 'Developed and maintained complex web applications using Ruby on Rails and React. Implemented automated testing that increased code coverage by 75% and reduced bugs in production.'
  },
  {
    title: 'Software Engineer',
    company: 'CodeCraft Solutions',
    period: '2011 - 2014',
    description: 'Built RESTful APIs and web applications using Python and Django. Collaborated with cross-functional teams to deliver features on time and within scope.'
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <SectionTitle 
          title="Professional Experience" 
          subtitle="A timeline of my professional journey and key roles."
        />
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
