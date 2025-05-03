
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: "Backend Developer",
      company: "Mentorle",
      period: "April 2025 - Present",
      description: "As a Backend Developer, I design and implement robust server-side logic, APIs, and databases to support seamless functionality and high-performance applications. Using languages like Node.js, Python, and Java, I ensure smooth data flow and integration with frontend systems. I focus on optimizing server performance, enhancing security, and ensuring scalability for future growth.",
      icon: <Briefcase className="h-6 w-6 text-primary" />
    },
    {
      title: "Web Developer",
      company: "Rajasthan Tour Advisor",
      period: "September 2023 - February 2024",
      description: "I focus on building user-friendly interfaces, converting design mockups into responsive web pages using frontend technologies, improving user experience by 40%. I act as a liaison between the development team and clients, gathering requirements and updating progress on 5+ projects. Additionally, I provide technical support, resolving client issues within 24 hours and maintaining a 95% satisfaction rate.",
      icon: <Briefcase className="h-6 w-6 text-primary" />
    },
    {
      title: "Digital Marketing Intern",
      company: "BucketlistX",
      period: "June 2023 - August 2023",
      description: "I create engaging content across platforms, driving 30%+ increase in engagement through consistent brand messaging and performance tracking. I also build community relationships, increasing brand awareness by 25% through targeted events and partnerships.",
      icon: <Briefcase className="h-6 w-6 text-primary" />
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      institution: "Marwadi University",
      period: "2022 - Present",
      description: "Specializing in Artificial Intelligence and Machine Learning." ,
      CGPA: "CGPA: 7.18/10",
      icon: <GraduationCap className="h-6 w-6 text-primary" />
    }, 
    // {
    //   degree: "Bachelor of Engineering",
    //   institution: "Marwadi University",
    //   period: "2022 - Present",
    //   description: "Specializing in Artificial Intelligence and Machine Learning." ,
    //   CGPA: "CGPA: 7.18/10",
    //   icon: <GraduationCap className="h-6 w-6 text-primary" />
    // } 
  ];

  const achievements = [
    {
      title: "Hackathon - 1st Runner Up",
      organization: "Hack The Mountains",
      year: "September 2024",
      description: "Participated in a HTM 5.0 , In the healthcare track, the team developed an innovative Ayurveda-based healthcare app designed to be a one-stop solution for all Ayurvedic needs.",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      title: "Dean's List",
      organization: "University of Technology",
      year: "2022-2023",
      description: "Recognized for academic excellence for three consecutive semesters.",
      icon: <Award className="h-6 w-6 text-primary" />
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
        Experience
      </motion.h1>
      <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-12 max-w-2xl">
        My professional journey & Education.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="glass-effect rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="glass-effect rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-primary mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                  <p className="text-primary mt-2">{edu.CGPA}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-12">Achievements</h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="glass-effect rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <span className="text-sm text-muted-foreground">{achievement.year}</span>
                  </div>
                  <p className="text-primary mb-2">{achievement.organization}</p>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
