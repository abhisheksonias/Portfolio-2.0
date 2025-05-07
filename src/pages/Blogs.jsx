import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blogs = () => {
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

  // Sample blog data - replace with your actual blog posts
  const featuredBlog = {
    id: 1,
    title: "The Future of Web Development with React 19",
    excerpt: "Exploring the latest features in React 19 and how they will revolutionize the way we build web applications in 2025.",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop",
    date: "May 2, 2025",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "JavaScript", "Frontend"]
  };

  const blogs = [
    {
      id: 2,
      title: "Understanding Blockchain Technology: A Beginner's Guide",
      excerpt: "A comprehensive introduction to blockchain technology and its applications beyond cryptocurrencies.",
      coverImage: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1632&auto=format&fit=crop",
      date: "April 28, 2025",
      readTime: "12 min read",
      category: "Blockchain",
      tags: ["Blockchain", "Web3", "Cryptocurrency"]
    },
    {
      id: 3,
      title: "Leveraging AI in Modern Web Applications",
      excerpt: "How to integrate AI capabilities into your web applications to enhance user experience and functionality.",
      coverImage: "https://images.unsplash.com/photo-1677442136019-21780a5a5535?q=80&w=1632&auto=format&fit=crop",
      date: "April 15, 2025",
      readTime: "10 min read",
      category: "Artificial Intelligence",
      tags: ["AI", "Machine Learning", "UX"]
    },
    {
      id: 4,
      title: "Building Responsive Interfaces with TailwindCSS",
      excerpt: "Tips and tricks for creating beautiful, responsive user interfaces using TailwindCSS and modern design principles.",
      coverImage: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=1472&auto=format&fit=crop",
      date: "April 5, 2025",
      readTime: "6 min read",
      category: "UI/UX",
      tags: ["TailwindCSS", "CSS", "Design"]
    },
    {
      id: 5,
      title: "The Art of Writing Clean Code",
      excerpt: "Principles and practices for writing maintainable, scalable, and clean code that your future self will thank you for.",
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop",
      date: "March 22, 2025",
      readTime: "9 min read",
      category: "Programming",
      tags: ["Clean Code", "Best Practices", "Development"]
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
        Blog
      </motion.h1>
      <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-12 max-w-2xl">
        Thoughts, tutorials, and insights about web development, blockchain, and AI.
      </motion.p>

      {/* Featured Blog */}
      <motion.div 
        variants={itemVariants}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
        <div className="glass-effect rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 h-64 lg:h-auto overflow-hidden">
              <img 
                src={featuredBlog.coverImage} 
                alt={featuredBlog.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="lg:col-span-2 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {featuredBlog.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    {featuredBlog.date}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    {featuredBlog.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{featuredBlog.title}</h3>
                <p className="text-muted-foreground mb-5">
                  {featuredBlog.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {featuredBlog.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-muted-foreground px-2 py-1 rounded-full border">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button className="group flex w-full justify-center sm:w-auto" size="sm">
                Read Article
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Blog Grid */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass-effect rounded-xl overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.coverImage} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {blog.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm flex-grow">
                  {blog.excerpt}
                </p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700/20">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    {blog.date}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Newsletter */}
      <motion.div 
        variants={itemVariants}
        className="mt-16 glass-effect rounded-xl p-6 md:p-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to my newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Get notified when I publish new articles and tutorials. No spam, just quality content.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-lg bg-background/50 border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="sm:flex-shrink-0">
              Subscribe
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Blogs;