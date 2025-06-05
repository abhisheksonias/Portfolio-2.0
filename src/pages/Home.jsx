import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, Download, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 pt-32 pb-20 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-primary font-medium">Hello, I'm </span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="hero-heading mb-6">
          Abhishek
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl">
        I'm Abhishek Soni, an AI student at Marwadi University, Rajkot, with a passion for web development, blockchain, and Web3.0. I’m driven by the potential of decentralized tech to reshape the internet and love creating user-focused digital experiences. Also a sketch artist, I blend creativity with logic to approach problem-solving from a unique perspective.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
          <Link to="/projects">
            <Button className="group" size="lg">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <div className="flex gap-4">
            <a href="https://github.com/abhisheksonias" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/abhishek-soni-03a653227" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="https://www.instagram.com/abhisheksoni_12" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </a>
            <a href="mailto:abhisheksoni1207@gmail.com" className="transition-transform hover:scale-110">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Services Highlight Section */}
      <motion.div 
        variants={itemVariants} 
        className="max-w-4xl mx-auto mt-24 mb-24 glass-effect p-8 rounded-xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text text-center">Available for Freelance Projects</h2>
        <p className="text-center mb-6 text-muted-foreground">
          I build custom web applications, design stunning interfaces, and develop robust backend solutions.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="service-item text-center p-4">
            <div className="icon-circle bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
            </div>
            <h3 className="font-bold mb-2">Web Development</h3>
            <p className="text-sm text-muted-foreground">React, Next.js, and custom solutions</p>
          </div>
          
          <div className="service-item text-center p-4">
            <div className="icon-circle bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M4 12h16"></path>
                <path d="M4 12a2 2 0 0 0 2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"></path>
                <path d="M4 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 1 2-2"></path>
              </svg>
            </div>
            <h3 className="font-bold mb-2">API Integration</h3>
            <p className="text-sm text-muted-foreground">Backend development and data handling</p>
          </div>
          
          <div className="service-item text-center p-4">
            <div className="icon-circle bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </div>
            <h3 className="font-bold mb-2">UI/UX Design</h3>
            <p className="text-sm text-muted-foreground">Beautiful, functional interfaces</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="gap-2">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className=" bottom-4 mt-3 left-1/2 justify-center transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col justify-center items-center w-full">
          <span className="justify-center  text-muted-foreground italic font-serif mb-2">Innovation is the art of turning imagination into reality through technology</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
