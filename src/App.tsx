/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuGrid } from './components/MenuGrid';
import { CategoryNav } from './components/CategoryNav';
import { ShoppingCart } from './components/ShoppingCart';
import { Footer } from './components/Footer';

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0502] text-[#e0d8d0] selection:bg-[#ff4e00] selection:text-white antialiased">
      <Navbar />
      <main ref={scrollRef}>
        <Hero />
        <CategoryNav />
        <MenuGrid />
        <Footer />
      </main>
      <ShoppingCart />
    </div>
  );
}
