const photos = [
  { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80", h: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", h: "" },
  { src: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80", h: "" },
  { src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80", h: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80", h: "" },
  { src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80", h: "" },
  { src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80", h: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/40 text-gold text-[11px] tracking-[0.3em] uppercase">
            Gallery
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl">A Glimpse of <span className="text-gradient-gold italic">Spice Garden</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[repeat(4,180px)] gap-4">
          {photos.map((p, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl group ${p.h}`}>
              <img src={p.src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="border border-gold/60 text-gold px-7 py-3 rounded-full hover:bg-gold hover:text-black transition">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
