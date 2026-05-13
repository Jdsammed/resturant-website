import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
            alt="Spice Garden interior"
            loading="lazy"
            className="rounded-2xl w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-surface border border-gold/40 rounded-2xl px-7 py-5 text-center shadow-2xl">
            <div className="font-display text-4xl text-gold">2009</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">Founded</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/40 text-gold text-[11px] tracking-[0.3em] uppercase">
            Our Story
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl leading-tight">
            Three Generations of <span className="text-gradient-gold italic">Culinary Heritage</span>
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Born in the bylanes of old Lucknow and reborn on the avenues of Bengaluru, Spice Garden is a
            tribute to the cooks, the firewood and the family recipes that built it. Every curry simmers
            for hours. Every kebab is hand-skewered. Every grain of basmati is washed seven times.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Chef Aarav Mehra and his team craft a menu that travels through Awadhi courts, Punjabi tandoors
            and the coastal kitchens of Karnataka — without ever cutting a corner.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="font-display italic text-3xl text-gold">~ Aarav Mehra</div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Executive Chef</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
