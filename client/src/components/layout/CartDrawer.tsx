import { useCart } from "@/lib/cart";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

export function CartDrawer() {
  const { items, removeItem, updateQuantity, isOpen, setIsOpen, total } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:w-[540px] flex flex-col p-0 border-l border-gray-800 bg-gradient-to-b from-gray-950 to-black">
        <SheetHeader className="p-6 border-b border-gray-800 bg-gradient-to-r from-gray-950 via-black to-gray-950 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-orange-400" />
            <SheetTitle className="text-2xl font-bold text-white">Shopping Bag ({items.length})</SheetTitle>
          </div>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="h-24 w-24 bg-orange-400/10 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="h-12 w-12 text-orange-400/60" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Your bag is empty</h3>
            <p className="text-gray-400 mb-8 max-w-xs mx-auto">Add some amazing products to your cart and come back to checkout!</p>
            <Button onClick={() => setIsOpen(false)} className="bg-orange-400 text-black hover:bg-orange-500 rounded-full px-8 font-bold">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-6">
              <div className="flex flex-col gap-4">
                {items.map((item, idx) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-orange-400/50 transition-all"
                  >
                    <div className="h-24 w-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="h-full w-full object-contain p-2" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg text-white">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.category}</p>
                        </div>
                        <p className="font-bold text-orange-400">₹{item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-2 border border-gray-700 bg-gray-800/50 rounded-lg px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-gray-400 hover:text-orange-400 transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm text-white w-4 text-center font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-gray-400 hover:text-orange-400 transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-red-400 transition-colors text-sm font-medium flex items-center gap-1"
                        >
                          <Trash2 className="h-3 w-3" /> Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-6 border-t border-gray-800 bg-gradient-to-t from-black via-gray-900 to-gray-900">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-xl font-bold text-white">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Shipping & Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <Button className="w-full h-12 text-base font-bold rounded-lg bg-orange-400 text-black hover:bg-orange-500 transition-all shadow-lg">
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
