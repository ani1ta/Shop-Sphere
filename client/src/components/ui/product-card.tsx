import { Product } from "@/lib/cart";
import { useCart } from "@/lib/cart";
import { useWishlist } from "@/lib/wishlist";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

const vibrantColors = [
  "bg-orange-400",
  "bg-blue-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-cyan-400",
  "bg-amber-400",
  "bg-teal-400",
  "bg-indigo-400",
];

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  const [, setLocation] = useLocation();

  const discount = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
  const originalPrice = Math.floor(product.price / (1 - discount / 100));
  const isLiked = isInWishlist(product.id);
  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const rating = Math.floor(Math.random() * 2) + 4;

  return (
    <motion.div 
      onClick={() => setLocation(`/product/${product.id}`)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group rounded-2xl p-6 relative transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center h-80",
        randomColor,
        className
      )}
    >
      
      {/* Discount Badge */}
      {discount > 40 && (
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          -{discount}%
        </span>
      )}

      {/* Wishlist Icon */}
      <motion.button 
        whileTap={{ scale: 0.8 }}
        onClick={(e) => {
          e.stopPropagation();
          toggleItem(product);
        }}
        className={cn(
          "absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm shadow-sm transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0",
          isLiked 
            ? "bg-red-50 text-red-500 opacity-100 translate-y-0" 
            : "bg-white/80 text-gray-400 hover:text-red-500 hover:bg-white"
        )}
      >
        <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
      </motion.button>

      {/* Image */}
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        src={product.image}
        alt={product.name}
        className="h-40 w-40 object-contain mix-blend-multiply drop-shadow-lg mb-4"
      />

      {/* Name */}
      <h3 className="font-bold text-white leading-tight line-clamp-2 mb-2 text-sm md:text-base" title={product.name}>
        {product.name}
      </h3>

      {/* Rating */}
      <div className="flex items-center justify-center gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-yellow-300 text-yellow-300" />
        ))}
        <span className="text-xs text-white font-bold ml-1">{rating}.{Math.floor(Math.random() * 10)}</span>
      </div>

      {/* Price */}
      <div className="mb-4">
        <span className="font-bold text-white text-lg">₹{product.price.toLocaleString()}</span>
        <span className="text-xs text-white/70 line-through ml-2">₹{originalPrice.toLocaleString()}</span>
      </div>

      {/* Button */}
      <Button
        onClick={(e) => {
          e.stopPropagation();
          addItem(product);
        }}
        className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Order Now
      </Button>
    </motion.div>
  );
}
