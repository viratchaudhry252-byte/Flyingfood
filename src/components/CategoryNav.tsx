import React from 'react';
import { motion } from 'motion/react';
import { Pizza, Coffee, Beef, Leaf, Fish, Cake } from 'lucide-react';

const categories = [
  { name: 'Burgers', icon: Beef, active: true },
  { name: 'Plant-Based', icon: Leaf },
  { name: 'Seafood', icon: Fish },
  { name: 'Artisan Pizza', icon: Pizza },
  { name: 'Pastries', icon: Cake },
  { name: 'Beverages', icon: Coffee },
];

export function CategoryNav() {
  return (
    <div className="w-full bg-black/50 backdrop-blur-xl border-y border-white/5 py-4 sticky top-16 z-40 overflow-x-auto no-scrollbar">
      <div className="container mx-auto px-6 flex items-center justify-between gap-8 min-w-max">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center gap-3 px-4 py-2 rounded-full transition-all group ${
                cat.active ? 'bg-[#ff4e00] text-white shadow-lg shadow-[#ff4e00]/20' : 'text-zinc-500 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={18} className={cat.active ? 'text-white' : 'group-hover:text-[#ff4e00]'} />
              <span className="text-xs font-bold uppercase tracking-widest">{cat.name}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
