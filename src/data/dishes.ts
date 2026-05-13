export type Category = "Starters" | "Mains" | "Biryani" | "Breads" | "Desserts" | "Drinks";

export interface Dish {
  id: string;
  name: string;
  hindi?: string;
  price: number;
  desc: string;
  image: string;
  category: Category;
  veg: boolean;
  spice: 1 | 2 | 3;
  bestseller?: boolean;
  isNew?: boolean;
}

export const dishes: Dish[] = [
  { id: "s1", name: "Paneer Tikka", hindi: "पनीर टिक्का", price: 260, desc: "Marinated cottage cheese, charred in tandoor with bell peppers.", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80", category: "Starters", veg: true, spice: 2, bestseller: true },
  { id: "s2", name: "Samosa", hindi: "समोसा", price: 80, desc: "Crisp pastry pockets with spiced potato and peas (2 pcs).", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", category: "Starters", veg: true, spice: 2 },
  { id: "s3", name: "Tandoori Chicken", hindi: "तंदूरी चिकन", price: 340, desc: "Yogurt-marinated chicken, slow roasted in clay oven.", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80", category: "Starters", veg: false, spice: 3, bestseller: true },
  { id: "m1", name: "Butter Chicken", hindi: "बटर चिकन", price: 320, desc: "Tandoori chicken simmered in silky tomato-butter gravy.", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80", category: "Mains", veg: false, spice: 2, bestseller: true },
  { id: "m2", name: "Dal Makhani", hindi: "दाल मखनी", price: 220, desc: "Black lentils slow-cooked overnight with cream and butter.", image: "https://images.unsplash.com/photo-1630851840633-f96999247032?w=600&q=80", category: "Mains", veg: true, spice: 1 },
  { id: "m3", name: "Palak Paneer", hindi: "पालक पनीर", price: 240, desc: "Cottage cheese cubes in a velvety spinach gravy.", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80", category: "Mains", veg: true, spice: 2 },
  { id: "b1", name: "Hyderabadi Biryani", hindi: "हैदराबादी बिरयानी", price: 380, desc: "Aged basmati layered with saffron, herbs and tender lamb.", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", category: "Biryani", veg: false, spice: 3, bestseller: true },
  { id: "b2", name: "Veg Dum Biryani", hindi: "वेज दम बिरयानी", price: 280, desc: "Fragrant basmati and seasonal vegetables sealed in dum.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80", category: "Biryani", veg: true, spice: 2, isNew: true },
  { id: "br1", name: "Garlic Naan", hindi: "लहसुन नान", price: 90, desc: "Soft tandoor-fired bread brushed with garlic butter.", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600&q=80", category: "Breads", veg: true, spice: 1 },
  { id: "br2", name: "Laccha Paratha", hindi: "लच्छा पराठा", price: 70, desc: "Multi-layered whole wheat flatbread, flaky and warm.", image: "https://images.unsplash.com/photo-1633945274405-b6c8a5b1e1c6?w=600&q=80", category: "Breads", veg: true, spice: 1 },
  { id: "d1", name: "Gulab Jamun", hindi: "गुलाब जामुन", price: 120, desc: "Warm milk dumplings soaked in rose-cardamom syrup.", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80", category: "Desserts", veg: true, spice: 1, bestseller: true },
  { id: "d2", name: "Kulfi Falooda", hindi: "कुल्फी फालूदा", price: 150, desc: "Saffron-pistachio kulfi over rose vermicelli and basil seeds.", image: "https://images.unsplash.com/photo-1579954115563-e72bf1741584?w=600&q=80", category: "Desserts", veg: true, spice: 1 },
  { id: "dr1", name: "Masala Chai", hindi: "मसाला चाय", price: 60, desc: "Assam tea brewed with ginger, cardamom and milk.", image: "https://images.unsplash.com/photo-1597318236842-e4dfd75e7c25?w=600&q=80", category: "Drinks", veg: true, spice: 1 },
  { id: "dr2", name: "Mango Lassi", hindi: "आम लस्सी", price: 110, desc: "Chilled Alphonso mango blended with hung curd.", image: "https://images.unsplash.com/photo-1570696516188-ade861b84a49?w=600&q=80", category: "Drinks", veg: true, spice: 1, isNew: true },
];
