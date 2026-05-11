import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ShoppingCart, Heart, MoveRight, Star } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 1,
    name: "The Obsidian Ribeye",
    price: "$42",
    rating: 4.9,
    calories: "850 kcal",
    image: "https://picsum.photos/seed/ribeye/600/800",
    color: "from-zinc-900",
    tags: ["Signature", "House Smoked"]
  },
  {
    id: 2,
    name: "Golden Tofu Saffron",
    price: "$28",
    rating: 4.7,
    calories: "420 kcal",
    image: "https://picsum.photos/seed/tofu/600/800",
    color: "from-orange-900",
    tags: ["Vegan", "Gluten-Free"]
  },
  {
    id: 3,
    name: "Velvet Salmon Carpaccio",
    price: "$34",
    rating: 4.8,
    calories: "380 kcal",
    image: "https://picsum.photos/seed/salmon/600/800",
    color: "from-blue-900",
    tags: ["Fresh", "Keto"]
  },
  {
    id: 4,
    name: "Truffle Ember Burger",
    price: "$24",
    rating: 5.0,
    calories: "920 kcal",
    image: "https://picsum.photos/seed/burger/600/800",
    color: "from-red-900",
    tags: ["New", "Aged Cheese"]
  },
  {
    id: 5,
    name: "Emerald Basil Linguine",
    price: "$26",
    rating: 4.6,
    calories: "540 kcal",
    image: "https://picsum.photos/seed/pasta/600/800",
    color: "from-emerald-900",
    tags: ["Classic", "Organic"]
  },
  {
    id: 6,
    name: "Cinder Honey Glazed Pear",
    price: "$18",
    rating: 4.9,
    calories: "280 kcal",
    image: "https://picsum.photos/seed/pear/600/800",
    color: "from-pink-900",
    tags: ["Sweet", "Limited Time"]
  }
];

function Card({ item }: { item: typeof MENU_ITEMS[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group bg-zinc-900/50 border border-white/5 rounded-[2rem] overflow-hidden"
    >
      {/* Content for 3D depth */}
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="relative aspect-[3/4] overflow-hidden"
      >
        <img 
          src={item.image} 
          alt={item.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${item.color} via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity`} />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div 
        style={{ transform: "translateZ(70px)" }}
        className="p-6 relative space-y-4"
      >
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold tracking-tight max-w-[70%] leading-tight group-hover:text-[#ff4e00] transition-colors italic">
            {item.name}
          </h3>
          <div className="flex items-center gap-1 text-[#ff4e00]">
            <Star size={12} fill="currentColor" />
            <span className="text-[10px] font-bold tracking-widest">{item.rating}</span>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-zinc-600 text-[9px] uppercase font-bold tracking-[0.2em] mb-1">Price</p>
            <p className="text-2xl font-light italic text-[#e0d8d0]">{item.price}</p>
          </div>
          <button className="h-10 w-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#ff4e00] hover:text-white transition-all active:scale-95 shadow-xl shadow-black/40">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
      
      {/* Reflection Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-br from-white via-transparent to-transparent -translate-x-full group-hover:translate-x-full duration-1000" />
    </motion.div>
  );
}

export function MenuGrid() {
  return (
    <section id="menu" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#ff4e00] font-bold uppercase tracking-widest text-[10px]">
              <span className="w-8 h-[1px] bg-[#ff4e00]" />
              Seasonal Menu
            </div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] italic">
              The Tasting <br /><span className="text-white not-italic underline decoration-[#ff4e00] decoration-4 underline-offset-8">Selections</span>
            </h2>
          </div>
          <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e0d8d0] opacity-50 hover:opacity-100 transition-opacity group">
            Full Inventory <MoveRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
