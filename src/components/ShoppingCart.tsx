import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ChevronRight, X } from 'lucide-react';

export function ShoppingCart() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-950 border-l border-white/5 z-[70] p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#e0d8d0] rounded-full flex items-center justify-center text-black">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold uppercase tracking-tight italic">Your Selections</h2>
                    <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">3 Items — Seasonal Ready</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors opacity-50 hover:opacity-100">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {[1, 2, 3].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-3xl bg-white/5 border border-white/5"
                  >
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-zinc-900">
                      <img src={`https://picsum.photos/seed/food${i}/200/200`} alt="Food" referrerPolicy="no-referrer" className="opacity-80 grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-tight italic text-[#e0d8d0]">Artisan Choice {i + 1}</h4>
                        <p className="text-zinc-600 text-[9px] uppercase font-bold tracking-widest mt-1">Quantity: 01</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#ff4e00] font-bold text-sm">$24.00</span>
                        <div className="flex items-center gap-3">
                          <button className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center text-[10px] hover:bg-white/10 transition-colors">-</button>
                          <span className="text-[10px] font-bold">1</span>
                          <button className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center text-[10px] hover:bg-white/10 transition-colors">+</button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-8 left-8 right-8 space-y-4">
                <div className="flex items-center justify-between pt-6 border-t border-white/10 text-zinc-600 font-bold uppercase tracking-widest text-[10px]">
                  <span>Subtotal</span>
                  <span>$72.00</span>
                </div>
                <div className="flex items-center justify-between text-2xl font-bold uppercase tracking-tight">
                  <span className="italic">Total</span>
                  <span className="text-[#ff4e00]">$78.50</span>
                </div>
                <button className="w-full bg-[#e0d8d0] text-black py-5 rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-[#ff4e00] hover:text-white transition-all group active:scale-[0.98]">
                  Finalize Order <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 1 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#ff4e00] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#ff4e00]/20 z-50 hover:scale-110 active:scale-95 transition-transform group"
      >
        <ShoppingBag size={24} />
        <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#e0d8d0] text-black text-[10px] font-black rounded-full flex items-center justify-center border-2 border-[#ff4e00]">3</span>
      </motion.button>
    </>
  );
}
