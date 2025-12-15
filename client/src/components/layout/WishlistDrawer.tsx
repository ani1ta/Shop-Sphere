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
import { motion } from "framer-motion";

export function WishlistDrawer() {
  const { items, removeItem, isOpen, setIsOpen } = useWishlist();
  const { addItem: addToCart } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:w-[540px] flex flex-col p-0 border-l border-gray-800 bg-gradient-to-b from-gray-950 to-black">
        <SheetHeader className="p-6 border-b border-gray-800 bg-gradient-to-r from-gray-950 via-black to-gray-950 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-red-500 fill-red-500" />
            <SheetTitle className="text-2xl font-bold text-white">Wishlist ({items.length})</SheetTitle>
          </div>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="h-24 w-24 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-red-500/60 fill-red-500/60" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Your wishlist is empty</h3>
            <p className="text-gray-400 mb-8 max-w-xs mx-auto">Save items you love and come back to them anytime!</p>
            <Button onClick={() => setIsOpen(false)} className="bg-orange-400 text-black hover:bg-orange-500 rounded-full px-8 font-bold">
              Start Shopping
            </Button>
          </div>
        ) : (
          <ScrollArea className="flex-1 p-6">
            <div className="flex flex-col gap-4">
              {items.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-orange-400/50 transition-all"
                >
                  <Link href={`/product/${item.id}`} onClick={() => setIsOpen(false)}>
                    <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex-shrink-0 overflow-hidden cursor-pointer flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="h-full w-full object-contain p-2" />
                    </div>
                  </Link>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <Link href={`/product/${item.id}`} onClick={() => setIsOpen(false)}>
                          <h3 className="font-bold text-white cursor-pointer hover:text-orange-400 transition-colors line-clamp-2 text-sm md:text-base">{item.name}</h3>
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-600 hover:text-red-500 transition-colors p-1 flex-shrink-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500">{item.category}</p>
                    </div>
                    
                    <div className="flex justify-between items-end mt-2 gap-2">
                      <span className="font-bold text-lg text-orange-400">₹{item.price.toLocaleString()}</span>
                      
                      <Button 
                        size="sm" 
                        className="rounded-lg bg-orange-400 text-black hover:bg-orange-500 font-bold text-xs"
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        <ShoppingCart className="h-3 w-3 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        )}
      </SheetContent>
    </Sheet>
  );
}
