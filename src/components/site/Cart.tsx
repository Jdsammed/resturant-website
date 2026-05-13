import { ShoppingBag, X, Plus, Minus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/store/cart";

export function CartFab() {
  const { count, subtotal, setOpen } = useCart();
  const c = count();
  if (c === 0) return null;
  return (
    <motion.button
      initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      onClick={() => setOpen(true)}
      className="fixed bottom-6 right-6 z-40 gradient-gold text-black font-medium px-5 py-3.5 rounded-full shadow-[0_15px_40px_-10px_oklch(0.76_0.13_78/0.7)] flex items-center gap-3"
    >
      <ShoppingBag className="w-4 h-4" />
      <span className="text-sm">View Cart ({c}) — ₹{subtotal()}</span>
    </motion.button>
  );
}

export function CartDrawer() {
  const { open, setOpen, items, setQty, remove, subtotal, clear } = useCart();
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
          <motion.aside
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] z-50 bg-surface border-l border-gold/30 flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-border">
              <h3 className="font-display text-2xl text-gold">Your Cart</h3>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-gold">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 && <p className="text-center text-muted-foreground py-12">Your cart is empty.</p>}
              {items.map((i) => (
                <div key={i.id} className="flex gap-3 bg-background/50 rounded-xl p-3 border border-border">
                  <img src={i.image} alt={i.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between gap-2">
                      <div className="font-medium text-sm">{i.name}</div>
                      <button onClick={() => remove(i.id)} className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-gold text-sm mt-0.5">₹{i.price}</div>
                    <div className="mt-2 flex items-center gap-2 bg-background border border-border rounded-full w-fit px-1 py-0.5">
                      <button onClick={() => setQty(i.id, i.qty - 1)} className="w-6 h-6 grid place-items-center text-gold"><Minus className="w-3 h-3" /></button>
                      <span className="text-xs w-5 text-center">{i.qty}</span>
                      <button onClick={() => setQty(i.id, i.qty + 1)} className="w-6 h-6 grid place-items-center text-gold"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {items.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-display text-2xl text-gold">₹{subtotal()}</span>
                </div>
                <button className="w-full gradient-gold text-black font-medium py-3 rounded-full">Proceed to Order</button>
                <button onClick={clear} className="w-full text-xs text-muted-foreground hover:text-destructive uppercase tracking-wider">Clear cart</button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
