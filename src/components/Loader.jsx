import React from 'react';

const Loader = ({ name }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="text-center w-full max-w-[90vw] px-4">
        <div className="loader-container relative inline-block mb-6 mx-auto">
          <h1 className="hero-heading text-2xl sm:text-3xl md:text-4xl px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6 relative z-10 text-reveal whitespace-nowrap">
            <span className="text-gradient">{name}</span>
          </h1>
          <div className="snake-loader"></div>
        </div>
      </div>
      
      <style jsx="true">{`
        .loader-container {
          position: relative;
          width: fit-content;
        }
        
        .snake-loader {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .snake-loader::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid transparent;
          border-radius: 4px;
          box-sizing: border-box;
        }
        
        .snake-loader::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          width: 0;
          height: 0;
          border: 2px solid;
          border-color: transparent;
          border-radius: 4px;
          box-sizing: border-box;
          
          border-top-color: #4776E6;
          border-right-color: #8E54E9;
          border-bottom-color: #4776E6;
          border-left-color: #8E54E9;
          
          animation: border-dance 2s linear forwards;
        }
        
        @keyframes border-dance {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          25% {
            width: calc(100% + 4px);
            height: 0;
            opacity: 1;
          }
          50% {
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            opacity: 1;
          }
          75% {
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            opacity: 1;
          }
          100% {
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            opacity: 1;
          }
        }
        
        .text-reveal {
          clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          animation: text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
          animation-delay: 0.5s;
        }
        
        @keyframes text-reveal {
          0% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
        
        .text-gradient {
          background: linear-gradient(to right, #4776E6, #8E54E9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
          animation: text-shimmer 2s ease-in-out infinite alternate;
          background-size: 200% auto;
        }
        
        @keyframes text-shimmer {
          from {
            background-position: 0% center;
          }
          to {
            background-position: 100% center;
          }
        }
        
        @media (max-width: 640px) {
          .snake-loader::after {
            border-width: 1.5px;
          }
        }
        
        @media (max-width: 480px) {
          .snake-loader::after {
            border-width: 1px;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;