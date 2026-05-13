import { motion } from "framer-motion";

export function ChefSpecial() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 gradient-gold opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.05_0_0/0.2),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center text-black">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-black/30 text-[11px] tracking-[0.3em] uppercase">
            Chef's Special · Today
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight">
            Lucknowi Galouti Kebab
          </h2>
          <p className="mt-4 text-black/75 max-w-md">
            Melt-in-mouth minced lamb kebabs with 16 royal spices, served on warm ulte tawa parathas.
            A signature handed down from the Nawabs themselves.
          </p>
          <div className="mt-6 flex items-center gap-5">
            <div className="font-display text-4xl">₹420</div>
            <span className="px-3 py-1 bg-black text-gold text-[10px] uppercase tracking-[0.25em] rounded-full">
              Limited · 30 plates today
            </span>
          </div>
          <button className="mt-8 bg-black text-gold px-7 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-background transition">
            Reserve Yours
          </button>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=900&q=80"
          alt="Chef's Special"
          className="rounded-2xl aspect-[4/3] object-cover w-full shadow-2xl"
        />
      </div>
    </section>
  );
}
