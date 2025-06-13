import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Calendar,
  MessageSquare,
  Star,
  Code,
  Layout,
  Database,
  ShoppingCart,
  Bot,
  PenTool,
  FileCode,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";
import ReviewForm from "../components/ReviewForm";
const Services = () => {
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

  const servicesOffered = [
    {
      title: "Web Development",
      description:
        "Custom websites built with modern frameworks like React, Next.js, or classic HTML/CSS/JS for maximum performance and SEO.",
      icon: <Code className="h-10 w-10 mb-4 text-primary" />,
      features: [
        "Responsive design",
        "SEO optimization",
        "Fast loading times",
        "Interactive UI",
      ],
    },
    {
      title: "API Integration & Backend",
      description:
        "Robust backend solutions using Node.js, Express, with database integration via Supabase, Firebase or MongoDB.",
      icon: <Database className="h-10 w-10 mb-4 text-primary" />,
      features: [
        "RESTful API development",
        "Authentication systems",
        "Real-time data sync",
        "Cloud deployment",
      ],
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Custom online stores with seamless payment processing, inventory management, and user-friendly interfaces.",
      icon: <ShoppingCart className="h-10 w-10 mb-4 text-primary" />,
      features: [
        "Secure payment gateways",
        "Product catalog",
        "Order management",
        "Customer accounts",
      ],
    },
    {
      title: "AI Chatbot Integration",
      description:
        "Implement intelligent chatbots and AI solutions to enhance customer service and automate repetitive tasks.",
      icon: <Bot className="h-10 w-10 mb-4 text-primary" />,
      features: [
        "GPT integration",
        "Custom training",
        "Conversation design",
        "Analytics dashboard",
      ],
    },
    {
      title: "Full-Stack Project Delivery",
      description:
        "End-to-end project implementation from concept to deployment with comprehensive documentation.",
      icon: <FileCode className="h-10 w-10 mb-4 text-primary" />,
      features: [
        "Requirements analysis",
        "Architecture design",
        "Complete implementation",
        "Deployment & CI/CD",
      ],
    },
    {
      title: "UI/UX Design & Prototyping",
      description:
        "Create visually stunning and intuitive user interfaces with a focus on user experience and conversion.",
      icon: <PenTool className="h-10 w-10 mb-4 text-primary" />,
      features: [
        "Wireframing",
        "Interactive prototypes",
        "User testing",
        "Design systems",
      ],
    },
  ];

  const packages = [
    {
      name: "Starter",
      //   price: "₹5,000",
      description: "Perfect for small businesses needing an online presence",
      features: [
        "Responsive static website",
        "Up to 5 pages",
        "Basic SEO",
        "Contact form",
        "1 round of revisions",
      ],
    },
    {
      name: "Pro",
      //   price: "₹25,000+",
      description: "For businesses needing dynamic functionality",
      features: [
        "Dynamic web application",
        "CMS integration",
        "User authentication",
        "Custom features",
        "3 rounds of revisions",
        "6 month support",
      ],
    },
    {
      name: "Premium",
      //   price: "₹50,000+",
      description: "Complete solution for complex web platforms",
      features: [
        "Full-stack application",
        "Custom backend development",
        "API integrations",
        "Database design",
        "Complete documentation",
        "1 year support",
      ],
    },
  ];

  const workProcess = [
    {
      title: "Requirement Discussion",
      description:
        "We start with a thorough discussion to understand your needs, goals, and vision.",
      icon: <MessageSquare className="h-8 w-8" />,
    },
    {
      title: "Proposal & Timeline",
      description:
        "After analyzing requirements, I provide a detailed proposal with cost and timeline.",
      icon: <FileCode className="h-8 w-8" />,
    },
    {
      title: "Development Phase",
      description:
        "I work iteratively, providing regular updates and keeping you involved throughout.",
      icon: <Code className="h-8 w-8" />,
    },
    {
      title: "Review & Testing",
      description:
        "Comprehensive testing and review to ensure everything works as expected.",
      icon: <Check className="h-8 w-8" />,
    },
    {
      title: "Delivery & Support",
      description:
        "Final delivery with documentation and continued support as per agreement.",
      icon: <Workflow className="h-8 w-8" />,
    },
  ];
  // Add state to toggle review form visibility
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 pt-32 pb-20"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          From Idea to Launch — Seamlessly
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Whether you need a portfolio, a product MVP, or an entire platform, we
          will bring your vision to life with clean code and creative thinking.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="px-8 gap-2">
            <Calendar className="h-5 w-5" />
            Book a Free Call
          </Button>
          <Button size="lg" variant="outline" className="px-8 gap-2">
            Get a Quote
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </motion.div>

      {/* Services Offered */}
      <motion.section variants={containerVariants} className="mb-24">
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
          >
            Services Offered
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Professional solutions tailored to your specific needs and business
            goals
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesOffered.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card glass-effect p-6 rounded-xl"
              whileHover={{ y: -10 }}
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Packages / Pricing */}
      <motion.section variants={containerVariants} className="mb-24">
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
          >
            Packages & Pricing
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Transparent pricing options to fit different needs and budgets
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="pricing-card glass-effect p-6 rounded-xl flex flex-col"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold mb-2 text-primary">
                {pkg.price}
              </div>
              <p className="text-muted-foreground mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-auto">Get Started</Button>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <p className="text-xl mb-6">
            Need a custom solution? Let's discuss your project requirements.
          </p>
          <Button size="lg" className="gap-2">
            Contact for a Custom Quote
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </motion.section>

      {/* How I Work / Process */}
      <motion.section variants={containerVariants} className="mb-24">
        <div className="text-center mb-12">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
          >
            How We Work
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A streamlined process designed for efficiency and transparency
          </motion.p>
        </div>

        {/* Modern Process Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/40 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {workProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row items-start"
                whileHover={{ scale: 1.01 }}
              >
                {/* Timeline marker */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary shadow-lg shadow-primary/20 flex items-center justify-center z-10 transform -translate-x-1/2 translate-y-1">
                  <span className="text-sm font-bold text-white">{index + 1}</span>
                </div>
                
                {/* Content card */}
                <div className={`glass-effect rounded-xl p-6 ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>      {/* Client Testimonials */}
      <motion.section variants={containerVariants} className="mb-24">
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Don't just take my word for it - here's what my clients have to say
          </motion.p>
        </div>        {/* Display reviews from database */}
        <ReviewsList />

        {/* Leave a Review Section */}
        <div className="mt-20 text-center">
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Worked With Me? Leave a Review
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Your feedback helps me improve and helps others make informed decisions
          </motion.p>
          
          {!showReviewForm ? (
            <motion.div variants={itemVariants}>
              <Button 
                onClick={() => setShowReviewForm(true)} 
                size="lg"
                className="mx-auto"
              >
                Share Your Experience
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <ReviewForm />
              <div className="mt-4 text-center">
                <Button 
                  variant="ghost" 
                  onClick={() => setShowReviewForm(false)}
                  size="sm"
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Contact / Inquiry Form */}
      <motion.section variants={containerVariants} className="mb-24">
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
          >
            Let's Discuss Your Project
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Fill out the form below and I'll get back to you within 24 hours
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 glass-effect p-8 rounded-xl"
          >
            <div className="form-group">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md border bg-background/50"
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border bg-background/50"
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="project-type"
                className="block text-sm font-medium mb-2"
              >
                Project Type
              </label>
              <select
                id="project-type"
                className="w-full px-4 py-2 rounded-md border bg-background/50"
              >
                <option value="">Select Project Type</option>
                <option value="website">Website Development</option>
                <option value="webapp">Web Application</option>
                <option value="ecommerce">E-Commerce</option>
                <option value="api">API Development</option>
                <option value="ai">AI Integration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label
                htmlFor="budget"
                className="block text-sm font-medium mb-2"
              >
                Budget Range
              </label>
              <select
                id="budget"
                className="w-full px-4 py-2 rounded-md border bg-background/50"
              >
                <option value="">Select Budget Range</option>
                <option value="5k-10k">₹5,000 - ₹10,000</option>
                <option value="10k-25k">₹10,000 - ₹25,000</option>
                <option value="25k-50k">₹25,000 - ₹50,000</option>
                <option value="50k-100k">₹50,000 - ₹100,000</option>
                <option value="100k+">₹100,000+</option>
              </select>
            </div>

            <div className="form-group md:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Project Details
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 rounded-md border bg-background/50 h-32"
                placeholder="Please describe your project needs and timeline..."
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-end">
              <Button type="submit" size="lg" className="gap-2">
                Let's Talk
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.form>
        </div>
      </motion.section>

      {/* Call to Action Footer */}
      <motion.section variants={itemVariants} className="text-center">
        <div className="cta-section glass-effect p-12 rounded-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have an idea? Let's build it together.
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Turn your vision into reality with custom development solutions
            tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="px-8 gap-2">
              <Calendar className="h-5 w-5" />
              Book a Call
            </Button>
            <Button size="lg" variant="outline" className="px-8 gap-2" asChild>
              <a href="mailto:abhisheksoni1207@gmail.com">
                <MessageSquare className="h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Services;
