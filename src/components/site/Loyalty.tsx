import { Award } from "lucide-react";

const tiers = [
  { name: "Silver", points: "0 – 999 pts", perks: ["5% off every visit", "Birthday dessert"], grad: "from-zinc-400 to-zinc-600" },
  { name: "Gold", points: "1,000 – 4,999 pts", perks: ["10% off + welcome drink", "Priority reservations"], grad: "from-yellow-300 to-amber-600" },
  { name: "Platinum", points: "5,000+ pts", perks: ["15% off + chef's amuse", "Private dining access"], grad: "from-slate-200 to-slate-500" },
];

export function Loyalty() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/40 text-gold text-[11px] tracking-[0.3em] uppercase">
            <Award className="w-3 h-3 inline mr-1" /> Spice Rewards
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl">Loyalty That <span className="text-gradient-gold italic">Tastes Better</span></h2>
          <p className="mt-4 text-foreground/65">Earn 1 point for every ₹10 spent. Redeem on dishes, experiences and private dining.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="bg-surface border border-border rounded-2xl p-8 hover:border-gold/50 transition">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.grad} grid place-items-center text-black font-display text-xl`}>
                {t.name[0]}
              </div>
              <h3 className="mt-5 font-display text-2xl">{t.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{t.points}</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/75">
                {t.perks.map((p) => <li key={p} className="flex gap-2"><span className="text-gold">✦</span>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="gradient-gold text-black font-medium px-8 py-3.5 rounded-full">
            Join Spice Rewards — Free
          </button>
        </div>
      </div>
    </section>
  );
}
