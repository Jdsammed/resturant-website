import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, Check } from "lucide-react";

const SLOTS = ["12:30 PM", "1:30 PM", "2:30 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"];

export function Reserve() {
  const [submitted, setSubmitted] = useState(false);
  const [slot, setSlot] = useState("8:00 PM");
  const [seating, setSeating] = useState("Indoor");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="reserve" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/40 text-gold text-[11px] tracking-[0.3em] uppercase">
            Reservations
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl leading-tight">
            Book Your <span className="text-gradient-gold italic">Table</span>
          </h2>
          <p className="mt-4 text-foreground/65">We hold reservations for 15 minutes past the booked time.</p>

          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/30 grid place-items-center text-gold"><MapPin className="w-4 h-4" /></div>
              <div>
                <div className="text-sm font-medium">Spice Garden, Indiranagar</div>
                <div className="text-xs text-muted-foreground">100ft Road, Bengaluru, Karnataka 560038</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/30 grid place-items-center text-gold"><Phone className="w-4 h-4" /></div>
              <div>
                <div className="text-sm font-medium">+91 80 4567 8900</div>
                <div className="text-xs text-muted-foreground">Reservations · Daily 11am – 11pm</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/30 grid place-items-center text-gold"><Clock className="w-4 h-4" /></div>
              <div>
                <div className="text-sm font-medium">Lunch 12 – 3pm · Dinner 7 – 11pm</div>
                <div className="text-xs text-muted-foreground">Open 7 days a week</div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden border border-border aspect-[16/9] bg-surface relative">
            <div className="absolute inset-0 grid place-items-center text-muted-foreground text-sm">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto text-gold/60" />
                <div className="mt-2">Map of Indiranagar, Bengaluru</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="bg-surface border border-border rounded-2xl p-8 space-y-5 relative">
          <AnimatePresence>
            {submitted && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 bg-surface/95 backdrop-blur grid place-items-center rounded-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-veg/20 grid place-items-center mx-auto">
                    <Check className="w-8 h-8 text-veg" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-gold">Table Confirmed</h3>
                  <p className="mt-2 text-sm text-foreground/70">We'll see you soon.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <h3 className="font-display text-2xl">Reservation Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Full Name"><input required className="input" placeholder="Your name" /></Field>
            <Field label="Phone"><input required type="tel" className="input" placeholder="+91 …" /></Field>
            <Field label="Date"><input required type="date" className="input" /></Field>
            <Field label="Guests">
              <select className="input">
                {[1,2,3,4,5,6,7,8].map((n) => <option key={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
                <option>9+ Guests</option>
              </select>
            </Field>
          </div>

          <Field label="Available Time Slots">
            <div className="flex flex-wrap gap-2">
              {SLOTS.map((s) => (
                <button type="button" key={s} onClick={() => setSlot(s)}
                  className={`px-3 py-1.5 rounded-full text-xs border transition ${slot === s ? "bg-gold text-black border-gold" : "border-border text-foreground/70 hover:border-gold/60"}`}>
                  {s}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Seating Preference">
            <div className="flex gap-2">
              {["Indoor", "Outdoor", "Private"].map((s) => (
                <button type="button" key={s} onClick={() => setSeating(s)}
                  className={`flex-1 px-3 py-2 rounded-lg text-xs border transition ${seating === s ? "bg-gold/15 text-gold border-gold/60" : "border-border text-foreground/70 hover:border-gold/40"}`}>
                  {s}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Occasion (optional)">
            <input className="input" placeholder="Anniversary, Birthday, …" />
          </Field>
          <Field label="Special Requests">
            <textarea rows={3} className="input resize-none" placeholder="Allergies, dietary, seating notes…" />
          </Field>

          <button type="submit" className="w-full gradient-gold text-black font-medium py-3.5 rounded-full hover:opacity-90 transition">
            Confirm Reservation
          </button>
        </form>
      </div>

      <style>{`.input{width:100%;background:var(--background);border:1px solid var(--border);border-radius:0.75rem;padding:0.7rem 1rem;font-size:0.875rem;color:var(--foreground);outline:none}.input:focus{border-color:var(--gold)}`}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
