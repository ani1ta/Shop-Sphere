import heroImage from '@assets/generated_images/fashion_editorial_group_shot.png';
import menImage from '@assets/generated_images/stylish_man_in_coat.png';
import womenImage from '@assets/generated_images/elegant_woman_in_silk_dress.png';
import sneakersImage from '@assets/generated_images/luxury_leather_sneakers.png';
import watchImage from '@assets/generated_images/gold_minimalist_watch.png';
import bagImage from '@assets/generated_images/designer_leather_handbag.png';

export const products = [
  {
    id: 1,
    name: "Classic Wool Trench",
    price: 895,
    category: "Men",
    image: menImage,
    description: "Italian wool blend trench coat in slate grey."
  },
  {
    id: 2,
    name: "Silk Evening Slip",
    price: 450,
    category: "Women",
    image: womenImage,
    description: "Pure mulberry silk slip dress in midnight blue."
  },
  {
    id: 3,
    name: "Archive Leather Sneaker",
    price: 320,
    category: "Footwear",
    image: sneakersImage,
    description: "Hand-crafted leather sneakers with minimal detailing."
  },
  {
    id: 4,
    name: "Obsidian Chronograph",
    price: 2100,
    category: "Accessories",
    image: watchImage,
    description: "Swiss movement automatic watch with sapphire crystal."
  },
  {
    id: 5,
    name: "Signature Tote",
    price: 1250,
    category: "Accessories",
    image: bagImage,
    description: "Full-grain leather tote with brass hardware."
  },
  {
    id: 6,
    name: "Merino Knit Sweater",
    price: 280,
    category: "Men",
    image: menImage, // Reusing for mock
    description: "Fine gauge merino wool sweater in charcoal."
  }
];

export const categories = [
  { name: "Men's Collection", image: menImage, link: "/shop?category=Men" },
  { name: "Women's Collection", image: womenImage, link: "/shop?category=Women" },
  { name: "Accessories", image: watchImage, link: "/shop?category=Accessories" },
];

export { heroImage };
