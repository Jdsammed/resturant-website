import { create } from "zustand";
import type { Dish } from "@/data/dishes";

export interface CartItem extends Dish {
  qty: number;
}

interface CartState {
  items: CartItem[];
  open: boolean;
  add: (d: Dish) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  setOpen: (o: boolean) => void;
  count: () => number;
  subtotal: () => number;
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  open: false,
  add: (d) => set((s) => {
    const existing = s.items.find((i) => i.id === d.id);
    if (existing) return { items: s.items.map((i) => i.id === d.id ? { ...i, qty: i.qty + 1 } : i) };
    return { items: [...s.items, { ...d, qty: 1 }] };
  }),
  remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
  setQty: (id, qty) => set((s) => ({
    items: qty <= 0 ? s.items.filter((i) => i.id !== id) : s.items.map((i) => i.id === id ? { ...i, qty } : i),
  })),
  clear: () => set({ items: [] }),
  setOpen: (open) => set({ open }),
  count: () => get().items.reduce((a, b) => a + b.qty, 0),
  subtotal: () => get().items.reduce((a, b) => a + b.qty * b.price, 0),
}));
