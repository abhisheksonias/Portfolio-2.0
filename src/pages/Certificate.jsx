
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Certificate = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const Certificates = [
    {
      title: "Vruksham",
      description: "Designed and built an IoT-based system to monitor and optimize energy production from renewable sources. Implemented real-time data visualization and predictive analytics.",
      technologies: ["Arduino", "Python", "React", "IoT", "Machine Learning"],
      image: "renewable-energy-project.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Satyamed",
      description: "Created a fully automated hydroponic system with sensors to monitor water quality, nutrient levels, and plant growth. Controlled via a mobile application.",
      technologies: ["Raspberry Pi", "Node.js", "React Native", "Sensors", "Automation"],
      image: "hydroponic-garden.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Satarksetu",
      description: "Developed a software tool for analyzing structural integrity of buildings under various stress conditions. Includes 3D visualization and simulation capabilities.",
      technologies: ["Python", "C++", "Three.js", "Physics Engine", "WebGL"],
      image: "structural-analysis.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Gesture Recogination",
      description: "Designed an AI-powered traffic management system that optimizes signal timing based on real-time traffic conditions, reducing congestion and wait times.",
      technologies: ["Computer Vision", "TensorFlow", "Embedded Systems", "Data Analysis"],
      image: "traffic-management.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "K7 website",
      description: "Created a wearable device that monitors vital signs and provides health insights. Features include heart rate monitoring, sleep tracking, and activity recognition.",
      technologies: ["Embedded C", "Bluetooth", "Mobile App", "Data Visualization", "Health Metrics"],
      image: "health-monitor.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Currency converter",
      description: "Created a wearable device that monitors vital signs and provides health insights. Features include heart rate monitoring, sleep tracking, and activity recognition.",
      technologies: ["Embedded C", "Bluetooth", "Mobile App", "Data Visualization", "Health Metrics"],
      image: "health-monitor.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Amazon Clone",
      description: "Created a wearable device that monitors vital signs and provides health insights. Features include heart rate monitoring, sleep tracking, and activity recognition.",
      technologies: ["Embedded C", "Bluetooth", "Mobile App", "Data Visualization", "Health Metrics"],
      image: "health-monitor.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Smark car parking system",
      description: "Developed a comprehensive database of sustainable materials for engineering applications, including properties, environmental impact, and sourcing information.",
      technologies: ["Database Design", "Web Development", "Material Science", "Sustainability Metrics"],
      image: "materials-database.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 pt-32 pb-20"
    >
      <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
        Certificates
      </motion.h1>
      <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-12 max-w-2xl">
        A showcase of my engineering Certificates, designs, and technical explorations.
      </motion.p>

      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {Certificates.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="project-card glass-effect rounded-xl overflow-hidden"
            whileHover={{ y: -10 }}
          >
            <div className="relative h-56 overflow-hidden">
              <img  
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                alt={project.title}
               src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Certificate;
