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
      title: "CPA: Programming Essentials C++",
      image: "CPA.jpg",  
    },
    {
      title: "Design Thinking & Innovation",
      image: "DTPS.jpg",  
    },
    {
      title: "Python 101 for Data science",
      image: "IBM.jpg",  
    },
    {
      title: "Linux Essentials",
      image: "linux.jpg",  
    },
    {
      title: "Network Support and Security",
      image: "Network_Support_and_Security.jpg",  
    },
    {
      title: "Networking Adderessing and basic troubleshooting",
      image: "Networking_Adderessing_and_basic_troubleshooting.jpg",  
    },
    {
      title: "Networking Basic Page",
      image: "Networking_Basic_page.jpg",  
    },
    {
      title: "Database Programming with SQL",
      image: "Oracel.jpg",  
    },
    {
      title: "Getting Started With Python",
      image: "python.jpg",  
    },
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
                src={`/certificates/${project.image}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6 ">
              <h3 className="text-xl  font-bold mb-2">{project.title}</h3>
    
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Certificate;
