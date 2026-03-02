import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

// Animated sphere with wireframe
function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      wireframeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* Main sphere */}
        <mesh ref={meshRef} scale={1.2}>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial
            color="#1a1a3e"
            emissive="#4f46e5"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Wireframe overlay */}
        <mesh ref={wireframeRef} scale={1.22}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshBasicMaterial
            color="#6366f1"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Orbiting cloud provider icons
function OrbitingIcons() {
  const groupRef = useRef<THREE.Group>(null);
  
  const icons = useMemo(() => [
    { color: '#FF9900', name: 'AWS' },
    { color: '#0089D6', name: 'Azure' },
    { color: '#4285F4', name: 'GCP' },
  ], []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Orbit rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.2, 3.3, 64]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0.3, 0]}>
        <ringGeometry args={[3.5, 3.55, 64]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Orbiting nodes */}
      {icons.map((icon, index) => {
        const angle = (index * Math.PI * 2) / 3;
        const radius = 3.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <Float key={icon.name} speed={3} rotationIntensity={0.3} floatIntensity={0.3}>
            <group position={[x, 0, z]}>
              {/* Glow effect */}
              <mesh>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshBasicMaterial color={icon.color} transparent opacity={0.3} />
              </mesh>
              {/* Main icon sphere */}
              <mesh>
                <sphereGeometry args={[0.35, 32, 32]} />
                <meshStandardMaterial 
                  color={icon.color} 
                  emissive={icon.color}
                  emissiveIntensity={0.5}
                  roughness={0.3}
                  metalness={0.7}
                />
              </mesh>
              {/* Inner core */}
              <mesh>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshBasicMaterial color="#ffffff" />
              </mesh>
            </group>
          </Float>
        );
      })}
    </group>
  );
}

// Particle field
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const { positions, colors } = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;
      
      // Gradient colors from indigo to purple
      const t = Math.random();
      colors[i3] = 0.37 + t * 0.2;     // R
      colors[i3 + 1] = 0.38 + t * 0.1; // G
      colors[i3 + 2] = 0.94 - t * 0.2; // B
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Main Globe Scene
function GlobeScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      <pointLight position={[0, 5, -5]} intensity={0.5} color="#3b82f6" />
      
      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0.5} fade speed={1} />
      
      <AnimatedSphere />
      <OrbitingIcons />
      <ParticleField />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <GlobeScene />
      </Canvas>
    </div>
  );
}
