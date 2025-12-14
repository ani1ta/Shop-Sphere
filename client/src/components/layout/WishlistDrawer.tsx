import { useWishlist } from "@/lib/wishlist";
import { useCart } from "@/lib/cart";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingCart, Heart } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "wouter";

export function WishlistDrawer() {
  const { items, removeItem, isOpen, setIsOpen } = useWishlist();
  const { addItem: addToCart } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:w-[540px] flex flex-col p-0 border-l border-border/40">
        <SheetHeader className="p-6 border-b border-border/40 bg-background/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-red-500 fill-red-500" />
            <SheetTitle className="font-serif text-2xl font-normal">Your Wishlist ({items.length})</SheetTitle>
          </div>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
            <div className="h-24 w-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-red-200" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
            <p className="mb-8 max-w-xs mx-auto">Save items you love to your wishlist and revisit them anytime.</p>
            <Button variant="default" className="rounded-full px-8" onClick={() => setIsOpen(false)}>Start Shopping</Button>
          </div>
        ) : (
          <ScrollArea className="flex-1 p-6">
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.id} className="group flex gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all">
                  <Link href={`/product/${item.id}`} onClick={() => setIsOpen(false)}>
                    <div className="h-24 w-24 rounded-lg bg-gray-50 flex-shrink-0 overflow-hidden cursor-pointer">
                      <img src={item.image} alt={item.name} className="h-full w-full object-contain mix-blend-multiply p-2" />
                    </div>
                  </Link>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <Link href={`/product/${item.id}`} onClick={() => setIsOpen(false)}>
                          <h3 className="font-medium text-lg text-gray-900 cursor-pointer hover:text-primary transition-colors line-clamp-1">{item.name}</h3>
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                    
                    <div className="flex justify-between items-end mt-2">
                      <span className="font-bold text-lg">₹{item.price.toLocaleString()}</span>
                      
                      <Button 
                        size="sm" 
                        className="rounded-full bg-primary hover:bg-blue-600 text-white shadow-sm"
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        <ShoppingCart className="h-3 w-3 mr-2" />
                        Move to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </SheetContent>
    </Sheet>
  );
}
