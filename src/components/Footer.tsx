import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 px-6 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="text-3xl font-bold tracking-tighter flex items-center gap-3">
              <div className="w-3 h-3 bg-[#ff4e00] rounded-full shadow-[0_0_12px_#ff4e00]"></div>
              Umami Collective
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-medium">
              A high-definition culinary movement. Mastering the art of the stack, the sear, and the digital savor.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-zinc-600 hover:text-[#ff4e00] hover:border-[#ff4e00] transition-all">
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'The Kitchen', 'Exhibitions', 'Store', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-orange-500 transition-colors flex items-center gap-2 group">
                    {link} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8">Locations</h4>
            <ul className="space-y-6">
              {[
                { city: 'Tokyo', area: 'Shibuya Sky' },
                { city: 'New York', area: 'Hudson Yards' },
                { city: 'London', area: 'The Shard' },
              ].map(loc => (
                <li key={loc.city}>
                  <p className="text-xs font-black uppercase tracking-tight text-white">{loc.city}</p>
                  <p className="text-zinc-500 text-xs font-medium uppercase mt-1">{loc.area}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8">Newsletter</h4>
            <p className="text-zinc-500 text-xs font-medium uppercase mb-6 leading-relaxed">
              Join the collective for exclusive visual tastes and seasonal reveals.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-[10px] font-bold tracking-widest placeholder:text-zinc-800 focus:outline-none focus:border-[#ff4e00] transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#e0d8d0] text-black px-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#ff4e00] hover:text-white transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
            © 2026 UMAMI COLLECTIVE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Cookie Studio', 'Terms of Art'].map(link => (
              <a key={link} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-700 hover:text-[#ff4e00] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Massive Background Text */}
      <div className="absolute left-0 right-0 bottom-0 pointer-events-none select-none opacity-[0.02] flex justify-center">
         <h2 className="text-[30vw] font-bold tracking-tighter uppercase leading-none translate-y-1/2 italic">
            Umami
         </h2>
      </div>
    </footer>
  );
}
