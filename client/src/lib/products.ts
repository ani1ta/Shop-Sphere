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
const adjectives = ["Midnight", "Obsidian", "Ivory", "Matte", "Vintage", "Royal", "Urban", "Classic", "Modern", "Heritage", "Sleek", "Bold", "Noir", "Crimson", "Slate", "Ethereal", "Storm", "Onyx", "Pearl", "Azure"];
const materials = ["Silk", "Leather", "Wool", "Cashmere", "Velvet", "Denim", "Suede", "Cotton", "Linen", "Satin", "Tweed", "Mohair", "Corduroy"];

const menTypes = ["Trench", "Blazer", "Oxford", "Loafer", "Trouser", "Bomber", "Sweater", "Overcoat", "Suit", "Vest", "Chino", "Parka"];
const womenTypes = ["Slip Dress", "Blouse", "Skirt", "Gown", "Heels", "Cardigan", "Scarf", "Kimono", "Maxi Dress", "Tunic", "Wrap Dress", "Jumpsuit"];
const accTypes = ["Tote", "Chronograph", "Wallet", "Belt", "Sunglasses", "Clutch", "Satchel", "Weekender", "Cufflinks", "Scarf", "Hat", "Gloves"];
const footwearTypes = ["Sneaker", "Boot", "Derby", "Monk Strap", "Sandal", "Runner", "High Top", "Loafer", "Mule", "Chelsea Boot"];

function generateCategoryProducts(category: string, count: number, startId: number): Product[] {
  const categoryProducts: Product[] = [];
  
  for (let i = 0; i < count; i++) {
    let name = "";
    let image = "";
    let types: string[] = [];

    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const mat = materials[Math.floor(Math.random() * materials.length)];

    if (category === "Men") {
      types = menTypes;
      image = menImage;
    } else if (category === "Women") {
      types = womenTypes;
      image = womenImage;
    } else if (category === "Accessories") {
      types = accTypes;
      image = Math.random() > 0.5 ? watchImage : bagImage;
    } else { // Footwear
      types = footwearTypes;
      image = sneakersImage;
    }

    const type = types[Math.floor(Math.random() * types.length)];
    name = `${adj} ${mat} ${type}`;

    categoryProducts.push({
      id: startId + i,
      name,
      price: Math.floor(Math.random() * 2000) + 150,
      category,
      image,
      description: `A unique ${name.toLowerCase()} designed for the modern connoisseur. Crafted from premium ${mat.toLowerCase()}.`,
      isNew: Math.random() > 0.8
    });
  }
  return categoryProducts;
}

function generateAllProducts(): Product[] {
  let allProducts: Product[] = [];
  let currentId = 1;

  // Generate 100 items for each category
  const categories = ["Men", "Women", "Accessories", "Footwear"];
  
  categories.forEach(cat => {
    const products = generateCategoryProducts(cat, 100, currentId);
    allProducts = [...allProducts, ...products];
    currentId += 100;
  });

  return allProducts;
}

export const products = generateAllProducts();

export const categories = [
  { name: "Men's Collection", image: menImage, link: "/shop?category=Men" },
  { name: "Women's Collection", image: womenImage, link: "/shop?category=Women" },
  { name: "Accessories", image: watchImage, link: "/shop?category=Accessories" },
  { name: "Footwear", image: sneakersImage, link: "/shop?category=Footwear" },
];

export { heroImage };
