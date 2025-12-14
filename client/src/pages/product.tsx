import { useRoute } from "wouter";
import { products, Product } from "@/lib/products";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { useWishlist } from "@/lib/wishlist";
import { Star, ShoppingCart, Truck, RotateCcw, ShieldCheck, Heart, Share2, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import NotFound from "./not-found";
import { useToast } from "@/hooks/use-toast";

export default function ProductPage() {
  const [match, params] = useRoute("/product/:id");
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { toast } = useToast();

  if (!match || !params) return <NotFound />;

  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) return <NotFound />;

  // Mock discounts and ratings
  const discount = 45;
  const originalPrice = Math.floor(product.price / (1 - discount / 100));
  const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
  const reviewCount = Math.floor(Math.random() * 2000) + 50;

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const isLiked = isInWishlist(product.id);

  const handleBuyNow = () => {
    toast({
      title: "Proceeding to Checkout",
      description: `Starting purchase for ${product.name}`,
    });
    // In a real app, this would redirect to checkout
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 md:pt-28">
        <div className="bg-white shadow-lg border border-gray-100 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Left Column: Images (Sticky) */}
            <div className="md:col-span-5 p-6 border-b md:border-b-0 md:border-r border-gray-100 bg-white relative">
              <div className="absolute top-6 right-6 z-10 flex flex-col gap-3">
                <button 
                  onClick={() => toggleItem(product)}
                  className={cn(
                    "h-12 w-12 rounded-full shadow-md border border-gray-100 flex items-center justify-center transition-all hover:scale-110",
                    isLiked ? "bg-red-50 text-red-500 border-red-100" : "bg-white text-gray-400 hover:text-red-500"
                  )}
                >
                  <Heart className={cn("h-6 w-6", isLiked && "fill-current")} />
                </button>
                <button className="h-12 w-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-500 transition-all hover:scale-110">
                  <Share2 className="h-6 w-6" />
                </button>
              </div>
              
              <div className="aspect-[4/5] w-full flex items-center justify-center p-8 sticky top-20">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-[500px] w-full object-contain hover:scale-105 transition-transform duration-500 drop-shadow-xl" 
                />
              </div>
              
              <div className="flex justify-center gap-4 mt-8 px-4">
                <Button 
                  className="flex-1 bg-white hover:bg-gray-50 text-black border border-gray-200 font-bold h-14 uppercase tracking-wide shadow-sm hover:shadow-md transition-all text-base rounded-xl"
                  onClick={() => addItem(product)}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button 
                  className="flex-1 bg-primary hover:bg-blue-600 text-white font-bold h-14 uppercase tracking-wide shadow-lg hover:shadow-primary/30 transition-all text-base rounded-xl"
                  onClick={handleBuyNow}
                >
                  <Zap className="mr-2 h-5 w-5 fill-current" />
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="md:col-span-7 p-8 md:p-10 bg-white">
              {/* Breadcrumb-ish */}
              <div className="text-sm font-medium text-gray-400 mb-6 flex items-center gap-2">
                <span className="hover:text-primary cursor-pointer transition-colors">Home</span> 
                <span className="text-gray-300">/</span> 
                <span className="hover:text-primary cursor-pointer transition-colors">{product.category}</span> 
                <span className="text-gray-300">/</span> 
                <span className="text-gray-900 truncate max-w-[200px] font-semibold">{product.name}</span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                  {rating} <Star className="h-3.5 w-3.5 fill-current" />
                </div>
                <span className="text-gray-500 text-sm font-medium">{reviewCount.toLocaleString()} Verified Ratings</span>
              </div>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl md:text-5xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                <span className="text-xl text-gray-400 line-through font-medium">₹{originalPrice.toLocaleString()}</span>
                <span className="text-lg font-bold text-green-600 bg-green-50 px-3 py-1 rounded-lg">{discount}% off</span>
              </div>

              {/* Size Selection (if clothing) */}
              {(product.category === "Men" || product.category === "Women" || product.category === "Footwear") && (
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-base font-bold text-gray-900">Select Size</span>
                    <span className="text-sm font-bold text-primary cursor-pointer hover:underline">Size Chart</span>
                  </div>
                  <div className="flex gap-3">
                    {sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "h-12 w-12 rounded-xl border-2 text-base font-bold flex items-center justify-center transition-all",
                          selectedSize === size 
                            ? "border-primary text-primary bg-blue-50" 
                            : "border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="h-px bg-gray-100 w-full mb-8" />

              {/* Delivery Info */}
              <div className="mb-8">
                 <div className="flex flex-col gap-4">
                    <span className="text-base font-bold text-gray-900">Delivery Options</span>
                    <div className="flex items-center gap-4">
                      <div className="relative flex-1 max-w-xs">
                        <input 
                          type="text" 
                          placeholder="Enter Pincode" 
                          className="w-full bg-gray-50 border-gray-200 rounded-lg h-12 px-4 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                        <span className="text-sm font-bold text-primary absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:underline">Check</span>
                      </div>
                      <div className="text-sm text-gray-500">
                         <div className="flex items-center gap-2 mb-1 text-gray-900">
                           <Truck className="h-4 w-4 text-green-600" />
                           <span className="font-bold">Free Delivery</span> by Tomorrow
                         </div>
                         <p>Order within <span className="text-red-500 font-bold">2 hrs 15 mins</span></p>
                      </div>
                    </div>
                 </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                     <ShieldCheck className="h-6 w-6 text-primary mt-0.5" />
                     <div>
                        <h4 className="font-bold text-gray-900 text-sm">Genuine Product</h4>
                        <p className="text-xs text-gray-500 mt-1">Sourced directly from brand</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                     <RotateCcw className="h-6 w-6 text-primary mt-0.5" />
                     <div>
                        <h4 className="font-bold text-gray-900 text-sm">7 Day Returns</h4>
                        <p className="text-xs text-gray-500 mt-1">Easy return & exchange policy</p>
                     </div>
                  </div>
              </div>

              {/* Description */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h2 className="text-lg font-bold mb-3">Product Description</h2>
                <div className="text-gray-600 leading-relaxed text-sm space-y-4">
                  <p>{product.description}</p>
                  <p>
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
