import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Milestones = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const Hackathons = [
    {
      title: "Top 5 Finalist",
      organization: "Odoo X Mindblend",
      year: "March 2025",
      website: "https://www.odoo.com/event/svnit-hackathon-7404/register",
      description:
        "Recognized for academic excellence for three consecutive semesters.",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      title: "Best UI/UX Design Winnwer",
      organization: "Postman API Challenge",
      year: "October 2024",
      website: "https://lu.ma/askmv35v",
      description:
        "Participated in a HTM 5.0 , In the healthcare track, the team developed an innovative Ayurveda-based healthcare app designed to be a one-stop solution for all Ayurvedic needs.",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      title: "Hackathon - 1st Runner Up",
      organization: "Hack The Mountains",
      year: "September 2024",
      website: "https://hackthemountains.tech",
      description:
        "Participated in a HTM 5.0 , In the healthcare track, the team developed an innovative Ayurveda-based healthcare app designed to be a one-stop solution for all Ayurvedic needs.",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      title: "Finalist",
      organization: "Intellify 1.0",
      year: "March 2023",
      website: "https://www.intellify.marwadiuniversity.ac.in/",
      description:
        "Recognized for academic excellence for three consecutive semesters.",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 pt-32 pb-20"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold mb-2 gradient-text"
      >
        Milestones Board
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-lg text-muted-foreground mb-12 max-w-2xl"
      >
        My Milestones are a testament to my dedication and achievements throughout my educational journey.
      </motion.p>
      <h2 className="text-2xl font-bold mb-6 mt-12">Hackathons</h2>
      <div className="space-y-8">
        {Hackathons.map((achievement, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="timeline-item"
          >
            <div className="glass-effect rounded-lg p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                <span className="text-sm text-muted-foreground">
                  {achievement.year}
                </span>
              </div>
              <p className="text-primary mb-2">
                <a
                  href={achievement.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {achievement.organization}
                </a>
              </p>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default Milestones;
