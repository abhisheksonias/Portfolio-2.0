
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from '@/components/ThemeProvider';
import { Stars, OrbitControls } from '@react-three/drei';

const ParticleField = ({ count = 2000, theme }) => {
  const mesh = useRef();
  const particles = useRef([]);
  
  // Generate particles once
  useEffect(() => {
    particles.current = Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ],
      speed: Math.random() * 0.01,
      size: Math.random() * 0.05 + 0.01
    }));
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    
    const positions = mesh.current.geometry.attributes.position.array;
    
    for (let i = 0; i < particles.current.length; i++) {
      const i3 = i * 3;
      const particle = particles.current[i];
      
      // Simple movement
      positions[i3 + 1] += particle.speed;
      
      // Reset position when particle goes too far
      if (positions[i3 + 1] > 10) {
        positions[i3 + 1] = -10;
      }
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.current.length}
          array={new Float32Array(particles.current.flatMap(p => p.position))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        sizeAttenuation={true} 
        color={theme === 'dark' ? '#4776E6' : '#8E54E9'} 
        transparent 
        opacity={0.6}
      />
    </points>
  );
};

const FloatingSphere = ({ position, color, size = 1 }) => {
  const mesh = useRef();
  
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    
    const t = clock.getElapsedTime() * 0.5;
    mesh.current.position.y = position[1] + Math.sin(t) * 0.5;
    mesh.current.rotation.x = t * 0.2;
    mesh.current.rotation.z = t * 0.2;
  });
  
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.3}
        metalness={0.8}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const Scene = () => {
  const { theme } = useTheme();
  
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <ParticleField theme={theme} />
      
      {theme === 'dark' && <Stars radius={100} depth={50} count={1000} factor={4} />}
      
      <FloatingSphere 
        position={[-5, 0, -5]} 
        color="#4776E6" 
        size={1.5} 
      />
      <FloatingSphere 
        position={[5, 2, -3]} 
        color="#8E54E9" 
        size={1} 
      />
      <FloatingSphere 
        position={[0, -3, -8]} 
        color="#4776E6" 
        size={2} 
      />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        rotateSpeed={0.1}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const Canvas3D = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default Canvas3D;
