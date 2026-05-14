import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-gold/20 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="font-display text-2xl tracking-[0.18em] text-gold">SPICE <span className="text-foreground">GARDEN</span></div>
          <p className="mt-4 text-sm text-foreground/65">Authentic Indian fine dining in the heart of Bengaluru since 2009.</p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-border grid place-items-center hover:border-gold hover:text-gold transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Explore" links={["Menu", "Reservations", "Catering", "Careers", "Blog"]} />
        <FooterCol title="Contact" links={["000-000-0000", "hello@spicegarden.in", "Indiranagar, Bengaluru"]} />
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Hours</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>Lunch · 12 – 3 PM</li>
            <li>Dinner · 7 – 11 PM</li>
            <li>Open Daily</li>
          </ul>
          <div className="mt-5 flex gap-2">
            <button className="bg-background border border-border rounded-lg px-3 py-2 text-[10px] text-left">
              <div className="text-muted-foreground">Get it on</div>
              <div className="text-foreground font-medium">Google Play</div>
            </button>
            <button className="bg-background border border-border rounded-lg px-3 py-2 text-[10px] text-left">
              <div className="text-muted-foreground">Download on</div>
              <div className="text-foreground font-medium">App Store</div>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <div>© 2025 Spice Garden Hospitality Pvt. Ltd. All rights reserved.</div>
        <div className="flex gap-3 items-center">
          <span>Accepted:</span>
          {["VISA", "MC", "UPI", "AMEX"].map((p) => (
            <span key={p} className="px-2 py-1 border border-border rounded text-[10px] tracking-wider">{p}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{title}</div>
      <ul className="space-y-2 text-sm text-foreground/70">
        {links.map((l) => <li key={l}><a href="#" className="hover:text-gold transition">{l}</a></li>)}
      </ul>
    </div>
  );
}
