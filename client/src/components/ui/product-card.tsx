import { Product } from "@/lib/cart";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className={cn("group cursor-pointer", className)}>
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0 bg-gradient-to-t from-black/50 to-transparent">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              addItem(product);
            }}
            className="w-full bg-white text-black hover:bg-white/90 rounded-none h-12 font-medium tracking-wide"
          >
            ADD TO BAG — ${product.price}
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-serif text-lg tracking-tight group-hover:underline decoration-1 underline-offset-4">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.category}</p>
      </div>
    </div>
  );
}
