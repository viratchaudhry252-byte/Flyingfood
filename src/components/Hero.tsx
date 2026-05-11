import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment, Float, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'motion/react';
import { BurgerModel } from './models/BurgerModel';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#3a1510_0%,_transparent_60%)] opacity-40 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_#1a0c05_0%,_transparent_50%)] opacity-60 -z-10" />
      
      <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-12 gap-0 relative z-10">
        {/* Left Column: Editorial Content */}
        <div className="md:col-span-7 flex flex-col justify-center relative pr-12">
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.4em] opacity-30 whitespace-nowrap hidden lg:block">
            EST. 2024 — SEASONAL SELECTION — NO. 42
          </div>

          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#ff4e00] uppercase text-xs font-bold tracking-[0.3em] mb-4 block"
          >
            Chef's Signature
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[100px] lg:text-[132px] leading-[0.88] font-bold tracking-tighter mb-8 italic drop-shadow-2xl"
          >
            The Artisan<br/><span className="text-white not-italic">Stack</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-md text-lg leading-relaxed opacity-80 mb-10 text-[#e0d8d0]"
          >
            A hyper-realistic exploration of texture and flavor. Wagyu A5, smoked gouda, and garden-fresh heirloom greens, layered for maximum sensory impact.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-10"
          >
            <button className="px-10 py-5 bg-[#e0d8d0] text-black font-bold uppercase text-[10px] tracking-widest rounded-full hover:bg-[#ff4e00] hover:text-white transition-all transform hover:scale-105 active:scale-95 pointer-events-auto cursor-pointer">
              Configure Layer
            </button>
            <div className="flex flex-col">
              <span className="text-3xl font-light italic">$42.00</span>
              <span className="text-[10px] uppercase tracking-widest opacity-50">Pre-tax / Seasonal</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Scene */}
        <div className="md:col-span-5 h-[600px] relative mt-12 md:mt-0">
          <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
            <Canvas shadows dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={1} color="#ff4400" />
              
              <Suspense fallback={null}>
                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                  <BurgerModel position={[0.5, -0.5, 0]} rotation={[0, -Math.PI / 6, 0]} scale={0.9} />
                </Float>
                <ContactShadows position={[0.5, -1.8, 0]} opacity={0.3} scale={10} blur={2.5} far={4} />
                <Environment preset="studio" />
              </Suspense>
              
              <OrbitControls 
                enableZoom={false} 
                minPolarAngle={Math.PI / 3} 
                maxPolarAngle={Math.PI / 1.5}
                autoRotate
                autoRotateSpeed={0.3}
              />
            </Canvas>
          </div>

          {/* Annotation Pins */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute top-1/4 -right-4 flex items-center gap-4 z-20 pointer-events-none"
          >
            <div className="w-12 h-[1px] bg-white/30"></div>
            <div className="text-[10px] uppercase tracking-widest leading-tight">
              <span className="text-[#ff4e00] font-bold">01</span><br/>Glazed Brioche
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-1/3 -left-4 flex items-center gap-4 z-20 pointer-events-none"
          >
            <div className="text-[10px] uppercase tracking-widest text-right leading-tight">
              <span className="text-[#ff4e00] font-bold">02</span><br/>Dry-Aged Wagyu
            </div>
            <div className="w-12 h-[1px] bg-white/30"></div>
          </motion.div>

          {/* Interactive Controls Card Overlay */}
          <div className="absolute bottom-0 right-0 w-56 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 z-20 hidden lg:block">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-bold uppercase tracking-tighter opacity-60">360 Viewer</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              </div>
            </div>
            <div className="h-20 flex items-center justify-center border border-dashed border-white/20 rounded-lg">
              <span className="text-[9px] uppercase tracking-widest opacity-20 font-bold">Orbit Active</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-[9px] uppercase tracking-widest font-bold">
              <div className="p-2 bg-white/10 rounded text-center cursor-pointer hover:bg-white/20 transition-colors">Zoom</div>
              <div className="p-2 bg-[#ff4e00] rounded text-center cursor-pointer hover:bg-orange-500 transition-colors text-white">Bite View</div>
            </div>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-6 left-12 right-12 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-40 z-20">
        <div>Materials: PBR Textures / 8K Photorealistic</div>
        <div className="hidden md:block">Environment: Studio Kitchen / 4500K</div>
        <div>Scroll to Explore Composition</div>
      </footer>
    </section>
  );
}
