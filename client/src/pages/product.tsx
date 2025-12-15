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
import { WishlistDrawer } from "@/components/layout/WishlistDrawer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { motion } from "framer-motion";

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
    if (!selectedSize) {
      toast({
        title: "Select a Size",
        description: "Please choose a size before proceeding",
      });
      return;
    }
    toast({
      title: "Proceeding to Checkout",
      description: `Starting purchase for ${product.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black pb-20">
      <Navbar />
      <WishlistDrawer />
      <CartDrawer />
      
      <div className="container mx-auto px-4 pt-24 md:pt-28">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-800 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Left Column: Images (Sticky) */}
            <div className="md:col-span-5 p-8 border-b md:border-b-0 md:border-r border-gray-800 relative bg-gradient-to-b from-gray-900/50 to-black/50">
              <div className="absolute top-8 right-8 z-10 flex flex-col gap-3">
                <motion.button 
                  whileTap={{ scale: 0.8 }}
                  onClick={() => toggleItem(product)}
                  className={cn(
                    "h-14 w-14 rounded-full shadow-lg border transition-all flex items-center justify-center font-bold",
                    isLiked 
                      ? "bg-red-500/90 text-white border-red-400 shadow-red-500/30" 
                      : "bg-gray-800 text-gray-400 border-gray-700 hover:text-red-400 hover:border-red-400/50"
                  )}
                >
                  <Heart className={cn("h-7 w-7", isLiked && "fill-current")} />
                </motion.button>
                <button className="h-14 w-14 bg-gray-800 rounded-full shadow-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-400/50 transition-all hover:scale-110 font-bold">
                  <Share2 className="h-7 w-7" />
                </button>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-[4/5] w-full flex items-center justify-center p-8 sticky top-24"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-[500px] w-full object-contain hover:scale-110 transition-transform duration-500 drop-shadow-xl" 
                />
              </motion.div>
              
              <div className="flex flex-col gap-3 mt-8 px-4">
                <Button 
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 font-bold h-14 uppercase tracking-wide shadow-sm hover:shadow-md transition-all text-base rounded-xl"
                  onClick={() => addItem(product)}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold h-14 uppercase tracking-wide shadow-lg hover:shadow-orange-500/30 transition-all text-base rounded-xl"
                  onClick={handleBuyNow}
                >
                  <Zap className="mr-2 h-5 w-5 fill-current" />
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="md:col-span-7 p-8 md:p-10 bg-gradient-to-b from-gray-900/30 to-black/30">
              {/* Breadcrumb */}
              <div className="text-sm font-medium text-gray-500 mb-6 flex items-center gap-2">
                <span className="hover:text-orange-400 cursor-pointer transition-colors">Home</span> 
                <span className="text-gray-700">/</span> 
                <span className="hover:text-orange-400 cursor-pointer transition-colors">{product.category}</span> 
                <span className="text-gray-700">/</span> 
                <span className="text-gray-300 truncate max-w-[200px] font-semibold">{product.name}</span>
              </div>

              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
              >
                {product.name}
              </motion.h1>

              <div className="flex items-center gap-4 mb-8 flex-wrap">
                <div className="flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-bold border border-orange-500/30">
                  {rating} <Star className="h-4 w-4 fill-current" />
                </div>
                <span className="text-gray-400 text-sm font-medium">{reviewCount.toLocaleString()} Verified Ratings</span>
              </div>

              <div className="flex items-baseline gap-4 mb-10">
                <span className="text-5xl md:text-6xl font-black text-white">₹{product.price.toLocaleString()}</span>
                <span className="text-2xl text-gray-600 line-through font-medium">₹{originalPrice.toLocaleString()}</span>
                <span className="text-lg font-bold text-orange-400 bg-orange-500/20 px-4 py-2 rounded-lg border border-orange-500/30">{discount}% off</span>
              </div>

              {/* Size Selection */}
              {(product.category === "Men" || product.category === "Women" || product.category === "Footwear") && (
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-base font-bold text-white">Select Size</span>
                    <span className="text-sm font-bold text-orange-400 cursor-pointer hover:underline">Size Chart</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {sizes.map(size => (
                      <motion.button
                        key={size}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "h-12 w-12 rounded-xl border-2 text-base font-bold flex items-center justify-center transition-all",
                          selectedSize === size 
                            ? "border-orange-400 text-orange-400 bg-orange-500/20 shadow-lg shadow-orange-500/20" 
                            : "border-gray-700 text-gray-400 hover:border-orange-400 hover:text-orange-400 hover:bg-gray-800"
                        )}
                      >
                        {size}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              <div className="h-px bg-gray-800 w-full mb-10" />

              {/* Delivery Info */}
              <div className="mb-10">
                 <div className="flex flex-col gap-4">
                    <span className="text-base font-bold text-white">Delivery Options</span>
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                      <div className="relative flex-1 max-w-xs">
                        <input 
                          type="text" 
                          placeholder="Enter Pincode" 
                          className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg h-12 px-4 font-medium focus:outline-none focus:ring-2 focus:ring-orange-400/40 placeholder-gray-600"
                        />
                        <span className="text-sm font-bold text-orange-400 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:underline">Check</span>
                      </div>
                      <div className="text-sm">
                         <div className="flex items-center gap-2 mb-1 text-white font-bold">
                           <Truck className="h-4 w-4 text-orange-400" />
                           Free Delivery by Tomorrow
                         </div>
                         <p className="text-gray-400">Order within <span className="text-orange-400 font-bold">2 hrs 15 mins</span></p>
                      </div>
                    </div>
                 </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-orange-400/30 transition-all"
                  >
                     <ShieldCheck className="h-6 w-6 text-orange-400 mt-0.5 flex-shrink-0" />
                     <div>
                        <h4 className="font-bold text-white text-sm">Genuine Product</h4>
                        <p className="text-xs text-gray-500 mt-1">Sourced directly from brand</p>
                     </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-orange-400/30 transition-all"
                  >
                     <RotateCcw className="h-6 w-6 text-orange-400 mt-0.5 flex-shrink-0" />
                     <div>
                        <h4 className="font-bold text-white text-sm">7 Day Returns</h4>
                        <p className="text-xs text-gray-500 mt-1">Easy return & exchange policy</p>
                     </div>
                  </motion.div>
              </div>

              {/* Description */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-white mb-3">Product Description</h2>
                <div className="text-gray-400 leading-relaxed text-sm space-y-4">
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
