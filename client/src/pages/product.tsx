import { useRoute } from "wouter";
import { products, Product } from "@/lib/products";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { Star, ShoppingCart, Truck, RotateCcw, ShieldCheck, Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import NotFound from "./not-found";

export default function ProductPage() {
  const [match, params] = useRoute("/product/:id");
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!match || !params) return <NotFound />;

  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) return <NotFound />;

  // Mock discounts and ratings
  const discount = 45;
  const originalPrice = Math.floor(product.price / (1 - discount / 100));
  const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
  const reviewCount = Math.floor(Math.random() * 2000) + 50;

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-20">
        <div className="bg-white shadow-sm border border-gray-200 rounded-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Left Column: Images (Sticky) */}
            <div className="md:col-span-5 p-4 border-b md:border-b-0 md:border-r border-gray-200 bg-white relative">
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-3">
                <button className="h-10 w-10 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="h-10 w-10 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-500 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
              
              <div className="aspect-[4/5] w-full flex items-center justify-center p-8 sticky top-20">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-[500px] w-full object-contain hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <div className="flex justify-center gap-4 mt-8 px-4">
                <Button 
                  className="flex-1 bg-[#ff9f00] hover:bg-[#f39400] text-white font-bold h-12 uppercase"
                  onClick={() => addItem(product)}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button className="flex-1 bg-[#fb641b] hover:bg-[#e45b18] text-white font-bold h-12 uppercase">
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="md:col-span-7 p-6">
              {/* Breadcrumb-ish */}
              <div className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                <span>Home</span> &gt; <span>{product.category}</span> &gt; <span className="text-gray-900 truncate max-w-[200px]">{product.name}</span>
              </div>

              <h1 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded text-xs font-bold">
                  {rating} <Star className="h-3 w-3 fill-current" />
                </div>
                <span className="text-gray-500 text-sm font-medium">{reviewCount.toLocaleString()} Ratings & reviews</span>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="Assured" className="h-5" />
              </div>

              <div className="flex items-end gap-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                <span className="text-base text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
                <span className="text-base font-bold text-green-600">{discount}% off</span>
              </div>

              {/* Offers */}
              <div className="mb-6 space-y-2">
                <h3 className="font-bold text-sm mb-2">Available offers</h3>
                <div className="flex items-start gap-2 text-sm">
                   <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" className="h-4 w-4 mt-0.5" />
                   <span><span className="font-bold">Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                   <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" className="h-4 w-4 mt-0.5" />
                   <span><span className="font-bold">Bank Offer</span> 10% off on SBI Credit Card transactions, up to ₹1000</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                   <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" className="h-4 w-4 mt-0.5" />
                   <span><span className="font-bold">Special Price</span> Get extra 20% off (price inclusive of discount)</span>
                </div>
              </div>

              {/* Size Selection (if clothing) */}
              {(product.category === "Men" || product.category === "Women" || product.category === "Footwear") && (
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-medium text-gray-500 w-20">Size</span>
                    <span className="text-xs font-bold text-primary cursor-pointer">Size Chart</span>
                  </div>
                  <div className="flex gap-2 pl-24">
                    {sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "h-10 w-10 rounded border text-sm font-bold flex items-center justify-center transition-all",
                          selectedSize === size 
                            ? "border-primary text-primary bg-blue-50" 
                            : "border-gray-200 text-gray-900 hover:border-primary"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Delivery Info */}
              <div className="mb-6">
                 <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-medium text-gray-500 w-20">Delivery</span>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Enter Pincode" 
                        className="border-b-2 border-primary text-sm font-medium text-gray-900 w-40 pb-1 focus:outline-none placeholder:text-gray-400"
                      />
                      <span className="text-xs font-bold text-primary absolute right-0 bottom-1 cursor-pointer">Check</span>
                    </div>
                 </div>
                 <div className="pl-24 text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold">Delivery by 11 PM, Tomorrow</span>
                      <span className="text-green-600">| Free</span>
                      <span className="text-gray-500 line-through">₹40</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      if ordered before 5:59 PM
                    </p>
                 </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                 <div className="flex gap-4">
                    <span className="text-sm font-medium text-gray-500 w-20 flex-shrink-0">Highlights</span>
                    <ul className="text-sm space-y-2 list-disc pl-4 text-gray-800">
                      <li>Genuine Product</li>
                      <li>Contactless Delivery</li>
                      <li>High Quality Material</li>
                      <li>7 Day Return Policy</li>
                      <li>Cash on Delivery available</li>
                    </ul>
                 </div>
              </div>

              {/* Seller Info */}
              <div className="mb-6 border border-gray-100 p-4 rounded bg-gray-50/50">
                 <div className="flex gap-4">
                    <span className="text-sm font-medium text-gray-500 w-20 flex-shrink-0">Seller</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-primary">RetailNet</span>
                        <div className="flex items-center gap-1 bg-primary text-white px-1.5 py-0.5 rounded-sm text-[10px] font-bold">
                           4.8 <Star className="h-2 w-2 fill-current" />
                        </div>
                      </div>
                      <ul className="text-xs space-y-1 list-disc pl-4 text-gray-500 mt-2">
                        <li>7 Days Service Center Replacement/Repair</li>
                        <li>GST invoice available</li>
                      </ul>
                    </div>
                 </div>
              </div>

              {/* Description */}
              <div className="border border-gray-200 rounded-sm">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-lg font-bold">Product Description</h2>
                </div>
                <div className="p-4 text-sm text-gray-700 leading-relaxed">
                  <p>{product.description}</p>
                  <p className="mt-4">
                    Experience the perfect blend of style and comfort with this masterpiece. 
                    Whether you are heading to a party or a casual outing, this item will elevate your look. 
                    Made with high-quality materials to ensure durability and a premium feel.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
