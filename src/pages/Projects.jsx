
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "Vruksham",
      description: "Designed and built an IoT-based system to monitor and optimize energy production from renewable sources. Implemented real-time data visualization and predictive analytics.",
      technologies: ["Arduino", "Python", "React", "IoT", "Machine Learning"],
      image: "Vruksham.png",
      github: "github.com/abhisheksonias/Vruksham",
      demo: "github.com/abhisheksonias/Vruksham"
    },
    {
      title: "Trishul360",
      description: "Created a fully automated hydroponic system with sensors to monitor water quality, nutrient levels, and plant growth. Controlled via a mobile application.",
      technologies: ["Raspberry Pi", "Node.js", "React Native", "Sensors", "Automation"],
      image: "chandan.png",
      github: "",
      demo: ""
    },
    {
      title: "Buzz Brief",
      description: "Created a fully automated hydroponic system with sensors to monitor water quality, nutrient levels, and plant growth. Controlled via a mobile application.",
      technologies: ["Raspberry Pi", "Node.js", "React Native", "Sensors", "Automation"],
      image: "buzz.png",
      github: "https://github.com/abhisheksonias/BuzzBrief",
      demo: "https://buzz-brief.vercel.app/"
    },
    {
      title: "Satyamed",
      description: "Created a fully automated hydroponic system with sensors to monitor water quality, nutrient levels, and plant growth. Controlled via a mobile application.",
      technologies: ["Raspberry Pi", "Node.js", "React Native", "Sensors", "Automation"],
      image: "satya.png",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "BlockChain Based Projects ",
      description: "Created a fully automated hydroponic system with sensors to monitor water quality, nutrient levels, and plant growth. Controlled via a mobile application.",
      technologies: ["Raspberry Pi", "Node.js", "React Native", "Sensors", "Automation"],
      image: "bc.jpg",
      github: "https://github.com/abhisheksonias/Blockchain-Projects",
      demo: "https://github.com/abhisheksonias/Blockchain-Projects"
    },
    {
      title: "Satarksetu",
      description: "Developed a software tool for analyzing structural integrity of buildings under various stress conditions. Includes 3D visualization and simulation capabilities.",
      technologies: ["Python", "C++", "Three.js", "Physics Engine", "WebGL"],
      image: "1.png",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "ATC Agency",
      description: "Developed a software tool for analyzing structural integrity of buildings under various stress conditions. Includes 3D visualization and simulation capabilities.",
      technologies: ["Python", "C++", "Three.js", "Physics Engine", "WebGL"],
      image: "atc.png",
      github: "https://github.com/abhisheksonias/ATC",
      demo: "https://atc-ebon-tau.vercel.app/"
    },
    {
      title: "Hospital Management System",
      description: "Designed an AI-powered traffic management system that optimizes signal timing based on real-time traffic conditions, reducing congestion and wait times.",
      technologies: ["Computer Vision", "TensorFlow", "Embedded Systems", "Data Analysis"],
      image: "hm.png",
      github: "https://github.com/abhisheksonias/hospitalmanagement",
      demo: "https://hospitalmanagement-master.vercel.app/"
    },
    {
      title: "K7 website",
      description: "Created a wearable device that monitors vital signs and provides health insights. Features include heart rate monitoring, sleep tracking, and activity recognition.",
      technologies: ["Embedded C", "Bluetooth", "Mobile App", "Data Visualization", "Health Metrics"],
      image: "k7.png",
      github: "https://github.com/abhisheksonias/K7",
      demo: "https://k7-beryl.vercel.app/"
    },
    {
      title: "VyayamZone",
      description: "Created a wearable device that monitors vital signs and provides health insights. Features include heart rate monitoring, sleep tracking, and activity recognition.",
      technologies: ["Embedded C", "Bluetooth", "Mobile App", "Data Visualization", "Health Metrics"],
      image: "vyayamzone.png",
      github: "https://github.com/abhisheksonias/vyayamzone",
      demo: "https://vyayamzone.vercel.app/"
    },
    {
      title: "Rajasthan Tour Advisor",
      description: "Created a wearable device that monitors vital signs and provides health insights. Features include heart rate monitoring, sleep tracking, and activity recognition.",
      technologies: ["Embedded C", "Bluetooth", "Mobile App", "Data Visualization", "Health Metrics"],
      image: "rta.png",
      github: "https://github.com/abhisheksonias/Rajasthantouradvisor",
      demo: "https://rajasthantouradvisor27.vercel.app/"
    },
    {
      title: "Currency converter",
      description: "Created a wearable device that monitors vital signs and provides health insights. Features include heart rate monitoring, sleep tracking, and activity recognition.",
      technologies: ["Embedded C", "Bluetooth", "Mobile App", "Data Visualization", "Health Metrics"],
      image: "health-monitor.jpg",
      github: "https://github.com/abhisheksonias/Currency-Converter",
      demo: "https://github.com/abhisheksonias/Currency-Converter"
    },
    {
      title: "Amazon Clone",
      description: "Created a wearable device that monitors vital signs and provides health insights. Features include heart rate monitoring, sleep tracking, and activity recognition.",
      technologies: ["Embedded C", "Bluetooth", "Mobile App", "Data Visualization", "Health Metrics"],
      image: "health-monitor.jpg",
      github: "https://github.com/abhisheksonias/Amazon-Clone",
      demo: "https://github.com/abhisheksonias/Amazon-Clone"
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
        Projects
      </motion.h1>
      <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-12 max-w-2xl">
        A showcase of my engineering projects, designs, and technical explorations.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <img  
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
                alt={project.title}
                src={`/Project/${project.image}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              {/* Floating Tech Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-semibold bg-purple-500/80 backdrop-blur-sm text-white rounded-full border border-purple-400/50">
                  {project.technologies[0]}
                </span>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-500/20 text-gray-300 border border-gray-500/30">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-300 bg-gray-800/50 border border-gray-600/50 rounded-lg hover:bg-gray-700/50 hover:border-gray-500/50 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </div>
            </div>

            {/* Animated Border Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-400 mb-6">
          Interested in collaborating or want to see more projects?
        </p>
        <a 
          href="/Services" 
          className="inline-flex items-center gap-2 px-8 py-3 text-white font-medium bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
        >
          Get In Touch
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
