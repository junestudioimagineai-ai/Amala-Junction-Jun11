export const WHATSAPP_NUMBER = "+2348000000000"; // Replace with actual number

export const formatWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
};

export const MENU_CATEGORIES = [
  {
    id: "swallows",
    name: "Swallows",
    items: [
      { id: "amala", name: "Amala", description: "Soft, dark yam flour meal", price: 1000 },
      { id: "eba", name: "Eba", description: "Classic garri swallow", price: 800 },
      { id: "pounded-yam", name: "Pounded Yam", description: "Smooth, freshly pounded yam", price: 1500 },
      { id: "semo", name: "Semo", description: "Smooth semolina swallow", price: 1200 },
    ],
  },
  {
    id: "soups",
    name: "Soups",
    items: [
      { id: "gbegiri", name: "Gbegiri", description: "Velvety beans soup", price: 800 },
      { id: "ewedu", name: "Ewedu", description: "Draw soup, perfect with Amala", price: 700 },
      { id: "egusi", name: "Egusi", description: "Melon soup with rich spices", price: 1500 },
      { id: "efo-riro", name: "Efo Riro", description: "Rich vegetable soup", price: 1800 },
      { id: "banga", name: "Banga", description: "Palm nut soup", price: 1500 },
    ],
  },
  {
    id: "proteins",
    name: "Proteins",
    items: [
      { id: "assorted", name: "Assorted Meat", description: "Shaki, ponmo, roundabout, etc.", price: 2000 },
      { id: "beef", name: "Beef", description: "Tender chunks of beef", price: 1500 },
      { id: "goat-meat", name: "Goat Meat", description: "Spicy goat meat", price: 2500 },
      { id: "fish", name: "Croaker Fish", description: "Fried or cooked croaker fish", price: 3000 },
      { id: "chicken", name: "Chicken", description: "Fried or peppered chicken", price: 2500 },
      { id: "ponmo", name: "Ponmo", description: "Soft cow skin", price: 800 },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      { id: "water", name: "Bottled Water", description: "Chilled water", price: 300 },
      { id: "soft-drinks", name: "Soft Drinks", description: "Coke, Fanta, Sprite (PET)", price: 500 },
      { id: "malt", name: "Malt Drink", description: "Chilled malt drink", price: 800 },
      { id: "zobo", name: "Zobo", description: "Hibiscus drink with ginger", price: 1000 },
    ],
  },
  {
    id: "combos",
    name: "Popular Combos",
    items: [
      { id: "amala-combo", name: "Amala + Gbegiri + Ewedu", description: "The classic Abula experience", price: 2500 },
      { id: "pounded-yam-egusi", name: "Pounded Yam + Egusi + Assorted", description: "Hearty and rich", price: 5000 },
      { id: "eba-efo", name: "Eba + Efo Riro + Fish", description: "A balanced, satisfying meal", price: 5600 },
    ],
  },
];

export const GALLERY_IMAGES = [
  { url: "/Amala1.jpg", caption: "Amala + Assorted Meat — a customer favourite" },
  { url: "/Amala2.jpg", caption: "Freshly pounded yam" },
  { url: "/Amala3.jpg", caption: "Rich Efo Riro" },
  { url: "/Amala4.jpg", caption: "Our welcoming dining area" },
  { url: "/Amala5.jpg", caption: "Classic combos" },
  { url: "/Amala6.jpg", caption: "Spicy proteins perfectly seasoned" },
];
