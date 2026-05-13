const stats = [
  { value: "15+", label: "Years Legacy" },
  { value: "120+", label: "Signature Dishes" },
  { value: "4.9★", label: "Guest Rating" },
  { value: "50K+", label: "Happy Guests" },
];

export function Stats() {
  return (
    <section id="stats" className="bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl md:text-5xl text-gradient-gold">{s.value}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
