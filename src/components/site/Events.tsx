import { Cake, Building2, Heart } from "lucide-react";

const events = [
  { icon: Heart, title: "Wedding Catering", desc: "From sangeet to reception — bespoke menus crafted for 100 to 2,000 guests." },
  { icon: Building2, title: "Corporate Events", desc: "Private boardrooms, plated dinners and brand activations done elegantly." },
  { icon: Cake, title: "Birthday Celebrations", desc: "Reserve our private dining hall with a custom 5-course tasting menu." },
];

export function Events() {
  return (
    <section id="events" className="py-28 px-6 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, var(--gold) 1px, transparent 1px), radial-gradient(circle at 75% 75%, var(--gold) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/40 text-gold text-[11px] tracking-[0.3em] uppercase">
            Events & Private Dining
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl">Celebrate the <span className="text-gradient-gold italic">Extraordinary</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.title} className="bg-background border border-border rounded-2xl p-8 hover:border-gold/50 transition group">
              <div className="w-14 h-14 rounded-full bg-gold/10 grid place-items-center text-gold border border-gold/30 group-hover:bg-gold group-hover:text-black transition">
                <e.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{e.title}</h3>
              <p className="mt-3 text-foreground/65 text-sm leading-relaxed">{e.desc}</p>
              <button className="mt-6 text-xs uppercase tracking-[0.25em] text-gold hover:underline underline-offset-4">
                Enquire Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
