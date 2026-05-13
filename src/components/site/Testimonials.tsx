import { Star } from "lucide-react";

const reviews = [
  { name: "Priya Nair", date: "2 days ago", rating: 5, text: "The Hyderabadi biryani is the best I've had outside of Hyderabad. The service is impeccable.", avatar: "PN" },
  { name: "Rahul Verma", date: "1 week ago", rating: 5, text: "Stunning ambience, every dish was a story. The galouti kebab melted before I could chew it.", avatar: "RV" },
  { name: "Aisha Khan", date: "2 weeks ago", rating: 5, text: "Booked for our anniversary — they decorated our table. Felt like royalty all evening.", avatar: "AK" },
  { name: "David Lee", date: "3 weeks ago", rating: 4, text: "Authentic flavors, generous portions. Dal makhani is silky perfection. Will return.", avatar: "DL" },
  { name: "Sneha Iyer", date: "1 month ago", rating: 5, text: "Hands down Bengaluru's finest Indian fine dining. Worth every rupee.", avatar: "SI" },
];

export function Testimonials() {
  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full border border-gold/40 text-gold text-[11px] tracking-[0.3em] uppercase">
          Reviews
        </span>
        <h2 className="mt-5 text-4xl md:text-5xl">Loved by <span className="text-gradient-gold italic">Bengaluru</span></h2>
        <div className="mt-5 inline-flex items-center gap-3 text-foreground/80">
          <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}</div>
          <span className="font-display text-2xl text-gold">4.9</span>
          <span className="text-sm text-muted-foreground">from 2,400+ Google reviews</span>
        </div>
      </div>

      <div className="group relative">
        <div className="flex gap-5 marquee group-hover:[animation-play-state:paused] w-max">
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="w-[360px] bg-surface border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full gradient-gold text-black grid place-items-center font-medium">{r.avatar}</div>
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.date}</div>
                </div>
              </div>
              <div className="flex mt-3">{[...Array(r.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}</div>
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
