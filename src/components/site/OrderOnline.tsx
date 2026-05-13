import { Bike, Clock } from "lucide-react";

export function OrderOnline() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-1">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/40 text-gold text-[11px] tracking-[0.3em] uppercase">
            Order Online
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl">Delivered Hot to Your Door</h2>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
          <a href="#" className="bg-background border border-border rounded-2xl p-6 hover:border-gold/50 transition flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Order on</div>
              <div className="font-display text-3xl text-gold mt-1">Zomato</div>
            </div>
            <span className="text-gold text-2xl">→</span>
          </a>
          <a href="#" className="bg-background border border-border rounded-2xl p-6 hover:border-gold/50 transition flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Order on</div>
              <div className="font-display text-3xl text-gold mt-1">Swiggy</div>
            </div>
            <span className="text-gold text-2xl">→</span>
          </a>
          <div className="sm:col-span-2 flex flex-wrap gap-6 text-sm text-foreground/70 mt-2">
            <div className="flex items-center gap-2"><Bike className="w-4 h-4 text-gold" /> 5 km delivery radius</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> 35–45 mins avg delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
