import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, Flame } from "lucide-react";
import { dishes, type Dish, type Category } from "@/data/dishes";
import { useCart } from "@/store/cart";

const CATS: ("All" | Category)[] = ["All", "Starters", "Mains", "Biryani", "Breads", "Desserts", "Drinks"];
const FILTERS = ["Veg Only", "Non-Veg", "Bestsellers", "Spicy"] as const;
type Filter = typeof FILTERS[number];

function VegBadge({ veg }: { veg: boolean }) {
  return (
    <span className={`inline-grid place-items-center w-4 h-4 border ${veg ? "border-veg" : "border-nonveg"}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${veg ? "bg-veg" : "bg-nonveg"}`} />
    </span>
  );
}

function Spice({ level }: { level: 1 | 2 | 3 }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-gold/80">
      {[...Array(level)].map((_, i) => <Flame key={i} className="w-3 h-3 fill-gold/60 text-gold/60" />)}
    </span>
  );
}

function Card({ d }: { d: Dish }) {
  const { items, add, setQty } = useCart();
  const inCart = items.find((i) => i.id === d.id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-surface rounded-2xl overflow-hidden border border-border hover:border-gold/40 transition-all"
    >
      {d.bestseller && (
        <div className="absolute top-3 left-0 z-10 gradient-gold text-black text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-r-full">
          Bestseller
        </div>
      )}
      {d.isNew && !d.bestseller && (
        <div className="absolute top-3 left-0 z-10 bg-veg text-black text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-r-full">
          New
        </div>
      )}
      <div className="aspect-[4/3] overflow-hidden">
        <img src={d.image} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <VegBadge veg={d.veg} />
              <h3 className="font-display text-xl">{d.name}</h3>
            </div>
            {d.hindi && <p className="text-xs text-muted-foreground mt-0.5">{d.hindi}</p>}
          </div>
          <div className="font-display text-xl text-gold whitespace-nowrap">₹{d.price}</div>
        </div>
        <p className="mt-3 text-sm text-foreground/65 leading-relaxed line-clamp-2">{d.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <Spice level={d.spice} />
          {inCart ? (
            <div className="flex items-center gap-3 bg-background border border-gold/40 rounded-full px-1 py-1">
              <button onClick={() => setQty(d.id, inCart.qty - 1)} className="w-7 h-7 grid place-items-center rounded-full text-gold hover:bg-gold/10">
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-sm w-5 text-center">{inCart.qty}</span>
              <button onClick={() => setQty(d.id, inCart.qty + 1)} className="w-7 h-7 grid place-items-center rounded-full text-gold hover:bg-gold/10">
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button onClick={() => add(d)} className="text-xs uppercase tracking-[0.2em] text-gold border border-gold/40 rounded-full px-4 py-2 hover:bg-gold hover:text-black transition">
              Add +
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Menu() {
  const [cat, setCat] = useState<"All" | Category>("All");
  const [q, setQ] = useState("");
  const [filters, setFilters] = useState<Set<Filter>>(new Set());

  const toggle = (f: Filter) => {
    const n = new Set(filters);
    n.has(f) ? n.delete(f) : n.add(f);
    setFilters(n);
  };

  const list = useMemo(() => {
    return dishes.filter((d) => {
      if (cat !== "All" && d.category !== cat) return false;
      if (q && !`${d.name} ${d.hindi ?? ""}`.toLowerCase().includes(q.toLowerCase())) return false;
      if (filters.has("Veg Only") && !d.veg) return false;
      if (filters.has("Non-Veg") && d.veg) return false;
      if (filters.has("Bestsellers") && !d.bestseller) return false;
      if (filters.has("Spicy") && d.spice < 3) return false;
      return true;
    });
  }, [cat, q, filters]);

  return (
    <section id="menu" className="py-28 px-6 bg-gradient-to-b from-background via-surface/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/40 text-gold text-[11px] tracking-[0.3em] uppercase">
            The Menu
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl">
            Plates Crafted with <span className="text-gradient-gold italic">Soul</span>
          </h2>
          <p className="mt-4 text-foreground/65">From the tandoor to the table — explore our chef's seasonal offerings.</p>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-5 py-2 rounded-full text-sm tracking-wide border transition ${cat === c ? "bg-gold text-black border-gold" : "border-border text-foreground/70 hover:border-gold/60 hover:text-gold"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search dishes…"
                className="w-full bg-surface border border-border rounded-full pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:border-gold/60" />
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button key={f} onClick={() => toggle(f)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider border transition ${filters.has(f) ? "bg-gold/15 text-gold border-gold/60" : "border-border text-muted-foreground hover:text-gold"}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {list.map((d) => <Card key={d.id} d={d} />)}
          </AnimatePresence>
        </div>
        {list.length === 0 && <p className="text-center mt-16 text-muted-foreground">No dishes match your filters.</p>}
      </div>
    </section>
  );
}
