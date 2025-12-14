import { Product } from "@/lib/cart";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart();

  // Generate a random discount between 10% and 80%
  const discount = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
  // Calculate original price
  const originalPrice = Math.floor(product.price / (1 - discount / 100));

  return (
    <div className={cn("group bg-white border border-transparent hover:shadow-lg hover:border-border/50 transition-all duration-200 rounded-sm p-4 flex flex-col items-center text-center cursor-pointer relative", className)}>
      
      {/* Wishlist Icon */}
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors" />
      </div>

      <div className="relative aspect-square w-full mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col items-center gap-1 w-full">
        <h3 className="font-medium text-sm text-gray-900 line-clamp-1 group-hover:text-primary transition-colors" title={product.name}>
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mt-1">
          <span className="font-bold text-base">₹{product.price.toLocaleString()}</span>
          <span className="text-xs text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
          <span className="text-xs font-bold text-accent">{discount}% off</span>
        </div>

        <div className="flex gap-1 text-[10px] text-gray-400 font-medium mt-1">
           {Math.random() > 0.5 && <span className="border border-gray-200 px-1 rounded">Free delivery</span>}
           {Math.random() > 0.7 && <span className="text-red-500 font-bold">Only {Math.floor(Math.random() * 5) + 1} left</span>}
        </div>
      </div>

      <Button
        onClick={(e) => {
          e.stopPropagation();
          addItem(product);
        }}
        className="w-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-blue-600 h-9 text-xs font-semibold uppercase tracking-wide rounded-sm"
      >
        Add to Cart
      </Button>
    </div>
  );
}
