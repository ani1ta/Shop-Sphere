import heroImage from '@assets/generated_images/fashion_editorial_group_shot.png';
import menImage from '@assets/generated_images/stylish_man_in_coat.png';
import womenImage from '@assets/generated_images/elegant_woman_in_silk_dress.png';
import sneakersImage from '@assets/generated_images/luxury_leather_sneakers.png';
import watchImage from '@assets/generated_images/gold_minimalist_watch.png';
import bagImage from '@assets/generated_images/designer_leather_handbag.png';

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  isNew?: boolean;
};

// Base data for generation
const adjectives = ["Midnight", "Obsidian", "Ivory", "Matte", "Vintage", "Royal", "Urban", "Classic", "Modern", "Heritage", "Sleek", "Bold", "Noir", "Crimson", "Slate", "Ethereal"];
const materials = ["Silk", "Leather", "Wool", "Cashmere", "Velvet", "Denim", "Suede", "Cotton", "Linen", "Satin"];
const menTypes = ["Trench", "Blazer", "Oxford", "Loafer", "Trouser", "Bomber", "Sweater", "Overcoat"];
const womenTypes = ["Slip Dress", "Blouse", "Skirt", "Gown", "Heels", "Cardigan", "Scarf", "Kimono"];
const accTypes = ["Tote", "Chronograph", "Wallet", "Belt", "Sunglasses", "Clutch", "Satchel", "Weekender"];
const footwearTypes = ["Sneaker", "Boot", "Derby", "Monk Strap", "Sandal", "Runner", "High Top"];

const images = {
  Men: menImage,
  Women: womenImage,
  Accessories: [watchImage, bagImage],
  Footwear: sneakersImage,
};

function generateProducts(count: number): Product[] {
  const products: Product[] = [];
  
  // Add our handcrafted featured items first
  products.push(
    {
      id: 1,
      name: "Classic Wool Trench",
      price: 895,
      category: "Men",
      image: menImage,
      description: "Italian wool blend trench coat in slate grey.",
      isNew: true
    },
    {
      id: 2,
      name: "Silk Evening Slip",
      price: 450,
      category: "Women",
      image: womenImage,
      description: "Pure mulberry silk slip dress in midnight blue.",
      isNew: true
    },
    {
      id: 3,
      name: "Archive Leather Sneaker",
      price: 320,
      category: "Footwear",
      image: sneakersImage,
      description: "Hand-crafted leather sneakers with minimal detailing.",
      isNew: true
    },
    {
      id: 4,
      name: "Obsidian Chronograph",
      price: 2100,
      category: "Accessories",
      image: watchImage,
      description: "Swiss movement automatic watch with sapphire crystal.",
      isNew: true
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
      image: menImage,
      description: "Fine gauge merino wool sweater in charcoal."
    }
  );

  // Generate the rest
  for (let i = 7; i <= count; i++) {
    const categoryOptions = ["Men", "Women", "Accessories", "Footwear"];
    const category = categoryOptions[Math.floor(Math.random() * categoryOptions.length)];
    
    let name = "";
    let image = "";
    
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const mat = materials[Math.floor(Math.random() * materials.length)];
    
    if (category === "Men") {
      const type = menTypes[Math.floor(Math.random() * menTypes.length)];
      name = `${adj} ${mat} ${type}`;
      image = menImage;
    } else if (category === "Women") {
      const type = womenTypes[Math.floor(Math.random() * womenTypes.length)];
      name = `${adj} ${mat} ${type}`;
      image = womenImage;
    } else if (category === "Accessories") {
      const type = accTypes[Math.floor(Math.random() * accTypes.length)];
      name = `${adj} ${type}`;
      // Randomly pick watch or bag
      image = Math.random() > 0.5 ? watchImage : bagImage;
    } else {
      const type = footwearTypes[Math.floor(Math.random() * footwearTypes.length)];
      name = `${adj} ${mat} ${type}`;
      image = sneakersImage;
    }

    products.push({
      id: i,
      name,
      price: Math.floor(Math.random() * 2000) + 150, // Price between 150 and 2150
      category,
      image,
      description: `A unique ${name.toLowerCase()} designed for the modern connoisseur.`,
      isNew: Math.random() > 0.8 // 20% chance of being new
    });
  }

  return products;
}

export const products = generateProducts(200);

export const categories = [
  { name: "Men's Collection", image: menImage, link: "/shop?category=Men" },
  { name: "Women's Collection", image: womenImage, link: "/shop?category=Women" },
  { name: "Accessories", image: watchImage, link: "/shop?category=Accessories" },
  { name: "Footwear", image: sneakersImage, link: "/shop?category=Footwear" },
];

export { heroImage };
