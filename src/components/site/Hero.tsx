import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 ken-burns bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&q=80)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,oklch(0.76_0.13_78/0.12),transparent_60%)]" />

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-5 py-2 rounded-full border border-gold/40 text-gold text-xs tracking-[0.3em] uppercase bg-gold/5 backdrop-blur">
            ✦ Authentic Indian Cuisine ✦
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}
          className="font-display mt-7 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05]"
        >
          A Journey Through <br />
          <span className="text-gradient-gold italic">India's Finest</span> Flavors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="mt-7 text-foreground/75 max-w-xl mx-auto text-base sm:text-lg"
        >
          Handcrafted recipes passed down through generations · Bengaluru, India
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-9 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#menu" className="gradient-gold text-black font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition shadow-[0_15px_50px_-15px_oklch(0.76_0.13_78/0.7)]">
            Explore Menu
          </a>
          <a href="#reserve" className="border border-gold/60 text-gold px-8 py-3.5 rounded-full hover:bg-gold hover:text-black transition">
            Book a Table
          </a>
        </motion.div>
      </div>

      <a href="#stats" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold float-bounce">
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
