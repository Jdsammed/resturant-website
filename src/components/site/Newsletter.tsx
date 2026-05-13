import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function Newsletter() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("nl-seen")) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("nl-seen", "1");
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)} className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] w-[92%] max-w-md bg-surface border border-gold/40 rounded-3xl overflow-hidden"
          >
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-gold">
              <X className="w-5 h-5" />
            </button>
            <div className="h-32 gradient-gold grid place-items-center">
              <div className="font-display text-5xl text-black">10% OFF</div>
            </div>
            <div className="p-7 text-center">
              <h3 className="font-display text-2xl">Welcome to Spice Garden</h3>
              <p className="mt-2 text-sm text-foreground/70">Subscribe and save 10% on your first online order.</p>
              {done ? (
                <p className="mt-6 text-gold font-medium">Code sent to your inbox ✦</p>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-6 space-y-3">
                  <input required type="email" placeholder="your@email.com"
                    className="w-full bg-background border border-border rounded-full px-5 py-3 text-sm focus:outline-none focus:border-gold/60" />
                  <button className="w-full gradient-gold text-black font-medium py-3 rounded-full">Claim My 10% Off</button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
