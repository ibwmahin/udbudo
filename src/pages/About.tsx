
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
  const timelineItems = [
    {
      year: '2021',
      title: 'The Idea',
      description: 'Mahin started building his own UI components for personal projects and realized the potential of sharing them with other developers.'
    },
    {
      year: '2022',
      title: 'First Release',
      description: 'Released the first UI kit with 50 components and received positive feedback from the developer community.'
    },
    {
      year: '2023',
      title: 'Expanding the Vision',
      description: 'Expanded the product line to include dashboards, icon packs, and templates to serve diverse developer needs.'
    },
    {
      year: '2024',
      title: 'Growing Community',
      description: 'Built a community of developers who use and contribute to the Udbudo ecosystem.'
    },
    {
      year: '2025',
      title: 'Udbudo Today',
      description: 'Continuing to innovate and create premium digital assets that help developers build better applications.'
    }
  ];

  const techStack = [
    'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma', 'Vite',
    'Next.js', 'Storybook', 'Zod', 'React Query', 'Zustand', 'Radix UI'
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-4 text-center">About Udbudo</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          The story of how a passion for development turned into a mission to help developers ship faster with stunning tools.
        </p>
      </AnimatedSection>

      {/* Founder Section */}
      <div className="glass rounded-xl overflow-hidden mb-24">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 h-full">
            <div className="h-full w-full bg-udbudo-dark relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-udbudo-primary/20 to-udbudo-dark opacity-90" />
              <img 
                src="/placeholder.svg" 
                alt="Mahin, Founder of Udbudo" 
                className="w-full h-96 md:h-full object-cover object-center mix-blend-overlay opacity-50" 
              />
            </div>
          </div>

          <div className="md:col-span-3 p-6 md:p-12 flex flex-col justify-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-4">Mahin's Story</h2>
              <p className="text-muted-foreground mb-6">
                Hi, I'm Mahin, a developer from Bangladesh with a passion for building beautiful and functional digital products.
              </p>
              <p className="text-muted-foreground mb-6">
                My journey began as a self-taught developer, constantly searching for high-quality resources to improve my own projects. 
                I found that many existing solutions were either too complex, poorly documented, or lacked the visual polish I was looking for.
              </p>
              <p className="text-muted-foreground">
                That's when I decided to create Udbudo – a platform offering premium digital assets designed specifically for developers 
                who care about both functionality and aesthetics. Every product is crafted with attention to detail, performance optimization, 
                and developer experience in mind.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Mission */}
      <AnimatedSection className="mb-24 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <blockquote className="text-xl md:text-2xl italic text-udbudo-primary">
          "Helping developers ship faster with stunning tools."
        </blockquote>
        <p className="mt-8 text-muted-foreground">
          At Udbudo, we believe that developers shouldn't have to choose between functionality and aesthetics. 
          Our mission is to provide premium digital assets that combine both, allowing developers to build beautiful, 
          functional applications without starting from scratch.
        </p>
      </AnimatedSection>

      {/* Timeline */}
      <div className="mb-24">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The Udbudo Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From a personal need to a platform serving developers worldwide.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-muted transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          {timelineItems.map((item, index) => (
            <AnimatedSection
              key={item.year}
              delay={index * 0.2}
              className="mb-12 relative"
            >
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                  <div className="glass p-6 rounded-xl md:max-w-md">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                <div className="md:w-1/2 flex justify-center">
                  <div className="bg-udbudo-primary text-background font-bold rounded-full w-12 h-12 flex items-center justify-center relative z-10">
                    {item.year}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <AnimatedSection className="mb-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Tech Stack</h2>
        <div className="glass rounded-xl p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-muted/50 rounded-lg p-4 text-center"
                whileHover={{ y: -5, backgroundColor: 'rgba(155, 135, 245, 0.2)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Social Links */}
      <AnimatedSection className="text-center">
        <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-4 rounded-full glass-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-4 rounded-full glass-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
