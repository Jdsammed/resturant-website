import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/918045678900"
        target="_blank" rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-40 w-13 h-13 p-3.5 rounded-full bg-[#25D366] text-white grid place-items-center shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] hover:scale-105 transition"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full bg-surface border border-gold/40 text-gold grid place-items-center hover:bg-gold hover:text-black transition"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
}
