import heroImage from '@assets/generated_images/fashion_editorial_group_shot.png';
import menImage from '@assets/generated_images/stylish_man_in_coat.png';
import womenImage from '@assets/generated_images/elegant_woman_in_silk_dress.png';
import sneakersImage from '@assets/generated_images/luxury_leather_sneakers.png';
import watchImage from '@assets/generated_images/gold_minimalist_watch.png';
import bagImage from '@assets/generated_images/designer_leather_handbag.png';

// New Imports
import menShirtImage from "@assets/generated_images/men's_classic_white_shirt.png";
import menTShirtImage from "@assets/generated_images/men's_premium_t-shirt.png";
import menJeansImage from "@assets/generated_images/men's_denim_jeans.png";
import menSuitImage from "@assets/generated_images/men's_tailored_suit.png";
import womenSkirtImage from "@assets/generated_images/women's_pleated_skirt.png";
import womenBlouseImage from "@assets/generated_images/women's_silk_blouse.png";
import womenTraditionalImage from "@assets/generated_images/women's_luxury_traditional_wear.png";
import womenHeelsImage from "@assets/generated_images/women's_high_heels.png";
import menBootsImage from "@assets/generated_images/men's_leather_boots.png";
import sunglassesImage from "@assets/generated_images/designer_sunglasses.png";

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

// Men Types
const menTypes = [
  "Trench", "Overcoat", "Bomber", // Coats -> menImage
  "Oxford", "Shirt", // Shirts -> menShirtImage
  "Suit", "Blazer", "Vest", // Formal -> menSuitImage
  "T-Shirt", "Sweater", // Casual Tops -> menTShirtImage
  "Trouser", "Chino", "Jeans" // Bottoms -> menJeansImage
];

// Women Types
const womenTypes = [
  "Slip Dress", "Gown", "Maxi Dress", "Wrap Dress", // Dresses -> womenImage
  "Blouse", "Cardigan", "Top", // Tops -> womenBlouseImage
  "Skirt", // Skirts -> womenSkirtImage
  "Kimono", "Traditional Set", "Saree", "Kaftan" // Traditional -> womenTraditionalImage
];

// Accessory Types
const accTypes = [
  "Tote", "Clutch", "Satchel", "Weekender", "Wallet", // Bags -> bagImage
  "Chronograph", "Watch", // Watches -> watchImage
  "Sunglasses", "Shades" // Glasses -> sunglassesImage
];

// Footwear Types
const footwearTypes = [
  "Sneaker", "Runner", "High Top", // Sneakers -> sneakersImage
  "Boot", "Chelsea Boot", "Derby", "Monk Strap", "Loafer", // Boots/Leather -> menBootsImage
  "Heels", "Sandal", "Pump" // Heels -> womenHeelsImage
];

function getImageForType(category: string, type: string): string {
  // Men Mapping
  if (category === "Men") {
    if (["Trench", "Overcoat", "Bomber"].includes(type)) return menImage;
    if (["Oxford", "Shirt"].includes(type)) return menShirtImage;
    if (["Suit", "Blazer", "Vest"].includes(type)) return menSuitImage;
    if (["T-Shirt", "Sweater"].includes(type)) return menTShirtImage;
    if (["Trouser", "Chino", "Jeans"].includes(type)) return menJeansImage;
    return menImage;
  }
  
  // Women Mapping
  if (category === "Women") {
    if (["Slip Dress", "Gown", "Maxi Dress", "Wrap Dress"].includes(type)) return womenImage;
    if (["Blouse", "Cardigan", "Top"].includes(type)) return womenBlouseImage;
    if (["Skirt"].includes(type)) return womenSkirtImage;
    if (["Kimono", "Traditional Set", "Saree", "Kaftan"].includes(type)) return womenTraditionalImage;
    return womenImage;
  }

  // Accessories Mapping
  if (category === "Accessories") {
    if (["Tote", "Clutch", "Satchel", "Weekender", "Wallet"].includes(type)) return bagImage;
    if (["Chronograph", "Watch"].includes(type)) return watchImage;
    if (["Sunglasses", "Shades"].includes(type)) return sunglassesImage;
    return bagImage;
  }

  // Footwear Mapping
  if (category === "Footwear") {
    if (["Sneaker", "Runner", "High Top"].includes(type)) return sneakersImage;
    if (["Boot", "Chelsea Boot", "Derby", "Monk Strap", "Loafer"].includes(type)) return menBootsImage;
    if (["Heels", "Sandal", "Pump"].includes(type)) return womenHeelsImage;
    return sneakersImage;
  }

  return menImage;
}

function generateCategoryProducts(category: string, count: number, startId: number): Product[] {
  const categoryProducts: Product[] = [];
  
  let types: string[] = [];
  if (category === "Men") types = menTypes;
  else if (category === "Women") types = womenTypes;
  else if (category === "Accessories") types = accTypes;
  else types = footwearTypes;

  for (let i = 0; i < count; i++) {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const mat = materials[Math.floor(Math.random() * materials.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    
    const name = `${adj} ${mat} ${type}`;
    const image = getImageForType(category, type);

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
