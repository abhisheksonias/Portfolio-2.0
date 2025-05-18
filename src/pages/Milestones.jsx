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
        "Secured a Top 5 finalist position for developing a realtime crime reporting application name as Satarksetu.",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      title: "Finalist",
      organization: "HackCBS 7.0",
      year: "March 2023",
      website: "https://hackcbs.tech/",
      description:
        "Built a decentralized solution to track the supply chain of medicine and prevent counterfeiting; selected among top finalists.",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      title: "Best UI/UX Design Winnwer",
      organization: "Postman API Challenge",
      year: "October 2024",
      website: "https://lu.ma/askmv35v",
      description:
        "Won Best UI/UX for an application during Postman APIs challenge.",
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
        "Selected as finalist in Intellify 1.0 for developing an IoT-based smart parking system to optimize campus parking.",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
  ];

  const leadership = [
    {
      title: "Microsoft Learn Student Ambassador (Beta-MLSA)",
      organization: "Microsoft",
      year: "2024–Present",
      description:
        "Actively promoting technical learning and organizing events under the Microsoft Learn platform.",
    },
    {
      title: "Vice-President",
      organization: "MU Art Club",
      year: "2024–Present",
      description:
        "Leading creative initiatives, organizing art events, and supporting cultural development on campus.",
    },
    {
      title: "Main Co-ordinator",
      organization: "MU Fest 2025",
      year: "2025",
      description:
        "Led the complete planning and execution of fest decoration, ensuring a vibrant and engaging atmosphere across the campus.",
    },
    {
      title: "Volunteer",
      organization: "IEEE Industry Conclave 4.0",
      year: "2024",
      description:
        "Assisted in event coordination and logistics for a large-scale industry-academia collaboration event.",
    },

    {
      title: "Volunteer",
      organization: "MU Fest 2024",
      year: "2024",
      description:
        "Contributed to the successful execution of cultural and technical events during the university fest.",
    },
  ];

  const publication = [
    {
      title: "Patent Published: Vruksham – Smart Herbal Health System",
      journal: "Indian Patent Journal",
      year: "March 2025",
      description: "Published patent for Vruksham, an AI-powered Ayurvedic health system integrating plant recognition, dosha analysis, and smart recommendations.",
    },
  ];

  const extra = [
    {
      title: "Fine Art Participant",
      event: "AIU West Zone",
      year: "2025", // You can update the year
      description: "Represented the university in the Fine Arts category at the AIU West Zone cultural meet.",
    },
    {
      title: "Winner",
      event: "Human Pyramid Competition",
      year: "2023", // You can update the year
      description: "Secured first place in the Human Pyramid competition showcasing teamwork and coordination.",
    },
  ];

  const workshops = [
    {
      title: "Introduction to Microsoft Azure",
      role: "Workshop Lead",
      year: "Year not specified", // You can update the year
      description: "Led a hands-on workshop introducing students to the fundamentals of Microsoft Azure and its cloud services.",
    },
    {
      title: "Git & GitHub Hands-on Session",
      role: "Organizer",
      year: "Year not specified", // You can update the year
      description: "Organized and facilitated a practical session to help participants understand version control using Git and GitHub.",
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
        My Milestones are a testament to my dedication and achievements
        throughout my educational journey.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">Hackathon</h2>
          <div className="space-y-8">
            {Hackathons.map((Hack, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="glass-effect rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{Hack.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {Hack.period}
                    </span>
                  </div>
                  <p className="text-primary mb-2">
                    <a
                      href={Hack.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Hack.organization}
                    </a>
                  </p>
                  <p className="text-muted-foreground">{Hack.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">Leadership & Campus Involvement</h2>
          <div className="space-y-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="glass-effect rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{leader.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {leader.period}
                    </span>
                  </div>
                  <p className="text-primary mb-2">
                    <a
                      href={leader.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {leader.organization}
                    </a>
                  </p>
                  <p className="text-muted-foreground">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">Extracurricular Achievements</h2>
          <div className="space-y-8">
            {extra.map((extra, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="glass-effect rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{extra.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {extra.year}
                    </span>
                  </div>
                  <p className="text-primary mb-2">
                    {/* <a
                      href={pub.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    </a> */}
                      {extra.event}
                  </p>
                  <p className="text-muted-foreground">{extra.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">Workshop and Event organization</h2>
          <div className="space-y-8">
            {workshops.map((work, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="glass-effect rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{work.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {work.year}
                    </span>
                  </div>
                  <p className="text-primary mb-2">
                    {/* <a
                      href={pub.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    </a> */}
                      {work.role}
                  </p>
                  <p className="text-muted-foreground">{work.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-2xl font-bold mb-6"> Patents & Publications</h2>
          <div className="space-y-8">
            {publication.map((pub, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="glass-effect rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{pub.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {pub.year}
                    </span>
                  </div>
                  <p className="text-primary mb-2">
                    {/* <a
                      href={pub.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    </a> */}
                      {pub.journal}
                  </p>
                  <p className="text-muted-foreground">{pub.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </motion.div>
  );
};
export default Milestones;
