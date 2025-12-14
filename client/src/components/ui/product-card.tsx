import { Product } from "@/lib/cart";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, ShoppingBag } from "lucide-react";
import { useLocation } from "wouter";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart();
  const [, setLocation] = useLocation();

  // Generate a random discount between 10% and 80%
  const discount = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
  // Calculate original price
  const originalPrice = Math.floor(product.price / (1 - discount / 100));

  return (
    <div 
      onClick={() => setLocation(`/product/${product.id}`)}
      className={cn(
        "group bg-white rounded-xl p-4 cursor-pointer relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100/50",
        className
      )}
    >
      
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {discount > 40 && (
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-sm shadow-sm">
            -{discount}%
          </span>
        )}
        {Math.random() > 0.8 && (
          <span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded-sm shadow-sm uppercase tracking-wider">
            New
          </span>
        )}
      </div>

      {/* Wishlist Icon */}
      <button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-400 hover:text-red-500 hover:bg-white shadow-sm transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
        <Heart className="h-4 w-4" />
      </button>

      {/* Image Container */}
      <div className="relative aspect-[4/5] w-full mb-4 overflow-hidden rounded-lg bg-gray-50/50 group-hover:bg-gray-100/50 transition-colors">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain mix-blend-multiply p-4 transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Quick Add Button on Image */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              addItem(product);
            }}
            size="sm"
            className="rounded-full bg-white text-black hover:bg-black hover:text-white shadow-lg font-semibold px-6 h-9"
          >
            <ShoppingBag className="mr-2 h-3 w-3" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2">
        <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{product.category}</div>
        <h3 className="font-semibold text-gray-900 leading-tight group-hover:text-primary transition-colors line-clamp-1" title={product.name}>
          {product.name}
        </h3>
        
        <div className="flex items-baseline gap-2 pt-1">
          <span className="font-bold text-lg text-gray-900">₹{product.price.toLocaleString()}</span>
          <span className="text-sm text-gray-400 line-through">₹{originalPrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
