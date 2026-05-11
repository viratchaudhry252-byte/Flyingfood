import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { MeshWobbleMaterial, MeshDistortMaterial } from '@react-three/drei';

export function BurgerModel({ ...props }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scroll } = useThree() as any; // This would require a scroll state, but I'll use standard window scroll for simplicity
  
  const ingredients = useMemo(() => [
    { name: 'bottom_bun', color: '#8B4513', height: 0.15, radius: 1, offset: -0.5, spread: -2 },
    { name: 'patty', color: '#4B2612', height: 0.15, radius: 0.95, offset: -0.3, spread: -1 },
    { name: 'cheese', color: '#FFD700', height: 0.02, radius: 0.95, offset: -0.15, spread: 0 },
    { name: 'sauce', color: '#FF4500', height: 0.01, radius: 0.9, offset: -0.1, spread: 0.5 },
    { name: 'lettuce', color: '#228B22', height: 0.05, radius: 1.05, offset: -0.05, spread: 1 },
    { name: 'tomato', color: '#FF0000', height: 0.08, radius: 0.8, offset: 0.1, spread: 2 },
    { name: 'top_bun', color: '#8B4513', height: 0.3, radius: 1, offset: 0.4, spread: 3 },
  ], []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Get scroll progress (0 to 1) for the first screen
    const scrollY = window.scrollY;
    const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
    
    // Smooth bobbing
    groupRef.current.position.y = -0.5 + Math.sin(t) * 0.05;
    
    // Interactive Exploded View
    groupRef.current.children.forEach((child, i) => {
      // Each layer is a mesh or group
      if (i >= ingredients.length) return; // Skip non-ingredient children like seeds
      
      const ing = ingredients[i];
      const targetY = ing.offset + (scrollProgress * ing.spread * 0.8);
      
      // Internal bobbing for extra "floaty" feel
      const float = Math.sin(t + i) * 0.02;
      
      child.position.y = THREE.MathUtils.lerp(child.position.y, targetY + float, 0.1);
      child.rotation.y = THREE.MathUtils.lerp(child.rotation.y, scrollProgress * Math.PI * 0.5, 0.1);
    });
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {ingredients.map((ing, i) => (
        <mesh 
          key={ing.name} 
          position={[0, ing.offset, 0]}
          castShadow
          receiveShadow
        >
          {ing.name === 'top_bun' ? (
            <sphereGeometry args={[ing.radius, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          ) : (
            <cylinderGeometry args={[ing.radius, ing.radius, ing.height, 48]} />
          )}
          
          <meshStandardMaterial 
            color={ing.color} 
            roughness={ing.name === 'sauce' ? 0.05 : ing.name.includes('bun') ? 0.7 : 0.4}
            metalness={ing.name === 'sauce' ? 0.6 : ing.name === 'cheese' ? 0.2 : 0.1}
            emissive={ing.name === 'cheese' ? '#221100' : ing.name === 'sauce' ? '#330000' : '#000000'}
            emissiveIntensity={0.2}
          />
          
          {ing.name === 'lettuce' && (
            <MeshWobbleMaterial factor={0.3} speed={1.5} color={ing.color} roughness={0.6} />
          )}
          
          {ing.name === 'patty' && (
            <MeshDistortMaterial factor={0.15} speed={2} color={ing.color} roughness={0.8} />
          )}
        </mesh>
      ))}
      
      {/* Sesame Seeds move with top bun */}
      <group>
         {[...Array(24)].map((_, i) => (
           <mesh 
             key={i} 
             position={[
               Math.cos(i * 1.5) * 0.6, 
               0.6 + Math.random() * 0.1, 
               Math.sin(i * 1.5) * 0.6
             ]}
             rotation={[Math.random(), Math.random(), Math.random()]}
           >
             <boxGeometry args={[0.02, 0.06, 0.02]} />
             <meshStandardMaterial color="#F5DEB3" roughness={1} />
           </mesh>
         ))}
      </group>
    </group>
  );
}
