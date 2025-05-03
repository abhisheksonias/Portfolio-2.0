import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Milestones = () => {

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
        My Achievements journey.
      </motion.p>
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
  );

}
export default Milestones;    