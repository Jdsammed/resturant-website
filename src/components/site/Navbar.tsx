import { useEffect, useState } from "react";
import { Search, Menu as MenuIcon, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Catering", href: "#events" },
  { label: "Contact", href: "#reserve" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav py-3" : "py-5 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <a href="#home" className="font-display text-2xl tracking-[0.18em] text-gold">
          SPICE <span className="text-foreground">GARDEN</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm uppercase tracking-wider text-foreground/80 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="hidden sm:grid place-items-center w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold transition">
            <Search className="w-4 h-4" />
          </button>
          <a href="#reserve" className="hidden sm:inline-flex items-center gap-2 gradient-gold text-black font-medium px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition shadow-[0_8px_30px_-10px_oklch(0.76_0.13_78/0.6)]">
            Reserve a Table
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-border text-gold">
            {open ? <X className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden mt-3 mx-5 rounded-2xl bg-surface border border-border p-5 space-y-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-sm uppercase tracking-wider text-foreground/80 hover:text-gold">{l.label}</a>
          ))}
          <a href="#reserve" onClick={() => setOpen(false)} className="block text-center mt-2 gradient-gold text-black font-medium px-5 py-2.5 rounded-full text-sm">Reserve a Table</a>
        </div>
      )}
    </header>
  );
}
