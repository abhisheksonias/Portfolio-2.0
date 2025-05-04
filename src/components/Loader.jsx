import React, { useEffect, useState, useRef } from 'react';

const Loader = ({ name }) => {
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const nameChars = name.split('');
  
  // Generate initial particles
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 60 + 220}, ${Math.random() * 40 + 60}%, ${Math.random() * 40 + 50}%)`,
        speed: Math.random() * 1 + 0.5
      });
    }
    setParticles(newParticles);
  }, []);
  
  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Progress timer
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 0.5;
      });
    }, 30);
    
    return () => clearInterval(timer);
  }, []);
  
  // Animation for particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Calculate distance from mouse
          const dx = particle.x - mousePosition.x;
          const dy = particle.y - mousePosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Apply force based on distance (repel particles from mouse)
          let forceX = 0;
          let forceY = 0;
          
          if (distance < 20) {
            const force = (20 - distance) / 10;
            forceX = (dx / distance) * force;
            forceY = (dy / distance) * force;
          }
          
          return {
            ...particle,
            x: ((particle.x + particle.speed + forceX) % 100 + 100) % 100,
            y: ((particle.y + (particle.speed * 0.5) + forceY) % 100 + 100) % 100
          };
        })
      );
      
      requestAnimationFrame(animateParticles);
    };
    
    const animationFrame = requestAnimationFrame(animateParticles);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);
  
  return (
    <div ref={containerRef} className="fixed inset-0 flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              opacity: 0.6
            }}
          />
        ))}
      </div>
      
      {/* 3D rotating cubic frame */}
      <div className="cube-container">
        <div className="cube">
          <div className="cube-face cube-face-front"></div>
          <div className="cube-face cube-face-back"></div>
          <div className="cube-face cube-face-left"></div>
          <div className="cube-face cube-face-right"></div>
          <div className="cube-face cube-face-top"></div>
          <div className="cube-face cube-face-bottom"></div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="text-center w-full max-w-md px-4 z-10 mt-8">
        <div className="loader-container relative inline-block mb-6 mx-auto">
          <h1 className="hero-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl px-3 sm:px-5 md:px-7 lg:px-9 py-3 sm:py-4 md:py-5 lg:py-6 relative z-10">
            {nameChars.map((char, index) => (
              <span 
                key={index} 
                className="char-animate" 
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  color: `hsl(${220 + index * (120 / nameChars.length)}, 70%, 60%)`
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <div className="pulse-ring"></div>
        </div>
        
        {/* Interactive progress bar */}
        <div className="w-full max-w-xs mx-auto mt-10">
          <div className="relative h-2 w-full bg-gray-800 rounded-full overflow-hidden glow-container">
            <div 
              className="h-full transition-all duration-300 ease-out progress-gradient" 
              style={{ width: `${progress}%` }}
            ></div>
            <div className="glow-effect"></div>
          </div>
          
          <div className="flex justify-between items-center mt-3">
            <div className="glitch-text font-mono text-xs sm:text-sm tracking-widest" data-text="LOADING">LOADING</div>
            <div className="digital-counter font-mono text-xs sm:text-sm tracking-widest">{Math.floor(progress)}%</div>
          </div>
          
          {/* Data loading indicators */}
          <div className="data-stats flex justify-between mt-6 text-xs font-mono text-gray-500">
            <div className="data-item">
              <div className="data-label">CACHE</div>
              <div className="data-value text-green-400">{Math.min(100, Math.floor(progress * 1.2))}%</div>
            </div>
            <div className="data-item">
              <div className="data-label">ASSETS</div>
              <div className="data-value text-blue-400">{Math.min(100, Math.floor(progress * 0.8))}%</div>
            </div>
            <div className="data-item">
              <div className="data-label">CONFIG</div>
              <div className="data-value text-purple-400">{progress > 70 ? '✓' : '...'}</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx="true">{`
        .loader-container {
          position: relative;
          width: fit-content;
          backdrop-filter: blur(5px);
          background: rgba(0, 0, 0, 0.3);
          border-radius: 12px;
          border: 1px solid rgba(71, 118, 230, 0.3);
          box-shadow: 0 0 20px rgba(71, 118, 230, 0.2);
        }
        
        .pulse-ring {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 12px;
        }
        
        .pulse-ring::before {
          content: '';
          position: absolute;
          inset: -5px;
          border: 2px solid transparent;
          border-radius: 12px;
          background: linear-gradient(45deg, #4776E6, #8E54E9, #4776E6) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: pulse 2s linear infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .char-animate {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: char-appear 0.5s forwards;
          animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
          text-shadow: 0 0 0px currentColor;
        }
        
        @keyframes char-appear {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .progress-gradient {
          background: linear-gradient(to right, #4776E6, #8E54E9);
          position: relative;
          z-index: 2;
        }
        
        .glow-container {
          position: relative;
          overflow: visible;
        }
        
        .glow-effect {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 30px;
          background: linear-gradient(to right, transparent, rgba(71, 118, 230, 0.8), transparent);
          filter: blur(3px);
          z-index: 1;
          animation: glow-scan 2s ease-in-out infinite;
        }
        
        @keyframes glow-scan {
          0% {
            left: -30px;
          }
          100% {
            left: 100%;
          }
        }
        
        .glitch-text {
          position: relative;
          color: #4776E6;
        }
        
        .glitch-text::before, .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-text::before {
          left: 2px;
          text-shadow: -1px 0 #8E54E9;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }
        
        .glitch-text::after {
          left: -2px;
          text-shadow: -1px 0 #4776E6;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim-2 2s infinite linear alternate-reverse;
        }
        
        @keyframes glitch-anim-1 {
          0% {
            clip: rect(22px, 550px, 59px, 0);
          }
          20% {
            clip: rect(19px, 550px, 16px, 0);
          }
          40% {
            clip: rect(72px, 550px, 31px, 0);
          }
          60% {
            clip: rect(33px, 550px, 66px, 0);
          }
          80% {
            clip: rect(62px, 550px, 62px, 0);
          }
          100% {
            clip: rect(38px, 550px, 1px, 0);
          }
        }
        
        @keyframes glitch-anim-2 {
          0% {
            clip: rect(12px, 550px, 69px, 0);
          }
          20% {
            clip: rect(9px, 550px, 36px, 0);
          }
          40% {
            clip: rect(22px, 550px, 11px, 0);
          }
          60% {
            clip: rect(53px, 550px, 26px, 0);
          }
          80% {
            clip: rect(92px, 550px, 2px, 0);
          }
          100% {
            clip: rect(8px, 550px, 51px, 0);
          }
        }
        
        .digital-counter {
          color: #8E54E9;
          font-weight: bold;
          position: relative;
          background: rgba(0, 0, 0, 0.3);
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid rgba(142, 84, 233, 0.3);
        }
        
        .data-stats {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 6px;
          padding: 6px 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .data-label {
          font-size: 0.7rem;
          margin-bottom: 2px;
        }
        
        .data-value {
          font-weight: bold;
        }
        
        /* 3D Cube Animation */
        .cube-container {
          position: absolute;
          width: 300px;
          height: 300px;
          perspective: 1000px;
          z-index: 0;
          opacity: 0.6;
        }
        
        .cube {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: rotate 20s infinite linear;
        }
        
        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(71, 118, 230, 0.5);
          background: transparent;
          opacity: 0.7;
        }
        
        .cube-face-front {
          transform: translateZ(150px);
        }
        
        .cube-face-back {
          transform: translateZ(-150px) rotateY(180deg);
        }
        
        .cube-face-left {
          transform: translateX(-150px) rotateY(-90deg);
        }
        
        .cube-face-right {
          transform: translateX(150px) rotateY(90deg);
        }
        
        .cube-face-top {
          transform: translateY(-150px) rotateX(90deg);
        }
        
        .cube-face-bottom {
          transform: translateY(150px) rotateX(-90deg);
        }
        
        @keyframes rotate {
          from {
            transform: rotateX(0) rotateY(0);
          }
          to {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
        
        @media (max-width: 640px) {
          .cube-container {
            width: 200px;
            height: 200px;
          }
          
          .cube-face-front {
            transform: translateZ(100px);
          }
          
          .cube-face-back {
            transform: translateZ(-100px) rotateY(180deg);
          }
          
          .cube-face-left {
            transform: translateX(-100px) rotateY(-90deg);
          }
          
          .cube-face-right {
            transform: translateX(100px) rotateY(90deg);
          }
          
          .cube-face-top {
            transform: translateY(-100px) rotateX(90deg);
          }
          
          .cube-face-bottom {
            transform: translateY(100px) rotateX(-90deg);
          }
        }
        
        @media (max-width: 480px) {
          .cube-container {
            width: 150px;
            height: 150px;
          }
          
          .cube-face-front {
            transform: translateZ(75px);
          }
          
          .cube-face-back {
            transform: translateZ(-75px) rotateY(180deg);
          }
          
          .cube-face-left {
            transform: translateX(-75px) rotateY(-90deg);
          }
          
          .cube-face-right {
            transform: translateX(75px) rotateY(90deg);
          }
          
          .cube-face-top {
            transform: translateY(-75px) rotateX(90deg);
          }
          
          .cube-face-bottom {
            transform: translateY(75px) rotateX(-90deg);
          }
          
          .data-stats {
            padding: 4px 8px;
          }
          
          .data-label {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;