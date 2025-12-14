import heroImage from '@assets/generated_images/fashion_editorial_group_shot.png';
import menImage from '@assets/generated_images/stylish_man_in_coat.png';
import womenImage from '@assets/generated_images/elegant_woman_in_silk_dress.png';
import sneakersImage from '@assets/generated_images/luxury_leather_sneakers.png';
import watchImage from '@assets/generated_images/gold_minimalist_watch.png';
import bagImage from '@assets/generated_images/designer_leather_handbag.png';

// Generated Images
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

// Stock Images - Men
import menStock1 from '@assets/stock_images/men_fashion_clothing_950ffeb9.jpg';
import menStock2 from '@assets/stock_images/men_fashion_clothing_e5f5098d.jpg';
import menStock3 from '@assets/stock_images/men_fashion_clothing_8776065f.jpg';
import menStock4 from '@assets/stock_images/men_fashion_clothing_b98e08d3.jpg';
import menStock5 from '@assets/stock_images/men_fashion_clothing_513c1267.jpg';
import menStock6 from '@assets/stock_images/men_fashion_clothing_dcaf65f8.jpg';
import menStock7 from '@assets/stock_images/men_fashion_clothing_ece17ccc.jpg';
import menStock8 from '@assets/stock_images/men_fashion_clothing_d81b570e.jpg';
import menStock9 from '@assets/stock_images/men_fashion_clothing_647d4b4f.jpg';
import menStock10 from '@assets/stock_images/men_fashion_clothing_20a0308e.jpg';
import menLife1 from '@assets/stock_images/men_fashion_lifestyl_4217ed94.jpg';
import menLife2 from '@assets/stock_images/men_fashion_lifestyl_43de1348.jpg';
import menLife3 from '@assets/stock_images/men_fashion_lifestyl_530ee936.jpg';
import menLife4 from '@assets/stock_images/men_fashion_lifestyl_fd551189.jpg';
import menLife5 from '@assets/stock_images/men_fashion_lifestyl_e6aefcee.jpg';

// Stock Images - Women
import womenStock1 from '@assets/stock_images/women_fashion_clothi_1dd5f3d2.jpg';
import womenStock2 from '@assets/stock_images/women_fashion_clothi_82151d4b.jpg';
import womenStock3 from '@assets/stock_images/women_fashion_clothi_ffde29e7.jpg';
import womenStock4 from '@assets/stock_images/women_fashion_clothi_d712ae93.jpg';
import womenStock5 from '@assets/stock_images/women_fashion_clothi_6c6870fa.jpg';
import womenStock6 from '@assets/stock_images/women_fashion_clothi_8713c122.jpg';
import womenStock7 from '@assets/stock_images/women_fashion_clothi_7fc25b9c.jpg';
import womenStock8 from '@assets/stock_images/women_fashion_clothi_5724df35.jpg';
import womenStock9 from '@assets/stock_images/women_fashion_clothi_201ccf87.jpg';
import womenStock10 from '@assets/stock_images/women_fashion_clothi_cf816407.jpg';
import womenLife1 from '@assets/stock_images/women_fashion_lifest_d455857f.jpg';
import womenLife2 from '@assets/stock_images/women_fashion_lifest_9b3d81b2.jpg';
import womenLife3 from '@assets/stock_images/women_fashion_lifest_72411328.jpg';
import womenLife4 from '@assets/stock_images/women_fashion_lifest_ebce1d0d.jpg';
import womenLife5 from '@assets/stock_images/women_fashion_lifest_bbda675b.jpg';

// Stock Images - Accessories
import accStock1 from '@assets/stock_images/luxury_watches_handb_aa48ddc5.jpg';
import accStock2 from '@assets/stock_images/luxury_watches_handb_b1ec79f5.jpg';
import accStock3 from '@assets/stock_images/luxury_watches_handb_058c8ef2.jpg';
import accStock4 from '@assets/stock_images/luxury_watches_handb_528a5047.jpg';
import accStock5 from '@assets/stock_images/luxury_watches_handb_04762e2b.jpg';
import accStock6 from '@assets/stock_images/luxury_watches_handb_c22caf44.jpg';
import accStock7 from '@assets/stock_images/luxury_watches_handb_8597498c.jpg';
import accStock8 from '@assets/stock_images/luxury_watches_handb_65b47c6f.jpg';
import accStock9 from '@assets/stock_images/luxury_watches_handb_1c594f0d.jpg';
import accStock10 from '@assets/stock_images/luxury_watches_handb_390e26e5.jpg';

// Stock Images - Footwear
import footStock1 from '@assets/stock_images/luxury_footwear_snea_25c47fb7.jpg';
import footStock2 from '@assets/stock_images/luxury_footwear_snea_1d29c3cd.jpg';
import footStock3 from '@assets/stock_images/luxury_footwear_snea_f1e5fdb3.jpg';
import footStock4 from '@assets/stock_images/luxury_footwear_snea_0ed98748.jpg';
import footStock5 from '@assets/stock_images/luxury_footwear_snea_9e1bfdd9.jpg';
import footStock6 from '@assets/stock_images/luxury_footwear_snea_22d9cb44.jpg';
import footStock7 from '@assets/stock_images/luxury_footwear_snea_6509c022.jpg';
import footStock8 from '@assets/stock_images/luxury_footwear_snea_14e26eda.jpg';
import footStock9 from '@assets/stock_images/luxury_footwear_snea_8e43ba5e.jpg';
import footStock10 from '@assets/stock_images/luxury_footwear_snea_75ad98ba.jpg';


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
  "Trench", "Overcoat", "Bomber", // Coats
  "Oxford", "Shirt", // Shirts
  "Suit", "Blazer", "Vest", // Formal
  "T-Shirt", "Sweater", // Casual Tops
  "Trouser", "Chino", "Jeans" // Bottoms
];

// Women Types
const womenTypes = [
  "Slip Dress", "Gown", "Maxi Dress", "Wrap Dress", // Dresses
  "Blouse", "Cardigan", "Top", // Tops
  "Skirt", // Skirts
  "Kimono", "Traditional Set", "Saree", "Kaftan" // Traditional
];

// Accessory Types
const accTypes = [
  "Tote", "Clutch", "Satchel", "Weekender", "Wallet", // Bags
  "Chronograph", "Watch", // Watches
  "Sunglasses", "Shades" // Glasses
];

// Footwear Types
const footwearTypes = [
  "Sneaker", "Runner", "High Top", // Sneakers
  "Boot", "Chelsea Boot", "Derby", "Monk Strap", "Loafer", // Boots/Leather
  "Heels", "Sandal", "Pump" // Heels
];

// Image Collections
const menImagesCollection = [
  menImage, menShirtImage, menTShirtImage, menJeansImage, menSuitImage, menBootsImage,
  menStock1, menStock2, menStock3, menStock4, menStock5, 
  menStock6, menStock7, menStock8, menStock9, menStock10,
  menLife1, menLife2, menLife3, menLife4, menLife5
];

const womenImagesCollection = [
  womenImage, womenSkirtImage, womenBlouseImage, womenTraditionalImage, womenHeelsImage,
  womenStock1, womenStock2, womenStock3, womenStock4, womenStock5,
  womenStock6, womenStock7, womenStock8, womenStock9, womenStock10,
  womenLife1, womenLife2, womenLife3, womenLife4, womenLife5
];

const accImagesCollection = [
  watchImage, bagImage, sunglassesImage,
  accStock1, accStock2, accStock3, accStock4, accStock5,
  accStock6, accStock7, accStock8, accStock9, accStock10
];

const footwearImagesCollection = [
  sneakersImage, menBootsImage, womenHeelsImage,
  footStock1, footStock2, footStock3, footStock4, footStock5,
  footStock6, footStock7, footStock8, footStock9, footStock10
];

function getRandomImage(collection: string[]): string {
  return collection[Math.floor(Math.random() * collection.length)];
}

function generateCategoryProducts(category: string, count: number, startId: number): Product[] {
  const categoryProducts: Product[] = [];
  
  let types: string[] = [];
  let imageCollection: string[] = [];

  if (category === "Men") {
    types = menTypes;
    imageCollection = menImagesCollection;
  } else if (category === "Women") {
    types = womenTypes;
    imageCollection = womenImagesCollection;
  } else if (category === "Accessories") {
    types = accTypes;
    imageCollection = accImagesCollection;
  } else {
    types = footwearTypes;
    imageCollection = footwearImagesCollection;
  }

  for (let i = 0; i < count; i++) {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const mat = materials[Math.floor(Math.random() * materials.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    
    const name = `${adj} ${mat} ${type}`;
    // Assign a random image from the collection for this category
    // This ensures variety even if the "type" matches
    const image = getRandomImage(imageCollection);

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
  { name: "Men's Collection", image: menLife1, link: "/shop?category=Men" },
  { name: "Women's Collection", image: womenLife1, link: "/shop?category=Women" },
  { name: "Accessories", image: accStock1, link: "/shop?category=Accessories" },
  { name: "Footwear", image: footStock1, link: "/shop?category=Footwear" },
];

export { heroImage };
