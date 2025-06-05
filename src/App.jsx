import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Loader from '@/components/Loader';
import Home from '@/pages/Home';
import Experience from '@/pages/Experience';
import Projects from '@/pages/Projects';
import ThemeProvider from '@/components/ThemeProvider';
import Canvas3D from '@/components/Canvas3D';
import Milestones from './pages/Milestones';
import Certificate from './pages/Certificate';
import Blogs from './pages/Blogs';
import Services from './pages/Services';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader name="Coading & Coffeing" />;
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen">
          <Canvas3D />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/Milestones" element={<Milestones />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/Certificate" element={<Certificate />} />
              <Route path="/Blogs" element={<Blogs />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </AnimatePresence>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
