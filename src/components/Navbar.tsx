import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter uppercase flex items-center gap-3"
        >
          <div className="w-3 h-3 bg-[#ff4e00] rounded-full shadow-[0_0_12px_#ff4e00]"></div>
          Umami Collective
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Menu', 'Sourcing', 'Chef\'s Table', 'Reserve'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] uppercase tracking-[0.2em] font-semibold opacity-70 hover:opacity-100 hover:text-[#ff4e00] transition-all"
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <button className="p-2 opacity-50 hover:opacity-100 transition-opacity">
          <Search size={18} />
        </button>
        <button className="flex items-center gap-2 group transition-all">
          <ShoppingBag size={18} className="text-[#ff4e00]" />
          <span className="text-[11px] font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100">Cart (3)</span>
        </button>
        <button className="md:hidden p-2">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
